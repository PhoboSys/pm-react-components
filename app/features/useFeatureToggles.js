"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _FeatureTogglesProviderContext = _interopRequireDefault(require("./FeatureTogglesProviderContext"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var useFeatureToggles = function useFeatureToggles() {
  var data = (0, _react.useContext)(_FeatureTogglesProviderContext["default"]);
  return data;
};
var _default = useFeatureToggles;
exports["default"] = _default;
//# sourceMappingURL=useFeatureToggles.js.map