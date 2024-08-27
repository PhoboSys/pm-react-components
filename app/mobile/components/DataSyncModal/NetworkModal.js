"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _lodash = require("lodash");
var _clsx = _interopRequireDefault(require("clsx"));
var _constants = require("../../../constants");
var _CloseIcon = _interopRequireDefault(require("@components/SVG/CloseIcon"));
var _Sync = _interopRequireDefault(require("@components/SVG/Sync"));
var _WiFiWarning = _interopRequireDefault(require("@components/SVG/WiFiWarning"));
var _Button = _interopRequireDefault(require("@components/common/Button"));
var _dateUtils = require("../../../lib/date-utils");
var _htmlUtils = require("../../../lib/html-utils");
var _hooks = require("@hooks");
var _state = require("@state");
var _getters = require("@state/getters");
var _DataSyncModalModule = _interopRequireDefault(require("./DataSyncModal.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var modalClasses = {
  base: _DataSyncModalModule["default"].overlayBase
};
var ContentModal = function ContentModal(_ref) {
  var _ref$bcblock = _ref.bcblock,
    bcblock = _ref$bcblock === void 0 ? {} : _ref$bcblock,
    _ref$latestprice = _ref.latestprice,
    latestprice = _ref$latestprice === void 0 ? {} : _ref$latestprice,
    networkStatus = _ref.networkStatus,
    close = _ref.close;
  var _useTranslation = (0, _hooks.useTranslation)(),
    t = _useTranslation.t;
  if ((0, _lodash.isEmpty)(bcblock)) return null;
  if ((0, _lodash.isEmpty)(latestprice)) return null;
  if (!networkStatus) return null;
  if (networkStatus === _constants.NETWORK_STATUS.SUCCESS) return null;
  var blockAge = (0, _dateUtils.formatDistanceUnixTS)(bcblock.timestamp);
  var blockNumber = bcblock.number;
  var priceAge = (0, _dateUtils.formatDistanceUnixTS)(latestprice.timestamp);
  var price = (0, _htmlUtils.htmlCurrentySymboled)(latestprice.value, 'USD');
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _DataSyncModalModule["default"].container
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: close,
    className: _DataSyncModalModule["default"].close
  }, /*#__PURE__*/_react["default"].createElement(_CloseIcon["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: _DataSyncModalModule["default"].content
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_DataSyncModalModule["default"].wifi, _defineProperty(_defineProperty({}, _DataSyncModalModule["default"].error, networkStatus === _constants.NETWORK_STATUS.ERROR), _DataSyncModalModule["default"].warning, networkStatus === _constants.NETWORK_STATUS.WARNING))
  }, networkStatus === _constants.NETWORK_STATUS.WARNING && /*#__PURE__*/_react["default"].createElement(_Sync["default"], null), networkStatus === _constants.NETWORK_STATUS.ERROR && /*#__PURE__*/_react["default"].createElement(_WiFiWarning["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: _DataSyncModalModule["default"].description
  }, networkStatus === _constants.NETWORK_STATUS.WARNING && t('Data is currently out of date. Please wait while it is syncing...'), networkStatus === _constants.NETWORK_STATUS.ERROR && t('Unable to sync data. Check internet connection')), /*#__PURE__*/_react["default"].createElement("div", {
    className: _DataSyncModalModule["default"].table
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _DataSyncModalModule["default"].row
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _DataSyncModalModule["default"].name
  }, t('Block number')), /*#__PURE__*/_react["default"].createElement("div", {
    className: _DataSyncModalModule["default"].value
  }, blockNumber)), /*#__PURE__*/_react["default"].createElement("div", {
    className: _DataSyncModalModule["default"].row
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _DataSyncModalModule["default"].name
  }, t('Block age')), /*#__PURE__*/_react["default"].createElement("div", {
    className: _DataSyncModalModule["default"].value
  }, blockAge)), /*#__PURE__*/_react["default"].createElement("div", {
    className: _DataSyncModalModule["default"].row
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _DataSyncModalModule["default"].name
  }, t('Latest price')), /*#__PURE__*/_react["default"].createElement("div", {
    className: _DataSyncModalModule["default"].value
  }, price)), /*#__PURE__*/_react["default"].createElement("div", {
    className: _DataSyncModalModule["default"].row
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _DataSyncModalModule["default"].name
  }, t('Price age')), /*#__PURE__*/_react["default"].createElement("div", {
    className: _DataSyncModalModule["default"].value
  }, priceAge)))));
};
var DataSyncModal = function DataSyncModal(_ref2) {
  var bcblock = _ref2.bcblock,
    latestprice = _ref2.latestprice,
    networkStatus = _ref2.networkStatus;
  var _useModal = (0, _hooks.useModal)({
      type: 'primary',
      Content: ContentModal,
      hideClose: true,
      modalClasses: modalClasses
    }),
    modal = _useModal.modal,
    isOpen = _useModal.isOpen,
    open = _useModal.open,
    close = _useModal.close;
  (0, _hooks.useScheduledCommand)(function () {
    if ((0, _lodash.isEmpty)(bcblock)) return;
    if ((0, _lodash.isEmpty)(latestprice)) return;
    if (networkStatus === _constants.NETWORK_STATUS.WARNING || networkStatus === _constants.NETWORK_STATUS.ERROR) {
      open({
        bcblock: bcblock,
        latestprice: latestprice,
        networkStatus: networkStatus
      });
    } else isOpen && close();
  }, [isOpen, open, close, bcblock, latestprice, networkStatus]);
  return modal;
};
var _default = exports["default"] = (0, _state.connect)(function (state) {
  return {
    bcblock: (0, _getters.getLatestbcBlock)(state),
    latestprice: (0, _getters.getActiveGameChartDateLatestPrice)(state),
    networkStatus: (0, _getters.getNetworkStatus)(state)
  };
})( /*#__PURE__*/_react["default"].memo(DataSyncModal));
//# sourceMappingURL=NetworkModal.js.map