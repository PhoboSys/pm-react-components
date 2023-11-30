"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getModalByType = void 0;
var _PrimaryModal = _interopRequireDefault(require("../modals/PrimaryModal"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var modalsByType = {
  primary: _PrimaryModal["default"]
};
var getModalByType = function getModalByType(type) {
  return modalsByType[type];
};
exports.getModalByType = getModalByType;
//# sourceMappingURL=modals.utils.js.map