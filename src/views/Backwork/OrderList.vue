<template>
    <div>
        <loading :active.sync="isLoading">
            <div class="loadingio-spinner-ellipsis-aby2qqypx7"><div class="ldio-gx7c5s03jv">
            <div></div><div></div><div></div><div></div><div></div>
            </div></div>
        </loading>
        <table class="table mt-4">
            <thead>
                <tr>
                    <th width="120">購買時間</th>
                    <th>Email</th>
                    <th>購買款項</th>
                    <th width="100">應付金額</th>
                    <th width="100">是否付款</th>
                    <th width="80">編輯</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in orders" :key="item.id">
                    <td>{{item.paid_date | DateFilter}}</td>
                    <td>{{item.user.email}}</td>
                    <td>
                        <ul>
                            <li v-for="list in item.products" :key="list.id">
                                {{list.product.title}} 數量 : {{list.qty}} {{list.product.unit}}
                            </li>
                        </ul>
                    </td>
                    <td class="text-right">
                        {{item.total}}
                    </td>
                    <td>
                        <span v-if="item.is_paid" class="text-success">已付款</span>
                        <span v-else class="text-danger">未付款</span>
                    </td>
                    <td>
                        <button class="btn btn-outline-primary btn-sm" @click="openOrder(item)">編輯</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <Pagination :page="pagination" @changePage="getOrders"></Pagination>

        <!-- Modal -->
        <div class="modal fade" id="orderModel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-dark text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                        <span>修改訂單</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">              
                        <div class="col">
                            
                            <div class="form-row">
                            <div class="form-group col">
                            <label for="origin_price">應付金額</label>
                                <input type="number" class="form-control" id="origin_price"
                                v-model="orderItem.total"
                                placeholder="請輸入原價">
                            </div>
                            </div>
                            <hr>
                            <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox"
                                v-model="orderItem.is_paid"
                                id="is_paid">
                                <label class="form-check-label" for="is_paid">
                                是否付款
                                </label>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary" @click="resetOrder">確認</button>
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
            isLoading:false,
            orders:[],
            pagination:{},
            orderItem:{},
        }
    },
    components:{
        Pagination,
    },
    methods: {
        getOrders(page = 1) {
            const vm = this;
            const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`;
            vm.isLoading = true;
            this.$http.get(api)
            .then((res)=>{
                // console.log(res.data)
                vm.isLoading = false
                vm.orders = res.data.orders;
                vm.pagination = res.data.pagination;
            })
        },
        resetOrder() {
            const vm = this;
            const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_CUSTOMPATH}/admin/order/${vm.orderItem.id}`;
            vm.isLoading = true;
            this.$http.put(api,{data:vm.orderItem})
            .then(()=>{
                // console.log(res.data)
                vm.isLoading = false
                $('#orderModel').modal('hide');
                vm.getOrders()
            })
        },
        iconChange() {
            this.$bus.$emit('iconChangeActive', '訂單列表')
        },
        openOrder(item) {
            $('#orderModel').modal('show');
            this.orderItem = Object.assign({}, item);
        }
    },
    created() {
        this.getOrders();
        this.iconChange();
    },
}
</script>
<style lang="scss" scoped>
    ul {
        padding: 0;
        margin: 0;
        li {
            list-style: none;
        };
    }
</style>