"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _htmlUtils = require("../../../lib/html-utils");
var _ArrowForward = _interopRequireDefault(require("../SVG/ArrowForward"));
var _SupportIcon = _interopRequireDefault(require("../SVG/SupportIcon"));
var _Disconnect = _interopRequireDefault(require("../SVG/Disconnect"));
var _Copy = _interopRequireDefault(require("../common/Copy"));
var _Tabs = require("../common/Tabs");
var _Avatar = _interopRequireDefault(require("../common/Avatar"));
var _useTransition3 = require("../../../hooks/useTransition");
var _PredictorTabContent = _interopRequireDefault(require("./PredictorTabContent"));
var _MentorTabContent = _interopRequireDefault(require("./MentorTabContent"));
var _StakerTabContent = _interopRequireDefault(require("./StakerTabContent"));
var _InvitationLink = _interopRequireDefault(require("./InvitationLink"));
var _AppsMenu = _interopRequireDefault(require("./AppsMenu"));
var _AppInstallButton = _interopRequireDefault(require("./AppInstallButton/AppInstallButton"));
var _Nickname = _interopRequireDefault(require("./Nickname"));
var _StatisticsBarModule = _interopRequireDefault(require("./StatisticsBar.module.scss"));
var _AnimatedButton = _interopRequireDefault(require("../common/AnimatedButton"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var StatisticsBar = function StatisticsBar(_ref) {
  var _statistics$predictor, _statistics$predictor2, _statistics$predictor3, _statistics$mentor, _statistics$mentor2, _statistics$mentor3, _statistics$staker, _statistics$staker2, _statistics$staker3;
  var isOpened = _ref.isOpened,
    address = _ref.address,
    username = _ref.username,
    isSelfView = _ref.isSelfView,
    statistics = _ref.statistics,
    activeNavigationItem = _ref.activeNavigationItem,
    showInstallApp = _ref.showInstallApp,
    onCloseClick = _ref.onCloseClick,
    onDisconnectClick = _ref.onDisconnectClick,
    onInstallAppClick = _ref.onInstallAppClick,
    onSupportClick = _ref.onSupportClick,
    onNicknameChanged = _ref.onNicknameChanged;
  var timeout = 100; //ms
  var _useTransition = (0, _useTransition3.useTransition)(isOpened && !!address, timeout),
    _useTransition2 = _slicedToArray(_useTransition, 2),
    mount = _useTransition2[0],
    opening = _useTransition2[1];
  (0, _react.useEffect)(function () {
    if (isOpened) document.body.style.overflow = 'hidden';else document.body.style.overflow = 'visible';
  }, [isOpened]);
  var stopPropagation = (0, _react.useCallback)(function (e) {
    return e.stopPropagation();
  }, []);
  if (!mount) return null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_StatisticsBarModule["default"].overflow, _defineProperty({}, _StatisticsBarModule["default"].opened, opening)),
    onClick: onCloseClick
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _StatisticsBarModule["default"].container,
    onClick: stopPropagation
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _StatisticsBarModule["default"].top
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: (0, _clsx["default"])(_StatisticsBarModule["default"].action, _defineProperty({}, _StatisticsBarModule["default"].hidden, !isSelfView)),
    onClick: onSupportClick
  }, /*#__PURE__*/_react["default"].createElement(_SupportIcon["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: _StatisticsBarModule["default"].account
  }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
    className: _StatisticsBarModule["default"].icon,
    account: address
  }), /*#__PURE__*/_react["default"].createElement(_Nickname["default"], {
    address: address,
    username: username,
    editable: isSelfView,
    onNicknameChanged: onNicknameChanged
  }), /*#__PURE__*/_react["default"].createElement(_Copy["default"], {
    text: address,
    className: _StatisticsBarModule["default"].address,
    iconClassName: _StatisticsBarModule["default"].copyIcon
  }, (0, _htmlUtils.htmlAddress)(address))), /*#__PURE__*/_react["default"].createElement("a", {
    title: 'Close bar',
    className: _StatisticsBarModule["default"].action,
    onClick: onCloseClick
  }, /*#__PURE__*/_react["default"].createElement(_ArrowForward["default"], null))), /*#__PURE__*/_react["default"].createElement("div", {
    className: _StatisticsBarModule["default"].content
  }, /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs, {
    className: _StatisticsBarModule["default"].tabs,
    activeTabClassName: _StatisticsBarModule["default"].activeTab
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _StatisticsBarModule["default"].head
  }, (statistics === null || statistics === void 0 ? void 0 : statistics.predictor) && /*#__PURE__*/_react["default"].createElement(_Tabs.Tab, null, "Predictor"), (statistics === null || statistics === void 0 ? void 0 : statistics.mentor) && /*#__PURE__*/_react["default"].createElement(_Tabs.Tab, null, "Mentor"), (statistics === null || statistics === void 0 ? void 0 : statistics.staker) && /*#__PURE__*/_react["default"].createElement(_Tabs.Tab, null, "Staker")), isSelfView && showInstallApp && /*#__PURE__*/_react["default"].createElement(_AppInstallButton["default"], {
    onClick: onInstallAppClick
  }), /*#__PURE__*/_react["default"].createElement(_Tabs.TabBody, null, /*#__PURE__*/_react["default"].createElement(_PredictorTabContent["default"], {
    stats: statistics === null || statistics === void 0 || (_statistics$predictor = statistics.predictor) === null || _statistics$predictor === void 0 ? void 0 : _statistics$predictor.stats,
    tokenStats: statistics === null || statistics === void 0 || (_statistics$predictor2 = statistics.predictor) === null || _statistics$predictor2 === void 0 ? void 0 : _statistics$predictor2.tokenStats,
    isLoading: statistics === null || statistics === void 0 || (_statistics$predictor3 = statistics.predictor) === null || _statistics$predictor3 === void 0 ? void 0 : _statistics$predictor3.isLoading
  })), /*#__PURE__*/_react["default"].createElement(_Tabs.TabBody, null, /*#__PURE__*/_react["default"].createElement(_MentorTabContent["default"], {
    stats: statistics === null || statistics === void 0 || (_statistics$mentor = statistics.mentor) === null || _statistics$mentor === void 0 ? void 0 : _statistics$mentor.stats,
    tokenStats: statistics === null || statistics === void 0 || (_statistics$mentor2 = statistics.mentor) === null || _statistics$mentor2 === void 0 ? void 0 : _statistics$mentor2.tokenStats,
    isLoading: statistics === null || statistics === void 0 || (_statistics$mentor3 = statistics.mentor) === null || _statistics$mentor3 === void 0 ? void 0 : _statistics$mentor3.isLoading
  })), /*#__PURE__*/_react["default"].createElement(_Tabs.TabBody, null, /*#__PURE__*/_react["default"].createElement(_StakerTabContent["default"], {
    stats: statistics === null || statistics === void 0 || (_statistics$staker = statistics.staker) === null || _statistics$staker === void 0 ? void 0 : _statistics$staker.stats,
    tokenStats: statistics === null || statistics === void 0 || (_statistics$staker2 = statistics.staker) === null || _statistics$staker2 === void 0 ? void 0 : _statistics$staker2.tokenStats,
    isLoading: statistics === null || statistics === void 0 || (_statistics$staker3 = statistics.staker) === null || _statistics$staker3 === void 0 ? void 0 : _statistics$staker3.isLoading
  }))), isSelfView && /*#__PURE__*/_react["default"].createElement(_AppsMenu["default"], {
    active: activeNavigationItem
  }), isSelfView && /*#__PURE__*/_react["default"].createElement(_InvitationLink["default"], {
    address: address
  }), isSelfView && /*#__PURE__*/_react["default"].createElement(_AnimatedButton["default"], {
    className: _StatisticsBarModule["default"].disconnect,
    onClick: onDisconnectClick,
    borderWidth: "1px"
  }, /*#__PURE__*/_react["default"].createElement(_Disconnect["default"], null), /*#__PURE__*/_react["default"].createElement("span", null, "Untie wallet")))));
};
StatisticsBar.propTypes = {
  isOpened: _propTypes["default"].bool,
  address: _propTypes["default"].string,
  isSelfView: _propTypes["default"].bool,
  showInstallApp: _propTypes["default"].bool,
  statistics: _propTypes["default"].object,
  onCloseClick: _propTypes["default"].func,
  onConnectorClick: _propTypes["default"].func,
  onInstallAppClick: _propTypes["default"].func,
  onSupportClick: _propTypes["default"].func
};
var _default = exports["default"] = /*#__PURE__*/_react["default"].memo(StatisticsBar);
//# sourceMappingURL=StatisticsBar.js.map