"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _Avatar = _interopRequireDefault(require("../common/Avatar"));
var _CashDropdown = _interopRequireDefault(require("./CashDropdown"));
var _NetworkStatus = _interopRequireDefault(require("./NetworkStatus"));
var _ProfileBarModule = _interopRequireDefault(require("./ProfileBar.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var ProfileBar = function ProfileBar(_ref) {
  var className = _ref.className,
    currency = _ref.currency,
    balance = _ref.balance,
    account = _ref.account,
    networkStatus = _ref.networkStatus,
    cashDropdownPopperStyles = _ref.cashDropdownPopperStyles,
    onCurrencyChanged = _ref.onCurrencyChanged,
    onIconClick = _ref.onIconClick;
  var handleIconClick = (0, _react.useCallback)(function (e) {
    e.stopPropagation();
    if (onIconClick) onIconClick(account.toLowerCase());
  }, [onIconClick, account]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_ProfileBarModule["default"].container, className)
  }, /*#__PURE__*/_react["default"].createElement(_CashDropdown["default"], {
    className: _ProfileBarModule["default"].cash,
    currency: currency,
    balance: balance,
    account: account,
    onCurrencyChanged: onCurrencyChanged,
    dropdownPopperStyles: cashDropdownPopperStyles
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: _ProfileBarModule["default"].avatarContainer
  }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
    className: _ProfileBarModule["default"].avatar,
    account: account,
    onClick: handleIconClick
  }), networkStatus && /*#__PURE__*/_react["default"].createElement(_NetworkStatus["default"], {
    type: networkStatus
  })));
};
ProfileBar.propTypes = {
  className: _propTypes["default"].string,
  currency: _propTypes["default"].string,
  balance: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  account: _propTypes["default"].string,
  networkStatus: _propTypes["default"].string,
  cashDropdownPopperStyles: _propTypes["default"].object,
  onCurrencyChanged: _propTypes["default"].func,
  onIconClick: _propTypes["default"].func
};
var _default = exports["default"] = ProfileBar;
//# sourceMappingURL=ProfileBar.js.map