"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ToggleButton = _interopRequireDefault(require("../common/ToggleButton"));
var _useFeatureToggles2 = _interopRequireDefault(require("../../../features/useFeatureToggles"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var FeatureToggleButton = function FeatureToggleButton(_ref) {
  var className = _ref.className,
    name = _ref.name,
    toggledValue = _ref.toggledValue,
    untoggledValue = _ref.untoggledValue;
  var _useFeatureToggles = (0, _useFeatureToggles2["default"])(),
    set = _useFeatureToggles.set,
    get = _useFeatureToggles.get;
  var toggled = get(name);
  if (toggledValue) toggled = toggled === toggledValue;
  var onToggleClick = (0, _react.useCallback)(function (toggled) {
    if (toggledValue && untoggledValue) {
      set(name, toggled ? toggledValue : untoggledValue);
    } else {
      set(name, toggled);
    }
  }, [set, name, toggledValue, untoggledValue]);
  return /*#__PURE__*/_react["default"].createElement(_ToggleButton["default"], {
    className: className,
    onClick: onToggleClick,
    toggled: toggled
  });
};
var _default = exports["default"] = /*#__PURE__*/_react["default"].memo(FeatureToggleButton);
//# sourceMappingURL=FeatureToggleButton.js.map