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
    if (row.name === 'predictions') {
      return row.value;
    }
    if (row.name === 'wagered') {
      return /*#__PURE__*/_react["default"].createElement(_cells.FormattedCurrencyCell, {
        amount: row.value.convertedAmount,
        currency: row.value.convertedCurrency
      });
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
  wagered: function wagered(row) {
    var _row$value, _row$value2;
    return /*#__PURE__*/_react["default"].createElement(_cells.TokenCurrencyCell, {
      amount: (_row$value = row.value) === null || _row$value === void 0 || (_row$value = _row$value.wagered) === null || _row$value === void 0 ? void 0 : _row$value.amount,
      currency: (_row$value2 = row.value) === null || _row$value2 === void 0 || (_row$value2 = _row$value2.wagered) === null || _row$value2 === void 0 ? void 0 : _row$value2.currency
    });
  },
  earned: function earned(row) {
    var _row$value3, _row$value4;
    return /*#__PURE__*/_react["default"].createElement(_cells.TokenCurrencyCell, {
      amount: (_row$value3 = row.value) === null || _row$value3 === void 0 || (_row$value3 = _row$value3.earned) === null || _row$value3 === void 0 ? void 0 : _row$value3.amount,
      currency: (_row$value4 = row.value) === null || _row$value4 === void 0 || (_row$value4 = _row$value4.earned) === null || _row$value4 === void 0 ? void 0 : _row$value4.currency
    });
  }
};
var statsOrder = ['predictions', 'wegered', 'earned', 'joined', 'last activity'];
var PredictorTabContent = function PredictorTabContent(_ref) {
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
      label: 'Wagered',
      cellRenderer: cellRenderers.wagered
    }, {
      label: 'Earned',
      cellRenderer: cellRenderers.earned
    }];
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_TabContent["default"], {
    achievements: achievements,
    stats: stats,
    statsOrder: statsOrder,
    statsColumns: statsColumns,
    tokenStats: tokenStats,
    tokenStatsColumns: tokenStatsColumns
  });
};
PredictorTabContent.propTypes = {
  achievements: _propTypes["default"].array,
  stats: _propTypes["default"].object,
  tokenStats: _propTypes["default"].object
};
var _default = exports["default"] = PredictorTabContent;
//# sourceMappingURL=PredictorTabContent.js.map