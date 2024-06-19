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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
var _default = exports["default"] = Connect;
//# sourceMappingURL=Connect.js.map