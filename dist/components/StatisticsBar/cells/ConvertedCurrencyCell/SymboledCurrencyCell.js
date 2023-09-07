"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _htmlUtils = require("@lib/html-utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ConvertedCurrencyCell = function ConvertedCurrencyCell(_ref) {
  var amount = _ref.amount,
    quote = _ref.quote;
  return /*#__PURE__*/_react["default"].createElement("span", null, (0, _htmlUtils.htmlCurrentySymboled)(amount, quote));
};
ConvertedCurrencyCell.propTypes = {
  amount: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  quote: _propTypes["default"].string
};
var _default = ConvertedCurrencyCell;
exports["default"] = _default;
//# sourceMappingURL=SymboledCurrencyCell.js.map