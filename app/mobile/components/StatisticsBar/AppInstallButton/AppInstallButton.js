"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _AnimatedButton = _interopRequireDefault(require("../../common/AnimatedButton"));
var _AppInstallButtonModule = _interopRequireDefault(require("./AppInstallButton.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var AppInstallButton = function AppInstallButton(_ref) {
  var className = _ref.className,
    onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement(_AnimatedButton["default"], {
    className: _AppInstallButtonModule["default"].btn,
    onClick: onClick,
    borderWidth: "1px"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: _AppInstallButtonModule["default"].title
  }, "Install App"));
};
AppInstallButton.propTypes = {
  className: _propTypes["default"].string,
  onClick: _propTypes["default"].func.isRequired
};
var _default = exports["default"] = AppInstallButton;
//# sourceMappingURL=AppInstallButton.js.map