"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Toggles = _interopRequireDefault(require("../SVG/Toggles"));
var _modals = require("../modals");
var _Button = _interopRequireDefault(require("../common/Button"));
var _FeatureTogglesModal = _interopRequireDefault(require("./FeatureTogglesModal"));
var _hocs = require("../../../hocs");
var _FeatureToggleModule = _interopRequireDefault(require("./FeatureToggle.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var FeatureToggle = function FeatureToggle() {
  var _useModal = (0, _modals.useModal)({
      Content: _FeatureTogglesModal["default"]
    }),
    modal = _useModal.modal,
    open = _useModal.open;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    className: _FeatureToggleModule["default"].button,
    onClick: open
  }, /*#__PURE__*/_react["default"].createElement(_Toggles["default"], null)), modal);
};
var _default = (0, _hocs.withDevelopmentOnly)( /*#__PURE__*/_react["default"].memo(FeatureToggle));
exports["default"] = _default;
//# sourceMappingURL=FeatureToggle.js.map