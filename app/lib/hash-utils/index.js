"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorHash = colorHash;
exports.numericHash = numericHash;
var _avatarsColors = require("@constants/avatarsColors");
function numericHash(s) {
  var h = 0;
  if (!s || !s.length) return h;
  for (var i = 0; i < s.length; i++) h = Math.imul(31, h) + s.charCodeAt(i) | 0;
  return Math.abs(h);
}
function colorHash(name) {
  var hash = numericHash(name);
  var colorId = hash % _avatarsColors.BETTOR_ICON_COLORS.length;
  return _avatarsColors.BETTOR_ICON_COLORS[colorId];
}
//# sourceMappingURL=index.js.map