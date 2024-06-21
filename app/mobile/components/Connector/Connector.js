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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var _default = /*#__PURE__*/_react["default"].memo(Connector);
exports["default"] = _default;
//# sourceMappingURL=Connector.js.map