"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _funds = require("../../SVG/currency/funds");
var _BalanceCurrencyModule = _interopRequireDefault(require("./BalanceCurrency.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var BalanceCurrency = function BalanceCurrency(_ref) {
  var className = _ref.className,
    currency = _ref.currency,
    fill = _ref.fill,
    size = _ref.size;
  var Currency = (0, _funds.factoryFunds)(currency);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_BalanceCurrencyModule["default"].balance, className)
  }, /*#__PURE__*/_react["default"].createElement(Currency, {
    fill: fill,
    size: size
  }));
};
BalanceCurrency.propTypes = {
  className: _propTypes["default"].string,
  currency: _propTypes["default"].string,
  fill: _propTypes["default"].string,
  size: _propTypes["default"].number
};
var _default = exports["default"] = /*#__PURE__*/_react["default"].memo(BalanceCurrency);
//# sourceMappingURL=BalanceCurrency.js.map