"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getModifiers = void 0;
var getModifiers = exports.getModifiers = function getModifiers(_ref) {
  var isOpen = _ref.isOpen,
    _ref$popperStyles = _ref.popperStyles,
    popperStyles = _ref$popperStyles === void 0 ? {} : _ref$popperStyles;
  return [{
    name: 'eventListeners',
    options: {
      scroll: false
    }
  }, {
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
    name: 'styles',
    enabled: true,
    phase: 'beforeWrite',
    requires: ['computeStyles'],
    fn: function fn(_ref3) {
      var state = _ref3.state;
      state.styles.popper.left = '-8px';
      for (var prop in popperStyles) {
        state.styles.popper[prop] = popperStyles[prop];
      }
    }
  }, {
    name: 'offset',
    options: {
      offset: [0, 8]
    }
  }];
};
//# sourceMappingURL=Dropdown.utils.js.map