"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _config = _interopRequireDefault(require("../../../../config"));
var _OpenInNewTab = _interopRequireDefault(require("../../SVG/OpenInNewTab"));
var _AppsMenuModule = _interopRequireDefault(require("./AppsMenu.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var menuItems = [{
  name: 'trade',
  label: 'Oracly App',
  path: _config["default"].pm_base_path
}, {
  name: 'staking',
  label: 'Staking App',
  path: _config["default"].st_base_path
}, {
  name: 'mentoring',
  label: 'Mentoring App',
  path: _config["default"].mt_base_path
}];
var AppsMenu = function AppsMenu(_ref) {
  var active = _ref.active;
  var navigate = function navigate(path) {
    var url = "".concat(window.location.protocol, "//").concat(window.location.host).concat(path);
    window.history.pushState({}, '', url);
    window.location.href = url;
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _AppsMenuModule["default"].container
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _AppsMenuModule["default"].title
  }, "Apps"), /*#__PURE__*/_react["default"].createElement("ul", {
    className: _AppsMenuModule["default"].menu
  }, menuItems.filter(function (_ref2) {
    var name = _ref2.name;
    return name !== active;
  }).map(function (_ref3, index) {
    var name = _ref3.name,
      label = _ref3.label,
      path = _ref3.path;
    return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
      key: name
    }, index !== 0 && /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
      onClick: function onClick() {
        return navigate(path);
      }
    }, /*#__PURE__*/_react["default"].createElement("span", null, label), /*#__PURE__*/_react["default"].createElement(_OpenInNewTab["default"], null))));
  })));
};
AppsMenu.propTypes = {
  active: _propTypes["default"].string
};
var _default = exports["default"] = AppsMenu;
//# sourceMappingURL=AppsMenu.js.map