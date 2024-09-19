"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.htmlAddress = htmlAddress;
exports.htmlCurrency = htmlCurrency;
exports.htmlPercent = htmlPercent;
var _lodash = require("lodash");
var _big = _interopRequireDefault(require("big.js"));
var _calcUtils = require("@oracly/pm-libs/calc-utils");
var _currency = require("./currency");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function htmlPercent(percent) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return ((0, _lodash.floor)((0, _calcUtils.mul)(percent, 100), precision) || 0) + '%';
}
function htmlCurrency(amount) {
  var maximumFractionDigits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  if (isNaN(+amount)) return '';
  var HTML_LOWEST_AMOUNT = Math.pow(10, -maximumFractionDigits);
  if (!(0, _calcUtils.eq)(amount, 0) && (0, _calcUtils.lt)((0, _big["default"])(amount).abs().toString(), HTML_LOWEST_AMOUNT)) {
    if ((0, _calcUtils.gt)(amount, 0)) return "<".concat(HTML_LOWEST_AMOUNT);else return "<-".concat(HTML_LOWEST_AMOUNT);
  }
  return _currency.CurrencyFormatter.formatDefault(amount, {
    minimumFractionDigits: 0,
    maximumFractionDigits: maximumFractionDigits
  });
}
function htmlAddress(address) {
  return (0, _lodash.toLower)(address === null || address === void 0 ? void 0 : address.replace(/(0x.{3}).*(.{5})$/, '$1...$2'));
}
//# sourceMappingURL=index.js.map