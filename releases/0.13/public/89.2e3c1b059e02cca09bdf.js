webpackJsonp([89],{324:function(t,e,a){var n=a(0)(a(567),a(895),null,null,null);t.exports=n.exports},567:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{items:["web","shopping","videos","images","news"],text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}}}},895:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-tabs",{attrs:{dark:"",grow:""}},[a("v-toolbar",{staticClass:"cyan",attrs:{dark:""}},[a("v-toolbar-side-icon"),a("v-toolbar-title",[t._v("Page title")]),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("search")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("more_vert")])],1)],1),a("v-tabs-bar",{staticClass:"cyan",slot:"activators"},[a("v-tabs-slider",{staticClass:"yellow"}),t._l(t.items,function(e,n){return a("v-tabs-item",{key:e,attrs:{href:"#tab-"+(n+1)}},[t._v("\n      "+t._s(e)+"\n    ")])}),a("v-menu",{attrs:{"nudge-width":100,left:"",bottom:""}},[a("v-tabs-item",{slot:"activator"},[t._v("\n        Menu\n        "),a("v-icon",[t._v("arrow_drop_down")])],1),a("v-list",{staticClass:"grey lighten-3"},t._l(4,function(e){return a("v-list-tile",{key:e,attrs:{tag:"a"}},[t._v("\n          Item "+t._s(e)+"\n        ")])}))],1)],2),t._l(5,function(e){return a("v-tabs-content",{key:e,attrs:{id:"tab-"+e}},[a("v-card",{attrs:{flat:""}},[a("v-card-text",[t._v(t._s(t.text))])],1)],1)})],2)},staticRenderFns:[]}}});