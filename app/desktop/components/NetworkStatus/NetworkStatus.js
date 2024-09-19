"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactDom = require("react-dom");
var _reactPopper = require("react-popper");
var _clsx = _interopRequireDefault(require("clsx"));
var _constants = require("../../../constants");
var _Sync = _interopRequireDefault(require("../SVG/Sync"));
var _NetworkStatusModule = _interopRequireDefault(require("./NetworkStatus.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var statuses = {
  success: 'Online',
  warning: 'Lag',
  error: 'Error'
};
var defaultPopperOffset = [45, 5];
var NetworkStatus = function NetworkStatus(_ref) {
  var className = _ref.className,
    networkStatus = _ref.networkStatus,
    _ref$popperOffset = _ref.popperOffset,
    popperOffset = _ref$popperOffset === void 0 ? defaultPopperOffset : _ref$popperOffset,
    onClick = _ref.onClick;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    referenceElement = _useState4[0],
    setReferenceElement = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    popperElement = _useState6[0],
    setPopperElement = _useState6[1];
  var modifiers = (0, _react.useMemo)(function () {
    return [{
      name: 'toggle',
      enabled: true,
      phase: 'beforeWrite',
      requires: ['computeStyles'],
      fn: function fn(_ref2) {
        var state = _ref2.state;
        state.styles.popper.visibility = isOpen ? 'visible' : 'hidden';
        state.styles.popper.pointerEvents = isOpen ? 'all' : 'none';
      }
    }, {
      name: 'offset',
      options: {
        offset: popperOffset
      }
    }];
  }, [isOpen, popperOffset]);
  var _usePopper = (0, _reactPopper.usePopper)(referenceElement, popperElement, {
      modifiers: modifiers,
      placement: 'top'
    }),
    styles = _usePopper.styles,
    attributes = _usePopper.attributes;
  var handleMouseEnter = (0, _react.useCallback)(function () {
    return setIsOpen(true);
  }, []);
  var handleMouseLeave = (0, _react.useCallback)(function () {
    return setIsOpen(false);
  }, []);
  var handleClick = (0, _react.useCallback)(function () {
    return onClick && onClick();
  }, [onClick]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_NetworkStatusModule["default"].container, _defineProperty(_defineProperty(_defineProperty({}, _NetworkStatusModule["default"].success, networkStatus === _constants.NETWORK_STATUS.SUCCESS), _NetworkStatusModule["default"].warning, networkStatus === _constants.NETWORK_STATUS.WARNING), _NetworkStatusModule["default"].error, networkStatus === _constants.NETWORK_STATUS.ERROR), className)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    ref: setReferenceElement,
    className: _NetworkStatusModule["default"].header,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onClick: handleClick
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _NetworkStatusModule["default"].status
  }), /*#__PURE__*/_react["default"].createElement(_Sync["default"], null)), /*#__PURE__*/(0, _reactDom.createPortal)(/*#__PURE__*/_react["default"].createElement("div", _extends({
    className: _NetworkStatusModule["default"].popper,
    ref: setPopperElement,
    style: styles.popper
  }, attributes.popper), "Network Sync", /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _clsx["default"])(_NetworkStatusModule["default"].title, _defineProperty(_defineProperty(_defineProperty({}, _NetworkStatusModule["default"].success, networkStatus === _constants.NETWORK_STATUS.SUCCESS), _NetworkStatusModule["default"].warning, networkStatus === _constants.NETWORK_STATUS.WARNING), _NetworkStatusModule["default"].error, networkStatus === _constants.NETWORK_STATUS.ERROR))
  }, statuses[networkStatus] || statuses.success)), document.body));
};
NetworkStatus.propTypes = {
  className: _propTypes["default"].string,
  networkStatus: _propTypes["default"].string,
  popperOffset: _propTypes["default"].array,
  onClick: _propTypes["default"].func
};
var _default = exports["default"] = NetworkStatus;
//# sourceMappingURL=NetworkStatus.js.map