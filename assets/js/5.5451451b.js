(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{331:function(e,t,o){},362:function(e,t,o){"use strict";o(331)},369:function(e,t,o){"use strict";o.r(t);o(23),o(93),o(65),o(95);var a={name:"CodeGroup",data:function(){return{codeTabs:[],activeCodeTabIndex:-1}},watch:{activeCodeTabIndex:function(e){this.codeTabs.forEach((function(e){e.elm.classList.remove("theme-code-block__active")})),this.codeTabs[e].elm.classList.add("theme-code-block__active")}},mounted:function(){var e=this;this.codeTabs=(this.$slots.default||[]).filter((function(e){return Boolean(e.componentOptions)})).map((function(t,o){return""===t.componentOptions.propsData.active&&(e.activeCodeTabIndex=o),{title:t.componentOptions.propsData.title,elm:t.elm}})),-1===this.activeCodeTabIndex&&this.codeTabs.length>0&&(this.activeCodeTabIndex=0)},methods:{changeCodeTab:function(e){this.activeCodeTabIndex=e}}},n=(o(362),o(42)),c=Object(n.a)(a,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"theme-code-group"},[o("div",{staticClass:"theme-code-group__nav"},[o("ul",{staticClass:"theme-code-group__ul"},e._l(e.codeTabs,(function(t,a){return o("li",{key:t.title,staticClass:"theme-code-group__li"},[o("button",{staticClass:"theme-code-group__nav-tab",class:{"theme-code-group__nav-tab-active":a===e.activeCodeTabIndex},on:{click:function(t){return e.changeCodeTab(a)}}},[e._v("\n          "+e._s(t.title)+"\n        ")])])})),0)]),e._v(" "),e._t("default"),e._v(" "),e.codeTabs.length<1?o("pre",{staticClass:"pre-blank"},[e._v("// Make sure to add code blocks to your code group")]):e._e()],2)}),[],!1,null,"03d63238",null);t.default=c.exports}}]);