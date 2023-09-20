"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _useTransition3 = require("../../hooks/useTransition");
var _ArrowForward = _interopRequireDefault(require("../SVG/ArrowForward"));
var _Connector = _interopRequireDefault(require("../Connector"));
var _ConnectBarModule = _interopRequireDefault(require("./ConnectBar.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ConnectBar = function ConnectBar(_ref) {
  var connectors = _ref.connectors,
    isOpened = _ref.isOpened,
    onCloseClick = _ref.onCloseClick,
    onConnectorClick = _ref.onConnectorClick;
  var timeout = 100; //ms
  var _useTransition = (0, _useTransition3.useTransition)(isOpened, timeout),
    _useTransition2 = _slicedToArray(_useTransition, 2),
    mount = _useTransition2[0],
    opening = _useTransition2[1];
  if (!mount) return null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_ConnectBarModule["default"].container, _defineProperty({}, _ConnectBarModule["default"].opened, opening))
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _ConnectBarModule["default"].title
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Connect to Wallet"), /*#__PURE__*/_react["default"].createElement("span", {
    className: _ConnectBarModule["default"].close,
    onClick: onCloseClick
  }, /*#__PURE__*/_react["default"].createElement(_ArrowForward["default"], null))), /*#__PURE__*/_react["default"].createElement("ul", null, connectors.map(function (connectorId) {
    return /*#__PURE__*/_react["default"].createElement(_Connector["default"], {
      key: connectorId,
      id: connectorId,
      onClick: onConnectorClick
    });
  })), /*#__PURE__*/_react["default"].createElement("p", {
    className: _ConnectBarModule["default"].policy
  }, "By connecting a wallet, you agree to Uniswap Labs' ", /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://uniswap.org/terms-of-service",
    target: "_blank",
    rel: "noreferrer"
  }, "Terms of Service"), " and consent to its ", /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://uniswap.org/privacy-policy",
    target: "_blank",
    rel: "noreferrer"
  }, "Privacy Policy."), " (Last Updated 11.17.22)"));
};
ConnectBar.propTypes = {
  isOpened: _propTypes["default"].bool,
  connectors: _propTypes["default"].array,
  onCloseClick: _propTypes["default"].func,
  onConnectorClick: _propTypes["default"].func
};
var _default = /*#__PURE__*/_react["default"].memo(ConnectBar);
exports["default"] = _default;
//# sourceMappingURL=ConnectBar.js.map