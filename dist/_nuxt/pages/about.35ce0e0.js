(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{284:function(t,e,n){"use strict";var strong=n(286),r=n(285);t.exports=n(287)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=strong.getEntry(r(this,"Map"),t);return e&&e.v},set:function(t,e){return strong.def(r(this,"Map"),0===t?0:t,e)}},strong,!0)},285:function(t,e,n){var r=n(29);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},286:function(t,e,n){"use strict";var r=n(35).f,o=n(90),c=n(173),l=n(59),f=n(171),v=n(172),d=n(133),y=n(175),h=n(134),_=n(30),O=n(131).fastKey,j=n(285),w=_?"_s":"size",m=function(t,e){var n,r=O(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,d){var y=t((function(t,r){f(t,y,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[w]=0,null!=r&&v(r,n,t[d],t)}));return c(y.prototype,{clear:function(){for(var t=j(this,e),data=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete data[n.i];t._f=t._l=void 0,t[w]=0},delete:function(t){var n=j(this,e),r=m(n,t);if(r){var o=r.n,c=r.p;delete n._i[r.i],r.r=!0,c&&(c.n=o),o&&(o.p=c),n._f==r&&(n._f=o),n._l==r&&(n._l=c),n[w]--}return!!r},forEach:function(t){j(this,e);for(var n,r=l(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!m(j(this,e),t)}}),_&&r(y.prototype,"size",{get:function(){return j(this,e)[w]}}),y},def:function(t,e,n){var r,o,c=m(t,e);return c?c.v=n:(t._l=c={i:o=O(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=c),r&&(r.n=c),t[w]++,"F"!==o&&(t._i[o]=c)),t},getEntry:m,setStrong:function(t,e,n){d(t,e,(function(t,n){this._t=j(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?y(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,y(1))}),n?"entries":"values",!n,!0),h(e)}}},287:function(t,e,n){"use strict";var r=n(19),o=n(13),c=n(37),l=n(173),meta=n(131),f=n(172),v=n(171),d=n(29),y=n(31),h=n(132),_=n(89),O=n(135);t.exports=function(t,e,n,j,w,m){var S=r[t],k=S,C=w?"set":"add",x=k&&k.prototype,P={},E=function(t){var e=x[t];c(x,t,"delete"==t||"has"==t?function(a){return!(m&&!d(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return m&&!d(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof k&&(m||x.forEach&&!y((function(){(new k).entries().next()})))){var I=new k,D=I[C](m?{}:-0,1)!=I,M=y((function(){I.has(1)})),N=h((function(t){new k(t)})),B=!m&&y((function(){for(var t=new k,e=5;e--;)t[C](e,e);return!t.has(-0)}));N||((k=e((function(e,n){v(e,k,t);var r=O(new S,e,k);return null!=n&&f(n,w,r[C],r),r}))).prototype=x,x.constructor=k),(M||B)&&(E("delete"),E("has"),w&&E("get")),(B||D)&&E(C),m&&x.clear&&delete x.clear}else k=j.getConstructor(e,t,w,C),l(k.prototype,n),meta.NEED=!0;return _(k,t),P[t]=k,o(o.G+o.W+o.F*(k!=S),P),m||j.setStrong(k,t,w),k}},288:function(t,e,n){"use strict";n(12),n(8),n(47),n(39),n(40);var r=n(2),o=(n(46),n(284),n(43),n(6),n(4),n(9),n(18),n(174),n(1)),c=n(58),l=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=["sm","md","lg","xl"],y=d.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=d.reduce((function(t,e){return t["offset"+Object(l.t)(e)]={type:[String,Number],default:null},t}),{}),_=d.reduce((function(t,e){return t["order"+Object(l.t)(e)]={type:[String,Number],default:null},t}),{}),O={col:Object.keys(y),offset:Object.keys(h),order:Object.keys(_)};function j(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:v(v(v(v({cols:{type:[Boolean,String,Number],default:!1}},y),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},_),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var v=w.get(l);return v||function(){var t,e;for(e in v=[],O)O[e].forEach((function(t){var r=n[t],o=j(e,t,r);o&&v.push(o)}));var o=v.some((function(t){return t.startsWith("col-")}));v.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),w.set(l,v)}(),t(n.tag,Object(c.a)(data,{class:v}),o)}})},289:function(t,e,n){"use strict";n(12),n(8);var r=n(2),o=(n(46),n(284),n(43),n(6),n(4),n(9),n(39),n(40),n(174),n(1)),c=n(58),l=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=["sm","md","lg","xl"],y=["start","end","center"];function h(t,e){return d.reduce((function(n,r){return n[t+Object(l.t)(r)]=e(),n}),{})}var _=function(t){return[].concat(y,["baseline","stretch"]).includes(t)},O=h("align",(function(){return{type:String,default:null,validator:_}})),j=function(t){return[].concat(y,["space-between","space-around"]).includes(t)},w=h("justify",(function(){return{type:String,default:null,validator:j}})),m=function(t){return[].concat(y,["space-between","space-around","stretch"]).includes(t)},S=h("alignContent",(function(){return{type:String,default:null,validator:m}})),k={align:Object.keys(O),justify:Object.keys(w),alignContent:Object.keys(S)},C={align:"align",justify:"justify",alignContent:"align-content"};function x(t,e,n){var r=C[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var P=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:v(v(v({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:_}},O),{},{justify:{type:String,default:null,validator:j}},w),{},{alignContent:{type:String,default:null,validator:m}},S),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var v=P.get(l);return v||function(){var t,e;for(e in v=[],k)k[e].forEach((function(t){var r=n[t],o=x(e,t,r);o&&v.push(o)}));v.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),P.set(l,v)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:v}),o)}})},290:function(t,e,n){var content=n(300);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("61f6ef94",content,!0,{sourceMap:!1})},299:function(t,e,n){"use strict";var r=n(290);n.n(r).a},300:function(t,e,n){(e=n(10)(!1)).push([t.i,".profile-image[data-v-80a2dad0]{max-width:80%}",""]),t.exports=e},331:function(t,e,n){"use strict";n.r(e);var r={},o=(n(299),n(65)),c=n(91),l=n.n(c),f=n(288),v=n(283),d=n(114),y=n(289),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"py-0"},[n("v-row",{staticClass:"px-4"},[n("v-col",{attrs:{cols:"12"}},[n("h1",{staticClass:"text-center mb-10",staticStyle:{"letter-spacing":"4px"}},[t._v("About")])]),t._v(" "),n("v-col",{staticClass:"d-flex flex-column justify-center align-center py-0",attrs:{cols:"12",md:"6"}},[n("v-img",{staticClass:"profile-image mb-10",attrs:{src:"r.JPG"}})],1),t._v(" "),n("v-col",{staticClass:"py-0",attrs:{cols:"12",md:"6"}},[n("div",{staticClass:"mb-10"},[n("h3",[t._v("Skills")]),t._v(" "),n("hr",{staticClass:"my-2"}),t._v(" "),n("p",[n("b",[t._v("Front-end:")]),t._v(" HTML, CSS, JavaScript, Vue.js, Vuex, Nuxt.js\n        ")]),t._v(" "),n("p",[n("b",[t._v("Backend:")]),t._v(" MySQL, MongoDB, PHP, Node.js\n        ")]),t._v(" "),n("p",[n("b",[t._v("Other:")]),t._v(" Git/GitHub, WordPress, Firebase\n        ")])]),t._v(" "),n("div",{staticClass:"mb-10"},[n("h3",[t._v("Other Interests")]),t._v(" "),n("hr",{staticClass:"my-2"}),t._v(" "),n("p",[n("b",[t._v("Entrepreneurship:")]),t._v("\n          One of the main reasons I began writing code was because I wanted to take my ideas and bring them to life.\n          I enjoy spending my free time thinking of new ideas and how I can build them.\n        ")]),t._v(" "),n("p",[n("b",[t._v("Investing:")]),t._v("\n          Another reason I began writing code is because I believed I could write a script that would help me predict the stock market.\n          I was extremely wrong, but still really enjoy looking into new ways of investing.\n        ")])])])],1)],1)}),[],!1,null,"80a2dad0",null);e.default=component.exports;l()(component,{VCol:f.a,VContainer:v.a,VImg:d.a,VRow:y.a})}}]);