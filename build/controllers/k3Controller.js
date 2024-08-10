"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
var K3Page = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", res.render("bet/k3/k3.ejs"));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function K3Page(_x, _x2) {
    return _ref.apply(this, arguments);
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
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(auth, money) {
    var _yield$connection$que, _yield$connection$que2, level, level0, _yield$connection$que3, _yield$connection$que4, user, userInfo, _yield$connection$que5, _yield$connection$que6, f1, infoF1, rosesF1, _yield$connection$que7, _yield$connection$que8, f2, infoF2, rosesF2, _yield$connection$que9, _yield$connection$que10, f3, infoF3, rosesF3, _yield$connection$que11, _yield$connection$que12, f4, infoF4, rosesF4;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _connectDB["default"].query('SELECT * FROM level ');
        case 2:
          _yield$connection$que = _context2.sent;
          _yield$connection$que2 = _slicedToArray(_yield$connection$que, 1);
          level = _yield$connection$que2[0];
          level0 = level[0];
          _context2.next = 8;
          return _connectDB["default"].query('SELECT `phone`, `code`, `invite` FROM users WHERE token = ? AND veri = 1  LIMIT 1 ', [auth]);
        case 8:
          _yield$connection$que3 = _context2.sent;
          _yield$connection$que4 = _slicedToArray(_yield$connection$que3, 1);
          user = _yield$connection$que4[0];
          userInfo = user[0];
          _context2.next = 14;
          return _connectDB["default"].query('SELECT `phone`, `code`, `invite`, `rank` FROM users WHERE code = ? AND veri = 1  LIMIT 1 ', [userInfo.invite]);
        case 14:
          _yield$connection$que5 = _context2.sent;
          _yield$connection$que6 = _slicedToArray(_yield$connection$que5, 1);
          f1 = _yield$connection$que6[0];
          if (!(money >= 10000)) {
            _context2.next = 53;
            break;
          }
          if (!(f1.length > 0)) {
            _context2.next = 53;
            break;
          }
          infoF1 = f1[0];
          rosesF1 = money / 100 * level0.f1;
          _context2.next = 23;
          return _connectDB["default"].query('UPDATE users SET money = money + ?, roses_f1 = roses_f1 + ?, roses_f = roses_f + ?, roses_today = roses_today + ? WHERE phone = ? ', [rosesF1, rosesF1, rosesF1, rosesF1, infoF1.phone]);
        case 23:
          _context2.next = 25;
          return _connectDB["default"].query('SELECT `phone`, `code`, `invite`, `rank` FROM users WHERE code = ? AND veri = 1  LIMIT 1 ', [infoF1.invite]);
        case 25:
          _yield$connection$que7 = _context2.sent;
          _yield$connection$que8 = _slicedToArray(_yield$connection$que7, 1);
          f2 = _yield$connection$que8[0];
          if (!(f2.length > 0)) {
            _context2.next = 53;
            break;
          }
          infoF2 = f2[0];
          rosesF2 = money / 100 * level0.f2;
          _context2.next = 33;
          return _connectDB["default"].query('UPDATE users SET money = money + ?, roses_f = roses_f + ?, roses_today = roses_today + ? WHERE phone = ? ', [rosesF2, rosesF2, rosesF2, infoF2.phone]);
        case 33:
          _context2.next = 35;
          return _connectDB["default"].query('SELECT `phone`, `code`, `invite`, `rank` FROM users WHERE code = ? AND veri = 1  LIMIT 1 ', [infoF2.invite]);
        case 35:
          _yield$connection$que9 = _context2.sent;
          _yield$connection$que10 = _slicedToArray(_yield$connection$que9, 1);
          f3 = _yield$connection$que10[0];
          if (!(f3.length > 0)) {
            _context2.next = 53;
            break;
          }
          infoF3 = f3[0];
          rosesF3 = money / 100 * level0.f3;
          _context2.next = 43;
          return _connectDB["default"].query('UPDATE users SET money = money + ?, roses_f = roses_f + ?, roses_today = roses_today + ? WHERE phone = ? ', [rosesF3, rosesF3, rosesF3, infoF3.phone]);
        case 43:
          _context2.next = 45;
          return _connectDB["default"].query('SELECT `phone`, `code`, `invite`, `rank` FROM users WHERE code = ? AND veri = 1  LIMIT 1 ', [infoF3.invite]);
        case 45:
          _yield$connection$que11 = _context2.sent;
          _yield$connection$que12 = _slicedToArray(_yield$connection$que11, 1);
          f4 = _yield$connection$que12[0];
          if (!(f4.length > 0)) {
            _context2.next = 53;
            break;
          }
          infoF4 = f4[0];
          rosesF4 = money / 100 * level0.f4;
          _context2.next = 53;
          return _connectDB["default"].query('UPDATE users SET money = money + ?, roses_f = roses_f + ?, roses_today = roses_today + ? WHERE phone = ? ', [rosesF4, rosesF4, rosesF4, infoF4.phone]);
        case 53:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function rosesPlus(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var validateBet = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(join, list_join, x, money, game) {
    var checkJoin, checkX, checks, checkGame, checkMoney, arr, length, i, joinNum, _arr, _length, _i, joinStr;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          checkJoin = isNumber(list_join);
          checkX = isNumber(x);
          checks = ['a', 'b', 'c', 'd', 'e', 'total'].includes(join);
          checkGame = ['1', '3', '5', '10'].includes(String(game));
          checkMoney = ['1000', '10000', '100000', '1000000'].includes(money);
          if (!(!checks || list_join.length > 10 || !checkX || !checkMoney || !checkGame)) {
            _context3.next = 7;
            break;
          }
          return _context3.abrupt("return", false);
        case 7:
          if (!checkJoin) {
            _context3.next = 20;
            break;
          }
          arr = list_join.split('');
          length = arr.length;
          i = 0;
        case 11:
          if (!(i < length)) {
            _context3.next = 18;
            break;
          }
          joinNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(arr[i]);
          if (joinNum) {
            _context3.next = 15;
            break;
          }
          return _context3.abrupt("return", false);
        case 15:
          i++;
          _context3.next = 11;
          break;
        case 18:
          _context3.next = 30;
          break;
        case 20:
          _arr = list_join.split('');
          _length = _arr.length;
          _i = 0;
        case 23:
          if (!(_i < _length)) {
            _context3.next = 30;
            break;
          }
          joinStr = ["c", "l", "b", "s"].includes(_arr[_i]);
          if (joinStr) {
            _context3.next = 27;
            break;
          }
          return _context3.abrupt("return", false);
        case 27:
          _i++;
          _context3.next = 23;
          break;
        case 30:
          return _context3.abrupt("return", true);
        case 31:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function validateBet(_x5, _x6, _x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
var betK3 = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$body, listJoin, game, gameJoin, xvalue, money, auth, _yield$connection$que13, _yield$connection$que14, k3Now, _yield$connection$que15, _yield$connection$que16, user, userInfo, period, date, years, months, days, id_product, total, twoSame, motDuyNhat, lengthArr, count, arr, i, baDuyNhat, countBaDuyNhat, threeSame, threeNumberUnlike, twoLienTiep, twoNumberUnlike, threeUn, _arr2, twoUn, _arr3, UnlienTiep, fee, price, typeGame, check, timeNow, sql, _yield$connection$que17, _yield$connection$que18, users, _yield$connection$que19, _yield$connection$que20, level, level0, sql2, total_m, f1, f2, f3, f4;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _req$body = req.body, listJoin = _req$body.listJoin, game = _req$body.game, gameJoin = _req$body.gameJoin, xvalue = _req$body.xvalue, money = _req$body.money;
          auth = req.cookies.auth; // let validate = await validateBet(join, list_join, x, money, game);
          // if (!validate) {
          //     return res.status(200).json({
          //         message: 'Đặt cược không hợp lệ',
          //         status: false
          //     });
          // }
          _context4.next = 5;
          return _connectDB["default"].query("SELECT period FROM k3 WHERE status = 0 AND game = ".concat(game, " ORDER BY id DESC LIMIT 1 "));
        case 5:
          _yield$connection$que13 = _context4.sent;
          _yield$connection$que14 = _slicedToArray(_yield$connection$que13, 1);
          k3Now = _yield$connection$que14[0];
          _context4.next = 10;
          return _connectDB["default"].query('SELECT `phone`, `code`, `invite`, `level`, `money` FROM users WHERE token = ? AND veri = 1  LIMIT 1 ', [auth]);
        case 10:
          _yield$connection$que15 = _context4.sent;
          _yield$connection$que16 = _slicedToArray(_yield$connection$que15, 1);
          user = _yield$connection$que16[0];
          if (!(k3Now.length < 1 || user.length < 1)) {
            _context4.next = 15;
            break;
          }
          return _context4.abrupt("return", res.status(200).json({
            message: 'Error!',
            status: false
          }));
        case 15:
          userInfo = user[0];
          period = k3Now[0];
          date = new Date();
          years = formateT(date.getFullYear());
          months = formateT(date.getMonth() + 1);
          days = formateT(date.getDate());
          id_product = years + months + days + Math.floor(Math.random() * 1000000000000000);
          total = 0;
          if (gameJoin == 1) {
            total = money * xvalue * String(listJoin).split(',').length;
          } else if (gameJoin == 2) {
            twoSame = listJoin.split('@')[0]; // Chọn 2 số phù hợp
            motDuyNhat = listJoin.split('@')[1]; // Chọn một cặp số duy nhất
            if (twoSame.length > 0) {
              twoSame = twoSame.split(',').length;
            }
            lengthArr = 0;
            count = 0;
            if (motDuyNhat.length > 0) {
              arr = motDuyNhat.split('&');
              for (i = 0; i < arr.length; i++) {
                motDuyNhat = arr[i].split('|');
                count = motDuyNhat[1].split(',').length;
              }
              lengthArr = arr.length;
              count = count;
            }
            total = money * xvalue * (lengthArr * count) + twoSame * money * xvalue;
          } else if (gameJoin == 3) {
            baDuyNhat = listJoin.split('@')[0]; // Chọn 3 số duy nhất
            countBaDuyNhat = 0;
            if (baDuyNhat.length > 0) {
              countBaDuyNhat = baDuyNhat.split(',').length;
            }
            threeSame = listJoin.split('@')[1].length; // Chọn 3 số giống nhau
            total = money * xvalue * countBaDuyNhat + threeSame * money * xvalue;
          } else if (gameJoin == 4) {
            threeNumberUnlike = listJoin.split('@')[0]; // Chọn 3 số duy nhất
            twoLienTiep = listJoin.split('@')[1]; // Chọn 3 số liên tiếp
            twoNumberUnlike = listJoin.split('@')[2]; // Chọn 3 số duy nhất
            threeUn = 0;
            if (threeNumberUnlike.length > 0) {
              _arr2 = threeNumberUnlike.split(',').length;
              if (_arr2 <= 4) {
                threeUn += xvalue * (money * _arr2);
              }
              if (_arr2 == 5) {
                threeUn += xvalue * (money * _arr2) * 2;
              }
              if (_arr2 == 6) {
                threeUn += xvalue * (money * 5) * 4;
              }
            }
            twoUn = 0;
            if (twoNumberUnlike.length > 0) {
              _arr3 = twoNumberUnlike.split(',').length;
              if (_arr3 <= 3) {
                twoUn += xvalue * (money * _arr3);
              }
              if (_arr3 == 4) {
                twoUn += xvalue * (money * _arr3) * 1.5;
              }
              if (_arr3 == 5) {
                twoUn += xvalue * (money * _arr3) * 2;
              }
              if (_arr3 == 6) {
                twoUn += xvalue * (money * _arr3 * 2.5);
              }
            }
            UnlienTiep = 0;
            if (twoLienTiep == 'u') {
              UnlienTiep += xvalue * money;
            }
            total = threeUn + twoUn + UnlienTiep;
          }
          fee = total * 0.02;
          price = total - fee;
          typeGame = '';
          if (gameJoin == 1) typeGame = 'total';
          if (gameJoin == 2) typeGame = 'two-same';
          if (gameJoin == 3) typeGame = 'three-same';
          if (gameJoin == 4) typeGame = 'unlike';
          check = userInfo.money - total;
          if (!(check >= 0)) {
            _context4.next = 63;
            break;
          }
          timeNow = Date.now();
          sql = "INSERT INTO result_k3 SET id_product = ?,phone = ?,code = ?,invite = ?,stage = ?,level = ?,money = ?,price = ?,amount = ?,fee = ?,game = ?,join_bet = ?, typeGame = ?,bet = ?,status = ?,time = ?";
          _context4.next = 37;
          return _connectDB["default"].execute(sql, [id_product, userInfo.phone, userInfo.code, userInfo.invite, period.period, userInfo.level, total, price, xvalue, fee, game, gameJoin, typeGame, listJoin, 0, timeNow]);
        case 37:
          _context4.next = 39;
          return _connectDB["default"].execute('UPDATE `users` SET `money` = `money` - ? WHERE `token` = ? ', [total, auth]);
        case 39:
          _context4.next = 41;
          return _connectDB["default"].query('SELECT `money`, `level` FROM users WHERE token = ? AND veri = 1  LIMIT 1 ', [auth]);
        case 41:
          _yield$connection$que17 = _context4.sent;
          _yield$connection$que18 = _slicedToArray(_yield$connection$que17, 1);
          users = _yield$connection$que18[0];
          _context4.next = 46;
          return rosesPlus(auth, total);
        case 46:
          _context4.next = 48;
          return _connectDB["default"].query('SELECT * FROM level ');
        case 48:
          _yield$connection$que19 = _context4.sent;
          _yield$connection$que20 = _slicedToArray(_yield$connection$que19, 1);
          level = _yield$connection$que20[0];
          level0 = level[0];
          sql2 = "INSERT INTO roses SET phone = ?,code = ?,invite = ?,f1 = ?,f2 = ?,f3 = ?,f4 = ?,time = ?";
          total_m = total;
          f1 = total_m / 100 * level0.f1;
          f2 = total_m / 100 * level0.f2;
          f3 = total_m / 100 * level0.f3;
          f4 = total_m / 100 * level0.f4;
          _context4.next = 60;
          return _connectDB["default"].execute(sql2, [userInfo.phone, userInfo.code, userInfo.invite, f1, f2, f3, f4, timeNow]);
        case 60:
          return _context4.abrupt("return", res.status(200).json({
            message: 'Successful bet',
            status: true,
            // data: result,
            change: users[0].level,
            money: users[0].money
          }));
        case 63:
          return _context4.abrupt("return", res.status(200).json({
            message: 'The amount is not enough',
            status: false
          }));
        case 64:
          _context4.next = 68;
          break;
        case 66:
          _context4.prev = 66;
          _context4.t0 = _context4["catch"](0);
        case 68:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 66]]);
  }));
  return function betK3(_x10, _x11) {
    return _ref4.apply(this, arguments);
  };
}();
function makeid(length) {
  var result = '';
  var characters = '123456';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
var addK3 = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(game) {
    var join, result2, timeNow, _yield$connection$que21, _yield$connection$que22, k5D, _yield$connection$que23, _yield$connection$que24, setting, period, nextResult, newArr, result, arr, check, i, sql;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          join = '';
          if (game == 1) join = 'k3d';
          if (game == 3) join = 'k3d3';
          if (game == 5) join = 'k3d5';
          if (game == 10) join = 'k3d10';
          result2 = makeid(3);
          timeNow = Date.now();
          _context5.next = 10;
          return _connectDB["default"].query("SELECT period FROM k3 WHERE status = 0 AND game = ".concat(game, " ORDER BY id DESC LIMIT 1 "));
        case 10:
          _yield$connection$que21 = _context5.sent;
          _yield$connection$que22 = _slicedToArray(_yield$connection$que21, 1);
          k5D = _yield$connection$que22[0];
          _context5.next = 15;
          return _connectDB["default"].query('SELECT * FROM `admin` ');
        case 15:
          _yield$connection$que23 = _context5.sent;
          _yield$connection$que24 = _slicedToArray(_yield$connection$que23, 1);
          setting = _yield$connection$que24[0];
          period = k5D[0].period;
          nextResult = '';
          if (game == 1) nextResult = setting[0].k3d;
          if (game == 3) nextResult = setting[0].k3d3;
          if (game == 5) nextResult = setting[0].k3d5;
          if (game == 10) nextResult = setting[0].k3d10;
          newArr = '';
          if (!(nextResult == '-1')) {
            _context5.next = 31;
            break;
          }
          _context5.next = 28;
          return _connectDB["default"].execute("UPDATE k3 SET result = ?,status = ? WHERE period = ? AND game = \"".concat(game, "\""), [result2, 1, period]);
        case 28:
          newArr = '-1';
          _context5.next = 38;
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
          _context5.next = 38;
          return _connectDB["default"].execute("UPDATE k3 SET result = ?,status = ? WHERE period = ? AND game = ".concat(game), [result, 1, period]);
        case 38:
          sql = "INSERT INTO k3 SET period = ?, result = ?, game = ?, status = ?, time = ?";
          _context5.next = 41;
          return _connectDB["default"].execute(sql, [Number(period) + 1, 0, game, 0, timeNow]);
        case 41:
          if (game == 1) join = 'k3d';
          if (game == 3) join = 'k3d3';
          if (game == 5) join = 'k3d5';
          if (game == 10) join = 'k3d10';
          _context5.next = 47;
          return _connectDB["default"].execute("UPDATE admin SET ".concat(join, " = ?"), [newArr]);
        case 47:
          _context5.next = 52;
          break;
        case 49:
          _context5.prev = 49;
          _context5.t0 = _context5["catch"](0);
          if (_context5.t0) {}
        case 52:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 49]]);
  }));
  return function addK3(_x12) {
    return _ref5.apply(this, arguments);
  };
}();
function funHanding(_x13) {
  return _funHanding.apply(this, arguments);
}
function _funHanding() {
  _funHanding = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(game) {
    var _yield$connection$que39, _yield$connection$que40, k5d, k5dInfo, result, total, i, _yield$connection$exe, _yield$connection$exe2, totalNumber, totalN, _i2, sult, lengWin, check1, check2, check3, check4, _yield$connection$exe3, _yield$connection$exe4, totaltwoSame, totalTwoSame, _i3, _sult, id, array, kq, kq1, kq2, _check, _check2, array2, _i4, newArr, newArr2, resultA1, resultA2, resultA4, resultA3, result1, result2, _array, _kq, _kq2, _kq3, _result, _result2, _kq4, _kq5, _kq6, kq3, kq4, check, _array2, _i5, _newArr, _newArr2, _resultA, _resultA2, _resultA3, _resultA4, _resultA5, _resultA6, _yield$connection$exe5, _yield$connection$exe6, ThreeSame, ThreeSameL, _i6, _sult2, _id, _array3, _kq7, _check3, _check4, _resultA7, _result3, _array4, _kq8, _result4, _kq9, _result5, _yield$connection$exe7, _yield$connection$exe8, Unlike, Unlikes, _i7, _sult3, _id2, _array5, _array6, _kq10, _check5, _check6, _check7, _i8, _resultA8, _kq11, _kq12, _kq13, _i9, _resultA9, _resultA10, _resultA11, _i10, _resultA12, _array7, _array8, _kq14, _check8, _check9, _i11, _resultA13, _i12, _resultA14, _array9, _array10, _kq15, _check10, _check11, _i13, _resultA15, _kq16, _kq17, _kq18, _i14, _resultA16, _resultA17, _resultA18, _array11, _array12, _kq19, _check12, _check13, _i15, _resultA19, _kq20, _kq21, _kq22, _i16, _resultA20, _resultA21, _resultA22, _array13, _array14, _kq23, _check14, _i17, _resultA23, _array15, _array16, _kq24, _check15, _kq25, _kq26, _kq27, _i18, _resultA24, _resultA25, _resultA26, _array17, _array18, _kq28, _check16, _i19, _resultA27;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return _connectDB["default"].query("SELECT * FROM k3 WHERE status != 0 AND game = ".concat(game, " ORDER BY id DESC LIMIT 1 "));
        case 2:
          _yield$connection$que39 = _context9.sent;
          _yield$connection$que40 = _slicedToArray(_yield$connection$que39, 1);
          k5d = _yield$connection$que40[0];
          k5dInfo = k5d[0]; // update ket qua
          _context9.next = 8;
          return _connectDB["default"].execute("UPDATE result_k3 SET result = ? WHERE status = 0 AND game = ".concat(game), [k5dInfo.result]);
        case 8:
          result = String(k5dInfo.result).split('');
          total = 0;
          for (i = 0; i < result.length; i++) {
            total += Number(result[i]);
          }

          // xử lý game Tổng số
          _context9.next = 13;
          return _connectDB["default"].execute("SELECT id, bet FROM result_k3 WHERE status = 0 AND game = ".concat(game, " AND typeGame = 'total' "));
        case 13:
          _yield$connection$exe = _context9.sent;
          _yield$connection$exe2 = _slicedToArray(_yield$connection$exe, 1);
          totalNumber = _yield$connection$exe2[0];
          totalN = totalNumber.length;
          _i2 = 0;
        case 18:
          if (!(_i2 < totalN)) {
            _context9.next = 38;
            break;
          }
          sult = totalNumber[_i2].bet.split(','); // let result = sult.includes(String(total));
          // if (!result) {
          //     await connection.execute(`UPDATE result_k3 SET status = 2 WHERE id = ? `, [totalNumber[i].id]);
          // }
          lengWin = sult.filter(function (age) {
            return age == total;
          });
          check1 = false;
          check2 = false;
          check3 = false;
          check4 = false;
          if (total >= 3 && total <= 10 && sult.includes('s')) {
            check1 = true;
          } else {
            check1 = false;
          }
          if (total >= 11 && total <= 18 && sult.includes('b')) {
            check2 = true;
          } else {
            check2 = false;
          }
          if (total % 2 == 0 && sult.includes('c')) {
            check3 = true;
          } else {
            check3 = false;
          }
          if (total % 2 != 0 && sult.includes('l')) {
            check4 = true;
          } else {
            check4 = false;
          }
          if (!(!check1 && !check2 && !check3 && !check4)) {
            _context9.next = 32;
            break;
          }
          _context9.next = 32;
          return _connectDB["default"].execute("UPDATE result_k3 SET status = 2 WHERE id = ? ", [totalNumber[_i2].id]);
        case 32:
          if (!(lengWin.length >= 1)) {
            _context9.next = 35;
            break;
          }
          _context9.next = 35;
          return _connectDB["default"].execute("UPDATE result_k3 SET status = 0 WHERE id = ? ", [totalNumber[_i2].id]);
        case 35:
          _i2++;
          _context9.next = 18;
          break;
        case 38:
          _context9.next = 40;
          return _connectDB["default"].execute("SELECT id, bet FROM result_k3 WHERE status = 0 AND game = ".concat(game, " AND typeGame = 'two-same' "));
        case 40:
          _yield$connection$exe3 = _context9.sent;
          _yield$connection$exe4 = _slicedToArray(_yield$connection$exe3, 1);
          totaltwoSame = _yield$connection$exe4[0];
          totalTwoSame = totaltwoSame.length;
          _i3 = 0;
        case 45:
          if (!(_i3 < totalTwoSame)) {
            _context9.next = 109;
            break;
          }
          _sult = totaltwoSame[_i3].bet.split('@');
          id = totaltwoSame[_i3].id;
          if (!(_sult[0].length > 0 && _sult[1].length > 0)) {
            _context9.next = 65;
            break;
          }
          array = _sult[0].split(',');
          kq = String(k5dInfo.result).split('');
          kq1 = kq[0] + kq[1];
          kq2 = kq[1] + kq[2];
          _check = false;
          _check2 = false;
          array2 = _sult[1].split('&');
          for (_i4 = 0; _i4 < array2.length; _i4++) {
            newArr = array2[_i4].split('|')[0];
            newArr2 = array2[_i4].split('|')[1].split(',');
            resultA1 = newArr.includes(String(kq1));
            resultA2 = newArr.includes(String(kq2));
            if (!resultA1 && !resultA2) {
              _check = true;
            } else if (resultA1 && !resultA2) {
              resultA4 = newArr2.includes(String(kq[2]));
              if (!resultA4) {
                _check = true;
              }
            } else if (!resultA1 && resultA2) {
              resultA3 = newArr2.includes(String(kq[0]));
              if (!resultA3) {
                _check = true;
              }
            }
          }
          result1 = array.includes(String(kq1));
          result2 = array.includes(String(kq2));
          if (!result1 && !result2) {
            _check2 = true;
          }
          if (!(_check && _check2)) {
            _context9.next = 63;
            break;
          }
          _context9.next = 63;
          return _connectDB["default"].execute("UPDATE result_k3 SET status = 2 WHERE id = ? ", [id]);
        case 63:
          _context9.next = 106;
          break;
        case 65:
          if (!(_sult[0].length > 0 && _sult[1].length <= 0)) {
            _context9.next = 77;
            break;
          }
          _array = _sult[0].split(',');
          _kq = String(k5dInfo.result).split('');
          _kq2 = _kq[0] + _kq[1];
          _kq3 = _kq[1] + _kq[2];
          _result = _array.includes(String(_kq2));
          _result2 = _array.includes(String(_kq3));
          if (!(!_result && !_result2)) {
            _context9.next = 75;
            break;
          }
          _context9.next = 75;
          return _connectDB["default"].execute("UPDATE result_k3 SET status = 2 WHERE id = ? ", [id]);
        case 75:
          _context9.next = 106;
          break;
        case 77:
          if (!(_sult[0].length <= 0 && _sult[1].length > 0)) {
            _context9.next = 106;
            break;
          }
          _kq4 = String(k5dInfo.result).split('');
          _kq5 = _kq4[0] + _kq4[1];
          _kq6 = _kq4[1] + _kq4[2];
          kq3 = _kq4[0];
          kq4 = _kq4[2];
          check = false;
          _array2 = _sult[1].split('&');
          _i5 = 0;
        case 86:
          if (!(_i5 < _array2.length)) {
            _context9.next = 103;
            break;
          }
          _newArr = _array2[_i5].split('|')[0];
          _newArr2 = _array2[_i5].split('|')[1].split(',');
          _resultA = _newArr.includes(String(_kq5));
          _resultA2 = _newArr.includes(String(_kq6));
          _resultA3 = _newArr2.includes(String(kq3));
          _resultA4 = _newArr2.includes(String(kq4));
          if (!(!_resultA && !_resultA2)) {
            _context9.next = 99;
            break;
          }
          if (!(!_resultA3 && !_resultA4)) {
            _context9.next = 97;
            break;
          }
          _context9.next = 97;
          return _connectDB["default"].execute("UPDATE result_k3 SET status = 2 WHERE id = ? ", [id]);
        case 97:
          _context9.next = 100;
          break;
        case 99:
          if (_resultA && !_resultA2) {
            _resultA5 = _newArr2.includes(String(_kq4[2]));
            if (_resultA5) {
              check = true;
            }
          } else if (!_resultA && _resultA2) {
            _resultA6 = _newArr2.includes(String(_kq4[0]));
            if (_resultA6) {
              check = true;
            }
          }
        case 100:
          _i5++;
          _context9.next = 86;
          break;
        case 103:
          if (check) {
            _context9.next = 106;
            break;
          }
          _context9.next = 106;
          return _connectDB["default"].execute("UPDATE result_k3 SET status = 2 WHERE id = ? ", [id]);
        case 106:
          _i3++;
          _context9.next = 45;
          break;
        case 109:
          _context9.next = 111;
          return _connectDB["default"].execute("SELECT id, bet FROM result_k3 WHERE status = 0 AND game = ".concat(game, " AND typeGame = 'three-same' "));
        case 111:
          _yield$connection$exe5 = _context9.sent;
          _yield$connection$exe6 = _slicedToArray(_yield$connection$exe5, 1);
          ThreeSame = _yield$connection$exe6[0];
          ThreeSameL = ThreeSame.length;
          _i6 = 0;
        case 116:
          if (!(_i6 < ThreeSameL)) {
            _context9.next = 151;
            break;
          }
          _sult2 = ThreeSame[_i6].bet.split('@');
          _id = ThreeSame[_i6].id;
          if (!(_sult2[0].length > 0 && _sult2[1].length > 0)) {
            _context9.next = 133;
            break;
          }
          _array3 = _sult2[0].split(',');
          _kq7 = String(k5dInfo.result);
          _check3 = false;
          _check4 = false;
          _resultA7 = _array3.includes(String(_kq7));
          if (!_resultA7) {
            _check3 = true;
          }
          _result3 = ['111', '222', '333', '444', '555', '666'].includes(String(_kq7));
          if (!_result3) {
            _check4 = true;
          }
          if (!(_check3 && _check4)) {
            _context9.next = 131;
            break;
          }
          _context9.next = 131;
          return _connectDB["default"].execute("UPDATE result_k3 SET status = 2 WHERE id = ? ", [_id]);
        case 131:
          _context9.next = 148;
          break;
        case 133:
          if (!(_sult2[0].length > 0 && _sult2[1].length <= 0)) {
            _context9.next = 142;
            break;
          }
          _array4 = _sult2[0].split(',');
          _kq8 = String(k5dInfo.result);
          _result4 = _array4.includes(String(_kq8));
          if (_result4) {
            _context9.next = 140;
            break;
          }
          _context9.next = 140;
          return _connectDB["default"].execute("UPDATE result_k3 SET status = 2 WHERE id = ? ", [_id]);
        case 140:
          _context9.next = 148;
          break;
        case 142:
          if (!(_sult2[0].length <= 0 && _sult2[1].length > 0)) {
            _context9.next = 148;
            break;
          }
          _kq9 = String(k5dInfo.result);
          _result5 = ['111', '222', '333', '444', '555', '666'].includes(String(_kq9));
          if (_result5) {
            _context9.next = 148;
            break;
          }
          _context9.next = 148;
          return _connectDB["default"].execute("UPDATE result_k3 SET status = 2 WHERE id = ? ", [_id]);
        case 148:
          _i6++;
          _context9.next = 116;
          break;
        case 151:
          _context9.next = 153;
          return _connectDB["default"].execute("SELECT id, bet FROM result_k3 WHERE status = 0 AND game = ".concat(game, " AND typeGame = 'unlike' "));
        case 153:
          _yield$connection$exe7 = _context9.sent;
          _yield$connection$exe8 = _slicedToArray(_yield$connection$exe7, 1);
          Unlike = _yield$connection$exe8[0];
          Unlikes = Unlike.length;
          _i7 = 0;
        case 158:
          if (!(_i7 < Unlikes)) {
            _context9.next = 261;
            break;
          }
          _sult3 = Unlike[_i7].bet.split('@');
          _id2 = Unlike[_i7].id;
          if (!(_sult3[0].length > 1 && _sult3[1] == 'u' && _sult3[2].length > 1)) {
            _context9.next = 179;
            break;
          }
          _array5 = _sult3[0].split(',');
          _array6 = _sult3[2].split(',');
          _kq10 = String(k5dInfo.result).split('');
          _check5 = false;
          _check6 = false;
          _check7 = false;
          for (_i8 = 0; _i8 < _kq10.length; _i8++) {
            _resultA8 = _array5.includes(String(_kq10[_i8]));
            if (_resultA8) {
              _check5 = true;
            }
          }
          _kq11 = _kq10[0] + _kq10[1];
          _kq12 = _kq10[1] + _kq10[2];
          _kq13 = _kq10[0] + _kq10[2];
          for (_i9 = 0; _i9 < _kq10.length; _i9++) {
            _resultA9 = ['11', '22', '33', '44', '55', '66'].includes(String(_kq11));
            _resultA10 = ['11', '22', '33', '44', '55', '66'].includes(String(_kq12));
            _resultA11 = ['11', '22', '33', '44', '55', '66'].includes(String(_kq13));
            if (_resultA9 || _resultA10 || _resultA11) {
              _check7 = true;
            }
          }
          for (_i10 = 0; _i10 < _kq10.length; _i10++) {
            _resultA12 = _array6.includes(String(_kq10[_i10]));
            if (_resultA12) {
              _check6 = true;
            }
          }
          if (!(_check5 && _check6 && _check7)) {
            _context9.next = 177;
            break;
          }
          _context9.next = 177;
          return _connectDB["default"].execute("UPDATE result_k3 SET status = 2 WHERE id = ? ", [_id2]);
        case 177:
          _context9.next = 258;
          break;
        case 179:
          if (!(_sult3[0].length > 1 && _sult3[1] == 'y' && _sult3[2].length > 1)) {
            _context9.next = 192;
            break;
          }
          _array7 = _sult3[0].split(',');
          _array8 = _sult3[2].split(',');
          _kq14 = String(k5dInfo.result).split('');
          _check8 = false;
          _check9 = false;
          for (_i11 = 0; _i11 < _kq14.length; _i11++) {
            _resultA13 = _array7.includes(String(_kq14[_i11]));
            if (_resultA13) {
              _check8 = true;
            }
          }
          for (_i12 = 0; _i12 < _kq14.length; _i12++) {
            _resultA14 = _array8.includes(String(_kq14[_i12]));
            if (_resultA14) {
              _check9 = true;
            }
          }
          if (!(_check8 && _check9)) {
            _context9.next = 190;
            break;
          }
          _context9.next = 190;
          return _connectDB["default"].execute("UPDATE result_k3 SET status = 2 WHERE id = ? ", [_id2]);
        case 190:
          _context9.next = 258;
          break;
        case 192:
          if (!(_sult3[0].length > 1 && _sult3[1] == 'u' && _sult3[2].length <= 1)) {
            _context9.next = 208;
            break;
          }
          _array9 = _sult3[0].split(',');
          _array10 = _sult3[2].split(',');
          _kq15 = String(k5dInfo.result).split('');
          _check10 = false;
          _check11 = false;
          for (_i13 = 0; _i13 < _kq15.length; _i13++) {
            _resultA15 = _array9.includes(String(_kq15[_i13]));
            if (_resultA15) {
              _check10 = true;
            }
          }
          _kq16 = _kq15[0] + _kq15[1];
          _kq17 = _kq15[1] + _kq15[2];
          _kq18 = _kq15[0] + _kq15[2];
          for (_i14 = 0; _i14 < _kq15.length; _i14++) {
            _resultA16 = ['11', '22', '33', '44', '55', '66'].includes(String(_kq16));
            _resultA17 = ['11', '22', '33', '44', '55', '66'].includes(String(_kq17));
            _resultA18 = ['11', '22', '33', '44', '55', '66'].includes(String(_kq18));
            if (_resultA16 || _resultA17 || _resultA18) {
              _check11 = true;
            }
          }
          if (!(_check10 && _check11)) {
            _context9.next = 206;
            break;
          }
          _context9.next = 206;
          return _connectDB["default"].execute("UPDATE result_k3 SET status = 2 WHERE id = ? ", [_id2]);
        case 206:
          _context9.next = 258;
          break;
        case 208:
          if (!(_sult3[0].length <= 1 && _sult3[1] == 'u' && _sult3[2].length > 1)) {
            _context9.next = 224;
            break;
          }
          _array11 = _sult3[0].split(',');
          _array12 = _sult3[2].split(',');
          _kq19 = String(k5dInfo.result).split('');
          _check12 = false;
          _check13 = false;
          for (_i15 = 0; _i15 < _kq19.length; _i15++) {
            _resultA19 = _array12.includes(String(_kq19[_i15]));
            if (_resultA19) {
              _check12 = true;
            }
          }
          _kq20 = _kq19[0] + _kq19[1];
          _kq21 = _kq19[1] + _kq19[2];
          _kq22 = _kq19[0] + _kq19[2];
          for (_i16 = 0; _i16 < _kq19.length; _i16++) {
            _resultA20 = ['11', '22', '33', '44', '55', '66'].includes(String(_kq20));
            _resultA21 = ['11', '22', '33', '44', '55', '66'].includes(String(_kq21));
            _resultA22 = ['11', '22', '33', '44', '55', '66'].includes(String(_kq22));
            if (_resultA20 || _resultA21 || _resultA22) {
              _check13 = true;
            }
          }
          if (!(_check12 && _check13)) {
            _context9.next = 222;
            break;
          }
          _context9.next = 222;
          return _connectDB["default"].execute("UPDATE result_k3 SET status = 2 WHERE id = ? ", [_id2]);
        case 222:
          _context9.next = 258;
          break;
        case 224:
          if (!(_sult3[0].length > 1 && _sult3[1] == 'y' && _sult3[2].length <= 1)) {
            _context9.next = 235;
            break;
          }
          _array13 = _sult3[0].split(',');
          _array14 = _sult3[2].split(',');
          _kq23 = String(k5dInfo.result).split('');
          _check14 = false;
          for (_i17 = 0; _i17 < _kq23.length; _i17++) {
            _resultA23 = _array13.includes(String(_kq23[_i17]));
            if (_resultA23) {
              _check14 = true;
            }
          }
          if (!_check14) {
            _context9.next = 233;
            break;
          }
          _context9.next = 233;
          return _connectDB["default"].execute("UPDATE result_k3 SET status = 2 WHERE id = ? ", [_id2]);
        case 233:
          _context9.next = 258;
          break;
        case 235:
          if (!(_sult3[0].length <= 1 && _sult3[1] == 'u' && _sult3[2].length <= 1)) {
            _context9.next = 249;
            break;
          }
          _array15 = _sult3[0].split(',');
          _array16 = _sult3[2].split(',');
          _kq24 = String(k5dInfo.result).split('');
          _check15 = false;
          _kq25 = _kq24[0] + _kq24[1];
          _kq26 = _kq24[1] + _kq24[2];
          _kq27 = _kq24[0] + _kq24[2];
          for (_i18 = 0; _i18 < _kq24.length; _i18++) {
            _resultA24 = ['11', '22', '33', '44', '55', '66'].includes(String(_kq25));
            _resultA25 = ['11', '22', '33', '44', '55', '66'].includes(String(_kq26));
            _resultA26 = ['11', '22', '33', '44', '55', '66'].includes(String(_kq27));
            if (_resultA24 || _resultA25 || _resultA26) {
              _check15 = true;
            }
          }
          if (!_check15) {
            _context9.next = 247;
            break;
          }
          _context9.next = 247;
          return _connectDB["default"].execute("UPDATE result_k3 SET status = 2 WHERE id = ? ", [_id2]);
        case 247:
          _context9.next = 258;
          break;
        case 249:
          if (!(_sult3[0].length <= 1 && _sult3[1] == 'y' && _sult3[2].length > 1)) {
            _context9.next = 258;
            break;
          }
          _array17 = _sult3[0].split(',');
          _array18 = _sult3[2].split(',');
          _kq28 = String(k5dInfo.result).split('');
          _check16 = false;
          for (_i19 = 0; _i19 < _kq28.length; _i19++) {
            _resultA27 = _array18.includes(String(_kq28[_i19]));
            if (_resultA27) {
              _check16 = true;
            }
          }
          if (!_check16) {
            _context9.next = 258;
            break;
          }
          _context9.next = 258;
          return _connectDB["default"].execute("UPDATE result_k3 SET status = 2 WHERE id = ? ", [_id2]);
        case 258:
          _i7++;
          _context9.next = 158;
          break;
        case 261:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return _funHanding.apply(this, arguments);
}
var priceGet = {
  total: {
    't3': 207.36,
    't4': 69.12,
    't5': 34.56,
    't6': 20.74,
    't7': 13.83,
    't8': 9.88,
    't9': 8.3,
    't10': 7.68,
    't11': 7.68,
    't12': 8.3,
    't13': 9.88,
    't14': 13.83,
    't15': 20.74,
    't16': 34.56,
    't17': 69.12,
    't18': 207.36,
    'b': 1.92,
    's': 1.92,
    'l': 1.92,
    'c': 1.92
  },
  two: {
    twoSame: 13.83,
    twoD: 69.12
  },
  three: {
    threeD: 207.36,
    threeSame: 34.56
  },
  unlike: {
    unlikeThree: 34.56,
    threeL: 8.64,
    unlikeTwo: 6.91
  }
};
function plusMoney(_x14) {
  return _plusMoney.apply(this, arguments);
}
function _plusMoney() {
  _plusMoney = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(game) {
    var _yield$connection$exe9, _yield$connection$exe10, order, _loop, i;
    return _regeneratorRuntime().wrap(function _callee10$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return _connectDB["default"].execute("SELECT id, phone, bet, price, money, fee, amount, result, typeGame FROM result_k3 WHERE status = 0 AND game = ".concat(game, " "));
        case 2:
          _yield$connection$exe9 = _context11.sent;
          _yield$connection$exe10 = _slicedToArray(_yield$connection$exe9, 1);
          order = _yield$connection$exe10[0];
          _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
            var orders, phone, id, nhan_duoc, result, arr, totalResult, totalResult2, _i20, total, fee, price, lengWin, lengWin2, get, sql, kq, kq1, kq2, array, arr1, arr2, arr3, _i21, check1, check2, lengthArr, count, _arr4, _i22, _total, _i23, files, _check17, _check18, _lengthArr, _count, _arr5, _i24, bale, _i25, _total2, _sql, _kq29, _array19, _arr6, _arr7, _i26, _check19, bala, _total3, _bala, _i27, _total4, _sql2, _kq30, _array20, _arr8, _arr9, _arr10, _i28, _check20, _bala2, bala2, _i29, _total5, _total6, _bala3, _bala4, _i30, _i31, _total7, _i32, _check21, _bala5, _i33, _total8, _sql3;
            return _regeneratorRuntime().wrap(function _loop$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
                case 0:
                  orders = order[i];
                  phone = orders.phone;
                  id = orders.id;
                  nhan_duoc = 0;
                  result = orders.result;
                  if (!(orders.typeGame == "total")) {
                    _context10.next = 61;
                    break;
                  }
                  arr = orders.bet.split(',');
                  totalResult = orders.result.split('');
                  totalResult2 = 0;
                  for (_i20 = 0; _i20 < 3; _i20++) {
                    totalResult2 += Number(totalResult[_i20]);
                  }
                  total = orders.money / arr.length / orders.amount;
                  fee = total * 0.02;
                  price = total - fee;
                  lengWin = arr.filter(function (age) {
                    return age == totalResult2;
                  });
                  lengWin2 = arr.filter(function (age) {
                    return !isNumber(age);
                  });
                  if (totalResult2 % 2 == 0 && lengWin2.includes('c')) {
                    nhan_duoc += price * 1.92;
                  }
                  if (totalResult2 % 2 != 0 && lengWin2.includes('l')) {
                    nhan_duoc += price * 1.92;
                  }
                  if (totalResult2 >= 11 && totalResult2 <= 18 && lengWin2.includes('b')) {
                    nhan_duoc += price * 1.92;
                  }
                  if (totalResult2 >= 3 && totalResult2 <= 11 && lengWin2.includes('s')) {
                    nhan_duoc += price * 1.92;
                  }
                  get = 0;
                  _context10.t0 = lengWin[0];
                  _context10.next = _context10.t0 === '3' ? 23 : _context10.t0 === '3' ? 25 : _context10.t0 === '5' ? 27 : _context10.t0 === '6' ? 29 : _context10.t0 === '7' ? 31 : _context10.t0 === '8' ? 33 : _context10.t0 === '9' ? 35 : _context10.t0 === '10' ? 37 : _context10.t0 === '11' ? 39 : _context10.t0 === '12' ? 41 : _context10.t0 === '13' ? 43 : _context10.t0 === '14' ? 45 : _context10.t0 === '15' ? 47 : _context10.t0 === '16' ? 49 : _context10.t0 === '17' ? 51 : _context10.t0 === '18' ? 53 : 55;
                  break;
                case 23:
                  get = 207.36;
                  return _context10.abrupt("break", 55);
                case 25:
                  get = 69.12;
                  return _context10.abrupt("break", 55);
                case 27:
                  get = 34.56;
                  return _context10.abrupt("break", 55);
                case 29:
                  get = 20.74;
                  return _context10.abrupt("break", 55);
                case 31:
                  get = 13.83;
                  return _context10.abrupt("break", 55);
                case 33:
                  get = 9.88;
                  return _context10.abrupt("break", 55);
                case 35:
                  get = 8.3;
                  return _context10.abrupt("break", 55);
                case 37:
                  get = 7.68;
                  return _context10.abrupt("break", 55);
                case 39:
                  get = 7.68;
                  return _context10.abrupt("break", 55);
                case 41:
                  get = 8.3;
                  return _context10.abrupt("break", 55);
                case 43:
                  get = 9.88;
                  return _context10.abrupt("break", 55);
                case 45:
                  get = 13.83;
                  return _context10.abrupt("break", 55);
                case 47:
                  get = 20.74;
                  return _context10.abrupt("break", 55);
                case 49:
                  get = 34.56;
                  return _context10.abrupt("break", 55);
                case 51:
                  get = 69.12;
                  return _context10.abrupt("break", 55);
                case 53:
                  get = 207.36;
                  return _context10.abrupt("break", 55);
                case 55:
                  nhan_duoc += price * get;
                  _context10.next = 58;
                  return _connectDB["default"].execute('UPDATE `result_k3` SET `get` = ?, `status` = 1 WHERE `id` = ? ', [nhan_duoc, id]);
                case 58:
                  sql = 'UPDATE `users` SET `money` = `money` + ? WHERE `phone` = ? ';
                  _context10.next = 61;
                  return _connectDB["default"].execute(sql, [nhan_duoc, phone]);
                case 61:
                  nhan_duoc = 0;
                  if (!(orders.typeGame == "two-same")) {
                    _context10.next = 79;
                    break;
                  }
                  kq = result.split('');
                  kq1 = kq[0] + kq[1];
                  kq2 = kq[1] + kq[2];
                  array = orders.bet.split('@');
                  arr1 = array[0].split(',');
                  arr2 = array[1];
                  arr3 = array[1].split('&');
                  for (_i21 = 0; _i21 < arr1.length; _i21++) {
                    if (arr1[_i21] != "") {
                      check1 = arr1[_i21].includes(kq1);
                      check2 = arr1[_i21].includes(kq2);
                      if (check1 || check2) {
                        lengthArr = 0;
                        count = 0;
                        if (arr2.length > 0) {
                          _arr4 = arr2.split('&');
                          for (_i22 = 0; _i22 < _arr4.length; _i22++) {
                            arr2 = _arr4[_i22].split('|');
                            count = arr2[1].split(',').length;
                          }
                          lengthArr = _arr4.length;
                          count = count;
                        }
                        _total = orders.money / orders.amount / (lengthArr + arr1.length);
                        nhan_duoc += _total * 12.83;
                      }
                    }
                  }
                  arr2 = array[1];
                  for (_i23 = 0; _i23 < arr3.length; _i23++) {
                    if (arr3[_i23] != "") {
                      files = arr3[_i23].split('|');
                      _check17 = files[0].includes(kq1);
                      _check18 = files[0].includes(kq2);
                      if (_check17 || _check18) {
                        _lengthArr = 0;
                        _count = 0;
                        if (arr2.length > 0) {
                          _arr5 = arr2.split('&');
                          for (_i24 = 0; _i24 < _arr5.length; _i24++) {
                            arr2 = _arr5[_i24].split('|');
                            _count = arr2[1].split(',').length;
                          }
                          _lengthArr = _arr5.length;
                          _count = _count;
                        }
                        bale = 0;
                        for (_i25 = 0; _i25 < arr1.length; _i25++) {
                          if (arr1[_i25] != "") {
                            bale = arr1.length;
                          }
                        }
                        _total2 = orders.money / orders.amount / (_lengthArr + bale);
                        nhan_duoc += _total2 * 69.12;
                      }
                    }
                  }
                  nhan_duoc -= orders.fee;
                  _context10.next = 76;
                  return _connectDB["default"].execute('UPDATE `result_k3` SET `get` = ?, `status` = 1 WHERE `id` = ? ', [nhan_duoc, id]);
                case 76:
                  _sql = 'UPDATE `users` SET `money` = `money` + ? WHERE `phone` = ? ';
                  _context10.next = 79;
                  return _connectDB["default"].execute(_sql, [nhan_duoc, phone]);
                case 79:
                  nhan_duoc = 0;
                  if (!(orders.typeGame == "three-same")) {
                    _context10.next = 92;
                    break;
                  }
                  _kq29 = result;
                  _array19 = orders.bet.split('@');
                  _arr6 = _array19[0].split(',');
                  _arr7 = _array19[1];
                  for (_i26 = 0; _i26 < _arr6.length; _i26++) {
                    if (_arr6[_i26] != "") {
                      _check19 = _arr6[_i26].includes(_kq29);
                      bala = 0;
                      if (_arr7 != "") {
                        bala = 1;
                      }
                      if (_check19) {
                        _total3 = orders.money / (_arr6.length + bala) / orders.amount;
                        nhan_duoc += _total3 * 207.36 - orders.fee;
                      }
                    }
                  }
                  if (_arr7 != "") {
                    _bala = 0;
                    for (_i27 = 0; _i27 < _arr6.length; _i27++) {
                      if (_arr6[_i27] != "") {
                        _bala = _arr6.length;
                      }
                    }
                    _total4 = orders.money / (1 + _bala) / orders.amount;
                    nhan_duoc += _total4 * 34.56 - orders.fee;
                  }
                  _context10.next = 89;
                  return _connectDB["default"].execute('UPDATE `result_k3` SET `get` = ?, `status` = 1 WHERE `id` = ? ', [nhan_duoc, id]);
                case 89:
                  _sql2 = 'UPDATE `users` SET `money` = `money` + ? WHERE `phone` = ? ';
                  _context10.next = 92;
                  return _connectDB["default"].execute(_sql2, [nhan_duoc, phone]);
                case 92:
                  nhan_duoc = 0;
                  if (!(orders.typeGame == "unlike")) {
                    _context10.next = 107;
                    break;
                  }
                  _kq30 = result.split('');
                  _array20 = orders.bet.split('@');
                  _arr8 = _array20[0].split(',');
                  _arr9 = _array20[1];
                  _arr10 = _array20[2].split(',');
                  for (_i28 = 0; _i28 < _arr8.length; _i28++) {
                    if (_arr8[_i28] != "") {
                      _check20 = _kq30.includes(_arr8[_i28]);
                      _bala2 = 0;
                      bala2 = 0;
                      for (_i29 = 0; _i29 < _arr10.length; _i29++) {
                        if (_arr10[_i29].length != "") {
                          _bala2 = _arr10.length;
                        }
                      }
                      if (_arr9 == "u") {
                        bala2 = 1;
                      }
                      if (!_check20) {
                        _total5 = orders.money / (_arr8.length + _bala2 + bala2) / orders.amount;
                        nhan_duoc += _total5 * 34.56 - orders.fee;
                        if (_arr9 == "u") {
                          _total6 = orders.money / (1 + _bala2 + bala2) / orders.amount;
                          nhan_duoc += (_total6 - orders.fee) * 8.64;
                        }
                      }
                    }
                  }
                  if (_arr9 == "u") {
                    _bala3 = 0;
                    _bala4 = 0;
                    for (_i30 = 0; _i30 < _arr8.length; _i30++) {
                      if (_arr8[_i30] != "") {
                        _bala3 = _arr8.length;
                      }
                    }
                    for (_i31 = 0; _i31 < _arr10.length; _i31++) {
                      if (_arr10[_i31].length != "") {
                        _bala4 = _arr10.length;
                      }
                    }
                    _total7 = orders.money / (1 + _bala3 + _bala4) / orders.amount;
                    nhan_duoc += (_total7 - orders.fee) * 8.64;
                  }
                  for (_i32 = 0; _i32 < _arr10.length; _i32++) {
                    if (_arr8[_i32] != "") {
                      _check21 = _kq30.includes(_arr10[_i32]);
                      _bala5 = 0;
                      for (_i33 = 0; _i33 < _arr8.length; _i33++) {
                        if (_arr8[_i33].length != "") {
                          _bala5 = _arr8.length;
                        }
                      }
                      if (!_check21) {
                        _total8 = orders.money / (_arr10.length + _bala5) / orders.amount;
                        nhan_duoc += _total8 * 6.91 - orders.fee;
                      }
                    }
                  }
                  _context10.next = 104;
                  return _connectDB["default"].execute('UPDATE `result_k3` SET `get` = ?, `status` = 1 WHERE `id` = ? ', [nhan_duoc, id]);
                case 104:
                  _sql3 = 'UPDATE `users` SET `money` = `money` + ? WHERE `phone` = ? ';
                  _context10.next = 107;
                  return _connectDB["default"].execute(_sql3, [nhan_duoc, phone]);
                case 107:
                case "end":
                  return _context10.stop();
              }
            }, _loop);
          });
          i = 0;
        case 7:
          if (!(i < order.length)) {
            _context11.next = 12;
            break;
          }
          return _context11.delegateYield(_loop(), "t0", 9);
        case 9:
          i++;
          _context11.next = 7;
          break;
        case 12:
        case "end":
          return _context11.stop();
      }
    }, _callee10);
  }));
  return _plusMoney.apply(this, arguments);
}
var handlingK3 = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(typeid) {
    var game;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          game = Number(typeid);
          _context6.next = 3;
          return funHanding(game);
        case 3:
          _context6.next = 5;
          return plusMoney(game);
        case 5:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function handlingK3(_x15) {
    return _ref6.apply(this, arguments);
  };
}();
var listOrderOld = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _req$body2, gameJoin, pageno, pageto, auth, checkGame, _yield$connection$que25, _yield$connection$que26, user, game, _yield$connection$que27, _yield$connection$que28, k5d, _yield$connection$que29, _yield$connection$que30, k5dAll, _yield$connection$que31, _yield$connection$que32, period, page;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _req$body2 = req.body, gameJoin = _req$body2.gameJoin, pageno = _req$body2.pageno, pageto = _req$body2.pageto;
          auth = req.cookies.auth;
          checkGame = ['1', '3', '5', '10'].includes(String(gameJoin));
          if (!(!checkGame || pageno < 0 || pageto < 0)) {
            _context7.next = 5;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            code: 0,
            msg: "Không còn dữ liệu",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 5:
          _context7.next = 7;
          return _connectDB["default"].query('SELECT `phone`, `code`, `invite`, `level`, `money` FROM users WHERE token = ? AND veri = 1  LIMIT 1 ', [auth]);
        case 7:
          _yield$connection$que25 = _context7.sent;
          _yield$connection$que26 = _slicedToArray(_yield$connection$que25, 1);
          user = _yield$connection$que26[0];
          game = Number(gameJoin);
          _context7.next = 13;
          return _connectDB["default"].query("SELECT * FROM k3 WHERE status != 0 AND game = '".concat(game, "' ORDER BY id DESC LIMIT ").concat(pageno, ", ").concat(pageto, " "));
        case 13:
          _yield$connection$que27 = _context7.sent;
          _yield$connection$que28 = _slicedToArray(_yield$connection$que27, 1);
          k5d = _yield$connection$que28[0];
          _context7.next = 18;
          return _connectDB["default"].query("SELECT * FROM k3 WHERE status != 0 AND game = '".concat(game, "' "));
        case 18:
          _yield$connection$que29 = _context7.sent;
          _yield$connection$que30 = _slicedToArray(_yield$connection$que29, 1);
          k5dAll = _yield$connection$que30[0];
          _context7.next = 23;
          return _connectDB["default"].query("SELECT period FROM k3 WHERE status = 0 AND game = '".concat(game, "' ORDER BY id DESC LIMIT 1 "));
        case 23:
          _yield$connection$que31 = _context7.sent;
          _yield$connection$que32 = _slicedToArray(_yield$connection$que31, 1);
          period = _yield$connection$que32[0];
          if (!(k5d.length == 0)) {
            _context7.next = 28;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
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
            _context7.next = 30;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            message: 'Error!',
            status: false
          }));
        case 30:
          page = Math.ceil(k5dAll.length / 10);
          return _context7.abrupt("return", res.status(200).json({
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
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function listOrderOld(_x16, _x17) {
    return _ref7.apply(this, arguments);
  };
}();
var GetMyEmerdList = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var _req$body3, gameJoin, pageno, pageto, auth, checkGame, game, _yield$connection$que33, _yield$connection$que34, user, _yield$connection$que35, _yield$connection$que36, result_5d, _yield$connection$que37, _yield$connection$que38, result_5dAll, page, datas;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _req$body3 = req.body, gameJoin = _req$body3.gameJoin, pageno = _req$body3.pageno, pageto = _req$body3.pageto;
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
          game = Number(gameJoin);
          _context8.next = 8;
          return _connectDB["default"].query('SELECT `phone`, `code`, `invite`, `level`, `money` FROM users WHERE token = ? AND veri = 1 LIMIT 1 ', [auth]);
        case 8:
          _yield$connection$que33 = _context8.sent;
          _yield$connection$que34 = _slicedToArray(_yield$connection$que33, 1);
          user = _yield$connection$que34[0];
          _context8.next = 13;
          return _connectDB["default"].query("SELECT * FROM result_k3 WHERE phone = ? AND game = '".concat(game, "' ORDER BY id DESC LIMIT ").concat(Number(pageno) + ',' + Number(pageto)), [user[0].phone]);
        case 13:
          _yield$connection$que35 = _context8.sent;
          _yield$connection$que36 = _slicedToArray(_yield$connection$que35, 1);
          result_5d = _yield$connection$que36[0];
          _context8.next = 18;
          return _connectDB["default"].query("SELECT * FROM result_k3 WHERE phone = ? AND game = '".concat(game, "' ORDER BY id DESC "), [user[0].phone]);
        case 18:
          _yield$connection$que37 = _context8.sent;
          _yield$connection$que38 = _slicedToArray(_yield$connection$que37, 1);
          result_5dAll = _yield$connection$que38[0];
          if (result_5d[0]) {
            _context8.next = 23;
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
        case 23:
          if (!(!pageno || !pageto || !user[0] || !result_5d[0])) {
            _context8.next = 25;
            break;
          }
          return _context8.abrupt("return", res.status(200).json({
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
          return _context8.abrupt("return", res.status(200).json({
            code: 0,
            msg: "Get success",
            data: {
              gameslist: datas
            },
            page: page,
            status: true
          }));
        case 28:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function GetMyEmerdList(_x18, _x19) {
    return _ref8.apply(this, arguments);
  };
}();
module.exports = {
  K3Page: K3Page,
  betK3: betK3,
  addK3: addK3,
  handlingK3: handlingK3,
  listOrderOld: listOrderOld,
  GetMyEmerdList: GetMyEmerdList
};