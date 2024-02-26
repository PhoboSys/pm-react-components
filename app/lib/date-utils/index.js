"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INVALID_DATE = void 0;
exports.formatDistance = formatDistance;
exports.formatDistanceUnixTS = formatDistanceUnixTS;
exports.nowUnixTS = nowUnixTS;
exports.setLocaleDateFns = setLocaleDateFns;
exports.timeSinceUnixTS = timeSinceUnixTS;
exports.toDate = toDate;
exports.toUnixTS = toUnixTS;
var _dateFns = require("date-fns");
var _locale = require("date-fns/locale");
var _config = _interopRequireDefault(require("../../config"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var INVALID_DATE = exports.INVALID_DATE = new Date(NaN);
var LOCALES = {
  'en': _locale.enUS,
  'en-US': _locale.enUS,
  'es': _locale.es
};
var locale = LOCALES[_config["default"].default_locale];
function setLocaleDateFns(newlocale) {
  if (newlocale !== locale.code && newlocale in LOCALES) {
    locale = LOCALES[newlocale];
  }
}
function toUnixTS(timestamp) {
  return parseInt(timestamp / 1000);
}
function nowUnixTS() {
  return toUnixTS(Date.now());
}
function timeSinceUnixTS(datefrom) {
  var dateto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : nowUnixTS();
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    addSuffix: true
  };
  return formatDistanceUnixTS(datefrom, dateto, options);
}
function formatDistanceUnixTS(datefrom) {
  var dateto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : nowUnixTS();
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  datefrom = datefrom * 1000;
  dateto = dateto * 1000;
  var distance = formatDistance(datefrom, dateto, options);
  if (options !== null && options !== void 0 && options["short"]) {
    var _distance;
    var _distance$split = (_distance = distance) === null || _distance === void 0 ? void 0 : _distance.split(' '),
      _distance$split2 = _slicedToArray(_distance$split, 2),
      value = _distance$split2[0],
      units = _distance$split2[1];
    distance = [value, units === null || units === void 0 ? void 0 : units[0]].join(' ');
  }
  return distance;
}
function formatDistance(datefrom) {
  var dateto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  datefrom = toDate(datefrom);
  dateto = toDate(dateto);
  if (isEqual(datefrom, INVALID_DATE) || isEqual(dateto, INVALID_DATE)) {
    return '';
  }
  return (0, _dateFns.formatDistanceStrict)(datefrom, dateto, _objectSpread(_objectSpread({}, options), {}, {
    locale: locale
  }));
}
function toDate(date) {
  // parameters validaton
  if (!date instanceof Date && !(typeof date === 'string') && !(typeof date === 'number')) return INVALID_DATE;
  var datetime = new Date(date);
  // validate datetime
  if (isNaN(datetime.getTime())) return INVALID_DATE;
  return datetime;
}
var isEqual = function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if ((first === undefined || second === undefined || first === null || second === null) && (first || second)) {
    return false;
  }
  var firstType = first === null || first === void 0 ? void 0 : first.constructor.name;
  var secondType = second === null || second === void 0 ? void 0 : second.constructor.name;
  if (firstType !== secondType) {
    return false;
  }
  if (firstType === 'Array') {
    if (first.length !== second.length) {
      return false;
    }
    var equal = true;
    for (var i in first) {
      if (!isEqual(first[i], second[i])) {
        equal = false;
        break;
      }
    }
    return equal;
  }
  if (firstType === 'Object') {
    var _equal = true;
    var fKeys = Object.keys(first);
    var sKeys = Object.keys(second);
    if (fKeys.length !== sKeys.length) {
      return false;
    }
    for (var _i in fKeys) {
      if (first[fKeys[_i]] && second[fKeys[_i]]) {
        if (first[fKeys[_i]] === second[fKeys[_i]]) {
          continue; // eslint-disable-line
        }
        if (first[fKeys[_i]] && (first[fKeys[_i]].constructor.name === 'Array' || first[fKeys[_i]].constructor.name === 'Object')) {
          _equal = isEqual(first[fKeys[_i]], second[fKeys[_i]]);
          if (!_equal) {
            break;
          }
        } else if (first[fKeys[_i]] !== second[fKeys[_i]]) {
          _equal = false;
          break;
        }
      } else if (first[fKeys[_i]] && !second[fKeys[_i]] || !first[fKeys[_i]] && second[fKeys[_i]]) {
        _equal = false;
        break;
      }
    }
    return _equal;
  }
  return first === second;
};
//# sourceMappingURL=index.js.map