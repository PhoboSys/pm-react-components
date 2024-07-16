"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _lodash = require("lodash");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Button = _interopRequireDefault(require("../common/Button"));
var _CloseIcon = _interopRequireDefault(require("../SVG/CloseIcon"));
var _FeatureToggleButton = _interopRequireDefault(require("./FeatureToggleButton"));
var _FeatureTogglesModalModule = _interopRequireDefault(require("./FeatureTogglesModal.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var FeatureTogglesModal = function FeatureTogglesModal(_ref) {
  var toggles = _ref.toggles,
    close = _ref.close,
    title = _ref.title;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _FeatureTogglesModalModule["default"].container
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _FeatureTogglesModalModule["default"].header
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: _FeatureTogglesModalModule["default"].title
  }, title), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: close,
    className: _FeatureTogglesModalModule["default"].close
  }, /*#__PURE__*/_react["default"].createElement(_CloseIcon["default"], null))), /*#__PURE__*/_react["default"].createElement("ul", {
    className: _FeatureTogglesModalModule["default"].list
  }, (0, _lodash.map)(toggles, function (toggle, name) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      className: _FeatureTogglesModalModule["default"].item,
      key: name
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: _FeatureTogglesModalModule["default"].left
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: _FeatureTogglesModalModule["default"].label
    }, toggle.label), toggle.description && /*#__PURE__*/_react["default"].createElement("div", {
      className: _FeatureTogglesModalModule["default"].description
    }, toggle.description)), /*#__PURE__*/_react["default"].createElement("div", {
      className: _FeatureTogglesModalModule["default"].right
    }, /*#__PURE__*/_react["default"].createElement(_FeatureToggleButton["default"], {
      name: name,
      toggledValue: toggle.toggledValue,
      untoggledValue: toggle.untoggledValue
    })));
  })));
};
FeatureTogglesModal.propTypes = {
  toggles: _propTypes["default"].object,
  close: _propTypes["default"].func,
  title: _propTypes["default"].string
};
var _default = exports["default"] = /*#__PURE__*/_react["default"].memo(FeatureTogglesModal);
//# sourceMappingURL=FeatureTogglesModal.js.map