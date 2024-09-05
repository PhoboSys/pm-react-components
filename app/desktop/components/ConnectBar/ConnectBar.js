"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _useTransition3 = require("../../../hooks/useTransition");
var _ArrowForward = _interopRequireDefault(require("../SVG/ArrowForward"));
var _Connector = _interopRequireDefault(require("../Connector"));
var _ConnectBarModule = _interopRequireDefault(require("./ConnectBar.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var ConnectBar = function ConnectBar(_ref) {
  var connectors = _ref.connectors,
    injectedProviderType = _ref.injectedProviderType,
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
      injectedProviderType: injectedProviderType,
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
  injectedProviderType: _propTypes["default"].string,
  onCloseClick: _propTypes["default"].func,
  onConnectorClick: _propTypes["default"].func
};
var _default = exports["default"] = /*#__PURE__*/_react["default"].memo(ConnectBar);
//# sourceMappingURL=ConnectBar.js.map