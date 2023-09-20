"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _htmlUtils = require("@lib/html-utils");
var _WinCellModule = _interopRequireDefault(require("./WinCell.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var WinCell = function WinCell(_ref) {
  var count = _ref.count,
    percent = _ref.percent;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _WinCellModule["default"].container
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: _WinCellModule["default"].count
  }, count), /*#__PURE__*/_react["default"].createElement("span", {
    className: _WinCellModule["default"].percent
  }, "(", (0, _htmlUtils.htmlPercent)(percent), ")"));
};
WinCell.propTypes = {
  count: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  percent: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
var _default = WinCell;
exports["default"] = _default;
//# sourceMappingURL=WinCell.js.map