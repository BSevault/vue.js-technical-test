(function(t){function e(e){for(var n,u,i=e[0],s=e[1],a=e[2],d=0,l=[];d<i.length;d++)u=i[d],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&l.push(c[u][0]),c[u]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);p&&p(e);while(l.length)l.shift()();return o.push.apply(o,a||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,i=1;i<r.length;i++){var s=r[i];0!==c[s]&&(n=!1)}n&&(o.splice(e--,1),t=u(u.s=r[0]))}return t}var n={},c={app:0},o=[];function u(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=t,u.c=n,u.d=function(t,e,r){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(r,n,function(e){return t[e]}.bind(null,n));return r},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/vue.js-product-list/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var a=0;a<i.length;a++)e(i[a]);var p=s;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},1133:function(t,e,r){"use strict";r("fdd0")},"50b4":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23");function c(t,e,r,c,o,u){var i=Object(n["l"])("ProductList");return Object(n["g"])(),Object(n["c"])(i)}var o=function(t){return Object(n["i"])("data-v-561ce6cb"),t=t(),Object(n["h"])(),t},u=o((function(){return Object(n["e"])("h1",null,"Our products",-1)})),i={class:"product-list"};function s(t,e,r,c,o,s){var a=Object(n["l"])("sorting-select"),p=Object(n["l"])("ProductCard");return Object(n["g"])(),Object(n["d"])(n["a"],null,[u,Object(n["f"])(a,{onSortingOption:e[0]||(e[0]=function(t){return s.sortingMode(t)})}),Object(n["e"])("div",i,[(Object(n["g"])(!0),Object(n["d"])(n["a"],null,Object(n["k"])(o.products,(function(t){return Object(n["g"])(),Object(n["c"])(p,{key:t.id,product:t},null,8,["product"])})),128))])],64)}r("d3b7"),r("4e82"),r("a4d3"),r("e01a");var a={class:"product-card"},p=["src"],d={class:"category"};function l(t,e,r,c,o,u){return Object(n["g"])(),Object(n["d"])("div",a,[Object(n["e"])("img",{src:r.product.image},null,8,p),Object(n["e"])("h2",null,Object(n["m"])(r.product.title),1),Object(n["e"])("p",null,Object(n["m"])(r.product.description),1),Object(n["e"])("p",null,[Object(n["e"])("strong",null,Object(n["m"])(r.product.price)+" € ",1)]),Object(n["e"])("p",d,Object(n["m"])(r.product.category),1),Object(n["e"])("p",null," Rating : "+Object(n["m"])(r.product.rating.rate)+" ★ / "+Object(n["m"])(r.product.rating.count),1)])}var b={name:"ProductCard",props:{product:Object}},f=(r("75b3"),r("6b0d")),O=r.n(f);const j=O()(b,[["render",l],["__scopeId","data-v-64242a46"]]);var g=j,v=Object(n["e"])("label",{for:"sorting"},"Sort by:  ",-1),h=Object(n["e"])("option",null,"--",-1),m=Object(n["e"])("option",{value:"priceAsc"},"Price: Low to High",-1),y=Object(n["e"])("option",{value:"priceDesc"},"Price: High to Low",-1),P=Object(n["e"])("option",{value:"ratings"},"Best ratings",-1),w=[h,m,y,P];function S(t,e,r,c,o,u){return Object(n["g"])(),Object(n["d"])(n["a"],null,[v,Object(n["e"])("select",{onChange:e[0]||(e[0]=function(e){return t.$emit("sortingOption",e.target.value)}),name:"sorting",id:"sorting"},w,32)],64)}var _={name:"SortingSelect",emits:["sortingOption"]};const k=O()(_,[["render",S]]);var x=k,M={name:"ProductList",components:{ProductCard:g,SortingSelect:x},data:function(){var t=Object(n["j"])(null);return fetch("https://fakestoreapi.com/products").then((function(t){return t.json()})).then((function(e){return t.value=e})),{products:t}},methods:{sortAsc:function(t,e,r){t.sort((function(t,n){return void 0===r?(t=t[e],n=n[e]):(t=t[e][r],n=n[e][r]),t-n}))},sortDesc:function(t,e,r){t.sort((function(t,n){return void 0===r?(n=n[e],t=t[e]):(n=n[e][r],t=t[e][r]),n-t}))},sortingMode:function(t){switch(t){case"priceAsc":this.sortAsc(this.products,"price");break;case"priceDesc":this.sortDesc(this.products,"price");break;case"ratings":this.sortDesc(this.products,"rating","rate");break}}}};r("9c05");const A=O()(M,[["render",s],["__scopeId","data-v-561ce6cb"]]);var D=A,L={name:"App",components:{ProductList:D}};r("1133");const C=O()(L,[["render",c]]);var H=C;Object(n["b"])(H).mount("#app")},"75b3":function(t,e,r){"use strict";r("9a4a")},"9a4a":function(t,e,r){},"9c05":function(t,e,r){"use strict";r("50b4")},fdd0:function(t,e,r){}});
//# sourceMappingURL=app.e2e27b91.js.map