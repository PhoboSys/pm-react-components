"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _moment = _interopRequireDefault(require("moment"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _DateCellModule = _interopRequireDefault(require("./DateCell.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var DateCell = function DateCell(_ref) {
  var date = _ref.date;
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: _DateCellModule["default"].container
  }, _moment["default"].unix(date).fromNow());
};
DateCell.propTypes = {
  date: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
var _default = /*#__PURE__*/_react["default"].memo(DateCell);
exports["default"] = _default;
//# sourceMappingURL=DateCell.js.map