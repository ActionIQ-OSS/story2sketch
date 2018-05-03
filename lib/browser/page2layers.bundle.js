var page2layers =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Base = function () {
  function Base() {
    _classCallCheck(this, Base);

    this._class = null;
    this._layers = [];
    this._style = null;
    this._objectID = (0, _utils.generateID)();
    this._name = '';
    this.setResizingConstraint(_utils.RESIZING_CONSTRAINTS.NONE);
  }

  _createClass(Base, [{
    key: 'setFixedWidthAndHeight',
    value: function () {
      function setFixedWidthAndHeight() {
        this.setResizingConstraint(_utils.RESIZING_CONSTRAINTS.WIDTH, _utils.RESIZING_CONSTRAINTS.HEIGHT);
      }

      return setFixedWidthAndHeight;
    }()
  }, {
    key: 'setResizingConstraint',
    value: function () {
      function setResizingConstraint() {
        this._resizingConstraint = _utils.calculateResizingConstraintValue.apply(undefined, arguments);
      }

      return setResizingConstraint;
    }()
  }, {
    key: 'getID',
    value: function () {
      function getID() {
        return this._objectID;
      }

      return getID;
    }()
  }, {
    key: 'setName',
    value: function () {
      function setName(name) {
        this._name = name;
      }

      return setName;
    }()
  }, {
    key: 'addLayer',
    value: function () {
      function addLayer(layer) {
        this._layers.push(layer);
      }

      return addLayer;
    }()
  }, {
    key: 'setStyle',
    value: function () {
      function setStyle(style) {
        this._style = style;
      }

      return setStyle;
    }()
  }, {
    key: 'toJSON',
    value: function () {
      function toJSON() {
        if (!this._class) {
          throw new Error('Class not set.');
        }

        return {
          '_class': this._class,
          'do_objectID': this._objectID,
          'exportOptions': {
            '_class': 'exportOptions',
            'exportFormats': [],
            'includedLayerIds': [],
            'layerOptions': 0,
            'shouldTrim': false
          },
          'isFlippedHorizontal': false,
          'isFlippedVertical': false,
          'isLocked': false,
          'isVisible': true,
          'layerListExpandedType': 0,
          'name': this._name || this._class,
          'nameIsFixed': false,
          'resizingConstraint': this._resizingConstraint,
          'resizingType': 0,
          'rotation': 0,
          'shouldBreakMaskChain': false,
          style: this._style ? this._style.toJSON() : undefined,
          layers: this._layers.map(function (layer) {
            return layer.toJSON();
          })
        };
      }

      return toJSON;
    }()
  }]);

  return Base;
}();

exports['default'] = Base;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RESIZING_CONSTRAINTS = exports.calculateResizingConstraintValue = exports.makeImageFill = exports.makeColorFill = exports.makeColorFromCSS = undefined;
exports.generateID = generateID;

var _normalizeCssColor = __webpack_require__(16);

var _normalizeCssColor2 = _interopRequireDefault(_normalizeCssColor);

var _sketchConstants = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var lut = [];

for (var i = 0; i < 256; i += 1) {
  lut[i] = (i < 16 ? '0' : '') + i.toString(16);
}

// http://stackoverflow.com/a/21963136
function e7() {
  var d0 = Math.random() * 0xffffffff | 0;
  var d1 = Math.random() * 0xffffffff | 0;
  var d2 = Math.random() * 0xffffffff | 0;
  var d3 = Math.random() * 0xffffffff | 0;

  return String(lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff]) + '-' + String(lut[d1 & 0xff]) + String(lut[d1 >> 8 & 0xff]) + '-' + String(lut[d1 >> 16 & 0x0f | 0x40]) + String(lut[d1 >> 24 & 0xff]) + '-' + String(lut[d2 & 0x3f | 0x80]) + String(lut[d2 >> 8 & 0xff]) + '-' + String(lut[d2 >> 16 & 0xff]) + String(lut[d2 >> 24 & 0xff]) + String(lut[d3 & 0xff]) + String(lut[d3 >> 8 & 0xff]) + String(lut[d3 >> 16 & 0xff]) + String(lut[d3 >> 24 & 0xff]);
}

function generateID() {
  return e7();
}

var safeToLower = function safeToLower(input) {
  if (typeof input === 'string') {
    return input.toLowerCase();
  }

  return input;
};

// Takes colors as CSS hex, name, rgb, rgba, hsl or hsla
var makeColorFromCSS = exports.makeColorFromCSS = function makeColorFromCSS(input) {
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var nullableColor = (0, _normalizeCssColor2['default'])(safeToLower(input));
  var colorInt = nullableColor === null ? 0x00000000 : nullableColor;

  var _normalizeColor$rgba = _normalizeCssColor2['default'].rgba(colorInt),
      r = _normalizeColor$rgba.r,
      g = _normalizeColor$rgba.g,
      b = _normalizeColor$rgba.b,
      a = _normalizeColor$rgba.a;

  return {
    _class: 'color',
    red: r / 255,
    green: g / 255,
    blue: b / 255,
    alpha: a * alpha
  };
};

// Solid color fill
var makeColorFill = exports.makeColorFill = function makeColorFill(cssColor, alpha) {
  return {
    _class: 'fill',
    isEnabled: true,
    color: makeColorFromCSS(cssColor, alpha),
    fillType: 0,
    noiseIndex: 0,
    noiseIntensity: 0,
    patternFillType: 1,
    patternTileScale: 1
  };
};

// patternFillType - 0 1 2 3
var makeImageFill = exports.makeImageFill = function makeImageFill(url) {
  var patternFillType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var result = {
    _class: 'fill',
    isEnabled: true,
    fillType: _sketchConstants.FillType.Pattern,
    image: {
      _class: 'MSJSONOriginalDataReference',
      _ref_class: 'MSImageData',
      _ref: 'images/' + String(generateID())
    },
    noiseIndex: 0,
    noiseIntensity: 0,
    patternFillType: patternFillType,
    patternTileScale: 1
  };

  if (url.indexOf('data:') === 0) {
    var imageData = url.match(/data:.+;base64,(.+)/i);

    if (imageData && imageData[1]) {
      result.image.data = { _data: imageData[1] };
    } else {
      return null;
    }
  } else {
    result.image.url = url;
  }

  return result;
};

var containsAllItems = function containsAllItems(needles, haystack) {
  return needles.every(function (needle) {
    return haystack.includes(needle);
  });
};

var calculateResizingConstraintValue = exports.calculateResizingConstraintValue = function calculateResizingConstraintValue() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var noHeight = [RESIZING_CONSTRAINTS.TOP, RESIZING_CONSTRAINTS.BOTTOM, RESIZING_CONSTRAINTS.HEIGHT];
  var noWidth = [RESIZING_CONSTRAINTS.LEFT, RESIZING_CONSTRAINTS.RIGHT, RESIZING_CONSTRAINTS.WIDTH];
  var validValues = Object.values(RESIZING_CONSTRAINTS);

  if (!args.every(function (arg) {
    return validValues.includes(arg);
  })) {
    throw new Error('Unknown resizing constraint');
  } else if (containsAllItems(noHeight, args)) {
    throw new Error('Can\'t fix height when top & bottom are fixed');
  } else if (containsAllItems(noWidth, args)) {
    throw new Error('Can\'t fix width when left & right are fixed');
  }

  return args.length > 0 ? args.reduce(function (acc, item) {
    return acc & item;
  }, args[0]) : RESIZING_CONSTRAINTS.NONE;
};

