"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Logo = _interopRequireDefault(require("../SVG/Logo"));
var _LogoModule = _interopRequireDefault(require("./Logo.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Logo = function Logo(_ref) {
  var basepath = _ref.basepath,
    logoFill = _ref.logoFill;
  return /*#__PURE__*/_react["default"].createElement("a", {
    href: basepath,
    className: _LogoModule["default"].container,
    tabIndex: -1
  }, /*#__PURE__*/_react["default"].createElement(_Logo["default"], {
    fill: logoFill
  }));
};
Logo.propTypes = {
  basepath: _propTypes["default"].string,
  logoFill: _propTypes["default"].string
};
var _default = Logo;
exports["default"] = _default;
//# sourceMappingURL=Logo.js.map