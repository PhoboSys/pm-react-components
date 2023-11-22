"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _PMGlobalHeaderProviderContext = _interopRequireDefault(require("./PMGlobalHeaderProviderContext"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var useGHProvider = function useGHProvider() {
  var data = (0, _react.useContext)(_PMGlobalHeaderProviderContext["default"]);
  return data;
};
var _default = useGHProvider;
exports["default"] = _default;
//# sourceMappingURL=useGHProvider.js.map