var RESIZING_CONSTRAINTS = exports.RESIZING_CONSTRAINTS = {
  TOP: 31,
  RIGHT: 62,
  BOTTOM: 55,
  LEFT: 59,
  WIDTH: 61,
  HEIGHT: 47,
  NONE: 63
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = nodeToSketchLayers;

var _rectangle = __webpack_require__(3);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _svg = __webpack_require__(4);

var _svg2 = _interopRequireDefault(_svg);

var _shapeGroup = __webpack_require__(5);

var _shapeGroup2 = _interopRequireDefault(_shapeGroup);

var _style = __webpack_require__(6);

var _style2 = _interopRequireDefault(_style);

var _text = __webpack_require__(7);

var _text2 = _interopRequireDefault(_text);

var _textStyle = __webpack_require__(19);

var _textStyle2 = _interopRequireDefault(_textStyle);

var _createXPathFromElement = __webpack_require__(20);

var _createXPathFromElement2 = _interopRequireDefault(_createXPathFromElement);

var _background = __webpack_require__(21);

var _svg3 = __webpack_require__(22);

var _bcr = __webpack_require__(23);

var _text3 = __webpack_require__(24);

var _visibility = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var DEFAULT_VALUES = {
  backgroundColor: 'rgba(0, 0, 0, 0)',
  backgroundImage: 'none',
  borderWidth: '0px',
  boxShadow: 'none'
};

function shadowStringToObject(shadowStr) {
  var shadowObj = {};
  var matches = shadowStr.match(/^([a-z0-9#., ()]+) ([-]?[0-9.]+)px ([-]?[0-9.]+)px ([-]?[0-9.]+)px ([-]?[0-9.]+)px ?(inset)?$/i);

  if (matches && matches.length === 7) {
    shadowObj = {
      color: matches[1],
      offsetX: matches[2],
      offsetY: matches[3],
      blur: matches[4],
      spread: matches[5]
    };
  }

  return shadowObj;
}

function hasOnlyDefaultStyles(styles) {
  return Object.keys(DEFAULT_VALUES).every(function (key) {
    var defaultValue = DEFAULT_VALUES[key];
    var value = styles[key];

    return defaultValue === value;
  });
}

function fixBorderRadius(borderRadius, width, height) {
  var matches = borderRadius.match(/^([0-9.]+)(.+)$/);

  // Sketch uses 'px' units for border radius, so we need to convert % to px
  if (matches && matches[2] === '%') {
    var baseVal = Math.max(width, height);
    var percentageApplied = baseVal * (parseInt(matches[1], 10) / 100);

    return Math.round(percentageApplied);
  }
  return parseInt(borderRadius, 10);
}

function isSVGDescendant(node) {
  return node instanceof SVGElement && node.matches('svg *');
}

function nodeToSketchLayers(node, options) {
  var layers = [];
  var bcr = node.getBoundingClientRect();
  var left = bcr.left,
      top = bcr.top;

  var width = bcr.right - bcr.left;
  var height = bcr.bottom - bcr.top;

  var styles = getComputedStyle(node);
  var backgroundColor = styles.backgroundColor,
      backgroundImage = styles.backgroundImage,
      borderColor = styles.borderColor,
      borderWidth = styles.borderWidth,
      borderTopWidth = styles.borderTopWidth,
      borderRightWidth = styles.borderRightWidth,
      borderBottomWidth = styles.borderBottomWidth,
      borderLeftWidth = styles.borderLeftWidth,
      borderTopColor = styles.borderTopColor,
      borderRightColor = styles.borderRightColor,
      borderBottomColor = styles.borderBottomColor,
      borderLeftColor = styles.borderLeftColor,
      borderTopLeftRadius = styles.borderTopLeftRadius,
      borderTopRightRadius = styles.borderTopRightRadius,
      borderBottomLeftRadius = styles.borderBottomLeftRadius,
      borderBottomRightRadius = styles.borderBottomRightRadius,
      fontFamily = styles.fontFamily,
      fontWeight = styles.fontWeight,
      fontSize = styles.fontSize,
      lineHeight = styles.lineHeight,
      letterSpacing = styles.letterSpacing,
      color = styles.color,
      textTransform = styles.textTransform,
      textDecorationLine = styles.textDecorationLine,
      textAlign = styles.textAlign,
      justifyContent = styles.justifyContent,
      display = styles.display,
      boxShadow = styles.boxShadow,
      opacity = styles.opacity,
      whiteSpace = styles.whiteSpace;

  // skip SVG child nodes as they are already covered by `new SVG(…)`

  if (isSVGDescendant(node)) {
    return layers;
  }

  if (!(0, _visibility.isNodeVisible)(node, bcr, styles)) {
    return layers;
  }

  var shapeGroup = new _shapeGroup2['default']({ x: left, y: top, width: width, height: height });
  var isImage = node.nodeName === 'IMG' && node.currentSrc;
  var isSVG = node.nodeName === 'svg';

  // if layer has no background/shadow/border/etc. skip it
  if (isImage || !hasOnlyDefaultStyles(styles)) {
    var style = new _style2['default']();

    if (backgroundColor) {
      style.addColorFill(backgroundColor);
    }

    if (isImage) {
      var absoluteUrl = new URL(node.currentSrc, location.href);

      style.addImageFill(absoluteUrl.href);
      shapeGroup.setFixedWidthAndHeight();
    }

    // This should return a array when multiple background-images are supported
    var backgroundImageResult = (0, _background.parseBackgroundImage)(backgroundImage);

    if (backgroundImageResult) {
      switch (backgroundImageResult.type) {
        case 'Image':
          style.addImageFill(backgroundImageResult.value);
          break;
        case 'LinearGradient':
          style.addGradientFill(backgroundImageResult.value);
          break;
        default:
          // Unsupported types:
          // - radial gradient
          // - multiple background-image
          break;
      }
    }

    if (boxShadow !== DEFAULT_VALUES.boxShadow) {
      var shadowObj = shadowStringToObject(boxShadow);

      if (boxShadow.indexOf('inset') !== -1) {
        if (borderWidth.indexOf(' ') === -1) {
          shadowObj.spread += parseInt(borderWidth, 10);
        }
        style.addInnerShadow(shadowObj);
      } else {
        style.addShadow(shadowObj);
      }
    }

    // support for one-side borders (using inner shadow because Sketch doesn't support that)
    if (borderWidth.indexOf(' ') === -1) {
      style.addBorder({ color: borderColor, thickness: parseInt(borderWidth, 10) });
    } else {
      if (borderTopWidth !== '0px') {
        style.addInnerShadow(shadowStringToObject(borderTopColor + ' 0px ' + borderTopWidth + ' 0px 0px inset'));
      }
      if (borderRightWidth !== '0px') {
        style.addInnerShadow(shadowStringToObject(borderRightColor + ' -' + borderRightWidth + ' 0px 0px 0px inset'));
      }
      if (borderBottomWidth !== '0px') {
        style.addInnerShadow(shadowStringToObject(borderBottomColor + ' 0px -' + borderBottomWidth + ' 0px 0px inset'));
      }
      if (borderLeftWidth !== '0px') {
        style.addInnerShadow(shadowStringToObject(borderLeftColor + ' ' + borderLeftWidth + ' 0px 0px 0px inset'));
      }
    }

    if (!options || options.layerOpacity !== false) {
      style.addOpacity(opacity);
    }

    shapeGroup.setStyle(style);

    if (options && options.getRectangleName) {
      shapeGroup.setName(options.getRectangleName(node));
    } else {
      shapeGroup.setName((0, _createXPathFromElement2['default'])(node));
    }

    //TODO borderRadius can be expressed in different formats and use various units - for simplicity we assume "X%"
    var cornerRadius = {
      topLeft: fixBorderRadius(borderTopLeftRadius, width, height),
      topRight: fixBorderRadius(borderTopRightRadius, width, height),
      bottomLeft: fixBorderRadius(borderBottomLeftRadius, width, height),
      bottomRight: fixBorderRadius(borderBottomRightRadius, width, height)
    };

    var rectangle = new _rectangle2['default']({ width: width, height: height, cornerRadius: cornerRadius });

    shapeGroup.addLayer(rectangle);

    layers.push(shapeGroup);
  }

  if (isSVG) {
    // sketch ignores padding and centerging as defined by viewBox and preserveAspectRatio when
    // importing SVG, so instead of using BCR of the SVG, we are using BCR of its children
    var childrenBCR = (0, _bcr.getGroupBCR)(Array.from(node.children));

    layers.push(new _svg2['default']({
      x: childrenBCR.left,
      y: childrenBCR.top,
      width: childrenBCR.width,
      height: childrenBCR.height,
      rawSVGString: (0, _svg3.getSVGString)(node)
    }));

    return layers;
  }

  if (!(0, _visibility.isTextVisible)(styles)) {
    return layers;
  }

  var textStyle = new _textStyle2['default']({
    fontFamily: fontFamily,
    fontSize: parseInt(fontSize, 10),
    lineHeight: lineHeight !== 'normal' ? parseInt(lineHeight, 10) : undefined,
    letterSpacing: letterSpacing !== 'normal' ? parseFloat(letterSpacing) : undefined,
    fontWeight: parseInt(fontWeight, 10),
    color: color,
    textTransform: textTransform,
    textDecoration: textDecorationLine,
    textAlign: display === 'flex' || display === 'inline-flex' ? justifyContent : textAlign,
    skipSystemFonts: options && options.skipSystemFonts
  });

  var rangeHelper = document.createRange();

  // Text
  Array.from(node.childNodes).filter(function (child) {
    return child.nodeType === 3 && child.nodeValue.trim().length > 0;
  }).forEach(function (textNode) {
    rangeHelper.selectNodeContents(textNode);
    var textRanges = Array.from(rangeHelper.getClientRects());
    var numberOfLines = textRanges.length;
    var textBCR = rangeHelper.getBoundingClientRect();
    var lineHeightInt = parseInt(lineHeight, 10);
    var textBCRHeight = textBCR.bottom - textBCR.top;
    var fixY = 0;

    // center text inside a box
    // TODO it's possible now in sketch - fix it!
    if (lineHeightInt && textBCRHeight !== lineHeightInt * numberOfLines) {
      fixY = (textBCRHeight - lineHeightInt * numberOfLines) / 2;
    }

    var textValue = (0, _text3.fixWhiteSpace)(textNode.nodeValue, whiteSpace);

    var text = new _text2['default']({
      x: textBCR.left,
      y: textBCR.top + fixY,
      width: textBCR.right - textBCR.left,
      height: textBCRHeight,
      text: textValue,
      style: textStyle,
      multiline: numberOfLines > 1
    });

    layers.push(text);
  });

  return layers;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function () {
  function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } }

  return get;
}();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rectangle = function (_Base) {
  _inherits(Rectangle, _Base);

  function Rectangle(_ref) {
    var width = _ref.width,
        height = _ref.height,
        _ref$cornerRadius = _ref.cornerRadius,
        cornerRadius = _ref$cornerRadius === undefined ? { topLeft: 0, bottomLeft: 0, topRight: 0, bottomRight: 0 } : _ref$cornerRadius;

    _classCallCheck(this, Rectangle);

    var _this = _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).call(this));

    _this._class = 'rectangle';
    _this._width = width;
    _this._height = height;
    _this._cornerRadius = cornerRadius;
    return _this;
  }

  _createClass(Rectangle, [{
    key: 'toJSON',
    value: function () {
      function toJSON() {
        var obj = _get(Rectangle.prototype.__proto__ || Object.getPrototypeOf(Rectangle.prototype), 'toJSON', this).call(this);

        obj.frame = {
          '_class': 'rect',
          'constrainProportions': false,
          'height': this._height,
          'width': this._width,
          'x': 0,
          'y': 0
        };

        obj.path = {
          '_class': 'path',
          'isClosed': true,
          'pointRadiusBehaviour': 1,
          'points': [{
            '_class': 'curvePoint',
            'cornerRadius': this._cornerRadius.topLeft,
            'curveFrom': '{0, 0}',
            'curveMode': 1,
            'curveTo': '{0, 0}',
            'hasCurveFrom': false,
            'hasCurveTo': false,
            'point': '{0, 0}'
          }, {
            '_class': 'curvePoint',
            'cornerRadius': this._cornerRadius.topRight,
            'curveFrom': '{1, 0}',
            'curveMode': 1,
            'curveTo': '{1, 0}',
            'hasCurveFrom': false,
            'hasCurveTo': false,
            'point': '{1, 0}'
          }, {
            '_class': 'curvePoint',
            'cornerRadius': this._cornerRadius.bottomRight,
            'curveFrom': '{1, 1}',
            'curveMode': 1,
            'curveTo': '{1, 1}',
            'hasCurveFrom': false,
            'hasCurveTo': false,
            'point': '{1, 1}'
          }, {
            '_class': 'curvePoint',
            'cornerRadius': this._cornerRadius.bottomLeft,
            'curveFrom': '{0, 1}',
            'curveMode': 1,
            'curveTo': '{0, 1}',
            'hasCurveFrom': false,
            'hasCurveTo': false,
            'point': '{0, 1}'
          }]
        };

        obj.hasConvertedToNewRoundCorners = true;
        obj.fixedRadius = 0;
        obj.edited = false;
        obj.booleanOperation = -1;

        return obj;
      }

      return toJSON;
    }()
  }]);

  return Rectangle;
}(_base2['default']);

exports['default'] = Rectangle;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_Base) {
  _inherits(SVG, _Base);

  function SVG(_ref) {
    var x = _ref.x,
        y = _ref.y,
        width = _ref.width,
        height = _ref.height,
        rawSVGString = _ref.rawSVGString;

    _classCallCheck(this, SVG);

    var _this = _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).call(this));

    _this._rawSVGString = rawSVGString;
    _this._width = width;
    _this._height = height;
    _this._x = x;
    _this._y = y;
    return _this;
  }

  _createClass(SVG, [{
    key: 'toJSON',
    value: function () {
      function toJSON() {
        // NOTE: this is a non-standard extension of the .sketch format
        return {
          _class: 'svg',
          rawSVGString: this._rawSVGString,
          width: this._width,
          height: this._height,
          x: this._x,
          y: this._y,
          resizingConstraint: this._resizingConstraint
        };
      }

      return toJSON;
    }()
  }]);

  return SVG;
}(_base2['default']);

