(function(e){function t(t){for(var n,i,u=t[0],c=t[1],s=t[2],l=0,p=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},o=[];function i(e){return u.p+"js/"+({admin:"admin",cart:"cart",login:"login",orders:"orders",product:"product",register:"register"}[e]||e)+"."+{admin:"6ffc7a80",cart:"613c0620",login:"f06fd927",orders:"ae0515e7",product:"eb4ca61e",register:"997c39a9"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e);var s=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",s.name="ChunkLoadError",s.type=n,s.request=o,r[1](s)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=s;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"login",(function(){return B})),r.d(n,"logout",(function(){return I})),r.d(n,"getInfo",(function(){return T})),r.d(n,"addCart",(function(){return z}));var a={};r.r(a),r.d(a,"user",(function(){return q}));var o={};r.r(o),r.d(o,"login",(function(){return N})),r.d(o,"logout",(function(){return H})),r.d(o,"getInfo",(function(){return J})),r.d(o,"extend",(function(){return D})),r.d(o,"updateCart",(function(){return F}));r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("e792"),r("0cdd");var i=r("2b0e"),u=r("5f5b");r("ab8b"),r("2dd8");i["default"].use(u["a"]);r("d3b7"),r("caad"),r("2532");var c=r("bc3a"),s=r.n(c),l=r("130e"),d=r("3d20"),p=r.n(d),f=r("2f62"),m=r("0e44"),g=function(){return{token:"",account:"",role:0,email:"",cart:0}},h=r("1da1"),v=(r("96cf"),r("3ca3"),r("ddb0"),r("8c4f")),b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{attrs:{id:"home"}},[r("b-row",e._l(e.products,(function(t){return r("b-col",{key:t._id,attrs:{cols:"12",md:"6",lg:"3"}},[e._v(e._s(t.name)),r("ProductCard",{attrs:{product:t}})],1)})),1)],1)},x=[],k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card",{staticClass:"card-product",attrs:{"img-top":"","img-src":e.product.image}},[r("b-card-body",[r("b-card-title",[r("router-link",{attrs:{to:"/product/"+e.product._id}},[e._v(e._s(e.product.name))])],1),r("b-card-sub-title",[e._v(e._s(e.product.category)+" - "+e._s("$"+e.product.price))]),r("b-card-text",{staticStyle:{"white-space":"pre"}},[e._v(e._s(e.product.description))])],1)],1)},_=[],w={props:{product:{type:Object,required:!0}}},y=w,O=r("2877"),j=Object(O["a"])(y,k,_,!1,null,null,null),P=j.exports,R={components:{ProductCard:P},data:function(){return{products:[]}},created:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.api.get("/products");case 3:r=t.sent,n=r.data,e.products=n.result,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$swal({icon:"error",title:"錯誤",text:"商品取得失敗"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}},L=R,C=Object(O["a"])(L,b,x,!1,null,null,null),E=C.exports;i["default"].use(v["a"]);var $=[{path:"/",name:"Home",component:E,meta:{title:"購物網"}},{path:"/register",name:"Register",component:function(){return r.e("register").then(r.bind(null,"73cf"))},meta:{title:"註冊 | 購物網"}},{path:"/login",name:"Login",component:function(){return r.e("login").then(r.bind(null,"a55b"))},meta:{title:"登入 | 購物網"}},{path:"/product/:id",name:"Product",component:function(){return r.e("product").then(r.bind(null,"d2f1"))},meta:{title:"商品 | 購物網"}},{path:"/cart",name:"Cart",component:function(){return r.e("cart").then(r.bind(null,"b789"))},meta:{title:"購物車 | 購物網",login:!0}},{path:"/orders",name:"Orders",component:function(){return r.e("orders").then(r.bind(null,"159d"))},meta:{title:"訂單 | 購物網",login:!0}},{path:"/admin",name:"Admin",component:function(){return r.e("admin").then(r.bind(null,"3530"))},children:[{path:"",name:"AdminHome",component:function(){return r.e("admin").then(r.bind(null,"c732"))},meta:{login:!0,admin:!0,title:"管理 | 購物網"}},{path:"products",name:"AdminProducts",component:function(){return r.e("admin").then(r.bind(null,"aa93"))},meta:{login:!0,admin:!0,title:"商品管理 | 購物網"}},{path:"orders",name:"AdminOrders",component:function(){return r.e("admin").then(r.bind(null,"ec5c"))},meta:{login:!0,admin:!0,title:"訂單管理 | 購物網"}}]},{path:"*",name:"NotFound",redirect:"/"}],A=new v["a"]({routes:$});A.beforeEach((function(e,t,r){var n=G.getters["user/user"];e.meta.login&&!n.isLogin?r("/login"):e.meta.admin&&!n.isAdmin?r("/"):r()})),A.afterEach((function(e,t){document.title=e.meta.title}));var S=A,B=function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,K.post("/users/login",r);case 4:a=e.sent,o=a.data,n("login",o.result),S.push("/"),p.a.fire({icon:"success",title:"成功",text:"登入成功"}),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),p.a.fire({icon:"false",title:"失敗",text:e.t0.response.data.message});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,r){return e.apply(this,arguments)}}(),I=function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,n=t.state,e.prev=1,e.next=4,K.delete("/users/logout",{headers:{authorization:"Bearer "+n.token}});case 4:r("logout"),S.push("/"),p.a.fire({icon:"success",title:"成功",text:"登出成功"}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),p.a.fire({icon:"error",title:"失敗",text:e.t0.response.data.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.commit,n=t.state,0!==n.token.length){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,K.get("/users/me",{headers:{authorization:"Bearer "+n.token}});case 6:a=e.sent,o=a.data,r("getInfo",o.result),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](3),r("logout");case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,a=t.state,0!==a.token.length){e.next=5;break}return p.a.fire({icon:"error",title:"錯誤",text:"請先登入"}),S.push("/login"),e.abrupt("return");case 5:if(!(r.quantity<=0)){e.next=8;break}return p.a.fire({icon:"error",title:"錯誤",text:"請輸入正確數量"}),e.abrupt("return");case 8:return e.prev=8,e.next=11,K.post("/users/me/cart",r,{headers:{authorization:"Bearer "+a.token}});case 11:o=e.sent,i=o.data,n("updateCart",i.result),p.a.fire({icon:"success",title:"成功",text:"加入購物車成功"}),e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](8),p.a.fire({icon:"error",title:"錯誤",text:"加入購物車失敗"});case 20:case"end":return e.stop()}}),e,null,[[8,17]])})));return function(t,r){return e.apply(this,arguments)}}(),M=r("5530"),q=function(e){return Object(M["a"])({isLogin:e.token.length>0,isAdmin:1===e.role},e)},N=function(e,t){e.token=t.token,e.account=t.account,e.role=t.role,e.email=t.email,e.cart=t.cart},H=function(e,t){e.token="",e.account="",e.role=0,e.email="",e.cart=0},J=function(e,t){e.account=t.account,e.role=t.role,e.email=t.email,e.cart=t.cart},D=function(e,t){e.token=t},F=function(e,t){e.cart=t},U={namespaced:!0,state:g,actions:n,getters:a,mutations:o};i["default"].use(f["a"]);var G=new f["a"].Store({state:{},mutations:{},actions:{},modules:{user:U},plugins:[Object(m["a"])({key:"shop",paths:["user.token"]})]}),K=s.a.create({baseURL:"https://gogoshopping.herokuapp.com/"});K.interceptors.response.use((function(e){return e}),(function(e){if(e.response){if(401===e.response.status&&"/users/extend"!==e.config.url){var t=e.config;return K.post("/users/extend",{},{headers:{authorization:"Bearer "+G.state.user.token}}).then((function(e){var r=e.data;return G.commit("user/extend",r.result.token),t.headers.authorization="Bearer "+G.state.user.token,s()(t)})).catch((function(e){return G.commit("user/logout"),S.push("/login"),Promise.reject(e)}))}}else"ECONNABORTED"===e.code&&e.message.includes("timeout")?p.a.fire({icon:"error",title:"錯誤",text:"請求逾時"}):p.a.fire({icon:"error",title:"錯誤",text:"網路不穩定"});return Promise.reject(e)})),i["default"].use(l["a"],{axios:s.a,api:K});var Q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[r("b-container",[r("b-navbar-brand",{attrs:{to:"/"}},[e._v("購物網")]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",{staticClass:"ml-auto"},[e.user.isLogin?e._e():r("b-nav-item",{attrs:{to:"/register"}},[e._v("註冊")]),e.user.isLogin?e._e():r("b-nav-item",{attrs:{to:"/login"}},[e._v("登入")]),e.user.isLogin?r("b-nav-item",{attrs:{to:"/cart"}},[e._v("購物車"),r("b-badge",{attrs:{variant:"danger"}},[e._v(e._s(e.user.cart))])],1):e._e(),e.user.isLogin?r("b-nav-item",{attrs:{to:"/orders"}},[e._v("訂單")]):e._e(),e.user.isLogin&&e.user.isAdmin?r("b-nav-item",{attrs:{to:"/admin"}},[e._v("管理")]):e._e(),e.user.isLogin?r("b-nav-item",{on:{click:e.logout}},[e._v("登出")]):e._e()],1)],1)],1)],1),r("router-view",{key:e.$router.fullPath})],1)},V=[],W={methods:{logout:function(){this.$store.dispatch("user/logout")}},created:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$store.dispatch("user/getInfo");case 1:case"end":return t.stop()}}),t)})))()}},X=W,Y=Object(O["a"])(X,Q,V,!1,null,null,null),Z=Y.exports,ee=r("f9d5"),te=r.n(ee),re=(r("4413"),{computed:{user:function(){return this.$store.getters["user/user"]}}}),ne=r("657c");r("2bd9");i["default"].component("ImgInputer",ne["a"]),i["default"].use(te.a),i["default"].mixin(re),i["default"].config.productionTip=!1,new i["default"]({router:S,store:G,render:function(e){return e(Z)}}).$mount("#app")}});
//# sourceMappingURL=app.dedc9800.js.map