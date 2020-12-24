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
    <header class="container px-0 px-md-3 mt-sm-4">
      <div class="bg-cover header-img" />
    </header>

    <section class="container mb-5 mt-md-4 mt-4">
      <div class="row">
        <div class="col-md-3">
          <div class="mt-4 list">
            <h5 class="bg-main-d text-white m-0 py-3 h3 text-center">
              商品列表
            </h5>
            <div class="production-list bg-white">
              <div class="list-group font-24 text-center">
                <a
                  href="#"
                  class="list-group-item list-group-item-action"
                  :class="{ active: sectionActive == '' }"
                  @click.prevent="sectionActive = ''"
                >
                  所有寢具 {{ `(${allProductsNum})` }}
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action list-group-item-action"
                  :class="{ active: sectionActive == '床墊' }"
                  @click.prevent="sectionActive = '床墊'"
                >
                  精選床墊 {{ `(${list_1Num})` }}</a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action"
                  :class="{ active: sectionActive == '枕頭' }"
                  @click.prevent="sectionActive = '枕頭'"
                >舒眠枕頭 {{ `(${list_2Num})` }}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-9">
          <div class="row">
            <div
              v-for="item in productFilter"
              :key="item.id"
              class="col-md-6 col-lg-4"
            >
              <div class="tool-card mt-4">
                <router-link :to="{ path: `product_detail/${item.id}` }">
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
                </router-link>
                <div
                  class="d-flex flex-column text-center text-primary tool-card-item"
                >
                  <span class="h5 py-3 m-0">{{ item.title }}</span>
                  <strong class="h5 pb-3 m-0">NT$ {{ item.price }}</strong>
                </div>
                <div class="d-flex align-items-center">
                  <a
                    href="#"
                    class="btn btn-primary btn-lg border-0 w-25"
                    title="關注"
                    @click.prevent="setAttention(item)"
                  >
                    <i
                      class="fas fa-star"
                      :class="{ 'text-warning': item.attentionStar }"
                    />
                  </a>
                  <a
                    href="#"
                    class="btn btn-main-l btn-lg border-0 text-primary w-75 font-weight-bolder"
                    @click.prevent="addToCart(item)"
                  >
                    <i
                      v-if="status.loadingItem === item.id"
                      class="fas fa-spinner fa-spin"
                    />
                    加入購物車</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      carts: [],
      status: {
        loadingItem: '',
      },
      allProductsNum: 0,
      sectionActive: '',
      isLoading: false,
      attentionArr: JSON.parse(localStorage.getItem('attention')) || [],
    };
  },
  computed: {
    productFilter() {
      this.products.forEach((item) => {
        const arr = item;
        this.attentionArr.forEach((i) => {
          if (item.id === i) {
            arr.attentionStar = true;
          }
        });
      });

      if (this.sectionActive === '') {
        return this.products;
      }
      return this.products.filter((item) => item.category === this.sectionActive);
    },
    list_1Num() {
      let filterProduct = [];
      filterProduct = this.products.filter((item) => item.category === '床墊');
      return filterProduct.length;
    },
    list_2Num() {
      let filterProduct = [];
      filterProduct = this.products.filter((item) => item.category === '枕頭');
      return filterProduct.length;
    },
  },
  created() {
    this.getProduction();
    this.getCart();
    this.sectionActive = this.$route.params.list || '';
  },
  methods: {
    getProduction() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      vm.isLoading = true;
      vm.$http.get(api).then((res) => {
        vm.products = res.data.products;
        vm.products.forEach((item) => {
          vm.$set(item, 'attentionStar', false);
        });
        vm.allProductsNum = res.data.products.length;
        vm.isLoading = false;
      });
    },
    setAttention(item) {
      const vm = this;
      const arr = item;
      const index = vm.attentionArr.indexOf(item.id);
      if (index === -1) {
        arr.attentionStar = true;
        vm.attentionArr.push(item.id);
        vm.$bus.$emit('message:push', '已加入關注', 'success');
      } else {
        arr.attentionStar = false;
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
    addToCart(item) {
      const vm = this;
      let num = 0;
      vm.carts.carts.forEach((e) => {
        if (e.product.id === item.id) {
          num += 1;
        }
      });
      if (num >= 1) {
        vm.$bus.$emit('message:push', '購物車已有相同商品', 'danger');
        return;
      }
      vm.status.loadingItem = item.id;
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.$http
        .post(api, { data: { product_id: `${item.id}`, qty: 1 } })
        .then(() => {
          vm.getCart();
          vm.status.loadingItem = '';
          vm.$bus.$emit('message:push', '成功加入購物車', 'success');
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  position: sticky;
  top: 80px;
}
.header-img {
  background-image: url(../../assets/images/bg_5.jpg);
  height: 496px;
  @media (max-width:576px){
    height: 315px;
  }
}
</style>
