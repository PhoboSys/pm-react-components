"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _htmlUtils = require("../../../lib/html-utils");
var _calcUtils = require("../../../lib/calc-utils");
var _Balance = _interopRequireDefault(require("../common/Balance"));
var _Spinner = _interopRequireDefault(require("../common/Spinner"));
var _AccountIcon = _interopRequireDefault(require("../AccountIcon"));
var _PMGlobalHeaderProvider = require("../PMGlobalHeaderProvider");
var _DropdownIcon = _interopRequireDefault(require("../SVG/DropdownIcon"));
var _ProfileBarModule = _interopRequireDefault(require("./ProfileBar.module.scss"));
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
var options = [{
  label: 'USD Coin',
  currency: 'USDC'
}, {
  label: 'Oracly',
  currency: 'PARI'
}];
var useChangeERC20 = function useChangeERC20(account, number, currency) {
  var prevNumberRef = (0, _react.useRef)(number);
  var prevCurrencyRef = (0, _react.useRef)(currency);
  var prevAccountRef = (0, _react.useRef)(account);
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
    var prevAccount = prevAccountRef.current;
    if (prevNumber !== number && prevCurrency === currency && prevAccount === account) {
      setState({
        diff: (0, _calcUtils.sub)(number, prevNumber),
        changeid: state.changeid + 1
      });
    }
    prevNumberRef.current = number;
    prevCurrencyRef.current = currency;
    prevAccountRef.current = account;
  }, [number, currency, account]);
  return [state.diff, state.changeid];
};
var ProfileBar = function ProfileBar(_ref) {
  var className = _ref.className,
    innerClassName = _ref.innerClassName,
    currency = _ref.currency,
    balance = _ref.balance,
    account = _ref.account,
    chainName = _ref.chainName,
    onClick = _ref.onClick,
    onCurrencyChanged = _ref.onCurrencyChanged,
    onIconClick = _ref.onIconClick;
  var _useGHProvider = (0, _PMGlobalHeaderProvider.useGHProvider)(),
    currencyFill = _useGHProvider.currencyFill;
  var _useChangeERC = useChangeERC20(account, balance, currency),
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
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    popoverPop = _useState4[0],
    setPopoverPop = _useState4[1];
  var handleBalanceClick = (0, _react.useCallback)(function (e) {
    e.stopPropagation();
    setPopoverPop(!popoverPop);
  }, [popoverPop]);
  var handleCurrencyChanged = (0, _react.useCallback)(function (e) {
    var _e$target;
    e.stopPropagation();
    var newcurrency = e === null || e === void 0 || (_e$target = e.target) === null || _e$target === void 0 || (_e$target = _e$target.dataset) === null || _e$target === void 0 ? void 0 : _e$target.currency;
    if (newcurrency !== currency && onCurrencyChanged) {
      setPopoverPop(false);
      onCurrencyChanged(newcurrency);
    }
  }, [currency, onCurrencyChanged]);
  var popover = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var handler = function handler(e) {
      if (popover.current && !popover.current.contains(e.target)) {
        setPopoverPop(false);
      }
    };
    window.addEventListener('click', handler);
    return function () {
      window.removeEventListener('click', handler);
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_ProfileBarModule["default"].profilebar, className),
    onClick: handleClick
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_ProfileBarModule["default"].inner, innerClassName)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    key: changeid,
    className: (0, _clsx["default"])(_ProfileBarModule["default"].cash, _defineProperty(_defineProperty({}, _ProfileBarModule["default"].increase, difference && (0, _calcUtils.isPositive)(difference)), _ProfileBarModule["default"].decrease, difference && (0, _calcUtils.isNegative)(difference))),
    onClick: handleBalanceClick
  }, /*#__PURE__*/_react["default"].createElement(_Balance["default"], {
    fill: currencyFill,
    currency: currency
  }), balance && balance !== 0 ? /*#__PURE__*/_react["default"].createElement("span", {
    className: _ProfileBarModule["default"].value
  }, (0, _htmlUtils.htmlCurrency)(balance)) : /*#__PURE__*/_react["default"].createElement(_Spinner["default"], {
    className: _ProfileBarModule["default"].spinner
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: _ProfileBarModule["default"].dropdownIcon
  }, /*#__PURE__*/_react["default"].createElement(_DropdownIcon["default"], null)), /*#__PURE__*/_react["default"].createElement("span", {
    className: _ProfileBarModule["default"].difference
  }, /*#__PURE__*/_react["default"].createElement("span", null, "+"), (0, _htmlUtils.htmlCurrency)(difference)), popoverPop && /*#__PURE__*/_react["default"].createElement("div", {
    ref: popover,
    className: _ProfileBarModule["default"].popover
  }, options.map(function (option, idx) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: idx,
      className: (0, _clsx["default"])(_ProfileBarModule["default"].option, _defineProperty({}, _ProfileBarModule["default"].active, option.currency === currency)),
      "data-currency": option.currency,
      onClick: handleCurrencyChanged
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: _ProfileBarModule["default"].optionIcon
    }, /*#__PURE__*/_react["default"].createElement(_Balance["default"], {
      fill: currencyFill,
      currency: option.currency,
      className: _ProfileBarModule["default"].optionBalance
    })), /*#__PURE__*/_react["default"].createElement("span", {
      className: _ProfileBarModule["default"].optionLabel
    }, option.label), /*#__PURE__*/_react["default"].createElement("span", {
      className: _ProfileBarModule["default"].optionCurrency
    }, "(".concat(option.currency, ")")));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
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
  onIconClick: _propTypes["default"].func,
  onCurrencyChanged: _propTypes["default"].func
};
var _default = exports["default"] = /*#__PURE__*/_react["default"].memo(ProfileBar);
//# sourceMappingURL=ProfileBar.js.map