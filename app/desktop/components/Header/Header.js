"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _HeaderModule = _interopRequireDefault(require("./Header.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Header = function Header(_ref) {
  var className = _ref.className,
    children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_HeaderModule["default"].header, className)
  }, children);
};
Header.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].node
};
var _default = Header;
exports["default"] = _default;
//# sourceMappingURL=Header.js.map