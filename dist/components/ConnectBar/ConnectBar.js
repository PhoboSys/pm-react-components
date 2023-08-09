"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _ConnectBar = require("./ConnectBar.utils");
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
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ConnectBar = function ConnectBar(_ref) {
  var connectors = _ref.connectors,
    isOpened = _ref.isOpened,
    onCloseIconClick = _ref.onCloseIconClick,
    onConnectorClick = _ref.onConnectorClick;
  var timeout = 100; //ms
  var _useTransition = (0, _ConnectBar.useTransition)(isOpened, timeout),
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
    onClick: onCloseIconClick
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
  onCloseIconClick: _propTypes["default"].func,
  onConnectorClick: _propTypes["default"].func
};
var _default = /*#__PURE__*/_react["default"].memo(ConnectBar);
exports["default"] = _default;
//# sourceMappingURL=ConnectBar.js.map