"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _constants = require("../../../constants");
var _Button = _interopRequireDefault(require("../common/Button"));
var _Sync = _interopRequireDefault(require("../SVG/Sync"));
var _WiFiWarning = _interopRequireDefault(require("../SVG/WiFiWarning"));
var _CloseIcon = _interopRequireDefault(require("../SVG/CloseIcon"));
var _NetworkModalModule = _interopRequireDefault(require("./NetworkModal.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var NetworkModal = function NetworkModal(_ref) {
  var className = _ref.className,
    networkStatus = _ref.networkStatus,
    close = _ref.close,
    rows = _ref.rows;
  if (!networkStatus) return null;
  if (networkStatus === _constants.NETWORK_STATUS.SUCCESS) return null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_NetworkModalModule["default"].container, className)
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: close,
    className: _NetworkModalModule["default"].close
  }, /*#__PURE__*/_react["default"].createElement(_CloseIcon["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: _NetworkModalModule["default"].content
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_NetworkModalModule["default"].wifi, _defineProperty(_defineProperty({}, _NetworkModalModule["default"].error, networkStatus === _constants.NETWORK_STATUS.ERROR), _NetworkModalModule["default"].warning, networkStatus === _constants.NETWORK_STATUS.WARNING))
  }, networkStatus === _constants.NETWORK_STATUS.WARNING && /*#__PURE__*/_react["default"].createElement(_Sync["default"], null), networkStatus === _constants.NETWORK_STATUS.ERROR && /*#__PURE__*/_react["default"].createElement(_WiFiWarning["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: _NetworkModalModule["default"].description
  }, networkStatus === _constants.NETWORK_STATUS.WARNING && 'Data is currently out of date. Please wait while it is syncing...', networkStatus === _constants.NETWORK_STATUS.ERROR && 'Unable to sync data. Check internet connection'), /*#__PURE__*/_react["default"].createElement("div", {
    className: _NetworkModalModule["default"].table
  }, rows.map(function (_ref2) {
    var name = _ref2.name,
      value = _ref2.value;
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: name,
      className: _NetworkModalModule["default"].row
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: _NetworkModalModule["default"].name
    }, name), /*#__PURE__*/_react["default"].createElement("div", {
      className: _NetworkModalModule["default"].value
    }, value));
  }))));
};
NetworkModal.propTypes = {
  className: _propTypes["default"].string,
  rows: _propTypes["default"].array,
  networkStatus: _propTypes["default"].string,
  close: _propTypes["default"].func
};
var _default = exports["default"] = NetworkModal;
//# sourceMappingURL=NetworkModal.js.map