"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _MetaMask = _interopRequireDefault(require("../SVG/MetaMask"));
var _WalletConnect = _interopRequireDefault(require("../SVG/WalletConnect"));
var _CoinbaseWallet = _interopRequireDefault(require("../SVG/CoinbaseWallet"));
var _ConnectorModule = _interopRequireDefault(require("./Connector.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var supportedConnectors = {
  injected: {
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
    onClick = _ref.onClick;
  var handleClick = (0, _react.useCallback)(function () {
    if (onClick) onClick(id);
  }, [id, onClick]);
  var connector = supportedConnectors[id];
  if (!connector) return null;
  return /*#__PURE__*/_react["default"].createElement("li", {
    className: _ConnectorModule["default"].container,
    onClick: handleClick
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: _ConnectorModule["default"].icon
  }, connector.icon), /*#__PURE__*/_react["default"].createElement("span", {
    className: _ConnectorModule["default"].name
  }, connector.name));
};
Connector.propTypes = {
  id: _propTypes["default"].string,
  onClick: _propTypes["default"].func
};
var _default = exports["default"] = /*#__PURE__*/_react["default"].memo(Connector);
//# sourceMappingURL=Connector.js.map