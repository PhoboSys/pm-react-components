"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _lodash = require("lodash");
var _Toggles = _interopRequireDefault(require("../SVG/Toggles"));
var _modals = require("../modals");
var _Button = _interopRequireDefault(require("../common/Button"));
var _FeatureTogglesModal = _interopRequireDefault(require("./FeatureTogglesModal"));
var _useFeatureToggles2 = _interopRequireDefault(require("../../../features/useFeatureToggles"));
var _hocs = require("../../../hocs");
var _FeatureToggleModule = _interopRequireDefault(require("./FeatureToggle.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var FeatureToggle = function FeatureToggle() {
  var _useFeatureToggles = (0, _useFeatureToggles2["default"])(),
    _useFeatureToggles$to = _useFeatureToggles.toggles,
    toggles = _useFeatureToggles$to === void 0 ? [] : _useFeatureToggles$to;
  var _useModal = (0, _modals.useModal)({
      Content: _FeatureTogglesModal["default"],
      toggles: toggles
    }),
    modal = _useModal.modal,
    open = _useModal.open;
  if ((0, _lodash.isEmpty)(toggles)) return null;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    className: _FeatureToggleModule["default"].button,
    onClick: open
  }, /*#__PURE__*/_react["default"].createElement(_Toggles["default"], null)), modal);
};
var _default = (0, _hocs.withDevelopmentOnly)( /*#__PURE__*/_react["default"].memo(FeatureToggle));
exports["default"] = _default;
//# sourceMappingURL=FeatureToggle.js.map