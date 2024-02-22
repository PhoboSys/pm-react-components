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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var localStorageSelector = 'pm-global-header-username-hint-closed';
var Nickname = function Nickname(_ref) {
  var address = _ref.address,
    username = _ref.username,
    editable = _ref.editable,
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
  var isEdit = editingNickname || !username;
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
    className: (0, _clsx["default"])(_NicknameModule["default"].container, _defineProperty({}, _NicknameModule["default"].collapsed, true))
  }, !editable && /*#__PURE__*/_react["default"].createElement("div", {
    className: _NicknameModule["default"].nickname
  }, username), editable && /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_NicknameModule["default"].nickname, _defineProperty({}, _NicknameModule["default"].editing, isEdit))
  }, isEdit && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("input", {
    autoFocus: true,
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
  }, username), /*#__PURE__*/_react["default"].createElement("a", {
    className: _NicknameModule["default"].edit,
    onClick: setEditNickname
  }, /*#__PURE__*/_react["default"].createElement(_Edit["default"], {
    className: _NicknameModule["default"].editicon
  }))), mountHint && /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_NicknameModule["default"].hint, _defineProperty({}, _NicknameModule["default"].showingHint, showingHint))
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: _NicknameModule["default"].close,
    onClick: closeHint
  }, /*#__PURE__*/_react["default"].createElement(_CloseIcon["default"], null)), /*#__PURE__*/_react["default"].createElement(_UserHint["default"], {
    className: _NicknameModule["default"].icon
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: _NicknameModule["default"].text
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
var _default = Nickname;
exports["default"] = _default;
//# sourceMappingURL=Nickname.js.map