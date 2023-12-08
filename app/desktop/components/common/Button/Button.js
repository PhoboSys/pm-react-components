"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _ButtonModule = _interopRequireDefault(require("./Button.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Button = function Button(props) {
  return /*#__PURE__*/_react["default"].createElement("a", {
    className: (0, _clsx["default"])(_ButtonModule["default"].button, props.className),
    onClick: props.onClick,
    href: props.href
  }, props.children);
};
var _default = exports["default"] = /*#__PURE__*/_react["default"].memo(Button);
//# sourceMappingURL=Button.js.map