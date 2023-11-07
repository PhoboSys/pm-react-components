"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Header = _interopRequireDefault(require("../Header"));
var _Connect = _interopRequireDefault(require("../Connect"));
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
    account = _ref.account,
    activeNavigationItem = _ref.activeNavigationItem,
    isConnected = _ref.isConnected,
    isConnectBarOpenedControlled = _ref.isConnectBarOpened,
    isStatisticsBarOpenedControlled = _ref.isStatisticsBarOpened,
    onProfileClick = _ref.onProfileClick,
    onConnectClick = _ref.onConnectClick,
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
    return !isConnectBarContolled && setConnectBarOpened(true);
  }, [isConnectBarContolled]);
  var closeConnectBar = (0, _react.useCallback)(function () {
    return !isConnectBarContolled && setConnectBarOpened(false);
  }, [isConnectBarContolled]);
  var openStatisticBar = (0, _react.useCallback)(function () {
    return !isStatisticsBarContolled && setStatisticsBarOpened(true);
  }, [isStatisticsBarContolled]);
  var closeStatisticBar = (0, _react.useCallback)(function () {
    return !isStatisticsBarContolled && setStatisticsBarOpened(false);
  }, [isStatisticsBarContolled]);
  var handleConnectClick = (0, _react.useCallback)(function () {
    onConnectClick && onConnectClick();
    openConnectBar();
  }, [openConnectBar, onConnectClick]);
  var handleProfileClick = (0, _react.useCallback)(function (address) {
    onProfileClick && onProfileClick(address);
    openStatisticBar();
  }, [openStatisticBar, onProfileClick]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    className: headerClassName,
    basepath: basepath,
    activeNavigationItem: activeNavigationItem,
    isConnected: isConnected,
    account: account,
    onProfileClick: handleProfileClick,
    onConnectClick: handleConnectClick
  }, children), !isConnected && /*#__PURE__*/_react["default"].createElement(_Connect["default"], {
    onClick: onConnectClick
  }));
};
PMGlobalHeader.propTypes = {
  headerClassName: _propTypes["default"].string,
  basepath: _propTypes["default"].string,
  account: _propTypes["default"].string,
  activeNavigationItem: _propTypes["default"].string,
  isConnected: _propTypes["default"].bool,
  isConnectBarOpened: _propTypes["default"].bool,
  isStatisticsBarOpened: _propTypes["default"].bool,
  onProfileClick: _propTypes["default"].func,
  onConnectClick: _propTypes["default"].func,
  children: _propTypes["default"].node
};
var _default = /*#__PURE__*/_react["default"].memo(PMGlobalHeader);
exports["default"] = _default;
//# sourceMappingURL=PMGlobalHeader.js.map