"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _Balance = _interopRequireDefault(require("../../../common/Balance"));
var _ConvertedCurrencyCell = _interopRequireDefault(require("../ConvertedCurrencyCell"));
var _TokenCurrencyCellModule = _interopRequireDefault(require("./TokenCurrencyCell.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var TokenCurrencyCell = function TokenCurrencyCell(_ref) {
  var _cn2;
  var containerClassName = _ref.containerClassName,
    amountClassName = _ref.amountClassName,
    iconClassName = _ref.iconClassName,
    amount = _ref.amount,
    currency = _ref.currency,
    iconSize = _ref.iconSize,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? 'left' : _ref$placement;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_TokenCurrencyCellModule["default"].container, _defineProperty({}, _TokenCurrencyCellModule["default"].reverse, placement === 'right'), containerClassName)
  }, /*#__PURE__*/_react["default"].createElement(_Balance["default"], {
    className: (0, _clsx["default"])(_TokenCurrencyCellModule["default"].icon, (_cn2 = {}, _defineProperty(_cn2, _TokenCurrencyCellModule["default"].left, placement === 'left'), _defineProperty(_cn2, _TokenCurrencyCellModule["default"].right, placement === 'right'), _cn2), iconClassName),
    currency: currency,
    size: iconSize
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _clsx["default"])(_TokenCurrencyCellModule["default"].amount, amountClassName)
  }, /*#__PURE__*/_react["default"].createElement(_ConvertedCurrencyCell["default"], {
    amount: amount
  })));
};
TokenCurrencyCell.propTypes = {
  containerClassName: _propTypes["default"].string,
  amountClassName: _propTypes["default"].string,
  iconClassName: _propTypes["default"].string,
  amount: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  currency: _propTypes["default"].string,
  iconSize: _propTypes["default"].number,
  placement: _propTypes["default"].string
};
var _default = TokenCurrencyCell;
exports["default"] = _default;
//# sourceMappingURL=TokenCurrencyCell.js.map