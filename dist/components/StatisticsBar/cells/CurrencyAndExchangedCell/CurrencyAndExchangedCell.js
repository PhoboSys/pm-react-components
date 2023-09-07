"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _CurrencyAndExchangedCellModule = _interopRequireDefault(require("./CurrencyAndExchangedCell.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var CurrencyAndExchangedCell = function CurrencyAndExchangedCell(_ref) {
  var amount = _ref.amount,
    currency = _ref.currency,
    exchangedAmount = _ref.exchangedAmount,
    exchangedQuote = _ref.exchangedQuote;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _CurrencyAndExchangedCellModule["default"].container
  }, /*#__PURE__*/_react["default"].createElement(TokenCurrencyCell, {
    amount: amount,
    currency: currency
  }), "(", /*#__PURE__*/_react["default"].createElement(ConvertedCurrencyCell, {
    amount: exchangedAmount,
    quote: exchangedQuote
  }), ")");
};
CurrencyAndExchangedCell.propTypes = {
  amount: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  currency: _propTypes["default"].string
};
var _default = CurrencyAndExchangedCell;
exports["default"] = _default;
//# sourceMappingURL=CurrencyAndExchangedCell.js.map