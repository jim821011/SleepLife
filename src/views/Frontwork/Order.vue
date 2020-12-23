<template>
  <div>
    <loading :active.sync="isLoading">
      <div class="loadingio-spinner-ellipsis-aby2qqypx7">
        <div class="ldio-gx7c5s03jv">
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </loading>
    <div class="mt-9 mb-5">
      <div class="container px-0 px-md-3">
        <div class="row no-gutters">
          <div
            id="form-list"
            class="col-md-8 h-100"
          >
            <div class="bg-primary px-4 pt-4 text-white">
              <h2 class="m-0 font-weight-bolder text-center">
                基本資料
              </h2>
            </div>

            <validation-observer v-slot="{ invalid }">
              <form
                class="bg-primary p-4 font-weight-bolder text-white font-20"
                @submit.prevent="createOrder"
              >
                <validation-provider
                  v-slot="{ errors }"
                  rules="required"
                >
                  <!-- 姓名 -->
                  <div class="form-row">
                    <div class="col">
                      <div class="form-group">
                        <label for="name">姓名</label>
                        <input
                          id="name"
                          v-model="form.user.name"
                          type="text"
                          class="form-control form-control-lg"
                          placeholder="請輸入姓名"
                          name="姓名"
                          :class="{ 'is-invalid': errors[0] }"
                        >
                        <!-- 錯誤訊息 -->
                        <span class="invalid-feedback">{{ errors[0] }}</span>
                      </div>
                    </div>
                  </div>
                  <!-- 姓名end -->
                </validation-provider>

                <validation-provider
                  v-slot="{ errors }"
                  rules="required|email"
                >
                  <!-- Email -->
                  <div class="form-row">
                    <div class="col">
                      <div class="form-group">
                        <label for="email">電子信箱</label>
                        <input
                          id="email"
                          v-model="form.user.email"
                          type="email"
                          class="form-control form-control-lg"
                          placeholder="請輸入電子信箱"
                          name="電子信箱"
                          :class="{ 'is-invalid': errors[0] }"
                        >
                        <!-- 錯誤訊息 -->
                        <span class="invalid-feedback">{{ errors[0] }}</span>
                      </div>
                    </div>
                  </div>
                  <!-- Email end -->
                </validation-provider>

                <validation-provider
                  v-slot="{ errors }"
                  rules="required"
                >
                  <!-- 電話 -->
                  <div class="form-group">
                    <label for="phone">電話</label>
                    <input
                      id="phone"
                      v-model="form.user.tel"
                      type="text"
                      class="form-control form-control-lg"
                      placeholder="請輸入電話"
                      name="電話"
                      :class="{ 'is-invalid': errors[0] }"
                    >
                    <!-- 錯誤訊息 -->
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                  </div>
                  <!-- 電話end -->
                </validation-provider>

                <validation-provider
                  v-slot="{ errors }"
                  rules="required"
                >
                  <!-- 地址 -->
                  <div class="form-group">
                    <label for="address">地址</label>
                    <input
                      id="address"
                      v-model="form.user.address"
                      type="text"
                      class="form-control form-control-lg mt-2"
                      placeholder="請輸入完整地址"
                      name="地址"
                      :class="{ 'is-invalid': errors[0] }"
                    >
                    <!-- 錯誤訊息 -->
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                  </div>
                  <!-- 地址end -->
                </validation-provider>

                <!-- 留言 -->
                <div class="form-group">
                  <label for="comment">留言</label>
                  <textarea
                    id="comment"
                    v-model="form.message"
                    name=""
                    class="form-control"
                    cols="30"
                    rows="5"
                  />
                </div>
                <!-- 留言end -->
                <div class="d-flex justify-content-end">
                  <button
                    type="submit"
                    :disabled="invalid"
                    class="btn btn-main-l w-50 py-3 text-primary font-24 font-weight-bolder"
                  >
                    送出訂單
                  </button>
                </div>
              </form>
            </validation-observer>
          </div>

          <div
            id="book-list"
            class="col-md-4"
          >
            <div class="ml-0 mt-5 ml-md-3 mt-md-0">
              <div>
                <h2
                  class="text-center py-3 bg-main-l font-24 text-primary font-weight-bolder m-0"
                >
                  訂單摘要
                </h2>
                <div class="border border-top-0 p-3">
                  <div class="d-flex justify-content-between text-primary">
                    <span>小計</span>
                    <span>NT$ {{ noCouponPrice }}</span>
                  </div>
                  <div class="d-flex align-item-center text-primary my-2">
                    <div class="w-100 mr-2">
                      <input
                        v-model="coupon"
                        type="text"
                        class="form-control form-control-sm w-100"
                      >
                    </div>
                    <div class="coupon-btn ml-auto">
                      <button
                        class="btn btn-main-l btn-sm w-100"
                        @click="useCoupon"
                      >
                        套用
                      </button>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between text-primary">
                    <span>優惠折抵</span>
                    <span>NT$ {{ noCouponPrice - totalPrice }}</span>
                  </div>
                  <span
                    v-if="noCouponPrice > totalPrice"
                    class="text-danger d-block"
                  >
                    已套用優惠券
                  </span>
                  <span
                    v-if="noCouponPrice > totalPrice"
                    class="text-danger d-block"
                  >
                    若有更高的優惠折扣可再次輸入
                  </span>
                  <div
                    class="d-flex justify-content-between
                    text-primary font-20 mt-3 font-weight-bolder"
                  >
                    <span>總計</span>
                    <span>NT$ {{ totalPrice }}</span>
                  </div>
                </div>
              </div>
              <div class="mt-3">
                <h2
                  class="text-center py-3 bg-main-l font-24 text-primary font-weight-bolder m-0"
                >
                  購物清單
                </h2>
                <div
                  id="order-list"
                  class="border border-top-0 px-3 pb-3 overflow-auto"
                >
                  <div
                    v-for="item in carts.carts"
                    :key="item.id"
                    class="pt-3 d-flex align-items-center"
                  >
                    <div
                      class="bg-cover w-50 mr-3"
                      :style="{
                        backgroundImage: `url(${item.product.imageUrl})`,
                        height: `80px`,
                      }"
                    />
                    <div class="d-flex flex-column w-50 text-primary">
                      <span>
                        {{ item.product.title }}（{{ item.qty
                        }}{{ item.product.unit }}）
                      </span>
                      <span class="font-20">NT$ {{ item.final_total }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      carts: [],
      noCouponPrice: 0,
      totalPrice: 0,
      coupon: '',
      form: {
        user: {
          email: '',
          name: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  created() {
    this.getCart();
  },
  methods: {
    getCart() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.isLoading = true;
      vm.$http.get(api).then((res) => {
        vm.carts = res.data.data;
        vm.noCouponPrice = res.data.data.total;
        vm.totalPrice = res.data.data.final_total;
        vm.isLoading = false;
      });
    },
    useCoupon() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      vm.isLoading = true;
      vm.$http.post(api, { data: { code: vm.coupon } }).then((res) => {
        if (res.data.success === false) {
          vm.$bus.$emit('message:push', '優惠券輸入有誤', 'danger');
          vm.isLoading = false;
        } else {
          vm.$bus.$emit('message:push', '已成功輸入優惠券', 'success');
          vm.totalPrice = res.data.data.final_total;
          vm.isLoading = false;
        }
      });
    },
    createOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      if (vm.carts.carts.length === 0) {
        return;
      }
      vm.isLoading = true;
      const order = vm.form;
      vm.$http.post(api, { data: order }).then((res) => {
        vm.isLoading = false;
        if (res.data.success) {
          vm.$router.push(`order_detail/${res.data.orderId}`);
        }
        vm.getCart();
      });
    },
  },
};
</script>

<style>
.coupon-btn {
  min-width: 50px;
}
</style>
