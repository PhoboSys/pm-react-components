"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _AccountIcon = _interopRequireDefault(require("../AccountIcon"));
var _Navbar = _interopRequireDefault(require("../Navbar"));
var _HeaderModule = _interopRequireDefault(require("./Header.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Header = function Header(_ref) {
  var className = _ref.className,
    isConnected = _ref.isConnected,
    basepath = _ref.basepath,
    account = _ref.account,
    onProfileClick = _ref.onProfileClick,
    children = _ref.children;
  var handleAccountIconClick = (0, _react.useCallback)(function (e) {
    e.stopPropagation();
    onProfileClick(account.toLowerCase());
  }, [account, onProfileClick]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_HeaderModule["default"].header, className)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _HeaderModule["default"].left
  }, /*#__PURE__*/_react["default"].createElement(_Navbar["default"], {
    basepath: basepath
  })), children, isConnected && /*#__PURE__*/_react["default"].createElement("div", {
    className: _HeaderModule["default"].right
  }, /*#__PURE__*/_react["default"].createElement(_AccountIcon["default"], {
    account: account,
    onClick: handleAccountIconClick
  })));
};
Header.propTypes = {
  className: _propTypes["default"].string,
  isConnected: _propTypes["default"].bool,
  basepath: _propTypes["default"].string,
  account: _propTypes["default"].string,
  onProfileClick: _propTypes["default"].func,
  children: _propTypes["default"].node
};
var _default = exports["default"] = Header;
//# sourceMappingURL=Header.js.map