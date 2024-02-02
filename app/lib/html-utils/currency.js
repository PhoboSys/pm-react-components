"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurrencyFormatter = void 0;
var _lodash = require("lodash");
var _logger = _interopRequireDefault(require("../logger"));
var _CurrencyFormatter;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classStaticPrivateMethodGet(receiver, classConstructor, method) { _classCheckPrivateStaticAccess(receiver, classConstructor); return method; }
function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }
var SYMBOLS = {
  'WETH': 'Ξ',
  'WBTC': '₿'
};
var CurrencyFormatter = exports.CurrencyFormatter = /*#__PURE__*/function () {
  function CurrencyFormatter() {
    _classCallCheck(this, CurrencyFormatter);
  }
  _createClass(CurrencyFormatter, null, [{
    key: "formatSymboled",
    value: function formatSymboled(amount, currency, options) {
      var formatter = _classStaticPrivateMethodGet(CurrencyFormatter, CurrencyFormatter, _get).call(CurrencyFormatter, currency, options);
      return formatter.formatSymboled(amount);
    }
  }, {
    key: "formatUnsymboled",
    value: function formatUnsymboled(amount, currency, options) {
      var formatter = _classStaticPrivateMethodGet(CurrencyFormatter, CurrencyFormatter, _get).call(CurrencyFormatter, currency, options);
      return formatter.formatUnsymboled(amount);
    }
  }, {
    key: "formatNamed",
    value: function formatNamed(amount, currency, options) {
      var formatter = _classStaticPrivateMethodGet(CurrencyFormatter, CurrencyFormatter, _get).call(CurrencyFormatter, currency, options);
      return formatter.formatNamed(amount);
    }
  }, {
    key: "formatDefault",
    value: function formatDefault(amount, options) {
      var formatter = _classStaticPrivateMethodGet(CurrencyFormatter, CurrencyFormatter, _get).call(CurrencyFormatter, CurrencyFormatter.DEFAULT, options);
      return formatter.formatUnsymboled(amount);
    }
  }]);
  return CurrencyFormatter;
}();
_CurrencyFormatter = CurrencyFormatter;
function _get(currency, options) {
  options = (0, _lodash.isPlainObject)(options) ? options : {};
  var key = _classStaticPrivateMethodGet(_CurrencyFormatter, _CurrencyFormatter, _key).call(_CurrencyFormatter, currency, options);
  if ((0, _lodash.isEmpty)(_classStaticPrivateFieldSpecGet(_CurrencyFormatter, _CurrencyFormatter, _formatters)[key])) {
    _classStaticPrivateFieldSpecGet(_CurrencyFormatter, _CurrencyFormatter, _formatters)[key] = _classStaticPrivateMethodGet(_CurrencyFormatter, _CurrencyFormatter, _create).call(_CurrencyFormatter, currency, options);
  }
  return _classStaticPrivateFieldSpecGet(_CurrencyFormatter, _CurrencyFormatter, _formatters)[key];
}
function _key(currency, options) {
  return JSON.stringify(_objectSpread({
    currency: currency
  }, options));
}
function _create(currency, options) {
  try {
    return _classStaticPrivateMethodGet(_CurrencyFormatter, _CurrencyFormatter, _createStandard).call(_CurrencyFormatter, currency, options);
  } catch (_unused) {
    return _classStaticPrivateMethodGet(_CurrencyFormatter, _CurrencyFormatter, _createCustom).call(_CurrencyFormatter, currency, options);
  }
}
function _createStandard(currency, options) {
  var fSymboled = new Intl.NumberFormat(undefined, _objectSpread({
    style: 'currency',
    currency: currency,
    currencyDisplay: 'narrowSymbol'
  }, options));
  var fCoded = new Intl.NumberFormat(undefined, _objectSpread({
    style: 'currency',
    currency: currency,
    currencyDisplay: 'code'
  }, options));
  var formatter = {
    formatUnsymboled: function formatUnsymboled(amount) {
      return (0, _lodash.replace)(fCoded.format(amount), new RegExp("s+".concat(currency, "s+")), '');
    },
    formatSymboled: function formatSymboled(amount) {
      return fSymboled.format(amount);
    },
    formatNamed: function formatNamed(amount) {
      return fCoded.format(amount);
    }
  };
  _logger["default"].info('Standard Currency Formatter Create: "%s"', currency);
  return formatter;
}
function _createCustom(currency, options) {
  var fDefault = new Intl.NumberFormat(undefined, _objectSpread({
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'code'
  }, options));
  var formatter = {
    formatUnsymboled: function formatUnsymboled(amount) {
      return (0, _lodash.replace)(fDefault.format(amount), /\s*[$USD]+\s*/, '');
    },
    formatSymboled: function formatSymboled(amount) {
      return (0, _lodash.replace)(fDefault.format(amount), /[$USD]+/, SYMBOLS[currency] || '');
    },
    formatNamed: function formatNamed(amount) {
      return (0, _lodash.replace)(fDefault.format(amount), /[$USD]+/, currency || '');
    }
  };
  _logger["default"].info('Custom Currency Formatter Create: "%s"', currency || 'DEFAULT');
  return formatter;
}
var _formatters = {
  writable: true,
  value: {}
};
_defineProperty(CurrencyFormatter, "DEFAULT", '');
//# sourceMappingURL=currency.js.map