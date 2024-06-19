"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getModalByType = void 0;
var _PrimaryModal = _interopRequireDefault(require("../modals/PrimaryModal"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var modalsByType = {
  primary: _PrimaryModal["default"]
};
var getModalByType = exports.getModalByType = function getModalByType(type) {
  return modalsByType[type];
};
//# sourceMappingURL=modals.utils.js.map