exports['default'] = SVG;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function () {
  function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } }

  return get;
}();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShapeGroup = function (_Base) {
  _inherits(ShapeGroup, _Base);

  function ShapeGroup(_ref) {
    var x = _ref.x,
        y = _ref.y,
        width = _ref.width,
        height = _ref.height;

    _classCallCheck(this, ShapeGroup);

    var _this = _possibleConstructorReturn(this, (ShapeGroup.__proto__ || Object.getPrototypeOf(ShapeGroup)).call(this));

    _this._class = 'shapeGroup';
    _this._x = x;
    _this._y = y;
    _this._width = width;
    _this._height = height;
    return _this;
  }

  _createClass(ShapeGroup, [{
    key: 'toJSON',
    value: function () {
      function toJSON() {
        var obj = _get(ShapeGroup.prototype.__proto__ || Object.getPrototypeOf(ShapeGroup.prototype), 'toJSON', this).call(this);

        obj.frame = {
          '_class': 'rect',
          'constrainProportions': false,
          'height': this._height,
          'width': this._width,
          'x': this._x,
          'y': this._y
        };

        obj.hasClickThrough = false;
        obj.clippingMaskMode = 0;
        obj.hasClippingMask = false;
        obj.windingRule = 1;

        return obj;
      }

      return toJSON;
    }()
  }]);

  return ShapeGroup;
}(_base2['default']);

exports['default'] = ShapeGroup;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(1);

var _convertAngleToFromAndTo = __webpack_require__(18);

var _convertAngleToFromAndTo2 = _interopRequireDefault(_convertAngleToFromAndTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Style = function () {
  function Style() {
    _classCallCheck(this, Style);

    this._fills = [];
    this._borders = [];
    this._shadows = [];
    this._innerShadows = [];
    this._opacity = '1';
  }

  _createClass(Style, [{
    key: 'addColorFill',
    value: function () {
      function addColorFill(color, opacity) {
        this._fills.push((0, _utils.makeColorFill)(color, opacity));
      }

      return addColorFill;
    }()
  }, {
    key: 'addGradientFill',
    value: function () {
      function addGradientFill(_ref) {
        var angle = _ref.angle,
            stops = _ref.stops;

        var _convertAngleToFromAn = (0, _convertAngleToFromAndTo2['default'])(angle),
            from = _convertAngleToFromAn.from,
            to = _convertAngleToFromAn.to;

        this._fills.push({
          _class: 'fill',
          isEnabled: true,
          // Not sure why there is a color here
          color: {
            _class: 'color',
            alpha: 1,
            blue: 0.847,
            green: 0.847,
            red: 0.847
          },
          fillType: 1,
          gradient: {
            _class: 'gradient',
            elipseLength: 0,
            from: '{' + String(from.x) + ', ' + String(from.y),
            gradientType: 0,
            shouldSmoothenOpacity: false,
            stops: stops.map(function (stopColor, index) {
              return {
                _class: 'gradientStop',
                color: (0, _utils.makeColorFromCSS)(stopColor),
                position: index
              };
            }),
            to: '{' + String(to.x) + ', ' + String(to.y) + '}'
          },
          noiseIndex: 0,
          noiseIntensity: 0,
          patternFillType: 1,
          patternTileScale: 1
        });
      }

      return addGradientFill;
    }()
  }, {
    key: 'addImageFill',
    value: function () {
      function addImageFill(image) {
        var fill = (0, _utils.makeImageFill)(image);

        this._fills.push(fill);
      }

      return addImageFill;
    }()
  }, {
    key: 'addBorder',
    value: function () {
      function addBorder(_ref2) {
        var color = _ref2.color,
            thickness = _ref2.thickness;

        this._borders.push({
          _class: 'border',
          isEnabled: true,
          color: (0, _utils.makeColorFromCSS)(color),
          fillType: 0,
          position: 1,
          thickness: thickness
        });
      }

      return addBorder;
    }()
  }, {
    key: 'addShadow',
    value: function () {
      function addShadow(_ref3) {
        var _ref3$color = _ref3.color,
            color = _ref3$color === undefined ? '#000' : _ref3$color,
            _ref3$blur = _ref3.blur,
            blur = _ref3$blur === undefined ? 1 : _ref3$blur,
            _ref3$offsetX = _ref3.offsetX,
            offsetX = _ref3$offsetX === undefined ? 0 : _ref3$offsetX,
            _ref3$offsetY = _ref3.offsetY,
            offsetY = _ref3$offsetY === undefined ? 0 : _ref3$offsetY,
            _ref3$spread = _ref3.spread,
            spread = _ref3$spread === undefined ? 0 : _ref3$spread;

        this._shadows.push({
          _class: 'shadow',
          isEnabled: true,
          blurRadius: blur,
          color: (0, _utils.makeColorFromCSS)(color),
          contextSettings: {
            _class: 'graphicsContextSettings',
            blendMode: 0,
            opacity: 1
          },
          offsetX: offsetX,
          offsetY: offsetY,
          spread: spread
        });
      }

      return addShadow;
    }()
  }, {
    key: 'addInnerShadow',
    value: function () {
      function addInnerShadow(_ref4) {
        var _ref4$color = _ref4.color,
            color = _ref4$color === undefined ? '#000' : _ref4$color,
            _ref4$blur = _ref4.blur,
            blur = _ref4$blur === undefined ? 1 : _ref4$blur,
            _ref4$offsetX = _ref4.offsetX,
            offsetX = _ref4$offsetX === undefined ? 0 : _ref4$offsetX,
            _ref4$offsetY = _ref4.offsetY,
            offsetY = _ref4$offsetY === undefined ? 0 : _ref4$offsetY,
            _ref4$spread = _ref4.spread,
            spread = _ref4$spread === undefined ? 0 : _ref4$spread;

        this._innerShadows.push({
          _class: 'innerShadow',
          isEnabled: true,
          blurRadius: blur,
          color: (0, _utils.makeColorFromCSS)(color),
          contextSettings: {
            _class: 'graphicsContextSettings',
            blendMode: 0,
            opacity: 1
          },
          offsetX: offsetX,
          offsetY: offsetY,
          spread: spread
        });
      }

      return addInnerShadow;
    }()
  }, {
    key: 'addOpacity',
    value: function () {
      function addOpacity(opacity) {
        this._opacity = opacity;
      }

      return addOpacity;
    }()
  }, {
    key: 'toJSON',
    value: function () {
      function toJSON() {
        return {
          _class: 'style',
          fills: this._fills,
          borders: this._borders,
          shadows: this._shadows,
          innerShadows: this._innerShadows,
          endDecorationType: 0,
          miterLimit: 10,
          startDecorationType: 0,
          contextSettings: {
            _class: 'graphicsContextSettings',
            blendMode: 0,
            opacity: this._opacity
          }
        };
      }

      return toJSON;
    }()
  }]);

  return Style;
}();

exports['default'] = Style;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function () {
  function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } }

  return get;
}();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = function (_Base) {
  _inherits(Text, _Base);

  function Text(_ref) {
    var x = _ref.x,
        y = _ref.y,
        width = _ref.width,
        height = _ref.height,
        text = _ref.text,
        style = _ref.style,
        multiline = _ref.multiline;

    _classCallCheck(this, Text);

    var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this));

    _this._class = 'text';
    _this._x = x;
    _this._y = y;
    _this._width = width;
    _this._height = height;
    _this._text = text;
    _this._name = text;
    _this._style = style;
    _this._multiline = multiline;
    return _this;
  }

  _createClass(Text, [{
    key: 'toJSON',
    value: function () {
      function toJSON() {
        var obj = _get(Text.prototype.__proto__ || Object.getPrototypeOf(Text.prototype), 'toJSON', this).call(this);

        obj.frame = {
          '_class': 'rect',
          'constrainProportions': false,
          'height': this._height,
          'width': this._width,
          'x': this._x,
          'y': this._y
        };

        obj.text = this._text;
        obj.style = this._style.toJSON();

        obj.resizingConstraint = (0, _utils.calculateResizingConstraintValue)(_utils.RESIZING_CONSTRAINTS.HEIGHT);
        obj.automaticallyDrawOnUnderlyingPath = false;
        obj.dontSynchroniseWithSymbol = false;
        obj.glyphBounds = '';
        obj.heightIsClipped = false;
        obj.lineSpacingBehaviour = 2;
        // 1 - width is set to Fixed
        // 0 - width is set to Auto - this helps us avoid issues with browser setting too small width causing line to break
        obj.textBehaviour = this._multiline ? 1 : 0;
        return obj;
      }

      return toJSON;
    }()
  }]);

  return Text;
}(_base2['default']);

