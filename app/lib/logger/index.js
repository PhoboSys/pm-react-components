"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _debug = _interopRequireDefault(require("debug"));
var _class;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }
function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
var Logger = /*#__PURE__*/function () {
  function Logger() {
    _classCallCheck(this, Logger);
  }
  _createClass(Logger, null, [{
    key: "info",
    value: function info() {
      var _classStaticPrivateFi;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      (_classStaticPrivateFi = _classStaticPrivateFieldSpecGet(Logger, Logger, _debuginfo)).call.apply(_classStaticPrivateFi, [Logger].concat(args));
    }
  }, {
    key: "error",
    value: function error() {
      var _classStaticPrivateFi2, _console;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      (_classStaticPrivateFi2 = _classStaticPrivateFieldSpecGet(Logger, Logger, _debugerror)).call.apply(_classStaticPrivateFi2, [Logger].concat(args));
      (_console = console).error.apply(_console, args); // eslint-disable-line
    }
  }, {
    key: "warn",
    value: function warn() {
      var _classStaticPrivateFi3;
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      (_classStaticPrivateFi3 = _classStaticPrivateFieldSpecGet(Logger, Logger, _debugwarn)).call.apply(_classStaticPrivateFi3, [Logger].concat(args));
    }
  }]);
  return Logger;
}();
exports["default"] = Logger;
_class = Logger;
_defineProperty(Logger, "ns", 'pm:gh:');
var _debuginfo = {
  writable: true,
  value: (0, _debug["default"])(_class.ns + 'info')
};
var _debugwarn = {
  writable: true,
  value: (0, _debug["default"])(_class.ns + 'warn')
};
var _debugerror = {
  writable: true,
  value: (0, _debug["default"])(_class.ns + 'error')
};
//# sourceMappingURL=index.js.map