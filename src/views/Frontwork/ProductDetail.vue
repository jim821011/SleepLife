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
    <div class="mt-4 mb-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div
              class="bg-cover"
              :style="{
                backgroundImage: `url(${product.imageUrl})`,
                height: `400px`,
              }"
            />
          </div>
          <div class="col-md-6">
            <div class="d-flex flex-column h-100">
              <div class="d-flex align-items-center mb-5 mt-3 mt-md-0">
                <h2 class="title m-0 text-primary font-weight-bolder">
                  {{ product.title }}
                </h2>
                <a
                  href="#"
                  class="ml-3"
                  title="關注"
                  @click.prevent="setAttention"
                >
                  <i
                    class="fas fa-star fa-2x"
                    :class="{ 'text-warning': starOpen }"
                  />
                </a>
              </div>
              <span
                class="mb-3 text-primary"
              >商品內容 : {{ product.description }}</span>
              <p class="content">
                {{ product.content }}
              </p>
              <span
                class="mt-auto mb-3 text-right text-primary font-24"
              >NT$ {{ product.price }}</span>
              <select
                v-model="productNum"
                class="form-control w-100 mb-3"
              >
                <option
                  value=""
                  disabled
                  selected
                >
                  請選擇購買數量
                </option>
                <option
                  v-for="num in 10"
                  :key="num"
                  :value="num"
                >
                  購入 {{ num }} {{ product.unit }}
                </option>
              </select>
              <div class="d-flex align-items-center">
                <small>小記 : NT$ {{ product.price * productNum }}</small>
                <button
                  class="w-50 btn btn-outline-primary ml-auto"
                  @click="addToCart"
                >
                  <i
                    v-if="status.loadingItem === product.id"
                    class="fas fa-spinner fa-spin"
                  />
                  加到購物車
                </button>
              </div>
            </div>
          </div>
        </div>

        <h2 class="mt-5 text-primary font-weight-bolder">
          你可能有興趣
        </h2>
        <div class="row mt-3">
          <div
            v-for="item in productFilter"
            :key="item.id"
            class="col-md-4"
          >
            <div class="tool-card mb-4 mb-md-0">
              <a
                href="#"
                @click.prevent="changeRoute(item)"
              >
                <div
                  class="bg-cover"
                  :style="{
                    backgroundImage: `url(${item.imageUrl})`,
                    height: `315px`,
                  }"
                >
                  <div
                    class="production-img d-flex justify-content-center h-100 align-items-center"
                  >
                    商品資訊
                  </div>
                </div>
              </a>
              <div
                class="d-flex flex-column text-center text-primary tool-card-item border-bottom"
              >
                <span class="h5 py-3 m-0">{{ item.title }}</span>
                <strong class="h5 pb-3 m-0">NT$ {{ item.price }}</strong>
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
      productId: '',
      product: {},
      products: [],
      productNum: '',
      carts: [],
      status: {
        loadingItem: '',
      },
      attentionArr: JSON.parse(localStorage.getItem('attention')) || [],
      attentionStar: false,
    };
  },
  computed: {
    productFilter() {
      const filterArr = [];
      this.products.forEach((item) => {
        if (filterArr.length >= 3) {
          return;
        }
        if (this.product.title === item.title) {
          return;
        }
        if (this.product.category === item.category) {
          filterArr.push(item);
        }
      });
      return filterArr;
    },
    starOpen() {
      this.attentionArr.forEach((item) => {
        if (item === this.product.id) {
          this.attentionStar = true;
        } else {
          this.attentionStar = false;
        }
      });
      return this.attentionStar;
    },
  },
  created() {
    this.productId = this.$route.params.id;
    this.getProduct();
    this.getAllProducts();
    this.getCart();
  },
  methods: {
    getProduct() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/product/${vm.productId}`;
      vm.isLoading = true;
      vm.$http.get(api).then((res) => {
        vm.product = res.data.product;
        vm.isLoading = false;
      });
    },
    getAllProducts() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      vm.isLoading = true;
      vm.$http.get(api).then((res) => {
        vm.products = res.data.products;
        vm.isLoading = false;
      });
    },
    changeRoute(item) {
      const vm = this;
      vm.$router.push({
        name: 'ProductDetail',
        params: { id: item.id },
      });
      vm.productId = vm.$route.params.id;
      vm.getProduct();
    },
    setAttention() {
      const vm = this;
      const index = vm.attentionArr.indexOf(vm.product.id);
      if (index === -1) {
        vm.attentionStar = true;
        vm.attentionArr.push(vm.product.id);
        vm.$bus.$emit('message:push', '已加入關注', 'success');
      } else {
        vm.attentionStar = false;
        vm.attentionArr.splice(index, 1);
        vm.$bus.$emit('message:push', '已取消關注', 'danger');
      }
      localStorage.setItem('attention', JSON.stringify(this.attentionArr));
    },
    getCart() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.$http.get(api).then((res) => {
        vm.carts = res.data.data;
      });
    },
    addToCart() {
      const vm = this;
      let num = 0;
      vm.carts.carts.forEach((e) => {
        if (e.product.id === vm.product.id) {
          num += 1;
        }
      });
      if (num >= 1) {
        vm.$bus.$emit('message:push', '購物車已有相同商品', 'danger');
        return;
      }
      if (vm.productNum === '') {
        vm.$bus.$emit('message:push', '請選擇數量', 'danger');
        return;
      }
      vm.status.loadingItem = vm.product.id;
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.$http
        .post(api, {
          data: { product_id: `${vm.product.id}`, qty: `${vm.productNum}` },
        })
        .then(() => {
          vm.status.loadingItem = '';
          vm.getCart();
          vm.$bus.$emit('message:push', '成功加入購物車', 'success');
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 36px;
}
</style>
