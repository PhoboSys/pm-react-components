"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _TokenCurrencyCell = _interopRequireDefault(require("../TokenCurrencyCell"));
var _FormattedCurrencyCell = _interopRequireDefault(require("../FormattedCurrencyCell"));
var _CurrencyCellModule = _interopRequireDefault(require("./CurrencyCell.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var CurrencyCell = function CurrencyCell(_ref) {
  var amount = _ref.amount,
    currency = _ref.currency,
    convertedAmount = _ref.convertedAmount,
    convertedCurrency = _ref.convertedCurrency,
    _ref$hideConverted = _ref.hideConverted,
    hideConverted = _ref$hideConverted === void 0 ? false : _ref$hideConverted;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _CurrencyCellModule["default"].container
  }, /*#__PURE__*/_react["default"].createElement(_TokenCurrencyCell["default"], {
    amount: amount,
    currency: currency
  }), !hideConverted && /*#__PURE__*/_react["default"].createElement("span", {
    className: _CurrencyCellModule["default"].converted
  }, "(", /*#__PURE__*/_react["default"].createElement(_FormattedCurrencyCell["default"], {
    amount: convertedAmount,
    currency: convertedCurrency
  }), ")"));
};
CurrencyCell.propTypes = {
  amount: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  currency: _propTypes["default"].string,
  convertedAmount: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  convertedCurrency: _propTypes["default"].string,
  hideConverted: _propTypes["default"].bool
};
var _default = exports["default"] = CurrencyCell;
//# sourceMappingURL=CurrencyCell.js.map