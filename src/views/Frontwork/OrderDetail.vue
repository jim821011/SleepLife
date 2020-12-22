<template>
  <div>
    <loading :active.sync="isLoading">
      <div class="loadingio-spinner-ellipsis-aby2qqypx7">
        <div class="ldio-gx7c5s03jv">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </loading>
    <div class="mt-9 mb-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <form class="shadow p-4" @submit.prevent="payOrder">
              <h2 class="text-center font-weight-bolder mb-5">確認付款</h2>

              <table class="table table-borderless mb-5">
                <thead class="bg-main-l">
                  <tr>
                    <th>品名</th>
                    <th width="100">數量</th>
                    <th width="120" class="text-right">總價</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in order.products" :key="item.id">
                    <td class="font-weight-bolder">{{ item.product.title }}</td>
                    <td>{{ item.qty }}/{{ item.product.unit }}</td>
                    <td class="text-right">${{ item.final_total }}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="2" class="text-right">總計</td>
                    <td class="text-right">${{ order.total }}</td>
                  </tr>
                </tfoot>
              </table>

              <table class="table mb-5">
                <tbody>
                  <tr>
                    <th width="130">Email</th>
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
                    <td class="text-danger" v-if="!order.is_paid">尚未付款</td>
                    <td class="text-success" v-else>已付款</td>
                  </tr>
                </tbody>
              </table>

              <div class="text-right">
                <button
                  v-if="!order.is_paid"
                  type="submit"
                  class="btn btn-main-l"
                >
                  確認付款
                </button>
                <router-link v-else to="/production" class="btn btn-primary"
                  >繼續選購</router-link
                >
              </div>
            </form>
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
      orderId: "",
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
          vm.isLoading = false;
        } else {
          console.log("付款失敗");
          vm.isLoading = false;
        }
      });
    },
  },
};
</script>

<style>
</style>