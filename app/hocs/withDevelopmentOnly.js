"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var withDevelopmentOnly = function withDevelopmentOnly(Cmp) {
  return function (props) {
    var isDevelopment = true;
    if (!isDevelopment) return null;
    return /*#__PURE__*/_react["default"].createElement(Cmp, props);
  };
};
var _default = exports["default"] = withDevelopmentOnly;
//# sourceMappingURL=withDevelopmentOnly.js.map