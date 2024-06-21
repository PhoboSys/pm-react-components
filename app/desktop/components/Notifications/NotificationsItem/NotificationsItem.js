"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _lodash = require("lodash");
var _NotificationsItemModule = _interopRequireDefault(require("./NotificationsItem.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var NotificationsItem = function NotificationsItem(_ref) {
  var className = _ref.className,
    icon = _ref.icon,
    message = _ref.message,
    action = _ref.action,
    _ref$onClick = _ref.onClick,
    onClick = _ref$onClick === void 0 ? _lodash.noop : _ref$onClick;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_NotificationsItemModule["default"].container, className)
  }, icon && /*#__PURE__*/_react["default"].createElement("div", {
    className: _NotificationsItemModule["default"].icon
  }, icon), /*#__PURE__*/_react["default"].createElement("div", {
    className: _NotificationsItemModule["default"].message
  }, message), /*#__PURE__*/_react["default"].createElement("div", {
    className: _NotificationsItemModule["default"].action,
    onClick: onClick
  }, action));
};
NotificationsItem.propTypes = {
  className: _propTypes["default"].string,
  icon: _propTypes["default"].node,
  message: _propTypes["default"].string,
  action: _propTypes["default"].node,
  onClick: _propTypes["default"].func
};
var _default = NotificationsItem;
exports["default"] = _default;
//# sourceMappingURL=NotificationsItem.js.map