"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _express = _interopRequireDefault(require("express"));
var _connectDB = _interopRequireDefault(require("../config/connectDB"));
var _excluded = ["id", "phone", "code", "invite", "level", "game"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
require('dotenv').config();
var K5DPage = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", res.render("bet/5d/5d.ejs"));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function K5DPage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var K5DPage3 = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", res.render("bet/wingo/win3.ejs"));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function K5DPage3(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var K5DPage5 = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", res.render("bet/wingo/win5.ejs"));
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function K5DPage5(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var K5DPage10 = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", res.render("bet/wingo/win10.ejs"));
        case 1:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function K5DPage10(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var isNumber = function isNumber(params) {
  var pattern = /^[0-9]*\d$/;
  return pattern.test(params);
};
function formateT(params) {
  var result = params < 10 ? "0" + params : params;
  return result;
}
function timerJoin() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var addHours = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var date = '';
  if (params) {
    date = new Date(Number(params));
  } else {
    date = new Date();
  }
  date.setHours(date.getHours() + addHours);
  var years = formateT(date.getFullYear());
  var months = formateT(date.getMonth() + 1);
  var days = formateT(date.getDate());
  var hours = date.getHours() % 12;
  hours = hours === 0 ? 12 : hours;
  var ampm = date.getHours() < 12 ? "AM" : "PM";
  var minutes = formateT(date.getMinutes());
  var seconds = formateT(date.getSeconds());
  return years + '-' + months + '-' + days + ' ' + hours + ':' + minutes + ':' + seconds + ' ' + ampm;
}
var rosesPlus = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(auth, money) {
    var _yield$connection$que, _yield$connection$que2, level, level0, _yield$connection$que3, _yield$connection$que4, user, userInfo, _yield$connection$que5, _yield$connection$que6, f1, infoF1, rosesF1, _yield$connection$que7, _yield$connection$que8, f2, infoF2, rosesF2, _yield$connection$que9, _yield$connection$que10, f3, infoF3, rosesF3, _yield$connection$que11, _yield$connection$que12, f4, infoF4, rosesF4;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _connectDB["default"].query('SELECT * FROM level ');
        case 2:
          _yield$connection$que = _context5.sent;
          _yield$connection$que2 = _slicedToArray(_yield$connection$que, 1);
          level = _yield$connection$que2[0];
          level0 = level[0];
          _context5.next = 8;
          return _connectDB["default"].query('SELECT `phone`, `code`, `invite` FROM users WHERE token = ? AND veri = 1  LIMIT 1 ', [auth]);
        case 8:
          _yield$connection$que3 = _context5.sent;
          _yield$connection$que4 = _slicedToArray(_yield$connection$que3, 1);
          user = _yield$connection$que4[0];
          userInfo = user[0];
          _context5.next = 14;
          return _connectDB["default"].query('SELECT `phone`, `code`, `invite`, `rank` FROM users WHERE code = ? AND veri = 1  LIMIT 1 ', [userInfo.invite]);
        case 14:
          _yield$connection$que5 = _context5.sent;
          _yield$connection$que6 = _slicedToArray(_yield$connection$que5, 1);
          f1 = _yield$connection$que6[0];
          if (!(money >= 10000)) {
            _context5.next = 53;
            break;
          }
          if (!(f1.length > 0)) {
            _context5.next = 53;
            break;
          }
          infoF1 = f1[0];
          rosesF1 = money / 100 * level0.f1;
          _context5.next = 23;
          return _connectDB["default"].query('UPDATE users SET money = money + ?, roses_f1 = roses_f1 + ?, roses_f = roses_f + ?, roses_today = roses_today + ? WHERE phone = ? ', [rosesF1, rosesF1, rosesF1, rosesF1, infoF1.phone]);
        case 23:
          _context5.next = 25;
          return _connectDB["default"].query('SELECT `phone`, `code`, `invite`, `rank` FROM users WHERE code = ? AND veri = 1  LIMIT 1 ', [infoF1.invite]);
        case 25:
          _yield$connection$que7 = _context5.sent;
          _yield$connection$que8 = _slicedToArray(_yield$connection$que7, 1);
          f2 = _yield$connection$que8[0];
          if (!(f2.length > 0)) {
            _context5.next = 53;
            break;
          }
          infoF2 = f2[0];
          rosesF2 = money / 100 * level0.f2;
          _context5.next = 33;
          return _connectDB["default"].query('UPDATE users SET money = money + ?, roses_f = roses_f + ?, roses_today = roses_today + ? WHERE phone = ? ', [rosesF2, rosesF2, rosesF2, infoF2.phone]);
        case 33:
          _context5.next = 35;
          return _connectDB["default"].query('SELECT `phone`, `code`, `invite`, `rank` FROM users WHERE code = ? AND veri = 1  LIMIT 1 ', [infoF2.invite]);
        case 35:
          _yield$connection$que9 = _context5.sent;
          _yield$connection$que10 = _slicedToArray(_yield$connection$que9, 1);
          f3 = _yield$connection$que10[0];
          if (!(f3.length > 0)) {
            _context5.next = 53;
            break;
          }
          infoF3 = f3[0];
          rosesF3 = money / 100 * level0.f3;
          _context5.next = 43;
          return _connectDB["default"].query('UPDATE users SET money = money + ?, roses_f = roses_f + ?, roses_today = roses_today + ? WHERE phone = ? ', [rosesF3, rosesF3, rosesF3, infoF3.phone]);
        case 43:
          _context5.next = 45;
          return _connectDB["default"].query('SELECT `phone`, `code`, `invite`, `rank` FROM users WHERE code = ? AND veri = 1  LIMIT 1 ', [infoF3.invite]);
        case 45:
          _yield$connection$que11 = _context5.sent;
          _yield$connection$que12 = _slicedToArray(_yield$connection$que11, 1);
          f4 = _yield$connection$que12[0];
          if (!(f4.length > 0)) {
            _context5.next = 53;
            break;
          }
          infoF4 = f4[0];
          rosesF4 = money / 100 * level0.f4;
          _context5.next = 53;
          return _connectDB["default"].query('UPDATE users SET money = money + ?, roses_f = roses_f + ?, roses_today = roses_today + ? WHERE phone = ? ', [rosesF4, rosesF4, rosesF4, infoF4.phone]);
        case 53:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function rosesPlus(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var validateBet = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(join, list_join, x, money, game) {
    var checkJoin, checkX, checks, checkGame, checkMoney, arr, length, i, joinNum, _arr, _length, _i, joinStr;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          checkJoin = isNumber(list_join);
          checkX = isNumber(x);
          checks = ['a', 'b', 'c', 'd', 'e', 'total'].includes(join);
          checkGame = ['1', '3', '5', '10'].includes(String(game));
          checkMoney = ['1', '10', '100', '1000'].includes(money);
          if (!(!checks || list_join.length > 10 || !checkX || !checkMoney || !checkGame)) {
            _context6.next = 7;
            break;
          }
          return _context6.abrupt("return", false);
        case 7:
          if (!checkJoin) {
            _context6.next = 20;
            break;
          }
          arr = list_join.split('');
          length = arr.length;
          i = 0;
        case 11:
          if (!(i < length)) {
            _context6.next = 18;
            break;
          }
          joinNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(arr[i]);
          if (joinNum) {
            _context6.next = 15;
            break;
          }
          return _context6.abrupt("return", false);
        case 15:
          i++;
          _context6.next = 11;
          break;
        case 18:
          _context6.next = 30;
          break;
        case 20:
          _arr = list_join.split('');
          _length = _arr.length;
          _i = 0;
        case 23:
          if (!(_i < _length)) {
            _context6.next = 30;
            break;
          }
          joinStr = ["c", "l", "b", "s"].includes(_arr[_i]);
          if (joinStr) {
            _context6.next = 27;
            break;
          }
          return _context6.abrupt("return", false);
        case 27:
          _i++;
          _context6.next = 23;
          break;
        case 30:
          return _context6.abrupt("return", true);
        case 31:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function validateBet(_x11, _x12, _x13, _x14, _x15) {
    return _ref6.apply(this, arguments);
  };
}();
var betK5D = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _req$body, join, list_join, x, money, game, auth, validate, _yield$connection$que13, _yield$connection$que14, k5DNow, _yield$connection$que15, _yield$connection$que16, user, userInfo, period, date, years, months, days, id_product, total, fee, price, check, timeNow, sql, _yield$connection$que17, _yield$connection$que18, users, _yield$connection$que19, _yield$connection$que20, level, level0, sql2, total_m, f1, f2, f3, f4;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _req$body = req.body, join = _req$body.join, list_join = _req$body.list_join, x = _req$body.x, money = _req$body.money, game = _req$body.game;
          auth = req.cookies.auth;
          _context7.next = 5;
          return validateBet(join, list_join, x, money, game);
        case 5:
          validate = _context7.sent;
          if (validate) {
            _context7.next = 8;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            message: 'Invalid bet',
            status: false
          }));
        case 8:
          _context7.next = 10;
          return _connectDB["default"].query("SELECT period FROM 5d WHERE status = 0 AND game = ".concat(game, " ORDER BY id DESC LIMIT 1 "));
        case 10:
          _yield$connection$que13 = _context7.sent;
          _yield$connection$que14 = _slicedToArray(_yield$connection$que13, 1);
          k5DNow = _yield$connection$que14[0];
          _context7.next = 15;
          return _connectDB["default"].query('SELECT `phone`, `code`, `invite`, `level`, `money` FROM users WHERE token = ? AND veri = 1  LIMIT 1 ', [auth]);
        case 15:
          _yield$connection$que15 = _context7.sent;
          _yield$connection$que16 = _slicedToArray(_yield$connection$que15, 1);
          user = _yield$connection$que16[0];
          if (!(k5DNow.length < 1 || user.length < 1)) {
            _context7.next = 20;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            message: 'Error!',
            status: false
          }));
        case 20:
          userInfo = user[0];
          period = k5DNow[0];
          date = new Date();
          years = formateT(date.getFullYear());
          months = formateT(date.getMonth() + 1);
          days = formateT(date.getDate());
          id_product = years + months + days + Math.floor(Math.random() * 1000000000000000);
          total = money * x * String(list_join).split('').length;
          fee = total * 0.02;
          price = total - fee;
          check = userInfo.money - total;
          if (!(check >= 0)) {
            _context7.next = 62;
            break;
          }
          timeNow = Date.now();
          sql = "INSERT INTO result_5d SET id_product = ?,phone = ?,code = ?,invite = ?,stage = ?,level = ?,money = ?,price = ?,amount = ?,fee = ?,game = ?,join_bet = ?,bet = ?,status = ?,time = ?";
          _context7.next = 36;
          return _connectDB["default"].execute(sql, [id_product, userInfo.phone, userInfo.code, userInfo.invite, period.period, userInfo.level, total, price, x, fee, game, join, list_join, 0, timeNow]);
        case 36:
          _context7.next = 38;
          return _connectDB["default"].execute('UPDATE `users` SET `money` = `money` - ? WHERE `token` = ? ', [total, auth]);
        case 38:
          _context7.next = 40;
          return _connectDB["default"].query('SELECT `money`, `level` FROM users WHERE token = ? AND veri = 1  LIMIT 1 ', [auth]);
        case 40:
          _yield$connection$que17 = _context7.sent;
          _yield$connection$que18 = _slicedToArray(_yield$connection$que17, 1);
          users = _yield$connection$que18[0];
          _context7.next = 45;
          return rosesPlus(auth, money * x);
        case 45:
          _context7.next = 47;
          return _connectDB["default"].query('SELECT * FROM level ');
        case 47:
          _yield$connection$que19 = _context7.sent;
          _yield$connection$que20 = _slicedToArray(_yield$connection$que19, 1);
          level = _yield$connection$que20[0];
          level0 = level[0];
          sql2 = "INSERT INTO roses SET phone = ?,code = ?,invite = ?,f1 = ?,f2 = ?,f3 = ?,f4 = ?,time = ?";
          total_m = total;
          f1 = total_m / 100 * level0.f1;
          f2 = total_m / 100 * level0.f2;
          f3 = total_m / 100 * level0.f3;
          f4 = total_m / 100 * level0.f4;
          _context7.next = 59;
          return _connectDB["default"].execute(sql2, [userInfo.phone, userInfo.code, userInfo.invite, f1, f2, f3, f4, timeNow]);
        case 59:
          return _context7.abrupt("return", res.status(200).json({
            message: 'Successful bet',
            status: true,
            // data: result,
            change: users[0].level,
            money: users[0].money
          }));
        case 62:
          return _context7.abrupt("return", res.status(200).json({
            message: 'The amount is not enough',
            status: false
          }));
        case 63:
          _context7.next = 68;
          break;
        case 65:
          _context7.prev = 65;
          _context7.t0 = _context7["catch"](0);
          if (_context7.t0) console.log(_context7.t0);
        case 68:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 65]]);
  }));
  return function betK5D(_x16, _x17) {
    return _ref7.apply(this, arguments);
  };
}();
var listOrderOld = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var _req$body2, gameJoin, pageno, pageto, auth, checkGame, _yield$connection$que21, _yield$connection$que22, user, game, _yield$connection$que23, _yield$connection$que24, k5d, _yield$connection$que25, _yield$connection$que26, k5dAll, _yield$connection$que27, _yield$connection$que28, period, page;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _req$body2 = req.body, gameJoin = _req$body2.gameJoin, pageno = _req$body2.pageno, pageto = _req$body2.pageto;
          auth = req.cookies.auth;
          checkGame = ['1', '3', '5', '10'].includes(String(gameJoin));
          if (!(!checkGame || pageno < 0 || pageto < 0)) {
            _context8.next = 5;
            break;
          }
          return _context8.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 5:
          _context8.next = 7;
          return _connectDB["default"].query('SELECT `phone`, `code`, `invite`, `level`, `money` FROM users WHERE token = ? AND veri = 1  LIMIT 1 ', [auth]);
        case 7:
          _yield$connection$que21 = _context8.sent;
          _yield$connection$que22 = _slicedToArray(_yield$connection$que21, 1);
          user = _yield$connection$que22[0];
          game = Number(gameJoin);
          _context8.next = 13;
          return _connectDB["default"].query("SELECT * FROM 5d WHERE status != 0 AND game = '".concat(game, "' ORDER BY id DESC LIMIT ").concat(pageno, ", ").concat(pageto, " "));
        case 13:
          _yield$connection$que23 = _context8.sent;
          _yield$connection$que24 = _slicedToArray(_yield$connection$que23, 1);
          k5d = _yield$connection$que24[0];
          _context8.next = 18;
          return _connectDB["default"].query("SELECT * FROM 5d WHERE status != 0 AND game = '".concat(game, "' "));
        case 18:
          _yield$connection$que25 = _context8.sent;
          _yield$connection$que26 = _slicedToArray(_yield$connection$que25, 1);
          k5dAll = _yield$connection$que26[0];
          _context8.next = 23;
          return _connectDB["default"].query("SELECT period FROM 5d WHERE status = 0 AND game = '".concat(game, "' ORDER BY id DESC LIMIT 1 "));
        case 23:
          _yield$connection$que27 = _context8.sent;
          _yield$connection$que28 = _slicedToArray(_yield$connection$que27, 1);
          period = _yield$connection$que28[0];
          if (!(k5d.length == 0)) {
            _context8.next = 28;
            break;
          }
          return _context8.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            page: 1,
            status: false
          }));
        case 28:
          if (!(!pageno || !pageto || !user[0] || !k5d[0] || !period[0])) {
            _context8.next = 30;
            break;
          }
          return _context8.abrupt("return", res.status(200).json({
            message: 'Error!',
            status: false
          }));
        case 30:
          page = Math.ceil(k5dAll.length / 10);
          return _context8.abrupt("return", res.status(200).json({
            code: 0,
            msg: "Get success",
            data: {
              gameslist: k5d
            },
            period: period[0].period,
            page: page,
            status: true
          }));
        case 32:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function listOrderOld(_x18, _x19) {
    return _ref8.apply(this, arguments);
  };
}();
var GetMyEmerdList = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var _req$body3, gameJoin, pageno, pageto, auth, checkGame, game, _yield$connection$que29, _yield$connection$que30, user, _yield$connection$que31, _yield$connection$que32, result_5d, _yield$connection$que33, _yield$connection$que34, result_5dAll, page, datas;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _req$body3 = req.body, gameJoin = _req$body3.gameJoin, pageno = _req$body3.pageno, pageto = _req$body3.pageto;
          auth = req.cookies.auth;
          checkGame = ['1', '3', '5', '10'].includes(String(gameJoin));
          if (!(!checkGame || pageno < 0 || pageto < 0)) {
            _context9.next = 5;
            break;
          }
          return _context9.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 5:
          game = Number(gameJoin);
          _context9.next = 8;
          return _connectDB["default"].query('SELECT `phone`, `code`, `invite`, `level`, `money` FROM users WHERE token = ? AND veri = 1 LIMIT 1 ', [auth]);
        case 8:
          _yield$connection$que29 = _context9.sent;
          _yield$connection$que30 = _slicedToArray(_yield$connection$que29, 1);
          user = _yield$connection$que30[0];
          _context9.next = 13;
          return _connectDB["default"].query("SELECT * FROM result_5d WHERE phone = ? AND game = '".concat(game, "' ORDER BY id DESC LIMIT ").concat(Number(pageno) + ',' + Number(pageto)), [user[0].phone]);
        case 13:
          _yield$connection$que31 = _context9.sent;
          _yield$connection$que32 = _slicedToArray(_yield$connection$que31, 1);
          result_5d = _yield$connection$que32[0];
          _context9.next = 18;
          return _connectDB["default"].query("SELECT * FROM result_5d WHERE phone = ? AND game = '".concat(game, "' ORDER BY id DESC "), [user[0].phone]);
        case 18:
          _yield$connection$que33 = _context9.sent;
          _yield$connection$que34 = _slicedToArray(_yield$connection$que33, 1);
          result_5dAll = _yield$connection$que34[0];
          if (result_5d[0]) {
            _context9.next = 23;
            break;
          }
          return _context9.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            page: 1,
            status: false
          }));
        case 23:
          if (!(!pageno || !pageto || !user[0] || !result_5d[0])) {
            _context9.next = 25;
            break;
          }
          return _context9.abrupt("return", res.status(200).json({
            message: 'Error!',
            status: true
          }));
        case 25:
          page = Math.ceil(result_5dAll.length / 10);
          datas = result_5d.map(function (data) {
            var id = data.id,
              phone = data.phone,
              code = data.code,
              invite = data.invite,
              level = data.level,
              game = data.game,
              others = _objectWithoutProperties(data, _excluded);
            return others;
          });
          return _context9.abrupt("return", res.status(200).json({
            code: 0,
            msg: "Get Success",
            data: {
              gameslist: datas
            },
            page: page,
            status: true
          }));
        case 28:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function GetMyEmerdList(_x20, _x21) {
    return _ref9.apply(this, arguments);
  };
}();
function makeid(length) {
  var result = '';
  var characters = '0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
var add5D = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(game) {
    var join, result2, timeNow, _yield$connection$que35, _yield$connection$que36, k5D, _yield$connection$que37, _yield$connection$que38, setting, period, nextResult, newArr, result, arr, check, i, sql;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          join = '';
          if (game == 1) join = 'k5d';
          if (game == 3) join = 'k5d3';
          if (game == 5) join = 'k5d5';
          if (game == 10) join = 'k5d10';
          result2 = makeid(5);
          timeNow = Date.now();
          _context10.next = 10;
          return _connectDB["default"].query("SELECT period FROM 5d WHERE status = 0 AND game = ".concat(game, " ORDER BY id DESC LIMIT 1 "));
        case 10:
          _yield$connection$que35 = _context10.sent;
          _yield$connection$que36 = _slicedToArray(_yield$connection$que35, 1);
          k5D = _yield$connection$que36[0];
          _context10.next = 15;
          return _connectDB["default"].query('SELECT * FROM `admin` ');
        case 15:
          _yield$connection$que37 = _context10.sent;
          _yield$connection$que38 = _slicedToArray(_yield$connection$que37, 1);
          setting = _yield$connection$que38[0];
          period = k5D[0].period;
          nextResult = '';
          if (game == 1) nextResult = setting[0].k5d;
          if (game == 3) nextResult = setting[0].k5d3;
          if (game == 5) nextResult = setting[0].k5d5;
          if (game == 10) nextResult = setting[0].k5d10;
          newArr = '';
          if (!(nextResult == '-1')) {
            _context10.next = 31;
            break;
          }
          _context10.next = 28;
          return _connectDB["default"].execute("UPDATE 5d SET result = ?,status = ? WHERE period = ? AND game = \"".concat(game, "\""), [result2, 1, period]);
        case 28:
          newArr = '-1';
          _context10.next = 38;
          break;
        case 31:
          result = '';
          arr = nextResult.split('|');
          check = arr.length;
          if (check == 1) {
            newArr = '-1';
          } else {
            for (i = 1; i < arr.length; i++) {
              newArr += arr[i] + '|';
            }
            newArr = newArr.slice(0, -1);
          }
          result = arr[0];
          _context10.next = 38;
          return _connectDB["default"].execute("UPDATE 5d SET result = ?,status = ? WHERE period = ? AND game = ".concat(game), [result, 1, period]);
        case 38:
          sql = "INSERT INTO 5d SET period = ?, result = ?, game = ?, status = ?, time = ?";
          _context10.next = 41;
          return _connectDB["default"].execute(sql, [Number(period) + 1, 0, game, 0, timeNow]);
        case 41:
          if (game == 1) join = 'k5d';
          if (game == 3) join = 'k5d3';
          if (game == 5) join = 'k5d5';
          if (game == 10) join = 'k5d10';
          _context10.next = 47;
          return _connectDB["default"].execute("UPDATE admin SET ".concat(join, " = ?"), [newArr]);
        case 47:
          _context10.next = 52;
          break;
        case 49:
          _context10.prev = 49;
          _context10.t0 = _context10["catch"](0);
          if (_context10.t0) {
            console.log(_context10.t0);
          }
        case 52:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 49]]);
  }));
  return function add5D(_x22) {
    return _ref10.apply(this, arguments);
  };
}();
function funHanding(_x23) {
  return _funHanding.apply(this, arguments);
}
function _funHanding() {
  _funHanding = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(game) {
    var _yield$connection$que39, _yield$connection$que40, k5d, k5dInfo, result, a, b, c, d, e, total, i, _yield$connection$exe3, _yield$connection$exe4, joinA, lengthA, _i2, info, sult, check, joinNum, _yield$connection$exe5, _yield$connection$exe6, joinB, lengthB, _i3, _info, _sult, _check, _joinNum, _yield$connection$exe7, _yield$connection$exe8, joinC, lengthC, _i4, _info2, _sult2, _check2, _joinNum2, _yield$connection$exe9, _yield$connection$exe10, joinD, lengthD, _i5, _info3, _sult3, _check3, _joinNum3, _yield$connection$exe11, _yield$connection$exe12, joinE, lengthE, _i6, _info4, _sult4, _check4, _joinNum4, _yield$connection$exe13, _yield$connection$exe14, joinTotal;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return _connectDB["default"].query("SELECT * FROM 5d WHERE status != 0 AND game = ".concat(game, " ORDER BY id DESC LIMIT 1 "));
        case 2:
          _yield$connection$que39 = _context12.sent;
          _yield$connection$que40 = _slicedToArray(_yield$connection$que39, 1);
          k5d = _yield$connection$que40[0];
          k5dInfo = k5d[0]; // update ket qua
          _context12.next = 8;
          return _connectDB["default"].execute("UPDATE result_5d SET result = ? WHERE status = 0 AND game = ".concat(game), [k5dInfo.result]);
        case 8:
          result = String(k5dInfo.result).split('');
          a = result[0];
          b = result[1];
          c = result[2];
          d = result[3];
          e = result[4];
          total = 0;
          for (i = 0; i < result.length; i++) {
            total += Number(result[i]);
          }

          // xử lý game a
          _context12.next = 18;
          return _connectDB["default"].execute("SELECT id, bet FROM result_5d WHERE status = 0 AND game = ".concat(game, " AND join_bet = 'a' "));
        case 18:
          _yield$connection$exe3 = _context12.sent;
          _yield$connection$exe4 = _slicedToArray(_yield$connection$exe3, 1);
          joinA = _yield$connection$exe4[0];
          lengthA = joinA.length;
          _i2 = 0;
        case 23:
          if (!(_i2 < lengthA)) {
            _context12.next = 35;
            break;
          }
          info = joinA[_i2];
          sult = info.bet.split('');
          check = isNumber(info.bet);
          if (!check) {
            _context12.next = 32;
            break;
          }
          joinNum = sult.includes(a);
          if (joinNum) {
            _context12.next = 32;
            break;
          }
          _context12.next = 32;
          return _connectDB["default"].execute("UPDATE result_5d SET status = 2 WHERE id = ? ", [info.id]);
        case 32:
          _i2++;
          _context12.next = 23;
          break;
        case 35:
          if (!(lengthA > 0)) {
            _context12.next = 52;
            break;
          }
          if (!(a == '0' || a == '1' || a == '2' || a == '3' || a == '4')) {
            _context12.next = 39;
            break;
          }
          _context12.next = 39;
          return _connectDB["default"].execute("UPDATE result_5d SET status = 2 WHERE join_bet = 'a' AND bet = 'b' ");
        case 39:
          ;
          if (!(a == '5' || a == '6' || a == '7' || a == '8' || a == '9')) {
            _context12.next = 43;
            break;
          }
          _context12.next = 43;
          return _connectDB["default"].execute("UPDATE result_5d SET status = 2 WHERE join_bet = 'a' AND bet = 's' ");
        case 43:
          ;
          if (!(Number(a) % 2 == 0)) {
            _context12.next = 47;
            break;
          }
          _context12.next = 47;
          return _connectDB["default"].execute("UPDATE result_5d SET status = 2 WHERE join_bet = 'a' AND bet = 'l' ");
        case 47:
          ;
          if (!(Number(a) % 2 != 0)) {
            _context12.next = 51;
            break;
          }
          _context12.next = 51;
          return _connectDB["default"].execute("UPDATE result_5d SET status = 2 WHERE join_bet = 'a' AND bet = 'c' ");
        case 51:
          ;
        case 52:
          _context12.next = 54;
          return _connectDB["default"].execute("SELECT id, bet FROM result_5d WHERE status = 0 AND game = ".concat(game, " AND join_bet = 'b' "));
        case 54:
          _yield$connection$exe5 = _context12.sent;
          _yield$connection$exe6 = _slicedToArray(_yield$connection$exe5, 1);
          joinB = _yield$connection$exe6[0];
          lengthB = joinB.length;
          _i3 = 0;
        case 59:
          if (!(_i3 < lengthB)) {
            _context12.next = 71;
            break;
          }
          _info = joinB[_i3];
          _sult = _info.bet.split('');
          _check = isNumber(_info.bet);
          if (!_check) {
            _context12.next = 68;
            break;
          }
          _joinNum = _sult.includes(b);
          if (_joinNum) {
            _context12.next = 68;
            break;
          }
          _context12.next = 68;
          return _connectDB["default"].execute("UPDATE result_5d SET status = 2 WHERE id = ? ", [_info.id]);
        case 68:
          _i3++;
          _context12.next = 59;
          break;
        case 71:
          if (!(lengthB > 0)) {
            _context12.next = 88;
            break;
          }
          if (!(b == '0' || b == '1' || b == '2' || b == '3' || b == '4')) {
            _context12.next = 75;
            break;
          }
          _context12.next = 75;
          return _connectDB["default"].execute("UPDATE result_5d SET status = 2 WHERE join_bet = 'b' AND bet = 'b' ");
        case 75:
          ;
          if (!(b == '5' || b == '6' || b == '7' || b == '8' || b == '9')) {
            _context12.next = 79;
            break;
          }
          _context12.next = 79;
          return _connectDB["default"].execute("UPDATE result_5d SET status = 2 WHERE join_bet = 'b' AND bet = 's' ");
        case 79:
          ;
          if (!(Number(b) % 2 == 0)) {
            _context12.next = 83;
            break;
          }
          _context12.next = 83;
          return _connectDB["default"].execute("UPDATE result_5d SET status = 2 WHERE join_bet = 'b' AND bet = 'l' ");
        case 83:
          ;
          if (!(Number(b) % 2 != 0)) {
            _context12.next = 87;
            break;
          }
          _context12.next = 87;
          return _connectDB["default"].execute("UPDATE result_5d SET status = 2 WHERE join_bet = 'b' AND bet = 'c' ");
        case 87:
          ;
        case 88:
          _context12.next = 90;
          return _connectDB["default"].execute("SELECT id, bet FROM result_5d WHERE status = 0 AND game = ".concat(game, " AND join_bet = 'c' "));
        case 90:
          _yield$connection$exe7 = _context12.sent;
          _yield$connection$exe8 = _slicedToArray(_yield$connection$exe7, 1);
          joinC = _yield$connection$exe8[0];
          lengthC = joinC.length;
          _i4 = 0;
        case 95:
          if (!(_i4 < lengthC)) {
            _context12.next = 107;
            break;
          }
          _info2 = joinC[_i4];
          _sult2 = _info2.bet.split('');
          _check2 = isNumber(_info2.bet);
          if (!_check2) {
            _context12.next = 104;
            break;
          }
          _joinNum2 = _sult2.includes(c);
          if (_joinNum2) {
            _context12.next = 104;
            break;
          }
          _context12.next = 104;
          return _connectDB["default"].execute("UPDATE result_5d SET status = 2 WHERE id = ? ", [_info2.id]);
        case 104:
          _i4++;
          _context12.next = 95;
          break;
        case 107:
          if (!(lengthC > 0)) {
            _context12.next = 124;
            break;
          }
          if (!(c == '0' || c == '1' || c == '2' || c == '3' || c == '4')) {
            _context12.next = 111;
            break;
          }
          _context12.next = 111;
          return _connectDB["default"].execute("UPDATE result_5d SET status = 2 WHERE join_bet = 'c' AND bet = 'b' ");
        case 111:
          ;
          if (!(c == '5' || c == '6' || c == '7' || c == '8' || c == '9')) {
            _context12.next = 115;
            break;
          }
          _context12.next = 115;
          return _connectDB["default"].execute("UPDATE result_5d SET status = 2 WHERE join_bet = 'c' AND bet = 's' ");
        case 115:
          ;
          if (!(Number(c) % 2 == 0)) {
            _context12.next = 119;
            break;
          }
          _context12.next = 119;
          return _connectDB["default"].execute("UPDATE result_5d SET status = 2 WHERE join_bet = 'c' AND bet = 'l' ");
        case 119:
          ;
          if (!(Number(c) % 2 != 0)) {
            _context12.next = 123;
            break;
          }
          _context12.next = 123;
          return _connectDB["default"].execute("UPDATE result_5d SET status = 2 WHERE join_bet = 'c' AND bet = 'c' ");
        case 123:
          ;
        case 124:
          _context12.next = 126;
          return _connectDB["default"].execute("SELECT id, bet FROM result_5d WHERE status = 0 AND game = ".concat(game, " AND join_bet = 'd' "));
        case 126:
          _yield$connection$exe9 = _context12.sent;
          _yield$connection$exe10 = _slicedToArray(_yield$connection$exe9, 1);
          joinD = _yield$connection$exe10[0];
          lengthD = joinD.length;
          _i5 = 0;
        case 131:
          if (!(_i5 < lengthD)) {
            _context12.next = 143;
            break;
          }
          _info3 = joinD[_i5];
          _sult3 = _info3.bet.split('');
          _check3 = isNumber(_info3.bet);
          if (!_check3) {
            _context12.next = 140;
            break;
          }
          _joinNum3 = _sult3.includes(d);
          if (_joinNum3) {
            _context12.next = 140;
            break;
          }
          _context12.next = 140;
          return _connectDB["default"].execute("UPDATE result_5d SET status = 2 WHERE id = ? ", [_info3.id]);
        case 140:
          _i5++;
          _context12.next = 131;
          break;
        case 143:
          if (!(lengthD > 0)) {
            _context12.next = 160;
            break;
          }
          if (!(d == '0' || d == '1' || d == '2' || d == '3' || d == '4')) {
            _context12.next = 147;
            break;
          }
          _context12.next = 147;
          return _connectDB["default"].execute("UPDATE result_5d SET status = 2 WHERE join_bet = 'd' AND bet = 'b' ");
        case 147:
          ;
          if (!(d == '5' || d == '6' || d == '7' || d == '8' || d == '9')) {
            _context12.next = 151;
            break;
          }
          _context12.next = 151;
          return _connectDB["default"].execute("UPDATE result_5d SET status = 2 WHERE join_bet = 'd' AND bet = 's' ");
        case 151:
          ;
          if (!(Number(d) % 2 == 0)) {
            _context12.next = 155;
            break;
          }
          _context12.next = 155;
          return _connectDB["default"].execute("UPDATE result_5d SET status = 2 WHERE join_bet = 'd' AND bet = 'l' ");
        case 155:
          ;
          if (!(Number(d) % 2 != 0)) {
            _context12.next = 159;
            break;
          }
          _context12.next = 159;
          return _connectDB["default"].execute("UPDATE result_5d SET status = 2 WHERE join_bet = 'd' AND bet = 'c' ");
        case 159:
          ;
        case 160:
          _context12.next = 162;
          return _connectDB["default"].execute("SELECT id, bet FROM result_5d WHERE status = 0 AND game = ".concat(game, " AND join_bet = 'e' "));
        case 162:
          _yield$connection$exe11 = _context12.sent;
          _yield$connection$exe12 = _slicedToArray(_yield$connection$exe11, 1);
          joinE = _yield$connection$exe12[0];
          lengthE = joinE.length;
          _i6 = 0;
        case 167:
          if (!(_i6 < lengthE)) {
            _context12.next = 179;
            break;
          }
          _info4 = joinE[_i6];
          _sult4 = _info4.bet.split('');
          _check4 = isNumber(_info4.bet);
          if (!_check4) {
            _context12.next = 176;
            break;
          }
          _joinNum4 = _sult4.includes(e);
          if (_joinNum4) {
            _context12.next = 176;
            break;
          }
          _context12.next = 176;
          return _connectDB["default"].execute("UPDATE result_5d SET status = 2 WHERE id = ? ", [_info4.id]);
        case 176:
          _i6++;
          _context12.next = 167;
          break;
        case 179:
          if (!(lengthE > 0)) {
            _context12.next = 196;
            break;
          }
          if (!(e == '0' || e == '1' || e == '2' || e == '3' || e == '4')) {
            _context12.next = 183;
            break;
          }
          _context12.next = 183;
          return _connectDB["default"].execute("UPDATE result_5d SET status = 2 WHERE join_bet = 'e' AND bet = 'b' ");
        case 183:
          ;
          if (!(e == '5' || e == '6' || e == '7' || e == '8' || e == '9')) {
            _context12.next = 187;
            break;
          }
          _context12.next = 187;
          return _connectDB["default"].execute("UPDATE result_5d SET status = 2 WHERE join_bet = 'e' AND bet = 's' ");
        case 187:
          ;
          if (!(Number(e) % 2 == 0)) {
            _context12.next = 191;
            break;
          }
          _context12.next = 191;
          return _connectDB["default"].execute("UPDATE result_5d SET status = 2 WHERE join_bet = 'e' AND bet = 'l' ");
        case 191:
          ;
          if (!(Number(e) % 2 != 0)) {
            _context12.next = 195;
            break;
          }
          _context12.next = 195;
          return _connectDB["default"].execute("UPDATE result_5d SET status = 2 WHERE join_bet = 'e' AND bet = 'c' ");
        case 195:
          ;
        case 196:
          _context12.next = 198;
          return _connectDB["default"].execute("SELECT id, bet FROM result_5d WHERE status = 0 AND game = ".concat(game, " AND join_bet = 'total' "));
        case 198:
          _yield$connection$exe13 = _context12.sent;
          _yield$connection$exe14 = _slicedToArray(_yield$connection$exe13, 1);
          joinTotal = _yield$connection$exe14[0];
          if (!(joinTotal.length > 0)) {
            _context12.next = 218;
            break;
          }
          if (!(total <= 22)) {
            _context12.next = 205;
            break;
          }
          _context12.next = 205;
          return _connectDB["default"].execute("UPDATE result_5d SET status = 2 WHERE join_bet = 'total' AND bet = 'b' ");
        case 205:
          ;
          if (!(total > 22)) {
            _context12.next = 209;
            break;
          }
          _context12.next = 209;
          return _connectDB["default"].execute("UPDATE result_5d SET status = 2 WHERE join_bet = 'total' AND bet = 's' ");
        case 209:
          ;
          if (!(total % 2 == 0)) {
            _context12.next = 213;
            break;
          }
          _context12.next = 213;
          return _connectDB["default"].execute("UPDATE result_5d SET status = 2 WHERE join_bet = 'total' AND bet = 'l' ");
        case 213:
          ;
          if (!(total % 2 != 0)) {
            _context12.next = 217;
            break;
          }
          _context12.next = 217;
          return _connectDB["default"].execute("UPDATE result_5d SET status = 2 WHERE join_bet = 'total' AND bet = 'c' ");
        case 217:
          ;
        case 218:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return _funHanding.apply(this, arguments);
}
var handling5D = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(typeid) {
    var game, _yield$connection$exe, _yield$connection$exe2, order, i, orders, id, phone, nhan_duoc, check, arr, total, fee, price, sql;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          game = Number(typeid);
          _context11.next = 3;
          return funHanding(game);
        case 3:
          _context11.next = 5;
          return _connectDB["default"].execute("SELECT id, phone, bet, price, money, fee, amount FROM result_5d WHERE status = 0 AND game = ".concat(game, " "));
        case 5:
          _yield$connection$exe = _context11.sent;
          _yield$connection$exe2 = _slicedToArray(_yield$connection$exe, 1);
          order = _yield$connection$exe2[0];
          i = 0;
        case 9:
          if (!(i < order.length)) {
            _context11.next = 24;
            break;
          }
          orders = order[i];
          id = orders.id;
          phone = orders.phone;
          nhan_duoc = 0;
          check = isNumber(orders.bet);
          if (check) {
            arr = orders.bet.split('');
            total = orders.money / arr.length / orders.amount;
            fee = total * 0.02;
            price = total - fee;
            nhan_duoc += price * 9;
          } else {
            nhan_duoc += orders.price * 2;
          }
          _context11.next = 18;
          return _connectDB["default"].execute('UPDATE `result_5d` SET `get` = ?, `status` = 1 WHERE `id` = ? ', [nhan_duoc, id]);
        case 18:
          sql = 'UPDATE `users` SET `money` = `money` + ? WHERE `phone` = ? ';
          _context11.next = 21;
          return _connectDB["default"].execute(sql, [nhan_duoc, phone]);
        case 21:
          i++;
          _context11.next = 9;
          break;
        case 24:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function handling5D(_x24) {
    return _ref11.apply(this, arguments);
  };
}();
module.exports = {
  K5DPage: K5DPage,
  K5DPage3: K5DPage3,
  K5DPage5: K5DPage5,
  K5DPage10: K5DPage10,
  betK5D: betK5D,
  listOrderOld: listOrderOld,
  GetMyEmerdList: GetMyEmerdList,
  add5D: add5D,
  handling5D: handling5D
};