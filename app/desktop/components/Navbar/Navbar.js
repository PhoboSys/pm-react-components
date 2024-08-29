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
var _FeatureToggle = require("../FeatureToggle");
var _NetworkStatus = _interopRequireDefault(require("../NetworkStatus"));
var _Button = _interopRequireDefault(require("../common/Button"));
var _Logo = _interopRequireDefault(require("../SVG/Logo"));
var _Trade = _interopRequireDefault(require("../SVG/Trade"));
var _Staking = _interopRequireDefault(require("../SVG/Staking"));
var _Mentoring = _interopRequireDefault(require("../SVG/Mentoring"));
var _LogoLabel = _interopRequireDefault(require("../SVG/LogoLabel"));
var _NavbarModule = _interopRequireDefault(require("./Navbar.module.scss"));
var _SupportIcon = _interopRequireDefault(require("../SVG/SupportIcon"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
    active = _ref.active,
    featureTogglesTitle = _ref.featureTogglesTitle,
    networkStatus = _ref.networkStatus,
    onSupportClick = _ref.onSupportClick;
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
  }), networkStatus && /*#__PURE__*/_react["default"].createElement(_NetworkStatus["default"], {
    networkStatus: networkStatus
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: _NavbarModule["default"].bottomGrid
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    className: supportButton,
    onClick: onSupportClick
  }, /*#__PURE__*/_react["default"].createElement(_SupportIcon["default"], null)), /*#__PURE__*/_react["default"].createElement(_FeatureToggle.FeatureToggle, {
    title: featureTogglesTitle
  })))));
};
NavBar.propTypes = {
  basepath: _propTypes["default"].string,
  active: _propTypes["default"].string,
  logoFill: _propTypes["default"].string,
  logoLabelFill: _propTypes["default"].string,
  featureTogglesTitle: _propTypes["default"].string,
  networkStatus: _propTypes["default"].string,
  onSupportClicked: _propTypes["default"].func
};
var _default = exports["default"] = /*#__PURE__*/_react["default"].memo(NavBar);
//# sourceMappingURL=Navbar.js.map