(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueColor"] = factory();
	else
		root["VueColor"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Compact = __webpack_require__(1);
	
	var _Compact2 = _interopRequireDefault(_Compact);
	
	var _Material = __webpack_require__(14);
	
	var _Material2 = _interopRequireDefault(_Material);
	
	var _Slider = __webpack_require__(19);
	
	var _Slider2 = _interopRequireDefault(_Slider);
	
	var _Swatches = __webpack_require__(29);
	
	var _Swatches2 = _interopRequireDefault(_Swatches);
	
	var _Photoshop = __webpack_require__(35);
	
	var _Photoshop2 = _interopRequireDefault(_Photoshop);
	
	var _Sketch = __webpack_require__(57);
	
	var _Sketch2 = _interopRequireDefault(_Sketch);
	
	var _CmykSketch = __webpack_require__(62);
	
	var _CmykSketch2 = _interopRequireDefault(_CmykSketch);
	
	var _Chrome = __webpack_require__(67);
	
	var _Chrome2 = _interopRequireDefault(_Chrome);
	
	var _Alpha = __webpack_require__(46);
	
	var _Alpha2 = _interopRequireDefault(_Alpha);
	
	var _Checkboard = __webpack_require__(50);
	
	var _Checkboard2 = _interopRequireDefault(_Checkboard);
	
	var _EditableInput = __webpack_require__(8);
	
	var _EditableInput2 = _interopRequireDefault(_EditableInput);
	
	var _Hue = __webpack_require__(23);
	
	var _Hue2 = _interopRequireDefault(_Hue);
	
	var _Saturation = __webpack_require__(39);
	
	var _Saturation2 = _interopRequireDefault(_Saturation);
	
	var _color = __webpack_require__(6);
	
	var _color2 = _interopRequireDefault(_color);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var VueColor = {
	  Compact: _Compact2.default,
	  Material: _Material2.default,
	  Slider: _Slider2.default,
	  Swatches: _Swatches2.default,
	  Photoshop: _Photoshop2.default,
	  Sketch: _Sketch2.default,
	  CmykSketch: _CmykSketch2.default,
	  Chrome: _Chrome2.default,
	  Alpha: _Alpha2.default,
	  Checkboard: _Checkboard2.default,
	  EditableInput: _EditableInput2.default,
	  Hue: _Hue2.default,
	  Saturation: _Saturation2.default,
	  ColorMixin: _color2.default
	};
	
	module.exports = VueColor;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(2)
	__vue_script__ = __webpack_require__(5)
	__vue_template__ = __webpack_require__(13)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\cassio\\Documents\\GitHub\\vue-color\\src\\components\\Compact.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-ac420c66&file=Compact.vue!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/eslint-loader/index.js!./../../node_modules/eslint-loader/index.js!./Compact.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-ac420c66&file=Compact.vue!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/eslint-loader/index.js!./../../node_modules/eslint-loader/index.js!./Compact.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-ac420c66&file=Compact.vue!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/eslint-loader/index.js!./../../node_modules/eslint-loader/index.js!./Compact.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _color = __webpack_require__(6);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _EditableInput = __webpack_require__(8);
	
	var _EditableInput2 = _interopRequireDefault(_EditableInput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultColors = ['#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF', '#333333', '#808080', '#CCCCCC', '#D33115', '#E27300', '#FCC400', '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF', '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00', '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E'];
	
	exports.default = {
	  name: 'Compact',
	  mixins: [_color2.default],
	  props: {},
	  components: {
	    'ed-in': _EditableInput2.default
	  },
	  computed: {
	    pick: function pick() {
	      return this.colors.hex;
	    }
	  },
	  data: function data() {
	    return {
	      defaultColors: defaultColors
	    };
	  },
	
	  methods: {
	    handlerClick: function handlerClick(c) {
	      this.colorChange({
	        hex: c,
	        source: 'hex'
	      });
	    },
	    onChange: function onChange(data) {
	      if (!data) {
	        return;
	      }
	      if (data.hex) {
	        this.isValidHex(data.hex) && this.colorChange({
	          hex: data.hex,
	          source: 'hex'
	        });
	      } else if (data.r || data.g || data.b) {
	        this.colorChange({
	          r: data.r || this.colors.rgba.r,
	          g: data.g || this.colors.rgba.g,
	          b: data.b || this.colors.rgba.b,
	          a: data.a || this.colors.rgba.a,
	          source: 'rgba'
	        });
	      }
	    }
	  }
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _tinycolor = __webpack_require__(7);
	
	var _tinycolor2 = _interopRequireDefault(_tinycolor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _colorChange(data, oldHue) {
	  if (!data) {
	    return;
	  }
	  if (data.a && data.a > 1) {
	    data.a = 1;
	  }
	
	  var color = data.hex ? (0, _tinycolor2.default)(data.hex) : (0, _tinycolor2.default)(data);
	  var hsl = color.toHsl();
	  var hsv = color.toHsv();
	  var rgba = color.toRgb();
	
	  if (hsl.s === 0) {
	    hsl.h = oldHue || 0;
	    hsv.h = oldHue || 0;
	  }
	  return {
	    hsl: hsl,
	    hex: color.toHexString().toUpperCase(),
	    rgba: rgba,
	    hsv: hsv,
	    oldHue: data.h || oldHue || hsl.h,
	    source: data.source,
	    a: data.a || 1
	  };
	}
	
	exports.default = {
	  props: {
	    colors: Object
	  },
	  created: function created() {
	    this.colors = _colorChange(this.colors);
	  },
	
	  methods: {
	    colorChange: function colorChange(data, oldHue) {
	      this.colors = _colorChange(data, oldHue);
	    },
	    isValidHex: function isValidHex(hex) {
	      return (0, _tinycolor2.default)(hex).isValid();
	    },
	    simpleCheckForValidColor: function simpleCheckForValidColor(data) {
	      var keysToCheck = ['r', 'g', 'b', 'a', 'h', 's', 'a', 'v'];
	      var checked = 0;
	      var passed = 0;
	
	      for (var i = 0; i < keysToCheck.length; i++) {
	        var letter = keysToCheck[i];
	        if (data[letter]) {
	          checked++;
	          if (!isNaN(data[letter])) {
	            passed++;
	          }
	        }
	      }
	
	      if (checked === passed) {
	        return data;
	      }
	    }
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;// TinyColor v1.3.0
	// https://github.com/bgrins/TinyColor
	// Brian Grinstead, MIT License
	
	(function() {
	
	var trimLeft = /^\s+/,
	    trimRight = /\s+$/,
	    tinyCounter = 0,
	    math = Math,
	    mathRound = math.round,
	    mathMin = math.min,
	    mathMax = math.max,
	    mathRandom = math.random;
	
	function tinycolor (color, opts) {
	
	    color = (color) ? color : '';
	    opts = opts || { };
	
	    // If input is already a tinycolor, return itself
	    if (color instanceof tinycolor) {
	       return color;
	    }
	    // If we are called as a function, call using new instead
	    if (!(this instanceof tinycolor)) {
	        return new tinycolor(color, opts);
	    }
	
	    var rgb = inputToRGB(color);
	    this._originalInput = color,
	    this._r = rgb.r,
	    this._g = rgb.g,
	    this._b = rgb.b,
	    this._a = rgb.a,
	    this._roundA = mathRound(100*this._a) / 100,
	    this._format = opts.format || rgb.format;
	    this._gradientType = opts.gradientType;
	
	    // Don't let the range of [0,255] come back in [0,1].
	    // Potentially lose a little bit of precision here, but will fix issues where
	    // .5 gets interpreted as half of the total, instead of half of 1
	    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
	    if (this._r < 1) { this._r = mathRound(this._r); }
	    if (this._g < 1) { this._g = mathRound(this._g); }
	    if (this._b < 1) { this._b = mathRound(this._b); }
	
	    this._ok = rgb.ok;
	    this._tc_id = tinyCounter++;
	}
	
	tinycolor.prototype = {
	    isDark: function() {
	        return this.getBrightness() < 128;
	    },
	    isLight: function() {
	        return !this.isDark();
	    },
	    isValid: function() {
	        return this._ok;
	    },
	    getOriginalInput: function() {
	      return this._originalInput;
	    },
	    getFormat: function() {
	        return this._format;
	    },
	    getAlpha: function() {
	        return this._a;
	    },
	    getBrightness: function() {
	        //http://www.w3.org/TR/AERT#color-contrast
	        var rgb = this.toRgb();
	        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
	    },
	    getLuminance: function() {
	        //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
	        var rgb = this.toRgb();
	        var RsRGB, GsRGB, BsRGB, R, G, B;
	        RsRGB = rgb.r/255;
	        GsRGB = rgb.g/255;
	        BsRGB = rgb.b/255;
	
	        if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
	        if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
	        if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
	        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
	    },
	    setAlpha: function(value) {
	        this._a = boundAlpha(value);
	        this._roundA = mathRound(100*this._a) / 100;
	        return this;
	    },
	    toHsv: function() {
	        var hsv = rgbToHsv(this._r, this._g, this._b);
	        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
	    },
	    toHsvString: function() {
	        var hsv = rgbToHsv(this._r, this._g, this._b);
	        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
	        return (this._a == 1) ?
	          "hsv("  + h + ", " + s + "%, " + v + "%)" :
	          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
	    },
	    toHsl: function() {
	        var hsl = rgbToHsl(this._r, this._g, this._b);
	        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
	    },
	    toHslString: function() {
	        var hsl = rgbToHsl(this._r, this._g, this._b);
	        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
	        return (this._a == 1) ?
	          "hsl("  + h + ", " + s + "%, " + l + "%)" :
	          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
	    },
	    toHex: function(allow3Char) {
	        return rgbToHex(this._r, this._g, this._b, allow3Char);
	    },
	    toHexString: function(allow3Char) {
	        return '#' + this.toHex(allow3Char);
	    },
	    toHex8: function() {
	        return rgbaToHex(this._r, this._g, this._b, this._a);
	    },
	    toHex8String: function() {
	        return '#' + this.toHex8();
	    },
	    toRgb: function() {
	        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
	    },
	    toRgbString: function() {
	        return (this._a == 1) ?
	          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
	          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
	    },
	    toPercentageRgb: function() {
	        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
	    },
	    toPercentageRgbString: function() {
	        return (this._a == 1) ?
	          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
	          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
	    },
	    toName: function() {
	        if (this._a === 0) {
	            return "transparent";
	        }
	
	        if (this._a < 1) {
	            return false;
	        }
	
	        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
	    },
	    toFilter: function(secondColor) {
	        var hex8String = '#' + rgbaToHex(this._r, this._g, this._b, this._a);
	        var secondHex8String = hex8String;
	        var gradientType = this._gradientType ? "GradientType = 1, " : "";
	
	        if (secondColor) {
	            var s = tinycolor(secondColor);
	            secondHex8String = s.toHex8String();
	        }
	
	        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
	    },
	    toString: function(format) {
	        var formatSet = !!format;
	        format = format || this._format;
	
	        var formattedString = false;
	        var hasAlpha = this._a < 1 && this._a >= 0;
	        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "name");
	
	        if (needsAlphaFormat) {
	            // Special case for "transparent", all other non-alpha formats
	            // will return rgba when there is transparency.
	            if (format === "name" && this._a === 0) {
	                return this.toName();
	            }
	            return this.toRgbString();
	        }
	        if (format === "rgb") {
	            formattedString = this.toRgbString();
	        }
	        if (format === "prgb") {
	            formattedString = this.toPercentageRgbString();
	        }
	        if (format === "hex" || format === "hex6") {
	            formattedString = this.toHexString();
	        }
	        if (format === "hex3") {
	            formattedString = this.toHexString(true);
	        }
	        if (format === "hex8") {
	            formattedString = this.toHex8String();
	        }
	        if (format === "name") {
	            formattedString = this.toName();
	        }
	        if (format === "hsl") {
	            formattedString = this.toHslString();
	        }
	        if (format === "hsv") {
	            formattedString = this.toHsvString();
	        }
	
	        return formattedString || this.toHexString();
	    },
	    clone: function() {
	        return tinycolor(this.toString());
	    },
	
	    _applyModification: function(fn, args) {
	        var color = fn.apply(null, [this].concat([].slice.call(args)));
	        this._r = color._r;
	        this._g = color._g;
	        this._b = color._b;
	        this.setAlpha(color._a);
	        return this;
	    },
	    lighten: function() {
	        return this._applyModification(lighten, arguments);
	    },
	    brighten: function() {
	        return this._applyModification(brighten, arguments);
	    },
	    darken: function() {
	        return this._applyModification(darken, arguments);
	    },
	    desaturate: function() {
	        return this._applyModification(desaturate, arguments);
	    },
	    saturate: function() {
	        return this._applyModification(saturate, arguments);
	    },
	    greyscale: function() {
	        return this._applyModification(greyscale, arguments);
	    },
	    spin: function() {
	        return this._applyModification(spin, arguments);
	    },
	
	    _applyCombination: function(fn, args) {
	        return fn.apply(null, [this].concat([].slice.call(args)));
	    },
	    analogous: function() {
	        return this._applyCombination(analogous, arguments);
	    },
	    complement: function() {
	        return this._applyCombination(complement, arguments);
	    },
	    monochromatic: function() {
	        return this._applyCombination(monochromatic, arguments);
	    },
	    splitcomplement: function() {
	        return this._applyCombination(splitcomplement, arguments);
	    },
	    triad: function() {
	        return this._applyCombination(triad, arguments);
	    },
	    tetrad: function() {
	        return this._applyCombination(tetrad, arguments);
	    }
	};
	
	// If input is an object, force 1 into "1.0" to handle ratios properly
	// String input requires "1.0" as input, so 1 will be treated as 1
	tinycolor.fromRatio = function(color, opts) {
	    if (typeof color == "object") {
	        var newColor = {};
	        for (var i in color) {
	            if (color.hasOwnProperty(i)) {
	                if (i === "a") {
	                    newColor[i] = color[i];
	                }
	                else {
	                    newColor[i] = convertToPercentage(color[i]);
	                }
	            }
	        }
	        color = newColor;
	    }
	
	    return tinycolor(color, opts);
	};
	
	// Given a string or object, convert that input to RGB
	// Possible string inputs:
	//
	//     "red"
	//     "#f00" or "f00"
	//     "#ff0000" or "ff0000"
	//     "#ff000000" or "ff000000"
	//     "rgb 255 0 0" or "rgb (255, 0, 0)"
	//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
	//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
	//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
	//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
	//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
	//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
	//
	function inputToRGB(color) {
	
	    var rgb = { r: 0, g: 0, b: 0 };
	    var a = 1;
	    var ok = false;
	    var format = false;
	
	    if (typeof color == "string") {
	        color = stringInputToObject(color);
	    }
	
	    if (typeof color == "object") {
	        if (color.hasOwnProperty("r") && color.hasOwnProperty("g") && color.hasOwnProperty("b")) {
	            rgb = rgbToRgb(color.r, color.g, color.b);
	            ok = true;
	            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
	        }
	        else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("v")) {
	            color.s = convertToPercentage(color.s);
	            color.v = convertToPercentage(color.v);
	            rgb = hsvToRgb(color.h, color.s, color.v);
	            ok = true;
	            format = "hsv";
	        }
	        else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("l")) {
	            color.s = convertToPercentage(color.s);
	            color.l = convertToPercentage(color.l);
	            rgb = hslToRgb(color.h, color.s, color.l);
	            ok = true;
	            format = "hsl";
	        }
	
	        if (color.hasOwnProperty("a")) {
	            a = color.a;
	        }
	    }
	
	    a = boundAlpha(a);
	
	    return {
	        ok: ok,
	        format: color.format || format,
	        r: mathMin(255, mathMax(rgb.r, 0)),
	        g: mathMin(255, mathMax(rgb.g, 0)),
	        b: mathMin(255, mathMax(rgb.b, 0)),
	        a: a
	    };
	}
	
	
	// Conversion Functions
	// --------------------
	
	// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
	// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
	
	// `rgbToRgb`
	// Handle bounds / percentage checking to conform to CSS color spec
	// <http://www.w3.org/TR/css3-color/>
	// *Assumes:* r, g, b in [0, 255] or [0, 1]
	// *Returns:* { r, g, b } in [0, 255]
	function rgbToRgb(r, g, b){
	    return {
	        r: bound01(r, 255) * 255,
	        g: bound01(g, 255) * 255,
	        b: bound01(b, 255) * 255
	    };
	}
	
	// `rgbToHsl`
	// Converts an RGB color value to HSL.
	// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
	// *Returns:* { h, s, l } in [0,1]
	function rgbToHsl(r, g, b) {
	
	    r = bound01(r, 255);
	    g = bound01(g, 255);
	    b = bound01(b, 255);
	
	    var max = mathMax(r, g, b), min = mathMin(r, g, b);
	    var h, s, l = (max + min) / 2;
	
	    if(max == min) {
	        h = s = 0; // achromatic
	    }
	    else {
	        var d = max - min;
	        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
	        switch(max) {
	            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
	            case g: h = (b - r) / d + 2; break;
	            case b: h = (r - g) / d + 4; break;
	        }
	
	        h /= 6;
	    }
	
	    return { h: h, s: s, l: l };
	}
	
	// `hslToRgb`
	// Converts an HSL color value to RGB.
	// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
	// *Returns:* { r, g, b } in the set [0, 255]
	function hslToRgb(h, s, l) {
	    var r, g, b;
	
	    h = bound01(h, 360);
	    s = bound01(s, 100);
	    l = bound01(l, 100);
	
	    function hue2rgb(p, q, t) {
	        if(t < 0) t += 1;
	        if(t > 1) t -= 1;
	        if(t < 1/6) return p + (q - p) * 6 * t;
	        if(t < 1/2) return q;
	        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
	        return p;
	    }
	
	    if(s === 0) {
	        r = g = b = l; // achromatic
	    }
	    else {
	        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
	        var p = 2 * l - q;
	        r = hue2rgb(p, q, h + 1/3);
	        g = hue2rgb(p, q, h);
	        b = hue2rgb(p, q, h - 1/3);
	    }
	
	    return { r: r * 255, g: g * 255, b: b * 255 };
	}
	
	// `rgbToHsv`
	// Converts an RGB color value to HSV
	// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
	// *Returns:* { h, s, v } in [0,1]
	function rgbToHsv(r, g, b) {
	
	    r = bound01(r, 255);
	    g = bound01(g, 255);
	    b = bound01(b, 255);
	
	    var max = mathMax(r, g, b), min = mathMin(r, g, b);
	    var h, s, v = max;
	
	    var d = max - min;
	    s = max === 0 ? 0 : d / max;
	
	    if(max == min) {
	        h = 0; // achromatic
	    }
	    else {
	        switch(max) {
	            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
	            case g: h = (b - r) / d + 2; break;
	            case b: h = (r - g) / d + 4; break;
	        }
	        h /= 6;
	    }
	    return { h: h, s: s, v: v };
	}
	
	// `hsvToRgb`
	// Converts an HSV color value to RGB.
	// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
	// *Returns:* { r, g, b } in the set [0, 255]
	 function hsvToRgb(h, s, v) {
	
	    h = bound01(h, 360) * 6;
	    s = bound01(s, 100);
	    v = bound01(v, 100);
	
	    var i = math.floor(h),
	        f = h - i,
	        p = v * (1 - s),
	        q = v * (1 - f * s),
	        t = v * (1 - (1 - f) * s),
	        mod = i % 6,
	        r = [v, q, p, p, t, v][mod],
	        g = [t, v, v, q, p, p][mod],
	        b = [p, p, t, v, v, q][mod];
	
	    return { r: r * 255, g: g * 255, b: b * 255 };
	}
	
	// `rgbToHex`
	// Converts an RGB color to hex
	// Assumes r, g, and b are contained in the set [0, 255]
	// Returns a 3 or 6 character hex
	function rgbToHex(r, g, b, allow3Char) {
	
	    var hex = [
	        pad2(mathRound(r).toString(16)),
	        pad2(mathRound(g).toString(16)),
	        pad2(mathRound(b).toString(16))
	    ];
	
	    // Return a 3 character hex if possible
	    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
	        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
	    }
	
	    return hex.join("");
	}
	
	// `rgbaToHex`
	// Converts an RGBA color plus alpha transparency to hex
	// Assumes r, g, b and a are contained in the set [0, 255]
	// Returns an 8 character hex
	function rgbaToHex(r, g, b, a) {
	
	    var hex = [
	        pad2(convertDecimalToHex(a)),
	        pad2(mathRound(r).toString(16)),
	        pad2(mathRound(g).toString(16)),
	        pad2(mathRound(b).toString(16))
	    ];
	
	    return hex.join("");
	}
	
	// `equals`
	// Can be called with any tinycolor input
	tinycolor.equals = function (color1, color2) {
	    if (!color1 || !color2) { return false; }
	    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
	};
	
	tinycolor.random = function() {
	    return tinycolor.fromRatio({
	        r: mathRandom(),
	        g: mathRandom(),
	        b: mathRandom()
	    });
	};
	
	
	// Modification Functions
	// ----------------------
	// Thanks to less.js for some of the basics here
	// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>
	
	function desaturate(color, amount) {
	    amount = (amount === 0) ? 0 : (amount || 10);
	    var hsl = tinycolor(color).toHsl();
	    hsl.s -= amount / 100;
	    hsl.s = clamp01(hsl.s);
	    return tinycolor(hsl);
	}
	
	function saturate(color, amount) {
	    amount = (amount === 0) ? 0 : (amount || 10);
	    var hsl = tinycolor(color).toHsl();
	    hsl.s += amount / 100;
	    hsl.s = clamp01(hsl.s);
	    return tinycolor(hsl);
	}
	
	function greyscale(color) {
	    return tinycolor(color).desaturate(100);
	}
	
	function lighten (color, amount) {
	    amount = (amount === 0) ? 0 : (amount || 10);
	    var hsl = tinycolor(color).toHsl();
	    hsl.l += amount / 100;
	    hsl.l = clamp01(hsl.l);
	    return tinycolor(hsl);
	}
	
	function brighten(color, amount) {
	    amount = (amount === 0) ? 0 : (amount || 10);
	    var rgb = tinycolor(color).toRgb();
	    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
	    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
	    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
	    return tinycolor(rgb);
	}
	
	function darken (color, amount) {
	    amount = (amount === 0) ? 0 : (amount || 10);
	    var hsl = tinycolor(color).toHsl();
	    hsl.l -= amount / 100;
	    hsl.l = clamp01(hsl.l);
	    return tinycolor(hsl);
	}
	
	// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
	// Values outside of this range will be wrapped into this range.
	function spin(color, amount) {
	    var hsl = tinycolor(color).toHsl();
	    var hue = (mathRound(hsl.h) + amount) % 360;
	    hsl.h = hue < 0 ? 360 + hue : hue;
	    return tinycolor(hsl);
	}
	
	// Combination Functions
	// ---------------------
	// Thanks to jQuery xColor for some of the ideas behind these
	// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>
	
	function complement(color) {
	    var hsl = tinycolor(color).toHsl();
	    hsl.h = (hsl.h + 180) % 360;
	    return tinycolor(hsl);
	}
	
	function triad(color) {
	    var hsl = tinycolor(color).toHsl();
	    var h = hsl.h;
	    return [
	        tinycolor(color),
	        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
	        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
	    ];
	}
	
	function tetrad(color) {
	    var hsl = tinycolor(color).toHsl();
	    var h = hsl.h;
	    return [
	        tinycolor(color),
	        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
	        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
	        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
	    ];
	}
	
	function splitcomplement(color) {
	    var hsl = tinycolor(color).toHsl();
	    var h = hsl.h;
	    return [
	        tinycolor(color),
	        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
	        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
	    ];
	}
	
	function analogous(color, results, slices) {
	    results = results || 6;
	    slices = slices || 30;
	
	    var hsl = tinycolor(color).toHsl();
	    var part = 360 / slices;
	    var ret = [tinycolor(color)];
	
	    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
	        hsl.h = (hsl.h + part) % 360;
	        ret.push(tinycolor(hsl));
	    }
	    return ret;
	}
	
	function monochromatic(color, results) {
	    results = results || 6;
	    var hsv = tinycolor(color).toHsv();
	    var h = hsv.h, s = hsv.s, v = hsv.v;
	    var ret = [];
	    var modification = 1 / results;
	
	    while (results--) {
	        ret.push(tinycolor({ h: h, s: s, v: v}));
	        v = (v + modification) % 1;
	    }
	
	    return ret;
	}
	
	// Utility Functions
	// ---------------------
	
	tinycolor.mix = function(color1, color2, amount) {
	    amount = (amount === 0) ? 0 : (amount || 50);
	
	    var rgb1 = tinycolor(color1).toRgb();
	    var rgb2 = tinycolor(color2).toRgb();
	
	    var p = amount / 100;
	    var w = p * 2 - 1;
	    var a = rgb2.a - rgb1.a;
	
	    var w1;
	
	    if (w * a == -1) {
	        w1 = w;
	    } else {
	        w1 = (w + a) / (1 + w * a);
	    }
	
	    w1 = (w1 + 1) / 2;
	
	    var w2 = 1 - w1;
	
	    var rgba = {
	        r: rgb2.r * w1 + rgb1.r * w2,
	        g: rgb2.g * w1 + rgb1.g * w2,
	        b: rgb2.b * w1 + rgb1.b * w2,
	        a: rgb2.a * p  + rgb1.a * (1 - p)
	    };
	
	    return tinycolor(rgba);
	};
	
	
	// Readability Functions
	// ---------------------
	// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)
	
	// `contrast`
	// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
	tinycolor.readability = function(color1, color2) {
	    var c1 = tinycolor(color1);
	    var c2 = tinycolor(color2);
	    return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
	};
	
	// `isReadable`
	// Ensure that foreground and background color combinations meet WCAG2 guidelines.
	// The third argument is an optional Object.
	//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
	//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
	// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.
	
	// *Example*
	//    tinycolor.isReadable("#000", "#111") => false
	//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
	tinycolor.isReadable = function(color1, color2, wcag2) {
	    var readability = tinycolor.readability(color1, color2);
	    var wcag2Parms, out;
	
	    out = false;
	
	    wcag2Parms = validateWCAG2Parms(wcag2);
	    switch (wcag2Parms.level + wcag2Parms.size) {
	        case "AAsmall":
	        case "AAAlarge":
	            out = readability >= 4.5;
	            break;
	        case "AAlarge":
	            out = readability >= 3;
	            break;
	        case "AAAsmall":
	            out = readability >= 7;
	            break;
	    }
	    return out;
	
	};
	
	// `mostReadable`
	// Given a base color and a list of possible foreground or background
	// colors for that base, returns the most readable color.
	// Optionally returns Black or White if the most readable color is unreadable.
	// *Example*
	//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
	//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
	//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
	//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
	tinycolor.mostReadable = function(baseColor, colorList, args) {
	    var bestColor = null;
	    var bestScore = 0;
	    var readability;
	    var includeFallbackColors, level, size ;
	    args = args || {};
	    includeFallbackColors = args.includeFallbackColors ;
	    level = args.level;
	    size = args.size;
	
	    for (var i= 0; i < colorList.length ; i++) {
	        readability = tinycolor.readability(baseColor, colorList[i]);
	        if (readability > bestScore) {
	            bestScore = readability;
	            bestColor = tinycolor(colorList[i]);
	        }
	    }
	
	    if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
	        return bestColor;
	    }
	    else {
	        args.includeFallbackColors=false;
	        return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
	    }
	};
	
	
	// Big List of Colors
	// ------------------
	// <http://www.w3.org/TR/css3-color/#svg-color>
	var names = tinycolor.names = {
	    aliceblue: "f0f8ff",
	    antiquewhite: "faebd7",
	    aqua: "0ff",
	    aquamarine: "7fffd4",
	    azure: "f0ffff",
	    beige: "f5f5dc",
	    bisque: "ffe4c4",
	    black: "000",
	    blanchedalmond: "ffebcd",
	    blue: "00f",
	    blueviolet: "8a2be2",
	    brown: "a52a2a",
	    burlywood: "deb887",
	    burntsienna: "ea7e5d",
	    cadetblue: "5f9ea0",
	    chartreuse: "7fff00",
	    chocolate: "d2691e",
	    coral: "ff7f50",
	    cornflowerblue: "6495ed",
	    cornsilk: "fff8dc",
	    crimson: "dc143c",
	    cyan: "0ff",
	    darkblue: "00008b",
	    darkcyan: "008b8b",
	    darkgoldenrod: "b8860b",
	    darkgray: "a9a9a9",
	    darkgreen: "006400",
	    darkgrey: "a9a9a9",
	    darkkhaki: "bdb76b",
	    darkmagenta: "8b008b",
	    darkolivegreen: "556b2f",
	    darkorange: "ff8c00",
	    darkorchid: "9932cc",
	    darkred: "8b0000",
	    darksalmon: "e9967a",
	    darkseagreen: "8fbc8f",
	    darkslateblue: "483d8b",
	    darkslategray: "2f4f4f",
	    darkslategrey: "2f4f4f",
	    darkturquoise: "00ced1",
	    darkviolet: "9400d3",
	    deeppink: "ff1493",
	    deepskyblue: "00bfff",
	    dimgray: "696969",
	    dimgrey: "696969",
	    dodgerblue: "1e90ff",
	    firebrick: "b22222",
	    floralwhite: "fffaf0",
	    forestgreen: "228b22",
	    fuchsia: "f0f",
	    gainsboro: "dcdcdc",
	    ghostwhite: "f8f8ff",
	    gold: "ffd700",
	    goldenrod: "daa520",
	    gray: "808080",
	    green: "008000",
	    greenyellow: "adff2f",
	    grey: "808080",
	    honeydew: "f0fff0",
	    hotpink: "ff69b4",
	    indianred: "cd5c5c",
	    indigo: "4b0082",
	    ivory: "fffff0",
	    khaki: "f0e68c",
	    lavender: "e6e6fa",
	    lavenderblush: "fff0f5",
	    lawngreen: "7cfc00",
	    lemonchiffon: "fffacd",
	    lightblue: "add8e6",
	    lightcoral: "f08080",
	    lightcyan: "e0ffff",
	    lightgoldenrodyellow: "fafad2",
	    lightgray: "d3d3d3",
	    lightgreen: "90ee90",
	    lightgrey: "d3d3d3",
	    lightpink: "ffb6c1",
	    lightsalmon: "ffa07a",
	    lightseagreen: "20b2aa",
	    lightskyblue: "87cefa",
	    lightslategray: "789",
	    lightslategrey: "789",
	    lightsteelblue: "b0c4de",
	    lightyellow: "ffffe0",
	    lime: "0f0",
	    limegreen: "32cd32",
	    linen: "faf0e6",
	    magenta: "f0f",
	    maroon: "800000",
	    mediumaquamarine: "66cdaa",
	    mediumblue: "0000cd",
	    mediumorchid: "ba55d3",
	    mediumpurple: "9370db",
	    mediumseagreen: "3cb371",
	    mediumslateblue: "7b68ee",
	    mediumspringgreen: "00fa9a",
	    mediumturquoise: "48d1cc",
	    mediumvioletred: "c71585",
	    midnightblue: "191970",
	    mintcream: "f5fffa",
	    mistyrose: "ffe4e1",
	    moccasin: "ffe4b5",
	    navajowhite: "ffdead",
	    navy: "000080",
	    oldlace: "fdf5e6",
	    olive: "808000",
	    olivedrab: "6b8e23",
	    orange: "ffa500",
	    orangered: "ff4500",
	    orchid: "da70d6",
	    palegoldenrod: "eee8aa",
	    palegreen: "98fb98",
	    paleturquoise: "afeeee",
	    palevioletred: "db7093",
	    papayawhip: "ffefd5",
	    peachpuff: "ffdab9",
	    peru: "cd853f",
	    pink: "ffc0cb",
	    plum: "dda0dd",
	    powderblue: "b0e0e6",
	    purple: "800080",
	    rebeccapurple: "663399",
	    red: "f00",
	    rosybrown: "bc8f8f",
	    royalblue: "4169e1",
	    saddlebrown: "8b4513",
	    salmon: "fa8072",
	    sandybrown: "f4a460",
	    seagreen: "2e8b57",
	    seashell: "fff5ee",
	    sienna: "a0522d",
	    silver: "c0c0c0",
	    skyblue: "87ceeb",
	    slateblue: "6a5acd",
	    slategray: "708090",
	    slategrey: "708090",
	    snow: "fffafa",
	    springgreen: "00ff7f",
	    steelblue: "4682b4",
	    tan: "d2b48c",
	    teal: "008080",
	    thistle: "d8bfd8",
	    tomato: "ff6347",
	    turquoise: "40e0d0",
	    violet: "ee82ee",
	    wheat: "f5deb3",
	    white: "fff",
	    whitesmoke: "f5f5f5",
	    yellow: "ff0",
	    yellowgreen: "9acd32"
	};
	
	// Make it easy to access colors via `hexNames[hex]`
	var hexNames = tinycolor.hexNames = flip(names);
	
	
	// Utilities
	// ---------
	
	// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
	function flip(o) {
	    var flipped = { };
	    for (var i in o) {
	        if (o.hasOwnProperty(i)) {
	            flipped[o[i]] = i;
	        }
	    }
	    return flipped;
	}
	
	// Return a valid alpha value [0,1] with all invalid values being set to 1
	function boundAlpha(a) {
	    a = parseFloat(a);
	
	    if (isNaN(a) || a < 0 || a > 1) {
	        a = 1;
	    }
	
	    return a;
	}
	
	// Take input from [0, n] and return it as [0, 1]
	function bound01(n, max) {
	    if (isOnePointZero(n)) { n = "100%"; }
	
	    var processPercent = isPercentage(n);
	    n = mathMin(max, mathMax(0, parseFloat(n)));
	
	    // Automatically convert percentage into number
	    if (processPercent) {
	        n = parseInt(n * max, 10) / 100;
	    }
	
	    // Handle floating point rounding errors
	    if ((math.abs(n - max) < 0.000001)) {
	        return 1;
	    }
	
	    // Convert into [0, 1] range if it isn't already
	    return (n % max) / parseFloat(max);
	}
	
	// Force a number between 0 and 1
	function clamp01(val) {
	    return mathMin(1, mathMax(0, val));
	}
	
	// Parse a base-16 hex value into a base-10 integer
	function parseIntFromHex(val) {
	    return parseInt(val, 16);
	}
	
	// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
	// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
	function isOnePointZero(n) {
	    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
	}
	
	// Check to see if string passed in is a percentage
	function isPercentage(n) {
	    return typeof n === "string" && n.indexOf('%') != -1;
	}
	
	// Force a hex value to have 2 characters
	function pad2(c) {
	    return c.length == 1 ? '0' + c : '' + c;
	}
	
	// Replace a decimal with it's percentage value
	function convertToPercentage(n) {
	    if (n <= 1) {
	        n = (n * 100) + "%";
	    }
	
	    return n;
	}
	
	// Converts a decimal to a hex value
	function convertDecimalToHex(d) {
	    return Math.round(parseFloat(d) * 255).toString(16);
	}
	// Converts a hex value to a decimal
	function convertHexToDecimal(h) {
	    return (parseIntFromHex(h) / 255);
	}
	
	var matchers = (function() {
	
	    // <http://www.w3.org/TR/css3-values/#integers>
	    var CSS_INTEGER = "[-\\+]?\\d+%?";
	
	    // <http://www.w3.org/TR/css3-values/#number-value>
	    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
	
	    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
	    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
	
	    // Actual matching.
	    // Parentheses and commas are optional, but not required.
	    // Whitespace can take the place of commas or opening paren
	    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
	    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
	
	    return {
	        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
	        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
	        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
	        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
	        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
	        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
	        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
	        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
	    };
	})();
	
	// `stringInputToObject`
	// Permissive string parsing.  Take in a number of formats, and output an object
	// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
	function stringInputToObject(color) {
	
	    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
	    var named = false;
	    if (names[color]) {
	        color = names[color];
	        named = true;
	    }
	    else if (color == 'transparent') {
	        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
	    }
	
	    // Try to match string input using regular expressions.
	    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
	    // Just return an object and let the conversion functions handle that.
	    // This way the result will be the same whether the tinycolor is initialized with string or object.
	    var match;
	    if ((match = matchers.rgb.exec(color))) {
	        return { r: match[1], g: match[2], b: match[3] };
	    }
	    if ((match = matchers.rgba.exec(color))) {
	        return { r: match[1], g: match[2], b: match[3], a: match[4] };
	    }
	    if ((match = matchers.hsl.exec(color))) {
	        return { h: match[1], s: match[2], l: match[3] };
	    }
	    if ((match = matchers.hsla.exec(color))) {
	        return { h: match[1], s: match[2], l: match[3], a: match[4] };
	    }
	    if ((match = matchers.hsv.exec(color))) {
	        return { h: match[1], s: match[2], v: match[3] };
	    }
	    if ((match = matchers.hsva.exec(color))) {
	        return { h: match[1], s: match[2], v: match[3], a: match[4] };
	    }
	    if ((match = matchers.hex8.exec(color))) {
	        return {
	            a: convertHexToDecimal(match[1]),
	            r: parseIntFromHex(match[2]),
	            g: parseIntFromHex(match[3]),
	            b: parseIntFromHex(match[4]),
	            format: named ? "name" : "hex8"
	        };
	    }
	    if ((match = matchers.hex6.exec(color))) {
	        return {
	            r: parseIntFromHex(match[1]),
	            g: parseIntFromHex(match[2]),
	            b: parseIntFromHex(match[3]),
	            format: named ? "name" : "hex"
	        };
	    }
	    if ((match = matchers.hex3.exec(color))) {
	        return {
	            r: parseIntFromHex(match[1] + '' + match[1]),
	            g: parseIntFromHex(match[2] + '' + match[2]),
	            b: parseIntFromHex(match[3] + '' + match[3]),
	            format: named ? "name" : "hex"
	        };
	    }
	
	    return false;
	}
	
	function validateWCAG2Parms(parms) {
	    // return valid WCAG2 parms for isReadable.
	    // If input parms are invalid, return {"level":"AA", "size":"small"}
	    var level, size;
	    parms = parms || {"level":"AA", "size":"small"};
	    level = (parms.level || "AA").toUpperCase();
	    size = (parms.size || "small").toLowerCase();
	    if (level !== "AA" && level !== "AAA") {
	        level = "AA";
	    }
	    if (size !== "small" && size !== "large") {
	        size = "small";
	    }
	    return {"level":level, "size":size};
	}
	
	// Node: Export function
	if (typeof module !== "undefined" && module.exports) {
	    module.exports = tinycolor;
	}
	// AMD/requirejs: Define the module
	else if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {return tinycolor;}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	// Browser: Expose to window
	else {
	    window.tinycolor = tinycolor;
	}
	
	})();


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(9)
	__vue_script__ = __webpack_require__(11)
	__vue_template__ = __webpack_require__(12)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\cassio\\Documents\\GitHub\\vue-color\\src\\components\\common\\EditableInput.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-c51ff9ca&file=EditableInput.vue!./../../../node_modules/stylus-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../../node_modules/eslint-loader/index.js!./../../../node_modules/eslint-loader/index.js!./EditableInput.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-c51ff9ca&file=EditableInput.vue!./../../../node_modules/stylus-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../../node_modules/eslint-loader/index.js!./../../../node_modules/eslint-loader/index.js!./EditableInput.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-c51ff9ca&file=EditableInput.vue!./../../../node_modules/stylus-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../../node_modules/eslint-loader/index.js!./../../../node_modules/eslint-loader/index.js!./EditableInput.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'editableInput',
	  props: {
	    label: String,
	    val: [String | Number],
	    onChange: Function,
	    max: Number,
	    arrowOffset: {
	      type: Number,
	      default: 1
	    }
	  },
	  filters: {
	    maxFilter: {
	      read: function read(val) {
	        if (this.max && val > this.max) {
	          return this.max;
	        } else {
	          return val;
	        }
	      },
	      write: function write(val, oldVal) {
	        return val;
	      }
	    }
	  },
	  methods: {
	    handleChange: function handleChange(e) {
	      var data = {};
	      data[this.label] = this.val;
	      this.onChange(data);
	    },
	    handleBlur: function handleBlur(e) {
	      console.log(e);
	    },
	    handleKeyDown: function handleKeyDown(e) {
	      var val = this.val;
	      var number = Number(val);
	
	      if (number) {
	        var amount = this.arrowOffset || 1;
	
	        if (e.keyCode === 38) {
	          this.val = number + amount;
	          e.preventDefault();
	        }
	
	        if (e.keyCode === 40) {
	          this.val = number - amount;
	          e.preventDefault();
	        }
	
	        this.handleChange();
	      }
	    },
	    handleDrag: function handleDrag(e) {
	      console.log(e);
	    },
	    handleMouseDown: function handleMouseDown(e) {
	      console.log(e);
	    }
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "\r\n  <div class=\"editable-input\">\r\n    <input class=\"input\" \r\n      v-model=\"val | maxFilter\"\r\n      @keydown=\"handleKeyDown\"\r\n      @input=\"handleChange\">\r\n    <span class=\"label\" @mousedown=\"handleMouseDown\">{{label}}</span>\r\n  </div>\r\n";

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "\r\n  <div class=\"c-compact\">\r\n    <ul class=\"colors\">\r\n      <li class=\"color-item\" v-for=\"c in defaultColors\" \r\n        @click=\"handlerClick(c)\"\r\n        :class=\"{white: c === '#FFFFFF' }\"\r\n        :style=\"{background: c}\">\r\n        <div class=\"dot\" v-show=\"c === pick\"></div>\r\n      </li>\r\n    </ul>\r\n    <div class=\"fields\">\r\n      <div class=\"pick-color\" :style=\"{background: pick}\"></div>\r\n      <div class=\"col-hex\">\r\n        <ed-in label=\"hex\"\r\n        :val.sync=\"colors.hex\"\r\n        :style=\"{ borderColor: colors.hex }\"\r\n        :on-change=\"onChange\"></ed-in>\r\n      </div>\r\n      <div class=\"col-3\">\r\n        <ed-in label=\"r\" :val.sync=\"colors.rgba.r\" \r\n        :on-change=\"onChange\"></ed-in>\r\n      </div>\r\n      <div class=\"col-3\">\r\n        <ed-in label=\"g\" :val.sync=\"colors.rgba.g\" \r\n        :on-change=\"onChange\"></ed-in>\r\n      </div>\r\n      <div class=\"col-3\">\r\n        <ed-in label=\"b\" :val.sync=\"colors.rgba.b\"\r\n        :on-change=\"onChange\"></ed-in>\r\n      </div>\r\n    </div>\r\n  </div>\r\n";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(15)
	__vue_script__ = __webpack_require__(17)
	__vue_template__ = __webpack_require__(18)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\cassio\\Documents\\GitHub\\vue-color\\src\\components\\Material.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-0fb688ed&file=Material.vue!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/eslint-loader/index.js!./../../node_modules/eslint-loader/index.js!./Material.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-0fb688ed&file=Material.vue!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/eslint-loader/index.js!./../../node_modules/eslint-loader/index.js!./Material.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-0fb688ed&file=Material.vue!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/eslint-loader/index.js!./../../node_modules/eslint-loader/index.js!./Material.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */,
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EditableInput = __webpack_require__(8);
	
	var _EditableInput2 = _interopRequireDefault(_EditableInput);
	
	var _color = __webpack_require__(6);
	
	var _color2 = _interopRequireDefault(_color);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'Material',
	  mixins: [_color2.default],
	  props: {},
	  data: function data() {
	    return {};
	  },
	
	  components: {
	    'ed-in': _EditableInput2.default
	  },
	  methods: {
	    onChange: function onChange(data) {
	      if (!data) {
	        return;
	      }
	      if (data.hex) {
	        this.isValidHex(data.hex) && this.colorChange({
	          hex: data.hex,
	          source: 'hex'
	        });
	      } else if (data.r || data.g || data.b) {
	        this.colorChange({
	          r: data.r || this.colors.rgba.r,
	          g: data.g || this.colors.rgba.g,
	          b: data.b || this.colors.rgba.b,
	          a: data.a || this.colors.rgba.a,
	          source: 'rgba'
	        });
	      }
	    }
	  }
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "\r\n  \r\n  <div class=\"c-material\">\r\n    <ed-in class=\"hex\" label=\"hex\" :val.sync=\"colors.hex\"\r\n    :style=\"{ borderColor: colors.hex }\"\r\n    :on-change=\"onChange\"></ed-in>\r\n    <div class=\"split flexbox-fix\">\r\n      <div class=\"third\">\r\n        <ed-in label=\"r\" :val.sync=\"colors.rgba.r\" \r\n        :on-change=\"onChange\"></ed-in>\r\n      </div>\r\n      <div class=\"third\">\r\n        <ed-in label=\"g\" :val.sync=\"colors.rgba.g\" \r\n        :on-change=\"onChange\"></ed-in>\r\n      </div>\r\n      <div class=\"third\">\r\n        <ed-in label=\"b\" :val.sync=\"colors.rgba.b\"\r\n        :on-change=\"onChange\"></ed-in>\r\n      </div>\r\n    </div>  \r\n  </div>\r\n  \r\n";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(20)
	__vue_script__ = __webpack_require__(22)
	__vue_template__ = __webpack_require__(28)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\cassio\\Documents\\GitHub\\vue-color\\src\\components\\Slider.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-302a8327&file=Slider.vue!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/eslint-loader/index.js!./../../node_modules/eslint-loader/index.js!./Slider.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-302a8327&file=Slider.vue!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/eslint-loader/index.js!./../../node_modules/eslint-loader/index.js!./Slider.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-302a8327&file=Slider.vue!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/eslint-loader/index.js!./../../node_modules/eslint-loader/index.js!./Slider.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 21 */,
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _color = __webpack_require__(6);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _Hue = __webpack_require__(23);
	
	var _Hue2 = _interopRequireDefault(_Hue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'Slider',
	  mixins: [_color2.default],
	  props: {
	    direction: String
	  },
	  components: {
	    hue: _Hue2.default
	  },
	  computed: {
	    activeOffset: function activeOffset() {
	      if (Math.round(this.colors.hsl.s * 100) / 100 === 0.50) {
	        return Math.round(this.colors.hsl.l * 100) / 100;
	      }
	      return 0;
	    }
	  },
	  data: function data() {
	    return {
	      swatches: ['.80', '.65', '.50', '.35', '.20']
	    };
	  },
	
	  methods: {
	    hueChange: function hueChange(data) {
	      this.colorChange(data);
	    },
	    handleSwClick: function handleSwClick(index, offset) {
	      this.colorChange({
	        h: this.colors.hsl.h,
	        s: 0.5,
	        l: offset,
	        source: 'hsl'
	      });
	    }
	  }
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(24)
	__vue_script__ = __webpack_require__(26)
	__vue_template__ = __webpack_require__(27)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\cassio\\Documents\\GitHub\\vue-color\\src\\components\\common\\Hue.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2af020e6&file=Hue.vue!./../../../node_modules/stylus-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../../node_modules/eslint-loader/index.js!./../../../node_modules/eslint-loader/index.js!./Hue.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2af020e6&file=Hue.vue!./../../../node_modules/stylus-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../../node_modules/eslint-loader/index.js!./../../../node_modules/eslint-loader/index.js!./Hue.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2af020e6&file=Hue.vue!./../../../node_modules/stylus-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../../node_modules/eslint-loader/index.js!./../../../node_modules/eslint-loader/index.js!./Hue.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 25 */,
/* 26 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'Hue',
	  props: {
	    colors: Object,
	    onChange: Function,
	    direction: {
	      type: String,
	
	      default: 'horizontal'
	    }
	  },
	  computed: {
	    pointerTop: function pointerTop() {
	      if (this.direction === 'vertical') {
	        return -(this.colors.hsl.h * 100 / 360) + 100 + '%';
	      } else {
	        return 0;
	      }
	    },
	    pointerLeft: function pointerLeft() {
	      if (this.direction === 'vertical') {
	        return 0;
	      } else {
	        return this.colors.hsl.h * 100 / 360 + '%';
	      }
	    }
	  },
	  methods: {
	    handleChange: function handleChange(e, skip) {
	      !skip && e.preventDefault();
	
	      var container = this.$els.container;
	      var containerWidth = container.clientWidth;
	      var containerHeight = container.clientHeight;
	      var left = (e.pageX || e.touches[0].pageX) - (container.getBoundingClientRect().left + window.pageXOffset);
	      var top = (e.pageY || e.touches[0].pageY) - (container.getBoundingClientRect().top + window.pageYOffset);
	      var h;
	      var percent;
	
	      if (this.direction === 'vertical') {
	        if (top < 0) {
	          h = 359;
	        } else if (top > containerHeight) {
	          h = 0;
	        } else {
	          percent = -(top * 100 / containerHeight) + 100;
	          h = 360 * percent / 100;
	        }
	
	        if (this.colors.hsl.h !== h) {
	          this.onChange({
	            h: h,
	            s: this.colors.hsl.s,
	            l: this.colors.hsl.l,
	            a: this.colors.hsl.a,
	            source: 'hsl'
	          });
	        }
	      } else {
	        if (left < 0) {
	          h = 0;
	        } else if (left > containerWidth) {
	          h = 359;
	        } else {
	          percent = left * 100 / containerWidth;
	          h = 360 * percent / 100;
	        }
	
	        if (this.colors.hsl.h !== h) {
	          this.onChange({
	            h: h,
	            s: this.colors.hsl.s,
	            l: this.colors.hsl.l,
	            a: this.colors.hsl.a,
	            source: 'hsl'
	          });
	        }
	      }
	    },
	    handleMouseDown: function handleMouseDown(e) {
	      this.handleChange(e, true);
	      window.addEventListener('mousemove', this.handleChange);
	      window.addEventListener('mouseup', this.handleMouseUp);
	    },
	    handleMouseUp: function handleMouseUp(e) {
	      this.unbindEventListeners();
	    },
	    unbindEventListeners: function unbindEventListeners() {
	      window.removeEventListener('mousemove', this.handleChange);
	      window.removeEventListener('mouseup', this.handleMouseUp);
	    }
	  }
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "\r\n  <div class=\"c-hue {{direction}}\">\r\n    <div class=\"container\" v-el:container\r\n      @mousedown=\"handleMouseDown\"\r\n      @touchmove=\"handleChange\"\r\n      @touchstart=\"handleChange\">\r\n      <div class=\"pointer\" :style=\"{top: pointerTop, left: pointerLeft}\">\r\n        <slot><div class=\"picker\"></div></slot>\r\n      </div>  \r\n    </div>\r\n  </div>\r\n";

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "\r\n  <div class=\"c-slider\">\r\n    <div class=\"hue-warp\">\r\n      <hue :colors.sync=\"colors\" :on-change=\"hueChange\"></hue>\r\n    </div>\r\n    <div class=\"swatches\">\r\n      <div class=\"swatch\" v-for=\"offset in swatches\" data-index=\"{{$index}}\"\r\n        @click=\"handleSwClick($index, offset)\">\r\n        <div class=\"swatch-picker\"\r\n        :class=\"{active: offset == activeOffset}\"\r\n        :style=\"{background: 'hsl(' + colors.hsl.h + ', 50%, ' + (offset * 100) + '%)'}\"\r\n        ></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(30)
	__vue_script__ = __webpack_require__(32)
	__vue_template__ = __webpack_require__(34)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\cassio\\Documents\\GitHub\\vue-color\\src\\components\\Swatches.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-54350c30&file=Swatches.vue!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/eslint-loader/index.js!./../../node_modules/eslint-loader/index.js!./Swatches.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-54350c30&file=Swatches.vue!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/eslint-loader/index.js!./../../node_modules/eslint-loader/index.js!./Swatches.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-54350c30&file=Swatches.vue!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/eslint-loader/index.js!./../../node_modules/eslint-loader/index.js!./Swatches.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 31 */,
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _materialColors = __webpack_require__(33);
	
	var _materialColors2 = _interopRequireDefault(_materialColors);
	
	var _color = __webpack_require__(6);
	
	var _color2 = _interopRequireDefault(_color);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var colorMap = ['red', 'pink', 'purple', 'deepPurple', 'indigo', 'blue', 'lightBlue', 'cyan', 'teal', 'green', 'lightGreen', 'lime', 'yellow', 'amber', 'orange', 'deepOrange', 'brown', 'blueGrey'];
	var colorLevel = ['900', '700', '500', '300', '100'];
	var defaultColors = function () {
	  var colors = [];
	  colorMap.forEach(function (type) {
	    var typeColor = [];
	    colorLevel.forEach(function (level) {
	      typeColor.push(_materialColors2.default[type][level].toUpperCase());
	    });
	    colors.push(typeColor);
	  });
	  return colors;
	}();
	
	exports.default = {
	  name: 'Swatches',
	  mixins: [_color2.default],
	  computed: {
	    pick: function pick() {
	      return this.colors.hex;
	    }
	  },
	  data: function data() {
	    return {
	      defaultColors: defaultColors
	    };
	  },
	
	  methods: {
	    handlerClick: function handlerClick(c) {
	      this.colorChange({
	        hex: c,
	        source: 'hex'
	      });
	    }
	  }
	
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    module.exports = factory();
	  } else {
	    root.materialColors = factory();
	  }
	})(this, function() {
	  return {"red":{"50":"#ffebee","100":"#ffcdd2","200":"#ef9a9a","300":"#e57373","400":"#ef5350","500":"#f44336","600":"#e53935","700":"#d32f2f","800":"#c62828","900":"#b71c1c","a100":"#ff8a80","a200":"#ff5252","a400":"#ff1744","a700":"#d50000"},"pink":{"50":"#fce4ec","100":"#f8bbd0","200":"#f48fb1","300":"#f06292","400":"#ec407a","500":"#e91e63","600":"#d81b60","700":"#c2185b","800":"#ad1457","900":"#880e4f","a100":"#ff80ab","a200":"#ff4081","a400":"#f50057","a700":"#c51162"},"purple":{"50":"#f3e5f5","100":"#e1bee7","200":"#ce93d8","300":"#ba68c8","400":"#ab47bc","500":"#9c27b0","600":"#8e24aa","700":"#7b1fa2","800":"#6a1b9a","900":"#4a148c","a100":"#ea80fc","a200":"#e040fb","a400":"#d500f9","a700":"#aa00ff"},"deepPurple":{"50":"#ede7f6","100":"#d1c4e9","200":"#b39ddb","300":"#9575cd","400":"#7e57c2","500":"#673ab7","600":"#5e35b1","700":"#512da8","800":"#4527a0","900":"#311b92","a100":"#b388ff","a200":"#7c4dff","a400":"#651fff","a700":"#6200ea"},"indigo":{"50":"#e8eaf6","100":"#c5cae9","200":"#9fa8da","300":"#7986cb","400":"#5c6bc0","500":"#3f51b5","600":"#3949ab","700":"#303f9f","800":"#283593","900":"#1a237e","a100":"#8c9eff","a200":"#536dfe","a400":"#3d5afe","a700":"#304ffe"},"blue":{"50":"#e3f2fd","100":"#bbdefb","200":"#90caf9","300":"#64b5f6","400":"#42a5f5","500":"#2196f3","600":"#1e88e5","700":"#1976d2","800":"#1565c0","900":"#0d47a1","a100":"#82b1ff","a200":"#448aff","a400":"#2979ff","a700":"#2962ff"},"lightBlue":{"50":"#e1f5fe","100":"#b3e5fc","200":"#81d4fa","300":"#4fc3f7","400":"#29b6f6","500":"#03a9f4","600":"#039be5","700":"#0288d1","800":"#0277bd","900":"#01579b","a100":"#80d8ff","a200":"#40c4ff","a400":"#00b0ff","a700":"#0091ea"},"cyan":{"50":"#e0f7fa","100":"#b2ebf2","200":"#80deea","300":"#4dd0e1","400":"#26c6da","500":"#00bcd4","600":"#00acc1","700":"#0097a7","800":"#00838f","900":"#006064","a100":"#84ffff","a200":"#18ffff","a400":"#00e5ff","a700":"#00b8d4"},"teal":{"50":"#e0f2f1","100":"#b2dfdb","200":"#80cbc4","300":"#4db6ac","400":"#26a69a","500":"#009688","600":"#00897b","700":"#00796b","800":"#00695c","900":"#004d40","a100":"#a7ffeb","a200":"#64ffda","a400":"#1de9b6","a700":"#00bfa5"},"green":{"50":"#e8f5e9","100":"#c8e6c9","200":"#a5d6a7","300":"#81c784","400":"#66bb6a","500":"#4caf50","600":"#43a047","700":"#388e3c","800":"#2e7d32","900":"#1b5e20","a100":"#b9f6ca","a200":"#69f0ae","a400":"#00e676","a700":"#00c853"},"lightGreen":{"50":"#f1f8e9","100":"#dcedc8","200":"#c5e1a5","300":"#aed581","400":"#9ccc65","500":"#8bc34a","600":"#7cb342","700":"#689f38","800":"#558b2f","900":"#33691e","a100":"#ccff90","a200":"#b2ff59","a400":"#76ff03","a700":"#64dd17"},"lime":{"50":"#f9fbe7","100":"#f0f4c3","200":"#e6ee9c","300":"#dce775","400":"#d4e157","500":"#cddc39","600":"#c0ca33","700":"#afb42b","800":"#9e9d24","900":"#827717","a100":"#f4ff81","a200":"#eeff41","a400":"#c6ff00","a700":"#aeea00"},"yellow":{"50":"#fffde7","100":"#fff9c4","200":"#fff59d","300":"#fff176","400":"#ffee58","500":"#ffeb3b","600":"#fdd835","700":"#fbc02d","800":"#f9a825","900":"#f57f17","a100":"#ffff8d","a200":"#ffff00","a400":"#ffea00","a700":"#ffd600"},"amber":{"50":"#fff8e1","100":"#ffecb3","200":"#ffe082","300":"#ffd54f","400":"#ffca28","500":"#ffc107","600":"#ffb300","700":"#ffa000","800":"#ff8f00","900":"#ff6f00","a100":"#ffe57f","a200":"#ffd740","a400":"#ffc400","a700":"#ffab00"},"orange":{"50":"#fff3e0","100":"#ffe0b2","200":"#ffcc80","300":"#ffb74d","400":"#ffa726","500":"#ff9800","600":"#fb8c00","700":"#f57c00","800":"#ef6c00","900":"#e65100","a100":"#ffd180","a200":"#ffab40","a400":"#ff9100","a700":"#ff6d00"},"deepOrange":{"50":"#fbe9e7","100":"#ffccbc","200":"#ffab91","300":"#ff8a65","400":"#ff7043","500":"#ff5722","600":"#f4511e","700":"#e64a19","800":"#d84315","900":"#bf360c","a100":"#ff9e80","a200":"#ff6e40","a400":"#ff3d00","a700":"#dd2c00"},"brown":{"50":"#efebe9","100":"#d7ccc8","200":"#bcaaa4","300":"#a1887f","400":"#8d6e63","500":"#795548","600":"#6d4c41","700":"#5d4037","800":"#4e342e","900":"#3e2723"},"grey":{"50":"#fafafa","100":"#f5f5f5","200":"#eeeeee","300":"#e0e0e0","400":"#bdbdbd","500":"#9e9e9e","600":"#757575","700":"#616161","800":"#424242","900":"#212121"},"blueGrey":{"50":"#eceff1","100":"#cfd8dc","200":"#b0bec5","300":"#90a4ae","400":"#78909c","500":"#607d8b","600":"#546e7a","700":"#455a64","800":"#37474f","900":"#263238"},"white":"#ffffff","black":"#000000"};
	});


/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "\r\n  <div class=\"c-swatches\" data-pick=\"{{pick}}\">\r\n    <div class=\"box\">\r\n      <div class=\"color-group\" v-for=\"group in defaultColors\">\r\n        <div class=\"color-it\" v-for=\"c in group\"\r\n          data-color=\"{{c}}\"\r\n          @click=\"handlerClick(c)\"\r\n          :style=\"{background: c}\">\r\n          <div class=\"pick\" v-show=\"c == pick\">\r\n            <svg style=\"width: 24px; height:24px;\" viewBox=\"0 0 24 24\">\r\n              <path d=\"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z\" />\r\n            </svg>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n";

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(36)
	__vue_script__ = __webpack_require__(38)
	__vue_template__ = __webpack_require__(56)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\cassio\\Documents\\GitHub\\vue-color\\src\\components\\Photoshop.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-1d3f47d2&file=Photoshop.vue!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/eslint-loader/index.js!./../../node_modules/eslint-loader/index.js!./Photoshop.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-1d3f47d2&file=Photoshop.vue!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/eslint-loader/index.js!./../../node_modules/eslint-loader/index.js!./Photoshop.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-1d3f47d2&file=Photoshop.vue!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/eslint-loader/index.js!./../../node_modules/eslint-loader/index.js!./Photoshop.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 37 */,
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _color = __webpack_require__(6);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _EditableInput = __webpack_require__(8);
	
	var _EditableInput2 = _interopRequireDefault(_EditableInput);
	
	var _Saturation = __webpack_require__(39);
	
	var _Saturation2 = _interopRequireDefault(_Saturation);
	
	var _Hue = __webpack_require__(23);
	
	var _Hue2 = _interopRequireDefault(_Hue);
	
	var _Alpha = __webpack_require__(46);
	
	var _Alpha2 = _interopRequireDefault(_Alpha);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'Photoshop',
	  mixins: [_color2.default],
	  props: {
	    head: {
	      type: String,
	      default: 'Color Picker'
	    }
	  },
	  components: {
	    saturation: _Saturation2.default,
	    hue: _Hue2.default,
	    alpha: _Alpha2.default,
	    'ed-in': _EditableInput2.default
	  },
	  data: function data() {
	    return {
	      currentColor: '#FFF'
	    };
	  },
	  created: function created() {
	    this.currentColor = this.colors.hex;
	  },
	
	  methods: {
	    childChange: function childChange(data) {
	      this.colorChange(data);
	    },
	    inputChange: function inputChange(data) {
	      if (!data) {
	        return;
	      }
	      if (data['#']) {
	        this.isValidHex(data['#']) && this.colorChange({
	          hex: data['#'],
	          source: 'hex'
	        });
	      } else if (data.r || data.g || data.b || data.a) {
	        this.colorChange({
	          r: data.r || this.colors.rgba.r,
	          g: data.g || this.colors.rgba.g,
	          b: data.b || this.colors.rgba.b,
	          a: data.a || this.colors.rgba.a,
	          source: 'rgba'
	        });
	      }
	    },
	    handleAccept: function handleAccept() {
	      console.log('accept');
	    },
	    handleCancel: function handleCancel() {
	      console.log('cancel');
	    }
	  }
	
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(40)
	__vue_script__ = __webpack_require__(42)
	__vue_template__ = __webpack_require__(45)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\cassio\\Documents\\GitHub\\vue-color\\src\\components\\common\\Saturation.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-3356ea66&file=Saturation.vue!./../../../node_modules/stylus-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../../node_modules/eslint-loader/index.js!./../../../node_modules/eslint-loader/index.js!./Saturation.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-3356ea66&file=Saturation.vue!./../../../node_modules/stylus-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../../node_modules/eslint-loader/index.js!./../../../node_modules/eslint-loader/index.js!./Saturation.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-3356ea66&file=Saturation.vue!./../../../node_modules/stylus-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../../node_modules/eslint-loader/index.js!./../../../node_modules/eslint-loader/index.js!./Saturation.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 41 */,
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lodash = __webpack_require__(43);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'Saturation',
	  props: {
	    colors: Object,
	    onChange: Function
	  },
	  computed: {
	    bgColor: function bgColor() {
	      return 'hsl(' + this.colors.hsl.h + ',100%, 50%)';
	    },
	    pointerTop: function pointerTop() {
	      return -(this.colors.hsv.v * 100) + 100 + '%';
	    },
	    pointerLeft: function pointerLeft() {
	      return this.colors.hsv.s * 100 + '%';
	    }
	  },
	  methods: {
	    throttle: (0, _lodash2.default)(function (fn, data) {
	      fn(data);
	    }, 50),
	    handleChange: function handleChange(e, skip) {
	      !skip && e.preventDefault();
	      var container = this.$els.container;
	      var containerWidth = container.clientWidth;
	      var containerHeight = container.clientHeight;
	      var left = (e.pageX || e.touches[0].pageX) - (container.getBoundingClientRect().left + window.pageXOffset);
	      var top = (e.pageY || e.touches[0].pageY) - (container.getBoundingClientRect().top + window.pageYOffset);
	
	      if (left < 0) {
	        left = 0;
	      } else if (left > containerWidth) {
	        left = containerWidth;
	      } else if (top < 0) {
	        top = 0;
	      } else if (top > containerHeight) {
	        top = containerHeight;
	      }
	
	      var saturation = left * 100 / containerWidth;
	      var bright = -(top * 100 / containerHeight) + 100;
	
	      this.throttle(this.onChange, {
	        h: this.colors.hsl.h,
	        s: saturation,
	        v: bright,
	        a: this.colors.hsl.a || 1,
	        source: 'rgb'
	      });
	    },
	    handleMouseDown: function handleMouseDown(e) {
	      this.handleChange(e, true);
	      window.addEventListener('mousemove', this.handleChange);
	      window.addEventListener('mouseup', this.handleMouseUp);
	    },
	    handleMouseUp: function handleMouseUp(e) {
	      this.unbindEventListeners();
	    },
	    unbindEventListeners: function unbindEventListeners() {
	      window.removeEventListener('mousemove', this.handleChange);
	      window.removeEventListener('mouseup', this.handleMouseUp);
	    }
	  }
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 4.0.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var debounce = __webpack_require__(44);
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide an options object to indicate whether
	 * `func` should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the throttled function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options] The options object.
	 * @param {boolean} [options.leading=true] Specify invoking on the leading
	 *  edge of the timeout.
	 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	 *  edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = throttle;


