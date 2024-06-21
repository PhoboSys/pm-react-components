"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ToggleButton = _interopRequireDefault(require("../common/ToggleButton"));
var _useFeatureToggles2 = _interopRequireDefault(require("../../../features/useFeatureToggles"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var _default = /*#__PURE__*/_react["default"].memo(FeatureToggleButton);
exports["default"] = _default;
//# sourceMappingURL=FeatureToggleButton.js.map