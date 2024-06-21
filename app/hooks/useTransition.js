"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTransition = useTransition;
var _react = require("react");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function useUninitialEffect(effect, deps) {
  var initialRender = (0, _react.useRef)(true);
  (0, _react.useEffect)(function () {
    if (initialRender.current) initialRender.current = false;else return effect();
  }, deps);
}
function useTransition(entering, timeout) {
  var _useState = (0, _react.useState)(entering),
    _useState2 = _slicedToArray(_useState, 2),
    mount = _useState2[0],
    setmount = _useState2[1];
  var _useState3 = (0, _react.useState)(entering),
    _useState4 = _slicedToArray(_useState3, 2),
    forward = _useState4[0],
    setforward = _useState4[1];
  useUninitialEffect(function () {
    var TRANS;
    if (entering) {
      // entering
      setmount(true);
      TRANS = setTimeout(function () {
        return setforward(true);
      }, 50);
    } else {
      // exiting
      setforward(false);
      TRANS = setTimeout(function () {
        return setmount(false);
      }, timeout);
    }
    return function () {
      clearTimeout(TRANS);
    };
  }, [entering]);
  return [mount, forward];
}
//# sourceMappingURL=useTransition.js.map