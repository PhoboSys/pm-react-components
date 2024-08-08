"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactModal = _interopRequireDefault(require("react-modal"));
var _config = _interopRequireDefault(require("../../../../config"));
var _CloseIcon = _interopRequireDefault(require("../../SVG/CloseIcon"));
var _Button = _interopRequireDefault(require("../../common/Button"));
var _PrimaryModalModule = _interopRequireDefault(require("./PrimaryModal.module.scss"));
var _excluded = ["children", "close", "hideClose"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var modalClasses = {
  base: _PrimaryModalModule["default"].base,
  afterOpen: _PrimaryModalModule["default"].afterOpen,
  beforeClose: _PrimaryModalModule["default"].beforeClose
};
var modalOverlayClasses = {
  base: _PrimaryModalModule["default"].overlayBase,
  afterOpen: _PrimaryModalModule["default"].afterOpenOverlay,
  beforeClose: _PrimaryModalModule["default"].beforeCloseOverlay
};
var PrimaryModal = function PrimaryModal(_ref) {
  var children = _ref.children,
    close = _ref.close,
    hideClose = _ref.hideClose,
    modalProps = _objectWithoutProperties(_ref, _excluded);
  var parentSelector = (0, _react.useCallback)(function () {
    return document.getElementById(_config["default"].modal_id);
  }, []);
  var appEl = (0, _react.useMemo)(function () {
    return document.getElementById(_config["default"].react_mount_element_id);
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_reactModal["default"], _extends({
    appElement: appEl,
    closeTimeoutMS: 300,
    className: modalClasses,
    overlayClassName: modalOverlayClasses,
    onRequestClose: close,
    parentSelector: parentSelector
  }, modalProps), !hideClose && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: close,
    className: _PrimaryModalModule["default"].close
  }, /*#__PURE__*/_react["default"].createElement(_CloseIcon["default"], null)), children);
};
var _default = exports["default"] = PrimaryModal;
//# sourceMappingURL=PrimaryModal.js.map