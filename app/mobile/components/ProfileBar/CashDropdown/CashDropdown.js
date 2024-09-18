"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _calcUtils = require("pm-libs/calc-utils");
var _htmlUtils = require("../../../../lib/html-utils");
var _Spinner = _interopRequireDefault(require("../../common/Spinner"));
var _Dropdown = _interopRequireDefault(require("../../common/Dropdown"));
var _BalanceCurrency = _interopRequireDefault(require("../../common/BalanceCurrency"));
var _PMGlobalHeaderProvider = require("../../PMGlobalHeaderProvider");
var _CashDropdownModule = _interopRequireDefault(require("./CashDropdown.module.scss"));
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
var options = [{
  label: 'Oracly',
  currency: 'ORCY'
}, {
  label: 'Oracly',
  currency: 'DEMO'
}, {
  label: 'USD Coin',
  currency: 'USDC'
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
var OptionRenderer = function OptionRenderer(_ref) {
  var className = _ref.className,
    option = _ref.option;
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _clsx["default"])(_CashDropdownModule["default"].optionRenderer, className)
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: _CashDropdownModule["default"].optionIcon
  }, /*#__PURE__*/_react["default"].createElement(_BalanceCurrency["default"], {
    className: _CashDropdownModule["default"].optionBalance,
    currency: option.currency
  })), /*#__PURE__*/_react["default"].createElement("span", {
    className: _CashDropdownModule["default"].optionLabel
  }, option.label), /*#__PURE__*/_react["default"].createElement("span", {
    className: _CashDropdownModule["default"].optionCurrency
  }, "(".concat(option.currency, ")")));
};
var ValueRenderer = function ValueRenderer(_ref2) {
  var currency = _ref2.currency,
    balance = _ref2.balance,
    difference = _ref2.difference,
    currencyFill = _ref2.currencyFill,
    maximumFractionDigits = _ref2.maximumFractionDigits;
  var htmldifference = (0, _htmlUtils.htmlCurrency)(difference, maximumFractionDigits);
  if (htmldifference.includes('<-')) htmldifference = "-<".concat(htmldifference.slice(2));
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_BalanceCurrency["default"], {
    className: _CashDropdownModule["default"].currency,
    fill: currencyFill,
    currency: currency
  }), balance || balance === 0 ? /*#__PURE__*/_react["default"].createElement("span", {
    className: _CashDropdownModule["default"].value
  }, (0, _htmlUtils.htmlCurrency)(balance, maximumFractionDigits)) : /*#__PURE__*/_react["default"].createElement(_Spinner["default"], {
    className: _CashDropdownModule["default"].spinner
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: _CashDropdownModule["default"].difference
  }, /*#__PURE__*/_react["default"].createElement("span", null, "+"), htmldifference));
};
var CashDropdown = function CashDropdown(_ref3) {
  var currency = _ref3.currency,
    balance = _ref3.balance,
    account = _ref3.account,
    dropdownPopperStyles = _ref3.dropdownPopperStyles,
    onCurrencyChanged = _ref3.onCurrencyChanged;
  var _useGHProvider = (0, _PMGlobalHeaderProvider.useGHProvider)(),
    currencyFill = _useGHProvider.currencyFill,
    maximumFractionDigits = _useGHProvider.maximumFractionDigits;
  var _useChangeERC = useChangeERC20(account, balance, currency),
    _useChangeERC2 = _slicedToArray(_useChangeERC, 2),
    difference = _useChangeERC2[0],
    changeid = _useChangeERC2[1];
  var option = options.find(function (option) {
    return option.currency === currency;
  });
  var valueRenderer = (0, _react.useCallback)(function () {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return /*#__PURE__*/_react["default"].createElement(ValueRenderer, {
      key: changeid,
      currency: value.currency,
      balance: balance,
      difference: difference,
      currencyFill: currencyFill,
      maximumFractionDigits: maximumFractionDigits
    });
  }, [difference, balance, currencyFill, changeid, maximumFractionDigits]);
  var optionRenderer = (0, _react.useCallback)(function (option) {
    return /*#__PURE__*/_react["default"].createElement(OptionRenderer, {
      option: option
    });
  }, []);
  var handleChange = (0, _react.useCallback)(function (_ref4) {
    var currency = _ref4.currency;
    onCurrencyChanged(currency);
  }, [onCurrencyChanged]);
  return /*#__PURE__*/_react["default"].createElement(_Dropdown["default"], {
    headerClassName: _CashDropdownModule["default"].header,
    iconClassName: _CashDropdownModule["default"].icon,
    valueClassName: (0, _clsx["default"])(_CashDropdownModule["default"].cash, _defineProperty(_defineProperty({}, _CashDropdownModule["default"].increase, difference && (0, _calcUtils.isPositive)(difference)), _CashDropdownModule["default"].decrease, difference && (0, _calcUtils.isNegative)(difference))),
    bodyClassName: _CashDropdownModule["default"].body,
    value: option,
    options: options,
    popperStyles: dropdownPopperStyles,
    onChange: handleChange,
    valueRenderer: valueRenderer,
    optionRenderer: optionRenderer
  });
};
CashDropdown.propTypes = {
  currency: _propTypes["default"].string,
  balance: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  account: _propTypes["default"].string,
  dropdownPopperStyles: _propTypes["default"].object,
  onCurrencyChanged: _propTypes["default"].func
};
var _default = exports["default"] = CashDropdown;
//# sourceMappingURL=CashDropdown.js.map