"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _dateUtils = require("pm-libs/date-utils");
var _DateCellModule = _interopRequireDefault(require("./DateCell.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var DateCell = function DateCell(_ref) {
  var date = _ref.date;
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: _DateCellModule["default"].container
  }, (0, _dateUtils.timeSinceUnixTS)(date));
};
DateCell.propTypes = {
  date: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
var _default = exports["default"] = /*#__PURE__*/_react["default"].memo(DateCell);
//# sourceMappingURL=DateCell.js.map