"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _DropdownOptionModule = _interopRequireDefault(require("./DropdownOption.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var DropdownOption = function DropdownOption(_ref) {
  var className = _ref.className,
    option = _ref.option,
    selected = _ref.selected,
    renderer = _ref.renderer,
    _onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_DropdownOptionModule["default"].option, className),
    onClick: function onClick() {
      return _onClick(option);
    }
  }, renderer(option, selected));
};
DropdownOption.propTypes = {
  className: _propTypes["default"].string,
  option: _propTypes["default"].any,
  selected: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  renderer: _propTypes["default"].func
};
var _default = exports["default"] = DropdownOption;
//# sourceMappingURL=DropdownOption.js.map