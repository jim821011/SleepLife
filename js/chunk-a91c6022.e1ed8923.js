(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a91c6022"],{"462f":function(t,a,s){"use strict";s("d853")},a434:function(t,a,s){"use strict";var e=s("23e7"),i=s("23cb"),n=s("a691"),l=s("50c4"),o=s("7b0b"),r=s("65f0"),c=s("8418"),u=s("1dde"),f=s("ae40"),d=u("splice"),v=f("splice",{ACCESSORS:!0,0:0,1:2}),g=Math.max,m=Math.min,p=9007199254740991,h="Maximum allowed length exceeded";e({target:"Array",proto:!0,forced:!d||!v},{splice:function(t,a){var s,e,u,f,d,v,b=o(this),C=l(b.length),x=i(t,C),w=arguments.length;if(0===w?s=e=0:1===w?(s=0,e=C-x):(s=w-2,e=m(g(n(a),0),C-x)),C+s-e>p)throw TypeError(h);for(u=r(b,e),f=0;f<e;f++)d=x+f,d in b&&c(u,f,b[d]);if(u.length=e,s<e){for(f=x;f<C-e;f++)d=f+e,v=f+s,d in b?b[v]=b[d]:delete b[v];for(f=C;f>C-e+s;f--)delete b[f-1]}else if(s>e)for(f=C-e;f>x;f--)d=f+e-1,v=f+s-1,d in b?b[v]=b[d]:delete b[v];for(f=0;f<s;f++)b[f+x]=arguments[f+2];return b.length=C-e+s,u}})},a5aa:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("a",{staticClass:"go-top text-light",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.goTop(a)}}},[s("i",{staticClass:"fas fa-angle-up"})]),s("Alert"),s("div",{staticClass:"sticky-footer"},[s("nav",{staticClass:"navbar navbar-expand-md navbar-light bg-blue-op9 sticky-top"},[s("div",{staticClass:"container"},[s("router-link",{staticClass:"py-1",attrs:{to:{name:"Index"}}},[s("h1",{staticClass:"sr-only"},[t._v(" Sleep Life ")]),s("div",{staticClass:"bg-cover logo"})]),t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"navbar-nav ml-auto"},[s("li",{staticClass:"nav-item",on:{click:t.closeNavbar}},[s("router-link",{staticClass:"nav-link px-md-4 text-light font-weight-bolder",attrs:{to:"/production"}},[t._v(" 商品列表 ")])],1),s("li",{staticClass:"nav-item",on:{click:t.closeNavbar}},[s("router-link",{staticClass:"nav-link px-md-4 text-light font-weight-bolder",attrs:{to:"/attention"}},[t._v(" 我的關注 ")])],1),s("li",{staticClass:"nav-item",on:{click:t.closeNavbar}},[s("router-link",{staticClass:"nav-link px-md-4 text-light font-weight-bolder",attrs:{to:"/cart"}},[t._v(" 購物車 ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link px-md-4 text-light font-weight-bolder",attrs:{to:"/login"}},[t._v(" 登入 ")])],1)])])],1)]),s("router-view")],1),t._m(1)],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler border-0",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("div",{staticClass:"navbar-icon"},[s("span"),s("span"),s("span")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("footer",[s("div",{staticClass:"bg-blue py-3"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"d-flex flex-column align-items-start"},[s("span",{staticClass:"text-light",attrs:{href:"#"}},[t._v("07-1234-5678")]),s("a",{staticClass:"text-light",attrs:{href:"#"}},[t._v("sweetaste@email.com")]),s("span",{staticClass:"text-light",attrs:{href:"#"}},[t._v("800 高雄市新興區幸福路 520 號")]),s("div",{staticClass:"d-flex"},[s("a",{staticClass:"text-light",attrs:{href:"#"}},[s("i",{staticClass:"fab fa-facebook-square fa-2x"})]),s("a",{staticClass:"text-light ml-1",attrs:{href:"#"}},[s("i",{staticClass:"fab fa-twitter-square fa-2x"})]),s("a",{staticClass:"text-light ml-1",attrs:{href:"#"}},[s("i",{staticClass:"fab fa-instagram-square fa-2x"})])])])]),s("div",{staticClass:"col-sm-6 align-self-center"},[s("div",{staticClass:"bg-cover logo ml-sm-auto mt-3 mt-sm-0"})])])])])])}],n=s("1157"),l=s.n(n),o=s("f74e"),r={components:{Alert:o["a"]},data:function(){return{}},mounted:function(){window.addEventListener("scroll",this.goTopShow)},methods:{goTopShow:function(){var t=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;t>300?l()(".go-top").show():l()(".go-top").hide()},goTop:function(){l()("html, body").stop().animate({scrollTop:0})},closeNavbar:function(){var t=document.body.clientWidth;t<=750&&l()(".navbar-toggler").click()}}},c=r,u=(s("462f"),s("2877")),f=Object(u["a"])(c,e,i,!1,null,null,null);a["default"]=f.exports},b1f5:function(t,a,s){"use strict";s("dca5")},d853:function(t,a,s){},dca5:function(t,a,s){},f74e:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"message-alert"},t._l(t.messages,(function(a,e){return s("div",{key:e,staticClass:"alert alert-dismissible",class:"alert-"+a.status},[t._v(" "+t._s(a.message)+" "),s("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(a){return t.removeMessage(e)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])})),0)},i=[],n=(s("4160"),s("a434"),s("159b"),{data:function(){return{messages:[]}},created:function(){var t=this;t.$bus.$on("message:push",(function(a){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";t.updateMessage(a,s)}))},methods:{updateMessage:function(t,a){var s=Math.floor(new Date/1e3);this.messages.push({message:t,status:a,timestamp:s}),this.removeMessageWithTiming(s)},removeMessage:function(t){this.messages.splice(t,1)},removeMessageWithTiming:function(t){var a=this;setTimeout((function(){a.messages.forEach((function(s,e){s.timestamp===t&&a.messages.splice(e,1)}))}),1500)}}}),l=n,o=(s("b1f5"),s("2877")),r=Object(o["a"])(l,e,i,!1,null,null,null);a["a"]=r.exports}}]);
//# sourceMappingURL=chunk-a91c6022.e1ed8923.js.map