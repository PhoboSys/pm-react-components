"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _htmlUtils = require("@lib/html-utils");
var _calcUtils = require("@lib/calc-utils");
var _Balance = _interopRequireDefault(require("../common/Balance"));
var _Spinner = _interopRequireDefault(require("../common/Spinner"));
var _AccountIcon = _interopRequireDefault(require("../AccountIcon"));
var _PMGlobalHeaderProvider = require("../PMGlobalHeaderProvider");
var _ProfileBarModule = _interopRequireDefault(require("./ProfileBar.module.scss"));
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
var useChangeERC20 = function useChangeERC20(number, currency) {
  var prevNumberRef = (0, _react.useRef)(number);
  var prevCurrencyRef = (0, _react.useRef)(currency);
  var _useState = (0, _react.useState)({
      diff: 0,
      changeid: 0
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  (0, _react.useEffect)(function () {
    var prevNumber = prevNumberRef.current;
    var prevCurrency = prevCurrencyRef.current;
    if (prevNumber !== number && prevCurrency === currency) {
      setState({
        diff: (0, _calcUtils.sub)(number, prevNumber),
        changeid: state.changeid + 1
      });
    }
    prevNumberRef.current = number;
    prevCurrencyRef.current = currency;
  }, [number, currency]);
  return [state.diff, state.changeid];
};
var ProfileBar = function ProfileBar(_ref) {
  var _cn;
  var className = _ref.className,
    innerClassName = _ref.innerClassName,
    currency = _ref.currency,
    balance = _ref.balance,
    account = _ref.account,
    chainName = _ref.chainName,
    onClick = _ref.onClick,
    onIconClick = _ref.onIconClick;
  var _useGHProvider = (0, _PMGlobalHeaderProvider.useGHProvider)(),
    currencyFill = _useGHProvider.currencyFill;
  var _useChangeERC = useChangeERC20(balance, currency),
    _useChangeERC2 = _slicedToArray(_useChangeERC, 2),
    difference = _useChangeERC2[0],
    changeid = _useChangeERC2[1];
  var handleClick = (0, _react.useCallback)(function () {
    if (onClick) onClick(account.toLowerCase());
  }, [onClick, account]);
  var handleIconClick = (0, _react.useCallback)(function (e) {
    e.stopPropagation();
    if (onIconClick) onIconClick(account.toLowerCase());
  }, [onIconClick, account]);
  var handleBalanceClick = (0, _react.useCallback)(function (e) {
    e.stopPropagation();
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_ProfileBarModule["default"].profilebar, className),
    onClick: handleClick
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_ProfileBarModule["default"].inner, innerClassName)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    key: changeid,
    className: (0, _clsx["default"])(_ProfileBarModule["default"].cash, (_cn = {}, _defineProperty(_cn, _ProfileBarModule["default"].increase, difference && (0, _calcUtils.isPositive)(difference)), _defineProperty(_cn, _ProfileBarModule["default"].decrease, difference && (0, _calcUtils.isNegative)(difference)), _cn)),
    onClick: handleBalanceClick
  }, /*#__PURE__*/_react["default"].createElement(_Balance["default"], {
    fill: currencyFill,
    currency: currency
  }), balance && balance !== 0 ? /*#__PURE__*/_react["default"].createElement("span", {
    className: _ProfileBarModule["default"].value
  }, (0, _htmlUtils.htmlCurrency)(balance)) : /*#__PURE__*/_react["default"].createElement(_Spinner["default"], {
    className: _ProfileBarModule["default"].spinner
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: _ProfileBarModule["default"].difference
  }, /*#__PURE__*/_react["default"].createElement("span", null, "+"), (0, _htmlUtils.htmlCurrency)(difference))), /*#__PURE__*/_react["default"].createElement("div", {
    className: _ProfileBarModule["default"].account
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _ProfileBarModule["default"].wallet
  }, (0, _htmlUtils.htmlAddress)(account)), /*#__PURE__*/_react["default"].createElement("div", {
    className: _ProfileBarModule["default"].name
  }, chainName)), /*#__PURE__*/_react["default"].createElement(_AccountIcon["default"], {
    className: _ProfileBarModule["default"].action,
    account: account,
    onClick: handleIconClick
  })));
};
ProfileBar.propTypes = {
  className: _propTypes["default"].string,
  innerClassName: _propTypes["default"].string,
  currency: _propTypes["default"].string,
  balance: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  account: _propTypes["default"].string,
  chainName: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  onIconClick: _propTypes["default"].func
};
var _default = /*#__PURE__*/_react["default"].memo(ProfileBar);
exports["default"] = _default;
//# sourceMappingURL=ProfileBar.js.map