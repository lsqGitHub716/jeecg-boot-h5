(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{49445:function(e,t,n){"use strict";n.r(t);var a=n("d07a"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=o.a},"5bf1":function(e,t,n){"use strict";n.r(t);var a=n("9a12"),o=n("49445");for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);var c,u=n("f0c5"),r=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,"3b5def1e",null,!1,a["a"],c);t["default"]=r.exports},"9a12":function(e,t,n){"use strict";var a,o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",["home"==e.PageCur?n("home",{key:e.commponent1Key,attrs:{cur:e.PageCur}}):e._e(),"people"==e.PageCur?n("people",{key:e.commponent2Key}):e._e(),n("v-uni-view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[n("v-uni-view",{class:"home"==e.PageCur?"action text-green":"action text-gray",attrs:{"data-cur":"home"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.NavChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cuIcon-homefill"}),e._v("主页")],1),n("v-uni-view",{class:"peoplelis"==e.PageCur?"action text-green":"action text-gray",attrs:{"data-cur":"peoplelis"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.NavChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cuIcon-peoplelist"}),e._v("待我审批")],1),n("v-uni-view",{class:"profile"==e.PageCur?"action text-green":"action text-gray",attrs:{"data-cur":"profile"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.NavChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cuIcon-profile"}),e._v("我发起的")],1),n("v-uni-view",{class:"people"==e.PageCur?"action text-green":"action text-gray",attrs:{"data-cur":"people"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.NavChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cuIcon-people"}),e._v("个人中心")],1)],1)],1)},i=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}))},d07a:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{PageCur:"home",commponent1Key:0,commponent2Key:0}},onLoad:function(){this.PageCur="home",++that.commponent1Key,++that.commponent2Key},methods:{NavChange:function(e){this.PageCur=e.currentTarget.dataset.cur}}};t.default=a}}]);