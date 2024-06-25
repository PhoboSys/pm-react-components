"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _TableModule = _interopRequireDefault(require("./Table.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Table = function Table(_ref) {
  var className = _ref.className,
    tdClassName = _ref.tdClassName,
    title = _ref.title,
    columns = _ref.columns,
    rows = _ref.rows;
  var shouldRenderTHead = !!columns.filter(function (_ref2) {
    var label = _ref2.label;
    return label;
  }).length;
  var renderRow = function renderRow(row) {
    return columns.map(function (column, i) {
      var dataKey = column.dataKey,
        _column$cellRenderer = column.cellRenderer,
        cellRenderer = _column$cellRenderer === void 0 ? function (row) {
          return row[dataKey];
        } : _column$cellRenderer;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _clsx["default"])(_TableModule["default"].td, tdClassName),
        key: i,
        "data-column": i
      }, cellRenderer(row));
    });
  };
  var renderColumns = function renderColumns() {
    return columns.map(function (_ref3, i) {
      var label = _ref3.label;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: _TableModule["default"].th,
        key: i
      }, label);
    });
  };
  var scssVars = (0, _react.useMemo)(function () {
    return {
      "--columsSize": columns.length
    };
  }, [columns.length]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_TableModule["default"].container, className)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _TableModule["default"].title
  }, title), /*#__PURE__*/_react["default"].createElement("div", {
    className: _TableModule["default"].table,
    style: scssVars
  }, shouldRenderTHead && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: _TableModule["default"].headbg
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: _TableModule["default"].line
  }), renderColumns()), /*#__PURE__*/_react["default"].createElement("span", null), !rows.length && /*#__PURE__*/_react["default"].createElement("div", {
    className: _TableModule["default"].nodata
  }, "No ".concat(title.toLowerCase(), " yet")), rows.map(function (row, i) {
    return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
      key: i
    }, !!i && /*#__PURE__*/_react["default"].createElement("div", {
      className: _TableModule["default"].line
    }), renderRow(row));
  })));
};
Table.propTypes = {
  className: _propTypes["default"].string,
  tdClassName: _propTypes["default"].string,
  title: _propTypes["default"].string,
  columns: _propTypes["default"].array,
  rows: _propTypes["default"].array
};
var _default = exports["default"] = /*#__PURE__*/_react["default"].memo(Table);
//# sourceMappingURL=Table.js.map