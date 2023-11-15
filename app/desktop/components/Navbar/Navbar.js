"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _config = _interopRequireDefault(require("../../../config"));
var _useTransition3 = require("../../../hooks/useTransition");
var _Logo = _interopRequireDefault(require("../SVG/Logo"));
var _Trade = _interopRequireDefault(require("../SVG/Trade"));
var _Staking = _interopRequireDefault(require("../SVG/Staking"));
var _Mentoring = _interopRequireDefault(require("../SVG/Mentoring"));
var _LogoLabel = _interopRequireDefault(require("../SVG/LogoLabel"));
var _NavbarModule = _interopRequireDefault(require("./Navbar.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var menuItems = [{
  name: 'trade',
  icon: /*#__PURE__*/_react["default"].createElement(_Trade["default"], null),
  label: 'Trading',
  path: _config["default"].pm_base_path
}, {
  name: 'staking',
  icon: /*#__PURE__*/_react["default"].createElement(_Staking["default"], null),
  label: 'Staking',
  path: _config["default"].st_base_path
}, {
  name: 'mentoring',
  icon: /*#__PURE__*/_react["default"].createElement(_Mentoring["default"], null),
  label: 'Mentoring',
  path: _config["default"].mt_base_path
}];
var localStorageSelector = 'pm-global-header-menu-expanded';
var NavBar = function NavBar(_ref) {
  var basepath = _ref.basepath,
    logoFill = _ref.logoFill,
    logoLabelFill = _ref.logoLabelFill,
    active = _ref.active;
  var _useState = (0, _react.useState)(localStorage.getItem(localStorageSelector) === 'true'),
    _useState2 = _slicedToArray(_useState, 2),
    expanded = _useState2[0],
    setExpanded = _useState2[1];
  var timeout = 100; //ms
  var _useTransition = (0, _useTransition3.useTransition)(expanded, timeout),
    _useTransition2 = _slicedToArray(_useTransition, 2),
    mount = _useTransition2[0],
    opening = _useTransition2[1];
  var toggleNavbar = (0, _react.useCallback)(function () {
    setExpanded(function (expanded) {
      localStorage.setItem(localStorageSelector, !expanded);
      return !expanded;
    });
  }, []);
  var handleMenuItemClick = (0, _react.useCallback)(function (e) {
    if (e.currentTarget.hasAttribute('data-active')) {
      e.preventDefault();
      toggleNavbar();
    }
  }, [toggleNavbar]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_NavbarModule["default"].container, _defineProperty({}, _NavbarModule["default"].expanded, mount && opening))
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _NavbarModule["default"].navbar
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: basepath,
    className: _NavbarModule["default"].logo,
    tabIndex: -1
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: _NavbarModule["default"].logoIcon
  }, /*#__PURE__*/_react["default"].createElement(_Logo["default"], {
    fill: logoFill
  })), /*#__PURE__*/_react["default"].createElement(_LogoLabel["default"], {
    fill: logoLabelFill
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: _NavbarModule["default"].menu
  }, menuItems.map(function (_ref2) {
    var name = _ref2.name,
      label = _ref2.label,
      icon = _ref2.icon,
      path = _ref2.path;
    return /*#__PURE__*/_react["default"].createElement("a", _extends({
      key: name,
      href: path,
      className: _NavbarModule["default"].menuItem,
      onClick: handleMenuItemClick
    }, active === name ? {
      'data-active': ''
    } : {}), /*#__PURE__*/_react["default"].createElement("span", {
      className: _NavbarModule["default"].icon
    }, icon), /*#__PURE__*/_react["default"].createElement("span", {
      className: _NavbarModule["default"].label
    }, label));
  }))));
};
NavBar.propTypes = {
  basepath: _propTypes["default"].string,
  active: _propTypes["default"].string,
  logoFill: _propTypes["default"].string,
  logoLabelFill: _propTypes["default"].string
};
var _default = /*#__PURE__*/_react["default"].memo(NavBar);
exports["default"] = _default;
//# sourceMappingURL=Navbar.js.map