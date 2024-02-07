"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _lodash = require("lodash");
var _htmlUtils = require("../../../lib/html-utils");
var _useTransition3 = require("../../../hooks/useTransition");
var _ArrowForward = _interopRequireDefault(require("../SVG/ArrowForward"));
var _Disconnect = _interopRequireDefault(require("../SVG/Disconnect"));
var _Connect = _interopRequireDefault(require("../SVG/Connect"));
var _Copy = _interopRequireDefault(require("../common/Copy"));
var _Tabs = require("../common/Tabs");
var _AccountIcon = _interopRequireDefault(require("../AccountIcon"));
var _PredictorTabContent = _interopRequireDefault(require("./PredictorTabContent"));
var _MentorTabContent = _interopRequireDefault(require("./MentorTabContent"));
var _StakerTabContent = _interopRequireDefault(require("./StakerTabContent"));
var _Edit = _interopRequireDefault(require("../SVG/Edit"));
var _StatisticsBarModule = _interopRequireDefault(require("./StatisticsBar.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var StatisticsBar = function StatisticsBar(_ref) {
  var _statistics$predictor, _statistics$predictor2, _statistics$mentor, _statistics$mentor2, _statistics$staker, _statistics$staker2;
  var isOpened = _ref.isOpened,
    account = _ref.account,
    nickname = _ref.nickname,
    statisticsAccount = _ref.statisticsAccount,
    statisticsNickname = _ref.statisticsNickname,
    statistics = _ref.statistics,
    isConnected = _ref.isConnected,
    onCloseClick = _ref.onCloseClick,
    onDisconnectClick = _ref.onDisconnectClick,
    onNicknameChanged = _ref.onNicknameChanged;
  var address = account;
  var username = nickname;
  var _useState = (0, _react.useState)(username),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    editingNickname = _useState4[0],
    setEditNickname = _useState4[1];
  var isSelfView = isConnected && (!statisticsAccount || account === statisticsAccount);
  var isInputVisible = editingNickname || !username;
  if (!isSelfView) {
    address = statisticsAccount;
    username = statisticsNickname;
  }
  username = username || '';
  var timeout = 100; //ms
  var _useTransition = (0, _useTransition3.useTransition)(isOpened && !!address, timeout),
    _useTransition2 = _slicedToArray(_useTransition, 2),
    mount = _useTransition2[0],
    opening = _useTransition2[1];
  var handleNicknameSave = (0, _react.useCallback)(function () {
    if (!inputValue) return;
    if (!onNicknameChanged) return;
    setEditNickname(false);
    onNicknameChanged({
      address: address,
      nickname: (0, _lodash.trim)(inputValue).substring(0, 35)
    });
  }, [onNicknameChanged, inputValue, address]);
  (0, _react.useEffect)(function () {
    if (inputValue !== username) setInputValue(username);
  }, [username]);
  var changingNickname = (0, _react.useCallback)(function (e) {
    setInputValue(e.target.value);
  }, [setInputValue]);
  if (!mount) return null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_StatisticsBarModule["default"].container, _defineProperty({}, _StatisticsBarModule["default"].opened, opening))
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _StatisticsBarModule["default"].top
  }, /*#__PURE__*/_react["default"].createElement("a", {
    title: 'Disconnect',
    className: (0, _clsx["default"])(_StatisticsBarModule["default"].action, _StatisticsBarModule["default"].disconnect, _defineProperty({}, _StatisticsBarModule["default"].hidden, !isSelfView)),
    onClick: onDisconnectClick
  }, /*#__PURE__*/_react["default"].createElement(_Disconnect["default"], null), /*#__PURE__*/_react["default"].createElement(_Connect["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: _StatisticsBarModule["default"].account
  }, /*#__PURE__*/_react["default"].createElement(_AccountIcon["default"], {
    className: _StatisticsBarModule["default"].icon,
    account: address
  }), !isSelfView && /*#__PURE__*/_react["default"].createElement("div", {
    className: _StatisticsBarModule["default"].nickname
  }, username), isSelfView && !isInputVisible && /*#__PURE__*/_react["default"].createElement("div", {
    className: _StatisticsBarModule["default"].nickname
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: _StatisticsBarModule["default"].text,
    title: username
  }, username), /*#__PURE__*/_react["default"].createElement("a", {
    className: _StatisticsBarModule["default"].edit,
    onClick: setEditNickname
  }, /*#__PURE__*/_react["default"].createElement(_Edit["default"], {
    className: _StatisticsBarModule["default"].editicon
  }))), isSelfView && isInputVisible && /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_StatisticsBarModule["default"].nickname, _StatisticsBarModule["default"].editing)
  }, /*#__PURE__*/_react["default"].createElement("input", {
    autoFocus: true,
    className: _StatisticsBarModule["default"].input,
    value: inputValue,
    onChange: changingNickname,
    placeholder: 'Nickname',
    maxLength: "35"
  }), !!inputValue && /*#__PURE__*/_react["default"].createElement("a", {
    className: _StatisticsBarModule["default"].save,
    onClick: handleNicknameSave
  }, "Save")), /*#__PURE__*/_react["default"].createElement(_Copy["default"], {
    text: address,
    className: _StatisticsBarModule["default"].address,
    iconClassName: _StatisticsBarModule["default"].copyIcon
  }, (0, _htmlUtils.htmlAddress)(address))), /*#__PURE__*/_react["default"].createElement("a", {
    title: 'Close bar',
    className: _StatisticsBarModule["default"].action,
    onClick: onCloseClick
  }, /*#__PURE__*/_react["default"].createElement(_ArrowForward["default"], null))), /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs, {
    className: _StatisticsBarModule["default"].tabs,
    activeTabClassName: _StatisticsBarModule["default"].activeTab
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _StatisticsBarModule["default"].head
  }, /*#__PURE__*/_react["default"].createElement(_Tabs.Tab, null, "Oracler"), /*#__PURE__*/_react["default"].createElement(_Tabs.Tab, null, "Mentor"), /*#__PURE__*/_react["default"].createElement(_Tabs.Tab, null, "Staker")), /*#__PURE__*/_react["default"].createElement(_Tabs.TabBody, null, /*#__PURE__*/_react["default"].createElement(_PredictorTabContent["default"], {
    stats: statistics === null || statistics === void 0 || (_statistics$predictor = statistics.predictor) === null || _statistics$predictor === void 0 ? void 0 : _statistics$predictor.stats,
    tokenStats: statistics === null || statistics === void 0 || (_statistics$predictor2 = statistics.predictor) === null || _statistics$predictor2 === void 0 ? void 0 : _statistics$predictor2.tokenStats
  })), /*#__PURE__*/_react["default"].createElement(_Tabs.TabBody, null, /*#__PURE__*/_react["default"].createElement(_MentorTabContent["default"], {
    stats: statistics === null || statistics === void 0 || (_statistics$mentor = statistics.mentor) === null || _statistics$mentor === void 0 ? void 0 : _statistics$mentor.stats,
    tokenStats: statistics === null || statistics === void 0 || (_statistics$mentor2 = statistics.mentor) === null || _statistics$mentor2 === void 0 ? void 0 : _statistics$mentor2.tokenStats
  })), /*#__PURE__*/_react["default"].createElement(_Tabs.TabBody, null, /*#__PURE__*/_react["default"].createElement(_StakerTabContent["default"], {
    stats: statistics === null || statistics === void 0 || (_statistics$staker = statistics.staker) === null || _statistics$staker === void 0 ? void 0 : _statistics$staker.stats,
    tokenStats: statistics === null || statistics === void 0 || (_statistics$staker2 = statistics.staker) === null || _statistics$staker2 === void 0 ? void 0 : _statistics$staker2.tokenStats
  }))));
};
StatisticsBar.propTypes = {
  isOpened: _propTypes["default"].bool,
  account: _propTypes["default"].string,
  statisticsAccount: _propTypes["default"].string,
  connectors: _propTypes["default"].array,
  statistics: _propTypes["default"].object,
  isConnected: _propTypes["default"].bool,
  onCloseClick: _propTypes["default"].func,
  onConnectorClick: _propTypes["default"].func,
  onNicknameChanged: _propTypes["default"].func
};
var _default = exports["default"] = /*#__PURE__*/_react["default"].memo(StatisticsBar);
//# sourceMappingURL=StatisticsBar.js.map