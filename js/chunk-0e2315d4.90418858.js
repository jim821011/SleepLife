(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e2315d4"],{"0e73":function(t,i,a){"use strict";a("bf8b")},"2b55":function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(i){t.isLoading=i}}},[a("div",{staticClass:"loading-animated"},[a("div",{staticClass:"loading-animated-circle"},[a("div"),a("div"),a("div"),a("div"),a("div")])])]),a("div",{staticClass:"mt-5 mb-5"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[0===t.products.length?a("div",{staticClass:"col mt-9"},[a("h2",{staticClass:"text-center text-primary font-weight-bolder"},[t._v(" 目前並無關注商品 ")]),a("div",{staticClass:"text-center mt-5"},[a("a",{staticClass:"btn btn-primary font-weight-bolder",attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),t.selectList("")}}},[a("i",{staticClass:"fas fa-angle-double-left"}),t._v(" 繼續選購 ")])])]):a("div",{staticClass:"col-lg-10 overflow-auto"},[a("h2",{staticClass:"text-primary font-weight-bolder"},[t._v(" 關注商品 ")]),a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.products,(function(i){return a("tr",{key:i.id},[a("td",{staticClass:"d-none d-md-table-cell"},[a("router-link",{attrs:{to:{path:"product_detail/"+i.id}}},[a("div",{staticClass:"bg-cover",style:{backgroundImage:"url("+i.imageUrl+")",height:"100px"}})])],1),a("td",{staticClass:"align-middle no-wrap"},[t._v(" "+t._s(i.title)+" ")]),a("td",{staticClass:"align-middle no-wrap"},[t._v(" NT$ "+t._s(i.price)+" ")]),a("td",{staticClass:"align-middle no-wrap"},[a("button",{staticClass:"btn btn-outline-primary btn-sm w-100",attrs:{type:"button"},on:{click:function(a){return t.addToCart(i)}}},[t.status.loadingItem===i.id?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),a("i",{staticClass:"fas fa-shopping-cart"})])]),a("td",{staticClass:"align-middle no-wrap"},[a("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.removeAttention(i)}}},[t._v(" 刪除 ")])])])})),0)])])]),a("h2",{staticClass:"mt-5 text-primary font-weight-bolder"},[t._v(" 商品導覽 ")]),a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"product-card mb-4 mb-md-0"},[a("a",{attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),t.selectList("")}}},[t._m(1)])])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"product-card mb-4 mb-md-0"},[a("a",{attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),t.selectList("床墊")}}},[t._m(2)])])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"product-card mb-4 mb-md-0"},[a("a",{attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),t.selectList("枕頭")}}},[t._m(3)])])])])])])],1)},s=[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("thead",[a("tr",[a("th",{staticClass:"d-none d-md-table-cell",attrs:{width:"150"}}),a("th",{staticClass:"no-wrap"},[t._v(" 名稱 ")]),a("th",{staticClass:"no-wrap",attrs:{width:"150"}},[t._v(" 價格 ")]),a("th",{staticClass:"no-wrap",attrs:{width:"100"}},[t._v(" 加入購物車 ")]),a("th",{staticClass:"no-wrap",attrs:{width:"75"}},[t._v(" 刪除 ")])])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"product-intro product-img-1"},[a("div",{staticClass:"product-intro-filter d-flex justify-content-center\n                  h-100 align-items-center"},[t._v(" 全部寢具 ")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"product-intro product-img-2"},[a("div",{staticClass:"product-intro-filter d-flex justify-content-center\n                  h-100 align-items-center"},[t._v(" 床墊 ")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"product-intro product-img-3"},[a("div",{staticClass:"product-intro-filter d-flex justify-content-center\n                  h-100 align-items-center"},[t._v(" 枕頭 ")])])}],n=(a("99af"),a("4160"),a("c975"),a("a434"),a("159b"),{data:function(){return{isLoading:!1,products:[],carts:[],status:{loadingItem:""},attentionArr:JSON.parse(localStorage.getItem("attention"))||[]}},created:function(){var t=this;this.getCart(),this.attentionArr.forEach((function(i){t.getProduct(i)}))},methods:{getProduct:function(t){var i=this,a="".concat("https://vue-course-api.hexschool.io/","api/").concat("q821011","/product/").concat(t);i.isLoading=!0,i.$http.get(a).then((function(t){i.products.push(t.data.product),i.isLoading=!1}))},removeAttention:function(t){var i=this.attentionArr.indexOf(t.id),a=this.products.indexOf(t);this.attentionArr.splice(i,1),this.products.splice(a,1),localStorage.setItem("attention",JSON.stringify(this.attentionArr))},selectList:function(t){this.$router.push({name:"Production",params:{list:t}})},getCart:function(){var t=this,i="".concat("https://vue-course-api.hexschool.io/","api/").concat("q821011","/cart");t.$http.get(i).then((function(i){t.carts=i.data.data}))},addToCart:function(t){var i=this,a=0;if(i.carts.carts.forEach((function(i){i.product.id===t.id&&(a+=1)})),a>=1)i.$bus.$emit("message:push","購物車已有相同商品","danger");else{i.status.loadingItem=t.id;var e="".concat("https://vue-course-api.hexschool.io/","api/").concat("q821011","/cart");i.$http.post(e,{data:{product_id:"".concat(t.id),qty:1}}).then((function(){i.status.loadingItem="",i.$bus.$emit("message:push","成功加入購物車","success"),i.getCart()}))}}}}),r=n,c=(a("0e73"),a("2877")),o=Object(c["a"])(r,e,s,!1,null,null,null);i["default"]=o.exports},a434:function(t,i,a){"use strict";var e=a("23e7"),s=a("23cb"),n=a("a691"),r=a("50c4"),c=a("7b0b"),o=a("65f0"),d=a("8418"),l=a("1dde"),u=a("ae40"),f=l("splice"),p=u("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,v=Math.min,m=9007199254740991,g="Maximum allowed length exceeded";e({target:"Array",proto:!0,forced:!f||!p},{splice:function(t,i){var a,e,l,u,f,p,C=c(this),b=r(C.length),_=s(t,b),w=arguments.length;if(0===w?a=e=0:1===w?(a=0,e=b-_):(a=w-2,e=v(h(n(i),0),b-_)),b+a-e>m)throw TypeError(g);for(l=o(C,e),u=0;u<e;u++)f=_+u,f in C&&d(l,u,C[f]);if(l.length=e,a<e){for(u=_;u<b-e;u++)f=u+e,p=u+a,f in C?C[p]=C[f]:delete C[p];for(u=b;u>b-e+a;u--)delete C[u-1]}else if(a>e)for(u=b-e;u>_;u--)f=u+e-1,p=u+a-1,f in C?C[p]=C[f]:delete C[p];for(u=0;u<a;u++)C[u+_]=arguments[u+2];return C.length=b-e+a,l}})},bf8b:function(t,i,a){},c975:function(t,i,a){"use strict";var e=a("23e7"),s=a("4d64").indexOf,n=a("a640"),r=a("ae40"),c=[].indexOf,o=!!c&&1/[1].indexOf(1,-0)<0,d=n("indexOf"),l=r("indexOf",{ACCESSORS:!0,1:0});e({target:"Array",proto:!0,forced:o||!d||!l},{indexOf:function(t){return o?c.apply(this,arguments)||0:s(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-0e2315d4.90418858.js.map