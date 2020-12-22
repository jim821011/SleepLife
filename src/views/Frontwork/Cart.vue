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
    <div class="mt-8 mb-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col mt-9" v-if="cartLen === 0">
            <h2 class="text-center text-primary font-weight-bolder">
              購物車內無商品
            </h2>
            <div class="text-center mt-5">
              <a
                href="#"
                @click.prevent="selectList('')"
                class="btn btn-primary font-weight-bolder"
              >
                <i class="fas fa-angle-double-left"></i>
                繼續選購
              </a>
            </div>
          </div>
          <div class="col-md-10" v-else>
            <h2 class="text-primary font-weight-bolder">已選擇商品</h2>
            <div
              class="d-flex flex-column flex-md-row align-items-md-center mt-4 text-primary"
              v-for="item in carts.carts"
              :key="item.id"
            >
              <div class="d-flex flex-grow-1">
                <div
                  class="cart-img bg-cover mr-3 flex-grow-1 flex-md-grow-0"
                  :style="{ backgroundImage: `url(${item.product.imageUrl})` }"
                ></div>
                <div
                  class="d-flex flex-column flex-md-row align-items-md-center flex-md-grow-1"
                >
                  <div class="mr-auto">
                    <h5 class="font-weight-bolder">{{ item.product.title }}</h5>
                    <span
                      >NT$ {{ item.product.price }}/{{
                        item.product.unit
                      }}</span
                    >
                  </div>
                  <div class="cart-form">
                    <button
                      class="btn btn-light border-main-l btn-lg text-primary"
                      @click="reduceToCart(item)"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      class="border-main-l cart-input"
                      :value="item.qty"
                      disabled
                    />
                    <button
                      class="btn btn-light border-main-l btn-lg text-primary"
                      @click="addToCart(item)"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div
                class="d-flex align-items-center cart-price ml-md-3 pt-3 mt-3 p-md-0 mt-md-0"
              >
                <button
                  class="btn btn-danger btn-sm d-block d-md-none"
                  @click.prevent="deletCart(item.id)"
                >
                  刪除
                </button>
                <strong class="ml-auto">NT$ {{ item.final_total }}</strong>
              </div>
              <a
                href="#"
                @click.prevent="deletCart(item.id)"
                class="btn d-none d-md-block text-danger"
              >
                <i class="fas fa-trash"></i>
              </a>
            </div>
            <div
              class="d-flex mt-5 justify-content-end align-items-center border-top pt-3"
            >
              <span class="text-primary font-weight-bolder mr-3"
                >總金額 : NT$ {{ totalPrice }}</span
              >
              <router-link to="/order" class="btn btn-primary d-block"
                >結帳去</router-link
              >
            </div>
          </div>
        </div>

        <h2 class="mt-5 text-primary font-weight-bolder">商品導覽</h2>
        <div class="row mt-3">
          <div class="col-md-4">
            <div class="product-card mb-4 mb-md-0">
              <a href="#" @click.prevent="selectList('')">
                <div class="product-intro product-img-1">
                  <div
                    class="product-intro-filter d-flex justify-content-center h-100 align-items-center"
                  >
                    全部寢具
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="product-card mb-4 mb-md-0">
              <a href="#" @click.prevent="selectList('床墊')">
                <div class="product-intro product-img-2">
                  <div
                    class="product-intro-filter d-flex justify-content-center h-100 align-items-center"
                  >
                    床墊
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="product-card mb-4 mb-md-0">
              <a href="#" @click.prevent="selectList('枕頭')">
                <div class="product-intro product-img-3">
                  <div
                    class="product-intro-filter d-flex justify-content-center h-100 align-items-center"
                  >
                    枕頭
                  </div>
                </div>
              </a>
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
      cartLen: "",
      totalPrice: 0,
    };
  },
  created() {
    this.getCart();
  },
  computed: {},
  methods: {
    getCart() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.isLoading = true;
      vm.$http.get(api).then((res) => {
        vm.carts = res.data.data;
        vm.cartLen = res.data.data.carts.length;
        vm.totalPrice = res.data.data.final_total;
        vm.isLoading = false;
      });
    },
    deletCart(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      vm.$http.delete(api).then(() => {
        vm.getCart();
      });
    },
    addToCart(item) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.deletCart(item.id);
      vm.isLoading = true;
      vm.$http
        .post(api, {
          data: {
            product_id: `${item.product.id}`,
            qty: `${Number(item.qty) + 1}`,
          },
        })
        .then(() => {
          vm.isLoading = false;
          vm.getCart();
        });
    },
    reduceToCart(item) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.deletCart(item.id);
      if (Number(item.qty) <= 1) {
        return;
      }
      vm.isLoading = true;
      vm.$http
        .post(api, {
          data: {
            product_id: `${item.product.id}`,
            qty: `${Number(item.qty) - 1}`,
          },
        })
        .then(() => {
          vm.isLoading = false;
          vm.getCart();
        });
    },
    selectList(list) {
      this.$router.push({
        name: "Production",
        params: {
          list: list,
        },
      });
    },
  },
};
</script>

<style lang="scss">
.product-img-1 {
  background-image: url(../../assets/images/product_1.jpg);
}
.product-img-2 {
  background-image: url(../../assets/images/product_2.jpg);
}
.product-img-3 {
  background-image: url(../../assets/images/product_3.jpg);
}
</style>