"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _cells = require("../cells");
var _TabContent = _interopRequireDefault(require("../TabContent"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var cellRenderers = {
  stats: function stats(row) {
    if (row.name === 'proteges') {
      return "".concat(row.value.amount);
    }
    if (row.name === 'earned') {
      return /*#__PURE__*/_react["default"].createElement(_cells.FormattedCurrencyCell, {
        amount: row.value.convertedAmount,
        currency: row.value.convertedCurrency
      });
    }
    if (row.name === 'joined') {
      return /*#__PURE__*/_react["default"].createElement(_cells.DateCell, {
        date: row.value
      });
    }
    if (row.name === 'last activity') {
      return /*#__PURE__*/_react["default"].createElement(_cells.DateCell, {
        date: row.value
      });
    }
  },
  earned: function earned(row) {
    return /*#__PURE__*/_react["default"].createElement(_cells.TokenCurrencyCell, {
      amount: row.value.earned.amount,
      currency: row.value.earned.currency
    });
  }
};
var MentorTabContent = function MentorTabContent(_ref) {
  var achievements = _ref.achievements,
    stats = _ref.stats,
    tokenStats = _ref.tokenStats;
  var statsColumns = (0, _react.useMemo)(function () {
    return [{
      dataKey: 'name'
    }, {
      cellRenderer: cellRenderers.stats
    }];
  }, []);
  var tokenStatsColumns = (0, _react.useMemo)(function () {
    return [{
      label: 'Name',
      dataKey: 'name'
    }, {
      label: 'Earned',
      cellRenderer: cellRenderers.earned
    }];
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_TabContent["default"], {
    achievements: achievements,
    stats: stats,
    statsColumns: statsColumns,
    tokenStats: tokenStats,
    tokenStatsColumns: tokenStatsColumns
  });
};
MentorTabContent.propTypes = {
  achievements: _propTypes["default"].array,
  stats: _propTypes["default"].object,
  tokenStats: _propTypes["default"].object
};
var _default = exports["default"] = MentorTabContent;
//# sourceMappingURL=MentorTabContent.js.map