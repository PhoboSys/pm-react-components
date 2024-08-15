"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initForceRefreshOption = initForceRefreshOption;
function initForceRefreshOption() {
  function forceRefresh(event) {
    var _event$state;
    console.log({
      state: event.state
    });
    if (event !== null && event !== void 0 && (_event$state = event.state) !== null && _event$state !== void 0 && _event$state.forceRefresh) {
      var _window$location, _window$location2;
      console.log('forceRefresh');
      ((_window$location = window.location) === null || _window$location === void 0 ? void 0 : _window$location.reload) && ((_window$location2 = window.location) === null || _window$location2 === void 0 ? void 0 : _window$location2.reload());
    }
  }
  window.addEventListener('popstate', forceRefresh);
  return function () {
    console.log('remove');
    window.removeEventListener('popstate', forceRefresh);
  };
}
//# sourceMappingURL=index.js.map