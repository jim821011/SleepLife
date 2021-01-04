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
          <div
            v-if="products.length === 0"
            class="col mt-9"
          >
            <h2 class="text-center text-primary font-weight-bolder">
              目前並無關注商品
            </h2>
            <div class="text-center mt-5">
              <a
                href="#"
                class="btn btn-primary font-weight-bolder"
                @click.prevent="selectList('')"
              >
                <i class="fas fa-angle-double-left" />
                繼續選購
              </a>
            </div>
          </div>
          <div
            v-else
            class="col-lg-10 overflow-auto"
          >
            <h2 class="text-primary font-weight-bolder">
              關注商品
            </h2>
            <table class="table">
              <thead>
                <tr>
                  <th
                    width="150"
                    class="d-none d-md-table-cell"
                  />
                  <th
                    class="no-wrap"
                  >
                    名稱
                  </th>
                  <th
                    width="150"
                    class="no-wrap"
                  >
                    價格
                  </th>
                  <th
                    width="100"
                    class="no-wrap"
                  >
                    加入購物車
                  </th>
                  <th
                    width="75"
                    class="no-wrap"
                  >
                    刪除
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in products"
                  :key="item.id"
                >
                  <td class="d-none d-md-table-cell">
                    <router-link :to="{ path: `product_detail/${item.id}` }">
                      <div
                        class="bg-cover"
                        :style="{
                          backgroundImage: `url(${item.imageUrl})`,
                          height: '100px',
                        }"
                      />
                    </router-link>
                  </td>
                  <td class="align-middle no-wrap">
                    {{ item.title }}
                  </td>
                  <td class="align-middle no-wrap">
                    NT$ {{ item.price }}
                  </td>
                  <td class="align-middle no-wrap">
                    <button
                      type="button"
                      class="btn btn-outline-primary btn-sm w-100"
                      @click="addToCart(item)"
                    >
                      <i
                        v-if="status.loadingItem === item.id"
                        class="fas fa-spinner fa-spin"
                      />
                      <i class="fas fa-shopping-cart" />
                    </button>
                  </td>
                  <td class="align-middle no-wrap">
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm"
                      @click.prevent="removeAttention(item)"
                    >
                      刪除
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 class="mt-5 text-primary font-weight-bolder">
          商品導覽
        </h2>
        <div class="row mt-3">
          <div class="col-md-4">
            <div class="product-card mb-4 mb-md-0">
              <a
                href="#"
                @click.prevent="selectList('')"
              >
                <div class="product-intro product-img-1">
                  <div
                    class="product-intro-filter d-flex justify-content-center
                    h-100 align-items-center"
                  >
                    全部寢具
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="product-card mb-4 mb-md-0">
              <a
                href="#"
                @click.prevent="selectList('床墊')"
              >
                <div class="product-intro product-img-2">
                  <div
                    class="product-intro-filter d-flex justify-content-center
                    h-100 align-items-center"
                  >
                    床墊
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="product-card mb-4 mb-md-0">
              <a
                href="#"
                @click.prevent="selectList('枕頭')"
              >
                <div class="product-intro product-img-3">
                  <div
                    class="product-intro-filter d-flex justify-content-center
                    h-100 align-items-center"
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
      products: [],
      carts: [],
      status: {
        loadingItem: '',
      },
      attentionArr: JSON.parse(localStorage.getItem('attention')) || [],
    };
  },
  created() {
    this.getCart();
    this.attentionArr.forEach((item) => {
      this.getProduct(item);
    });
  },
  methods: {
    getProduct(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
      vm.isLoading = true;
      vm.$http.get(api).then((res) => {
        vm.products.push(res.data.product);
        vm.isLoading = false;
      });
    },
    removeAttention(item) {
      const numOne = this.attentionArr.indexOf(item.id);
      const numTwo = this.products.indexOf(item);
      this.attentionArr.splice(numOne, 1);
      this.products.splice(numTwo, 1);
      localStorage.setItem('attention', JSON.stringify(this.attentionArr));
    },
    selectList(list) {
      this.$router.push({
        name: 'Production',
        params: {
          list,
        },
      });
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
          vm.status.loadingItem = '';
          vm.$bus.$emit('message:push', '成功加入購物車', 'success');
          vm.getCart();
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
.no-wrap {
  white-space: nowrap;
}
</style>
