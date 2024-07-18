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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function useToRowsArray() {
  var dataMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var order = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _react.useMemo)(function () {
    var rows = Object.entries(dataMap);
    rows = rows.map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        value = _ref2[1];
      return {
        name: name,
        value: value
      };
    });
    if (order) {
      rows = rows.sort(function (s1, s2) {
        return order.indexOf(s1.name) - order.indexOf(s2.name);
      });
    }
    return rows;
  }, [dataMap, order]);
}
var TabContent = function TabContent(_ref3) {
  var achievements = _ref3.achievements,
    stats = _ref3.stats,
    statsOrder = _ref3.statsOrder,
    statsColumns = _ref3.statsColumns,
    tokenStats = _ref3.tokenStats,
    tokenStatsColumns = _ref3.tokenStatsColumns,
    isLoading = _ref3.isLoading;
  var statsRows = useToRowsArray(stats, statsOrder);
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
    columns: statsColumns,
    isLoading: isLoading
  }), /*#__PURE__*/_react["default"].createElement(_Table["default"], {
    className: _TabContentModule["default"].tokenStatsTable,
    title: "Token Stats",
    rows: tokenStatsRows,
    columns: tokenStatsColumns,
    isLoading: isLoading
  }));
};
TabContent.propTypes = {
  achievements: _propTypes["default"].array,
  stats: _propTypes["default"].object,
  tokenStats: _propTypes["default"].object,
  statsColumns: _propTypes["default"].array,
  tokenStatsColumns: _propTypes["default"].array,
  isLoading: _propTypes["default"].bool
};
var _default = exports["default"] = TabContent;
//# sourceMappingURL=TabContent.js.map