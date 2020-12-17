<template>
    <div>
        <loading :active.sync="isLoading">
            <div class="loadingio-spinner-ellipsis-aby2qqypx7"><div class="ldio-gx7c5s03jv">
            <div></div><div></div><div></div><div></div><div></div>
            </div></div>
        </loading>
        <div class="text-right mt-4">
            <button class="btn btn-primary" @click="openModel(true)">新建立的產品</button>
        </div>
        <table class="table mt-4">
            <thead>
                <tr>
                    <th width="120">分類</th>
                    <th>產品名稱</th>
                    <th width="120">原價</th>
                    <th width="120">售價</th>
                    <th width="80">是否啟用</th>
                    <th width="120">編輯</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item) in products" :key="item.id">
                    <td>{{item.category}}</td>
                    <td>{{item.title}}</td>
                    <td class="text-right">
                        {{item.origin_price | CurrencyFilter}}
                    </td>
                    <td class="text-right">
                        {{item.price | CurrencyFilter}}
                    </td>
                    <td>
                        <span v-if="item.is_enabled" class="text-success">啟用</span>
                        <span v-else class="text-danger">未啟用</span>
                    </td>
                    <td>
                        <button class="btn btn-outline-primary btn-sm" @click="openModel(false,item)">編輯</button>
                        <button class="btn btn-outline-danger btn-sm" @click="deleteModel(item)">刪除</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <pagination :page="pagination" @changePage="getProducts"></pagination>
        <!-- <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item" :class="{'disabled' : !pagination.has_pre}" 
                @click.prevent="getProducts(pagination.current_page - 1)">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item" v-for="page in pagination.total_pages" :key="page" 
                :class="{'active': pagination.current_page === page}" @click.prevent="getProducts(page)">
                    <a class="page-link" href="#" >
                        {{page}}
                    </a>
                </li>
                <li class="page-item" :class="{'disabled' : !pagination.has_next}" 
                @click.prevent="getProducts(pagination.current_page + 1 )">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav> -->

        <!-- Modal -->
        <div class="modal fade" id="productModel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-dark text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                        <span>新增產品</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                        <div class="col-sm-4">
                            <div class="form-group">
                            <label for="image">輸入圖片網址</label>
                            <input type="text" class="form-control" id="image"
                                v-model="tempProduct.imageUrl"
                                placeholder="請輸入圖片連結">
                            </div>
                            <div class="form-group">
                            <label for="customFile">或 上傳圖片
                                <i class="fas fa-spinner fa-spin" v-if="status.loadingPicture"></i>
                            </label>
                            <input type="file" id="customFile" class="form-control"
                                ref="files" @change="updatePicture">
                            </div>
                            <img img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                            :src="tempProduct.imageUrl"
                            class="img-fluid" alt="">
                        </div>
                        <div class="col-sm-8">
                            <div class="form-group">
                            <label for="title">標題</label>
                            <input type="text" class="form-control" id="title"
                                v-model="tempProduct.title"
                                placeholder="請輸入標題">
                            </div>

                            <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="category">分類</label>
                                <input type="text" class="form-control" id="category"
                                v-model="tempProduct.category"
                                placeholder="請輸入分類">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="price">單位</label>
                                <input type="unit" class="form-control" id="unit"
                                v-model="tempProduct.unit"
                                placeholder="請輸入單位">
                            </div>
                            </div>

                            <div class="form-row">
                            <div class="form-group col-md-6">
                            <label for="origin_price">原價</label>
                                <input type="number" class="form-control" id="origin_price"
                                v-model="tempProduct.origin_price"
                                placeholder="請輸入原價">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="price">售價</label>
                                <input type="number" class="form-control" id="price"
                                v-model="tempProduct.price"
                                placeholder="請輸入售價">
                            </div>
                            </div>
                            <hr>

                            <div class="form-group">
                            <label for="description">產品描述</label>
                            <textarea type="text" class="form-control" id="description"
                                v-model="tempProduct.description"
                                placeholder="請輸入產品描述"></textarea>
                            </div>
                            <div class="form-group">
                            <label for="content">說明內容</label>
                            <textarea type="text" class="form-control" id="content"
                                v-model="tempProduct.content"
                                placeholder="請輸入產品說明內容"></textarea>
                            </div>
                            <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox"
                                v-model="tempProduct.is_enabled"
                                :true-value="1"
                                :false-value="0"
                                id="is_enabled">
                                <label class="form-check-label" for="is_enabled">
                                是否啟用
                                </label>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary" @click="updateProduct">確認</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="delProductModal" tabindex="-1" role="dialog"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-danger text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                        <span>刪除產品</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        是否刪除 <strong class="text-danger"></strong> 商品(刪除後將無法恢復)。
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-danger" @click="delProduct">確認刪除</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

import $ from "jquery"
import Pagination from '@/components/Pagiation'

export default {
    data() {
        return {
            products:[],
            pagination:{},
            tempProduct:{},
            isNew:false,
            isLoading: false,
            status:{
                loadingPicture:false
            },
        }
    },
    components:{
        Pagination,
    },
    methods: {
        getProducts(page = 1) {
            const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
            const vm = this;
            vm.isLoading = true;
            this.$http.get(api)
            .then((res)=>{
                // console.log(res.data)
                vm.isLoading = false
                vm.products = res.data.products;
                vm.pagination = res.data.pagination;
            })
        },
        openModel(isNew, item) {
            $("#productModel").modal("show")
            if(isNew){
                this.tempProduct = {};
                this.isNew = true;
            }else {
                this.tempProduct = Object.assign({}, item) ;
                this.isNew = false;
            }
        },
        deleteModel(item) {
            $("#delProductModal").modal("show");
            this.tempProduct = item;
        },
        updateProduct() {
            let api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`;
            let modalType = 'post'
            const vm = this;
            if(!vm.isNew){
                api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
                modalType = 'put'
            }
            this.$http[modalType](api, {data:vm.tempProduct})
            .then((res)=>{
                // console.log(res.data)
                if(res.data.success){
                    $("#productModel").modal("hide");
                    vm.getProducts();
                }else {
                    $("#productModel").modal("hide");
                    vm.getProducts();
                    console.log("新增失敗")
                }
                // vm.products = res.data.products;
            })
        },
        delProduct() {
            const vm = this;
            const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
            this.$http.delete(api)
            .then(()=>{
                // console.log(res.data)
                $("#delProductModal").modal("hide");
                vm.getProducts();
            })
        },
        updatePicture() {
            // console.log(this)
            const pictured = this.$refs.files.files[0];
            const vm = this;
            const formData = new FormData();
            formData.append("file-to-upload", pictured);
            const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`;
            vm.status.loadingPicture = true;
            this.$http.post(url, formData, {
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            }).then((res)=>{
                // console.log(res.data)
                if(res.data.success){
                    vm.status.loadingPicture = false;
                    vm.$set(vm.tempProduct, 'imageUrl', res.data.imageUrl)
                }else {
                    vm.status.loadingPicture = false;
                    vm.$bus.$emit('message:push', res.data.message, 'danger')
                }
            })
        },
        iconChange() {
            this.$bus.$emit('iconChangeActive', '產品列表')
        }
    },
    created() {
        this.getProducts();
        this.iconChange();
    },
}
</script>