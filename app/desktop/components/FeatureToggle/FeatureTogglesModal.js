"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _lodash = require("lodash");
var _FeatureToggleButton = _interopRequireDefault(require("./FeatureToggleButton"));
var _useFeatureToggles2 = _interopRequireDefault(require("../../../features/useFeatureToggles"));
var _FeatureTogglesModalModule = _interopRequireDefault(require("./FeatureTogglesModal.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var FeatureTogglesModal = function FeatureTogglesModal() {
  var _useFeatureToggles = (0, _useFeatureToggles2["default"])(),
    _useFeatureToggles$to = _useFeatureToggles.toggles,
    toggles = _useFeatureToggles$to === void 0 ? [] : _useFeatureToggles$to;
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
var _default = /*#__PURE__*/_react["default"].memo(FeatureTogglesModal);
exports["default"] = _default;
//# sourceMappingURL=FeatureTogglesModal.js.map