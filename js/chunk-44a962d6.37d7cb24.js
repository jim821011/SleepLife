(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44a962d6"],{"10b5":function(t,a,e){},"2a27":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[e("div",{staticClass:"loading-animated"},[e("div",{staticClass:"loading-animated-circle"},[e("div"),e("div"),e("div"),e("div"),e("div")])])]),e("div",{staticClass:"mt-5 mb-5"},[e("div",{staticClass:"container px-0 px-md-3"},[e("div",{staticClass:"row no-gutters"},[e("div",{staticClass:"col-md-8 h-100",attrs:{id:"form-list"}},[t._m(0),e("validation-observer",{scopedSlots:t._u([{key:"default",fn:function(a){var s=a.invalid;return[e("form",{staticClass:"p-4 font-weight-bolder text-primary font-20",on:{submit:function(a){return a.preventDefault(),t.createOrder(a)}}},[e("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors;return[e("div",{staticClass:"form-row"},[e("div",{staticClass:"col"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"name"}},[t._v(" 姓名 "),e("span",{staticClass:"text-danger"},[t._v("*")])]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"}],staticClass:"form-control form-control-lg",class:{"is-invalid":s[0]},attrs:{id:"name",type:"text",placeholder:"請輸入姓名",name:"姓名"},domProps:{value:t.form.user.name},on:{input:function(a){a.target.composing||t.$set(t.form.user,"name",a.target.value)}}}),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))])])])])]}}],null,!0)}),e("validation-provider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors;return[e("div",{staticClass:"form-row"},[e("div",{staticClass:"col"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[t._v(" 電子信箱 "),e("span",{staticClass:"text-danger"},[t._v("*")])]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"}],staticClass:"form-control form-control-lg",class:{"is-invalid":s[0]},attrs:{id:"email",type:"email",placeholder:"請輸入電子信箱",name:"電子信箱"},domProps:{value:t.form.user.email},on:{input:function(a){a.target.composing||t.$set(t.form.user,"email",a.target.value)}}}),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))])])])])]}}],null,!0)}),e("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors;return[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"phone"}},[t._v(" 電話 "),e("span",{staticClass:"text-danger"},[t._v("*")])]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control form-control-lg",class:{"is-invalid":s[0]},attrs:{id:"phone",type:"text",placeholder:"請輸入電話",name:"電話"},domProps:{value:t.form.user.tel},on:{input:function(a){a.target.composing||t.$set(t.form.user,"tel",a.target.value)}}}),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))])])]}}],null,!0)}),e("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors;return[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"address"}},[t._v(" 地址 "),e("span",{staticClass:"text-danger"},[t._v("*")])]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"}],staticClass:"form-control form-control-lg mt-2",class:{"is-invalid":s[0]},attrs:{id:"address",type:"text",placeholder:"請輸入完整地址",name:"地址"},domProps:{value:t.form.user.address},on:{input:function(a){a.target.composing||t.$set(t.form.user,"address",a.target.value)}}}),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))])])]}}],null,!0)}),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"comment"}},[t._v("留言")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{id:"comment",name:"",cols:"30",rows:"5"},domProps:{value:t.form.message},on:{input:function(a){a.target.composing||t.$set(t.form,"message",a.target.value)}}})]),e("div",{staticClass:"d-flex justify-content-end"},[e("button",{staticClass:"btn btn-primary btn-lg font-weight-bolder",class:{"not-allowed":s},attrs:{type:"submit",disabled:s}},[t._v(" 送出訂單 ")])])],1)]}}])})],1),e("div",{staticClass:"col-md-4",attrs:{id:"book-list"}},[e("div",{staticClass:"ml-0 mt-5 ml-md-3 mt-md-0"},[e("div",[e("h2",{staticClass:"text-center py-3 bg-main-light font-24 text-primary font-weight-bolder m-0"},[t._v(" 訂單摘要 ")]),e("div",{staticClass:"border border-top-0 p-3"},[e("div",{staticClass:"d-flex justify-content-between text-primary"},[e("span",[t._v("小計")]),e("span",[t._v("NT$ "+t._s(t.noCouponPrice))])]),e("div",{staticClass:"d-flex align-item-center text-primary my-2"},[e("div",{staticClass:"w-100 mr-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon,expression:"coupon"}],staticClass:"form-control form-control-sm w-100",attrs:{type:"text"},domProps:{value:t.coupon},on:{input:function(a){a.target.composing||(t.coupon=a.target.value)}}})]),e("div",{staticClass:"coupon-btn ml-auto"},[e("button",{staticClass:"btn btn-primary btn-sm font-weight-bolder",attrs:{type:"button"},on:{click:t.useCoupon}},[t._v(" 套用 ")])])]),e("div",{staticClass:"d-flex justify-content-between text-primary"},[e("span",[t._v("優惠折抵")]),e("span",[t._v("NT$ "+t._s(t.noCouponPrice-t.totalPrice))])]),t.noCouponPrice>t.totalPrice?e("span",{staticClass:"text-danger d-block"},[t._v(" 已套用優惠券 ")]):t._e(),t.noCouponPrice>t.totalPrice?e("span",{staticClass:"text-danger d-block"},[t._v(" 若有更高的優惠折扣可再次輸入 ")]):t._e(),e("div",{staticClass:"d-flex justify-content-between\n                  text-primary font-20 mt-3 font-weight-bolder"},[e("span",[t._v("總計")]),e("span",[t._v("NT$ "+t._s(t.totalPrice))])])])]),e("div",{staticClass:"mt-3"},[e("h2",{staticClass:"text-center py-3 bg-main-light font-24 text-primary font-weight-bolder m-0"},[t._v(" 購物清單 ")]),e("div",{staticClass:"border border-top-0 px-3 pb-3 overflow-auto",attrs:{id:"order-list"}},t._l(t.carts.carts,(function(a){return e("div",{key:a.id,staticClass:"pt-3 d-flex align-items-center"},[e("div",{staticClass:"bg-cover w-50 mr-3",style:{backgroundImage:"url("+a.product.imageUrl+")",height:"80px"}}),e("div",{staticClass:"d-flex flex-column w-50 text-primary"},[e("span",[t._v(" "+t._s(a.product.title)+"（"+t._s(a.qty)+t._s(a.product.unit)+"） ")]),e("span",{staticClass:"font-20"},[t._v("NT$ "+t._s(a.final_total))])])])})),0)])])])])])])],1)},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"px-4 pt-4 text-primary"},[e("h2",{staticClass:"m-0 font-weight-bolder text-center"},[t._v(" 基本資料 ")])])}],r=(e("99af"),{data:function(){return{isLoading:!1,carts:[],noCouponPrice:0,totalPrice:0,coupon:"",form:{user:{email:"",name:"",tel:"",address:""},message:""}}},created:function(){this.getCart()},methods:{getCart:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io/","api/").concat("q821011","/cart");t.isLoading=!0,t.$http.get(a).then((function(a){t.carts=a.data.data,t.noCouponPrice=a.data.data.total,t.totalPrice=a.data.data.final_total,t.isLoading=!1}))},useCoupon:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io/","api/").concat("q821011","/coupon");t.isLoading=!0,t.$http.post(a,{data:{code:t.coupon}}).then((function(a){!1===a.data.success?(t.$bus.$emit("message:push","優惠券輸入有誤","danger"),t.isLoading=!1):(t.$bus.$emit("message:push","已成功輸入優惠券","success"),t.totalPrice=a.data.data.final_total,t.isLoading=!1)}))},createOrder:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io/","api/").concat("q821011","/order");if(0!==t.carts.carts.length){t.isLoading=!0;var e=t.form;t.$http.post(a,{data:e}).then((function(a){t.isLoading=!1,a.data.success&&t.$router.push("order_detail/".concat(a.data.orderId)),t.getCart()}))}}}}),i=r,n=(e("4c13"),e("2877")),l=Object(n["a"])(i,s,o,!1,null,null,null);a["default"]=l.exports},"4c13":function(t,a,e){"use strict";e("10b5")}}]);
//# sourceMappingURL=chunk-44a962d6.37d7cb24.js.map