"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _Connect = _interopRequireDefault(require("../Connect"));
var _AccountIcon = _interopRequireDefault(require("../AccountIcon"));
var _Navbar = _interopRequireDefault(require("../Navbar"));
var _Logo = _interopRequireDefault(require("../Logo"));
var _HeaderModule = _interopRequireDefault(require("./Header.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Header = function Header(_ref) {
  var className = _ref.className,
    isConnected = _ref.isConnected,
    basepath = _ref.basepath,
    logoFill = _ref.logoFill,
    account = _ref.account,
    onProfileClick = _ref.onProfileClick,
    onConnectClick = _ref.onConnectClick,
    children = _ref.children;
  var handleAccountIconClick = (0, _react.useCallback)(function (e) {
    e.stopPropagation();
    onProfileClick(account.toLowerCase());
  }, [account, onProfileClick]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_HeaderModule["default"].header, className)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _HeaderModule["default"].left
  }, /*#__PURE__*/_react["default"].createElement(_Navbar["default"], null), /*#__PURE__*/_react["default"].createElement(_Logo["default"], {
    basepath: basepath,
    logoFill: logoFill
  })), children, /*#__PURE__*/_react["default"].createElement("div", {
    className: _HeaderModule["default"].right
  }, isConnected ? /*#__PURE__*/_react["default"].createElement(_AccountIcon["default"], {
    account: account,
    onClick: handleAccountIconClick
  }) : /*#__PURE__*/_react["default"].createElement(_Connect["default"], {
    onClick: onConnectClick
  })));
};
Header.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].node
};
var _default = Header;
exports["default"] = _default;
//# sourceMappingURL=Header.js.map