exports['default'] = Text;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTextVisible = isTextVisible;
exports.isNodeVisible = isNodeVisible;
function isTextVisible(_ref) {
  var textIndent = _ref.textIndent,
      overflowX = _ref.overflowX,
      overflowY = _ref.overflowY;

  // NOTE overflow:hidden is not needed if text-indent is huge, but how to define 'huge'?
  if (parseFloat(textIndent) < 0 && overflowX === 'hidden' && overflowY === 'hidden') {
    return false;
  }

  return true;
}

function isNodeVisible(node) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node.getBoundingClientRect(),
      width = _ref2.width,
      height = _ref2.height;

  var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : getComputedStyle(node),
      position = _ref3.position,
      overflowX = _ref3.overflowX,
      overflowY = _ref3.overflowY,
      opacity = _ref3.opacity,
      visibility = _ref3.visibility,
      display = _ref3.display,
      clip = _ref3.clip;

  // skip node when display is set to none for itself or an ancestor
  // helps us catch things such as <noscript>
  if (node.tagName !== 'BODY' && node.offsetParent === null && position !== 'fixed') {
    return false;
  }

  if ((width === 0 || height === 0) && overflowX === 'hidden' && overflowY === 'hidden') {
    return false;
  }

  if (display === 'none' || visibility === 'hidden' || visibility === 'collapse' || parseFloat(opacity) < 0.1) {
    return false;
  }

  if (clip === 'rect(0px, 0px, 0px, 0px)' && position === 'absolute') {
    return false;
  }

  // node is detached from the DOM
  if (!document.contains(node)) {
    return false;
  }

  var parent = node.parentElement;

  if (parent && parent.nodeName !== 'HTML' && !isNodeVisible(parent)) {
    return false;
  }

  return true;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = nodeTreeToSketchGroup;

var _group = __webpack_require__(10);

var _group2 = _interopRequireDefault(_group);

var _style = __webpack_require__(6);

var _style2 = _interopRequireDefault(_style);

var _nodeToSketchLayers = __webpack_require__(2);

var _nodeToSketchLayers2 = _interopRequireDefault(_nodeToSketchLayers);

var _visibility = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function nodeTreeToSketchGroup(node, options) {
  var bcr = node.getBoundingClientRect();
  var left = bcr.left,
      top = bcr.top;

  var width = bcr.right - bcr.left;
  var height = bcr.bottom - bcr.top;

  // Collect layers for the node level itself
  var layers = (0, _nodeToSketchLayers2['default'])(node, Object.assign({}, options, { layerOpacity: false })) || [];

  if (node.nodeName !== 'svg') {
    // Recursively collect child groups for child nodes
    Array.from(node.children).forEach(function (childNode) {
      if ((0, _visibility.isNodeVisible)(childNode)) {
        layers.push(nodeTreeToSketchGroup(childNode, options));
      }
    });
  }

  // Now build a group for all these children

  var styles = getComputedStyle(node);
  var opacity = styles.opacity;


  var group = new _group2['default']({ x: left, y: top, width: width, height: height });
  var groupStyle = new _style2['default']();

  groupStyle.addOpacity(opacity);
  group.setStyle(groupStyle);

  layers.forEach(function (layer) {
    // Layer positions are relative, and as we put the node position to the group,
    // we have to shift back the layers by that distance.
    layer._x -= left;
    layer._y -= top;

    group.addLayer(layer);
  });

  // Set the group name to the node's name, unless there is a name provider in the options

  if (options && options.getGroupName) {
    group.setName(options.getGroupName(node));
  } else {
    group.setName('(' + String(node.nodeName.toLowerCase()) + ')');
  }

  return group;
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function () {
  function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } }

  return get;
}();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Group = function (_Base) {
  _inherits(Group, _Base);

  function Group(_ref) {
    var x = _ref.x,
        y = _ref.y,
        width = _ref.width,
        height = _ref.height;

    _classCallCheck(this, Group);

    var _this = _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this));

    _this._class = 'group';
    _this._x = x;
    _this._y = y;
    _this._width = width;
    _this._height = height;
    return _this;
  }

  _createClass(Group, [{
    key: 'toJSON',
    value: function () {
      function toJSON() {
        var obj = _get(Group.prototype.__proto__ || Object.getPrototypeOf(Group.prototype), 'toJSON', this).call(this);

        obj.frame = {
          '_class': 'rect',
          'constrainProportions': false,
          'height': this._height,
          'width': this._width,
          'x': this._x,
          'y': this._y
        };

        obj.hasClickThrough = false;
        obj.clippingMaskMode = 0;
        obj.hasClippingMask = false;
        obj.windingRule = 1;

        return obj;
      }

      return toJSON;
    }()
  }]);

  return Group;
}(_base2['default']);

exports['default'] = Group;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function () {
  function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } }

  return get;
}();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Artboard = function (_Base) {
  _inherits(Artboard, _Base);

  function Artboard(_ref) {
    var x = _ref.x,
        y = _ref.y,
        width = _ref.width,
        height = _ref.height;

    _classCallCheck(this, Artboard);

    var _this = _possibleConstructorReturn(this, (Artboard.__proto__ || Object.getPrototypeOf(Artboard)).call(this));

    _this._class = 'artboard';
    _this._x = x;
    _this._y = y;
    _this._width = width;
    _this._height = height;
    return _this;
  }

  _createClass(Artboard, [{
    key: 'toJSON',
    value: function () {
      function toJSON() {
        var obj = _get(Artboard.prototype.__proto__ || Object.getPrototypeOf(Artboard.prototype), 'toJSON', this).call(this);

        obj.frame = {
          '_class': 'rect',
          'constrainProportions': false,
          'height': this._height,
          'width': this._width,
          'x': this._x,
          'y': this._y
        };

        obj.style = {
          '_class': 'style',
          'endDecorationType': 0,
          'miterLimit': 10,
          'startDecorationType': 0
        };

        obj.horizontalRulerData = {
          '_class': 'rulerData',
          'base': 0,
          'guides': []
        };
        obj.verticalRulerData = {
          '_class': 'rulerData',
          'base': 0,
          'guides': []
        };

        obj.hasClickThrough = true;
        obj.includeInCloudUpload = true;

        return obj;
      }

      return toJSON;
    }()
  }]);

  return Artboard;
}(_base2['default']);

