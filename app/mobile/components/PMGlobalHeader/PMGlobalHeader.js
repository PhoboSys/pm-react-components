"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _FeatureToggle = require("../FeatureToggle");
var _config = _interopRequireDefault(require("../../../config"));
var _PMGlobalHeaderProvider = _interopRequireDefault(require("../PMGlobalHeaderProvider"));
var _StatisticsBar = _interopRequireDefault(require("../StatisticsBar"));
var _Header = _interopRequireDefault(require("../Header"));
var _Connect = _interopRequireDefault(require("../Connect"));
var _AuthModal = _interopRequireDefault(require("../AuthModal"));
var _modals = require("../modals");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var PMGlobalHeader = function PMGlobalHeader(_ref) {
  var headerClassName = _ref.headerClassName,
    connectClassName = _ref.connectClassName,
    _ref$basepath = _ref.basepath,
    basepath = _ref$basepath === void 0 ? "/" : _ref$basepath,
    currencyFill = _ref.currencyFill,
    hideProfile = _ref.hideProfile,
    featureToggles = _ref.featureToggles,
    mustUserLogin = _ref.mustUserLogin,
    account = _ref.account,
    statisticsAccount = _ref.statisticsAccount,
    statistics = _ref.statistics,
    connectors = _ref.connectors,
    activeNavigationItem = _ref.activeNavigationItem,
    isConnecting = _ref.isConnecting,
    isConnected = _ref.isConnected,
    isStatisticsBarOpenedControlled = _ref.isStatisticsBarOpened,
    onProfileClick = _ref.onProfileClick,
    onConnectClick = _ref.onConnectClick,
    onConnectorClick = _ref.onConnectorClick,
    onDisconnectClick = _ref.onDisconnectClick,
    onStatisticsBarCloseClick = _ref.onStatisticsBarCloseClick,
    content = _ref.content,
    children = _ref.children;
  var _useModal = (0, _modals.useModal)({
      Content: _AuthModal["default"],
      hideClose: true,
      shouldCloseOnOverlayClick: false,
      openOnMount: mustUserLogin,
      onConnectorClick: onConnectorClick,
      connectors: connectors,
      isConnected: isConnected
    }),
    modal = _useModal.modal,
    openAuthModal = _useModal.open,
    closeAuthModal = _useModal.close;
  var isStatisticsBarContolled = isStatisticsBarOpenedControlled !== undefined;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isStatisticsBarOpened = _useState2[0],
    setStatisticsBarOpened = _useState2[1];
  var openStatisticBar = (0, _react.useCallback)(function () {
    return !isStatisticsBarContolled && setStatisticsBarOpened(true);
  }, [isStatisticsBarContolled]);
  var closeStatisticBar = (0, _react.useCallback)(function () {
    return !isStatisticsBarContolled && setStatisticsBarOpened(false);
  }, [isStatisticsBarContolled]);
  var handleConnectClick = (0, _react.useCallback)(function () {
    onConnectClick && onConnectClick();
    openAuthModal({
      hideClose: false,
      shouldCloseOnOverlayClick: true
    });
  }, [onConnectClick, openAuthModal]);
  var handleProfileClick = (0, _react.useCallback)(function (address) {
    onProfileClick && onProfileClick(address);
    openStatisticBar();
  }, [openStatisticBar, onProfileClick]);
  var handleCloseStatisticsBar = (0, _react.useCallback)(function () {
    if (onStatisticsBarCloseClick) onStatisticsBarCloseClick();
    closeStatisticBar();
  }, [closeStatisticBar, onStatisticsBarCloseClick]);
  var handleDisconnectClick = (0, _react.useCallback)(function () {
    if (onDisconnectClick) onDisconnectClick();
    closeStatisticBar();
  }, [closeStatisticBar, onDisconnectClick]);
  return /*#__PURE__*/_react["default"].createElement(_FeatureToggle.FeatureTogglesProvider, {
    toggles: featureToggles
  }, /*#__PURE__*/_react["default"].createElement(_PMGlobalHeaderProvider["default"], {
    currencyFill: currencyFill,
    openAuthModal: openAuthModal,
    closeAuthModal: closeAuthModal
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    className: headerClassName,
    isConnected: isConnected,
    account: account,
    hideProfile: hideProfile,
    onProfileClick: handleProfileClick
  }, content), !isConnected && /*#__PURE__*/_react["default"].createElement(_Connect["default"], {
    className: connectClassName,
    isConnecting: isConnecting,
    onClick: handleConnectClick
  }), /*#__PURE__*/_react["default"].createElement(_StatisticsBar["default"], {
    address: statisticsAccount,
    activeNavigationItem: activeNavigationItem,
    isSelfView: isConnected && account === statisticsAccount,
    isOpened: isStatisticsBarContolled ? isStatisticsBarOpenedControlled : isStatisticsBarOpened,
    statistics: statistics,
    onCloseClick: handleCloseStatisticsBar,
    onDisconnectClick: handleDisconnectClick
  }), children, modal), /*#__PURE__*/_react["default"].createElement("div", {
    id: _config["default"].modal_id
  }));
};
PMGlobalHeader.propTypes = {
  headerClassName: _propTypes["default"].string,
  basepath: _propTypes["default"].string,
  currencyFill: _propTypes["default"].string,
  mustUserLogin: _propTypes["default"].bool,
  account: _propTypes["default"].string,
  statisticsAccount: _propTypes["default"].string,
  connectors: _propTypes["default"].array,
  activeNavigationItem: _propTypes["default"].string,
  statistics: _propTypes["default"].object,
  isConnecting: _propTypes["default"].bool,
  isConnected: _propTypes["default"].bool,
  isStatisticsBarOpened: _propTypes["default"].bool,
  onConnectorClick: _propTypes["default"].func,
  onProfileClick: _propTypes["default"].func,
  onConnectClick: _propTypes["default"].func,
  onDisconnectClick: _propTypes["default"].func,
  onStatisticsBarCloseClick: _propTypes["default"].func,
  content: _propTypes["default"].node,
  children: _propTypes["default"].node,
  featureToggles: _propTypes["default"].object
};
var _default = exports["default"] = /*#__PURE__*/_react["default"].memo(PMGlobalHeader);
//# sourceMappingURL=PMGlobalHeader.js.map