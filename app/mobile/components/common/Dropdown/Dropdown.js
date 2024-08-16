"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = require("react-dom");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _reactPopper = require("react-popper");
var _DropdownIcon = _interopRequireDefault(require("../../SVG/DropdownIcon"));
var _DropdownOption = _interopRequireDefault(require("./DropdownOption"));
var _Dropdown = require("./Dropdown.utils");
var _DropdownModule = _interopRequireDefault(require("./Dropdown.module.scss"));
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
var Dropdown = function Dropdown(_ref) {
  var containerClassName = _ref.containerClassName,
    headerClassName = _ref.headerClassName,
    iconClassName = _ref.iconClassName,
    bodyClassName = _ref.bodyClassName,
    valueClassName = _ref.valueClassName,
    optionClassName = _ref.optionClassName,
    iconColor = _ref.iconColor,
    options = _ref.options,
    value = _ref.value,
    popperStyles = _ref.popperStyles,
    _ref$showIcon = _ref.showIcon,
    showIcon = _ref$showIcon === void 0 ? true : _ref$showIcon,
    _ref$targetBody = _ref.targetBody,
    targetBody = _ref$targetBody === void 0 ? false : _ref$targetBody,
    onChange = _ref.onChange,
    _ref$valueRenderer = _ref.valueRenderer,
    valueRenderer = _ref$valueRenderer === void 0 ? function (value) {
      return value.label;
    } : _ref$valueRenderer,
    optionRenderer = _ref.optionRenderer;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var containerElement = (0, _react.useRef)(null);
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    referenceElement = _useState4[0],
    setReferenceElement = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    popperElement = _useState6[0],
    setPopperElement = _useState6[1];
  var modifiers = (0, _react.useMemo)(function () {
    return (0, _Dropdown.getModifiers)({
      isOpen: isOpen,
      popperStyles: popperStyles
    });
  }, [isOpen, popperStyles]);
  var _usePopper = (0, _reactPopper.usePopper)(referenceElement, popperElement, {
      modifiers: modifiers,
      placement: 'bottom'
    }),
    styles = _usePopper.styles,
    attributes = _usePopper.attributes;
  var handleClick = (0, _react.useCallback)(function () {
    setIsOpen(function (isOpen) {
      return !isOpen;
    });
  }, []);
  var handleChange = (0, _react.useCallback)(function (option) {
    setIsOpen(false);
    onChange && onChange(option);
  }, [onChange]);
  (0, _react.useEffect)(function () {
    var handler = function handler(e) {
      if (containerElement.current && !containerElement.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener('click', handler);
    return function () {
      window.removeEventListener('click', handler);
    };
  }, []);
  var renderPopper = function renderPopper() {
    return /*#__PURE__*/_react["default"].createElement("div", _extends({
      className: (0, _clsx["default"])(_DropdownModule["default"].body, bodyClassName),
      ref: setPopperElement,
      style: styles.popper
    }, attributes.popper), options.map(function (option, index) {
      return /*#__PURE__*/_react["default"].createElement(_DropdownOption["default"], {
        key: index,
        className: optionClassName,
        option: option,
        onClick: handleChange,
        renderer: optionRenderer
      });
    }));
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: containerElement,
    className: (0, _clsx["default"])(_DropdownModule["default"].container, containerClassName)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_DropdownModule["default"].header, headerClassName),
    ref: setReferenceElement,
    onClick: handleClick
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_DropdownModule["default"].value, valueClassName)
  }, value && valueRenderer(value)), showIcon && /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_DropdownModule["default"].icon, iconClassName)
  }, /*#__PURE__*/_react["default"].createElement(_DropdownIcon["default"], {
    fill: iconColor
  }))), targetBody ? /*#__PURE__*/(0, _reactDom.createPortal)(renderPopper(), document.body) : renderPopper());
};
Dropdown.propTypes = {
  containerClassName: _propTypes["default"].string,
  headerClassName: _propTypes["default"].string,
  iconClassName: _propTypes["default"].string,
  bodyClassName: _propTypes["default"].string,
  valueClassName: _propTypes["default"].string,
  optionClassName: _propTypes["default"].string,
  iconColor: _propTypes["default"].string,
  options: _propTypes["default"].array,
  value: _propTypes["default"].any,
  popperStyles: _propTypes["default"].object,
  showIcon: _propTypes["default"].bool,
  targetBody: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  valueRenderer: _propTypes["default"].func,
  optionRenderer: _propTypes["default"].func
};
var _default = exports["default"] = /*#__PURE__*/_react["default"].memo(Dropdown);
//# sourceMappingURL=Dropdown.js.map