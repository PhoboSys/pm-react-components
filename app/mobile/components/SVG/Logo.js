"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Logo = function Logo(_ref) {
  var _ref$fill = _ref.fill,
    fill = _ref$fill === void 0 ? 'white' : _ref$fill;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: "32",
    height: "34",
    viewBox: "0 0 32 34",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15.8133 0.819336C8.15845 0.819336 1.73593 6.13984 0.0651221 13.2852C-0.254819 15.1811 0.586508 17.6814 2.98014 17.9421C5.37378 18.191 6.3573 17.8473 6.41655 16.5439C6.41655 16.4965 6.4284 16.4372 6.44025 16.3898C6.58244 14.1147 7.54227 11.9936 9.17752 10.3583C10.955 8.58087 13.3131 7.6092 15.8252 7.6092C18.3373 7.6092 20.6954 8.59272 22.4729 10.3583C24.2503 12.1358 25.222 14.4939 25.222 17.006C25.222 19.5181 24.2385 21.8762 22.4729 23.6537C20.6954 25.4311 18.3373 26.4028 15.8252 26.4028C14.1425 26.4028 12.5191 25.9643 11.0972 25.1349C7.16308 22.5872 15.3275 22.6346 18.4795 21.2126C23.2075 18.8664 21.7974 13.6525 19.309 12.9416C14.8417 11.6262 12.448 14.9679 11.2868 17.006C10.1255 19.0441 8.52579 19.6129 6.94978 20.1225C6.86684 20.1462 6.79574 20.1817 6.72464 20.2054C5.27898 20.7623 3.78592 21.5326 3.47783 23.1204C3.01569 25.4904 3.59633 27.5878 5.77667 29.6851C8.53764 31.8773 12.0333 33.1808 15.8252 33.1808C24.7598 33.1808 32 25.9407 32 17.006C31.9882 8.05949 24.748 0.819336 15.8133 0.819336Z",
    fill: fill
  }));
};
Logo.propTypes = {
  fill: _propTypes["default"].string
};
var _default = exports["default"] = /*#__PURE__*/_react["default"].memo(Logo);
//# sourceMappingURL=Logo.js.map