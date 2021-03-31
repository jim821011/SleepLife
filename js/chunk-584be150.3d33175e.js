(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-584be150"],{"0c77":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}},[a("div",{staticClass:"loading-animated"},[a("div",{staticClass:"loading-animated-circle"},[a("div"),a("div"),a("div"),a("div"),a("div")])])]),a("div",{staticClass:"mt-5 mb-5"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"bg-cover",style:{backgroundImage:"url("+t.product.imageUrl+")",height:"400px"}})]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"d-flex flex-column h-100"},[a("div",{staticClass:"d-flex align-items-center mb-5 mt-3 mt-md-0"},[a("h2",{staticClass:"title m-0 text-primary font-weight-bolder"},[t._v(" "+t._s(t.product.title)+" ")]),a("a",{staticClass:"ml-3",attrs:{href:"#",title:"關注"},on:{click:function(e){return e.preventDefault(),t.setAttention(e)}}},[a("i",{staticClass:"fas fa-star fa-2x",class:{"text-warning":t.starOpen}})])]),a("span",{staticClass:"mb-3 text-primary"},[t._v("商品內容 : "+t._s(t.product.description))]),a("p",{staticClass:"content"},[t._v(" "+t._s(t.product.content)+" ")]),a("span",{staticClass:"mt-auto mb-3 text-right text-primary font-24"},[t._v("NT$ "+t._s(t.product.price))]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.productNum,expression:"productNum"}],staticClass:"form-control w-100 mb-3",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.productNum=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[t._v(" 請選擇購買數量 ")]),t._l(10,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v(" 購入 "+t._s(e)+" "+t._s(t.product.unit)+" ")])}))],2),a("div",{staticClass:"d-flex align-items-center"},[a("small",[t._v("小記 : NT$ "+t._s(t.product.price*t.productNum))]),a("button",{staticClass:"w-50 btn btn-primary font-weight-bolder ml-auto",attrs:{type:"button"},on:{click:t.addToCart}},[t.status.loadingItem===t.product.id?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v(" 加到購物車 ")])])])])]),a("h2",{staticClass:"mt-5 text-primary font-weight-bolder"},[t._v(" 你可能有興趣 ")]),a("div",{staticClass:"row mt-3"},t._l(t.productFilter,(function(e){return a("div",{key:e.id,staticClass:"col-md-4"},[a("div",{staticClass:"tool-card mb-4 mb-md-0"},[a("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.changeRoute(e)}}},[a("div",{staticClass:"bg-cover",style:{backgroundImage:"url("+e.imageUrl+")",height:"315px"}},[a("div",{staticClass:"production-img d-flex justify-content-center h-100 align-items-center"},[t._v(" 商品資訊 ")])])]),a("div",{staticClass:"d-flex flex-column text-center text-primary tool-card-item border-bottom"},[a("span",{staticClass:"h5 py-3 m-0"},[t._v(t._s(e.title))]),a("strong",{staticClass:"h5 pb-3 m-0"},[t._v("NT$ "+t._s(e.price))])])])])})),0)])])],1)},s=[],r=(a("99af"),a("4160"),a("c975"),a("a434"),a("159b"),{data:function(){return{isLoading:!1,productId:"",product:{},products:[],productNum:"",carts:[],status:{loadingItem:""},attentionArr:JSON.parse(localStorage.getItem("attention"))||[],attentionStar:!1}},computed:{productFilter:function(){var t=this,e=[];return this.products.forEach((function(a){e.length>=3||t.product.title!==a.title&&t.product.category===a.category&&e.push(a)})),e},starOpen:function(){var t=this;return this.attentionArr.forEach((function(e){e===t.product.id?t.attentionStar=!0:t.attentionStar=!1})),this.attentionStar}},created:function(){this.productId=this.$route.params.id,this.getProduct(),this.getAllProducts(),this.getCart()},methods:{getProduct:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io/","api/").concat("q821011","/product/").concat(t.productId);t.isLoading=!0,t.$http.get(e).then((function(e){t.product=e.data.product,t.isLoading=!1}))},getAllProducts:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io/","api/").concat("q821011","/products/all");t.isLoading=!0,t.$http.get(e).then((function(e){t.products=e.data.products,t.isLoading=!1}))},changeRoute:function(t){var e=this;e.$router.push({name:"ProductDetail",params:{id:t.id}}),e.productId=e.$route.params.id,e.getProduct()},setAttention:function(){var t=this,e=t.attentionArr.indexOf(t.product.id);-1===e?(t.attentionStar=!0,t.attentionArr.push(t.product.id),t.$bus.$emit("message:push","已加入關注","success")):(t.attentionStar=!1,t.attentionArr.splice(e,1),t.$bus.$emit("message:push","已取消關注","danger")),localStorage.setItem("attention",JSON.stringify(this.attentionArr))},getCart:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io/","api/").concat("q821011","/cart");t.$http.get(e).then((function(e){t.carts=e.data.data}))},addToCart:function(){var t=this,e=0;if(t.carts.carts.forEach((function(a){a.product.id===t.product.id&&(e+=1)})),e>=1)t.$bus.$emit("message:push","購物車已有相同商品","danger");else if(""!==t.productNum){t.status.loadingItem=t.product.id;var a="".concat("https://vue-course-api.hexschool.io/","api/").concat("q821011","/cart");t.$http.post(a,{data:{product_id:"".concat(t.product.id),qty:"".concat(t.productNum)}}).then((function(){t.status.loadingItem="",t.getCart(),t.$bus.$emit("message:push","成功加入購物車","success")}))}else t.$bus.$emit("message:push","請選擇數量","danger")}}}),n=r,o=(a("714d"),a("2877")),c=Object(o["a"])(n,i,s,!1,null,"069b30af",null);e["default"]=c.exports},"714d":function(t,e,a){"use strict";a("965d")},"965d":function(t,e,a){},a434:function(t,e,a){"use strict";var i=a("23e7"),s=a("23cb"),r=a("a691"),n=a("50c4"),o=a("7b0b"),c=a("65f0"),d=a("8418"),u=a("1dde"),l=a("ae40"),p=u("splice"),f=l("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,h=Math.min,g=9007199254740991,v="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!p||!f},{splice:function(t,e){var a,i,u,l,p,f,C=o(this),b=n(C.length),x=s(t,b),_=arguments.length;if(0===_?a=i=0:1===_?(a=0,i=b-x):(a=_-2,i=h(m(r(e),0),b-x)),b+a-i>g)throw TypeError(v);for(u=c(C,i),l=0;l<i;l++)p=x+l,p in C&&d(u,l,C[p]);if(u.length=i,a<i){for(l=x;l<b-i;l++)p=l+i,f=l+a,p in C?C[f]=C[p]:delete C[f];for(l=b;l>b-i+a;l--)delete C[l-1]}else if(a>i)for(l=b-i;l>x;l--)p=l+i-1,f=l+a-1,p in C?C[f]=C[p]:delete C[f];for(l=0;l<a;l++)C[l+x]=arguments[l+2];return C.length=b-i+a,u}})},c975:function(t,e,a){"use strict";var i=a("23e7"),s=a("4d64").indexOf,r=a("a640"),n=a("ae40"),o=[].indexOf,c=!!o&&1/[1].indexOf(1,-0)<0,d=r("indexOf"),u=n("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:c||!d||!u},{indexOf:function(t){return c?o.apply(this,arguments)||0:s(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-584be150.3d33175e.js.map