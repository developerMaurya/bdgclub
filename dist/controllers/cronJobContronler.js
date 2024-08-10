"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _connectDB = _interopRequireDefault(require("../config/connectDB"));
var _winGoController = _interopRequireDefault(require("./winGoController"));
var _k5Controller = _interopRequireDefault(require("./k5Controller"));
var _k3Controller = _interopRequireDefault(require("./k3Controller"));
var _nodeCron = _interopRequireDefault(require("node-cron"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var cronJobGame1p = function cronJobGame1p(io) {
  _nodeCron["default"].schedule('*/1 * * * *', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var _yield$connection$exe, _yield$connection$exe2, winGo1, data, _yield$connection$exe3, _yield$connection$exe4, k5D, data2, _yield$connection$exe5, _yield$connection$exe6, k3, data3;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _winGoController["default"].addWinGo(1);
        case 2:
          _context.next = 4;
          return _winGoController["default"].handlingWinGo1P(1);
        case 4:
          _context.next = 6;
          return _connectDB["default"].execute('SELECT * FROM `wingo` WHERE `game` = "wingo" ORDER BY `id` DESC LIMIT 2 ', []);
        case 6:
          _yield$connection$exe = _context.sent;
          _yield$connection$exe2 = _slicedToArray(_yield$connection$exe, 1);
          winGo1 = _yield$connection$exe2[0];
          data = winGo1; // Cầu mới chưa có kết quả
          io.emit('data-server', {
            data: data
          });
          _context.next = 13;
          return _k5Controller["default"].add5D(1);
        case 13:
          _context.next = 15;
          return _k5Controller["default"].handling5D(1);
        case 15:
          _context.next = 17;
          return _connectDB["default"].execute('SELECT * FROM 5d WHERE `game` = 1 ORDER BY `id` DESC LIMIT 2 ', []);
        case 17:
          _yield$connection$exe3 = _context.sent;
          _yield$connection$exe4 = _slicedToArray(_yield$connection$exe3, 1);
          k5D = _yield$connection$exe4[0];
          data2 = k5D; // Cầu mới chưa có kết quả
          io.emit('data-server-5d', {
            data: data2,
            'game': '1'
          });
          _context.next = 24;
          return _k3Controller["default"].addK3(1);
        case 24:
          _context.next = 26;
          return _k3Controller["default"].handlingK3(1);
        case 26:
          _context.next = 28;
          return _connectDB["default"].execute('SELECT * FROM k3 WHERE `game` = 1 ORDER BY `id` DESC LIMIT 2 ', []);
        case 28:
          _yield$connection$exe5 = _context.sent;
          _yield$connection$exe6 = _slicedToArray(_yield$connection$exe5, 1);
          k3 = _yield$connection$exe6[0];
          data3 = k3; // Cầu mới chưa có kết quả
          io.emit('data-server-k3', {
            data: data3,
            'game': '1'
          });
        case 33:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  _nodeCron["default"].schedule('*/3 * * * *', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var _yield$connection$exe7, _yield$connection$exe8, winGo1, data, _yield$connection$exe9, _yield$connection$exe10, k5D, data2, _yield$connection$exe11, _yield$connection$exe12, k3, data3;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _winGoController["default"].addWinGo(3);
        case 2:
          _context2.next = 4;
          return _winGoController["default"].handlingWinGo1P(3);
        case 4:
          _context2.next = 6;
          return _connectDB["default"].execute('SELECT * FROM `wingo` WHERE `game` = "wingo3" ORDER BY `id` DESC LIMIT 2 ', []);
        case 6:
          _yield$connection$exe7 = _context2.sent;
          _yield$connection$exe8 = _slicedToArray(_yield$connection$exe7, 1);
          winGo1 = _yield$connection$exe8[0];
          data = winGo1; // Cầu mới chưa có kết quả
          io.emit('data-server', {
            data: data
          });
          _context2.next = 13;
          return _k5Controller["default"].add5D(3);
        case 13:
          _context2.next = 15;
          return _k5Controller["default"].handling5D(3);
        case 15:
          _context2.next = 17;
          return _connectDB["default"].execute('SELECT * FROM 5d WHERE `game` = 3 ORDER BY `id` DESC LIMIT 2 ', []);
        case 17:
          _yield$connection$exe9 = _context2.sent;
          _yield$connection$exe10 = _slicedToArray(_yield$connection$exe9, 1);
          k5D = _yield$connection$exe10[0];
          data2 = k5D; // Cầu mới chưa có kết quả
          io.emit('data-server-5d', {
            data: data2,
            'game': '3'
          });
          _context2.next = 24;
          return _k3Controller["default"].addK3(3);
        case 24:
          _context2.next = 26;
          return _k3Controller["default"].handlingK3(3);
        case 26:
          _context2.next = 28;
          return _connectDB["default"].execute('SELECT * FROM k3 WHERE `game` = 3 ORDER BY `id` DESC LIMIT 2 ', []);
        case 28:
          _yield$connection$exe11 = _context2.sent;
          _yield$connection$exe12 = _slicedToArray(_yield$connection$exe11, 1);
          k3 = _yield$connection$exe12[0];
          data3 = k3; // Cầu mới chưa có kết quả
          io.emit('data-server-k3', {
            data: data3,
            'game': '3'
          });
        case 33:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
  _nodeCron["default"].schedule('*/5 * * * *', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var _yield$connection$exe13, _yield$connection$exe14, winGo1, data, _yield$connection$exe15, _yield$connection$exe16, k5D, data2, _yield$connection$exe17, _yield$connection$exe18, k3, data3;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _winGoController["default"].addWinGo(5);
        case 2:
          _context3.next = 4;
          return _winGoController["default"].handlingWinGo1P(5);
        case 4:
          _context3.next = 6;
          return _connectDB["default"].execute('SELECT * FROM `wingo` WHERE `game` = "wingo5" ORDER BY `id` DESC LIMIT 2 ', []);
        case 6:
          _yield$connection$exe13 = _context3.sent;
          _yield$connection$exe14 = _slicedToArray(_yield$connection$exe13, 1);
          winGo1 = _yield$connection$exe14[0];
          data = winGo1; // Cầu mới chưa có kết quả
          io.emit('data-server', {
            data: data
          });
          _context3.next = 13;
          return _k5Controller["default"].add5D(5);
        case 13:
          _context3.next = 15;
          return _k5Controller["default"].handling5D(5);
        case 15:
          _context3.next = 17;
          return _connectDB["default"].execute('SELECT * FROM 5d WHERE `game` = 5 ORDER BY `id` DESC LIMIT 2 ', []);
        case 17:
          _yield$connection$exe15 = _context3.sent;
          _yield$connection$exe16 = _slicedToArray(_yield$connection$exe15, 1);
          k5D = _yield$connection$exe16[0];
          data2 = k5D; // Cầu mới chưa có kết quả
          io.emit('data-server-5d', {
            data: data2,
            'game': '5'
          });
          _context3.next = 24;
          return _k3Controller["default"].addK3(5);
        case 24:
          _context3.next = 26;
          return _k3Controller["default"].handlingK3(5);
        case 26:
          _context3.next = 28;
          return _connectDB["default"].execute('SELECT * FROM k3 WHERE `game` = 5 ORDER BY `id` DESC LIMIT 2 ', []);
        case 28:
          _yield$connection$exe17 = _context3.sent;
          _yield$connection$exe18 = _slicedToArray(_yield$connection$exe17, 1);
          k3 = _yield$connection$exe18[0];
          data3 = k3; // Cầu mới chưa có kết quả
          io.emit('data-server-k3', {
            data: data3,
            'game': '5'
          });
        case 33:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  })));
  _nodeCron["default"].schedule('*/10 * * * *', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var _yield$connection$exe19, _yield$connection$exe20, winGo1, data, _yield$connection$exe21, _yield$connection$exe22, k5D, data2, _yield$connection$exe23, _yield$connection$exe24, k3, data3;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _winGoController["default"].addWinGo(10);
        case 2:
          _context4.next = 4;
          return _winGoController["default"].handlingWinGo1P(10);
        case 4:
          _context4.next = 6;
          return _connectDB["default"].execute('SELECT * FROM `wingo` WHERE `game` = "wingo10" ORDER BY `id` DESC LIMIT 2 ', []);
        case 6:
          _yield$connection$exe19 = _context4.sent;
          _yield$connection$exe20 = _slicedToArray(_yield$connection$exe19, 1);
          winGo1 = _yield$connection$exe20[0];
          data = winGo1; // Cầu mới chưa có kết quả
          io.emit('data-server', {
            data: data
          });
          _context4.next = 13;
          return _k5Controller["default"].add5D(10);
        case 13:
          _context4.next = 15;
          return _k5Controller["default"].handling5D(10);
        case 15:
          _context4.next = 17;
          return _connectDB["default"].execute('SELECT * FROM 5d WHERE `game` = 10 ORDER BY `id` DESC LIMIT 2 ', []);
        case 17:
          _yield$connection$exe21 = _context4.sent;
          _yield$connection$exe22 = _slicedToArray(_yield$connection$exe21, 1);
          k5D = _yield$connection$exe22[0];
          data2 = k5D; // Cầu mới chưa có kết quả
          io.emit('data-server-5d', {
            data: data2,
            'game': '10'
          });
          _context4.next = 24;
          return _k3Controller["default"].addK3(10);
        case 24:
          _context4.next = 26;
          return _k3Controller["default"].handlingK3(10);
        case 26:
          _context4.next = 28;
          return _connectDB["default"].execute('SELECT * FROM k3 WHERE `game` = 10 ORDER BY `id` DESC LIMIT 2 ', []);
        case 28:
          _yield$connection$exe23 = _context4.sent;
          _yield$connection$exe24 = _slicedToArray(_yield$connection$exe23, 1);
          k3 = _yield$connection$exe24[0];
          data3 = k3; // Cầu mới chưa có kết quả
          io.emit('data-server-k3', {
            data: data3,
            'game': '10'
          });
        case 33:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  })));
  _nodeCron["default"].schedule('* * 0 * * *', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _connectDB["default"].execute('UPDATE users SET roses_today = ?', [0]);
        case 2:
          _context5.next = 4;
          return _connectDB["default"].execute('UPDATE point_list SET money = ?', [0]);
        case 4:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  })));
};
module.exports = {
  cronJobGame1p: cronJobGame1p
};