"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInvitationLink = getInvitationLink;
function getInvitationLink(address) {
  var host = 'app.oracly.io';
  if (window.location.host.includes('localhost')) host = 'localhost:8801';else if (window.location.host.includes('staging')) host = 'app.staging.oracly.io';
  return "".concat(location.protocol, "//").concat(host, "/?invitation=").concat(address).toLocaleLowerCase();
}
//# sourceMappingURL=index.js.map