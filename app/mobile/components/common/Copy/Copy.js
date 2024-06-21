"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx = _interopRequireDefault(require("clsx"));
var _reactPopper = require("react-popper");
var _CopyIcon = _interopRequireDefault(require("../../SVG/CopyIcon"));
var _CopyModule = _interopRequireDefault(require("./Copy.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Copy = function Copy(_ref) {
  var className = _ref.className,
    iconClassName = _ref.iconClassName,
    children = _ref.children,
    text = _ref.text,
    _ref$offsetX = _ref.offsetX,
    offsetX = _ref$offsetX === void 0 ? 0 : _ref$offsetX,
    _ref$offsetY = _ref.offsetY,
    offsetY = _ref$offsetY === void 0 ? 10 : _ref$offsetY;
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
  var handleClick = (0, _react.useCallback)(function () {
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
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _clsx["default"])(_CopyModule["default"].container, className)
  }, children, /*#__PURE__*/_react["default"].createElement("span", {
    ref: setReferenceElement,
    className: (0, _clsx["default"])(_CopyModule["default"].icon, iconClassName),
    onClick: handleClick
  }, /*#__PURE__*/_react["default"].createElement(_CopyIcon["default"], null))), /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: _CopyModule["default"].popper,
    ref: setPopperElement,
    style: styles.popper
  }, attributes.popper), "Copied to clipboard!", /*#__PURE__*/_react["default"].createElement("div", {
    className: _CopyModule["default"].arrow,
    ref: setArrowElement,
    style: styles.arrow
  })));
};
Copy.propTypes = {
  className: _propTypes["default"].string,
  iconClassName: _propTypes["default"].string,
  children: _propTypes["default"].string,
  text: _propTypes["default"].string,
  offsetX: _propTypes["default"].number,
  offsetY: _propTypes["default"].number
};
var _default = Copy;
exports["default"] = _default;
//# sourceMappingURL=Copy.js.map