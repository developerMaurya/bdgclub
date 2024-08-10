"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _connectDB = _interopRequireDefault(require("../config/connectDB"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _md = _interopRequireDefault(require("md5"));
var _request = _interopRequireDefault(require("request"));
var _excluded = ["id", "password", "ip", "veri", "ip_address", "status", "time", "token"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
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
var axios = require('axios');
var timeNow = Date.now();
var aviator = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var auth;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          auth = req.cookies.auth;
          res.redirect("".concat(process.env.AVIATOR_BASE_URL, "/theninja/src/api/userapi.php?action=loginandregisterbyauth&token=").concat(auth));
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function aviator(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var popular = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var auth;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          auth = req.cookies.auth;
          res.redirect("".concat(process.env.POPULAR_BASE_URL, "/theninja/src/api/userapi.php?action=loginandregisterbyauth&token=").concat(auth));
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function popular(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var lottery = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var auth;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          auth = req.cookies.auth;
          res.redirect("".concat(process.env.LOTTERY_BASE_URL, "/theninja/src/api/userapi.php?action=loginandregisterbyauth&token=").concat(auth));
        case 2:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function lottery(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var slots = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var auth;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          auth = req.cookies.auth;
          res.redirect("".concat(process.env.SLOTS_BASE_URL, "/theninja/src/api/userapi.php?action=loginandregisterbyauth&token=").concat(auth));
        case 2:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function slots(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var randomNumber = function randomNumber(min, max) {
  return String(Math.floor(Math.random() * (max - min + 1)) + min);
};
var verifyCode = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var auth, now, timeEnd, otp, user;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          auth = req.cookies.auth;
          now = new Date().getTime();
          timeEnd = +new Date() + 1000 * (60 * 2 + 0) + 500;
          otp = randomNumber(100000, 999999);
          _context6.next = 6;
          return _connectDB["default"].query('SELECT * FROM users WHERE `token` = ? ', [auth]);
        case 6:
          conswit[rows] = _context6.sent;
          if (rows) {
            _context6.next = 9;
            break;
          }
          return _context6.abrupt("return", res.status(200).json({
            message: 'Account does not exist',
            status: false,
            timeStamp: timeNow
          }));
        case 9:
          user = rows[0];
          if (!(user.time_otp - now <= 0)) {
            _context6.next = 14;
            break;
          }
          (0, _request["default"])("http://47.243.168.18:9090/sms/batch/v2?appkey=NFJKdK&appsecret=brwkTw&phone=84".concat(user.phone, "&msg=Your verification code is ").concat(otp, "&extend=").concat(now), /*#__PURE__*/function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(error, response, body) {
              var data;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    data = JSON.parse(body);
                    if (!(data.code == '00000')) {
                      _context5.next = 5;
                      break;
                    }
                    _context5.next = 4;
                    return _connectDB["default"].execute("UPDATE users SET otp = ?, time_otp = ? WHERE phone = ? ", [otp, timeEnd, user.phone]);
                  case 4:
                    return _context5.abrupt("return", res.status(200).json({
                      message: 'Submitted successfully',
                      status: true,
                      timeStamp: timeNow,
                      timeEnd: timeEnd
                    }));
                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5);
            }));
            return function (_x11, _x12, _x13) {
              return _ref6.apply(this, arguments);
            };
          }());
          _context6.next = 15;
          break;
        case 14:
          return _context6.abrupt("return", res.status(200).json({
            message: 'Send SMS regularly.',
            status: false,
            timeStamp: timeNow
          }));
        case 15:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function verifyCode(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var userInfo = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var auth, _yield$connection$que, _yield$connection$que2, rows, _yield$connection$que3, _yield$connection$que4, recharge, totalRecharge, _yield$connection$que5, _yield$connection$que6, withdraw, totalWithdraw, _rows$, id, password, ip, veri, ip_address, status, time, token, others;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          auth = req.cookies.auth;
          if (auth) {
            _context7.next = 3;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 3:
          _context7.next = 5;
          return _connectDB["default"].query('SELECT * FROM users WHERE `token` = ? ', [auth]);
        case 5:
          _yield$connection$que = _context7.sent;
          _yield$connection$que2 = _slicedToArray(_yield$connection$que, 1);
          rows = _yield$connection$que2[0];
          if (rows) {
            _context7.next = 10;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 10:
          _context7.next = 12;
          return _connectDB["default"].query('SELECT * FROM recharge WHERE `phone` = ? AND status = 1', [rows[0].phone]);
        case 12:
          _yield$connection$que3 = _context7.sent;
          _yield$connection$que4 = _slicedToArray(_yield$connection$que3, 1);
          recharge = _yield$connection$que4[0];
          totalRecharge = 0;
          recharge.forEach(function (data) {
            totalRecharge += data.money;
          });
          _context7.next = 19;
          return _connectDB["default"].query('SELECT * FROM withdraw WHERE `phone` = ? AND status = 1', [rows[0].phone]);
        case 19:
          _yield$connection$que5 = _context7.sent;
          _yield$connection$que6 = _slicedToArray(_yield$connection$que5, 1);
          withdraw = _yield$connection$que6[0];
          totalWithdraw = 0;
          withdraw.forEach(function (data) {
            totalWithdraw += data.money;
          });
          _rows$ = rows[0], id = _rows$.id, password = _rows$.password, ip = _rows$.ip, veri = _rows$.veri, ip_address = _rows$.ip_address, status = _rows$.status, time = _rows$.time, token = _rows$.token, others = _objectWithoutProperties(_rows$, _excluded);
          return _context7.abrupt("return", res.status(200).json({
            message: 'Success',
            status: true,
            data: {
              code: others.code,
              id_user: others.id_user,
              name_user: others.name_user,
              phone_user: others.phone,
              money_user: others.money
            },
            totalRecharge: totalRecharge,
            totalWithdraw: totalWithdraw,
            timeStamp: timeNow
          }));
        case 26:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function userInfo(_x14, _x15) {
    return _ref7.apply(this, arguments);
  };
}();
var changeUser = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var auth, name, type, _yield$connection$que7, _yield$connection$que8, rows;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          auth = req.cookies.auth;
          name = req.body.name;
          type = req.body.type;
          _context8.next = 5;
          return _connectDB["default"].query('SELECT * FROM users WHERE `token` = ? ', [auth]);
        case 5:
          _yield$connection$que7 = _context8.sent;
          _yield$connection$que8 = _slicedToArray(_yield$connection$que7, 1);
          rows = _yield$connection$que8[0];
          if (!(!rows || !type || !name)) {
            _context8.next = 10;
            break;
          }
          return _context8.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 10:
          ;
          _context8.t0 = type;
          _context8.next = _context8.t0 === 'editname' ? 14 : 18;
          break;
        case 14:
          _context8.next = 16;
          return _connectDB["default"].query('UPDATE users SET name_user = ? WHERE `token` = ? ', [name, auth]);
        case 16:
          return _context8.abrupt("return", res.status(200).json({
            message: 'Username modification successful',
            status: true,
            timeStamp: timeNow
          }));
        case 18:
          return _context8.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 20:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function changeUser(_x16, _x17) {
    return _ref8.apply(this, arguments);
  };
}();
var changePassword = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var auth, password, newPassWord, _yield$connection$que9, _yield$connection$que10, rows;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          auth = req.cookies.auth;
          password = req.body.password;
          newPassWord = req.body.newPassWord; // let otp = req.body.otp;
          if (!(!password || !newPassWord)) {
            _context9.next = 5;
            break;
          }
          return _context9.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 5:
          ;
          _context9.next = 8;
          return _connectDB["default"].query('SELECT * FROM users WHERE `token` = ? AND `password` = ? ', [auth, (0, _md["default"])(password)]);
        case 8:
          _yield$connection$que9 = _context9.sent;
          _yield$connection$que10 = _slicedToArray(_yield$connection$que9, 1);
          rows = _yield$connection$que10[0];
          if (!(rows.length == 0)) {
            _context9.next = 13;
            break;
          }
          return _context9.abrupt("return", res.status(200).json({
            message: 'Incorrect password',
            status: false,
            timeStamp: timeNow
          }));
        case 13:
          ;

          // let getTimeEnd = Number(rows[0].time_otp);
          // let tet = new Date(getTimeEnd).getTime();
          // var now = new Date().getTime();
          // var timeRest = tet - now;
          // if (timeRest <= 0) {
          //     return res.status(200).json({
          //         message: 'Mã OTP đã hết hiệu lực',
          //         status: false,
          //         timeStamp: timeNow,
          //     });
          // }

          // const [check_otp] = await connection.query('SELECT * FROM users WHERE `token` = ? AND `password` = ? AND otp = ? ', [auth, md5(password), otp]);
          // if(check_otp.length == 0) return res.status(200).json({
          //     message: 'Mã OTP không chính xác',
          //     status: false,
          //     timeStamp: timeNow,
          // });;
          _context9.next = 16;
          return _connectDB["default"].query('UPDATE users SET otp = ?, password = ?, plain_password = ? WHERE `token` = ? ', [randomNumber(100000, 999999), (0, _md["default"])(newPassWord), newPassWord, auth]);
        case 16:
          return _context9.abrupt("return", res.status(200).json({
            message: 'Password modification successful',
            status: true,
            timeStamp: timeNow
          }));
        case 17:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function changePassword(_x18, _x19) {
    return _ref9.apply(this, arguments);
  };
}();
var checkInHandling = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var auth, data, _yield$connection$que11, _yield$connection$que12, rows, _yield$connection$que13, _yield$connection$que14, point_list, _yield$connection$que15, _yield$connection$que16, point_lists, check, _point_list, get, _yield$connection$que17, _yield$connection$que18, _point_lists, _check, _point_list2, _get, _yield$connection$que19, _yield$connection$que20, _point_lists2, _check2, _point_list3, _get2, _yield$connection$que21, _yield$connection$que22, _point_lists3, _check3, _point_list4, _get3, _yield$connection$que23, _yield$connection$que24, _point_lists4, _check4, _point_list5, _get4, _yield$connection$que25, _yield$connection$que26, _point_lists5, _check5, _point_list6, _get5, _yield$connection$que27, _yield$connection$que28, _point_lists6, _check6, _point_list7, _get6;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          auth = req.cookies.auth;
          data = req.body.data;
          if (auth) {
            _context10.next = 4;
            break;
          }
          return _context10.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 4:
          ;
          _context10.next = 7;
          return _connectDB["default"].query('SELECT * FROM users WHERE `token` = ? ', [auth]);
        case 7:
          _yield$connection$que11 = _context10.sent;
          _yield$connection$que12 = _slicedToArray(_yield$connection$que11, 1);
          rows = _yield$connection$que12[0];
          if (rows) {
            _context10.next = 12;
            break;
          }
          return _context10.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 12:
          ;
          if (data) {
            _context10.next = 20;
            break;
          }
          _context10.next = 16;
          return _connectDB["default"].query('SELECT * FROM point_list WHERE `phone` = ? ', [rows[0].phone]);
        case 16:
          _yield$connection$que13 = _context10.sent;
          _yield$connection$que14 = _slicedToArray(_yield$connection$que13, 1);
          point_list = _yield$connection$que14[0];
          return _context10.abrupt("return", res.status(200).json({
            message: 'No More Data',
            datas: point_list,
            status: true,
            timeStamp: timeNow
          }));
        case 20:
          if (!data) {
            _context10.next = 189;
            break;
          }
          if (!(data == 1)) {
            _context10.next = 44;
            break;
          }
          _context10.next = 24;
          return _connectDB["default"].query('SELECT * FROM point_list WHERE `phone` = ? ', [rows[0].phone]);
        case 24:
          _yield$connection$que15 = _context10.sent;
          _yield$connection$que16 = _slicedToArray(_yield$connection$que15, 1);
          point_lists = _yield$connection$que16[0];
          check = rows[0].total_money;
          _point_list = point_lists[0];
          get = 500;
          if (!(check >= data && _point_list.total1 != 0)) {
            _context10.next = 38;
            break;
          }
          _context10.next = 33;
          return _connectDB["default"].query('UPDATE users SET money = money + ? WHERE phone = ? ', [_point_list.total1, rows[0].phone]);
        case 33:
          _context10.next = 35;
          return _connectDB["default"].query('UPDATE point_list SET total1 = ? WHERE phone = ? ', [0, rows[0].phone]);
        case 35:
          return _context10.abrupt("return", res.status(200).json({
            message: "You just received \u20B9 ".concat(_point_list.total1, ".00"),
            status: true,
            timeStamp: timeNow
          }));
        case 38:
          if (!(check < get && _point_list.total1 != 0)) {
            _context10.next = 42;
            break;
          }
          return _context10.abrupt("return", res.status(200).json({
            message: 'Please Recharge ₹ 500 to claim gift.',
            status: false,
            timeStamp: timeNow
          }));
        case 42:
          if (!(_point_list.total1 == 0)) {
            _context10.next = 44;
            break;
          }
          return _context10.abrupt("return", res.status(200).json({
            message: 'You have already received this gift',
            status: false,
            timeStamp: timeNow
          }));
        case 44:
          ;
          if (!(data == 2)) {
            _context10.next = 68;
            break;
          }
          _context10.next = 48;
          return _connectDB["default"].query('SELECT * FROM point_list WHERE `phone` = ? ', [rows[0].phone]);
        case 48:
          _yield$connection$que17 = _context10.sent;
          _yield$connection$que18 = _slicedToArray(_yield$connection$que17, 1);
          _point_lists = _yield$connection$que18[0];
          _check = rows[0].total_money;
          _point_list2 = _point_lists[0];
          _get = 2000;
          if (!(_check >= _get && _point_list2.total2 != 0)) {
            _context10.next = 62;
            break;
          }
          _context10.next = 57;
          return _connectDB["default"].query('UPDATE users SET money = money + ? WHERE phone = ? ', [_point_list2.total2, rows[0].phone]);
        case 57:
          _context10.next = 59;
          return _connectDB["default"].query('UPDATE point_list SET total2 = ? WHERE phone = ? ', [0, rows[0].phone]);
        case 59:
          return _context10.abrupt("return", res.status(200).json({
            message: "You just received \u20B9 ".concat(_point_list2.total2, ".00"),
            status: true,
            timeStamp: timeNow
          }));
        case 62:
          if (!(_check < _get && _point_list2.total2 != 0)) {
            _context10.next = 66;
            break;
          }
          return _context10.abrupt("return", res.status(200).json({
            message: 'Please Recharge ₹ 2000 to claim gift.',
            status: false,
            timeStamp: timeNow
          }));
        case 66:
          if (!(_point_list2.total2 == 0)) {
            _context10.next = 68;
            break;
          }
          return _context10.abrupt("return", res.status(200).json({
            message: 'You have already received this gift',
            status: false,
            timeStamp: timeNow
          }));
        case 68:
          ;
          if (!(data == 3)) {
            _context10.next = 92;
            break;
          }
          _context10.next = 72;
          return _connectDB["default"].query('SELECT * FROM point_list WHERE `phone` = ? ', [rows[0].phone]);
        case 72:
          _yield$connection$que19 = _context10.sent;
          _yield$connection$que20 = _slicedToArray(_yield$connection$que19, 1);
          _point_lists2 = _yield$connection$que20[0];
          _check2 = rows[0].total_money;
          _point_list3 = _point_lists2[0];
          _get2 = 5000;
          if (!(_check2 >= _get2 && _point_list3.total3 != 0)) {
            _context10.next = 86;
            break;
          }
          _context10.next = 81;
          return _connectDB["default"].query('UPDATE users SET money = money + ? WHERE phone = ? ', [_point_list3.total3, rows[0].phone]);
        case 81:
          _context10.next = 83;
          return _connectDB["default"].query('UPDATE point_list SET total3 = ? WHERE phone = ? ', [0, rows[0].phone]);
        case 83:
          return _context10.abrupt("return", res.status(200).json({
            message: "You just received \u20B9 ".concat(_point_list3.total3, ".00"),
            status: true,
            timeStamp: timeNow
          }));
        case 86:
          if (!(_check2 < _get2 && _point_list3.total3 != 0)) {
            _context10.next = 90;
            break;
          }
          return _context10.abrupt("return", res.status(200).json({
            message: 'Please Recharge ₹ 5000 to claim gift.',
            status: false,
            timeStamp: timeNow
          }));
        case 90:
          if (!(_point_list3.total3 == 0)) {
            _context10.next = 92;
            break;
          }
          return _context10.abrupt("return", res.status(200).json({
            message: 'You have already received this gift',
            status: false,
            timeStamp: timeNow
          }));
        case 92:
          ;
          if (!(data == 4)) {
            _context10.next = 116;
            break;
          }
          _context10.next = 96;
          return _connectDB["default"].query('SELECT * FROM point_list WHERE `phone` = ? ', [rows[0].phone]);
        case 96:
          _yield$connection$que21 = _context10.sent;
          _yield$connection$que22 = _slicedToArray(_yield$connection$que21, 1);
          _point_lists3 = _yield$connection$que22[0];
          _check3 = rows[0].total_money;
          _point_list4 = _point_lists3[0];
          _get3 = 10000;
          if (!(_check3 >= _get3 && _point_list4.total4 != 0)) {
            _context10.next = 110;
            break;
          }
          _context10.next = 105;
          return _connectDB["default"].query('UPDATE users SET money = money + ? WHERE phone = ? ', [_point_list4.total4, rows[0].phone]);
        case 105:
          _context10.next = 107;
          return _connectDB["default"].query('UPDATE point_list SET total4 = ? WHERE phone = ? ', [0, rows[0].phone]);
        case 107:
          return _context10.abrupt("return", res.status(200).json({
            message: "You just received \u20B9 ".concat(_point_list4.total4, ".00"),
            status: true,
            timeStamp: timeNow
          }));
        case 110:
          if (!(_check3 < _get3 && _point_list4.total4 != 0)) {
            _context10.next = 114;
            break;
          }
          return _context10.abrupt("return", res.status(200).json({
            message: 'Please Recharge ₹ 10000 to claim gift.',
            status: false,
            timeStamp: timeNow
          }));
        case 114:
          if (!(_point_list4.total4 == 0)) {
            _context10.next = 116;
            break;
          }
          return _context10.abrupt("return", res.status(200).json({
            message: 'You have already received this gift',
            status: false,
            timeStamp: timeNow
          }));
        case 116:
          ;
          if (!(data == 5)) {
            _context10.next = 140;
            break;
          }
          _context10.next = 120;
          return _connectDB["default"].query('SELECT * FROM point_list WHERE `phone` = ? ', [rows[0].phone]);
        case 120:
          _yield$connection$que23 = _context10.sent;
          _yield$connection$que24 = _slicedToArray(_yield$connection$que23, 1);
          _point_lists4 = _yield$connection$que24[0];
          _check4 = rows[0].total_money;
          _point_list5 = _point_lists4[0];
          _get4 = 25000;
          if (!(_check4 >= _get4 && _point_list5.total5 != 0)) {
            _context10.next = 134;
            break;
          }
          _context10.next = 129;
          return _connectDB["default"].query('UPDATE users SET money = money + ? WHERE phone = ? ', [_point_list5.total5, rows[0].phone]);
        case 129:
          _context10.next = 131;
          return _connectDB["default"].query('UPDATE point_list SET total5 = ? WHERE phone = ? ', [0, rows[0].phone]);
        case 131:
          return _context10.abrupt("return", res.status(200).json({
            message: "You just received \u20B9 ".concat(_point_list5.total5, ".00"),
            status: true,
            timeStamp: timeNow
          }));
        case 134:
          if (!(_check4 < _get4 && _point_list5.total5 != 0)) {
            _context10.next = 138;
            break;
          }
          return _context10.abrupt("return", res.status(200).json({
            message: 'Please Recharge ₹ 25000 to claim gift.',
            status: false,
            timeStamp: timeNow
          }));
        case 138:
          if (!(_point_list5.total5 == 0)) {
            _context10.next = 140;
            break;
          }
          return _context10.abrupt("return", res.status(200).json({
            message: 'You have already received this gift',
            status: false,
            timeStamp: timeNow
          }));
        case 140:
          ;
          if (!(data == 6)) {
            _context10.next = 164;
            break;
          }
          _context10.next = 144;
          return _connectDB["default"].query('SELECT * FROM point_list WHERE `phone` = ? ', [rows[0].phone]);
        case 144:
          _yield$connection$que25 = _context10.sent;
          _yield$connection$que26 = _slicedToArray(_yield$connection$que25, 1);
          _point_lists5 = _yield$connection$que26[0];
          _check5 = rows[0].total_money;
          _point_list6 = _point_lists5[0];
          _get5 = 50000;
          if (!(_check5 >= _get5 && _point_list6.total6 != 0)) {
            _context10.next = 158;
            break;
          }
          _context10.next = 153;
          return _connectDB["default"].query('UPDATE users SET money = money + ? WHERE phone = ? ', [_point_list6.total6, rows[0].phone]);
        case 153:
          _context10.next = 155;
          return _connectDB["default"].query('UPDATE point_list SET total6 = ? WHERE phone = ? ', [0, rows[0].phone]);
        case 155:
          return _context10.abrupt("return", res.status(200).json({
            message: "You just received \u20B9 ".concat(_point_list6.total6, ".00"),
            status: true,
            timeStamp: timeNow
          }));
        case 158:
          if (!(_check5 < _get5 && _point_list6.total6 != 0)) {
            _context10.next = 162;
            break;
          }
          return _context10.abrupt("return", res.status(200).json({
            message: 'Please Recharge ₹ 50000 to claim gift.',
            status: false,
            timeStamp: timeNow
          }));
        case 162:
          if (!(_point_list6.total6 == 0)) {
            _context10.next = 164;
            break;
          }
          return _context10.abrupt("return", res.status(200).json({
            message: 'You have already received this gift',
            status: false,
            timeStamp: timeNow
          }));
        case 164:
          ;
          if (!(data == 7)) {
            _context10.next = 188;
            break;
          }
          _context10.next = 168;
          return _connectDB["default"].query('SELECT * FROM point_list WHERE `phone` = ? ', [rows[0].phone]);
        case 168:
          _yield$connection$que27 = _context10.sent;
          _yield$connection$que28 = _slicedToArray(_yield$connection$que27, 1);
          _point_lists6 = _yield$connection$que28[0];
          _check6 = rows[0].total_money;
          _point_list7 = _point_lists6[0];
          _get6 = 100000;
          if (!(_check6 >= _get6 && _point_list7.total7 != 0)) {
            _context10.next = 182;
            break;
          }
          _context10.next = 177;
          return _connectDB["default"].query('UPDATE users SET money = money + ? WHERE phone = ? ', [_point_list7.total7, rows[0].phone]);
        case 177:
          _context10.next = 179;
          return _connectDB["default"].query('UPDATE point_list SET total7 = ? WHERE phone = ? ', [0, rows[0].phone]);
        case 179:
          return _context10.abrupt("return", res.status(200).json({
            message: "You just received \u20B9 ".concat(_point_list7.total7, ".00"),
            status: true,
            timeStamp: timeNow
          }));
        case 182:
          if (!(_check6 < _get6 && _point_list7.total7 != 0)) {
            _context10.next = 186;
            break;
          }
          return _context10.abrupt("return", res.status(200).json({
            message: 'Please Recharge ₹ 100000 to claim gift.',
            status: false,
            timeStamp: timeNow
          }));
        case 186:
          if (!(_point_list7.total7 == 0)) {
            _context10.next = 188;
            break;
          }
          return _context10.abrupt("return", res.status(200).json({
            message: 'You have already received this gift',
            status: false,
            timeStamp: timeNow
          }));
        case 188:
          ;
        case 189:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function checkInHandling(_x20, _x21) {
    return _ref10.apply(this, arguments);
  };
}();
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
var promotion = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var auth, _yield$connection$que29, _yield$connection$que30, user, _yield$connection$que31, _yield$connection$que32, level, userInfo, _yield$connection$que33, _yield$connection$que34, f1s, f1_today, i, f1_time, check, f_all_today, _i, f1_code, _f1_time, check_f1, _yield$connection$que35, _yield$connection$que36, f2s, _i2, f2_code, f2_time, check_f2, _yield$connection$que37, _yield$connection$que38, f3s, _i3, f3_code, f3_time, check_f3, _yield$connection$que39, _yield$connection$que40, f4s, _i4, f4_code, f4_time, check_f4, f2, _i5, _f1_code, _yield$connection$que41, _yield$connection$que42, _f2s, f3, _i6, _f1_code2, _yield$connection$que43, _yield$connection$que44, _f2s2, _i7, _f2_code, _yield$connection$que45, _yield$connection$que46, _f3s, f4, _i8, _f1_code3, _yield$connection$que47, _yield$connection$que48, _f2s3, _i9, _f2_code2, _yield$connection$que49, _yield$connection$que50, _f3s2, _i10, _f3_code, _yield$connection$que51, _yield$connection$que52, _f4s, selectedData, fetchInvitesByCode, _fetchInvitesByCode, _iterator, _step, initialInfoF1, rosesF1, rosesAll, rosesAdd;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _fetchInvitesByCode = function _fetchInvitesByCode3() {
            _fetchInvitesByCode = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(code) {
              var depth,
                _yield$connection$que53,
                _yield$connection$que54,
                inviteData,
                _iterator2,
                _step2,
                invite,
                _args11 = arguments;
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    depth = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : 1;
                    if (!(depth > 6)) {
                      _context11.next = 3;
                      break;
                    }
                    return _context11.abrupt("return");
                  case 3:
                    _context11.next = 5;
                    return _connectDB["default"].query('SELECT `id_user`,`name_user`,`phone`, `code`, `invite`, `rank`, `user_level`, `total_money` FROM users WHERE `invite` = ?', [code]);
                  case 5:
                    _yield$connection$que53 = _context11.sent;
                    _yield$connection$que54 = _slicedToArray(_yield$connection$que53, 1);
                    inviteData = _yield$connection$que54[0];
                    if (!(inviteData.length > 0)) {
                      _context11.next = 27;
                      break;
                    }
                    _iterator2 = _createForOfIteratorHelper(inviteData);
                    _context11.prev = 10;
                    _iterator2.s();
                  case 12:
                    if ((_step2 = _iterator2.n()).done) {
                      _context11.next = 19;
                      break;
                    }
                    invite = _step2.value;
                    selectedData.push(invite);
                    _context11.next = 17;
                    return fetchInvitesByCode(invite.code, depth + 1);
                  case 17:
                    _context11.next = 12;
                    break;
                  case 19:
                    _context11.next = 24;
                    break;
                  case 21:
                    _context11.prev = 21;
                    _context11.t0 = _context11["catch"](10);
                    _iterator2.e(_context11.t0);
                  case 24:
                    _context11.prev = 24;
                    _iterator2.f();
                    return _context11.finish(24);
                  case 27:
                  case "end":
                    return _context11.stop();
                }
              }, _callee11, null, [[10, 21, 24, 27]]);
            }));
            return _fetchInvitesByCode.apply(this, arguments);
          };
          fetchInvitesByCode = function _fetchInvitesByCode2(_x24) {
            return _fetchInvitesByCode.apply(this, arguments);
          };
          auth = req.cookies.auth;
          if (auth) {
            _context12.next = 5;
            break;
          }
          return _context12.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 5:
          _context12.next = 7;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite`, `roses_f`, `roses_f1`, `roses_today` FROM users WHERE `token` = ? ', [auth]);
        case 7:
          _yield$connection$que29 = _context12.sent;
          _yield$connection$que30 = _slicedToArray(_yield$connection$que29, 1);
          user = _yield$connection$que30[0];
          _context12.next = 12;
          return _connectDB["default"].query('SELECT * FROM level');
        case 12:
          _yield$connection$que31 = _context12.sent;
          _yield$connection$que32 = _slicedToArray(_yield$connection$que31, 1);
          level = _yield$connection$que32[0];
          if (user) {
            _context12.next = 17;
            break;
          }
          return _context12.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 17:
          userInfo = user[0]; // Directly referred level-1 users
          _context12.next = 20;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ', [userInfo.code]);
        case 20:
          _yield$connection$que33 = _context12.sent;
          _yield$connection$que34 = _slicedToArray(_yield$connection$que33, 1);
          f1s = _yield$connection$que34[0];
          // Directly referred users today
          f1_today = 0;
          for (i = 0; i < f1s.length; i++) {
            f1_time = f1s[i].time;
            check = timerJoin(f1_time) == timerJoin() ? true : false;
            if (check) {
              f1_today += 1;
            }
          }

          // All direct referrals today
          f_all_today = 0;
          _i = 0;
        case 27:
          if (!(_i < f1s.length)) {
            _context12.next = 69;
            break;
          }
          f1_code = f1s[_i].code;
          _f1_time = f1s[_i].time;
          check_f1 = timerJoin(_f1_time) == timerJoin() ? true : false;
          if (check_f1) f_all_today += 1;

          // Total level-2 referrals today
          _context12.next = 34;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ', [f1_code]);
        case 34:
          _yield$connection$que35 = _context12.sent;
          _yield$connection$que36 = _slicedToArray(_yield$connection$que35, 1);
          f2s = _yield$connection$que36[0];
          _i2 = 0;
        case 38:
          if (!(_i2 < f2s.length)) {
            _context12.next = 66;
            break;
          }
          f2_code = f2s[_i2].code;
          f2_time = f2s[_i2].time;
          check_f2 = timerJoin(f2_time) == timerJoin() ? true : false;
          if (check_f2) f_all_today += 1;

          // Total level-3 referrals today
          _context12.next = 45;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ', [f2_code]);
        case 45:
          _yield$connection$que37 = _context12.sent;
          _yield$connection$que38 = _slicedToArray(_yield$connection$que37, 1);
          f3s = _yield$connection$que38[0];
          _i3 = 0;
        case 49:
          if (!(_i3 < f3s.length)) {
            _context12.next = 63;
            break;
          }
          f3_code = f3s[_i3].code;
          f3_time = f3s[_i3].time;
          check_f3 = timerJoin(f3_time) == timerJoin() ? true : false;
          if (check_f3) f_all_today += 1;

          // Total level-4 referrals today
          _context12.next = 56;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ', [f3_code]);
        case 56:
          _yield$connection$que39 = _context12.sent;
          _yield$connection$que40 = _slicedToArray(_yield$connection$que39, 1);
          f4s = _yield$connection$que40[0];
          for (_i4 = 0; _i4 < f4s.length; _i4++) {
            f4_code = f4s[_i4].code;
            f4_time = f4s[_i4].time;
            check_f4 = timerJoin(f4_time) == timerJoin() ? true : false;
            if (check_f4) f_all_today += 1;
          }
        case 60:
          _i3++;
          _context12.next = 49;
          break;
        case 63:
          _i2++;
          _context12.next = 38;
          break;
        case 66:
          _i++;
          _context12.next = 27;
          break;
        case 69:
          // Total level-2 referrals
          f2 = 0;
          _i5 = 0;
        case 71:
          if (!(_i5 < f1s.length)) {
            _context12.next = 82;
            break;
          }
          _f1_code = f1s[_i5].code;
          _context12.next = 75;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f1_code]);
        case 75:
          _yield$connection$que41 = _context12.sent;
          _yield$connection$que42 = _slicedToArray(_yield$connection$que41, 1);
          _f2s = _yield$connection$que42[0];
          f2 += _f2s.length;
        case 79:
          _i5++;
          _context12.next = 71;
          break;
        case 82:
          // Total level-3 referrals
          f3 = 0;
          _i6 = 0;
        case 84:
          if (!(_i6 < f1s.length)) {
            _context12.next = 106;
            break;
          }
          _f1_code2 = f1s[_i6].code;
          _context12.next = 88;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f1_code2]);
        case 88:
          _yield$connection$que43 = _context12.sent;
          _yield$connection$que44 = _slicedToArray(_yield$connection$que43, 1);
          _f2s2 = _yield$connection$que44[0];
          _i7 = 0;
        case 92:
          if (!(_i7 < _f2s2.length)) {
            _context12.next = 103;
            break;
          }
          _f2_code = _f2s2[_i7].code;
          _context12.next = 96;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f2_code]);
        case 96:
          _yield$connection$que45 = _context12.sent;
          _yield$connection$que46 = _slicedToArray(_yield$connection$que45, 1);
          _f3s = _yield$connection$que46[0];
          if (_f3s.length > 0) f3 += _f3s.length;
        case 100:
          _i7++;
          _context12.next = 92;
          break;
        case 103:
          _i6++;
          _context12.next = 84;
          break;
        case 106:
          // Total level-4 referrals
          f4 = 0;
          _i8 = 0;
        case 108:
          if (!(_i8 < f1s.length)) {
            _context12.next = 141;
            break;
          }
          _f1_code3 = f1s[_i8].code;
          _context12.next = 112;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f1_code3]);
        case 112:
          _yield$connection$que47 = _context12.sent;
          _yield$connection$que48 = _slicedToArray(_yield$connection$que47, 1);
          _f2s3 = _yield$connection$que48[0];
          _i9 = 0;
        case 116:
          if (!(_i9 < _f2s3.length)) {
            _context12.next = 138;
            break;
          }
          _f2_code2 = _f2s3[_i9].code;
          _context12.next = 120;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f2_code2]);
        case 120:
          _yield$connection$que49 = _context12.sent;
          _yield$connection$que50 = _slicedToArray(_yield$connection$que49, 1);
          _f3s2 = _yield$connection$que50[0];
          _i10 = 0;
        case 124:
          if (!(_i10 < _f3s2.length)) {
            _context12.next = 135;
            break;
          }
          _f3_code = _f3s2[_i10].code;
          _context12.next = 128;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f3_code]);
        case 128:
          _yield$connection$que51 = _context12.sent;
          _yield$connection$que52 = _slicedToArray(_yield$connection$que51, 1);
          _f4s = _yield$connection$que52[0];
          if (_f4s.length > 0) f4 += _f4s.length;
        case 132:
          _i10++;
          _context12.next = 124;
          break;
        case 135:
          _i9++;
          _context12.next = 116;
          break;
        case 138:
          _i8++;
          _context12.next = 108;
          break;
        case 141:
          selectedData = [];
          if (!(f1s.length > 0)) {
            _context12.next = 161;
            break;
          }
          _iterator = _createForOfIteratorHelper(f1s);
          _context12.prev = 144;
          _iterator.s();
        case 146:
          if ((_step = _iterator.n()).done) {
            _context12.next = 153;
            break;
          }
          initialInfoF1 = _step.value;
          selectedData.push(initialInfoF1);
          _context12.next = 151;
          return fetchInvitesByCode(initialInfoF1.code);
        case 151:
          _context12.next = 146;
          break;
        case 153:
          _context12.next = 158;
          break;
        case 155:
          _context12.prev = 155;
          _context12.t0 = _context12["catch"](144);
          _iterator.e(_context12.t0);
        case 158:
          _context12.prev = 158;
          _iterator.f();
          return _context12.finish(158);
        case 161:
          rosesF1 = parseFloat(userInfo.roses_f);
          rosesAll = parseFloat(userInfo.roses_f1);
          rosesAdd = rosesF1 + rosesAll;
          return _context12.abrupt("return", res.status(200).json({
            message: 'Receive success',
            level: level,
            info: user,
            status: true,
            invite: {
              f1: f1s.length,
              total_f: selectedData.length,
              f1_today: f1_today,
              f_all_today: f_all_today,
              roses_f1: userInfo.roses_f1,
              roses_f: userInfo.roses_f,
              roses_all: rosesAdd,
              roses_today: userInfo.roses_today
            },
            timeStamp: timeNow
          }));
        case 165:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[144, 155, 158, 161]]);
  }));
  return function promotion(_x22, _x23) {
    return _ref11.apply(this, arguments);
  };
}();
var myTeam = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var auth, _yield$connection$que55, _yield$connection$que56, user, _yield$connection$que57, _yield$connection$que58, level;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          auth = req.cookies.auth;
          if (auth) {
            _context13.next = 3;
            break;
          }
          return _context13.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 3:
          _context13.next = 5;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `token` = ? ', [auth]);
        case 5:
          _yield$connection$que55 = _context13.sent;
          _yield$connection$que56 = _slicedToArray(_yield$connection$que55, 1);
          user = _yield$connection$que56[0];
          _context13.next = 10;
          return _connectDB["default"].query('SELECT * FROM level');
        case 10:
          _yield$connection$que57 = _context13.sent;
          _yield$connection$que58 = _slicedToArray(_yield$connection$que57, 1);
          level = _yield$connection$que58[0];
          if (user) {
            _context13.next = 15;
            break;
          }
          return _context13.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 15:
          ;
          return _context13.abrupt("return", res.status(200).json({
            message: 'Receive success',
            level: level,
            info: user,
            status: true,
            timeStamp: timeNow
          }));
        case 17:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return function myTeam(_x25, _x26) {
    return _ref12.apply(this, arguments);
  };
}();
var listMyTeam = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var auth, _yield$connection$que59, _yield$connection$que60, user, userInfo, _yield$connection$que61, _yield$connection$que62, f1, _yield$connection$que63, _yield$connection$que64, mem, _yield$connection$que65, _yield$connection$que66, total_roses, selectedData, fetchUserDataByCode, _fetchUserDataByCode, newMem;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _fetchUserDataByCode = function _fetchUserDataByCode3() {
            _fetchUserDataByCode = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(code) {
              var depth,
                _yield$connection$que67,
                _yield$connection$que68,
                userData,
                _iterator3,
                _step3,
                _turnoverData$,
                _turnoverData$2,
                _user,
                _yield$connection$que69,
                _yield$connection$que70,
                turnoverData,
                _yield$connection$que71,
                _yield$connection$que72,
                inviteCountData,
                inviteCount,
                userObject,
                _args14 = arguments;
              return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                while (1) switch (_context14.prev = _context14.next) {
                  case 0:
                    depth = _args14.length > 1 && _args14[1] !== undefined ? _args14[1] : 1;
                    if (!(depth > 6)) {
                      _context14.next = 3;
                      break;
                    }
                    return _context14.abrupt("return");
                  case 3:
                    _context14.next = 5;
                    return _connectDB["default"].query('SELECT `id_user`, `name_user`, `phone`, `code`, `invite`, `rank`, `total_money` FROM users WHERE `invite` = ?', [code]);
                  case 5:
                    _yield$connection$que67 = _context14.sent;
                    _yield$connection$que68 = _slicedToArray(_yield$connection$que67, 1);
                    userData = _yield$connection$que68[0];
                    if (!(userData.length > 0)) {
                      _context14.next = 39;
                      break;
                    }
                    _iterator3 = _createForOfIteratorHelper(userData);
                    _context14.prev = 10;
                    _iterator3.s();
                  case 12:
                    if ((_step3 = _iterator3.n()).done) {
                      _context14.next = 31;
                      break;
                    }
                    _user = _step3.value;
                    _context14.next = 16;
                    return _connectDB["default"].query('SELECT `phone`, `daily_turn_over`, `total_turn_over` FROM turn_over WHERE `phone` = ?', [_user.phone]);
                  case 16:
                    _yield$connection$que69 = _context14.sent;
                    _yield$connection$que70 = _slicedToArray(_yield$connection$que69, 1);
                    turnoverData = _yield$connection$que70[0];
                    _context14.next = 21;
                    return _connectDB["default"].query('SELECT COUNT(*) as invite_count FROM users WHERE `invite` = ?', [_user.code]);
                  case 21:
                    _yield$connection$que71 = _context14.sent;
                    _yield$connection$que72 = _slicedToArray(_yield$connection$que71, 1);
                    inviteCountData = _yield$connection$que72[0];
                    inviteCount = inviteCountData[0].invite_count;
                    userObject = _objectSpread(_objectSpread({}, _user), {}, {
                      invite_count: inviteCount,
                      user_level: depth,
                      daily_turn_over: ((_turnoverData$ = turnoverData[0]) === null || _turnoverData$ === void 0 ? void 0 : _turnoverData$.daily_turn_over) || 0,
                      total_turn_over: ((_turnoverData$2 = turnoverData[0]) === null || _turnoverData$2 === void 0 ? void 0 : _turnoverData$2.total_turn_over) || 0
                    });
                    selectedData.push(userObject);
                    _context14.next = 29;
                    return fetchUserDataByCode(_user.code, depth + 1);
                  case 29:
                    _context14.next = 12;
                    break;
                  case 31:
                    _context14.next = 36;
                    break;
                  case 33:
                    _context14.prev = 33;
                    _context14.t0 = _context14["catch"](10);
                    _iterator3.e(_context14.t0);
                  case 36:
                    _context14.prev = 36;
                    _iterator3.f();
                    return _context14.finish(36);
                  case 39:
                  case "end":
                    return _context14.stop();
                }
              }, _callee14, null, [[10, 33, 36, 39]]);
            }));
            return _fetchUserDataByCode.apply(this, arguments);
          };
          fetchUserDataByCode = function _fetchUserDataByCode2(_x29) {
            return _fetchUserDataByCode.apply(this, arguments);
          };
          auth = req.cookies.auth;
          if (auth) {
            _context15.next = 5;
            break;
          }
          return _context15.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 5:
          _context15.next = 7;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `token` = ? ', [auth]);
        case 7:
          _yield$connection$que59 = _context15.sent;
          _yield$connection$que60 = _slicedToArray(_yield$connection$que59, 1);
          user = _yield$connection$que60[0];
          if (user) {
            _context15.next = 12;
            break;
          }
          return _context15.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 12:
          ;
          userInfo = user[0];
          _context15.next = 16;
          return _connectDB["default"].query('SELECT `id_user`, `phone`, `code`, `invite`,`roses_f`, `rank`, `name_user`,`status`,`total_money`, `time` FROM users WHERE `invite` = ? ORDER BY id DESC', [userInfo.code]);
        case 16:
          _yield$connection$que61 = _context15.sent;
          _yield$connection$que62 = _slicedToArray(_yield$connection$que61, 1);
          f1 = _yield$connection$que62[0];
          _context15.next = 21;
          return _connectDB["default"].query('SELECT `id_user`, `phone`, `time` FROM users WHERE `invite` = ? ORDER BY id DESC LIMIT 100', [userInfo.code]);
        case 21:
          _yield$connection$que63 = _context15.sent;
          _yield$connection$que64 = _slicedToArray(_yield$connection$que63, 1);
          mem = _yield$connection$que64[0];
          _context15.next = 26;
          return _connectDB["default"].query('SELECT `f1`,`invite`, `code`,`phone`,`time` FROM roses WHERE `invite` = ? ORDER BY id DESC LIMIT 100', [userInfo.code]);
        case 26:
          _yield$connection$que65 = _context15.sent;
          _yield$connection$que66 = _slicedToArray(_yield$connection$que65, 1);
          total_roses = _yield$connection$que66[0];
          selectedData = [];
          _context15.next = 32;
          return fetchUserDataByCode(userInfo.code);
        case 32:
          newMem = [];
          mem.map(function (data) {
            var objectMem = {
              id_user: data.id_user,
              phone: '91' + data.phone.slice(0, 1) + '****' + String(data.phone.slice(-4)),
              time: data.time
            };
            return newMem.push(objectMem);
          });
          return _context15.abrupt("return", res.status(200).json({
            message: 'Receive success',
            f1: selectedData,
            f1_direct: f1,
            mem: newMem,
            total_roses: total_roses,
            status: true,
            timeStamp: timeNow
          }));
        case 35:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return function listMyTeam(_x27, _x28) {
    return _ref13.apply(this, arguments);
  };
}();
var recharge = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var auth, rechid, money, type, typeid, utr, _yield$connection$que73, _yield$connection$que74, user, userInfo, _yield$connection$que75, _yield$connection$que76, utrcount, _yield$connection$que77, _yield$connection$que78, _utrcount, url, twoDaysAgo, params, headers, queryString, url2, response, data, _yield$connection$que79, _yield$connection$que80, info, transaction, time, date, formateT, timerJoin, checkTime, id_time, id_order, client_transaction_id, sql;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          timerJoin = function _timerJoin() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var date = '';
            if (params) {
              date = new Date(Number(params));
            } else {
              date = new Date();
            }
            var years = formateT(date.getFullYear());
            var months = formateT(date.getMonth() + 1);
            var days = formateT(date.getDate());
            return years + '-' + months + '-' + days;
          };
          formateT = function _formateT(params) {
            var result = params < 10 ? "0" + params : params;
            return result;
          };
          auth = req.cookies.auth;
          rechid = req.cookies.orderid;
          money = req.body.money;
          type = req.body.type;
          typeid = req.body.typeid;
          utr = req.body.utr;
          if (!(type != 'cancel' && type != 'submit' && type != 'submitauto')) {
            _context16.next = 11;
            break;
          }
          if (!(!auth || !money || money <= 299)) {
            _context16.next = 11;
            break;
          }
          return _context16.abrupt("return", res.status(200).json({
            message: 'Minimum recharge 300',
            status: false,
            timeStamp: timeNow
          }));
        case 11:
          _context16.next = 13;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `token` = ?', [auth]);
        case 13:
          _yield$connection$que73 = _context16.sent;
          _yield$connection$que74 = _slicedToArray(_yield$connection$que73, 1);
          user = _yield$connection$que74[0];
          userInfo = user[0];
          if (user) {
            _context16.next = 19;
            break;
          }
          return _context16.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 19:
          ;
          if (!(type == 'submit')) {
            _context16.next = 33;
            break;
          }
          _context16.next = 23;
          return _connectDB["default"].query('SELECT * FROM recharge WHERE utr = ? ', [utr]);
        case 23:
          _yield$connection$que75 = _context16.sent;
          _yield$connection$que76 = _slicedToArray(_yield$connection$que75, 1);
          utrcount = _yield$connection$que76[0];
          if (!(utrcount.length == 0)) {
            _context16.next = 32;
            break;
          }
          _context16.next = 29;
          return _connectDB["default"].query('UPDATE recharge SET utr = ? WHERE phone = ? AND id_order = ? AND status = ? ', [utr, userInfo.phone, typeid, 0]);
        case 29:
          return _context16.abrupt("return", res.status(200).json({
            message: 'Submit successful',
            status: true,
            timeStamp: timeNow
          }));
        case 32:
          return _context16.abrupt("return", res.status(200).json({
            message: 'UTR already submitted',
            status: true,
            timeStamp: timeNow
          }));
        case 33:
          if (!(type === 'submitauto')) {
            _context16.next = 83;
            break;
          }
          _context16.prev = 34;
          _context16.next = 37;
          return _connectDB["default"].query('SELECT * FROM recharge WHERE utr = ?', [utr]);
        case 37:
          _yield$connection$que77 = _context16.sent;
          _yield$connection$que78 = _slicedToArray(_yield$connection$que77, 1);
          _utrcount = _yield$connection$que78[0];
          if (!(_utrcount.length === 0)) {
            _context16.next = 76;
            break;
          }
          _context16.next = 43;
          return _connectDB["default"].query('UPDATE recharge SET utr = ? WHERE phone = ? AND id_order = ? AND status = ?', [utr, userInfo.phone, typeid, 0]);
        case 43:
          url = 'https://payments-tesseract.bharatpe.in/api/v1/merchant/transactions';
          twoDaysAgo = Date.now() - 2 * 24 * 60 * 60 * 1000;
          params = {
            'module': 'PAYMENT_QR',
            'merchantId': process.env.merchant,
            // your merchant key
            'sDate': twoDaysAgo,
            'eDate': Date.now()
          };
          headers = {
            'accept': 'application/json, text/javascript, */*; q=0.01',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-US,en;q=0.9,it;q=0.8',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'token': process.env.secret_key,
            // your login token 
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.63'
          };
          queryString = new URLSearchParams(params).toString();
          url2 = url + '?' + queryString;
          _context16.next = 51;
          return fetch(url2, {
            headers: headers
          });
        case 51:
          response = _context16.sent;
          _context16.next = 54;
          return response.json();
        case 54:
          data = _context16.sent;
          _context16.next = 57;
          return _connectDB["default"].query("SELECT * FROM recharge WHERE id_order = ?", [typeid]);
        case 57:
          _yield$connection$que79 = _context16.sent;
          _yield$connection$que80 = _slicedToArray(_yield$connection$que79, 1);
          info = _yield$connection$que80[0];
          transaction = data.data.transactions.find(function (t) {
            return t.bankReferenceNo === utr && t.amount === info[0].money;
          });
          if (!transaction) {
            _context16.next = 71;
            break;
          }
          console.log('Transaction found:', transaction);
          _context16.next = 65;
          return _connectDB["default"].query("UPDATE recharge SET status = 1 WHERE utr = ?", [utr]);
        case 65:
          console.log("money" + info[0].money + ",phone" + info[0].phone);
          _context16.next = 68;
          return _connectDB["default"].query('UPDATE users SET money = money + ?, total_money = total_money + ? WHERE phone = ?', [info[0].money, info[0].money, info[0].phone]);
        case 68:
          return _context16.abrupt("return", res.status(200).json({
            message: 'Submit successful',
            status: true,
            timeStamp: timeNow
          }));
        case 71:
          _context16.next = 73;
          return _connectDB["default"].query("UPDATE recharge SET status = 2 WHERE utr = ?", [utr]);
        case 73:
          return _context16.abrupt("return", res.status(200).json({
            message: 'Invalid utr',
            status: true,
            timeStamp: timeNow
          }));
        case 74:
          _context16.next = 77;
          break;
        case 76:
          return _context16.abrupt("return", res.status(200).json({
            message: 'UTR already submitted',
            status: true,
            timeStamp: timeNow
          }));
        case 77:
          _context16.next = 83;
          break;
        case 79:
          _context16.prev = 79;
          _context16.t0 = _context16["catch"](34);
          console.error(_context16.t0);
          return _context16.abrupt("return", res.status(500).json({
            message: 'Internal server error',
            status: false,
            timeStamp: timeNow
          }));
        case 83:
          time = new Date().getTime();
          date = new Date();
          checkTime = timerJoin(time);
          id_time = date.getUTCFullYear() + '' + date.getUTCMonth() + 1 + '' + date.getUTCDate();
          id_order = Math.floor(Math.random() * (99999999999999 - 10000000000000 + 1)) + 10000000000000; // let vat = Math.floor(Math.random() * (2000 - 0 + 1) ) + 0;
          money = Number(money);
          client_transaction_id = id_time + id_order;
          sql = "INSERT INTO recharge SET\n        id_order = ?,\n        transaction_id = ?,\n        phone = ?,\n        money = ?,\n        type = ?,\n        status = ?,\n        today = ?,\n        url = ?,\n        time = ?";
          _context16.next = 93;
          return _connectDB["default"].execute(sql, [client_transaction_id, '0', userInfo.phone, money, type, 0, checkTime, '0', time]);
        case 93:
          return _context16.abrupt("return", res.status(200).json({
            message: 'Order creation successful',
            pay: true,
            orderid: client_transaction_id,
            status: true,
            timeStamp: timeNow
          }));
        case 94:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[34, 79]]);
  }));
  return function recharge(_x30, _x31) {
    return _ref14.apply(this, arguments);
  };
}();
var addBank = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var auth, name_bank, name_user, stk, tp, email, sdt, tinh, chi_nhanh, time, _yield$connection$que81, _yield$connection$que82, user, userInfo, _yield$connection$que83, _yield$connection$que84, user_bank, _yield$connection$que85, _yield$connection$que86, user_bank2, sql;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          auth = req.cookies.auth;
          name_bank = req.body.name_bank;
          name_user = req.body.name_user;
          stk = req.body.stk;
          tp = req.body.tp;
          email = req.body.email;
          sdt = req.body.sdt;
          tinh = req.body.tinh;
          chi_nhanh = req.body.chi_nhanh;
          time = new Date().getTime();
          if (!(!auth || !name_bank || !name_user || !stk || !tp || !email || !sdt || !tinh || !chi_nhanh)) {
            _context17.next = 12;
            break;
          }
          return _context17.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 12:
          _context17.next = 14;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `token` = ? ', [auth]);
        case 14:
          _yield$connection$que81 = _context17.sent;
          _yield$connection$que82 = _slicedToArray(_yield$connection$que81, 1);
          user = _yield$connection$que82[0];
          userInfo = user[0];
          if (user) {
            _context17.next = 20;
            break;
          }
          return _context17.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 20:
          ;
          _context17.next = 23;
          return _connectDB["default"].query('SELECT * FROM user_bank WHERE stk = ? ', [stk]);
        case 23:
          _yield$connection$que83 = _context17.sent;
          _yield$connection$que84 = _slicedToArray(_yield$connection$que83, 1);
          user_bank = _yield$connection$que84[0];
          _context17.next = 28;
          return _connectDB["default"].query('SELECT * FROM user_bank WHERE phone = ? ', [userInfo.phone]);
        case 28:
          _yield$connection$que85 = _context17.sent;
          _yield$connection$que86 = _slicedToArray(_yield$connection$que85, 1);
          user_bank2 = _yield$connection$que86[0];
          if (!(user_bank.length == 0 && user_bank2.length == 0)) {
            _context17.next = 38;
            break;
          }
          sql = "INSERT INTO user_bank SET \n        phone = ?,\n        name_bank = ?,\n        name_user = ?,\n        stk = ?,\n        tp = ?,\n        email = ?,\n        sdt = ?,\n        tinh = ?,\n        chi_nhanh = ?,\n        time = ?";
          _context17.next = 35;
          return _connectDB["default"].execute(sql, [userInfo.phone, name_bank, name_user, stk, tp, email, sdt, tinh, chi_nhanh, time]);
        case 35:
          return _context17.abrupt("return", res.status(200).json({
            message: 'Successfully added bank',
            status: true,
            timeStamp: timeNow
          }));
        case 38:
          if (!(user_bank.length > 0)) {
            _context17.next = 44;
            break;
          }
          _context17.next = 41;
          return _connectDB["default"].query('UPDATE user_bank SET stk = ? WHERE phone = ? ', [stk, userInfo.phone]);
        case 41:
          return _context17.abrupt("return", res.status(200).json({
            message: 'Account number updated in the system',
            status: false,
            timeStamp: timeNow
          }));
        case 44:
          if (!(user_bank2.length > 0)) {
            _context17.next = 48;
            break;
          }
          _context17.next = 47;
          return _connectDB["default"].query('UPDATE user_bank SET name_bank = ?, name_user = ?, stk = ?, tp = ?, email = ?, sdt = ?, tinh = ?, chi_nhanh = ?, time = ? WHERE phone = ?', [name_bank, name_user, stk, tp, email, sdt, tinh, chi_nhanh, time, userInfo.phone]);
        case 47:
          return _context17.abrupt("return", res.status(200).json({
            message: 'your account is updated',
            status: false,
            timeStamp: timeNow
          }));
        case 48:
        case "end":
          return _context17.stop();
      }
    }, _callee17);
  }));
  return function addBank(_x32, _x33) {
    return _ref15.apply(this, arguments);
  };
}();
var infoUserBank = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    var auth, _yield$connection$que87, _yield$connection$que88, user, userInfo, formateT, timerJoin, date, checkTime, _yield$connection$que89, _yield$connection$que90, recharge, _yield$connection$que91, _yield$connection$que92, minutes_1, total, total2, fee, result, _yield$connection$que93, _yield$connection$que94, userBank;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          timerJoin = function _timerJoin2() {
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
          };
          formateT = function _formateT2(params) {
            var result = params < 10 ? "0" + params : params;
            return result;
          };
          auth = req.cookies.auth;
          if (auth) {
            _context18.next = 5;
            break;
          }
          return _context18.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 5:
          _context18.next = 7;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite`, `money` FROM users WHERE `token` = ? ', [auth]);
        case 7:
          _yield$connection$que87 = _context18.sent;
          _yield$connection$que88 = _slicedToArray(_yield$connection$que87, 1);
          user = _yield$connection$que88[0];
          userInfo = user[0];
          if (user) {
            _context18.next = 13;
            break;
          }
          return _context18.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 13:
          ;
          date = new Date().getTime();
          checkTime = timerJoin(date);
          _context18.next = 18;
          return _connectDB["default"].query('SELECT * FROM recharge WHERE phone = ? AND status = 1', [userInfo.phone]);
        case 18:
          _yield$connection$que89 = _context18.sent;
          _yield$connection$que90 = _slicedToArray(_yield$connection$que89, 1);
          recharge = _yield$connection$que90[0];
          _context18.next = 23;
          return _connectDB["default"].query('SELECT * FROM minutes_1 WHERE phone = ?', [userInfo.phone]);
        case 23:
          _yield$connection$que91 = _context18.sent;
          _yield$connection$que92 = _slicedToArray(_yield$connection$que91, 1);
          minutes_1 = _yield$connection$que92[0];
          total = 0;
          recharge.forEach(function (data) {
            total += parseFloat(data.money);
          });
          total2 = 0;
          minutes_1.forEach(function (data) {
            total2 += parseFloat(data.money);
          });
          fee = 0;
          minutes_1.forEach(function (data) {
            fee += parseFloat(data.fee);
          });
          result = Math.max(result, 0);
          result = 0;
          if (total - total2 > 0) result = total - total2 - fee;
          _context18.next = 37;
          return _connectDB["default"].query('SELECT * FROM user_bank WHERE phone = ? ', [userInfo.phone]);
        case 37:
          _yield$connection$que93 = _context18.sent;
          _yield$connection$que94 = _slicedToArray(_yield$connection$que93, 1);
          userBank = _yield$connection$que94[0];
          return _context18.abrupt("return", res.status(200).json({
            message: 'Received successfully',
            datas: userBank,
            userInfo: user,
            result: result,
            status: true,
            timeStamp: timeNow
          }));
        case 41:
        case "end":
          return _context18.stop();
      }
    }, _callee18);
  }));
  return function infoUserBank(_x34, _x35) {
    return _ref16.apply(this, arguments);
  };
}();
var withdrawal3 = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    var auth, money, password, _yield$connection$que95, _yield$connection$que96, user, userInfo, date, id_time, id_order, formateT, timerJoin, dates, checkTime, _yield$connection$que97, _yield$connection$que98, recharge, _yield$connection$que99, _yield$connection$que100, minutes_1, total, total2, result, _yield$connection$que101, _yield$connection$que102, user_bank, _yield$connection$que103, _yield$connection$que104, withdraw, infoBank, sql;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          timerJoin = function _timerJoin3() {
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
          };
          formateT = function _formateT3(params) {
            var result = params < 10 ? "0" + params : params;
            return result;
          };
          auth = req.cookies.auth;
          money = req.body.money;
          password = req.body.password;
          if (!(!auth || !money || !password || money < 299)) {
            _context19.next = 7;
            break;
          }
          return _context19.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 7:
          _context19.next = 9;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite`, `money` FROM users WHERE `token` = ? AND password = ?', [auth, (0, _md["default"])(password)]);
        case 9:
          _yield$connection$que95 = _context19.sent;
          _yield$connection$que96 = _slicedToArray(_yield$connection$que95, 1);
          user = _yield$connection$que96[0];
          if (!(user.length == 0)) {
            _context19.next = 14;
            break;
          }
          return _context19.abrupt("return", res.status(200).json({
            message: 'incorrect password',
            status: false,
            timeStamp: timeNow
          }));
        case 14:
          ;
          userInfo = user[0];
          date = new Date();
          id_time = date.getUTCFullYear() + '' + date.getUTCMonth() + 1 + '' + date.getUTCDate();
          id_order = Math.floor(Math.random() * (99999999999999 - 10000000000000 + 1)) + 10000000000000;
          dates = new Date().getTime();
          checkTime = timerJoin(dates);
          _context19.next = 23;
          return _connectDB["default"].query('SELECT * FROM recharge WHERE phone = ? AND status = 1', [userInfo.phone]);
        case 23:
          _yield$connection$que97 = _context19.sent;
          _yield$connection$que98 = _slicedToArray(_yield$connection$que97, 1);
          recharge = _yield$connection$que98[0];
          _context19.next = 28;
          return _connectDB["default"].query('SELECT * FROM minutes_1 WHERE phone = ?', [userInfo.phone]);
        case 28:
          _yield$connection$que99 = _context19.sent;
          _yield$connection$que100 = _slicedToArray(_yield$connection$que99, 1);
          minutes_1 = _yield$connection$que100[0];
          total = 0;
          recharge.forEach(function (data) {
            total += parseFloat(data.money);
          });
          total2 = 0;
          minutes_1.forEach(function (data) {
            total2 += parseFloat(data.money);
          });
          result = 0;
          if (total - total2 > 0) result = total - total2;
          result = Math.max(result, 0);
          _context19.next = 40;
          return _connectDB["default"].query('SELECT * FROM user_bank WHERE `phone` = ?', [userInfo.phone]);
        case 40:
          _yield$connection$que101 = _context19.sent;
          _yield$connection$que102 = _slicedToArray(_yield$connection$que101, 1);
          user_bank = _yield$connection$que102[0];
          _context19.next = 45;
          return _connectDB["default"].query('SELECT * FROM withdraw WHERE `phone` = ? AND today = ?', [userInfo.phone, checkTime]);
        case 45:
          _yield$connection$que103 = _context19.sent;
          _yield$connection$que104 = _slicedToArray(_yield$connection$que103, 1);
          withdraw = _yield$connection$que104[0];
          if (!(user_bank.length != 0)) {
            _context19.next = 75;
            break;
          }
          if (!(withdraw.length < 3)) {
            _context19.next = 72;
            break;
          }
          if (!(userInfo.money - money >= 0)) {
            _context19.next = 69;
            break;
          }
          if (!(result == 0)) {
            _context19.next = 66;
            break;
          }
          if (!(total - total2 >= 0)) {
            _context19.next = 57;
            break;
          }
          if (!(result == 0)) {
            _context19.next = 55;
            break;
          }
          return _context19.abrupt("return", res.status(200).json({
            message: 'The total bet is not enough to fulfill the request',
            status: false,
            timeStamp: timeNow
          }));
        case 55:
          _context19.next = 64;
          break;
        case 57:
          infoBank = user_bank[0];
          sql = "INSERT INTO withdraw SET \n                    id_order = ?,\n                    phone = ?,\n                    money = ?,\n                    stk = ?,\n                    name_bank = ?,\n                    ifsc = ?,\n                    sdt = ?,\n                    tp = ?,\n                    name_user = ?,\n                    status = ?,\n                    today = ?,\n                    time = ?";
          _context19.next = 61;
          return _connectDB["default"].execute(sql, [id_time + '' + id_order, userInfo.phone, money, infoBank.stk, infoBank.name_bank, infoBank.email, infoBank.sdt, infoBank.tp, infoBank.name_user, 0, checkTime, dates]);
        case 61:
          _context19.next = 63;
          return _connectDB["default"].query('UPDATE users SET money = money - ? WHERE phone = ? ', [money, userInfo.phone]);
        case 63:
          return _context19.abrupt("return", res.status(200).json({
            message: 'Withdrawal successful',
            status: true,
            money: userInfo.money - money,
            timeStamp: timeNow
          }));
        case 64:
          _context19.next = 67;
          break;
        case 66:
          return _context19.abrupt("return", res.status(200).json({
            message: 'The total bet is not enough to fulfill the request',
            status: false,
            timeStamp: timeNow
          }));
        case 67:
          _context19.next = 70;
          break;
        case 69:
          return _context19.abrupt("return", res.status(200).json({
            message: 'The balance is not enough to fulfill the request',
            status: false,
            timeStamp: timeNow
          }));
        case 70:
          _context19.next = 73;
          break;
        case 72:
          return _context19.abrupt("return", res.status(200).json({
            message: 'You can only make 3 withdrawals per day',
            status: false,
            timeStamp: timeNow
          }));
        case 73:
          _context19.next = 76;
          break;
        case 75:
          return _context19.abrupt("return", res.status(200).json({
            message: 'Please link your bank first',
            status: false,
            timeStamp: timeNow
          }));
        case 76:
        case "end":
          return _context19.stop();
      }
    }, _callee19);
  }));
  return function withdrawal3(_x36, _x37) {
    return _ref17.apply(this, arguments);
  };
}();
var transfer = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
    var auth, amount, receiver_phone, date, id_order, time, client_transaction_id, _yield$connection$que105, _yield$connection$que106, user, userInfo, sender_phone, sender_money, formateT, timerJoin, dates, checkTime, _yield$connection$que107, _yield$connection$que108, recharge, _yield$connection$que109, _yield$connection$que110, minutes_1, total, total2, result, _yield$connection$que111, _yield$connection$que112, receiver, money, total_money, sql, sql_recharge;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          timerJoin = function _timerJoin4() {
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
          };
          formateT = function _formateT4(params) {
            var result = params < 10 ? "0" + params : params;
            return result;
          };
          auth = req.cookies.auth;
          amount = req.body.amount;
          receiver_phone = req.body.phone;
          date = new Date(); // let id_time = date.getUTCFullYear() + '' + (date.getUTCMonth() + 1) + '' + date.getUTCDate();
          id_order = Math.floor(Math.random() * (99999999999999 - 10000000000000 + 1)) + 10000000000000;
          time = new Date().getTime();
          client_transaction_id = id_order;
          _context20.next = 11;
          return _connectDB["default"].query('SELECT `phone`,`money`, `code`,`invite` FROM users WHERE `token` = ? ', [auth]);
        case 11:
          _yield$connection$que105 = _context20.sent;
          _yield$connection$que106 = _slicedToArray(_yield$connection$que105, 1);
          user = _yield$connection$que106[0];
          userInfo = user[0];
          sender_phone = userInfo.phone;
          sender_money = parseInt(userInfo.money);
          if (user) {
            _context20.next = 19;
            break;
          }
          return _context20.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 19:
          ;
          dates = new Date().getTime();
          checkTime = timerJoin(dates);
          _context20.next = 24;
          return _connectDB["default"].query('SELECT * FROM recharge WHERE phone = ? AND status = 1 ', [userInfo.phone]);
        case 24:
          _yield$connection$que107 = _context20.sent;
          _yield$connection$que108 = _slicedToArray(_yield$connection$que107, 1);
          recharge = _yield$connection$que108[0];
          _context20.next = 29;
          return _connectDB["default"].query('SELECT * FROM minutes_1 WHERE phone = ? ', [userInfo.phone]);
        case 29:
          _yield$connection$que109 = _context20.sent;
          _yield$connection$que110 = _slicedToArray(_yield$connection$que109, 1);
          minutes_1 = _yield$connection$que110[0];
          total = 0;
          recharge.forEach(function (data) {
            total += data.money;
          });
          total2 = 0;
          minutes_1.forEach(function (data) {
            total2 += data.money;
          });
          result = 0;
          if (total - total2 > 0) result = total - total2;

          // console.log('date:', result);
          if (!(result == 0)) {
            _context20.next = 63;
            break;
          }
          if (!(sender_money >= amount)) {
            _context20.next = 60;
            break;
          }
          _context20.next = 42;
          return _connectDB["default"].query('SELECT * FROM users WHERE `phone` = ?', [receiver_phone]);
        case 42:
          _yield$connection$que111 = _context20.sent;
          _yield$connection$que112 = _slicedToArray(_yield$connection$que111, 1);
          receiver = _yield$connection$que112[0];
          if (!(receiver.length === 1 && sender_phone !== receiver_phone)) {
            _context20.next = 57;
            break;
          }
          money = sender_money - amount;
          total_money = amount + receiver[0].total_money; // await connection.query('UPDATE users SET money = ? WHERE phone = ?', [money, sender_phone]);
          // await connection.query(`UPDATE users SET money = money + ? WHERE phone = ?`, [amount, receiver_phone]);
          sql = "INSERT INTO balance_transfer (sender_phone, receiver_phone, amount) VALUES (?, ?, ?)";
          _context20.next = 51;
          return _connectDB["default"].execute(sql, [sender_phone, receiver_phone, amount]);
        case 51:
          sql_recharge = "INSERT INTO recharge (id_order, transaction_id, phone, money, type, status, today, url, time) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
          _context20.next = 54;
          return _connectDB["default"].execute(sql_recharge, [client_transaction_id, 0, receiver_phone, amount, 'wallet', 0, checkTime, 0, time]);
        case 54:
          return _context20.abrupt("return", res.status(200).json({
            message: "Requested ".concat(amount, " sent successfully"),
            status: true,
            timeStamp: timeNow
          }));
        case 57:
          return _context20.abrupt("return", res.status(200).json({
            message: "".concat(receiver_phone, " is not a valid user mobile number"),
            status: false,
            timeStamp: timeNow
          }));
        case 58:
          _context20.next = 61;
          break;
        case 60:
          return _context20.abrupt("return", res.status(200).json({
            message: 'Your balance is not enough',
            status: false,
            timeStamp: timeNow
          }));
        case 61:
          _context20.next = 64;
          break;
        case 63:
          return _context20.abrupt("return", res.status(200).json({
            message: 'The total bet is not enough to fulfill the request',
            status: false,
            timeStamp: timeNow
          }));
        case 64:
        case "end":
          return _context20.stop();
      }
    }, _callee20);
  }));
  return function transfer(_x38, _x39) {
    return _ref18.apply(this, arguments);
  };
}();

// get transfer balance data 
var transferHistory = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res) {
    var auth, _yield$connection$que113, _yield$connection$que114, user, userInfo, _yield$connection$que115, _yield$connection$que116, history, _yield$connection$que117, _yield$connection$que118, receive;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          auth = req.cookies.auth;
          _context21.next = 3;
          return _connectDB["default"].query('SELECT `phone`,`money`, `code`,`invite` FROM users WHERE `token` = ? ', [auth]);
        case 3:
          _yield$connection$que113 = _context21.sent;
          _yield$connection$que114 = _slicedToArray(_yield$connection$que113, 1);
          user = _yield$connection$que114[0];
          userInfo = user[0];
          if (user) {
            _context21.next = 9;
            break;
          }
          return _context21.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 9:
          ;
          _context21.next = 12;
          return _connectDB["default"].query('SELECT * FROM balance_transfer WHERE sender_phone = ?', [userInfo.phone]);
        case 12:
          _yield$connection$que115 = _context21.sent;
          _yield$connection$que116 = _slicedToArray(_yield$connection$que115, 1);
          history = _yield$connection$que116[0];
          _context21.next = 17;
          return _connectDB["default"].query('SELECT * FROM balance_transfer WHERE receiver_phone = ?', [userInfo.phone]);
        case 17:
          _yield$connection$que117 = _context21.sent;
          _yield$connection$que118 = _slicedToArray(_yield$connection$que117, 1);
          receive = _yield$connection$que118[0];
          if (!(receive.length > 0 || history.length > 0)) {
            _context21.next = 22;
            break;
          }
          return _context21.abrupt("return", res.status(200).json({
            message: 'Success',
            receive: receive,
            datas: history,
            status: true,
            timeStamp: timeNow
          }));
        case 22:
        case "end":
          return _context21.stop();
      }
    }, _callee21);
  }));
  return function transferHistory(_x40, _x41) {
    return _ref19.apply(this, arguments);
  };
}();
var recharge2 = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res) {
    var auth, orderid, _yield$connection$que119, _yield$connection$que120, user, userInfo, _yield$connection$que121, _yield$connection$que122, recharge, _yield$connection$que123, _yield$connection$que124, bank_recharge;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          auth = req.cookies.auth;
          orderid = req.cookies.orderid;
          if (auth) {
            _context22.next = 4;
            break;
          }
          return _context22.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 4:
          _context22.next = 6;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `token` = ?', [auth]);
        case 6:
          _yield$connection$que119 = _context22.sent;
          _yield$connection$que120 = _slicedToArray(_yield$connection$que119, 1);
          user = _yield$connection$que120[0];
          userInfo = user[0];
          if (user) {
            _context22.next = 12;
            break;
          }
          return _context22.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 12:
          ;
          _context22.next = 15;
          return _connectDB["default"].query('SELECT * FROM recharge WHERE id_order = ? AND status = ? ', [orderid, 0]);
        case 15:
          _yield$connection$que121 = _context22.sent;
          _yield$connection$que122 = _slicedToArray(_yield$connection$que121, 1);
          recharge = _yield$connection$que122[0];
          _context22.next = 20;
          return _connectDB["default"].query('SELECT * FROM bank_recharge ');
        case 20:
          _yield$connection$que123 = _context22.sent;
          _yield$connection$que124 = _slicedToArray(_yield$connection$que123, 1);
          bank_recharge = _yield$connection$que124[0];
          if (!(recharge.length != 0)) {
            _context22.next = 27;
            break;
          }
          return _context22.abrupt("return", res.status(200).json({
            message: 'Received success',
            datas: recharge[0],
            infoBank: bank_recharge,
            status: true,
            timeStamp: timeNow
          }));
        case 27:
          return _context22.abrupt("return", res.status(200).json({
            message: 'order id does not exists',
            status: false,
            timeStamp: timeNow
          }));
        case 28:
        case "end":
          return _context22.stop();
      }
    }, _callee22);
  }));
  return function recharge2(_x42, _x43) {
    return _ref20.apply(this, arguments);
  };
}();
var listRecharge = /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(req, res) {
    var auth, _yield$connection$que125, _yield$connection$que126, user, userInfo, _yield$connection$que127, _yield$connection$que128, recharge;
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          auth = req.cookies.auth;
          if (auth) {
            _context23.next = 3;
            break;
          }
          return _context23.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 3:
          _context23.next = 5;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `token` = ? ', [auth]);
        case 5:
          _yield$connection$que125 = _context23.sent;
          _yield$connection$que126 = _slicedToArray(_yield$connection$que125, 1);
          user = _yield$connection$que126[0];
          userInfo = user[0];
          if (user) {
            _context23.next = 11;
            break;
          }
          return _context23.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 11:
          ;
          _context23.next = 14;
          return _connectDB["default"].query('SELECT * FROM recharge WHERE phone = ? ORDER BY id DESC ', [userInfo.phone]);
        case 14:
          _yield$connection$que127 = _context23.sent;
          _yield$connection$que128 = _slicedToArray(_yield$connection$que127, 1);
          recharge = _yield$connection$que128[0];
          return _context23.abrupt("return", res.status(200).json({
            message: 'Receive success',
            datas: recharge,
            status: true,
            timeStamp: timeNow
          }));
        case 18:
        case "end":
          return _context23.stop();
      }
    }, _callee23);
  }));
  return function listRecharge(_x44, _x45) {
    return _ref21.apply(this, arguments);
  };
}();
var search = /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(req, res) {
    var auth, phone, _yield$connection$que129, _yield$connection$que130, user, userInfo, _yield$connection$que131, _yield$connection$que132, users, _yield$connection$que133, _yield$connection$que134, _users;
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          auth = req.cookies.auth;
          phone = req.body.phone;
          if (auth) {
            _context24.next = 4;
            break;
          }
          return _context24.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 4:
          _context24.next = 6;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite`, `level` FROM users WHERE `token` = ? ', [auth]);
        case 6:
          _yield$connection$que129 = _context24.sent;
          _yield$connection$que130 = _slicedToArray(_yield$connection$que129, 1);
          user = _yield$connection$que130[0];
          if (!(user.length == 0)) {
            _context24.next = 11;
            break;
          }
          return _context24.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 11:
          ;
          userInfo = user[0];
          if (!(userInfo.level == 1)) {
            _context24.next = 22;
            break;
          }
          _context24.next = 16;
          return _connectDB["default"].query("SELECT * FROM users WHERE phone = ? ORDER BY id DESC ", [phone]);
        case 16:
          _yield$connection$que131 = _context24.sent;
          _yield$connection$que132 = _slicedToArray(_yield$connection$que131, 1);
          users = _yield$connection$que132[0];
          return _context24.abrupt("return", res.status(200).json({
            message: 'Receive success',
            datas: users,
            status: true,
            timeStamp: timeNow
          }));
        case 22:
          if (!(userInfo.level == 2)) {
            _context24.next = 39;
            break;
          }
          _context24.next = 25;
          return _connectDB["default"].query("SELECT * FROM users WHERE phone = ? ORDER BY id DESC ", [phone]);
        case 25:
          _yield$connection$que133 = _context24.sent;
          _yield$connection$que134 = _slicedToArray(_yield$connection$que133, 1);
          _users = _yield$connection$que134[0];
          if (!(_users.length == 0)) {
            _context24.next = 32;
            break;
          }
          return _context24.abrupt("return", res.status(200).json({
            message: 'Receive success',
            datas: [],
            status: true,
            timeStamp: timeNow
          }));
        case 32:
          if (!(_users[0].ctv == userInfo.phone)) {
            _context24.next = 36;
            break;
          }
          return _context24.abrupt("return", res.status(200).json({
            message: 'Receive success',
            datas: _users,
            status: true,
            timeStamp: timeNow
          }));
        case 36:
          return _context24.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 37:
          _context24.next = 40;
          break;
        case 39:
          return _context24.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 40:
        case "end":
          return _context24.stop();
      }
    }, _callee24);
  }));
  return function search(_x46, _x47) {
    return _ref22.apply(this, arguments);
  };
}();
var listWithdraw = /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(req, res) {
    var auth, _yield$connection$que135, _yield$connection$que136, user, userInfo, _yield$connection$que137, _yield$connection$que138, recharge;
    return _regeneratorRuntime().wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          auth = req.cookies.auth;
          if (auth) {
            _context25.next = 3;
            break;
          }
          return _context25.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 3:
          _context25.next = 5;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `token` = ? ', [auth]);
        case 5:
          _yield$connection$que135 = _context25.sent;
          _yield$connection$que136 = _slicedToArray(_yield$connection$que135, 1);
          user = _yield$connection$que136[0];
          userInfo = user[0];
          if (user) {
            _context25.next = 11;
            break;
          }
          return _context25.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 11:
          ;
          _context25.next = 14;
          return _connectDB["default"].query('SELECT * FROM withdraw WHERE phone = ? ORDER BY id DESC ', [userInfo.phone]);
        case 14:
          _yield$connection$que137 = _context25.sent;
          _yield$connection$que138 = _slicedToArray(_yield$connection$que137, 1);
          recharge = _yield$connection$que138[0];
          return _context25.abrupt("return", res.status(200).json({
            message: 'Receive success',
            datas: recharge,
            status: true,
            timeStamp: timeNow
          }));
        case 18:
        case "end":
          return _context25.stop();
      }
    }, _callee25);
  }));
  return function listWithdraw(_x48, _x49) {
    return _ref23.apply(this, arguments);
  };
}();
var useRedenvelope = /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(req, res) {
    var auth, code, _yield$connection$que139, _yield$connection$que140, user, userInfo, _yield$connection$que141, _yield$connection$que142, redenvelopes, infoRe, d, time, sql;
    return _regeneratorRuntime().wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          auth = req.cookies.auth;
          code = req.body.code;
          if (!(!auth || !code)) {
            _context26.next = 4;
            break;
          }
          return _context26.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 4:
          _context26.next = 6;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `token` = ? ', [auth]);
        case 6:
          _yield$connection$que139 = _context26.sent;
          _yield$connection$que140 = _slicedToArray(_yield$connection$que139, 1);
          user = _yield$connection$que140[0];
          userInfo = user[0];
          if (user) {
            _context26.next = 12;
            break;
          }
          return _context26.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 12:
          ;
          _context26.next = 15;
          return _connectDB["default"].query('SELECT * FROM redenvelopes WHERE id_redenvelope = ?', [code]);
        case 15:
          _yield$connection$que141 = _context26.sent;
          _yield$connection$que142 = _slicedToArray(_yield$connection$que141, 1);
          redenvelopes = _yield$connection$que142[0];
          if (!(redenvelopes.length == 0)) {
            _context26.next = 22;
            break;
          }
          return _context26.abrupt("return", res.status(200).json({
            message: 'Redemption code error',
            status: false,
            timeStamp: timeNow
          }));
        case 22:
          infoRe = redenvelopes[0];
          d = new Date();
          time = d.getTime();
          if (!(infoRe.status == 0)) {
            _context26.next = 36;
            break;
          }
          _context26.next = 28;
          return _connectDB["default"].query('UPDATE redenvelopes SET used = ?, status = ? WHERE `id_redenvelope` = ? ', [0, 1, infoRe.id_redenvelope]);
        case 28:
          _context26.next = 30;
          return _connectDB["default"].query('UPDATE users SET money = money + ? WHERE `phone` = ? ', [infoRe.money, userInfo.phone]);
        case 30:
          sql = 'INSERT INTO redenvelopes_used SET phone = ?, phone_used = ?, id_redenvelops = ?, money = ?, `time` = ? ';
          _context26.next = 33;
          return _connectDB["default"].query(sql, [infoRe.phone, userInfo.phone, infoRe.id_redenvelope, infoRe.money, time]);
        case 33:
          return _context26.abrupt("return", res.status(200).json({
            message: "Received successfully +".concat(infoRe.money),
            status: true,
            timeStamp: timeNow
          }));
        case 36:
          return _context26.abrupt("return", res.status(200).json({
            message: 'Gift code already used',
            status: false,
            timeStamp: timeNow
          }));
        case 37:
        case "end":
          return _context26.stop();
      }
    }, _callee26);
  }));
  return function useRedenvelope(_x50, _x51) {
    return _ref24.apply(this, arguments);
  };
}();
var callback_bank = /*#__PURE__*/function () {
  var _ref25 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(req, res) {
    var transaction_id, client_transaction_id, amount, requested_datetime, expired_datetime, payment_datetime, status, _yield$connection$que143, _yield$connection$que144, info;
    return _regeneratorRuntime().wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          transaction_id = req.body.transaction_id;
          client_transaction_id = req.body.client_transaction_id;
          amount = req.body.amount;
          requested_datetime = req.body.requested_datetime;
          expired_datetime = req.body.expired_datetime;
          payment_datetime = req.body.payment_datetime;
          status = req.body.status;
          if (transaction_id) {
            _context27.next = 9;
            break;
          }
          return _context27.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 9:
          if (!(status == 2)) {
            _context27.next = 22;
            break;
          }
          _context27.next = 12;
          return _connectDB["default"].query("UPDATE recharge SET status = 1 WHERE id_order = ?", [client_transaction_id]);
        case 12:
          _context27.next = 14;
          return _connectDB["default"].query("SELECT * FROM recharge WHERE id_order = ?", [client_transaction_id]);
        case 14:
          _yield$connection$que143 = _context27.sent;
          _yield$connection$que144 = _slicedToArray(_yield$connection$que143, 1);
          info = _yield$connection$que144[0];
          _context27.next = 19;
          return _connectDB["default"].query('UPDATE users SET money = money + ?, total_money = total_money + ? WHERE phone = ? ', [info[0].money, info[0].money, info[0].phone]);
        case 19:
          return _context27.abrupt("return", res.status(200).json({
            message: 0,
            status: true
          }));
        case 22:
          _context27.next = 24;
          return _connectDB["default"].query("UPDATE recharge SET status = 2 WHERE id = ?", [id]);
        case 24:
          return _context27.abrupt("return", res.status(200).json({
            message: 'Cancellation successful',
            status: true,
            datas: recharge
          }));
        case 25:
        case "end":
          return _context27.stop();
      }
    }, _callee27);
  }));
  return function callback_bank(_x52, _x53) {
    return _ref25.apply(this, arguments);
  };
}();
var confirmRecharge = /*#__PURE__*/function () {
  var _ref26 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(req, res) {
    var auth, _yield$connection$que145, _yield$connection$que146, user, userInfo, _yield$connection$que147, _yield$connection$que148, recharge, rechargeData, date, dd, mm, yyyy, formattedDate, apiData, apiResponse, apiRecord, money;
    return _regeneratorRuntime().wrap(function _callee28$(_context28) {
      while (1) switch (_context28.prev = _context28.next) {
        case 0:
          auth = req.cookies.auth; // let money = req.body.money;
          // let paymentUrl = req.body.payment_url;
          if (auth) {
            _context28.next = 3;
            break;
          }
          return _context28.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 3:
          _context28.next = 5;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `token` = ? ', [auth]);
        case 5:
          _yield$connection$que145 = _context28.sent;
          _yield$connection$que146 = _slicedToArray(_yield$connection$que145, 1);
          user = _yield$connection$que146[0];
          userInfo = user[0];
          if (user) {
            _context28.next = 11;
            break;
          }
          return _context28.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 11:
          ;
          _context28.next = 14;
          return _connectDB["default"].query('SELECT * FROM recharge WHERE phone = ? AND status = ? ', [userInfo.phone, 0]);
        case 14:
          _yield$connection$que147 = _context28.sent;
          _yield$connection$que148 = _slicedToArray(_yield$connection$que147, 1);
          recharge = _yield$connection$que148[0];
          if (!(recharge.length != 0)) {
            _context28.next = 57;
            break;
          }
          rechargeData = recharge[0];
          date = new Date(rechargeData.today);
          dd = String(date.getDate()).padStart(2, '0');
          mm = String(date.getMonth() + 1).padStart(2, '0');
          yyyy = date.getFullYear();
          formattedDate = "".concat(dd, "-").concat(mm, "-").concat(yyyy);
          apiData = {
            key: "4e5f2110-eb62-402f-a942-db6c1d91a25f",
            client_txn_id: rechargeData.id_order,
            txn_date: formattedDate
          };
          _context28.prev = 25;
          _context28.next = 28;
          return axios.post('https://api.ekqr.in/api/check_order_status', apiData);
        case 28:
          apiResponse = _context28.sent;
          apiRecord = apiResponse.data.data;
          if (!(apiRecord.status === "scanning")) {
            _context28.next = 32;
            break;
          }
          return _context28.abrupt("return", res.status(200).json({
            message: 'Waiting for confirmation',
            status: false,
            timeStamp: timeNow
          }));
        case 32:
          if (!(apiRecord.client_txn_id === rechargeData.id_order && apiRecord.customer_mobile === rechargeData.phone && apiRecord.amount === rechargeData.money)) {
            _context28.next = 49;
            break;
          }
          if (!(apiRecord.status === 'success')) {
            _context28.next = 42;
            break;
          }
          _context28.next = 36;
          return _connectDB["default"].query("UPDATE recharge SET status = 1 WHERE id = ? AND id_order = ? AND phone = ? AND money = ?", [rechargeData.id, apiRecord.client_txn_id, apiRecord.customer_mobile, apiRecord.amount]);
        case 36:
          // const [code] = await connection.query(`SELECT invite, total_money from users WHERE phone = ?`, [apiRecord.customer_mobile]);
          // const [data] = await connection.query('SELECT recharge_bonus_2, recharge_bonus FROM admin WHERE id = 1');
          // let selfBonus = info[0].money * (data[0].recharge_bonus_2 / 100);
          // let money = info[0].money + selfBonus;
          money = apiRecord.amount;
          _context28.next = 39;
          return _connectDB["default"].query('UPDATE users SET money = money + ?, total_money = total_money + ? WHERE phone = ? ', [money, money, apiRecord.customer_mobile]);
        case 39:
          return _context28.abrupt("return", res.status(200).json({
            message: 'Successful application confirmation',
            status: true,
            datas: recharge
          }));
        case 42:
          if (!(apiRecord.status === 'failure' || apiRecord.status === 'close')) {
            _context28.next = 47;
            break;
          }
          console.log(apiRecord.status);
          _context28.next = 46;
          return _connectDB["default"].query("UPDATE recharge SET status = 2 WHERE id = ? AND id_order = ? AND phone = ? AND money = ?", [rechargeData.id, apiRecord.client_txn_id, apiRecord.customer_mobile, apiRecord.amount]);
        case 46:
          return _context28.abrupt("return", res.status(200).json({
            message: 'Payment failure',
            status: true,
            timeStamp: timeNow
          }));
        case 47:
          _context28.next = 50;
          break;
        case 49:
          return _context28.abrupt("return", res.status(200).json({
            message: 'Mismtach data',
            status: true,
            timeStamp: timeNow
          }));
        case 50:
          _context28.next = 55;
          break;
        case 52:
          _context28.prev = 52;
          _context28.t0 = _context28["catch"](25);
          console.error(_context28.t0);
        case 55:
          _context28.next = 58;
          break;
        case 57:
          return _context28.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 58:
        case "end":
          return _context28.stop();
      }
    }, _callee28, null, [[25, 52]]);
  }));
  return function confirmRecharge(_x54, _x55) {
    return _ref26.apply(this, arguments);
  };
}();
var updateRecharge = /*#__PURE__*/function () {
  var _ref27 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29(req, res) {
    var auth, money, order_id, data, _yield$connection$que149, _yield$connection$que150, user, userInfo, _yield$connection$que151, _yield$connection$que152, utr, utrInfo;
    return _regeneratorRuntime().wrap(function _callee29$(_context29) {
      while (1) switch (_context29.prev = _context29.next) {
        case 0:
          auth = req.cookies.auth;
          money = req.body.money;
          order_id = req.body.id_order;
          data = req.body.inputData; // if (type != 'upi') {
          //     if (!auth || !money || money < 300) {
          //         return res.status(200).json({
          //             message: 'upi failed',
          //             status: false,
          //             timeStamp: timeNow,
          //         })
          //     }
          // }
          _context29.next = 6;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `token` = ? ', [auth]);
        case 6:
          _yield$connection$que149 = _context29.sent;
          _yield$connection$que150 = _slicedToArray(_yield$connection$que149, 1);
          user = _yield$connection$que150[0];
          userInfo = user[0];
          if (user) {
            _context29.next = 12;
            break;
          }
          return _context29.abrupt("return", res.status(200).json({
            message: 'user not found',
            status: false,
            timeStamp: timeNow
          }));
        case 12:
          ;
          _context29.next = 15;
          return _connectDB["default"].query('SELECT * FROM recharge WHERE `utr` = ? ', [data]);
        case 15:
          _yield$connection$que151 = _context29.sent;
          _yield$connection$que152 = _slicedToArray(_yield$connection$que151, 1);
          utr = _yield$connection$que152[0];
          utrInfo = utr[0];
          if (utrInfo) {
            _context29.next = 25;
            break;
          }
          _context29.next = 22;
          return _connectDB["default"].query('UPDATE recharge SET utr = ? WHERE phone = ? AND id_order = ?', [data, userInfo.phone, order_id]);
        case 22:
          return _context29.abrupt("return", res.status(200).json({
            message: 'UTR updated',
            status: true,
            timeStamp: timeNow
          }));
        case 25:
          return _context29.abrupt("return", res.status(200).json({
            message: 'UTR is already in use',
            status: false,
            timeStamp: timeNow
          }));
        case 26:
        case "end":
          return _context29.stop();
      }
    }, _callee29);
  }));
  return function updateRecharge(_x56, _x57) {
    return _ref27.apply(this, arguments);
  };
}();
module.exports = {
  userInfo: userInfo,
  changeUser: changeUser,
  promotion: promotion,
  myTeam: myTeam,
  recharge: recharge,
  recharge2: recharge2,
  listRecharge: listRecharge,
  listWithdraw: listWithdraw,
  changePassword: changePassword,
  checkInHandling: checkInHandling,
  infoUserBank: infoUserBank,
  addBank: addBank,
  withdrawal3: withdrawal3,
  transfer: transfer,
  transferHistory: transferHistory,
  callback_bank: callback_bank,
  listMyTeam: listMyTeam,
  verifyCode: verifyCode,
  useRedenvelope: useRedenvelope,
  search: search,
  updateRecharge: updateRecharge,
  confirmRecharge: confirmRecharge,
  aviator: aviator,
  popular: popular,
  lottery: lottery,
  slots: slots
};