exports['default'] = Artboard;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function () {
  function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } }

  return get;
}();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_Base) {
  _inherits(Page, _Base);

  function Page(_ref) {
    var width = _ref.width,
        height = _ref.height;

    _classCallCheck(this, Page);

    var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this));

    _this._class = 'page';
    _this._width = width;
    _this._height = height;
    return _this;
  }

  _createClass(Page, [{
    key: 'toJSON',
    value: function () {
      function toJSON() {
        var obj = _get(Page.prototype.__proto__ || Object.getPrototypeOf(Page.prototype), 'toJSON', this).call(this);

        obj.frame = {
          '_class': 'rect',
          'constrainProportions': false,
          'height': this._height,
          'width': this._width,
          'x': 0,
          'y': 0
        };

        obj.style = {
          '_class': 'style',
          'endDecorationType': 0,
          'miterLimit': 10,
          'startDecorationType': 0
        };

        obj.horizontalRulerData = {
          '_class': 'rulerData',
          'base': 0,
          'guides': []
        };
        obj.verticalRulerData = {
          '_class': 'rulerData',
          'base': 0,
          'guides': []
        };

        obj.hasClickThrough = true;
        obj.includeInCloudUpload = true;

        return obj;
      }

      return toJSON;
    }()
  }]);

  return Page;
}(_base2['default']);

exports['default'] = Page;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function () {
  function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } }

  return get;
}();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SymbolInstance = function (_Base) {
  _inherits(SymbolInstance, _Base);

  function SymbolInstance(_ref) {
    var x = _ref.x,
        y = _ref.y,
        width = _ref.width,
        height = _ref.height,
        symbolID = _ref.symbolID;

    _classCallCheck(this, SymbolInstance);

    var _this = _possibleConstructorReturn(this, (SymbolInstance.__proto__ || Object.getPrototypeOf(SymbolInstance)).call(this));

    _this._class = 'symbolInstance';
    _this._x = x;
    _this._y = y;
    _this._width = width;
    _this._height = height;
    _this._symbolID = symbolID;
    return _this;
  }

  _createClass(SymbolInstance, [{
    key: 'toJSON',
    value: function () {
      function toJSON() {
        var obj = _get(SymbolInstance.prototype.__proto__ || Object.getPrototypeOf(SymbolInstance.prototype), 'toJSON', this).call(this);

        obj.frame = {
          '_class': 'rect',
          'constrainProportions': false,
          'width': this._width,
          'height': this._height,
          'x': this._x,
          'y': this._y
        };

        obj.style = {
          '_class': 'style',
          'endDecorationType': 0,
          'miterLimit': 10,
          'startDecorationType': 0
        };

        obj.symbolID = this._symbolID;

        return obj;
      }

      return toJSON;
    }()
  }]);

  return SymbolInstance;
}(_base2['default']);

exports['default'] = SymbolInstance;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__brainly_html_sketchapp__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__brainly_html_sketchapp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__brainly_html_sketchapp__);


const getNodeName = node =>
  node.id || node.className || node.nodeName.toLowerCase();

const getSymbol = ({
  name = "symbol",
  x = 0,
  y = 0,
  querySelector = "#root"
} = {}) => {
  let nodes;

  if (querySelector === "#root") {
    nodes = document.querySelector(querySelector).firstChild;
  } else {
    nodes = document.querySelector(querySelector);
  }
  
  // START HACK FOR PSEUDOELEMENTS
  const css = '.before-reset::before, .after-reset::after { display: none !important; }';
  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');

  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));
  head.appendChild(style);

  const allElements = document.getElementsByTagName('span');

  for (let i = 0; i < allElements.length; i++) {
    const elementBeforeStyles = window.getComputedStyle(allElements[i], ':before');
    const elementAfterStyles = window.getComputedStyle(allElements[i], ':after');
    const elementBeforeContent = elementBeforeStyles.content;
    const elementAfterContent = elementAfterStyles.content;

    if (elementBeforeContent && elementBeforeContent != "none") {
      const virtualBefore = document.createElement('span');

      virtualBefore.setAttribute('style', elementBeforeStyles.cssText);
      virtualBefore.innerHTML = elementBeforeStyles.content.split('"').join('');
      allElements[i].className += ' before-reset';
      allElements[i].prepend(virtualBefore);
    }

    if (elementAfterContent && elementAfterContent != "none") {
      const virtualAfter = document.createElement('span');

      virtualAfter.setAttribute('style', elementAfterStyles.cssText);
      virtualAfter.innerHTML = elementAfterStyles.content.split('"').join('');
      allElements[i].className += ' after-reset';
      allElements[i].appendChild(virtualAfter);
    }
  }
  // END HACK FOR PSEUDOELEMENTS

  const layer = Object(__WEBPACK_IMPORTED_MODULE_0__brainly_html_sketchapp__["nodeTreeToSketchGroup"])(nodes, {
    getGroupName: getNodeName,
    getRectangleName: getNodeName
  });

  const symbol = new __WEBPACK_IMPORTED_MODULE_0__brainly_html_sketchapp__["SymbolMaster"]({ x, y });

  symbol.setName(name);
  symbol.addLayer(layer);

  return symbol.toJSON();
};
/* harmony export (immutable) */ __webpack_exports__["getSymbol"] = getSymbol;


const getPage = ({ title, width, height }) => {
  const page = new __WEBPACK_IMPORTED_MODULE_0__brainly_html_sketchapp__["Page"]({
    width,
    height
  });

  page.setName(title);

  return page.toJSON();
};
/* harmony export (immutable) */ __webpack_exports__["getPage"] = getPage;



/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nodeToSketchLayers = __webpack_require__(2);

Object.defineProperty(exports, 'nodeToSketchLayers', {
  enumerable: true,
  get: function () {
    function get() {
      return _interopRequireDefault(_nodeToSketchLayers)['default'];
    }

    return get;
  }()
});

var _nodeTreeToSketchGroup = __webpack_require__(9);

Object.defineProperty(exports, 'nodeTreeToSketchGroup', {
  enumerable: true,
  get: function () {
    function get() {
      return _interopRequireDefault(_nodeTreeToSketchGroup)['default'];
    }

    return get;
  }()
});

var _nodeTreeToSketchPage = __webpack_require__(25);

Object.defineProperty(exports, 'nodeTreeToSketchPage', {
  enumerable: true,
  get: function () {
    function get() {
      return _interopRequireDefault(_nodeTreeToSketchPage)['default'];
    }

    return get;
  }()
});

var _document = __webpack_require__(26);

Object.defineProperty(exports, 'Document', {
  enumerable: true,
  get: function () {
    function get() {
      return _interopRequireDefault(_document)['default'];
    }

    return get;
  }()
});

var _page = __webpack_require__(12);

Object.defineProperty(exports, 'Page', {
  enumerable: true,
  get: function () {
    function get() {
      return _interopRequireDefault(_page)['default'];
    }

    return get;
  }()
});

var _group = __webpack_require__(10);

Object.defineProperty(exports, 'Group', {
  enumerable: true,
  get: function () {
    function get() {
      return _interopRequireDefault(_group)['default'];
    }

    return get;
  }()
});

var _rectangle = __webpack_require__(3);

Object.defineProperty(exports, 'Rectangle', {
  enumerable: true,
  get: function () {
    function get() {
      return _interopRequireDefault(_rectangle)['default'];
    }

    return get;
  }()
});

var _text = __webpack_require__(7);

Object.defineProperty(exports, 'Text', {
  enumerable: true,
  get: function () {
    function get() {
      return _interopRequireDefault(_text)['default'];
    }

    return get;
  }()
});

var _shapeGroup = __webpack_require__(5);

Object.defineProperty(exports, 'ShapeGroup', {
  enumerable: true,
  get: function () {
    function get() {
      return _interopRequireDefault(_shapeGroup)['default'];
    }

    return get;
  }()
});

var _svg = __webpack_require__(4);

Object.defineProperty(exports, 'SVG', {
  enumerable: true,
  get: function () {
    function get() {
      return _interopRequireDefault(_svg)['default'];
    }

    return get;
  }()
});

var _artboard = __webpack_require__(11);

Object.defineProperty(exports, 'Artboard', {
  enumerable: true,
  get: function () {
    function get() {
      return _interopRequireDefault(_artboard)['default'];
    }

    return get;
  }()
});

var _symbolMaster = __webpack_require__(27);

Object.defineProperty(exports, 'SymbolMaster', {
  enumerable: true,
  get: function () {
    function get() {
      return _interopRequireDefault(_symbolMaster)['default'];
    }

    return get;
  }()
});

var _symbolInstance = __webpack_require__(13);

