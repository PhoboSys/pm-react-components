"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _config = _interopRequireDefault(require("../../../config"));
var _hashUtils = require("../../../lib/hash-utils");
var _AccountIconModule = _interopRequireDefault(require("./AccountIcon.module.scss"));
var _excluded = ["className", "account"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }
var AccountIcon = function AccountIcon(_ref) {
  var className = _ref.className,
    _ref$account = _ref.account,
    account = _ref$account === void 0 ? '' : _ref$account,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement("a", _extends({
    className: (0, _clsx["default"])(_AccountIconModule["default"].container, className),
    style: {
      backgroundImage: "url(".concat(_config["default"].avatars_path + (0, _hashUtils.numericHash)(account) % _config["default"].avatars_amount, ".png)"),
      backgroundSize: 'cover'
    }
  }, props));
};
AccountIcon.propTypes = {
  className: _propTypes["default"].string,
  account: _propTypes["default"].string
};
var _default = exports["default"] = AccountIcon;
//# sourceMappingURL=AccountIcon.js.map