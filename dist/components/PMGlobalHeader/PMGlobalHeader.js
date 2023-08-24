"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Navbar = _interopRequireDefault(require("../Navbar"));
var _Header = _interopRequireDefault(require("../Header"));
var _ProfileBar = _interopRequireDefault(require("../ProfileBar"));
var _ConnectBar = _interopRequireDefault(require("../ConnectBar"));
var _Connect = _interopRequireDefault(require("../Connect"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var PMGlobalHeader = function PMGlobalHeader(_ref) {
  var headerClassName = _ref.headerClassName,
    connectClassName = _ref.connectClassName,
    profileBarClassName = _ref.profileBarClassName,
    profileBarInnerClassName = _ref.profileBarInnerClassName,
    logoFill = _ref.logoFill,
    logoLabelFill = _ref.logoLabelFill,
    isConnected = _ref.isConnected,
    isConnectBarOpenedControlled = _ref.isConnectBarOpened,
    account = _ref.account,
    balance = _ref.balance,
    currency = _ref.currency,
    chainName = _ref.chainName,
    connectors = _ref.connectors,
    activeNavigationItem = _ref.activeNavigationItem,
    onConnectClick = _ref.onConnectClick,
    onDisconnectClick = _ref.onDisconnectClick,
    onConnectorClick = _ref.onConnectorClick,
    onProfileClick = _ref.onProfileClick,
    onCloseIconClick = _ref.onCloseIconClick,
    children = _ref.children;
  var isContolled = isConnectBarOpenedControlled !== undefined;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isConnectBarOpened = _useState2[0],
    setConnectBarOpened = _useState2[1];
  var openConnectBar = (0, _react.useCallback)(function () {
    return setConnectBarOpened(true);
  }, []);
  var closeConnectBar = (0, _react.useCallback)(function () {
    return setConnectBarOpened(false);
  }, []);
  var handleConnectClick = (0, _react.useCallback)(function () {
    if (onConnectClick) onConnectClick();
    if (!isContolled) openConnectBar();
  }, [isContolled, openConnectBar, onConnectClick]);
  var handleConnectorClick = (0, _react.useCallback)(function (connectorId) {
    if (onConnectorClick) onConnectorClick(connectorId);
    if (!isContolled) closeConnectBar();
  }, [isContolled, onConnectorClick, closeConnectBar]);
  var handleCloseIconClick = (0, _react.useCallback)(function () {
    if (onCloseIconClick) onCloseIconClick();
    if (!isContolled) closeConnectBar();
  }, [isContolled, onCloseIconClick, closeConnectBar]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Navbar["default"], {
    logoFill: logoFill,
    logoLabelFill: logoLabelFill,
    active: activeNavigationItem
  }), /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    className: headerClassName
  }, children, isConnected ? /*#__PURE__*/_react["default"].createElement(_ProfileBar["default"], {
    className: profileBarClassName,
    innerClassName: profileBarInnerClassName,
    balance: balance,
    currency: currency,
    account: account,
    chainName: chainName,
    onDisconnectClick: onDisconnectClick,
    onProfileClick: onProfileClick
  }) : /*#__PURE__*/_react["default"].createElement(_Connect["default"], {
    className: connectClassName,
    onClick: handleConnectClick
  })), /*#__PURE__*/_react["default"].createElement(_ConnectBar["default"], {
    isOpened: isContolled ? isConnectBarOpenedControlled : isConnectBarOpened,
    connectors: connectors,
    onCloseIconClick: handleCloseIconClick,
    onConnectorClick: handleConnectorClick
  }));
};
PMGlobalHeader.propTypes = {
  headerClassName: _propTypes["default"].string,
  connectClassName: _propTypes["default"].string,
  profileBarClassName: _propTypes["default"].string,
  profileBarInnerClassName: _propTypes["default"].string,
  logoFill: _propTypes["default"].string,
  logoLabelFill: _propTypes["default"].string,
  isConnected: _propTypes["default"].bool,
  isConnectBarOpened: _propTypes["default"].bool,
  account: _propTypes["default"].string,
  balance: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  currency: _propTypes["default"].string,
  chainName: _propTypes["default"].string,
  connectors: _propTypes["default"].array,
  activeNavigationItem: _propTypes["default"].string,
  onConnectClick: _propTypes["default"].func,
  onDisconnectClick: _propTypes["default"].func,
  onConnectorClick: _propTypes["default"].func,
  onProfileClick: _propTypes["default"].func,
  onCloseIconClick: _propTypes["default"].func,
  children: _propTypes["default"].node
};
var _default = /*#__PURE__*/_react["default"].memo(PMGlobalHeader);
exports["default"] = _default;
//# sourceMappingURL=PMGlobalHeader.js.map