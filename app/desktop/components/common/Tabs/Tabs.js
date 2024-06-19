"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TabContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var TabContext = exports.TabContext = /*#__PURE__*/(0, _react.createContext)({});
var Tabs = function Tabs(_ref) {
  var className = _ref.className,
    activeTabClassName = _ref.activeTabClassName,
    controlledTab = _ref.tab,
    onTabChange = _ref.onTabChange,
    _ref$initialTab = _ref.initialTab,
    initialTab = _ref$initialTab === void 0 ? 0 : _ref$initialTab,
    children = _ref.children;
  var isTabControlled = controlledTab !== undefined;
  var _useState = (0, _react.useState)(initialTab),
    _useState2 = _slicedToArray(_useState, 2),
    tab = _useState2[0],
    setTab = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    renderTab = _useState4[0],
    setRenderTab = _useState4[1];
  var tabsRef = (0, _react.useRef)([]);
  var handleSetTab = (0, _react.useCallback)(function (tab) {
    if (!isTabControlled) setTab(tab);
    if (onTabChange) onTabChange(tab);
  }, [isTabControlled]);
  var registerHead = (0, _react.useCallback)(function () {
    var tabIndex = tabsRef.current.push(1) - 1;
    setRenderTab(tabsRef.current.length > 1);
    return tabIndex;
  }, []);
  var registerBody = (0, _react.useCallback)(function () {
    var tabIndex = tabsRef.current.findIndex(function (value) {
      return value === 1;
    });
    tabsRef.current[tabIndex] = 0;
    return tabIndex;
  }, []);
  var value = (0, _react.useMemo)(function () {
    return {
      activeTabClassName: activeTabClassName,
      tab: isTabControlled ? controlledTab : tab,
      renderTab: renderTab,
      setTab: handleSetTab,
      registerHead: registerHead,
      registerBody: registerBody
    };
  }, [isTabControlled, tab, controlledTab, renderTab]);
  return /*#__PURE__*/_react["default"].createElement(TabContext.Provider, {
    value: value
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: className
  }, children));
};
Tabs.propTypes = {
  className: _propTypes["default"].string,
  activeTabClassName: _propTypes["default"].string,
  tab: _propTypes["default"].string,
  onTabChange: _propTypes["default"].func,
  initialTab: _propTypes["default"].number,
  children: _propTypes["default"].node
};
var _default = exports["default"] = /*#__PURE__*/_react["default"].memo(Tabs);
//# sourceMappingURL=Tabs.js.map