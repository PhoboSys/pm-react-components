"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _funds = require("../../SVG/currency/funds");
var _BalanceModule = _interopRequireDefault(require("./Balance.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Balance = function Balance(_ref) {
  var currency = _ref.currency;
  var Currency = (0, _funds.factoryFunds)(currency);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _BalanceModule["default"].balance
  }, /*#__PURE__*/_react["default"].createElement(Currency, null));
};
Balance.propTypes = {
  currency: _propTypes["default"].string
};
var _default = /*#__PURE__*/_react["default"].memo(Balance);
exports["default"] = _default;
//# sourceMappingURL=Balance.js.map