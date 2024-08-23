"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _NetworkStatusModule = _interopRequireDefault(require("./NetworkStatus.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var NetworkStatus = function NetworkStatus(_ref) {
  var type = _ref.type;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_NetworkStatusModule["default"].status, _defineProperty(_defineProperty(_defineProperty({}, _NetworkStatusModule["default"].success, type === 'success'), _NetworkStatusModule["default"].warning, type === 'warning'), _NetworkStatusModule["default"].error, type === 'error'))
  });
};
NetworkStatus.propTypes = {
  type: _propTypes["default"].string
};
var _default = exports["default"] = NetworkStatus;
//# sourceMappingURL=NetworkStatus.js.map