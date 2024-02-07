"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _lodash = require("lodash");
var _clsx = _interopRequireDefault(require("clsx"));
var _getters = require("@state/getters");
var _state = require("@state");
var _actions = require("@actions");
var _htmlUtils = require("../../../../../lib/html-utils");
var _nicknameModule = _interopRequireDefault(require("./nickname.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Nickname = function Nickname(_ref) {
  var address = _ref.address,
    nickname = _ref.nickname,
    className = _ref.className,
    SET_SHOW_STATISTICS_BAR = _ref.SET_SHOW_STATISTICS_BAR,
    RESOVLE_ADDRESS_TO_NICKNAME = _ref.RESOVLE_ADDRESS_TO_NICKNAME;
  (0, _react.useEffect)(function () {
    if (address && !(0, _lodash.isString)(nickname)) RESOVLE_ADDRESS_TO_NICKNAME({
      address: address
    });
  }, [nickname, address]);
  return /*#__PURE__*/_react["default"].createElement("span", {
    title: nickname,
    className: (0, _clsx["default"])(className, _nicknameModule["default"].nickname)
  }, nickname || (0, _htmlUtils.htmlAddress)(address));
};
var _default = exports["default"] = (0, _state.connect)(function (state, props) {
  return {
    nickname: (0, _getters.getAccountNickname)(state, props.address)
  };
}, function (_ref2) {
  var command = _ref2.command,
    query = _ref2.query;
  return [command(_actions.SET_SHOW_STATISTICS_BAR), query(_actions.RESOVLE_ADDRESS_TO_NICKNAME)];
})( /*#__PURE__*/_react["default"].memo(Nickname));
//# sourceMappingURL=index.js.map