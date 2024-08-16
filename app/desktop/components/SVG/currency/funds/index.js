"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.factoryFunds = factoryFunds;
var _UNKNOWN = _interopRequireDefault(require("./UNKNOWN.DARK"));
var _ETH = _interopRequireDefault(require("./ETH.DARK"));
var _USDC = _interopRequireDefault(require("./USDC.DARK"));
var _DEMO = _interopRequireDefault(require("./DEMO.DARK"));
var _ORCY = _interopRequireDefault(require("./ORCY.DARK"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var FUNDS = {
  UNKNOWN_DARK: _UNKNOWN["default"],
  ETH_DARK: _ETH["default"],
  DEMO_DARK: _DEMO["default"],
  ORCY_DARK: _ORCY["default"],
  USDC_DARK: _USDC["default"]
};
function factoryFunds(currency) {
  var theme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'DARK';
  var key = [currency, theme].join('_');
  return FUNDS[key] || _UNKNOWN["default"];
}
//# sourceMappingURL=index.js.map