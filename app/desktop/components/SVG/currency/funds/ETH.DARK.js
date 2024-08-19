"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ETH = function ETH(_ref) {
  var _ref$fill = _ref.fill,
    fill = _ref$fill === void 0 ? '#ffffff' : _ref$fill,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 1 : _ref$size;
  var width = size * 10;
  var height = size * 16;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 10 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.99884 9.94937e-05L4.9989 0V0.000198987L9.99736 8.14821L9.99768 8.14835L9.99751 8.14845L9.99768 8.14873L9.99731 8.14857L4.9989 11.0502V11.0503L4.99884 11.0502L4.99878 11.0503V11.0502L0.000368504 8.14857L0 8.14873L0.000171268 8.14845L0 8.14835L0.000319988 8.14821L4.99878 0.000198987V0L4.99884 9.94937e-05ZM4.99878 15.9997V15.9999L4.99884 15.9998L4.9989 15.9999V15.9997L10.0006 9.07898L4.99884 11.9809L0 9.07898L4.99878 15.9997Z",
    fill: fill
  }));
};
var _default = exports["default"] = /*#__PURE__*/_react["default"].memo(ETH);
//# sourceMappingURL=ETH.DARK.js.map