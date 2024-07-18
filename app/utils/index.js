"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInvitationLink = getInvitationLink;
var _config = _interopRequireDefault(require("../config"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function getInvitationLink(address) {
  var host = "app.oracly.io/".concat(_config["default"].pm_base_path);
  if (window.location.host.includes('localhost')) host = 'localhost:8801/';else if (window.location.host.includes('staging')) host = "app.staging.oracly.io/".concat(_config["default"].pm_base_path);
  return "".concat(location.protocol, "//").concat(host, "?invitation=").concat(address).toLocaleLowerCase();
}
//# sourceMappingURL=index.js.map