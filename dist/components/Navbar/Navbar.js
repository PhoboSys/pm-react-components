"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Button = _interopRequireDefault(require("../common/Button"));
var _Logo = _interopRequireDefault(require("../SVG/Logo"));
var _Trade = _interopRequireDefault(require("../SVG/Trade"));
var _Staking = _interopRequireDefault(require("../SVG/Staking"));
var _Mentoring = _interopRequireDefault(require("../SVG/Mentoring"));
var _NavbarModule = _interopRequireDefault(require("./Navbar.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var menuItems = [{
  name: 'trade',
  icon: /*#__PURE__*/_react["default"].createElement(_Trade["default"], null)
}, {
  name: 'staking',
  icon: /*#__PURE__*/_react["default"].createElement(_Staking["default"], null)
}, {
  name: 'mentoring',
  icon: /*#__PURE__*/_react["default"].createElement(_Mentoring["default"], null)
}];
var NavBar = function NavBar(_ref) {
  var logoFill = _ref.logoFill,
    active = _ref.active;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _NavbarModule["default"].container
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _NavbarModule["default"].navbar
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/",
    className: _NavbarModule["default"].logo,
    tabIndex: -1
  }, /*#__PURE__*/_react["default"].createElement(_Logo["default"], {
    fill: logoFill
  })), /*#__PURE__*/_react["default"].createElement("ul", {
    className: _NavbarModule["default"].menu
  }, menuItems.map(function (_ref2) {
    var name = _ref2.name,
      icon = _ref2.icon;
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: name,
      className: (0, _clsx["default"])(_NavbarModule["default"].item, _defineProperty({}, _NavbarModule["default"].active, active === name))
    }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      className: _NavbarModule["default"].button
    }, icon));
  }))));
};
NavBar.propTypes = {
  active: _propTypes["default"].string
};
var _default = /*#__PURE__*/_react["default"].memo(NavBar);
exports["default"] = _default;
//# sourceMappingURL=Navbar.js.map