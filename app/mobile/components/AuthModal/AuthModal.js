"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Connector = _interopRequireDefault(require("../Connector"));
var _AuthModalModule = _interopRequireDefault(require("./AuthModal.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var AuthModal = function AuthModal(_ref) {
  var close = _ref.close,
    isConnected = _ref.isConnected,
    connectors = _ref.connectors,
    onConnectorClick = _ref.onConnectorClick;
  (0, _react.useEffect)(function () {
    if (isConnected) close();
  }, [isConnected]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _AuthModalModule["default"].container
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _AuthModalModule["default"].title
  }, "Connect to Wallet"), /*#__PURE__*/_react["default"].createElement("ul", {
    className: _AuthModalModule["default"].connectors
  }, connectors.map(function (connectorId) {
    return /*#__PURE__*/_react["default"].createElement(_Connector["default"], {
      key: connectorId,
      id: connectorId,
      onClick: onConnectorClick
    }, connectorId);
  })));
};
AuthModal.propTypes = {
  close: _propTypes["default"].func.isRequired,
  connectors: _propTypes["default"].array,
  isConnected: _propTypes["default"].bool,
  onConnectorClick: _propTypes["default"].func.isRequired
};
var _default = AuthModal;
exports["default"] = _default;
//# sourceMappingURL=AuthModal.js.map