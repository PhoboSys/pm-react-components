"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _lodash = require("lodash");
var _clsx = _interopRequireDefault(require("clsx"));
var _AnimatedButtonModule = _interopRequireDefault(require("./AnimatedButton.module.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var AnimatedButton = function AnimatedButton(props) {
  var button = (0, _react.useRef)();
  var move = (0, _react.useCallback)(function (e) {
    window.requestAnimationFrame(function () {
      if (!button.current) return;
      if (!e) return;
      if (props.disabled) return;
      var rect = button.current.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      button.current.style.setProperty('--hover-after-left', "".concat(x, "px"));
      button.current.style.setProperty('--hover-after-top', "".concat(y, "px"));
      button.current.style.setProperty('--hover-before-left', "".concat(x, "px"));
      button.current.style.setProperty('--hover-before-top', "".concat(y, "px"));
    });
    if (props.onMouseMove) props.onMouseMove(e);
  }, [props.hoverCircleOpacity, props.hoverBorderOpacity, props.hoverButtonOpacity, props.activeInnerCircle, props.activeBorderCircle, props.shadowColor, props.hoverColor, props.onMouseMove, props.disabled]);
  var reactattrs = (0, _lodash.pickBy)(props, function (v, key) {
    return (0, _lodash.startsWith)(key, 'data');
  });
  var htmlattrs = (0, _lodash.mapKeys)(reactattrs, function (v, key) {
    return (0, _lodash.kebabCase)(key);
  });
  var handleClick = (0, _react.useCallback)(function (e) {
    !props.disabled && props.onClick && props.onClick(e);
  }, [props.onClick, props.disabled]);
  var style = {
    '--hover-focus-inner-circle': props.hoverCircleOpacity,
    '--hover-focus-border-circle': props.hoverBorderOpacity,
    '--hover-focus-button': props.hoverButtonOpacity,
    '--active-inner-circle': props.activeInnerCircle,
    '--active-border-circle': props.activeBorderCircle,
    '--hover-box-shadow-color': props.shadowColor,
    '--hover-color': props.hoverColor,
    '--border-width': props.borderWidth
  };
  return /*#__PURE__*/_react["default"].createElement("a", _extends({
    ref: button,
    title: props.title,
    className: (0, _clsx["default"])(_AnimatedButtonModule["default"].button, _defineProperty({}, _AnimatedButtonModule["default"].disabled, props.disabled), props.className),
    onClick: handleClick,
    href: props.href,
    onMouseMove: move,
    style: style

    //pass data attributes
  }, htmlattrs), props.children, /*#__PURE__*/_react["default"].createElement("span", {
    className: _AnimatedButtonModule["default"].before
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: _AnimatedButtonModule["default"].overlay
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: _AnimatedButtonModule["default"].after
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: _AnimatedButtonModule["default"].content
  }, props.children));
};
AnimatedButton.propTypes = {
  className: _propTypes["default"].string,
  title: _propTypes["default"].string,
  href: _propTypes["default"].string,
  children: _propTypes["default"].node,
  disabled: _propTypes["default"].bool,
  hoverCircleOpacity: _propTypes["default"].number,
  hoverBorderOpacity: _propTypes["default"].number,
  hoverButtonOpacity: _propTypes["default"].number,
  activeInnerCircle: _propTypes["default"].number,
  activeBorderCircle: _propTypes["default"].number,
  shadowColor: _propTypes["default"].string,
  hoverColor: _propTypes["default"].string,
  onMouseMove: _propTypes["default"].func,
  onClick: _propTypes["default"].func
};
var _default = exports["default"] = /*#__PURE__*/_react["default"].memo(AnimatedButton);
//# sourceMappingURL=AnimatedButton.js.map