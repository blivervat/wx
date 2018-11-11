require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(13);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_6a2a3c7f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(16);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(14)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6a2a3c7f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_template_compiler_index_id_data_v_6a2a3c7f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_4_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6a2a3c7f", Component.options)
  } else {
    hotAPI.reload("data-v-6a2a3c7f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      current: 'homepage',
      userInfo: {}
    };
  },


  methods: {
    handleChange: function handleChange(_ref) {
      var detail = _ref.detail;

      this.setData({
        current: detail.key
      });
    }
  },

  created: function created() {}
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('i-input', {
    attrs: {
      "title": "收货人",
      "autofocus": "",
      "placeholder": "名字",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('i-tab-bar', {
    attrs: {
      "bindchange": "handleChange",
      "mpcomid": '6'
    }
  }, [_c('i-tab-bar-item', {
    key: "homepage",
    attrs: {
      "img": "/assets/img/tar.jpg",
      "title": "细支烟",
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('i-tab-bar-item', {
    key: "group",
    attrs: {
      "img": "/assets/img/tar.jpg",
      "title": "短支烟",
      "mpcomid": '2'
    }
  }), _vm._v(" "), _c('i-tab-bar-item', {
    key: "remind",
    attrs: {
      "img": "/assets/img/tar.jpg",
      "title": "爆珠烟",
      "mpcomid": '3'
    }
  }), _vm._v(" "), _c('i-tab-bar-item', {
    key: "mine",
    attrs: {
      "img": "/assets/img/tar.jpg",
      "title": "雪茄烟",
      "mpcomid": '4'
    }
  }), _vm._v(" "), _c('i-tab-bar-item', {
    key: "mine",
    attrs: {
      "img": "/assets/img/tar.jpg",
      "title": "雪茄烟",
      "mpcomid": '5'
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "main"
  }, [_c('i-cell-group', {
    attrs: {
      "mpcomid": '8'
    }
  }, [_c('i-cell', {
    attrs: {
      "title": "新品上市",
      "value": "查看更多",
      "is-link": "",
      "mpcomid": '7'
    }
  })], 1), _vm._v(" "), _c('i-row', {
    attrs: {
      "mpcomid": '13'
    }
  }, [_c('i-col', {
    attrs: {
      "span": "6",
      "i-class": "col-class",
      "mpcomid": '9'
    }
  }, [_c('div', [_c('img', {
    attrs: {
      "src": "../../assets/img/smoke.jpg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('span', [_vm._v("芙蓉王(硬细支)")])]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "6",
      "i-class": "col-class",
      "mpcomid": '10'
    }
  }, [_c('div', [_c('img', {
    attrs: {
      "src": "../../assets/img/smoke.jpg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('span', [_vm._v("芙蓉王(硬细支)")])]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "6",
      "i-class": "col-class",
      "mpcomid": '11'
    }
  }, [_c('div', [_c('img', {
    attrs: {
      "src": "../../assets/img/smoke.jpg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('span', [_vm._v("芙蓉王(硬细支)")])]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "6",
      "i-class": "col-class",
      "mpcomid": '12'
    }
  }, [_c('div', [_c('img', {
    attrs: {
      "src": "../../assets/img/smoke.jpg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('span', [_vm._v("芙蓉王(硬细支)")])])], 1), _vm._v(" "), _vm._m(1)], 1), _vm._v(" "), _c('i-panel', {
    attrs: {
      "title": "A",
      "i-class": "show-list-title",
      "mpcomid": '14'
    }
  }, [_c('view', [_c('div', {
    staticClass: "shop-list"
  }, [_c('img', {
    attrs: {
      "src": "/assets/img/smoke.jpg",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("555香烟")])]), _vm._v(" "), _c('div', {
    staticClass: "shop-list"
  }, [_c('img', {
    attrs: {
      "src": "/assets/img/smoke.jpg",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("555香烟")])])])])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "banner"
  }, [_c('img', {
    attrs: {
      "src": "../../assets/img/banner.jpg",
      "alt": ""
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "small_banner"
  }, [_c('img', {
    attrs: {
      "src": "../../assets/img/small_banner.png",
      "alt": ""
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6a2a3c7f", esExports)
  }
}

/***/ })
],[12]);
//# sourceMappingURL=main.js.map