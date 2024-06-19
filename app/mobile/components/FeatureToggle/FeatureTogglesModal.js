"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _lodash = require("lodash");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _FeatureToggleButton = _interopRequireDefault(require("./FeatureToggleButton"));
var _FeatureTogglesModalModule = _interopRequireDefault(require("./FeatureTogglesModal.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var FeatureTogglesModal = function FeatureTogglesModal(_ref) {
  var toggles = _ref.toggles;
  return /*#__PURE__*/_react["default"].createElement("ul", {
    className: _FeatureTogglesModalModule["default"].container
  }, (0, _lodash.map)(toggles, function (toggle, name) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      className: _FeatureTogglesModalModule["default"].item,
      key: name
    }, /*#__PURE__*/_react["default"].createElement("span", null, toggle.label), /*#__PURE__*/_react["default"].createElement(_FeatureToggleButton["default"], {
      name: name,
      toggledValue: toggle.toggledValue,
      untoggledValue: toggle.untoggledValue,
      className: _FeatureTogglesModalModule["default"].toggleButton
    }));
  }));
};
FeatureTogglesModal.propTypes = {
  toggles: _propTypes["default"].object
};
var _default = exports["default"] = /*#__PURE__*/_react["default"].memo(FeatureTogglesModal);
//# sourceMappingURL=FeatureTogglesModal.js.map