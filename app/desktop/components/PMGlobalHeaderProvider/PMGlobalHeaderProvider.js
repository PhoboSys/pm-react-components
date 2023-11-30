"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _PMGlobalHeaderProviderContext = _interopRequireDefault(require("./PMGlobalHeaderProviderContext"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var PMGlobalHeaderProvider = function PMGlobalHeaderProvider(_ref) {
  var currencyFill = _ref.currencyFill,
    children = _ref.children,
    openAuthModal = _ref.openAuthModal,
    closeAuthModal = _ref.closeAuthModal;
  var value = (0, _react.useMemo)(function () {
    return {
      currencyFill: currencyFill,
      openAuthModal: openAuthModal,
      closeAuthModal: closeAuthModal
    };
  }, [currencyFill, openAuthModal, closeAuthModal]);
  return /*#__PURE__*/_react["default"].createElement(_PMGlobalHeaderProviderContext["default"].Provider, {
    value: value
  }, children);
};
PMGlobalHeaderProvider.propTypes = {
  currencyFill: _propTypes["default"].string,
  openAuthModal: _propTypes["default"].func,
  closeAuthModal: _propTypes["default"].func
};
var _default = PMGlobalHeaderProvider;
exports["default"] = _default;
//# sourceMappingURL=PMGlobalHeaderProvider.js.map