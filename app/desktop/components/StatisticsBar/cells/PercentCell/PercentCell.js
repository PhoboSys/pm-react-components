"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _htmlUtils = require("../../../../../lib/html-utils");
var _PMGlobalHeaderProvider = require("../../../PMGlobalHeaderProvider");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var PercentCell = function PercentCell(_ref) {
  var value = _ref.value;
  var _useGHProvider = (0, _PMGlobalHeaderProvider.useGHProvider)(),
    maximumFractionDigitsPrecent = _useGHProvider.maximumFractionDigitsPrecent;
  return (0, _htmlUtils.htmlPercent)(value, maximumFractionDigitsPrecent);
};
PercentCell.propTypes = {
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
var _default = exports["default"] = PercentCell;
//# sourceMappingURL=PercentCell.js.map