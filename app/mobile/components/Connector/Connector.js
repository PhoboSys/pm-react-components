"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _MetaMask = _interopRequireDefault(require("../SVG/MetaMask"));
var _WalletConnect = _interopRequireDefault(require("../SVG/WalletConnect"));
var _CoinbaseWallet = _interopRequireDefault(require("../SVG/CoinbaseWallet"));
var _Uniswap = _interopRequireDefault(require("../SVG/Uniswap"));
var _ConnectorModule = _interopRequireDefault(require("./Connector.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var supportedConnectors = {
  uniswap: {
    name: 'Uniswap',
    icon: /*#__PURE__*/_react["default"].createElement(_Uniswap["default"], null)
  },
  metamask: {
    name: 'MetaMask',
    icon: /*#__PURE__*/_react["default"].createElement(_MetaMask["default"], null)
  },
  walletconnect: {
    name: 'WalletConnect',
    icon: /*#__PURE__*/_react["default"].createElement(_WalletConnect["default"], null)
  },
  coinbase: {
    name: 'CoinbaseWallet',
    icon: /*#__PURE__*/_react["default"].createElement(_CoinbaseWallet["default"], null)
  }
};
var Connector = function Connector(_ref) {
  var id = _ref.id,
    injectedProviderType = _ref.injectedProviderType,
    onClick = _ref.onClick;
  var handleClick = (0, _react.useCallback)(function () {
    if (onClick) onClick(id);
  }, [id, onClick]);
  var connector;
  if (id === 'injected') {
    connector = supportedConnectors[injectedProviderType];
  } else {
    connector = supportedConnectors[id];
  }
  var recommend = id === 'injected' && injectedProviderType === 'uniswap';
  if (!connector) return null;
  return /*#__PURE__*/_react["default"].createElement("li", {
    className: (0, _clsx["default"])(_ConnectorModule["default"].container, _defineProperty({}, _ConnectorModule["default"].recommended, recommend)),
    onClick: handleClick
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: _ConnectorModule["default"].icon
  }, connector.icon), /*#__PURE__*/_react["default"].createElement("span", {
    className: _ConnectorModule["default"].name
  }, connector.name), recommend && /*#__PURE__*/_react["default"].createElement("span", {
    className: _ConnectorModule["default"].recommend
  }, "Recommend"));
};
Connector.propTypes = {
  id: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  injectedProviderType: _propTypes["default"].string
};
var _default = exports["default"] = /*#__PURE__*/_react["default"].memo(Connector);
//# sourceMappingURL=Connector.js.map