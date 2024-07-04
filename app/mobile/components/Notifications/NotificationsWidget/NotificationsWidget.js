"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _NotificationsWidgetModule = _interopRequireDefault(require("./NotificationsWidget.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var NotificationsWidget = function NotificationsWidget(_ref) {
  var className = _ref.className,
    children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_NotificationsWidgetModule["default"].container, className)
  }, children);
};
NotificationsWidget.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].node
};
var _default = exports["default"] = NotificationsWidget;
//# sourceMappingURL=NotificationsWidget.js.map