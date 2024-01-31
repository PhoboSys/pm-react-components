"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.htmlAddress = htmlAddress;
exports.htmlCurrency = htmlCurrency;
exports.htmlPercent = htmlPercent;
var _lodash = require("lodash");
var _currency = require("./currency");
var _calcUtils = require("../calc-utils");
function htmlPercent(percent) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return ((0, _lodash.floor)((0, _calcUtils.mul)(percent, 100), precision) || 0) + '%';
}
function htmlCurrency(amount) {
  if (isNaN(+amount)) return '';
  return _currency.CurrencyFormatter.formatDefault(amount, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 6
  });
}
function htmlAddress(address) {
  return (0, _lodash.toLower)(address === null || address === void 0 ? void 0 : address.replace(/(0x.{3}).*(.{5})$/, '$1...$2'));
}
//# sourceMappingURL=index.js.map