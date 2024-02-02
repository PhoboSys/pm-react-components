"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _Balance = _interopRequireDefault(require("../../../common/Balance"));
var _FormattedCurrencyCell = _interopRequireDefault(require("../FormattedCurrencyCell"));
var _PMGlobalHeaderProvider = require("../../../PMGlobalHeaderProvider");
var _TokenCurrencyCellModule = _interopRequireDefault(require("./TokenCurrencyCell.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var TokenCurrencyCell = function TokenCurrencyCell(_ref) {
  var containerClassName = _ref.containerClassName,
    amountClassName = _ref.amountClassName,
    iconClassName = _ref.iconClassName,
    amount = _ref.amount,
    currency = _ref.currency,
    iconSize = _ref.iconSize,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? 'left' : _ref$placement;
  var _useGHProvider = (0, _PMGlobalHeaderProvider.useGHProvider)(),
    currencyFill = _useGHProvider.currencyFill;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_TokenCurrencyCellModule["default"].container, _defineProperty({}, _TokenCurrencyCellModule["default"].reverse, placement === 'right'), containerClassName)
  }, /*#__PURE__*/_react["default"].createElement(_Balance["default"], {
    fill: currencyFill,
    className: (0, _clsx["default"])(_TokenCurrencyCellModule["default"].icon, _defineProperty(_defineProperty({}, _TokenCurrencyCellModule["default"].left, placement === 'left'), _TokenCurrencyCellModule["default"].right, placement === 'right'), iconClassName),
    currency: currency,
    size: iconSize
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _clsx["default"])(_TokenCurrencyCellModule["default"].amount, amountClassName)
  }, /*#__PURE__*/_react["default"].createElement(_FormattedCurrencyCell["default"], {
    amount: amount,
    token: true
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
var _default = exports["default"] = TokenCurrencyCell;
//# sourceMappingURL=TokenCurrencyCell.js.map