Object.defineProperty(exports, 'SymbolInstance', {
  enumerable: true,
  get: function () {
    function get() {
      return _interopRequireDefault(_symbolInstance)['default'];
    }

    return get;
  }()
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/***/ }),
/* 16 */
/***/ (function(module, exports) {

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

function normalizeColor(color) {
  var match;

  if (typeof color === 'number') {
    if (color >>> 0 === color && color >= 0 && color <= 0xffffffff) {
      return color;
    }
    return null;
  }

  // Ordered based on occurrences on Facebook codebase
  if ((match = matchers.hex6.exec(color))) {
    return parseInt(match[1] + 'ff', 16) >>> 0;
  }

  if (names.hasOwnProperty(color)) {
    return names[color];
  }

  if ((match = matchers.rgb.exec(color))) {
    return (
        parse255(match[1]) << 24 | // r
        parse255(match[2]) << 16 | // g
        parse255(match[3]) << 8 | // b
        0x000000ff // a
      ) >>> 0;
  }

  if ((match = matchers.rgba.exec(color))) {
    return (
        parse255(match[1]) << 24 | // r
        parse255(match[2]) << 16 | // g
        parse255(match[3]) << 8 | // b
        parse1(match[4]) // a
      ) >>> 0;
  }

  if ((match = matchers.hex3.exec(color))) {
    return parseInt(
        match[1] + match[1] + // r
        match[2] + match[2] + // g
        match[3] + match[3] + // b
        'ff', // a
        16
      ) >>> 0;
  }

  // https://drafts.csswg.org/css-color-4/#hex-notation
  if ((match = matchers.hex8.exec(color))) {
    return parseInt(match[1], 16) >>> 0;
  }

  if ((match = matchers.hex4.exec(color))) {
    return parseInt(
        match[1] + match[1] + // r
        match[2] + match[2] + // g
        match[3] + match[3] + // b
        match[4] + match[4], // a
        16
      ) >>> 0;
  }

  if ((match = matchers.hsl.exec(color))) {
    return (
        hslToRgb(
          parse360(match[1]), // h
          parsePercentage(match[2]), // s
          parsePercentage(match[3]) // l
        ) |
        0x000000ff // a
      ) >>> 0;
  }

  if ((match = matchers.hsla.exec(color))) {
    return (
        hslToRgb(
          parse360(match[1]), // h
          parsePercentage(match[2]), // s
          parsePercentage(match[3]) // l
        ) |
        parse1(match[4]) // a
      ) >>> 0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}

function hslToRgb(h, s, l) {
  var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  var p = 2 * l - q;
  var r = hue2rgb(p, q, h + 1 / 3);
  var g = hue2rgb(p, q, h);
  var b = hue2rgb(p, q, h - 1 / 3);

  return (
    Math.round(r * 255) << 24 |
    Math.round(g * 255) << 16 |
    Math.round(b * 255) << 8
  );
}

// var INTEGER = '[-+]?\\d+';
var NUMBER = '[-+]?\\d*\\.?\\d+';
var PERCENTAGE = NUMBER + '%';

function toArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0);
}

function call() {
  return '\\(\\s*(' + toArray(arguments).join(')\\s*,\\s*(') + ')\\s*\\)';
}

var matchers = {
  rgb: new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER)),
  rgba: new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER)),
  hsl: new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE)),
  hsla: new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER)),
  hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#([0-9a-fA-F]{6})$/,
  hex8: /^#([0-9a-fA-F]{8})$/,
};

function parse255(str) {
  var int = parseInt(str, 10);
  if (int < 0) {
    return 0;
  }
  if (int > 255) {
    return 255;
  }
  return int;
}

function parse360(str) {
  var int = parseFloat(str);
  return (((int % 360) + 360) % 360) / 360;
}

function parse1(str) {
  var num = parseFloat(str);
  if (num < 0) {
    return 0;
  }
  if (num > 1) {
    return 255;
  }
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  var int = parseFloat(str, 10);
  if (int < 0) {
    return 0;
  }
  if (int > 100) {
    return 1;
  }
  return int / 100;
}

var names = {
  transparent: 0x00000000,

  // http://www.w3.org/TR/css3-color/#svg-color
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff,
};

function rgba(colorInt) {
  var r = Math.round(((colorInt & 0xff000000) >>> 24));
  var g = Math.round(((colorInt & 0x00ff0000) >>> 16));
  var b = Math.round(((colorInt & 0x0000ff00) >>> 8));
  var a = ((colorInt & 0x000000ff) >>> 0) / 255;
  return {
    r: r,
    g: g,
    b: b,
    a: a,
  };
};

normalizeColor.rgba = rgba;

module.exports = normalizeColor;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var FillType = exports.FillType = {
    Solid: 0,
    Gradient: 1,
    Pattern: 4,
    Noise: 5
};

var GradientType = exports.GradientType = {
    Linear: 0,
    Radial: 1,
    Circular: 2
};

var PatternFillType = exports.PatternFillType = {
    Tile: 0,
    Fill: 1,
    Stretch: 2,
    Fit: 3
};

var NoiseFillType = exports.NoiseFillType = {
    Original: 0,
    Black: 1,
    White: 2,
    Color: 3
};

var BorderLineCapsStyle = exports.BorderLineCapsStyle = {
    Butt: 0,
    Round: 1,
    Square: 2
};

var BorderLineJoinStyle = exports.BorderLineJoinStyle = {
    Miter: 0,
    Round: 1,
    Bevel: 2
};

var LineDecorationType = exports.LineDecorationType = {
    None: 0,
    OpenedArrow: 1,
    ClosedArrow: 2,
    Bar: 3
};

var BlurType = exports.BlurType = {
    GaussianBlur: 0,
    MotionBlur: 1,
    ZoomBlur: 2,
    BackgroundBlur: 3
};

var BorderPosition = exports.BorderPosition = {
    Center: 0,
    Inside: 1,
    Outside: 2
};

var MaskMode = exports.MaskMode = {
    Outline: 0,
    Alpha: 1
};

var BooleanOperation = exports.BooleanOperation = {
    None: -1,
    Union: 0,
    Subtract: 1,
    Intersect: 2,
    Difference: 3
};

var ExportOptionsFormat = exports.ExportOptionsFormat = {
    PNG: 'png',
    JPG: 'jpg',
    TIFF: 'tiff',
    PDF: 'pdf',
    EPS: 'eps',
    SVG: 'svg'
};

var BlendingMode = exports.BlendingMode = {
    Normal: 0,
    Darken: 1,
    Multiply: 2,
    ColorBurn: 3,
    Lighten: 4,
    Screen: 5,
    ColorDodge: 6,
    Overlay: 7,
    SoftLight: 8,
    HardLight: 9,
    Difference: 10,
    Exclusion: 11,
    Hue: 12,
    Saturation: 13,
    Color: 14,
    Luminosity: 15
};

var TextAlignment = exports.TextAlignment = {
    Left: 0,
    Right: 1,
    Center: 2,
    Justified: 3
};

var TextBehaviour = exports.TextBehaviour = {
    Auto: 0,
    Fixed: 1
};

