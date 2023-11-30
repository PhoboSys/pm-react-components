"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _config = _interopRequireDefault(require("../../../config"));
var _PMGlobalHeaderProvider = _interopRequireDefault(require("../PMGlobalHeaderProvider"));
var _StatisticsBar = _interopRequireDefault(require("../StatisticsBar"));
var _Header = _interopRequireDefault(require("../Header"));
var _Connect = _interopRequireDefault(require("../Connect"));
var _AuthModal = _interopRequireDefault(require("../AuthModal"));
var _modals = require("../modals");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var PMGlobalHeader = function PMGlobalHeader(_ref) {
  var headerClassName = _ref.headerClassName,
    _ref$basepath = _ref.basepath,
    basepath = _ref$basepath === void 0 ? "/" : _ref$basepath,
    currencyFill = _ref.currencyFill,
    mustUserLogin = _ref.mustUserLogin,
    account = _ref.account,
    statisticsAccount = _ref.statisticsAccount,
    statistics = _ref.statistics,
    connectors = _ref.connectors,
    activeNavigationItem = _ref.activeNavigationItem,
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
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_PMGlobalHeaderProvider["default"], {
    currencyFill: currencyFill,
    openAuthModal: openAuthModal,
    closeAuthModal: closeAuthModal
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    className: headerClassName,
    basepath: basepath,
    activeNavigationItem: activeNavigationItem,
    isConnected: isConnected,
    account: account,
    onProfileClick: handleProfileClick
  }, content), !isConnected && /*#__PURE__*/_react["default"].createElement(_Connect["default"], {
    onClick: handleConnectClick
  }), /*#__PURE__*/_react["default"].createElement(_StatisticsBar["default"], {
    account: account,
    statisticsAccount: statisticsAccount,
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
  isConnected: _propTypes["default"].bool,
  isStatisticsBarOpened: _propTypes["default"].bool,
  onConnectorClick: _propTypes["default"].func,
  onProfileClick: _propTypes["default"].func,
  onConnectClick: _propTypes["default"].func,
  onDisconnectClick: _propTypes["default"].func,
  onStatisticsBarCloseClick: _propTypes["default"].func,
  content: _propTypes["default"].node,
  children: _propTypes["default"].node
};
var _default = /*#__PURE__*/_react["default"].memo(PMGlobalHeader);
exports["default"] = _default;
//# sourceMappingURL=PMGlobalHeader.js.map