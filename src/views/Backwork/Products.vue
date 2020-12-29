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
    <div class="text-right mt-4">
      <button
        class="btn btn-primary"
        @click="openModel(true)"
      >
        新建立的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th
            width="120"
          >
            分類
          </th>
          <th>產品名稱</th>
          <th
            width="120"
          >
            原價
          </th>
          <th
            width="120"
          >
            售價
          </th>
          <th
            width="80"
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
          v-for="item in products"
          :key="item.id"
        >
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right">
            {{ item.origin_price | CurrencyFilter }}
          </td>
          <td class="text-right">
            {{ item.price | CurrencyFilter }}
          </td>
          <td>
            <span
              v-if="item.is_enabled"
              class="text-success"
            >
              啟用
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
              @click="openModel(false, item)"
            >
              編輯
            </button>
            <button
              class="btn btn-outline-danger btn-sm"
              @click="deleteModel(item)"
            >
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <pagination
      :page="pagination"
      @changePage="getProducts"
    />

    <!-- Modal -->
    <div
      id="productModel"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-lg"
        role="document"
      >
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5
              id="exampleModalLabel"
              class="modal-title"
            >
              <span>新增產品</span>
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
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input
                    id="image"
                    v-model="tempProduct.imageUrl"
                    type="text"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                  >
                </div>
                <div class="form-group">
                  <label
                    for="customFile"
                  >
                    或 上傳圖片
                    <i
                      v-if="status.loadingPicture"
                      class="fas fa-spinner fa-spin"
                    />
                  </label>
                  <input
                    id="customFile"
                    ref="files"
                    type="file"
                    class="form-control"
                    @change="updatePicture"
                  >
                </div>
                <img
                  img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                  :src="tempProduct.imageUrl"
                  class="img-fluid"
                  alt=""
                >
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input
                    id="title"
                    v-model="tempProduct.title"
                    type="text"
                    class="form-control"
                    placeholder="請輸入標題"
                  >
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input
                      id="category"
                      v-model="tempProduct.category"
                      type="text"
                      class="form-control"
                      placeholder="請輸入分類"
                    >
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input
                      id="unit"
                      v-model="tempProduct.unit"
                      type="unit"
                      class="form-control"
                      placeholder="請輸入單位"
                    >
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input
                      id="origin_price"
                      v-model="tempProduct.origin_price"
                      type="number"
                      class="form-control"
                      placeholder="請輸入原價"
                    >
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input
                      id="price"
                      v-model="tempProduct.price"
                      type="number"
                      class="form-control"
                      placeholder="請輸入售價"
                    >
                  </div>
                </div>
                <hr>

                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea
                    id="description"
                    v-model="tempProduct.description"
                    type="text"
                    class="form-control"
                    placeholder="請輸入產品描述"
                  />
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea
                    id="content"
                    v-model="tempProduct.content"
                    type="text"
                    class="form-control"
                    placeholder="請輸入產品說明內容"
                  />
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      id="is_enabled"
                      v-model="tempProduct.is_enabled"
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
              @click="updateProduct"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      id="delProductModal"
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
              <span>刪除產品</span>
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
            <strong class="text-danger" /> 商品(刪除後將無法恢復)。
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
              @click="delProduct"
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
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
      status: {
        loadingPicture: false,
      },
    };
  },
  created() {
    this.getProducts();
    this.iconChange();
  },
  methods: {
    getProducts(page = 1) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
      vm.isLoading = true;
      this.$http.get(api).then((res) => {
        vm.isLoading = false;
        vm.products = res.data.products;
        vm.pagination = res.data.pagination;
      });
    },
    openModel(isNew, item) {
      $('#productModel').modal('show');
      if (isNew) {
        this.tempProduct = {};
        this.isNew = true;
      } else {
        this.tempProduct = { ...item };
        this.isNew = false;
      }
    },
    deleteModel(item) {
      $('#delProductModal').modal('show');
      this.tempProduct = item;
    },
    updateProduct() {
      const vm = this;
      let api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`;
      let modalType = 'post';
      if (!vm.isNew) {
        api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
        modalType = 'put';
      }
      this.$http[modalType](api, { data: vm.tempProduct }).then((res) => {
        if (res.data.success) {
          $('#productModel').modal('hide');
          vm.getProducts();
        } else {
          $('#productModel').modal('hide');
          vm.getProducts();
        }
        // vm.products = res.data.products;
      });
    },
    delProduct() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
      vm.$http.delete(api).then(() => {
        $('#delProductModal').modal('hide');
        vm.getProducts();
      });
    },
    updatePicture() {
      const vm = this;
      const pictured = this.$refs.files.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', pictured);
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`;
      vm.status.loadingPicture = true;
      vm.$http
        .post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          if (res.data.success) {
            vm.status.loadingPicture = false;
            vm.$set(vm.tempProduct, 'imageUrl', res.data.imageUrl);
          } else {
            vm.status.loadingPicture = false;
            vm.$bus.$emit('message:push', res.data.message, 'danger');
          }
        });
    },
    iconChange() {
      this.$bus.$emit('iconChangeActive', '產品列表');
    },
  },
};
</script>
