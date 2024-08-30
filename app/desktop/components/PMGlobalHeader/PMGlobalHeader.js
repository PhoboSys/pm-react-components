"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _config = _interopRequireDefault(require("../../../config"));
var _FeatureToggle = require("../FeatureToggle");
var _PMGlobalHeaderProvider = _interopRequireDefault(require("../PMGlobalHeaderProvider"));
var _Navbar = _interopRequireDefault(require("../Navbar"));
var _Header = _interopRequireDefault(require("../Header"));
var _ProfileBar = _interopRequireDefault(require("../ProfileBar"));
var _ConnectBar = _interopRequireDefault(require("../ConnectBar"));
var _StatisticsBar = _interopRequireDefault(require("../StatisticsBar"));
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
    profileBarClassName = _ref.profileBarClassName,
    profileBarInnerClassName = _ref.profileBarInnerClassName,
    _ref$basepath = _ref.basepath,
    basepath = _ref$basepath === void 0 ? "/" : _ref$basepath,
    logoFill = _ref.logoFill,
    logoLabelFill = _ref.logoLabelFill,
    currencyFill = _ref.currencyFill,
    maximumFractionDigits = _ref.maximumFractionDigits,
    maximumFractionDigitsPrecent = _ref.maximumFractionDigitsPrecent,
    mustUserLogin = _ref.mustUserLogin,
    isConnecting = _ref.isConnecting,
    isConnected = _ref.isConnected,
    isConnectBarOpenedControlled = _ref.isConnectBarOpened,
    isStatisticsBarOpenedControlled = _ref.isStatisticsBarOpened,
    account = _ref.account,
    nickname = _ref.nickname,
    statisticsAccount = _ref.statisticsAccount,
    statisticsNickname = _ref.statisticsNickname,
    balance = _ref.balance,
    currency = _ref.currency,
    chainName = _ref.chainName,
    connectors = _ref.connectors,
    activeNavigationItem = _ref.activeNavigationItem,
    statistics = _ref.statistics,
    featureToggles = _ref.featureToggles,
    featureTogglesTitle = _ref.featureTogglesTitle,
    networkStatus = _ref.networkStatus,
    onConnectClick = _ref.onConnectClick,
    onDisconnectClick = _ref.onDisconnectClick,
    onNicknameChanged = _ref.onNicknameChanged,
    onConnectorClick = _ref.onConnectorClick,
    onProfileClick = _ref.onProfileClick,
    onProfileIconClick = _ref.onProfileIconClick,
    onStatisticsBarCloseClick = _ref.onStatisticsBarCloseClick,
    onConnectBarCloseClick = _ref.onConnectBarCloseClick,
    onCurrencyChanged = _ref.onCurrencyChanged,
    onSupportClick = _ref.onSupportClick,
    content = _ref.content,
    children = _ref.children;
  var isConnectBarContolled = isConnectBarOpenedControlled !== undefined;
  var isStatisticsBarContolled = isStatisticsBarOpenedControlled !== undefined;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isConnectBarOpened = _useState2[0],
    setConnectBarOpened = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isStatisticsBarOpened = _useState4[0],
    setStatisticsBarOpened = _useState4[1];
  var openConnectBar = (0, _react.useCallback)(function () {
    return setConnectBarOpened(true);
  }, []);
  var closeConnectBar = (0, _react.useCallback)(function () {
    return setConnectBarOpened(false);
  }, []);
  var handleConnectClick = (0, _react.useCallback)(function () {
    if (onConnectClick) onConnectClick();
    if (!isConnectBarContolled) openConnectBar();
  }, [isConnectBarContolled, openConnectBar, onConnectClick]);
  var handleConnectorClick = (0, _react.useCallback)(function (connectorId) {
    if (onConnectorClick) onConnectorClick(connectorId);
    if (!isConnectBarContolled) closeConnectBar();
  }, [isConnectBarContolled, onConnectorClick, closeConnectBar]);
  var handleConnectBarCloseClick = (0, _react.useCallback)(function () {
    if (onConnectBarCloseClick) onConnectBarCloseClick();
    if (!isConnectBarContolled) closeConnectBar();
  }, [isConnectBarContolled, onConnectBarCloseClick, closeConnectBar]);
  var handleCloseStatisticsBar = (0, _react.useCallback)(function () {
    if (!isStatisticsBarContolled) setStatisticsBarOpened(false);
    if (onStatisticsBarCloseClick) onStatisticsBarCloseClick();
  }, [isStatisticsBarContolled, onStatisticsBarCloseClick]);
  var handleProfileIconClick = (0, _react.useCallback)(function () {
    if (!isStatisticsBarContolled) setStatisticsBarOpened(true);
    if (onProfileIconClick) onProfileIconClick();
  }, [isStatisticsBarContolled, onProfileIconClick]);
  var handleDisconnectClick = (0, _react.useCallback)(function () {
    if (!isStatisticsBarContolled) setStatisticsBarOpened(false);
    if (onDisconnectClick) onDisconnectClick();
  }, [isStatisticsBarContolled, onDisconnectClick]);
  var handleNicknameChange = (0, _react.useCallback)(function (e) {
    if (onNicknameChanged) onNicknameChanged(e);
  }, [onNicknameChanged]);
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
  return /*#__PURE__*/_react["default"].createElement(_FeatureToggle.FeatureTogglesProvider, {
    toggles: featureToggles
  }, /*#__PURE__*/_react["default"].createElement(_PMGlobalHeaderProvider["default"], {
    currencyFill: currencyFill,
    openAuthModal: openAuthModal,
    closeAuthModal: closeAuthModal,
    maximumFractionDigits: maximumFractionDigits,
    maximumFractionDigitsPrecent: maximumFractionDigitsPrecent
  }, /*#__PURE__*/_react["default"].createElement(_Navbar["default"], {
    basepath: basepath,
    logoFill: logoFill,
    logoLabelFill: logoLabelFill,
    active: activeNavigationItem,
    featureTogglesTitle: featureTogglesTitle,
    networkStatus: networkStatus,
    onSupportClick: onSupportClick
  }), /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    className: headerClassName
  }, content, isConnected ? /*#__PURE__*/_react["default"].createElement(_ProfileBar["default"], {
    className: profileBarClassName,
    innerClassName: profileBarInnerClassName,
    balance: balance,
    currency: currency,
    account: account,
    nickname: nickname,
    chainName: chainName,
    onDisconnectClick: onDisconnectClick,
    onClick: onProfileClick,
    onIconClick: handleProfileIconClick,
    onCurrencyChanged: onCurrencyChanged
  }) : /*#__PURE__*/_react["default"].createElement(_Connect["default"], {
    className: connectClassName,
    isConnecting: isConnecting,
    onClick: handleConnectClick
  })), /*#__PURE__*/_react["default"].createElement(_ConnectBar["default"], {
    isOpened: isConnectBarContolled ? isConnectBarOpenedControlled : isConnectBarOpened,
    connectors: connectors,
    onCloseClick: handleConnectBarCloseClick,
    onConnectorClick: handleConnectorClick
  }), /*#__PURE__*/_react["default"].createElement(_StatisticsBar["default"], {
    address: statisticsAccount,
    username: statisticsNickname,
    isSelfView: isConnected && account === statisticsAccount,
    isOpened: isStatisticsBarContolled ? isStatisticsBarOpenedControlled : isStatisticsBarOpened,
    statistics: statistics,
    isConnected: isConnected,
    onCloseClick: handleCloseStatisticsBar,
    onDisconnectClick: handleDisconnectClick,
    onNicknameChanged: handleNicknameChange
  }), children, modal), /*#__PURE__*/_react["default"].createElement("div", {
    id: _config["default"].modal_id
  }));
};
PMGlobalHeader.propTypes = {
  headerClassName: _propTypes["default"].string,
  connectClassName: _propTypes["default"].string,
  profileBarClassName: _propTypes["default"].string,
  profileBarInnerClassName: _propTypes["default"].string,
  basepath: _propTypes["default"].string,
  logoFill: _propTypes["default"].string,
  logoLabelFill: _propTypes["default"].string,
  currencyFill: _propTypes["default"].string,
  maximumFractionDigits: _propTypes["default"].number,
  maximumFractionDigitsPrecent: _propTypes["default"].number,
  mustUserLogin: _propTypes["default"].bool,
  isConnecting: _propTypes["default"].bool,
  isConnected: _propTypes["default"].bool,
  isConnectBarOpened: _propTypes["default"].bool,
  isStatisticsBarOpened: _propTypes["default"].bool,
  account: _propTypes["default"].string,
  nickname: _propTypes["default"].string,
  statisticsAccount: _propTypes["default"].string,
  statisticsNickname: _propTypes["default"].string,
  balance: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  currency: _propTypes["default"].string,
  chainName: _propTypes["default"].string,
  connectors: _propTypes["default"].array,
  activeNavigationItem: _propTypes["default"].string,
  statistics: _propTypes["default"].object,
  featureToggles: _propTypes["default"].object,
  featureTogglesTitle: _propTypes["default"].string,
  networkStatus: _propTypes["default"].string,
  onConnectClick: _propTypes["default"].func,
  onDisconnectClick: _propTypes["default"].func,
  onConnectorClick: _propTypes["default"].func,
  onProfileClick: _propTypes["default"].func,
  onProfileIconClick: _propTypes["default"].func,
  onConnectBarCloseClick: _propTypes["default"].func,
  onNicknameChanged: _propTypes["default"].func,
  onStatisticsBarCloseClick: _propTypes["default"].func,
  onSupportClick: _propTypes["default"].func,
  content: _propTypes["default"].node,
  children: _propTypes["default"].node
};
var _default = exports["default"] = /*#__PURE__*/_react["default"].memo(PMGlobalHeader);
//# sourceMappingURL=PMGlobalHeader.js.map