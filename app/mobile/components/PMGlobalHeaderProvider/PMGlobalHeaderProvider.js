"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _PMGlobalHeaderProviderContext = _interopRequireDefault(require("./PMGlobalHeaderProviderContext"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var PMGlobalHeaderProvider = function PMGlobalHeaderProvider(_ref) {
  var currencyFill = _ref.currencyFill,
    children = _ref.children,
    openAuthModal = _ref.openAuthModal,
    closeAuthModal = _ref.closeAuthModal,
    maximumFractionDigits = _ref.maximumFractionDigits,
    maximumFractionDigitsPrecent = _ref.maximumFractionDigitsPrecent;
  var value = (0, _react.useMemo)(function () {
    return {
      currencyFill: currencyFill,
      openAuthModal: openAuthModal,
      closeAuthModal: closeAuthModal,
      maximumFractionDigits: maximumFractionDigits,
      maximumFractionDigitsPrecent: maximumFractionDigitsPrecent
    };
  }, [currencyFill, openAuthModal, closeAuthModal, maximumFractionDigits, maximumFractionDigitsPrecent]);
  return /*#__PURE__*/_react["default"].createElement(_PMGlobalHeaderProviderContext["default"].Provider, {
    value: value
  }, children);
};
PMGlobalHeaderProvider.propTypes = {
  currencyFill: _propTypes["default"].string,
  openAuthModal: _propTypes["default"].func,
  closeAuthModal: _propTypes["default"].func,
  maximumFractionDigits: _propTypes["default"].number,
  maximumFractionDigitsPrecent: _propTypes["default"].number
};
var _default = exports["default"] = PMGlobalHeaderProvider;
//# sourceMappingURL=PMGlobalHeaderProvider.js.map