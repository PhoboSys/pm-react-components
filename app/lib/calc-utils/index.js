"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.div = div;
exports.isNegative = isNegative;
exports.isPositive = isPositive;
exports.mul = mul;
exports.sub = sub;
var _lodash = require("lodash");
var _big = _interopRequireDefault(require("big.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_big["default"].PE = 1e+6;
function __inNumbers() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  for (var _i = 0, _args = args; _i < _args.length; _i++) {
    var num = _args[_i];
    if (num === '' || isNaN(Number(num)) || !(0, _lodash.isNumber)(Number(num))) return false;
  }
  return true;
}
function mul(number1, number2) {
  if (!__inNumbers(number1, number2)) return 0;
  number1 = (0, _big["default"])(number1);
  number2 = (0, _big["default"])(number2);
  return number1.times(number2).toString() || 0;
}
function sub(number1, number2) {
  if (!__inNumbers(number1, number2)) return 0;
  number1 = (0, _big["default"])(number1);
  number2 = (0, _big["default"])(number2);
  return number1.minus(number2).toString() || 0;
}
function div(number1, number2) {
  if (!__inNumbers(number1, number2)) return 0;
  number1 = (0, _big["default"])(number1);
  number2 = (0, _big["default"])(number2);
  return number1.div(number2).toString() || 0;
}
function isPositive(number) {
  if (!__inNumbers(number)) return undefined;
  return (0, _big["default"])(number).s === 1;
}
function isNegative(number) {
  if (!__inNumbers(number)) return undefined;
  return (0, _big["default"])(number).s === -1;
}
//# sourceMappingURL=index.js.map