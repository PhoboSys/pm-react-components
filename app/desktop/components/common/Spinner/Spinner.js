"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _SpinnerModule = _interopRequireDefault(require("./Spinner.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Spinner = function Spinner(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_SpinnerModule["default"].spinner, className)
  });
};
Spinner.propTypes = {
  className: _propTypes["default"].string
};
var _default = exports["default"] = Spinner;
//# sourceMappingURL=Spinner.js.map