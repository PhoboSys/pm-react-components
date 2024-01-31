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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
var _default = AccountIcon;
exports["default"] = _default;
//# sourceMappingURL=AccountIcon.js.map