/***/ },
/* 44 */
/***/ function(module, exports) {

	/**
	 * lodash 4.0.6 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    symbolTag = '[object Symbol]';
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;
	
	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @type {Function}
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred function to be invoked.
	 */
	var now = Date.now;
	
	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide an options object to indicate whether `func` should be invoked on
	 * the leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent calls
	 * to the debounced function return the result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the debounced function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime = 0,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	
	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;
	
	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }
	
	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }
	
	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;
	
	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }
	
	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;
	
	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (!lastCallTime || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }
	
	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }
	
	  function trailingEdge(time) {
	    clearTimeout(timerId);
	    timerId = undefined;
	
	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }
	
	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastCallTime = lastInvokeTime = 0;
	    lastArgs = lastThis = timerId = undefined;
	  }
	
	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }
	
	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);
	
	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;
	
	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        clearTimeout(timerId);
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3);
	 * // => 3
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3');
	 * // => 3
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = isFunction(value.valueOf) ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = debounce;


/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = "\r\n  <div class=\"saturation\"\r\n    :style=\"{background: bgColor}\"\r\n    v-el:container\r\n    @mousedown=\"handleMouseDown\">\r\n    <div class=\"white\"></div>\r\n    <div class=\"black\"></div>\r\n    <div class=\"pointer\" :style=\"{top: pointerTop, left: pointerLeft}\">\r\n      <slot><div class=\"circle\"></div></slot>\r\n    </div>\r\n  </div>\r\n";

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(47)
	__vue_script__ = __webpack_require__(49)
	__vue_template__ = __webpack_require__(55)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\cassio\\Documents\\GitHub\\vue-color\\src\\components\\common\\Alpha.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5b165db3&file=Alpha.vue!./../../../node_modules/stylus-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../../node_modules/eslint-loader/index.js!./../../../node_modules/eslint-loader/index.js!./Alpha.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5b165db3&file=Alpha.vue!./../../../node_modules/stylus-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../../node_modules/eslint-loader/index.js!./../../../node_modules/eslint-loader/index.js!./Alpha.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5b165db3&file=Alpha.vue!./../../../node_modules/stylus-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../../node_modules/eslint-loader/index.js!./../../../node_modules/eslint-loader/index.js!./Alpha.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 48 */,
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Checkboard = __webpack_require__(50);
	
	var _Checkboard2 = _interopRequireDefault(_Checkboard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'Alpha',
	  props: {
	    colors: Object,
	    onChange: Function
	  },
	  components: {
	    checkboard: _Checkboard2.default
	  },
	  computed: {
	    gradientColor: function gradientColor() {
	      var rgba = this.colors.rgba;
	      var rgbStr = [rgba.r, rgba.g, rgba.b].join(',');
	      return 'linear-gradient(to right, rgba(' + rgbStr + ', 0) 0%, rgba(' + rgbStr + ', 1) 100%)';
	    }
	  },
	  methods: {
	    handleChange: function handleChange(e, skip) {
	      !skip && e.preventDefault();
	      var container = this.$els.container;
	      var containerWidth = container.clientWidth;
	      var left = (e.pageX || e.touches[0].pageX) - (container.getBoundingClientRect().left + window.pageXOffset);
	
	      var a;
	      if (left < 0) {
	        a = 0;
	      } else if (left > containerWidth) {
	        a = 1;
	      } else {
	        a = Math.round(left * 100 / containerWidth) / 100;
	      }
	
	      if (this.colors.a !== a) {
	        this.onChange({
	          h: this.colors.hsl.h,
	          s: this.colors.hsl.s,
	          l: this.colors.hsl.l,
	          a: a,
	          source: 'rgba'
	        });
	      }
	    },
	    handleMouseDown: function handleMouseDown(e) {
	      this.handleChange(e, true);
	      window.addEventListener('mousemove', this.handleChange);
	      window.addEventListener('mouseup', this.handleMouseUp);
	    },
	    handleMouseUp: function handleMouseUp() {
	      this.unbindEventListeners();
	    },
	    unbindEventListeners: function unbindEventListeners() {
	      window.removeEventListener('mousemove', this.handleChange);
	      window.removeEventListener('mouseup', this.handleMouseUp);
	    }
	  }
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(51)
	__vue_script__ = __webpack_require__(53)
	__vue_template__ = __webpack_require__(54)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\cassio\\Documents\\GitHub\\vue-color\\src\\components\\common\\Checkboard.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-c267d04e&file=Checkboard.vue!./../../../node_modules/stylus-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../../node_modules/eslint-loader/index.js!./../../../node_modules/eslint-loader/index.js!./Checkboard.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-c267d04e&file=Checkboard.vue!./../../../node_modules/stylus-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../../node_modules/eslint-loader/index.js!./../../../node_modules/eslint-loader/index.js!./Checkboard.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-c267d04e&file=Checkboard.vue!./../../../node_modules/stylus-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../../node_modules/eslint-loader/index.js!./../../../node_modules/eslint-loader/index.js!./Checkboard.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 52 */,
/* 53 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _checkboardCache = {};
	
	exports.default = {
	  name: 'Checkboard',
	  props: {
	    size: {
	      type: [Number | String],
	      default: 8
	    },
	    white: {
	      type: String,
	      default: '#fff'
	    },
	    grey: {
	      type: String,
	      default: '#e6e6e6'
	    }
	  },
	  computed: {
	    bgStyle: function bgStyle() {
	      return 'url(' + getCheckboard(this.white, this.grey, this.size) + ') center left';
	    }
	  }
	};
	
	
	function renderCheckboard(c1, c2, size) {
	  if (typeof document === 'undefined') {
	    return null;
	  }
	  var canvas = document.createElement('canvas');
	  canvas.width = canvas.height = size * 2;
	  var ctx = canvas.getContext('2d');
	
	  if (!ctx) {
	    return null;
	  }
	  ctx.fillStyle = c1;
	  ctx.fillRect(0, 0, canvas.width, canvas.height);
	  ctx.fillStyle = c2;
	  ctx.fillRect(0, 0, size, size);
	  ctx.translate(size, size);
	  ctx.fillRect(0, 0, size, size);
	  return canvas.toDataURL();
	}
	
	function getCheckboard(c1, c2, size) {
	  var key = c1 + ',' + c2 + ',' + size;
	
	  if (_checkboardCache[key]) {
	    return _checkboardCache[key];
	  } else {
	    var checkboard = renderCheckboard(c1, c2, size);
	    _checkboardCache[key] = checkboard;
	    return checkboard;
	  }
	}

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = "\r\n  <div class=\"c-checkboard\" :style=\"{background:  bgStyle}\"></div>\r\n";

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = "\r\n  <div class=\"c-alpha\">\r\n    <div class=\"checkboard-wrap\">\r\n      <checkboard></checkboard>\r\n    </div>\r\n    <div class=\"gradient\" :style=\"{background: gradientColor}\"></div>\r\n    <div class=\"container\" v-el:container\r\n        @mousedown=\"handleMouseDown\"\r\n        @touchmove=\"handleChange\"\r\n        @touchstart=\"handleChange\">\r\n      <div class=\"pointer\" :style=\"{left: colors.a * 100 + '%'}\">\r\n        <slot><div class=\"picker\"></div></slot>\r\n      </div>\r\n    </div>\r\n  </div>\r\n";

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = "\r\n  <div class=\"c-photoshop\">\r\n    <div class=\"head\">{{head}}</div>\r\n    <div class=\"body\">\r\n      <div class=\"saturation-wrap\">\r\n        <saturation :colors.sync=\"colors\" :on-change=\"childChange\"></saturation>\r\n      </div>\r\n      <div class=\"hue-wrap\">\r\n        <hue :colors.sync=\"colors\" :on-change=\"childChange\" direction=\"vertical\">\r\n          <div class=\"hue-pointer\">\r\n            <i class=\"left\"></i><i class=\"right\"></i>\r\n          </div>\r\n        </hue>  \r\n      </div>\r\n      <div class=\"controls\">\r\n        <div class=\"previews\">\r\n          <div class=\"label\">new</div>\r\n          <div class=\"swatches\">\r\n            <div class=\"pr-color\" :style=\"{background: colors.hex}\"></div>\r\n            <div class=\"pr-color\" :style=\"{background: currentColor}\"></div>\r\n          </div>\r\n          <div class=\"label\">current</div>\r\n        </div>\r\n        <div class=\"actions\">\r\n          <div class=\"ac-btn\" @click=\"handleAccept\">OK</div>\r\n          <div class=\"ac-btn\" @click=\"handleCancel\">Cancel</div>\r\n          <div class=\"fields\">\r\n            <!-- hsla -->\r\n            <ed-in label=\"h\" :val.sync=\"colors.hsl.h\" \r\n              :on-change=\"inputChange\"></ed-in>\r\n            <ed-in label=\"s\" :val.sync=\"colors.hsl.s\"\r\n              :on-change=\"inputChange\"></ed-in>\r\n            <ed-in label=\"v\" :val.sync=\"colors.hsl.l\"\r\n              :on-change=\"inputChange\"></ed-in>\r\n            <div class=\"divider\"></div>\r\n            <!-- rgba -->\r\n            <ed-in label=\"r\" :val.sync=\"colors.rgba.r\" \r\n              :on-change=\"inputChange\"></ed-in>\r\n            <ed-in label=\"g\" :val.sync=\"colors.rgba.g\" \r\n              :on-change=\"inputChange\"></ed-in>\r\n            <ed-in label=\"b\" :val.sync=\"colors.rgba.b\"\r\n              :on-change=\"inputChange\"></ed-in>\r\n            <div class=\"divider\"></div>\r\n            <!-- hex -->\r\n            <ed-in label=\"#\" class=\"hex\"\r\n              :val.sync=\"colors.hex\"\r\n              :on-change=\"inputChange\"></ed-in>    \r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n";

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(58)
	__vue_script__ = __webpack_require__(60)
	__vue_template__ = __webpack_require__(61)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\cassio\\Documents\\GitHub\\vue-color\\src\\components\\Sketch.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-46ce7872&file=Sketch.vue!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/eslint-loader/index.js!./../../node_modules/eslint-loader/index.js!./Sketch.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-46ce7872&file=Sketch.vue!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/eslint-loader/index.js!./../../node_modules/eslint-loader/index.js!./Sketch.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-46ce7872&file=Sketch.vue!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/eslint-loader/index.js!./../../node_modules/eslint-loader/index.js!./Sketch.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 59 */,
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _color = __webpack_require__(6);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _EditableInput = __webpack_require__(8);
	
	var _EditableInput2 = _interopRequireDefault(_EditableInput);
	
	var _Saturation = __webpack_require__(39);
	
	var _Saturation2 = _interopRequireDefault(_Saturation);
	
	var _Hue = __webpack_require__(23);
	
	var _Hue2 = _interopRequireDefault(_Hue);
	
	var _Alpha = __webpack_require__(46);
	
	var _Alpha2 = _interopRequireDefault(_Alpha);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var presetColors = ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF'];
	
	exports.default = {
	  name: 'Sketch',
	  mixins: [_color2.default],
	  components: {
	    saturation: _Saturation2.default,
	    hue: _Hue2.default,
	    alpha: _Alpha2.default,
	    'ed-in': _EditableInput2.default
	  },
	  data: function data() {
	    return {
	      presetColors: presetColors
	    };
	  },
	
	  computed: {
	    activeColor: function activeColor() {
	      var rgba = this.colors.rgba;
	      return 'rgba(' + [rgba.r, rgba.g, rgba.b, rgba.a].join(',') + ')';
	    }
	  },
	  methods: {
	    handlePreset: function handlePreset(c) {
	      this.colorChange({
	        hex: c,
	        source: 'hex'
	      });
	    },
	    childChange: function childChange(data) {
	      this.colorChange(data);
	    },
	    inputChange: function inputChange(data) {
	      if (!data) {
	        return;
	      }
	      if (data.hex) {
	        this.isValidHex(data.hex) && this.colorChange({
	          hex: data.hex,
	          source: 'hex'
	        });
	      } else if (data.r || data.g || data.b || data.a) {
	        this.colorChange({
	          r: data.r || this.colors.rgba.r,
	          g: data.g || this.colors.rgba.g,
	          b: data.b || this.colors.rgba.b,
	          a: data.a || this.colors.rgba.a,
	          source: 'rgba'
	        });
	      }
	    }
	  }
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = "\r\n  <div class=\"c-sketch\">\r\n    <div class=\"saturation-wrap\">\r\n      <saturation :colors.sync=\"colors\" :on-change=\"childChange\"></saturation>\r\n    </div>\r\n    <div class=\"controls\">\r\n      <div class=\"sliders\">\r\n        <div class=\"hue-wrap\">\r\n          <hue :colors.sync=\"colors\" :on-change=\"childChange\"></hue>  \r\n        </div>\r\n        <div class=\"alpha-wrap\">\r\n          <alpha :colors.sync=\"colors\" :on-change=\"childChange\"></alpha>\r\n        </div>\r\n      </div>\r\n      <div class=\"color-wrap\">\r\n        <div class=\"active-color\" :style=\"{background: activeColor}\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"field\">\r\n      <!-- rgba -->\r\n      <div class=\"double\">\r\n        <ed-in label=\"hex\"\r\n        :val.sync=\"colors.hex\"\r\n        :on-change=\"inputChange\"></ed-in>  \r\n      </div>\r\n      <div class=\"single\">\r\n        <ed-in label=\"r\" :val.sync=\"colors.rgba.r\" \r\n        :on-change=\"inputChange\"></ed-in>\r\n      </div>\r\n      <div class=\"single\">\r\n        <ed-in label=\"g\" :val.sync=\"colors.rgba.g\" \r\n        :on-change=\"inputChange\"></ed-in>\r\n      </div>\r\n      <div class=\"single\">\r\n        <ed-in label=\"b\" :val.sync=\"colors.rgba.b\"\r\n        :on-change=\"inputChange\"></ed-in>\r\n      </div>\r\n      <div class=\"single\">\r\n        <ed-in label=\"a\" :val.sync=\"colors.a\" :arrow-offset=\"0.01\" :max=\"1\"\r\n        :on-change=\"inputChange\"></ed-in>\r\n      </div>\r\n    </div>\r\n    <div class=\"presets\">\r\n      <div class=\"presets-color\"\r\n        v-for=\"c in presetColors\"\r\n        :style=\"{background: c}\"\r\n        @click=\"handlePreset(c)\"\r\n        >\r\n      </div>\r\n    </div>\r\n  </div>\r\n";

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(63)
	__vue_script__ = __webpack_require__(65)
	__vue_template__ = __webpack_require__(66)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\cassio\\Documents\\GitHub\\vue-color\\src\\components\\CmykSketch.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2f6d2b8e&file=CmykSketch.vue!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/eslint-loader/index.js!./../../node_modules/eslint-loader/index.js!./CmykSketch.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2f6d2b8e&file=CmykSketch.vue!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/eslint-loader/index.js!./../../node_modules/eslint-loader/index.js!./CmykSketch.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2f6d2b8e&file=CmykSketch.vue!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/eslint-loader/index.js!./../../node_modules/eslint-loader/index.js!./CmykSketch.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 64 */,
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _color = __webpack_require__(6);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _EditableInput = __webpack_require__(8);
	
	var _EditableInput2 = _interopRequireDefault(_EditableInput);
	
	var _Saturation = __webpack_require__(39);
	
	var _Saturation2 = _interopRequireDefault(_Saturation);
	
	var _Hue = __webpack_require__(23);
	
	var _Hue2 = _interopRequireDefault(_Hue);
	
	var _Alpha = __webpack_require__(46);
	
	var _Alpha2 = _interopRequireDefault(_Alpha);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var presetColors = ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF'];
	
	exports.default = {
	  name: 'CmykSketch',
	  mixins: [_color2.default],
	  components: {
	    saturation: _Saturation2.default,
	    hue: _Hue2.default,
	    alpha: _Alpha2.default,
	    'ed-in': _EditableInput2.default
	  },
	  data: function data() {
	    return {
	      presetColors: presetColors
	    };
	  },
	
	  computed: {
	    activeColor: function activeColor() {
	      var rgba = this.colors.rgba;
	      return 'rgba(' + [rgba.r, rgba.g, rgba.b, rgba.a].join(',') + ')';
	    }
	  },
	  methods: {
	    handlePreset: function handlePreset(c) {
	      this.colorChange({
	        hex: c,
	        source: 'hex'
	      });
	    },
	    childChange: function childChange(data) {
	      this.colorChange(data);
	    },
	    inputChange: function inputChange(data) {
	      if (!data) {
	        return;
	      }
	      if (data.hex) {
	        this.isValidHex(data.hex) && this.colorChange({
	          hex: data.hex,
	          source: 'hex'
	        });
	      } else if (data.r || data.g || data.b || data.a) {
	        this.colorChange({
	          r: data.r || this.colors.rgba.r,
	          g: data.g || this.colors.rgba.g,
	          b: data.b || this.colors.rgba.b,
	          a: data.a || this.colors.rgba.a,
	          source: 'rgba'
	        });
	      }
	    }
	  }
	};

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = "\r\n  <div class=\"c-sketch\">\r\n    <div class=\"saturation-wrap\">\r\n      <saturation :colors.sync=\"colors\" :on-change=\"childChange\"></saturation>\r\n    </div>\r\n    <div class=\"controls\">\r\n      <div class=\"sliders\">\r\n        <div class=\"hue-wrap\">\r\n          <hue :colors.sync=\"colors\" :on-change=\"childChange\"></hue>\r\n        </div>\r\n        <!-- <div class=\"alpha-wrap\">\r\n          <alpha :colors.sync=\"colors\" :on-change=\"childChange\"></alpha>\r\n        </div> -->\r\n      </div>\r\n      <div class=\"color-wrap\">\r\n        <div class=\"active-color\" :style=\"{background: activeColor}\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"field\">\r\n      <!-- rgba -->\r\n      <div class=\"double\">\r\n        <ed-in label=\"hex\"\r\n        :val.sync=\"colors.hex\"\r\n        :on-change=\"inputChange\"></ed-in>\r\n      </div>\r\n      <div class=\"single\">\r\n        <ed-in label=\"r\" :val.sync=\"colors.rgba.r\"\r\n        :on-change=\"inputChange\"></ed-in>\r\n      </div>\r\n      <div class=\"single\">\r\n        <ed-in label=\"g\" :val.sync=\"colors.rgba.g\"\r\n        :on-change=\"inputChange\"></ed-in>\r\n      </div>\r\n      <div class=\"single\">\r\n        <ed-in label=\"b\" :val.sync=\"colors.rgba.b\"\r\n        :on-change=\"inputChange\"></ed-in>\r\n      </div>\r\n      <div class=\"single\">\r\n        <ed-in label=\"a\" :val.sync=\"colors.a\" :arrow-offset=\"0.01\" :max=\"1\"\r\n        :on-change=\"inputChange\"></ed-in>\r\n      </div>\r\n    </div>\r\n    <div class=\"field\">\r\n      <!-- CMYK -->\r\n      <div class=\"double\">\r\n        <ed-in label=\"name\"\r\n        :val.sync=\"colors.name\"\r\n        :on-change=\"inputChange\"></ed-in>\r\n      </div>\r\n      <!-- <div class=\"single\">\r\n        <ed-in label=\"C\" :val.sync=\"colors.cmyk.c\"\r\n        :on-change=\"inputChange\"></ed-in>\r\n      </div>\r\n      <div class=\"single\">\r\n        <ed-in label=\"M\" :val.sync=\"colors.cmyk.m\"\r\n        :on-change=\"inputChange\"></ed-in>\r\n      </div>\r\n      <div class=\"single\">\r\n        <ed-in label=\"Y\" :val.sync=\"colors.cmyk.y\"\r\n        :on-change=\"inputChange\"></ed-in>\r\n      </div>\r\n      <div class=\"single\">\r\n        <ed-in label=\"K\" :val.sync=\"colors.cmyk.k\"\r\n        :on-change=\"inputChange\"></ed-in>\r\n      </div> -->\r\n    </div>\r\n    <div class=\"field\">\r\n      <div class=\"double\">\r\n        <ed-in label=\"Spot Color Name\" :val.sync=\"colors.spotColorName\"\r\n        :on-change=\"inputChange\"></ed-in>\r\n      </div>\r\n      <div class=\"single\">\r\n        <label for=\"is_spot_color\">Is spot color</label>\r\n        <input type=\"checkbox\" name=\"is_spot_color\" v-model=\"colors.isSpotColor\">\r\n      </div>\r\n    </div>\r\n    <div class=\"field\">\r\n      <button type=\"button\" name=\"delete_color\" class=\"delete-button text-error\">Delete</button>\r\n    </div>\r\n  </div>\r\n";

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(68)
	__vue_script__ = __webpack_require__(70)
	__vue_template__ = __webpack_require__(71)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "C:\\Users\\cassio\\Documents\\GitHub\\vue-color\\src\\components\\Chrome.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-d77f2f80&file=Chrome.vue!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/eslint-loader/index.js!./../../node_modules/eslint-loader/index.js!./Chrome.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-d77f2f80&file=Chrome.vue!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/eslint-loader/index.js!./../../node_modules/eslint-loader/index.js!./Chrome.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-d77f2f80&file=Chrome.vue!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./../../node_modules/eslint-loader/index.js!./../../node_modules/eslint-loader/index.js!./Chrome.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 69 */,
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _color = __webpack_require__(6);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _EditableInput = __webpack_require__(8);
	
	var _EditableInput2 = _interopRequireDefault(_EditableInput);
	
	var _Saturation = __webpack_require__(39);
	
	var _Saturation2 = _interopRequireDefault(_Saturation);
	
	var _Hue = __webpack_require__(23);
	
	var _Hue2 = _interopRequireDefault(_Hue);
	
	var _Alpha = __webpack_require__(46);
	
	var _Alpha2 = _interopRequireDefault(_Alpha);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'Chrome',
	  mixins: [_color2.default],
	  props: {},
	  components: {
	    saturation: _Saturation2.default,
	    hue: _Hue2.default,
	    alpha: _Alpha2.default,
	    'ed-in': _EditableInput2.default
	  },
	  data: function data() {
	    return {
	      fields: ['hex', 'rgba', 'hsla'],
	      fieldsIndex: 0,
	      highlight: false
	    };
	  },
	
	  computed: {
	    activeColor: function activeColor() {
	      var rgba = this.colors.rgba;
	      return 'rgba(' + [rgba.r, rgba.g, rgba.b, rgba.a].join(',') + ')';
	    }
	  },
	  methods: {
	    handlePreset: function handlePreset(c) {
	      this.colorChange({
	        hex: c,
	        source: 'hex'
	      });
	    },
	    childChange: function childChange(data) {
	      this.colorChange(data);
	    },
	    inputChange: function inputChange(data) {
	      if (!data) {
	        return;
	      }
	      if (data.hex) {
	        this.isValidHex(data.hex) && this.colorChange({
	          hex: data.hex,
	          source: 'hex'
	        });
	      } else if (data.r || data.g || data.b || data.a) {
	        this.colorChange({
	          r: data.r || this.colors.rgba.r,
	          g: data.g || this.colors.rgba.g,
	          b: data.b || this.colors.rgba.b,
	          a: data.a || this.colors.rgba.a,
	          source: 'rgba'
	        });
	      }
	    },
	    toggleViews: function toggleViews() {
	      if (this.fieldsIndex >= 2) {
	        this.fieldsIndex = 0;
	        return;
	      }
	      this.fieldsIndex = 0;
	    },
	    showHighlight: function showHighlight() {
	      this.highlight = true;
	    },
	    hideHighlight: function hideHighlight() {
	      this.highlight = false;
	    }
	  }
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "\r\n  <div class=\"c-chrome\">\r\n    <div class=\"saturation-wrap\">\r\n      <saturation :colors.sync=\"colors\" :on-change=\"childChange\"></saturation>\r\n    </div>\r\n    <div class=\"chrome-body\">\r\n      <div class=\"controls\">\r\n        <div class=\"color-wrap\">\r\n          <div class=\"active-color\" :style=\"{background: activeColor}\"></div>\r\n        </div>\r\n\r\n        <div class=\"sliders\">\r\n          <div class=\"hue-wrap\">\r\n            <hue :colors.sync=\"colors\" :on-change=\"childChange\"></hue>  \r\n          </div>\r\n          <div class=\"alpha-wrap\">\r\n            <alpha :colors.sync=\"colors\" :on-change=\"childChange\"></alpha>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"fields-wrap\">\r\n        <div class=\"fields\" v-show=\"fieldsIndex === 0\">\r\n          <!-- hex -->\r\n          <div class=\"field\">\r\n            <ed-in label=\"hex\"\r\n            :val.sync=\"colors.hex\"\r\n            :on-change=\"inputChange\"></ed-in>  \r\n          </div>\r\n        </div>\r\n        <div class=\"fields\" v-show=\"fieldsIndex === 1\">\r\n          <!-- rgba -->\r\n          <div class=\"field\">\r\n            <ed-in label=\"r\" :val.sync=\"colors.rgba.r\" \r\n            :on-change=\"inputChange\"></ed-in>\r\n          </div>\r\n          <div class=\"field\">\r\n            <ed-in label=\"g\" :val.sync=\"colors.rgba.g\" \r\n            :on-change=\"inputChange\"></ed-in>\r\n          </div>\r\n          <div class=\"field\">\r\n            <ed-in label=\"b\" :val.sync=\"colors.rgba.b\"\r\n            :on-change=\"inputChange\"></ed-in>\r\n          </div>\r\n          <div class=\"field\">\r\n            <ed-in label=\"a\" :val.sync=\"colors.a\" :arrow-offset=\"0.01\" :max=\"1\"\r\n            :on-change=\"inputChange\"></ed-in>\r\n          </div>\r\n        </div>\r\n        <div class=\"fields\" v-show=\"fieldsIndex === 2\">\r\n          <!-- hsla -->\r\n          <div class=\"field\">\r\n            <ed-in label=\"h\" :val.sync=\"colors.hsl.h\" \r\n            :on-change=\"inputChange\"></ed-in>\r\n          </div>\r\n          <div class=\"field\"> \r\n            <ed-in label=\"s\" :val.sync=\"colors.hsl.s\"\r\n            :on-change=\"inputChange\"></ed-in>\r\n          </div>\r\n          <div class=\"field\">\r\n            <ed-in label=\"l\" :val.sync=\"colors.hsl.l\"\r\n            :on-change=\"inputChange\"></ed-in>\r\n          </div>\r\n          <div class=\"field\">\r\n            <ed-in label=\"a\" :val.sync=\"colors.a\" :arrow-offset=\"0.01\" :max=\"1\"\r\n            :on-change=\"inputChange\"></ed-in>\r\n          </div>\r\n        </div>\r\n        <!-- btn -->\r\n        <div class=\"toggle-btn\">\r\n          <div class=\"icon\" @click=\"toggleViews\">\r\n            <svg style=\"width:24px; height:24px\" viewBox=\"0 0 24 24\" \r\n              @mouseover=\"showHighlight\" \r\n              @mouseenter=\"showHighlight\" \r\n              @mouseout=\"hideHighlight\">\r\n              <path fill=\"#333\" d=\"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z\" />\r\n            </svg>\r\n          </div>\r\n          <div class=\"icon-highlight\" v-show=\"highlight\"></div>\r\n        </div>\r\n        <!-- btn -->\r\n      </div>      \r\n    </div>\r\n  </div>\r\n";

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-color.js.map