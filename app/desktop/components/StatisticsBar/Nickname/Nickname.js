"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _lodash = require("lodash");
var _clsx = _interopRequireDefault(require("clsx"));
var _Edit = _interopRequireDefault(require("../../SVG/Edit"));
var _UserHint = _interopRequireDefault(require("../../SVG/UserHint"));
var _CloseIcon = _interopRequireDefault(require("../../SVG/CloseIcon"));
var _useTransition3 = require("../../../../hooks/useTransition");
var _NicknameModule = _interopRequireDefault(require("./Nickname.module.scss"));
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
var localStorageSelector = 'pm-global-header-username-hint-closed';
var Nickname = function Nickname(_ref) {
  var address = _ref.address,
    username = _ref.username,
    editable = _ref.editable,
    collapsed = _ref.collapsed,
    onNicknameChanged = _ref.onNicknameChanged;
  var _useState = (0, _react.useState)(username),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    editingNickname = _useState4[0],
    setEditNickname = _useState4[1];
  var _useState5 = (0, _react.useState)(!username && localStorage.getItem(localStorageSelector) !== 'true'),
    _useState6 = _slicedToArray(_useState5, 2),
    showHint = _useState6[0],
    setShowHint = _useState6[1];
  var timeout = 100; //ms
  var _useTransition = (0, _useTransition3.useTransition)(showHint, timeout),
    _useTransition2 = _slicedToArray(_useTransition, 2),
    mountHint = _useTransition2[0],
    showingHint = _useTransition2[1];
  var isEdit = editable && (editingNickname || !username);
  var handleNicknameSave = (0, _react.useCallback)(function () {
    if (!inputValue) return;
    if (!onNicknameChanged) return;
    closeHint();
    setEditNickname(false);
    onNicknameChanged({
      address: address,
      nickname: (0, _lodash.trim)(inputValue).substring(0, 35)
    });
  }, [onNicknameChanged, inputValue, address]);
  var changingNickname = (0, _react.useCallback)(function (e) {
    setInputValue(e.target.value);
  }, [setInputValue]);
  var closeHint = (0, _react.useCallback)(function () {
    localStorage.setItem(localStorageSelector, true);
    setShowHint(false);
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_NicknameModule["default"].container, _defineProperty({}, _NicknameModule["default"].collapsed, collapsed))
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_NicknameModule["default"].nickname, _defineProperty({}, _NicknameModule["default"].editing, isEdit))
  }, isEdit && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("input", {
    autoFocus: !collapsed,
    className: _NicknameModule["default"].input,
    value: inputValue,
    onChange: changingNickname,
    maxLength: "35",
    id: "nickname"
  }), /*#__PURE__*/_react["default"].createElement("label", {
    className: (0, _clsx["default"])(_defineProperty({}, _NicknameModule["default"].hasValue, inputValue)),
    htmlFor: "nickname"
  }, "User name"), !!inputValue && /*#__PURE__*/_react["default"].createElement("a", {
    className: _NicknameModule["default"].save,
    onClick: handleNicknameSave
  }, "Save name")), !isEdit && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
    className: _NicknameModule["default"].text,
    title: username
  }, username), editable && /*#__PURE__*/_react["default"].createElement("a", {
    className: _NicknameModule["default"].edit,
    onClick: setEditNickname
  }, /*#__PURE__*/_react["default"].createElement(_Edit["default"], {
    className: _NicknameModule["default"].editicon
  }))), mountHint && !collapsed && editable && /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_NicknameModule["default"].hint, _defineProperty({}, _NicknameModule["default"].showingHint, showingHint))
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: _NicknameModule["default"].close,
    onClick: closeHint
  }, /*#__PURE__*/_react["default"].createElement(_CloseIcon["default"], null)), /*#__PURE__*/_react["default"].createElement(_UserHint["default"], {
    className: _NicknameModule["default"].icon
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: _NicknameModule["default"].content
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: _NicknameModule["default"].title
  }, "User name"), /*#__PURE__*/_react["default"].createElement("span", {
    className: _NicknameModule["default"].description
  }, "Add a Name to your account that other players will see.")))));
};
Nickname.propTypes = {
  address: _propTypes["default"].string,
  username: _propTypes["default"].string,
  editable: _propTypes["default"].bool,
  onNicknameChanged: _propTypes["default"].func
};
var _default = exports["default"] = Nickname;
//# sourceMappingURL=Nickname.js.map