"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _calcUtils = require("@lib/calc-utils");
var _htmlUtils = require("@lib/html-utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var formatSymboled = function formatSymboled(amount, currency) {
  var formater = new Intl.NumberFormat(Intl.Locale, {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'narrowSymbol',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  });
  return formater.format(amount);
};
function formatNumber() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var currency = arguments.length > 1 ? arguments[1] : undefined;
  var token = arguments.length > 2 ? arguments[2] : undefined;
  var map = [{
    suffix: 'T',
    threshold: 1e12
  }, {
    suffix: 'B',
    threshold: 1e9
  }, {
    suffix: 'M',
    threshold: 1e6
  }, {
    suffix: 'K',
    threshold: 1e3
  }, {
    suffix: '',
    threshold: 1
  }];
  var formatted = num;
  var found = map.find(function (x) {
    return Math.abs(num) >= x.threshold;
  });
  if (found) formatted = (0, _calcUtils.div)(num, found.threshold);
  if (!token && currency) formatted = formatSymboled(formatted, currency);
  if (token) formatted = (0, _htmlUtils.htmlCurrency)(formatted);
  if (found) formatted = formatted + found.suffix;
  return formatted;
}
var FormattedCurrencyCell = function FormattedCurrencyCell(_ref) {
  var amount = _ref.amount,
    currency = _ref.currency,
    token = _ref.token;
  return formatNumber(amount, currency, token);
};
FormattedCurrencyCell.propTypes = {
  amount: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  currency: _propTypes["default"].string,
  token: _propTypes["default"].bool
};
var _default = FormattedCurrencyCell;
exports["default"] = _default;
//# sourceMappingURL=FormattedCurrencyCell.js.map