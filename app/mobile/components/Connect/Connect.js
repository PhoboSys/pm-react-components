"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ConnectModule = _interopRequireDefault(require("./Connect.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Connect = function Connect(_ref) {
  var onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement("a", {
    title: "Connect Wallet",
    className: _ConnectModule["default"].connectButton,
    onClick: onClick
  }, "Connect");
};
Connect.propTypes = {
  onClick: _propTypes["default"].func
};
var _default = exports["default"] = Connect;
//# sourceMappingURL=Connect.js.map