var CurvePointMode = exports.CurvePointMode = {
    Straight: 1,
    Mirrored: 2,
    Disconnected: 4,
    Asymmetric: 3
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = convertAngleToFromAndTo;
// Keep this pure for easy testing in the future.
function convertAngleToFromAndTo(angle) {
  // default 180deg
  var from = { x: 0.5, y: 0 };
  var to = { x: 0.5, y: 1 };

  // Learn math or find someone smarter to figure this out correctly
  switch (angle) {
    case 'to top':
    case '360deg':
    case '0deg':
      from.y = 1;
      to.y = 0;
      break;
    case 'to right':
    case '90deg':
      from.x = 0;
      from.y = 0.5;
      to.x = 1;
      to.y = 0.5;
      break;
    case 'to left':
    case '270deg':
      from.x = 1;
      from.y = 0.5;
      to.x = 0;
      to.y = 0.5;
      break;
    case 'to bottom':
    case '180deg':
    default:
      break;
  }

  return {
    from: from,
    to: to
  };
}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Some websites or component libraries use font-family lists starting with OS-specific fonts.
// If the option 'skipSystemFonts' is enabled, we skip those fonts to choose a font
// Sketch is capable of.

var SYSTEM_FONTS = [
// Apple
'-apple-system', 'BlinkMacSystemFont',

// Microsoft
'Segoe UI',

// Android
'Roboto'];

// INPUT: -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif
// OUTPUT: Helvetica Neue
function getFirstFont(fonts, skipSystemFonts) {
  var regularFont = undefined;
  var systemFont = undefined;

  fonts.split(',').forEach(function (font) {
    font = font.trim().replace(/^["']+|["']+$/g, '');
    if (font === '') {
      return;
    }

    // See above for a note on OS-specific fonts
    if (!regularFont && (!skipSystemFonts || SYSTEM_FONTS.indexOf(font) < 0)) {
      regularFont = font;
    }
    if (!systemFont) {
      systemFont = font;
    }
  });

  if (regularFont) {
    return regularFont;
  }

  if (systemFont) {
    return systemFont;
  }

  return '-apple-system';
}

var TextStyle = function () {
  function TextStyle(_ref) {
    var color = _ref.color,
        fontSize = _ref.fontSize,
        fontFamily = _ref.fontFamily,
        fontWeight = _ref.fontWeight,
        lineHeight = _ref.lineHeight,
        letterSpacing = _ref.letterSpacing,
        textTransform = _ref.textTransform,
        textDecoration = _ref.textDecoration,
        textAlign = _ref.textAlign,
        skipSystemFonts = _ref.skipSystemFonts;

    _classCallCheck(this, TextStyle);

    this._color = color;
    this._fontSize = fontSize;
    this._fontFamily = getFirstFont(fontFamily, skipSystemFonts);
    this._lineHeight = lineHeight;
    this._letterSpacing = letterSpacing;
    this._fontWeight = fontWeight;
    this._textTransform = textTransform;
    this._textDecoration = textDecoration;
    this._textAlign = textAlign;
  }

  _createClass(TextStyle, [{
    key: 'toJSON',
    value: function () {
      function toJSON() {
        return {
          'color': this._color,
          'fontSize': this._fontSize,
          'fontFamily': this._fontFamily,
          'fontWeight': this._fontWeight,
          'lineHeight': this._lineHeight,
          'letterSpacing': this._letterSpacing,
          'textTransform': this._textTransform,
          'textDecoration': this._textDecoration,
          'textAlign': this._textAlign
        };
      }

      return toJSON;
    }()
  }]);

  return TextStyle;
}();

exports['default'] = TextStyle;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = createXPathFromElement;
//https://stackoverflow.com/a/5178132
function createXPathFromElement(elm) {
  var allNodes = document.getElementsByTagName('*');
  var segs = void 0;

  for (segs = []; elm && elm.nodeType === 1; elm = elm.parentNode) {
    if (elm.hasAttribute('id')) {
      var uniqueIdCount = 0;

      for (var n = 0; n < allNodes.length; n++) {
        if (allNodes[n].hasAttribute('id') && allNodes[n].id === elm.id) {
          uniqueIdCount++;
        }
        if (uniqueIdCount > 1) {
          break;
        }
      }
      if (uniqueIdCount === 1) {
        segs.unshift('id("' + elm.getAttribute('id') + '")');
        return segs.join('/');
      } else {
        segs.unshift(elm.localName.toLowerCase() + '[@id="' + elm.getAttribute('id') + '"]');
      }
    } else if (elm.hasAttribute('class')) {
      segs.unshift(elm.localName.toLowerCase() + '[@class="' + elm.getAttribute('class') + '"]');
    } else {
      var i = 1;

      for (var sib = elm.previousSibling; sib; sib = sib.previousSibling) {
        if (sib.localName === elm.localName) {
          i++;
        }
      }
      segs.unshift(elm.localName.toLowerCase() + '[' + i + ']');
    }
  }
  return segs.length ? '/' + segs.join('/') : null;
}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Parses the background-image. The structure is as follows:
// (Supports images and gradients)
// ---
// <background-image> = <bg-image> [ , <bg-image> ]*
// <bg-image> = <image> | none
// <image> = <url> | <image-list> | <element-reference> | <image-combination> | <gradient>
// ---
// Source: https://www.w3.org/TR/css-backgrounds-3/#the-background-image
// ---
// These functions should be pure to make it easy
// to write test cases in the future.
var parseBackgroundImage = function parseBackgroundImage(value) {
  if (value === 'none') {
    return;
  }

  var urlMatches = value.match(/^url\("(.+)"\)$/i);
  var linearGradientMatches = value.match(/^linear-gradient\((.+)\)$/i);

  if (urlMatches && urlMatches.length === 2) {
    // Image
    return {
      type: 'Image',
      value: urlMatches[1]
    };
  } else if (linearGradientMatches && linearGradientMatches.length === 2) {
    // Linear gradient
    var linearGradientConfig = parseLinearGradient(linearGradientMatches[1]);

    if (linearGradientConfig) {
      return {
        type: 'LinearGradient',
        value: linearGradientConfig
      };
    }
  }
};

// Parser for a linear gradient:
// ---
// <linear-gradient> = linear-gradient(
//   [ [ <angle> | to <side-or-corner> ] ,]?
//   <color-stop>[, <color-stop>]+
// )
//
// <side-or-corner> = [left | right] || [top | bottom]
// ---
// Source: https://www.w3.org/TR/css3-images/#linear-gradients
// ---
// Example: "to top, rgba(67, 90, 111, 0.04), white"
var parseLinearGradient = function parseLinearGradient(value) {
  var parts = [];
  var currentPart = [];
  var i = 0;
  var skipComma = false;

  // There can be commas in colors, carefully break apart the value
  while (i < value.length) {
    var char = value.substr(i, 1);

    if (char === '(') {
      skipComma = true;
    } else if (char === ')') {
      skipComma = false;
    }

    if (char === ',' && !skipComma) {
      parts.push(currentPart.join('').trim());
      currentPart = [];
    } else {
      currentPart.push(char);
    }

    if (i === value.length - 1) {
      parts.push(currentPart.join('').trim());
    }
    i++;
  }

  if (parts.length === 2) {
    // Assume 2 color stops
    return {
      angle: '180deg',
      stops: [parts[0], parts[1]]
    };
  } else if (parts.length > 2) {
    // angle + n stops
    var angle = parts[0],
        stops = parts.slice(1);


    return {
      angle: angle,
      stops: stops
    };
  }

  // Syntax is wrong
  return null;
};

exports.parseBackgroundImage = parseBackgroundImage;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSVGString = getSVGString;
// based on https://www.w3.org/TR/SVG2/styling.html and defaults taken from Chrome
var SVG_STYLE_PROPERTIES = [
//name, default value
['cx', '0px'], ['cy', '0px'], ['height', 'auto'], ['width', 'auto'], ['x', '0px'], ['y', '0px'], ['r', '0px'], ['rx', 'auto'], ['ry', 'auto'], ['d', 'none'], ['fill', 'rgb(0, 0, 0)'], ['transform', 'none'], ['alignment-baseline', 'auto'], ['baseline-shift', '0px'], ['clip', 'auto'], ['clip-path', 'none'], ['clip-rule', 'nonzero'], ['color', 'rgb(0, 0, 0)'], ['color-interpolation', 'sRGB'], ['color-interpolation-filters', 'linearRGB'], ['color-rendering', 'auto'], ['cursor', 'auto'], ['direction', 'ltr'], ['display', 'inline'], ['dominant-baseline', 'auto'], ['fill-opacity', '1'], ['fill-rule', 'nonzero'], ['filter', 'none'], ['flood-color', 'rgb(0, 0, 0)'], ['flood-opacity', '1'], ['font-family', 'Times'], ['font-size', '16px'], ['font-size-adjust', 'none'], ['font-stretch', '100%'], ['font-style', 'normal'], ['font-variant', 'normal'], ['font-weight', '400'], ['glyph-orientation-horizontal', undefined], ['glyph-orientation-vertical', undefined], ['image-rendering', 'auto'], ['letter-spacing', 'normal'], ['lighting-color', 'rgb(255, 255, 255)'], ['marker-end', 'none'], ['marker-mid', 'none'], ['marker-start', 'none'], ['mask', 'none'], ['opacity', '1'], ['overflow', 'visible'], ['pointer-events', 'auto'], ['shape-rendering', 'auto'], ['solid-color', undefined], ['solid-opacity', undefined], ['stop-color', 'rgb(0, 0, 0)'], ['stop-opacity', '1'], ['stroke', 'none'], ['stroke-dasharray', 'none'], ['stroke-dashoffset', '0px'], ['stroke-linecap', 'butt'], ['stroke-linejoin', 'miter'], ['stroke-miterlimit', '4'], ['stroke-opacity', '1'], ['stroke-width', '1px'], ['text-anchor', 'start'], ['text-decoration', 'none solid rgb(0, 0, 0)'], ['text-overflow', 'clip'], ['text-rendering', 'auto'], ['unicode-bidi', 'normal'], ['vector-effect', 'none'], ['visibility', 'visible'], ['white-space', 'normal'], ['word-spacing', '0px'], ['writing-mode', 'horizontal-tb']];

function inlineStyles(node) {
  var styles = getComputedStyle(node);

  SVG_STYLE_PROPERTIES.forEach(function (prop) {
    var propName = prop[0];
    var propDefaultValue = prop[1];
    var propCurrentValue = styles[propName];
    var propAttributeValue = node.getAttribute(propName);

    if (propCurrentValue !== propDefaultValue && propCurrentValue !== propAttributeValue) {
      node.style[propName] = propCurrentValue;
    }
  });
}

function getUseReplacement(node) {
  var href = node.href.baseVal;
  // TODO this will only work for internal references
  var refNode = null;
  var resultNode = null;

  try {
    refNode = document.querySelector(href);
  } catch (e) {
    // ignore
  }

  if (refNode) {
    if (refNode instanceof SVGSymbolElement) {
      resultNode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      Array.from(refNode.attributes).forEach(function (attr) {
        return resultNode.setAttribute(attr.name, attr.value);
      });
      Array.from(refNode.cloneNode(true).children).forEach(function (child) {
        return resultNode.appendChild(child);
      });
    } else {
      resultNode = refNode.cloneNode(true);
    }
  }

  return resultNode;
}

// NOTE: this code modifies the original node by inlining all styles
// this is not ideal and probably fixable
function getSVGString(svgNode) {
  var queue = Array.from(svgNode.children);

  while (queue.length) {
    var node = queue.pop();

    if (!(node instanceof SVGElement) || node instanceof SVGDefsElement || node instanceof SVGTitleElement) {
      continue;
    }

    if (node instanceof SVGUseElement) {
      var replacement = getUseReplacement(node);

      if (replacement) {
        node.parentNode.replaceChild(replacement, node);
        queue.push(replacement);
      }
      continue;
    }

    inlineStyles(node);

    Array.from(node.children).forEach(function (child) {
      return queue.push(child);
    });
  }

  return svgNode.outerHTML;
}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGroupBCR = getGroupBCR;
// TODO: should probably also take into account children of each node
function getGroupBCR(nodes) {
  var groupBCR = nodes.reduce(function (result, node) {
    var bcr = node.getBoundingClientRect();
    var left = bcr.left,
        top = bcr.top,
        right = bcr.right,
        bottom = bcr.bottom;

    var width = bcr.right - bcr.left;
    var height = bcr.bottom - bcr.top;

    if (width === 0 && height === 0) {
      return result;
    }

    if (!result) {
      return { left: left, top: top, right: right, bottom: bottom };
    }

    if (left < result.left) {
      result.left = left;
    }

    if (top < result.top) {
      result.top = top;
    }

    if (right > result.right) {
      result.right = right;
    }

    if (bottom > result.bottom) {
      result.bottom = bottom;
    }

    return result;
  }, null);

  if (groupBCR === null) {
    return {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      width: 0,
      height: 0
    };
  }

  return {
    left: groupBCR.left,
    top: groupBCR.top,
    right: groupBCR.right,
    bottom: groupBCR.bottom,
    width: groupBCR.right - groupBCR.left,
    height: groupBCR.bottom - groupBCR.top
  };
}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fixWhiteSpace = fixWhiteSpace;
function fixWhiteSpace(text, whiteSpace) {
  switch (whiteSpace) {
    case 'normal':
    case 'nowrap':
      return text.trim().replace(/\n/g, ' ') // replace newline characters with space
      .replace(/\s+/g, ' '); // collapse whitespace
    case 'pre-line':
      return text.replace(/(^[^\S\n]+)|([^\S\n]+$)/g, '') // trim but leave \n
      .replace(/[^\S\n]+/g, ' ') // collapse whitespace (except \n)
      .replace(/[^\S\n]?\n[^\S\n]?/g, '\n'); // remove whitespace before & after \n
    default:
    // pre, pre-wrap
  }

  return text;
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = nodeTreeToSketchPage;

var _artboard = __webpack_require__(11);

var _artboard2 = _interopRequireDefault(_artboard);

var _page = __webpack_require__(12);

var _page2 = _interopRequireDefault(_page);

var _nodeTreeToSketchGroup = __webpack_require__(9);

var _nodeTreeToSketchGroup2 = _interopRequireDefault(_nodeTreeToSketchGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function nodeTreeToSketchPage(node, options) {
  var rootGroup = (0, _nodeTreeToSketchGroup2['default'])(node, options);

  var bcr = node.getBoundingClientRect();
  var page = new _page2['default']({
    width: bcr.right - bcr.left,
    height: bcr.bottom - bcr.top
  });

  if (options && options.addArtboard) {
    var artboard = new _artboard2['default']({
      x: 0,
      y: 0,
      width: rootGroup._width,
      height: rootGroup._height
    });

    artboard.addLayer(rootGroup);

    if (options.artboardName) {
      artboard.setName(options.artboardName);
    }

    page.addLayer(artboard);
  } else {
    page.addLayer(rootGroup);
  }

  if (options && options.pageName) {
    page.setName(options.pageName);
  }

  return page;
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pageToPageReference(page) {
  return {
    '_class': 'MSJSONFileReference',
    '_ref_class': 'MSImmutablePage',
    '_ref': 'pages/' + String(page.getID())
  };
}

function textStyleToSharedStyle(textLayer) {
  return {
    '_class': 'sharedStyle',
    'do_objectID': (0, _utils.generateID)(),
    name: textLayer._name,
    'style': textLayer._style.toJSON()
  };
}

var Document = function () {
  function Document() {
    _classCallCheck(this, Document);

    this._objectID = (0, _utils.generateID)();
    this._colors = [];
    this._textStyles = [];
    this._pages = [];
  }

  _createClass(Document, [{
    key: 'setName',
    value: function () {
      function setName(name) {
        this._name = name;
      }

      return setName;
    }()
  }, {
    key: 'addPage',
    value: function () {
      function addPage(page) {
        this._pages.push(page);
      }

      return addPage;
    }()
  }, {
    key: 'addTextStyle',
    value: function () {
      function addTextStyle(textLayer) {
        this._textStyles.push(textStyleToSharedStyle(textLayer));
      }

      return addTextStyle;
    }()
  }, {
    key: 'addColor',
    value: function () {
      function addColor(color) {
        this._colors.push((0, _utils.makeColorFromCSS)(color));
      }

      return addColor;
    }()
  }, {
    key: 'toJSON',
    value: function () {
      function toJSON() {
        return {
          '_class': 'document',
          'do_objectID': this._objectID,
          'assets': {
            '_class': 'assetCollection',
            'colors': this._colors
          },
          'currentPageIndex': 0,
          'enableLayerInteraction': true,
          'enableSliceInteraction': true,
          'foreignSymbols': [],
          'layerStyles': {
            '_class': 'sharedStyleContainer',
            'objects': []
          },
          'layerSymbols': {
            '_class': 'symbolContainer',
            'objects': []
          },
          'layerTextStyles': {
            '_class': 'sharedTextStyleContainer',
            'objects': this._textStyles
          },
          'pages': this._pages.map(pageToPageReference)
        };
      }

      return toJSON;
    }()
  }]);

  return Document;
}();

exports['default'] = Document;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function () {
  function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } }

  return get;
}();

var _utils = __webpack_require__(1);

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

var _symbolInstance = __webpack_require__(13);

var _symbolInstance2 = _interopRequireDefault(_symbolInstance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SymbolMaster = function (_Base) {
  _inherits(SymbolMaster, _Base);

  function SymbolMaster(_ref) {
    var x = _ref.x,
        y = _ref.y;

    _classCallCheck(this, SymbolMaster);

    var _this = _possibleConstructorReturn(this, (SymbolMaster.__proto__ || Object.getPrototypeOf(SymbolMaster)).call(this));

    _this._class = 'symbolMaster';
    _this._x = x;
    _this._y = y;
    _this._symbolID = (0, _utils.generateID)();
    return _this;
  }

  _createClass(SymbolMaster, [{
    key: 'getSymbolInstance',
    value: function () {
      function getSymbolInstance(_ref2) {
        var x = _ref2.x,
            y = _ref2.y,
            width = _ref2.width,
            height = _ref2.height;

        return new _symbolInstance2['default']({ x: x, y: y, width: width, height: height, symbolID: this._symbolID });
      }

      return getSymbolInstance;
    }()
  }, {
    key: 'addLayer',
    value: function () {
      function addLayer(layer) {
        //position child layers relatively to the symbol layer
        layer._x -= this._x;
        layer._y -= this._y;

        _get(SymbolMaster.prototype.__proto__ || Object.getPrototypeOf(SymbolMaster.prototype), 'addLayer', this).call(this, layer);
      }

      return addLayer;
    }()
  }, {
    key: 'toJSON',
    value: function () {
      function toJSON() {
        var obj = _get(SymbolMaster.prototype.__proto__ || Object.getPrototypeOf(SymbolMaster.prototype), 'toJSON', this).call(this);
        var width = 0;
        var height = 0;

        // fit symbol size to its contents
        this._layers.forEach(function (layer) {
          var layerWidth = layer._x + layer._width;
          var layerHeight = layer._y + layer._height;

          if (width < layerWidth) {
            width = layerWidth;
          }
          if (height < layerHeight) {
            height = layerHeight;
          }
        });

        obj.frame = {
          '_class': 'rect',
          'constrainProportions': false,
          width: width,
          height: height,
          'x': this._x,
          'y': this._y
        };

        obj.style = {
          '_class': 'style',
          'endDecorationType': 0,
          'miterLimit': 10,
          'startDecorationType': 0
        };

        obj.horizontalRulerData = {
          '_class': 'rulerData',
          'base': 0,
          'guides': []
        };

        obj.verticalRulerData = {
          '_class': 'rulerData',
          'base': 0,
          'guides': []
        };

        obj.backgroundColor = {
          '_class': 'color',
          'alpha': 1,
          'blue': 1,
          'green': 1,
          'red': 1
        };

        obj.hasClickThrough = true;
        obj.includeInCloudUpload = true;
        obj.hasBackgroundColor = false;
        obj.includeBackgroundColorInExport = true;
        obj.resizesContent = false;
        obj.includeBackgroundColorInInstance = false;
        obj.symbolID = this._symbolID;
        obj.changeIdentifier = 0;

        return obj;
      }

      return toJSON;
    }()
  }]);

  return SymbolMaster;
}(_base2['default']);

exports['default'] = SymbolMaster;

/***/ })
/******/ ]);