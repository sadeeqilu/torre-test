(self.webpackChunk=self.webpackChunk||[]).push([[186],{757:(t,e,a)=>{t.exports=a(666)},666:t=>{var e=function(t){"use strict";var e,a=Object.prototype,r=a.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},n=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",o=i.toStringTag||"@@toStringTag";function c(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,a){return t[e]=a}}function l(t,e,a,r){var i=e&&e.prototype instanceof m?e:m,n=Object.create(i.prototype),s=new S(r||[]);return n._invoke=function(t,e,a){var r=u;return function(i,n){if(r===h)throw new Error("Generator is already running");if(r===f){if("throw"===i)throw n;return T()}for(a.method=i,a.arg=n;;){var s=a.delegate;if(s){var o=E(s,a);if(o){if(o===p)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(r===u)throw r=f,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r=h;var c=d(t,e,a);if("normal"===c.type){if(r=a.done?f:v,c.arg===p)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(r=f,a.method="throw",a.arg=c.arg)}}}(t,a,s),n}function d(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var u="suspendedStart",v="suspendedYield",h="executing",f="completed",p={};function m(){}function y(){}function g(){}var _={};c(_,n,(function(){return this}));var C=Object.getPrototypeOf,x=C&&C(C(O([])));x&&x!==a&&r.call(x,n)&&(_=x);var w=g.prototype=m.prototype=Object.create(_);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function a(i,n,s,o){var c=d(t[i],t,n);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"==typeof u&&r.call(u,"__await")?e.resolve(u.__await).then((function(t){a("next",t,s,o)}),(function(t){a("throw",t,s,o)})):e.resolve(u).then((function(t){l.value=t,s(l)}),(function(t){return a("throw",t,s,o)}))}o(c.arg)}var i;this._invoke=function(t,r){function n(){return new e((function(e,i){a(t,r,e,i)}))}return i=i?i.then(n,n):n()}}function E(t,a){var r=t.iterator[a.method];if(r===e){if(a.delegate=null,"throw"===a.method){if(t.iterator.return&&(a.method="return",a.arg=e,E(t,a),"throw"===a.method))return p;a.method="throw",a.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=d(r,t.iterator,a.arg);if("throw"===i.type)return a.method="throw",a.arg=i.arg,a.delegate=null,p;var n=i.arg;return n?n.done?(a[t.resultName]=n.value,a.next=t.nextLoc,"return"!==a.method&&(a.method="next",a.arg=e),a.delegate=null,p):n:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,p)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function O(t){if(t){var a=t[n];if(a)return a.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,s=function a(){for(;++i<t.length;)if(r.call(t,i))return a.value=t[i],a.done=!1,a;return a.value=e,a.done=!0,a};return s.next=s}}return{next:T}}function T(){return{value:e,done:!0}}return y.prototype=g,c(w,"constructor",g),c(g,"constructor",y),y.displayName=c(g,o,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,o,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(L.prototype),c(L.prototype,s,(function(){return this})),t.AsyncIterator=L,t.async=function(e,a,r,i,n){void 0===n&&(n=Promise);var s=new L(l(e,a,r,i),n);return t.isGeneratorFunction(a)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},b(w),c(w,o,"Generator"),c(w,n,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var a in t)e.push(a);return e.reverse(),function a(){for(;e.length;){var r=e.pop();if(r in t)return a.value=r,a.done=!1,a}return a.done=!0,a}},t.values=O,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var a in this)"t"===a.charAt(0)&&r.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var a=this;function i(r,i){return o.type="throw",o.arg=t,a.next=r,i&&(a.method="next",a.arg=e),!!i}for(var n=this.tryEntries.length-1;n>=0;--n){var s=this.tryEntries[n],o=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),l=r.call(s,"finallyLoc");if(c&&l){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var n=i;break}}n&&("break"===t||"continue"===t)&&n.tryLoc<=e&&e<=n.finallyLoc&&(n=null);var s=n?n.completion:{};return s.type=t,s.arg=e,n?(this.method="next",this.next=n.finallyLoc,p):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),j(a),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var r=a.completion;if("throw"===r.type){var i=r.arg;j(a)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,a,r){return this.delegate={iterator:O(t),resultName:a,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},563:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>o});var r=a(757),i=a.n(r);function n(t,e,a,r,i,n,s){try{var o=t[n](s),c=o.value}catch(t){return void a(t)}o.done?e(c):Promise.resolve(c).then(r,i)}const s={name:"jobs",data:function(){return{jobs:[]}},mounted:function(){this.getJobs()},methods:{getJobs:function(){var t,e=this;return(t=i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.axios.get("/api/jobs").then((function(t){e.jobs=t.data})).catch((function(t){console.log(t),e.jobs=[]}));case 2:case"end":return t.stop()}}),t)})),function(){var e=this,a=arguments;return new Promise((function(r,i){var s=t.apply(e,a);function o(t){n(s,r,i,o,c,"next",t)}function c(t){n(s,r,i,o,c,"throw",t)}o(void 0)}))})()}}};const o=(0,a(900).Z)(s,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row",staticStyle:{padding:"20px"}},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header h1"},[t._v("\n                JOBS\n            ")]),t._v(" "),a("div",{staticClass:"p-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card mb-3",staticStyle:{"max-width":"540px"}},[a("div",{staticClass:"row g-0"},[a("div",{staticClass:"col-md-4"},[a("img",{staticClass:"img-fluid rounded-start",attrs:{src:"",alt:"company image    "}})]),t._v(" "),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Job title")]),t._v(" "),a("h6",{staticClass:"card-text"},[t._v("This is a wider card with supporting text below as a natural lead-in to additional content.")]),t._v(" "),a("div",{staticClass:"card-text"},[t._v("Company name.")]),t._v(" "),a("div",{staticClass:"card-text"},[t._v("Company Location.")]),t._v(" "),a("div",{staticClass:"card-text"},[t._v("Rank.")]),t._v(" "),a("div",{staticClass:"card-text"},[a("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])])])])])])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card mb-3",staticStyle:{"max-width":"540px"}},[a("div",{staticClass:"row g-0"},[a("div",{staticClass:"col-md-4"},[a("img",{staticClass:"img-fluid rounded-start",attrs:{src:"",alt:"company image    "}})]),t._v(" "),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Job title")]),t._v(" "),a("h6",{staticClass:"card-text"},[t._v("This is a wider card with supporting text below as a natural lead-in to additional content.")]),t._v(" "),a("div",{staticClass:"card-text"},[t._v("Company name.")]),t._v(" "),a("div",{staticClass:"card-text"},[t._v("Company Location.")]),t._v(" "),a("div",{staticClass:"card-text"},[t._v("Rank.")]),t._v(" "),a("div",{staticClass:"card-text"},[a("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])])])])])])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card mb-3",staticStyle:{"max-width":"540px"}},[a("div",{staticClass:"row g-0"},[a("div",{staticClass:"col-md-4"},[a("img",{staticClass:"img-fluid rounded-start",attrs:{src:"",alt:"company image    "}})]),t._v(" "),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Job title")]),t._v(" "),a("h6",{staticClass:"card-text"},[t._v("This is a wider card with supporting text below as a natural lead-in to additional content.")]),t._v(" "),a("div",{staticClass:"card-text"},[t._v("Company name.")]),t._v(" "),a("div",{staticClass:"card-text"},[t._v("Company Location.")]),t._v(" "),a("div",{staticClass:"card-text"},[t._v("Rank.")]),t._v(" "),a("div",{staticClass:"card-text"},[a("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])])])])])])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card mb-3",staticStyle:{"max-width":"540px"}},[a("div",{staticClass:"row g-0"},[a("div",{staticClass:"col-md-4"},[a("img",{staticClass:"img-fluid rounded-start",attrs:{src:"",alt:"company image    "}})]),t._v(" "),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Job title")]),t._v(" "),a("h6",{staticClass:"card-text"},[t._v("This is a wider card with supporting text below as a natural lead-in to additional content.")]),t._v(" "),a("div",{staticClass:"card-text"},[t._v("Company name.")]),t._v(" "),a("div",{staticClass:"card-text"},[t._v("Company Location.")]),t._v(" "),a("div",{staticClass:"card-text"},[t._v("Rank.")]),t._v(" "),a("div",{staticClass:"card-text"},[a("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])])])])])])])]),t._v(" "),a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination justify-content-end"},[a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._v(" "),a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("1")])]),t._v(" "),a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("2")])]),t._v(" "),a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("3")])]),t._v(" "),a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])])])])])])])}],!1,null,null,null).exports},900:(t,e,a)=>{"use strict";function r(t,e,a,r,i,n,s,o){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=a,l._compiled=!0),r&&(l.functional=!0),n&&(l._scopeId="data-v-"+n),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=c):i&&(c=o?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,e){return c.call(e),d(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:l}}a.d(e,{Z:()=>r})}}]);