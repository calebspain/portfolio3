(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{284:function(t,e,n){"use strict";var strong=n(286),r=n(285);t.exports=n(287)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=strong.getEntry(r(this,"Map"),t);return e&&e.v},set:function(t,e){return strong.def(r(this,"Map"),0===t?0:t,e)}},strong,!0)},285:function(t,e,n){var r=n(29);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},286:function(t,e,n){"use strict";var r=n(35).f,o=n(90),c=n(173),l=n(59),f=n(171),d=n(172),v=n(133),h=n(175),y=n(134),_=n(30),j=n(131).fastKey,w=n(285),O=_?"_s":"size",m=function(t,e){var n,r=j(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,v){var h=t((function(t,r){f(t,h,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[O]=0,null!=r&&d(r,n,t[v],t)}));return c(h.prototype,{clear:function(){for(var t=w(this,e),data=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete data[n.i];t._f=t._l=void 0,t[O]=0},delete:function(t){var n=w(this,e),r=m(n,t);if(r){var o=r.n,c=r.p;delete n._i[r.i],r.r=!0,c&&(c.n=o),o&&(o.p=c),n._f==r&&(n._f=o),n._l==r&&(n._l=c),n[O]--}return!!r},forEach:function(t){w(this,e);for(var n,r=l(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!m(w(this,e),t)}}),_&&r(h.prototype,"size",{get:function(){return w(this,e)[O]}}),h},def:function(t,e,n){var r,o,c=m(t,e);return c?c.v=n:(t._l=c={i:o=j(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=c),r&&(r.n=c),t[O]++,"F"!==o&&(t._i[o]=c)),t},getEntry:m,setStrong:function(t,e,n){v(t,e,(function(t,n){this._t=w(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?h(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,h(1))}),n?"entries":"values",!n,!0),y(e)}}},287:function(t,e,n){"use strict";var r=n(19),o=n(13),c=n(37),l=n(173),meta=n(131),f=n(172),d=n(171),v=n(29),h=n(31),y=n(132),_=n(89),j=n(135);t.exports=function(t,e,n,w,O,m){var S=r[t],C=S,k=O?"set":"add",x=C&&C.prototype,P={},E=function(t){var e=x[t];c(x,t,"delete"==t||"has"==t?function(a){return!(m&&!v(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return m&&!v(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof C&&(m||x.forEach&&!h((function(){(new C).entries().next()})))){var M=new C,D=M[k](m?{}:-0,1)!=M,N=h((function(){M.has(1)})),B=y((function(t){new C(t)})),G=!m&&h((function(){for(var t=new C,e=5;e--;)t[k](e,e);return!t.has(-0)}));B||((C=e((function(e,n){d(e,C,t);var r=j(new S,e,C);return null!=n&&f(n,O,r[k],r),r}))).prototype=x,x.constructor=C),(N||G)&&(E("delete"),E("has"),O&&E("get")),(G||D)&&E(k),m&&x.clear&&delete x.clear}else C=w.getConstructor(e,t,O,k),l(C.prototype,n),meta.NEED=!0;return _(C,t),P[t]=C,o(o.G+o.W+o.F*(C!=S),P),m||w.setStrong(C,t,O),C}},288:function(t,e,n){"use strict";n(12),n(8),n(47),n(39),n(40);var r=n(2),o=(n(46),n(284),n(43),n(6),n(4),n(9),n(18),n(174),n(1)),c=n(58),l=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=v.reduce((function(t,e){return t["offset"+Object(l.t)(e)]={type:[String,Number],default:null},t}),{}),_=v.reduce((function(t,e){return t["order"+Object(l.t)(e)]={type:[String,Number],default:null},t}),{}),j={col:Object.keys(h),offset:Object.keys(y),order:Object.keys(_)};function w(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var O=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},_),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=O.get(l);return d||function(){var t,e;for(e in d=[],j)j[e].forEach((function(t){var r=n[t],o=w(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),O.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),o)}})},289:function(t,e,n){"use strict";n(12),n(8);var r=n(2),o=(n(46),n(284),n(43),n(6),n(4),n(9),n(39),n(40),n(174),n(1)),c=n(58),l=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=["start","end","center"];function y(t,e){return v.reduce((function(n,r){return n[t+Object(l.t)(r)]=e(),n}),{})}var _=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},j=y("align",(function(){return{type:String,default:null,validator:_}})),w=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},O=y("justify",(function(){return{type:String,default:null,validator:w}})),m=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},S=y("alignContent",(function(){return{type:String,default:null,validator:m}})),C={align:Object.keys(j),justify:Object.keys(O),alignContent:Object.keys(S)},k={align:"align",justify:"justify",alignContent:"align-content"};function x(t,e,n){var r=k[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var P=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:_}},j),{},{justify:{type:String,default:null,validator:w}},O),{},{alignContent:{type:String,default:null,validator:m}},S),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var d=P.get(l);return d||function(){var t,e;for(e in d=[],C)C[e].forEach((function(t){var r=n[t],o=x(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),P.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},294:function(t,e,n){var content=n(323);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("f74c5736",content,!0,{sourceMap:!1})},322:function(t,e,n){"use strict";var r=n(294);n.n(r).a},323:function(t,e,n){(e=n(10)(!1)).push([t.i,".desktop[data-v-01193676]{display:block}.mobile[data-v-01193676]{display:none}@media only screen and (max-width:960px){.desktop[data-v-01193676]{display:none!important}.mobile[data-v-01193676]{display:block}}",""]),t.exports=e},333:function(t,e,n){"use strict";n.r(e);var r={},o=(n(322),n(65)),c=n(91),l=n.n(c),f=n(288),d=n(283),v=n(289),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"px-4"},[n("v-col",{attrs:{cols:"12"}},[n("h1",{staticClass:"text-center mb-10",staticStyle:{"letter-spacing":"4px"}},[t._v("Experience")])]),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"mb-10"},[n("div",{staticClass:"d-flex justify-space-between align-end"},[n("div",[n("h3",[t._v("\n              Imagine Fertility\n              "),n("span",{staticClass:"d-inline desktop"},[t._v("-")]),t._v(" "),n("span",{staticClass:"font-weight-light d-inline desktop"},[t._v("Software Developer")])])]),t._v(" "),n("h4",{staticClass:"font-weight-light desktop"},[t._v("May 2019 - Present")])]),t._v(" "),n("hr",{staticClass:"my-2"}),t._v(" "),n("ul",[n("li",[t._v("Utilized Google Maps API to build out a UI which allows patients to find and contact their preferred clinic.")]),t._v(" "),n("li",[t._v("Created a 3rd party module which allows donor and 3rd party reproductive staff to manage the entire cycle without the need of multiple spreadsheets and sticky notes. (HTML, CSS, Bootstrap, JavaScript, jQuery, SQL, MariaDB, and PHP)")]),t._v(" "),n("li",[t._v("Developed multiple features which sent out documents for patients to sign through the use of DocuSign’s eSignature REST API.")]),t._v(" "),n("li",[t._v("Began migrating the Imagine Patient Relationship Manager to a new technology stack. (Git/GitHub, Material-UI, React, Sequelize, Node.js, Express, and Google Cloud)")])])])])],1),t._v(" "),n("v-row",{staticClass:"px-4"},[n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"mb-10"},[n("div",{staticClass:"d-flex justify-space-between align-end"},[n("div",[n("h3",[t._v("\n              Nan and Company Properties\n              "),n("span",{staticClass:"d-inline desktop"},[t._v("-")]),t._v(" "),n("span",{staticClass:"font-weight-light d-inline desktop"},[t._v("Web Developer")])])]),t._v(" "),n("h4",{staticClass:"font-weight-light desktop"},[t._v("November 2018 - May")])]),t._v(" "),n("hr",{staticClass:"my-2"}),t._v(" "),n("ul",[n("li",[t._v("Created responsive and interactive web pages using multiple front-end technologies, such as HTML, CSS, JavaScript, jQuery, and Bootstrap.")]),t._v(" "),n("li",[t._v("Worked as part of the marketing team to create landing pages for retargeting ads, improve page performance/SEO, and decrease bounce rates.")]),t._v(" "),n("li",[t._v("Automated repetitive tasks by creating spreadsheets which would populate the contents of an HTML document for emails and landing pages.")]),t._v(" "),n("li",[t._v("Assisted with email campaigns by adding custom features to existing templates.")])])])])],1)],1)}),[],!1,null,"01193676",null);e.default=component.exports;l()(component,{VCol:f.a,VContainer:d.a,VRow:v.a})}}]);