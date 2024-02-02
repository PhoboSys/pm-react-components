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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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