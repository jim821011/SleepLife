<template>
  <div>
    <div class="text-right mt-4">
      <button
        class="btn btn-primary"
        @click="openModal(true)"
      >
        新建立的優惠券
      </button>
    </div>
    <loading :active.sync="isLoading">
      <div class="loading-animated">
        <div class="loading-animated-circle">
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </loading>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th
            width="100"
          >
            折扣百分比
          </th>
          <th>到期日</th>
          <th
            width="100"
          >
            是否啟用
          </th>
          <th
            width="120"
          >
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in coupons"
          :key="item.code"
        >
          <td>{{ item.title }}</td>
          <td
            class="text-right"
          >
            {{ item.percent }}
          </td>
          <td>{{ item.due_date | DateFilter }}</td>
          <td>
            <span
              v-if="item.is_enabled === 1"
              class="text-success"
            >
              已啟用
            </span>
            <span
              v-else
              class="text-danger"
            >
              未啟用
            </span>
          </td>
          <td>
            <button
              class="btn btn-outline-primary btn-sm"
              @click="openModal(false, item)"
            >
              編輯
            </button>
            <button
              class="btn btn-outline-danger btn-sm"
              @click="deleteModal(item)"
            >
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <pagination
      :page="pagination"
      @changePage="getCoupon"
    />

    <!-- Modal -->
    <div
      id="couponModel"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog"
        role="document"
      >
        <div
          class="modal-content
          border-0"
        >
          <div
            class="modal-header bg-dark text-white"
          >
            <h5
              id="exampleModalLabel"
              class="modal-title"
            >
              <span>新增優惠券</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col">
                <div class="form-group">
                  <label for="title">名稱</label>
                  <input
                    id="title"
                    v-model="coupon.title"
                    type="text"
                    class="form-control"
                    placeholder="請輸入名稱"
                  >
                </div>

                <div class="form-row">
                  <div class="form-group col">
                    <label for="percent">折扣百分比</label>
                    <input
                      id="percent"
                      v-model="coupon.percent"
                      type="text"
                      class="form-control"
                      placeholder="請輸入折扣百分比"
                    >
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col">
                    <label for="due_date">有效天數</label>
                    <input
                      id="due_date"
                      v-model="coupon.due_date"
                      type="number"
                      class="form-control"
                      placeholder="請輸入有效天數"
                    >
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col">
                    <label for="code">優惠代碼</label>
                    <input
                      id="code"
                      v-model="coupon.code"
                      type="text"
                      class="form-control"
                      placeholder="請輸入優惠碼"
                    >
                  </div>
                </div>
                <hr>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      id="is_enabled"
                      v-model="coupon.is_enabled"
                      type="checkbox"
                      class="form-check-input"
                      :true-value="1"
                      :false-value="0"
                    >
                    <label
                      class="form-check-label"
                      for="is_enabled"
                    >
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateCoupon"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      id="delCouponModal"
      role="dialog"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog"
        role="document"
      >
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5
              id="exampleModalLabel"
              class="modal-title"
            >
              <span>刪除優惠券</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger" /> 優惠券(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteCoupon"
            >
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Pagination from '@/components/Pagiation.vue';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      coupons: [],
      coupon: {},
      isLoading: false,
      pagination: {},
      isNew: false,
    };
  },
  created() {
    this.iconChange();
    this.getCoupon();
  },
  methods: {
    getCoupon(page = 1) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${page}`;
      vm.isLoading = true;
      vm.$http.get(api).then((res) => {
        vm.coupons = res.data.coupons;
        vm.pagination = res.data.pagination;
        vm.isLoading = false;
      });
    },
    iconChange() {
      this.$bus.$emit('iconChangeActive', '優惠券');
    },
    updateCoupon() {
      const vm = this;
      let api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`;
      let modalType = 'post';
      const nowDate = Math.round(new Date().getTime() / 1000);
      const coupon = {
        title: vm.coupon.title,
        percent: vm.coupon.percent,
        code: vm.coupon.code,
        is_enabled: vm.coupon.is_enabled,
        due_date: vm.coupon.due_date * 86400 + nowDate,
      };
      vm.isLoading = true;
      if (!vm.isNew) {
        api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.coupon.id}`;
        modalType = 'put';
      }
      vm.$http[modalType](api, { data: coupon }).then(() => {
        $('#couponModel').modal('hide');
        vm.isLoading = false;
        vm.getCoupon();
      });
    },
    openModal(isNew, item) {
      $('#couponModel').modal('show');
      if (isNew) {
        this.coupon = {};
        this.isNew = true;
      } else {
        this.coupon = { ...item };
        this.coupon.due_date = Math.ceil(
          (this.coupon.due_date - Math.round(new Date().getTime() / 1000))
            / 86400,
        );
        this.isNew = false;
      }
    },
    deleteCoupon() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.coupon.id}`;
      vm.isLoading = true;
      vm.$http.delete(api).then(() => {
        vm.isLoading = false;
        $('#delCouponModal').modal('hide');
        vm.getCoupon();
      });
    },
    deleteModal(item) {
      $('#delCouponModal').modal('show');
      this.coupon = item;
    },
  },
};
</script>
