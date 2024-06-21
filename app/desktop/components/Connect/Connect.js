"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _Spinner = _interopRequireDefault(require("../common/Spinner"));
var _ConnectModule = _interopRequireDefault(require("./Connect.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Connect = function Connect(_ref) {
  var className = _ref.className,
    isConnecting = _ref.isConnecting,
    onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_ConnectModule["default"].connect, className)
  }, /*#__PURE__*/_react["default"].createElement("a", {
    title: "Connect Wallet",
    className: (0, _clsx["default"])(_ConnectModule["default"].connectButton, _defineProperty({}, _ConnectModule["default"].connection, isConnecting)),
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Connect"), isConnecting && /*#__PURE__*/_react["default"].createElement(_Spinner["default"], null)));
};
Connect.propTypes = {
  className: _propTypes["default"].string,
  isConnecting: _propTypes["default"].bool,
  onClick: _propTypes["default"].func
};
var _default = Connect;
exports["default"] = _default;
//# sourceMappingURL=Connect.js.map