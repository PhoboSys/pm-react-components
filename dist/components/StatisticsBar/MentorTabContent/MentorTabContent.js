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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var cellRenderers = {
  stats: function stats(row) {
    if (row.name === 'proteges') {
      return "".concat(row.value.account, " / ").concat(row.value.total);
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
var _default = MentorTabContent;
exports["default"] = _default;
//# sourceMappingURL=MentorTabContent.js.map