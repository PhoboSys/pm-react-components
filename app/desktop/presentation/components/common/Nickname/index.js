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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var _default = (0, _state.connect)(function (state, props) {
  return {
    nickname: (0, _getters.getAccountNickname)(state, props.address)
  };
}, function (_ref2) {
  var command = _ref2.command,
    query = _ref2.query;
  return [command(_actions.SET_SHOW_STATISTICS_BAR), query(_actions.RESOVLE_ADDRESS_TO_NICKNAME)];
})( /*#__PURE__*/_react["default"].memo(Nickname));
exports["default"] = _default;
//# sourceMappingURL=index.js.map