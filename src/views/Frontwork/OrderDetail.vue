<template>
  <div>
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
    <div class="mt-5 mb-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <form
              class="shadow p-4"
              @submit.prevent="payOrder"
            >
              <h2 class="text-center font-weight-bolder mb-5">
                確認付款
              </h2>

              <table class="table table-borderless mb-5">
                <thead class="bg-main-light">
                  <tr>
                    <th>
                      品名
                    </th>
                    <th>
                      數量
                    </th>
                    <th
                      class="text-right"
                    >
                      總價
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in order.products"
                    :key="item.id"
                  >
                    <td
                      class="font-weight-bolder"
                    >
                      {{ item.product.title }}
                    </td>
                    <td>{{ item.qty }}/{{ item.product.unit }}</td>
                    <td
                      class="text-right"
                    >
                      ${{ item.final_total }}
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td
                      colspan="2"
                      class="text-right"
                    >
                      總計
                    </td>
                    <td
                      class="text-right"
                    >
                      ${{ order.total }}
                    </td>
                  </tr>
                </tfoot>
              </table>

              <table class="table mb-5">
                <tbody>
                  <tr>
                    <th
                      width="130"
                    >
                      Email
                    </th>
                    <td>{{ order.user.email }}</td>
                  </tr>
                  <tr>
                    <th>姓名</th>
                    <td>{{ order.user.name }}</td>
                  </tr>
                  <tr>
                    <th>收件人電話</th>
                    <td>{{ order.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>收件人地址</th>
                    <td>{{ order.user.address }}</td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td
                      v-if="!order.is_paid"
                      class="text-danger"
                    >
                      尚未付款
                    </td>
                    <td
                      v-else
                      class="text-success"
                    >
                      已付款
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="text-right">
                <button
                  v-if="!order.is_paid"
                  type="submit"
                  class="btn btn-main-light"
                >
                  確認付款
                </button>
                <router-link
                  v-else
                  to="/production"
                  class="btn btn-primary"
                >
                  繼續選購
                </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      id="payModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="payModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header border-0">
            <h5
              id="exampleModalLabel"
              class="modal-title text-primary font-weight-bolder"
            >
              結帳成功
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
          <div class="modal-footer border-0">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              查看明細
            </button>
            <router-link
              :to="{ name: 'Index' }"
              class="btn btn-primary"
              data-dismiss="modal"
            >
              回首頁
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      orderId: '',
      order: {
        user: {},
      },
      isLoading: false,
    };
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
  methods: {
    getOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.orderId}`;
      vm.isLoading = true;
      vm.$http.get(api).then((res) => {
        vm.order = res.data.order;
        vm.isLoading = false;
      });
    },
    payOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/pay/${vm.orderId}`;
      vm.isLoading = true;
      vm.$http.post(api).then((res) => {
        if (res.data.success) {
          vm.getOrder();
          $('#payModal').modal('show');
          vm.isLoading = false;
        } else {
          vm.$bus.$emit('message:push', '付款失敗', 'danger');
          vm.isLoading = false;
        }
      });
    },
  },
};
</script>

<style lang="scss">
</style>
