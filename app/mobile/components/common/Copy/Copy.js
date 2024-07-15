"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactDom = require("react-dom");
var _clsx = _interopRequireDefault(require("clsx"));
var _reactPopper = require("react-popper");
var _CopyIcon = _interopRequireDefault(require("../../SVG/CopyIcon"));
var _CopyModule = _interopRequireDefault(require("./Copy.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Copy = function Copy(_ref) {
  var className = _ref.className,
    iconClassName = _ref.iconClassName,
    children = _ref.children,
    text = _ref.text,
    _ref$offsetX = _ref.offsetX,
    offsetX = _ref$offsetX === void 0 ? 0 : _ref$offsetX,
    _ref$offsetY = _ref.offsetY,
    offsetY = _ref$offsetY === void 0 ? 10 : _ref$offsetY,
    target = _ref.target;
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
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    arrowElement = _useState8[0],
    setArrowElement = _useState8[1];
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
      name: 'arrow',
      options: {
        element: arrowElement
      }
    }, {
      name: 'offset',
      options: {
        offset: [offsetX, offsetY]
      }
    }];
  }, [isOpen, offsetX, offsetY, arrowElement]);
  var _usePopper = (0, _reactPopper.usePopper)(referenceElement, popperElement, {
      placement: 'top',
      modifiers: modifiers
    }),
    styles = _usePopper.styles,
    attributes = _usePopper.attributes;
  var handleClick = (0, _react.useCallback)(function (e) {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setIsOpen(true);
  }, [text]);
  (0, _react.useEffect)(function () {
    var timeoutid;
    if (isOpen) timeoutid = setTimeout(function () {
      return setIsOpen(false);
    }, 1000);
    return function () {
      return clearTimeout(timeoutid);
    };
  }, [isOpen]);
  var renderPopper = function renderPopper() {
    return /*#__PURE__*/_react["default"].createElement("div", _extends({
      className: _CopyModule["default"].popper,
      ref: setPopperElement,
      style: styles.popper
    }, attributes.popper), "Copied to clipboard!", /*#__PURE__*/_react["default"].createElement("div", {
      className: _CopyModule["default"].arrow,
      ref: setArrowElement,
      style: styles.arrow
    }));
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _clsx["default"])(_CopyModule["default"].container, className)
  }, children, /*#__PURE__*/_react["default"].createElement("span", {
    ref: setReferenceElement,
    className: (0, _clsx["default"])(_CopyModule["default"].icon, iconClassName),
    onClick: handleClick
  }, /*#__PURE__*/_react["default"].createElement(_CopyIcon["default"], null))), target ? /*#__PURE__*/(0, _reactDom.createPortal)(renderPopper(), target) : renderPopper());
};
Copy.propTypes = {
  className: _propTypes["default"].string,
  iconClassName: _propTypes["default"].string,
  children: _propTypes["default"].node,
  text: _propTypes["default"].string,
  offsetX: _propTypes["default"].number,
  offsetY: _propTypes["default"].number,
  target: _propTypes["default"].instanceOf(Element)
};
var _default = exports["default"] = Copy;
//# sourceMappingURL=Copy.js.map