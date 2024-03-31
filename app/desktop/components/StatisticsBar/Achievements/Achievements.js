"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _AchievementsModule = _interopRequireDefault(require("./Achievements.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Achievement1 = function Achievement1() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '40px',
      'height': '40px',
      backgroundColor: '#28c9c4'
    }
  });
};
var Achievement2 = function Achievement2() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '60px',
      'height': '60px',
      backgroundColor: '#a1c9c8'
    }
  });
};
var mock = [Achievement1, Achievement2];
var Achievements = function Achievements(_ref) {
  var _ref$achievements = _ref.achievements,
    achievements = _ref$achievements === void 0 ? [] : _ref$achievements;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _AchievementsModule["default"].container
  }, achievements.map(function (achievement) {
    return mock[achievement];
  }));
};
Achievements.propTypes = {
  achievements: _propTypes["default"].array
};
var _default = exports["default"] = Achievements;
//# sourceMappingURL=Achievements.js.map