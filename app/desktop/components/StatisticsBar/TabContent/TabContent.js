"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _Table = _interopRequireDefault(require("../Table"));
var _Achievements = _interopRequireDefault(require("../Achievements"));
var _TabContentModule = _interopRequireDefault(require("./TabContent.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function useToRowsArray() {
  var dataMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _react.useMemo)(function () {
    return Object.entries(dataMap).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        value = _ref2[1];
      return {
        name: name,
        value: value
      };
    });
  }, [dataMap]);
}
var TabContent = function TabContent(_ref3) {
  var achievements = _ref3.achievements,
    stats = _ref3.stats,
    statsColumns = _ref3.statsColumns,
    tokenStats = _ref3.tokenStats,
    tokenStatsColumns = _ref3.tokenStatsColumns;
  var statsRows = useToRowsArray(stats);
  var tokenStatsRows = useToRowsArray(tokenStats);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _TabContentModule["default"].container
  }, /*#__PURE__*/_react["default"].createElement(_Achievements["default"], {
    achievements: achievements
  }), /*#__PURE__*/_react["default"].createElement(_Table["default"], {
    className: _TabContentModule["default"].statsTable,
    tdClassName: (0, _clsx["default"])(_TabContentModule["default"].tdRight, _TabContentModule["default"].statsTableTd),
    title: "Stats",
    rows: statsRows,
    columns: statsColumns
  }), /*#__PURE__*/_react["default"].createElement(_Table["default"], {
    className: _TabContentModule["default"].tokenStatsTable,
    title: "Token Stats",
    rows: tokenStatsRows,
    columns: tokenStatsColumns
  }));
};
TabContent.propTypes = {
  achievements: _propTypes["default"].array,
  stats: _propTypes["default"].object,
  tokenStats: _propTypes["default"].object,
  statsColumns: _propTypes["default"].array,
  tokenStatsColumns: _propTypes["default"].array
};
var _default = exports["default"] = TabContent;
//# sourceMappingURL=TabContent.js.map