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
var Connect = function Connect(_ref) {
  var isConnecting = _ref.isConnecting,
    onClick = _ref.onClick,
    className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("a", {
    title: "Connect Wallet",
    className: (0, _clsx["default"])(_ConnectModule["default"].connectButton, className),
    onClick: onClick
  }, isConnecting ? /*#__PURE__*/_react["default"].createElement(_Spinner["default"], {
    className: _ConnectModule["default"].spinner
  }) : /*#__PURE__*/_react["default"].createElement("span", null, "Connect"));
};
Connect.propTypes = {
  isConnecting: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  className: _propTypes["default"].string
};
var _default = exports["default"] = Connect;
//# sourceMappingURL=Connect.js.map