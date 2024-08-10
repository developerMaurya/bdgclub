"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _connectDB = _interopRequireDefault(require("../config/connectDB"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _md = _interopRequireDefault(require("md5"));
var _excluded = ["token", "password", "otp", "level"],
  _excluded2 = ["token", "password", "otp", "level"],
  _excluded3 = ["token", "password", "otp", "level"],
  _excluded4 = ["token", "password", "otp", "level"],
  _excluded5 = ["token", "password", "otp", "level"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
require('dotenv').config();
var timeNow = Date.now();
var dailyPage = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", res.render("daily/statistical.ejs"));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function dailyPage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var listMeber = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", res.render("daily/members.ejs"));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function listMeber(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var profileMember = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", res.render("daily/profileMember.ejs"));
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function profileMember(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var settingPage = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", res.render("daily/settings.ejs"));
        case 1:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function settingPage(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var listRecharge = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          return _context5.abrupt("return", res.render("daily/listRecharge.ejs"));
        case 1:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function listRecharge(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var listWithdraw = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          return _context6.abrupt("return", res.render("daily/listWithdraw.ejs"));
        case 1:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function listWithdraw(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var pageInfo = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var phone;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          phone = req.params.phone;
          return _context7.abrupt("return", res.render("daily/profileMember.ejs", {
            phone: phone
          }));
        case 2:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function pageInfo(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var giftPage = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var auth, _yield$connection$exe, _yield$connection$exe2, rows, money, money2, _yield$connection$exe3, _yield$connection$exe4, point_list;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          auth = req.cookies.auth;
          _context8.next = 3;
          return _connectDB["default"].execute('SELECT `phone` FROM `users` WHERE `token` = ? AND veri = 1', [auth]);
        case 3:
          _yield$connection$exe = _context8.sent;
          _yield$connection$exe2 = _slicedToArray(_yield$connection$exe, 1);
          rows = _yield$connection$exe2[0];
          money = 0;
          money2 = 0;
          if (!(rows.length != 0)) {
            _context8.next = 16;
            break;
          }
          _context8.next = 11;
          return _connectDB["default"].execute('SELECT `money`, `money_us` FROM `point_list` WHERE `phone` = ?', [rows[0].phone]);
        case 11:
          _yield$connection$exe3 = _context8.sent;
          _yield$connection$exe4 = _slicedToArray(_yield$connection$exe3, 1);
          point_list = _yield$connection$exe4[0];
          money = point_list[0].money;
          money2 = point_list[0].money_us;
        case 16:
          return _context8.abrupt("return", res.render("daily/giftPage.ejs", {
            money: money,
            money2: money2
          }));
        case 17:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function giftPage(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var support = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          return _context9.abrupt("return", res.render("daily/support.ejs"));
        case 1:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function support(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
var settings = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var auth, type, value, _yield$connection$exe5, _yield$connection$exe6, rows, _yield$connection$exe7, _yield$connection$exe8, point_list, _yield$connection$exe9, _yield$connection$exe10, _settings, telegram, telegram2;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          auth = req.cookies.auth;
          type = req.body.type;
          value = req.body.value;
          _context10.next = 5;
          return _connectDB["default"].execute('SELECT `phone` FROM `users` WHERE `token` = ? AND veri = 1', [auth]);
        case 5:
          _yield$connection$exe5 = _context10.sent;
          _yield$connection$exe6 = _slicedToArray(_yield$connection$exe5, 1);
          rows = _yield$connection$exe6[0];
          if (!(rows.length == 0)) {
            _context10.next = 10;
            break;
          }
          return _context10.abrupt("return", res.status(200).json({
            message: 'Error',
            status: false
          }));
        case 10:
          if (type) {
            _context10.next = 26;
            break;
          }
          _context10.next = 13;
          return _connectDB["default"].execute('SELECT `telegram` FROM `point_list` WHERE phone = ?', [rows[0].phone]);
        case 13:
          _yield$connection$exe7 = _context10.sent;
          _yield$connection$exe8 = _slicedToArray(_yield$connection$exe7, 1);
          point_list = _yield$connection$exe8[0];
          _context10.next = 18;
          return _connectDB["default"].execute('SELECT `telegram` FROM `admin`');
        case 18:
          _yield$connection$exe9 = _context10.sent;
          _yield$connection$exe10 = _slicedToArray(_yield$connection$exe9, 1);
          _settings = _yield$connection$exe10[0];
          telegram = _settings[0].telegram;
          telegram2 = point_list[0].telegram;
          return _context10.abrupt("return", res.status(200).json({
            message: 'Get success',
            status: true,
            telegram: telegram,
            telegram2: telegram2
          }));
        case 26:
          _context10.next = 28;
          return _connectDB["default"].execute('UPDATE `point_list` SET telegram = ? WHERE phone = ?', [value, rows[0].phone]);
        case 28:
          return _context10.abrupt("return", res.status(200).json({
            message: 'Successfully edited',
            status: true
          }));
        case 29:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function settings(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

// xác nhận admin
var middlewareDailyController = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res, next) {
    var auth, _yield$connection$exe11, _yield$connection$exe12, rows;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          // xác nhận token
          auth = req.cookies.auth;
          if (auth) {
            _context11.next = 3;
            break;
          }
          return _context11.abrupt("return", res.redirect("/login"));
        case 3:
          _context11.next = 5;
          return _connectDB["default"].execute('SELECT `token`,`level`, `status` FROM `users` WHERE `token` = ? AND veri = 1', [auth]);
        case 5:
          _yield$connection$exe11 = _context11.sent;
          _yield$connection$exe12 = _slicedToArray(_yield$connection$exe11, 1);
          rows = _yield$connection$exe12[0];
          if (rows) {
            _context11.next = 10;
            break;
          }
          return _context11.abrupt("return", res.redirect("/login"));
        case 10:
          _context11.prev = 10;
          if (!(auth == rows[0].token && rows[0].status == 1)) {
            _context11.next = 19;
            break;
          }
          if (!(rows[0].level == 2)) {
            _context11.next = 16;
            break;
          }
          next();
          _context11.next = 17;
          break;
        case 16:
          return _context11.abrupt("return", res.redirect("/home"));
        case 17:
          _context11.next = 20;
          break;
        case 19:
          return _context11.abrupt("return", res.redirect("/login"));
        case 20:
          _context11.next = 25;
          break;
        case 22:
          _context11.prev = 22;
          _context11.t0 = _context11["catch"](10);
          return _context11.abrupt("return", res.redirect("/login"));
        case 25:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[10, 22]]);
  }));
  return function middlewareDailyController(_x21, _x22, _x23) {
    return _ref11.apply(this, arguments);
  };
}();
var statistical = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var auth, _yield$connection$que, _yield$connection$que2, user, userInfo, _yield$connection$que3, _yield$connection$que4, f1s, f1_today, i, f1_time, check, f_all_today, _i, f1_code, _f1_time, check_f1, _yield$connection$que5, _yield$connection$que6, f2s, _i2, f2_code, f2_time, check_f2, _yield$connection$que7, _yield$connection$que8, f3s, _i3, f3_code, f3_time, check_f3, _yield$connection$que9, _yield$connection$que10, f4s, _i4, f4_code, f4_time, check_f4, f2, _i5, _f1_code, _yield$connection$que11, _yield$connection$que12, _f2s, f3, _i6, _f1_code2, _yield$connection$que13, _yield$connection$que14, _f2s2, _i7, _f2_code, _yield$connection$que15, _yield$connection$que16, _f3s, f4, _i8, _f1_code3, _yield$connection$que17, _yield$connection$que18, _f2s3, _i9, _f2_code2, _yield$connection$que19, _yield$connection$que20, _f3s2, _i10, _f3_code, _yield$connection$que21, _yield$connection$que22, _f4s;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          auth = req.cookies.auth;
          _context12.next = 3;
          return _connectDB["default"].query('SELECT * FROM users WHERE token = ? ', [auth]);
        case 3:
          _yield$connection$que = _context12.sent;
          _yield$connection$que2 = _slicedToArray(_yield$connection$que, 1);
          user = _yield$connection$que2[0];
          userInfo = user[0]; // cấp dưới trực tiếp all
          _context12.next = 9;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ', [userInfo.code]);
        case 9:
          _yield$connection$que3 = _context12.sent;
          _yield$connection$que4 = _slicedToArray(_yield$connection$que3, 1);
          f1s = _yield$connection$que4[0];
          // cấp dưới trực tiếp hôm nay 
          f1_today = 0;
          for (i = 0; i < f1s.length; i++) {
            f1_time = f1s[i].time; // Mã giới thiệu f1
            check = timerJoin(f1_time) == timerJoin() ? true : false;
            if (check) {
              f1_today += 1;
            }
          }

          // tất cả cấp dưới hôm nay 
          f_all_today = 0;
          _i = 0;
        case 16:
          if (!(_i < f1s.length)) {
            _context12.next = 58;
            break;
          }
          f1_code = f1s[_i].code; // Mã giới thiệu f1
          _f1_time = f1s[_i].time; // time f1
          check_f1 = timerJoin(_f1_time) == timerJoin() ? true : false;
          if (check_f1) f_all_today += 1;
          // tổng f1 mời đc hôm nay
          _context12.next = 23;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ', [f1_code]);
        case 23:
          _yield$connection$que5 = _context12.sent;
          _yield$connection$que6 = _slicedToArray(_yield$connection$que5, 1);
          f2s = _yield$connection$que6[0];
          _i2 = 0;
        case 27:
          if (!(_i2 < f2s.length)) {
            _context12.next = 55;
            break;
          }
          f2_code = f2s[_i2].code; // Mã giới thiệu f2
          f2_time = f2s[_i2].time; // time f2
          check_f2 = timerJoin(f2_time) == timerJoin() ? true : false;
          if (check_f2) f_all_today += 1;
          // tổng f2 mời đc hôm nay
          _context12.next = 34;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ', [f2_code]);
        case 34:
          _yield$connection$que7 = _context12.sent;
          _yield$connection$que8 = _slicedToArray(_yield$connection$que7, 1);
          f3s = _yield$connection$que8[0];
          _i3 = 0;
        case 38:
          if (!(_i3 < f3s.length)) {
            _context12.next = 52;
            break;
          }
          f3_code = f3s[_i3].code; // Mã giới thiệu f3
          f3_time = f3s[_i3].time; // time f3
          check_f3 = timerJoin(f3_time) == timerJoin() ? true : false;
          if (check_f3) f_all_today += 1;
          _context12.next = 45;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ', [f3_code]);
        case 45:
          _yield$connection$que9 = _context12.sent;
          _yield$connection$que10 = _slicedToArray(_yield$connection$que9, 1);
          f4s = _yield$connection$que10[0];
          // tổng f3 mời đc hôm nay
          for (_i4 = 0; _i4 < f4s.length; _i4++) {
            f4_code = f4s[_i4].code; // Mã giới thiệu f4
            f4_time = f4s[_i4].time; // time f4
            check_f4 = timerJoin(f4_time) == timerJoin() ? true : false;
            if (check_f4) f_all_today += 1;
            // tổng f3 mời đc hôm nay
          }
        case 49:
          _i3++;
          _context12.next = 38;
          break;
        case 52:
          _i2++;
          _context12.next = 27;
          break;
        case 55:
          _i++;
          _context12.next = 16;
          break;
        case 58:
          // Tổng số f2
          f2 = 0;
          _i5 = 0;
        case 60:
          if (!(_i5 < f1s.length)) {
            _context12.next = 71;
            break;
          }
          _f1_code = f1s[_i5].code; // Mã giới thiệu f1
          _context12.next = 64;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f1_code]);
        case 64:
          _yield$connection$que11 = _context12.sent;
          _yield$connection$que12 = _slicedToArray(_yield$connection$que11, 1);
          _f2s = _yield$connection$que12[0];
          f2 += _f2s.length;
        case 68:
          _i5++;
          _context12.next = 60;
          break;
        case 71:
          // Tổng số f3
          f3 = 0;
          _i6 = 0;
        case 73:
          if (!(_i6 < f1s.length)) {
            _context12.next = 95;
            break;
          }
          _f1_code2 = f1s[_i6].code; // Mã giới thiệu f1
          _context12.next = 77;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f1_code2]);
        case 77:
          _yield$connection$que13 = _context12.sent;
          _yield$connection$que14 = _slicedToArray(_yield$connection$que13, 1);
          _f2s2 = _yield$connection$que14[0];
          _i7 = 0;
        case 81:
          if (!(_i7 < _f2s2.length)) {
            _context12.next = 92;
            break;
          }
          _f2_code = _f2s2[_i7].code;
          _context12.next = 85;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f2_code]);
        case 85:
          _yield$connection$que15 = _context12.sent;
          _yield$connection$que16 = _slicedToArray(_yield$connection$que15, 1);
          _f3s = _yield$connection$que16[0];
          if (_f3s.length > 0) f3 += _f3s.length;
        case 89:
          _i7++;
          _context12.next = 81;
          break;
        case 92:
          _i6++;
          _context12.next = 73;
          break;
        case 95:
          // Tổng số f4
          f4 = 0;
          _i8 = 0;
        case 97:
          if (!(_i8 < f1s.length)) {
            _context12.next = 130;
            break;
          }
          _f1_code3 = f1s[_i8].code; // Mã giới thiệu f1
          _context12.next = 101;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f1_code3]);
        case 101:
          _yield$connection$que17 = _context12.sent;
          _yield$connection$que18 = _slicedToArray(_yield$connection$que17, 1);
          _f2s3 = _yield$connection$que18[0];
          _i9 = 0;
        case 105:
          if (!(_i9 < _f2s3.length)) {
            _context12.next = 127;
            break;
          }
          _f2_code2 = _f2s3[_i9].code;
          _context12.next = 109;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f2_code2]);
        case 109:
          _yield$connection$que19 = _context12.sent;
          _yield$connection$que20 = _slicedToArray(_yield$connection$que19, 1);
          _f3s2 = _yield$connection$que20[0];
          _i10 = 0;
        case 113:
          if (!(_i10 < _f3s2.length)) {
            _context12.next = 124;
            break;
          }
          _f3_code = _f3s2[_i10].code;
          _context12.next = 117;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f3_code]);
        case 117:
          _yield$connection$que21 = _context12.sent;
          _yield$connection$que22 = _slicedToArray(_yield$connection$que21, 1);
          _f4s = _yield$connection$que22[0];
          if (_f4s.length > 0) f4 += _f4s.length;
        case 121:
          _i10++;
          _context12.next = 113;
          break;
        case 124:
          _i9++;
          _context12.next = 105;
          break;
        case 127:
          _i8++;
          _context12.next = 97;
          break;
        case 130:
          return _context12.abrupt("return", res.status(200).json({
            message: 'Success',
            status: true,
            datas: user,
            f1: f1s.length,
            f2: f2,
            f3: f3,
            f4: f4
          }));
        case 131:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return function statistical(_x24, _x25) {
    return _ref12.apply(this, arguments);
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
var userInfo = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var auth, phone, _yield$connection$que23, _yield$connection$que24, user, _yield$connection$que25, _yield$connection$que26, auths, _user$, token, password, otp, level, userInfo, _yield$connection$que27, _yield$connection$que28, f1s, f1_today, i, f1_time, check, f_all_today, _i11, f1_code, _f1_time2, check_f1, _yield$connection$que29, _yield$connection$que30, f2s, _i12, f2_code, f2_time, check_f2, _yield$connection$que31, _yield$connection$que32, f3s, _i13, f3_code, f3_time, check_f3, _yield$connection$que33, _yield$connection$que34, f4s, _i14, f4_code, f4_time, check_f4, f2, _i15, _f1_code4, _yield$connection$que35, _yield$connection$que36, _f2s4, f3, _i16, _f1_code5, _yield$connection$que37, _yield$connection$que38, _f2s5, _i17, _f2_code3, _yield$connection$que39, _yield$connection$que40, _f3s3, f4, _i18, _f1_code6, _yield$connection$que41, _yield$connection$que42, _f2s6, _i19, _f2_code4, _yield$connection$que43, _yield$connection$que44, _f3s4, _i20, _f3_code2, _yield$connection$que45, _yield$connection$que46, _f4s2, _yield$connection$que47, _yield$connection$que48, recharge, _yield$connection$que49, _yield$connection$que50, withdraw, _yield$connection$que51, _yield$connection$que52, bank_user;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          auth = req.cookies.auth;
          phone = req.params.phone;
          if (phone) {
            _context13.next = 4;
            break;
          }
          return _context13.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 4:
          _context13.next = 6;
          return _connectDB["default"].query('SELECT * FROM users WHERE phone = ? ', [phone]);
        case 6:
          _yield$connection$que23 = _context13.sent;
          _yield$connection$que24 = _slicedToArray(_yield$connection$que23, 1);
          user = _yield$connection$que24[0];
          _context13.next = 11;
          return _connectDB["default"].query('SELECT * FROM users WHERE token = ? ', [auth]);
        case 11:
          _yield$connection$que25 = _context13.sent;
          _yield$connection$que26 = _slicedToArray(_yield$connection$que25, 1);
          auths = _yield$connection$que26[0];
          if (!(user.length == 0 || auths.length == 0)) {
            _context13.next = 16;
            break;
          }
          return _context13.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 16:
          _user$ = user[0], token = _user$.token, password = _user$.password, otp = _user$.otp, level = _user$.level, userInfo = _objectWithoutProperties(_user$, _excluded);
          if (!(auths[0].phone != userInfo.ctv)) {
            _context13.next = 19;
            break;
          }
          return _context13.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 19:
          _context13.next = 21;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ', [userInfo.code]);
        case 21:
          _yield$connection$que27 = _context13.sent;
          _yield$connection$que28 = _slicedToArray(_yield$connection$que27, 1);
          f1s = _yield$connection$que28[0];
          // cấp dưới trực tiếp hôm nay 
          f1_today = 0;
          for (i = 0; i < f1s.length; i++) {
            f1_time = f1s[i].time; // Mã giới thiệu f1
            check = timerJoin(f1_time) == timerJoin() ? true : false;
            if (check) {
              f1_today += 1;
            }
          }

          // tất cả cấp dưới hôm nay 
          f_all_today = 0;
          _i11 = 0;
        case 28:
          if (!(_i11 < f1s.length)) {
            _context13.next = 70;
            break;
          }
          f1_code = f1s[_i11].code; // Mã giới thiệu f1
          _f1_time2 = f1s[_i11].time; // time f1
          check_f1 = timerJoin(_f1_time2) == timerJoin() ? true : false;
          if (check_f1) f_all_today += 1;
          // tổng f1 mời đc hôm nay
          _context13.next = 35;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ', [f1_code]);
        case 35:
          _yield$connection$que29 = _context13.sent;
          _yield$connection$que30 = _slicedToArray(_yield$connection$que29, 1);
          f2s = _yield$connection$que30[0];
          _i12 = 0;
        case 39:
          if (!(_i12 < f2s.length)) {
            _context13.next = 67;
            break;
          }
          f2_code = f2s[_i12].code; // Mã giới thiệu f2
          f2_time = f2s[_i12].time; // time f2
          check_f2 = timerJoin(f2_time) == timerJoin() ? true : false;
          if (check_f2) f_all_today += 1;
          // tổng f2 mời đc hôm nay
          _context13.next = 46;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ', [f2_code]);
        case 46:
          _yield$connection$que31 = _context13.sent;
          _yield$connection$que32 = _slicedToArray(_yield$connection$que31, 1);
          f3s = _yield$connection$que32[0];
          _i13 = 0;
        case 50:
          if (!(_i13 < f3s.length)) {
            _context13.next = 64;
            break;
          }
          f3_code = f3s[_i13].code; // Mã giới thiệu f3
          f3_time = f3s[_i13].time; // time f3
          check_f3 = timerJoin(f3_time) == timerJoin() ? true : false;
          if (check_f3) f_all_today += 1;
          _context13.next = 57;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ', [f3_code]);
        case 57:
          _yield$connection$que33 = _context13.sent;
          _yield$connection$que34 = _slicedToArray(_yield$connection$que33, 1);
          f4s = _yield$connection$que34[0];
          // tổng f3 mời đc hôm nay
          for (_i14 = 0; _i14 < f4s.length; _i14++) {
            f4_code = f4s[_i14].code; // Mã giới thiệu f4
            f4_time = f4s[_i14].time; // time f4
            check_f4 = timerJoin(f4_time) == timerJoin() ? true : false;
            if (check_f4) f_all_today += 1;
            // tổng f3 mời đc hôm nay
          }
        case 61:
          _i13++;
          _context13.next = 50;
          break;
        case 64:
          _i12++;
          _context13.next = 39;
          break;
        case 67:
          _i11++;
          _context13.next = 28;
          break;
        case 70:
          // Tổng số f2
          f2 = 0;
          _i15 = 0;
        case 72:
          if (!(_i15 < f1s.length)) {
            _context13.next = 83;
            break;
          }
          _f1_code4 = f1s[_i15].code; // Mã giới thiệu f1
          _context13.next = 76;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f1_code4]);
        case 76:
          _yield$connection$que35 = _context13.sent;
          _yield$connection$que36 = _slicedToArray(_yield$connection$que35, 1);
          _f2s4 = _yield$connection$que36[0];
          f2 += _f2s4.length;
        case 80:
          _i15++;
          _context13.next = 72;
          break;
        case 83:
          // Tổng số f3
          f3 = 0;
          _i16 = 0;
        case 85:
          if (!(_i16 < f1s.length)) {
            _context13.next = 107;
            break;
          }
          _f1_code5 = f1s[_i16].code; // Mã giới thiệu f1
          _context13.next = 89;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f1_code5]);
        case 89:
          _yield$connection$que37 = _context13.sent;
          _yield$connection$que38 = _slicedToArray(_yield$connection$que37, 1);
          _f2s5 = _yield$connection$que38[0];
          _i17 = 0;
        case 93:
          if (!(_i17 < _f2s5.length)) {
            _context13.next = 104;
            break;
          }
          _f2_code3 = _f2s5[_i17].code;
          _context13.next = 97;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f2_code3]);
        case 97:
          _yield$connection$que39 = _context13.sent;
          _yield$connection$que40 = _slicedToArray(_yield$connection$que39, 1);
          _f3s3 = _yield$connection$que40[0];
          if (_f3s3.length > 0) f3 += _f3s3.length;
        case 101:
          _i17++;
          _context13.next = 93;
          break;
        case 104:
          _i16++;
          _context13.next = 85;
          break;
        case 107:
          // Tổng số f4
          f4 = 0;
          _i18 = 0;
        case 109:
          if (!(_i18 < f1s.length)) {
            _context13.next = 142;
            break;
          }
          _f1_code6 = f1s[_i18].code; // Mã giới thiệu f1
          _context13.next = 113;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f1_code6]);
        case 113:
          _yield$connection$que41 = _context13.sent;
          _yield$connection$que42 = _slicedToArray(_yield$connection$que41, 1);
          _f2s6 = _yield$connection$que42[0];
          _i19 = 0;
        case 117:
          if (!(_i19 < _f2s6.length)) {
            _context13.next = 139;
            break;
          }
          _f2_code4 = _f2s6[_i19].code;
          _context13.next = 121;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f2_code4]);
        case 121:
          _yield$connection$que43 = _context13.sent;
          _yield$connection$que44 = _slicedToArray(_yield$connection$que43, 1);
          _f3s4 = _yield$connection$que44[0];
          _i20 = 0;
        case 125:
          if (!(_i20 < _f3s4.length)) {
            _context13.next = 136;
            break;
          }
          _f3_code2 = _f3s4[_i20].code;
          _context13.next = 129;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f3_code2]);
        case 129:
          _yield$connection$que45 = _context13.sent;
          _yield$connection$que46 = _slicedToArray(_yield$connection$que45, 1);
          _f4s2 = _yield$connection$que46[0];
          if (_f4s2.length > 0) f4 += _f4s2.length;
        case 133:
          _i20++;
          _context13.next = 125;
          break;
        case 136:
          _i19++;
          _context13.next = 117;
          break;
        case 139:
          _i18++;
          _context13.next = 109;
          break;
        case 142:
          _context13.next = 144;
          return _connectDB["default"].query('SELECT SUM(`money`) as total FROM recharge WHERE phone = ? AND status = 1 ', [phone]);
        case 144:
          _yield$connection$que47 = _context13.sent;
          _yield$connection$que48 = _slicedToArray(_yield$connection$que47, 1);
          recharge = _yield$connection$que48[0];
          _context13.next = 149;
          return _connectDB["default"].query('SELECT SUM(`money`) as total FROM withdraw WHERE phone = ? AND status = 1 ', [phone]);
        case 149:
          _yield$connection$que49 = _context13.sent;
          _yield$connection$que50 = _slicedToArray(_yield$connection$que49, 1);
          withdraw = _yield$connection$que50[0];
          _context13.next = 154;
          return _connectDB["default"].query('SELECT * FROM user_bank WHERE phone = ? ', [phone]);
        case 154:
          _yield$connection$que51 = _context13.sent;
          _yield$connection$que52 = _slicedToArray(_yield$connection$que51, 1);
          bank_user = _yield$connection$que52[0];
          return _context13.abrupt("return", res.status(200).json({
            message: 'Success',
            status: true,
            datas: userInfo,
            total_r: recharge,
            total_w: withdraw,
            f1: f1s.length,
            f2: f2,
            f3: f3,
            f4: f4,
            bank_user: bank_user
          }));
        case 158:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return function userInfo(_x26, _x27) {
    return _ref13.apply(this, arguments);
  };
}();
var infoCtv = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var auth, _yield$connection$que53, _yield$connection$que54, user, userInfo, phone, _yield$connection$que55, _yield$connection$que56, f1s, f1_today, i, f1_time, check, f_all_today, _i21, f1_code, _f1_time3, check_f1, _yield$connection$que57, _yield$connection$que58, f2s, _i22, f2_code, f2_time, check_f2, _yield$connection$que59, _yield$connection$que60, f3s, _i23, f3_code, f3_time, check_f3, _yield$connection$que61, _yield$connection$que62, f4s, _i24, f4_code, f4_time, check_f4, f2, _i25, _f1_code7, _yield$connection$que63, _yield$connection$que64, _f2s7, f3, _i26, _f1_code8, _yield$connection$que65, _yield$connection$que66, _f2s8, _i27, _f2_code5, _yield$connection$que67, _yield$connection$que68, _f3s5, f4, _i28, _f1_code9, _yield$connection$que69, _yield$connection$que70, _f2s9, _i29, _f2_code6, _yield$connection$que71, _yield$connection$que72, _f3s6, _i30, _f3_code3, _yield$connection$que73, _yield$connection$que74, _f4s3, _yield$connection$que75, _yield$connection$que76, list_mem, _yield$connection$que77, _yield$connection$que78, list_mem_baned, total_recharge, total_withdraw, _i31, _phone, _yield$connection$que79, _yield$connection$que80, recharge, _yield$connection$que81, _yield$connection$que82, withdraw, total_recharge_today, total_withdraw_today, _i32, _phone2, _yield$connection$que83, _yield$connection$que84, recharge_today, _yield$connection$que85, _yield$connection$que86, withdraw_today, _i33, today, time, _i34, _today, _time, win, loss, _i35, _phone3, _yield$connection$que87, _yield$connection$que88, wins, _yield$connection$que89, _yield$connection$que90, losses, _i36, _today2, _time2, _i37, _today3, _time3, list_mems, _yield$connection$que91, _yield$connection$que92, list_mem_today, _i38, _today4, _time4, _yield$connection$que93, _yield$connection$que94, phone_invites, phone_invite, data, _yield$connection$que95, _yield$connection$que96, point_list, moneyCTV, list_recharge_news, list_withdraw_news, _i39, _phone4, _yield$connection$que97, _yield$connection$que98, _recharge_today, _yield$connection$que99, _yield$connection$que100, _withdraw_today, _i40, _today5, _time5, _i41, _today6, _time6, _yield$connection$que101, _yield$connection$que102, redenvelopes_used, redenvelopes_used_today, _i42, _today7, _time7, _yield$connection$que103, _yield$connection$que104, financial_details, financial_details_today, _i43, _today8, _time8;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          auth = req.cookies.auth;
          _context14.next = 3;
          return _connectDB["default"].query('SELECT * FROM users WHERE token = ? ', [auth]);
        case 3:
          _yield$connection$que53 = _context14.sent;
          _yield$connection$que54 = _slicedToArray(_yield$connection$que53, 1);
          user = _yield$connection$que54[0];
          if (!(user.length == 0)) {
            _context14.next = 8;
            break;
          }
          return _context14.abrupt("return", res.status(200).json({
            message: 'Phone Error',
            status: false
          }));
        case 8:
          userInfo = user[0];
          phone = userInfo.phone; // cấp dưới trực tiếp all
          _context14.next = 12;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ', [userInfo.code]);
        case 12:
          _yield$connection$que55 = _context14.sent;
          _yield$connection$que56 = _slicedToArray(_yield$connection$que55, 1);
          f1s = _yield$connection$que56[0];
          // cấp dưới trực tiếp hôm nay  
          f1_today = 0;
          for (i = 0; i < f1s.length; i++) {
            f1_time = f1s[i].time; // Mã giới thiệu f1
            check = timerJoin(f1_time) == timerJoin() ? true : false;
            if (check) {
              f1_today += 1;
            }
          }

          // tất cả cấp dưới hôm nay 
          f_all_today = 0;
          _i21 = 0;
        case 19:
          if (!(_i21 < f1s.length)) {
            _context14.next = 61;
            break;
          }
          f1_code = f1s[_i21].code; // Mã giới thiệu f1
          _f1_time3 = f1s[_i21].time; // time f1
          check_f1 = timerJoin(_f1_time3) == timerJoin() ? true : false;
          if (check_f1) f_all_today += 1;
          // tổng f1 mời đc hôm nay
          _context14.next = 26;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ', [f1_code]);
        case 26:
          _yield$connection$que57 = _context14.sent;
          _yield$connection$que58 = _slicedToArray(_yield$connection$que57, 1);
          f2s = _yield$connection$que58[0];
          _i22 = 0;
        case 30:
          if (!(_i22 < f2s.length)) {
            _context14.next = 58;
            break;
          }
          f2_code = f2s[_i22].code; // Mã giới thiệu f2
          f2_time = f2s[_i22].time; // time f2
          check_f2 = timerJoin(f2_time) == timerJoin() ? true : false;
          if (check_f2) f_all_today += 1;
          // tổng f2 mời đc hôm nay
          _context14.next = 37;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ', [f2_code]);
        case 37:
          _yield$connection$que59 = _context14.sent;
          _yield$connection$que60 = _slicedToArray(_yield$connection$que59, 1);
          f3s = _yield$connection$que60[0];
          _i23 = 0;
        case 41:
          if (!(_i23 < f3s.length)) {
            _context14.next = 55;
            break;
          }
          f3_code = f3s[_i23].code; // Mã giới thiệu f3
          f3_time = f3s[_i23].time; // time f3
          check_f3 = timerJoin(f3_time) == timerJoin() ? true : false;
          if (check_f3) f_all_today += 1;
          _context14.next = 48;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ', [f3_code]);
        case 48:
          _yield$connection$que61 = _context14.sent;
          _yield$connection$que62 = _slicedToArray(_yield$connection$que61, 1);
          f4s = _yield$connection$que62[0];
          // tổng f3 mời đc hôm nay
          for (_i24 = 0; _i24 < f4s.length; _i24++) {
            f4_code = f4s[_i24].code; // Mã giới thiệu f4
            f4_time = f4s[_i24].time; // time f4
            check_f4 = timerJoin(f4_time) == timerJoin() ? true : false;
            if (check_f4) f_all_today += 1;
            // tổng f3 mời đc hôm nay
          }
        case 52:
          _i23++;
          _context14.next = 41;
          break;
        case 55:
          _i22++;
          _context14.next = 30;
          break;
        case 58:
          _i21++;
          _context14.next = 19;
          break;
        case 61:
          // Tổng số f2
          f2 = 0;
          _i25 = 0;
        case 63:
          if (!(_i25 < f1s.length)) {
            _context14.next = 74;
            break;
          }
          _f1_code7 = f1s[_i25].code; // Mã giới thiệu f1
          _context14.next = 67;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f1_code7]);
        case 67:
          _yield$connection$que63 = _context14.sent;
          _yield$connection$que64 = _slicedToArray(_yield$connection$que63, 1);
          _f2s7 = _yield$connection$que64[0];
          f2 += _f2s7.length;
        case 71:
          _i25++;
          _context14.next = 63;
          break;
        case 74:
          // Tổng số f3
          f3 = 0;
          _i26 = 0;
        case 76:
          if (!(_i26 < f1s.length)) {
            _context14.next = 98;
            break;
          }
          _f1_code8 = f1s[_i26].code; // Mã giới thiệu f1
          _context14.next = 80;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f1_code8]);
        case 80:
          _yield$connection$que65 = _context14.sent;
          _yield$connection$que66 = _slicedToArray(_yield$connection$que65, 1);
          _f2s8 = _yield$connection$que66[0];
          _i27 = 0;
        case 84:
          if (!(_i27 < _f2s8.length)) {
            _context14.next = 95;
            break;
          }
          _f2_code5 = _f2s8[_i27].code;
          _context14.next = 88;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f2_code5]);
        case 88:
          _yield$connection$que67 = _context14.sent;
          _yield$connection$que68 = _slicedToArray(_yield$connection$que67, 1);
          _f3s5 = _yield$connection$que68[0];
          if (_f3s5.length > 0) f3 += _f3s5.length;
        case 92:
          _i27++;
          _context14.next = 84;
          break;
        case 95:
          _i26++;
          _context14.next = 76;
          break;
        case 98:
          // Tổng số f4
          f4 = 0;
          _i28 = 0;
        case 100:
          if (!(_i28 < f1s.length)) {
            _context14.next = 133;
            break;
          }
          _f1_code9 = f1s[_i28].code; // Mã giới thiệu f1
          _context14.next = 104;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f1_code9]);
        case 104:
          _yield$connection$que69 = _context14.sent;
          _yield$connection$que70 = _slicedToArray(_yield$connection$que69, 1);
          _f2s9 = _yield$connection$que70[0];
          _i29 = 0;
        case 108:
          if (!(_i29 < _f2s9.length)) {
            _context14.next = 130;
            break;
          }
          _f2_code6 = _f2s9[_i29].code;
          _context14.next = 112;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f2_code6]);
        case 112:
          _yield$connection$que71 = _context14.sent;
          _yield$connection$que72 = _slicedToArray(_yield$connection$que71, 1);
          _f3s6 = _yield$connection$que72[0];
          _i30 = 0;
        case 116:
          if (!(_i30 < _f3s6.length)) {
            _context14.next = 127;
            break;
          }
          _f3_code3 = _f3s6[_i30].code;
          _context14.next = 120;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f3_code3]);
        case 120:
          _yield$connection$que73 = _context14.sent;
          _yield$connection$que74 = _slicedToArray(_yield$connection$que73, 1);
          _f4s3 = _yield$connection$que74[0];
          if (_f4s3.length > 0) f4 += _f4s3.length;
        case 124:
          _i30++;
          _context14.next = 116;
          break;
        case 127:
          _i29++;
          _context14.next = 108;
          break;
        case 130:
          _i28++;
          _context14.next = 100;
          break;
        case 133:
          _context14.next = 135;
          return _connectDB["default"].query('SELECT * FROM users WHERE ctv = ? AND status = 1 AND veri = 1 ', [phone]);
        case 135:
          _yield$connection$que75 = _context14.sent;
          _yield$connection$que76 = _slicedToArray(_yield$connection$que75, 1);
          list_mem = _yield$connection$que76[0];
          _context14.next = 140;
          return _connectDB["default"].query('SELECT * FROM users WHERE ctv = ? AND status = 2 AND veri = 1 ', [phone]);
        case 140:
          _yield$connection$que77 = _context14.sent;
          _yield$connection$que78 = _slicedToArray(_yield$connection$que77, 1);
          list_mem_baned = _yield$connection$que78[0];
          total_recharge = 0;
          total_withdraw = 0;
          _i31 = 0;
        case 146:
          if (!(_i31 < list_mem.length)) {
            _context14.next = 163;
            break;
          }
          _phone = list_mem[_i31].phone;
          _context14.next = 150;
          return _connectDB["default"].query('SELECT SUM(money) as money FROM recharge WHERE phone = ? AND status = 1 ', [_phone]);
        case 150:
          _yield$connection$que79 = _context14.sent;
          _yield$connection$que80 = _slicedToArray(_yield$connection$que79, 1);
          recharge = _yield$connection$que80[0];
          _context14.next = 155;
          return _connectDB["default"].query('SELECT SUM(money) as money FROM withdraw WHERE phone = ? AND status = 1 ', [_phone]);
        case 155:
          _yield$connection$que81 = _context14.sent;
          _yield$connection$que82 = _slicedToArray(_yield$connection$que81, 1);
          withdraw = _yield$connection$que82[0];
          if (recharge[0].money) {
            total_recharge += Number(recharge[0].money);
          }
          if (withdraw[0].money) {
            total_withdraw += Number(withdraw[0].money);
          }
        case 160:
          _i31++;
          _context14.next = 146;
          break;
        case 163:
          total_recharge_today = 0;
          total_withdraw_today = 0;
          _i32 = 0;
        case 166:
          if (!(_i32 < list_mem.length)) {
            _context14.next = 183;
            break;
          }
          _phone2 = list_mem[_i32].phone;
          _context14.next = 170;
          return _connectDB["default"].query('SELECT `money`, `time` FROM recharge WHERE phone = ? AND status = 1 ', [_phone2]);
        case 170:
          _yield$connection$que83 = _context14.sent;
          _yield$connection$que84 = _slicedToArray(_yield$connection$que83, 1);
          recharge_today = _yield$connection$que84[0];
          _context14.next = 175;
          return _connectDB["default"].query('SELECT `money`, `time` FROM withdraw WHERE phone = ? AND status = 1 ', [_phone2]);
        case 175:
          _yield$connection$que85 = _context14.sent;
          _yield$connection$que86 = _slicedToArray(_yield$connection$que85, 1);
          withdraw_today = _yield$connection$que86[0];
          for (_i33 = 0; _i33 < recharge_today.length; _i33++) {
            today = timerJoin();
            time = timerJoin(recharge_today[_i33].time);
            if (time == today) {
              total_recharge_today += recharge_today[_i33].money;
            }
          }
          for (_i34 = 0; _i34 < withdraw_today.length; _i34++) {
            _today = timerJoin();
            _time = timerJoin(withdraw_today[_i34].time);
            if (_time == _today) {
              total_withdraw_today += withdraw_today[_i34].money;
            }
          }
        case 180:
          _i32++;
          _context14.next = 166;
          break;
        case 183:
          win = 0;
          loss = 0;
          _i35 = 0;
        case 186:
          if (!(_i35 < list_mem.length)) {
            _context14.next = 203;
            break;
          }
          _phone3 = list_mem[_i35].phone;
          _context14.next = 190;
          return _connectDB["default"].query('SELECT `money`, `time` FROM minutes_1 WHERE phone = ? AND status = 1 ', [_phone3]);
        case 190:
          _yield$connection$que87 = _context14.sent;
          _yield$connection$que88 = _slicedToArray(_yield$connection$que87, 1);
          wins = _yield$connection$que88[0];
          _context14.next = 195;
          return _connectDB["default"].query('SELECT `money`, `time` FROM minutes_1 WHERE phone = ? AND status = 2 ', [_phone3]);
        case 195:
          _yield$connection$que89 = _context14.sent;
          _yield$connection$que90 = _slicedToArray(_yield$connection$que89, 1);
          losses = _yield$connection$que90[0];
          for (_i36 = 0; _i36 < wins.length; _i36++) {
            _today2 = timerJoin();
            _time2 = timerJoin(wins[_i36].time);
            if (_time2 == _today2) {
              win += wins[_i36].money;
            }
          }
          for (_i37 = 0; _i37 < losses.length; _i37++) {
            _today3 = timerJoin();
            _time3 = timerJoin(losses[_i37].time);
            if (_time3 == _today3) {
              loss += losses[_i37].money;
            }
          }
        case 200:
          _i35++;
          _context14.next = 186;
          break;
        case 203:
          list_mems = [];
          _context14.next = 206;
          return _connectDB["default"].query('SELECT * FROM users WHERE ctv = ? AND status = 1 AND veri = 1 ', [phone]);
        case 206:
          _yield$connection$que91 = _context14.sent;
          _yield$connection$que92 = _slicedToArray(_yield$connection$que91, 1);
          list_mem_today = _yield$connection$que92[0];
          _i38 = 0;
        case 210:
          if (!(_i38 < list_mem_today.length)) {
            _context14.next = 225;
            break;
          }
          _today4 = timerJoin();
          _time4 = timerJoin(list_mem_today[_i38].time);
          if (!(_time4 == _today4)) {
            _context14.next = 222;
            break;
          }
          _context14.next = 216;
          return _connectDB["default"].query('SELECT `phone` FROM users WHERE code = ? ', [list_mem_today[_i38].invite]);
        case 216:
          _yield$connection$que93 = _context14.sent;
          _yield$connection$que94 = _slicedToArray(_yield$connection$que93, 1);
          phone_invites = _yield$connection$que94[0];
          phone_invite = phone_invites[0].phone;
          data = _objectSpread(_objectSpread({}, list_mem_today[_i38]), {}, {
            phone_invite: phone_invite
          });
          list_mems.push(data);
        case 222:
          _i38++;
          _context14.next = 210;
          break;
        case 225:
          _context14.next = 227;
          return _connectDB["default"].query('SELECT * FROM point_list WHERE phone = ? ', [phone]);
        case 227:
          _yield$connection$que95 = _context14.sent;
          _yield$connection$que96 = _slicedToArray(_yield$connection$que95, 1);
          point_list = _yield$connection$que96[0];
          moneyCTV = point_list[0].money;
          list_recharge_news = [];
          list_withdraw_news = [];
          _i39 = 0;
        case 234:
          if (!(_i39 < list_mem.length)) {
            _context14.next = 251;
            break;
          }
          _phone4 = list_mem[_i39].phone;
          _context14.next = 238;
          return _connectDB["default"].query('SELECT `id`, `status`, `type`,`phone`, `money`, `time` FROM recharge WHERE phone = ? AND status = 1 ', [_phone4]);
        case 238:
          _yield$connection$que97 = _context14.sent;
          _yield$connection$que98 = _slicedToArray(_yield$connection$que97, 1);
          _recharge_today = _yield$connection$que98[0];
          _context14.next = 243;
          return _connectDB["default"].query('SELECT `id`, `status`,`phone`, `money`, `time` FROM withdraw WHERE phone = ? AND status = 1 ', [_phone4]);
        case 243:
          _yield$connection$que99 = _context14.sent;
          _yield$connection$que100 = _slicedToArray(_yield$connection$que99, 1);
          _withdraw_today = _yield$connection$que100[0];
          for (_i40 = 0; _i40 < _recharge_today.length; _i40++) {
            _today5 = timerJoin();
            _time5 = timerJoin(_recharge_today[_i40].time);
            if (_time5 == _today5) {
              list_recharge_news.push(_recharge_today[_i40]);
            }
          }
          for (_i41 = 0; _i41 < _withdraw_today.length; _i41++) {
            _today6 = timerJoin();
            _time6 = timerJoin(_withdraw_today[_i41].time);
            if (_time6 == _today6) {
              list_withdraw_news.push(_withdraw_today[_i41]);
            }
          }
        case 248:
          _i39++;
          _context14.next = 234;
          break;
        case 251:
          _context14.next = 253;
          return _connectDB["default"].query('SELECT * FROM redenvelopes_used WHERE phone = ? ', [phone]);
        case 253:
          _yield$connection$que101 = _context14.sent;
          _yield$connection$que102 = _slicedToArray(_yield$connection$que101, 1);
          redenvelopes_used = _yield$connection$que102[0];
          redenvelopes_used_today = [];
          for (_i42 = 0; _i42 < redenvelopes_used.length; _i42++) {
            _today7 = timerJoin();
            _time7 = timerJoin(redenvelopes_used[_i42].time);
            if (_time7 == _today7) {
              redenvelopes_used_today.push(redenvelopes_used[_i42]);
            }
          }
          _context14.next = 260;
          return _connectDB["default"].query('SELECT * FROM financial_details WHERE phone = ? ', [phone]);
        case 260:
          _yield$connection$que103 = _context14.sent;
          _yield$connection$que104 = _slicedToArray(_yield$connection$que103, 1);
          financial_details = _yield$connection$que104[0];
          financial_details_today = [];
          for (_i43 = 0; _i43 < financial_details.length; _i43++) {
            _today8 = timerJoin();
            _time8 = timerJoin(financial_details[_i43].time);
            if (_time8 == _today8) {
              financial_details_today.push(financial_details[_i43]);
            }
          }
          return _context14.abrupt("return", res.status(200).json({
            message: 'Success',
            status: true,
            datas: user,
            f1: f1s.length,
            f2: f2,
            f3: f3,
            f4: f4,
            list_mems: list_mems,
            total_recharge: total_recharge,
            total_withdraw: total_withdraw,
            total_recharge_today: total_recharge_today,
            total_withdraw_today: total_withdraw_today,
            list_mem_baned: list_mem_baned.length,
            win: win,
            loss: loss,
            list_recharge_news: list_recharge_news,
            list_withdraw_news: list_withdraw_news,
            moneyCTV: moneyCTV,
            redenvelopes_used: redenvelopes_used_today,
            financial_details_today: financial_details_today
          }));
        case 266:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return function infoCtv(_x28, _x29) {
    return _ref14.apply(this, arguments);
  };
}();
var infoCtv2 = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var auth, timeDate, formateT, timerJoin, _yield$connection$que105, _yield$connection$que106, user, userInfo, phone, _yield$connection$que107, _yield$connection$que108, list_mem, list_mems, _yield$connection$que109, _yield$connection$que110, list_mem_today, i, today, time, _yield$connection$que111, _yield$connection$que112, phone_invites, phone_invite, data, list_recharge_news, list_withdraw_news, _i44, _phone5, _yield$connection$que113, _yield$connection$que114, recharge_today, _yield$connection$que115, _yield$connection$que116, withdraw_today, _i45, _today9, _time9, _i46, _today10, _time10, _yield$connection$que117, _yield$connection$que118, redenvelopes_used, redenvelopes_used_today, _i47, _today11, _time11, _yield$connection$que119, _yield$connection$que120, financial_details, financial_details_today, _i48, _today12, _time12;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          timerJoin = function _timerJoin() {
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
          formateT = function _formateT(params) {
            var result = params < 10 ? "0" + params : params;
            return result;
          };
          auth = req.cookies.auth;
          timeDate = req.body.timeDate;
          _context15.next = 6;
          return _connectDB["default"].query('SELECT * FROM users WHERE token = ? ', [auth]);
        case 6:
          _yield$connection$que105 = _context15.sent;
          _yield$connection$que106 = _slicedToArray(_yield$connection$que105, 1);
          user = _yield$connection$que106[0];
          if (!(user.length == 0)) {
            _context15.next = 11;
            break;
          }
          return _context15.abrupt("return", res.status(200).json({
            message: 'Phone Error',
            status: false
          }));
        case 11:
          userInfo = user[0];
          phone = userInfo.phone;
          _context15.next = 15;
          return _connectDB["default"].query('SELECT * FROM users WHERE ctv = ? AND status = 1 AND veri = 1 ', [phone]);
        case 15:
          _yield$connection$que107 = _context15.sent;
          _yield$connection$que108 = _slicedToArray(_yield$connection$que107, 1);
          list_mem = _yield$connection$que108[0];
          list_mems = [];
          _context15.next = 21;
          return _connectDB["default"].query('SELECT * FROM users WHERE ctv = ? AND status = 1 AND veri = 1 ', [phone]);
        case 21:
          _yield$connection$que109 = _context15.sent;
          _yield$connection$que110 = _slicedToArray(_yield$connection$que109, 1);
          list_mem_today = _yield$connection$que110[0];
          i = 0;
        case 25:
          if (!(i < list_mem_today.length)) {
            _context15.next = 40;
            break;
          }
          today = timeDate;
          time = timerJoin(list_mem_today[i].time);
          if (!(time == today)) {
            _context15.next = 37;
            break;
          }
          _context15.next = 31;
          return _connectDB["default"].query('SELECT `phone` FROM users WHERE code = ? ', [list_mem_today[i].invite]);
        case 31:
          _yield$connection$que111 = _context15.sent;
          _yield$connection$que112 = _slicedToArray(_yield$connection$que111, 1);
          phone_invites = _yield$connection$que112[0];
          phone_invite = phone_invites[0].phone;
          data = _objectSpread(_objectSpread({}, list_mem_today[i]), {}, {
            phone_invite: phone_invite
          });
          list_mems.push(data);
        case 37:
          i++;
          _context15.next = 25;
          break;
        case 40:
          list_recharge_news = [];
          list_withdraw_news = [];
          _i44 = 0;
        case 43:
          if (!(_i44 < list_mem.length)) {
            _context15.next = 60;
            break;
          }
          _phone5 = list_mem[_i44].phone;
          _context15.next = 47;
          return _connectDB["default"].query('SELECT `id`, `status`, `type`,`phone`, `money`, `time` FROM recharge WHERE phone = ? AND status = 1 ', [_phone5]);
        case 47:
          _yield$connection$que113 = _context15.sent;
          _yield$connection$que114 = _slicedToArray(_yield$connection$que113, 1);
          recharge_today = _yield$connection$que114[0];
          _context15.next = 52;
          return _connectDB["default"].query('SELECT `id`, `status`,`phone`, `money`, `time` FROM withdraw WHERE phone = ? AND status = 1 ', [_phone5]);
        case 52:
          _yield$connection$que115 = _context15.sent;
          _yield$connection$que116 = _slicedToArray(_yield$connection$que115, 1);
          withdraw_today = _yield$connection$que116[0];
          for (_i45 = 0; _i45 < recharge_today.length; _i45++) {
            _today9 = timeDate;
            _time9 = timerJoin(recharge_today[_i45].time);
            if (_time9 == _today9) {
              list_recharge_news.push(recharge_today[_i45]);
            }
          }
          for (_i46 = 0; _i46 < withdraw_today.length; _i46++) {
            _today10 = timeDate;
            _time10 = timerJoin(withdraw_today[_i46].time);
            if (_time10 == _today10) {
              list_withdraw_news.push(withdraw_today[_i46]);
            }
          }
        case 57:
          _i44++;
          _context15.next = 43;
          break;
        case 60:
          _context15.next = 62;
          return _connectDB["default"].query('SELECT * FROM redenvelopes_used WHERE phone = ? ', [phone]);
        case 62:
          _yield$connection$que117 = _context15.sent;
          _yield$connection$que118 = _slicedToArray(_yield$connection$que117, 1);
          redenvelopes_used = _yield$connection$que118[0];
          redenvelopes_used_today = [];
          for (_i47 = 0; _i47 < redenvelopes_used.length; _i47++) {
            _today11 = timeDate;
            _time11 = timerJoin(redenvelopes_used[_i47].time);
            if (_time11 == _today11) {
              redenvelopes_used_today.push(redenvelopes_used[_i47]);
            }
          }
          _context15.next = 69;
          return _connectDB["default"].query('SELECT * FROM financial_details WHERE phone = ? ', [phone]);
        case 69:
          _yield$connection$que119 = _context15.sent;
          _yield$connection$que120 = _slicedToArray(_yield$connection$que119, 1);
          financial_details = _yield$connection$que120[0];
          financial_details_today = [];
          for (_i48 = 0; _i48 < financial_details.length; _i48++) {
            _today12 = timeDate;
            _time12 = timerJoin(financial_details[_i48].time);
            if (_time12 == _today12) {
              financial_details_today.push(financial_details[_i48]);
            }
          }
          return _context15.abrupt("return", res.status(200).json({
            message: 'Success',
            status: true,
            datas: user,
            list_mems: list_mems,
            list_recharge_news: list_recharge_news,
            list_withdraw_news: list_withdraw_news,
            redenvelopes_used: redenvelopes_used_today,
            financial_details_today: financial_details_today
          }));
        case 75:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return function infoCtv2(_x30, _x31) {
    return _ref15.apply(this, arguments);
  };
}();
var createBonus = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var randomString, formateT, timerJoin, d, time, auth, money, _yield$connection$que121, _yield$connection$que122, user, userInfo, _yield$connection$que123, _yield$connection$que124, point_list, ctv, id_redenvelops, sql, _yield$connection$que125, _yield$connection$que126, _point_list;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
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
          randomString = function randomString(length) {
            var result = '';
            var characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
          };
          d = new Date();
          time = d.getTime();
          auth = req.cookies.auth;
          money = req.body.money;
          if (!(!money || !auth)) {
            _context16.next = 9;
            break;
          }
          return _context16.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 9:
          _context16.next = 11;
          return _connectDB["default"].query('SELECT * FROM users WHERE token = ? ', [auth]);
        case 11:
          _yield$connection$que121 = _context16.sent;
          _yield$connection$que122 = _slicedToArray(_yield$connection$que121, 1);
          user = _yield$connection$que122[0];
          if (!(user.length == 0)) {
            _context16.next = 16;
            break;
          }
          return _context16.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 16:
          userInfo = user[0];
          _context16.next = 19;
          return _connectDB["default"].query('SELECT * FROM point_list WHERE phone = ? ', [userInfo.phone]);
        case 19:
          _yield$connection$que123 = _context16.sent;
          _yield$connection$que124 = _slicedToArray(_yield$connection$que123, 1);
          point_list = _yield$connection$que124[0];
          if (!(point_list.length == 0)) {
            _context16.next = 24;
            break;
          }
          return _context16.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 24:
          ctv = point_list[0];
          if (!(ctv.money - money >= 0)) {
            _context16.next = 40;
            break;
          }
          id_redenvelops = String(timerJoin()) + randomString(16);
          _context16.next = 29;
          return _connectDB["default"].execute('UPDATE `point_list` SET money = money - ? WHERE phone = ?', [money, ctv.phone]);
        case 29:
          sql = "INSERT INTO redenvelopes SET id_redenvelope = ?, phone = ?, money = ?, used = ?, amount = ?, status = ?, time = ?";
          _context16.next = 32;
          return _connectDB["default"].query(sql, [id_redenvelops, userInfo.phone, money, 1, 1, 0, time]);
        case 32:
          _context16.next = 34;
          return _connectDB["default"].query('SELECT `money` FROM point_list WHERE phone = ? ', [userInfo.phone]);
        case 34:
          _yield$connection$que125 = _context16.sent;
          _yield$connection$que126 = _slicedToArray(_yield$connection$que125, 1);
          _point_list = _yield$connection$que126[0];
          return _context16.abrupt("return", res.status(200).json({
            message: 'Successful gift creation',
            status: true,
            id: id_redenvelops,
            money: _point_list[0].money
          }));
        case 40:
          return _context16.abrupt("return", res.status(200).json({
            message: 'The balance is not enough to create gifts',
            status: false
          }));
        case 41:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return function createBonus(_x32, _x33) {
    return _ref16.apply(this, arguments);
  };
}();
var listRedenvelops = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var auth, _yield$connection$que127, _yield$connection$que128, user, userInfo, _yield$connection$que129, _yield$connection$que130, redenvelopes;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          auth = req.cookies.auth;
          _context17.next = 3;
          return _connectDB["default"].query('SELECT * FROM users WHERE token = ? ', [auth]);
        case 3:
          _yield$connection$que127 = _context17.sent;
          _yield$connection$que128 = _slicedToArray(_yield$connection$que127, 1);
          user = _yield$connection$que128[0];
          if (!(user.length == 0)) {
            _context17.next = 8;
            break;
          }
          return _context17.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 8:
          userInfo = user[0];
          _context17.next = 11;
          return _connectDB["default"].query('SELECT * FROM redenvelopes WHERE phone = ? ORDER BY id DESC', [userInfo.phone]);
        case 11:
          _yield$connection$que129 = _context17.sent;
          _yield$connection$que130 = _slicedToArray(_yield$connection$que129, 1);
          redenvelopes = _yield$connection$que130[0];
          return _context17.abrupt("return", res.status(200).json({
            message: 'Successful change',
            status: true,
            redenvelopes: redenvelopes
          }));
        case 15:
        case "end":
          return _context17.stop();
      }
    }, _callee17);
  }));
  return function listRedenvelops(_x34, _x35) {
    return _ref17.apply(this, arguments);
  };
}();
var listMember = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    var auth, _req$body, pageno, limit, _yield$connection$exe13, _yield$connection$exe14, checkInfo, userInfo, _yield$connection$que131, _yield$connection$que132, users, _yield$connection$que133, _yield$connection$que134, total_users;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          auth = req.cookies.auth;
          _req$body = req.body, pageno = _req$body.pageno, limit = _req$body.limit;
          _context18.next = 4;
          return _connectDB["default"].execute('SELECT * FROM users WHERE token = ?', [auth]);
        case 4:
          _yield$connection$exe13 = _context18.sent;
          _yield$connection$exe14 = _slicedToArray(_yield$connection$exe13, 1);
          checkInfo = _yield$connection$exe14[0];
          if (!(checkInfo.length == 0)) {
            _context18.next = 9;
            break;
          }
          return _context18.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 9:
          userInfo = checkInfo[0];
          if (!(!pageno || !limit)) {
            _context18.next = 12;
            break;
          }
          return _context18.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 12:
          if (!(pageno < 0 || limit < 0)) {
            _context18.next = 14;
            break;
          }
          return _context18.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 14:
          _context18.next = 16;
          return _connectDB["default"].query("SELECT id_user, phone, money, total_money, status, time FROM users WHERE veri = 1 AND level = 0 AND ctv = ? ORDER BY id DESC LIMIT ".concat(pageno, ", ").concat(limit, " "), [userInfo.phone]);
        case 16:
          _yield$connection$que131 = _context18.sent;
          _yield$connection$que132 = _slicedToArray(_yield$connection$que131, 1);
          users = _yield$connection$que132[0];
          _context18.next = 21;
          return _connectDB["default"].query("SELECT * FROM users WHERE veri = 1 AND level = 0 AND ctv = ? ", [userInfo.phone]);
        case 21:
          _yield$connection$que133 = _context18.sent;
          _yield$connection$que134 = _slicedToArray(_yield$connection$que133, 1);
          total_users = _yield$connection$que134[0];
          return _context18.abrupt("return", res.status(200).json({
            message: 'Success',
            status: true,
            datas: users,
            page_total: Math.ceil(total_users.length / limit)
          }));
        case 25:
        case "end":
          return _context18.stop();
      }
    }, _callee18);
  }));
  return function listMember(_x36, _x37) {
    return _ref18.apply(this, arguments);
  };
}();
var listRechargeP = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    var auth, _yield$connection$que135, _yield$connection$que136, user, userInfo, _yield$connection$que137, _yield$connection$que138, list_mem, list_recharge_news, i, phone, _yield$connection$que139, _yield$connection$que140, recharge_today, _i49;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          auth = req.cookies.auth;
          _context19.next = 3;
          return _connectDB["default"].query('SELECT * FROM users WHERE token = ? ', [auth]);
        case 3:
          _yield$connection$que135 = _context19.sent;
          _yield$connection$que136 = _slicedToArray(_yield$connection$que135, 1);
          user = _yield$connection$que136[0];
          if (!(user.length == 0)) {
            _context19.next = 8;
            break;
          }
          return _context19.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 8:
          userInfo = user[0];
          _context19.next = 11;
          return _connectDB["default"].query('SELECT * FROM users WHERE ctv = ? AND status = 1 AND veri = 1 ', [userInfo.phone]);
        case 11:
          _yield$connection$que137 = _context19.sent;
          _yield$connection$que138 = _slicedToArray(_yield$connection$que137, 1);
          list_mem = _yield$connection$que138[0];
          list_recharge_news = [];
          i = 0;
        case 16:
          if (!(i < list_mem.length)) {
            _context19.next = 27;
            break;
          }
          phone = list_mem[i].phone;
          _context19.next = 20;
          return _connectDB["default"].query('SELECT * FROM recharge WHERE phone = ? ORDER BY id DESC LIMIT 100', [phone]);
        case 20:
          _yield$connection$que139 = _context19.sent;
          _yield$connection$que140 = _slicedToArray(_yield$connection$que139, 1);
          recharge_today = _yield$connection$que140[0];
          for (_i49 = 0; _i49 < recharge_today.length; _i49++) {
            list_recharge_news.push(recharge_today[_i49]);
          }
        case 24:
          i++;
          _context19.next = 16;
          break;
        case 27:
          return _context19.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: true,
            list_recharge_news: list_recharge_news,
            timeStamp: timeNow
          }));
        case 28:
        case "end":
          return _context19.stop();
      }
    }, _callee19);
  }));
  return function listRechargeP(_x38, _x39) {
    return _ref19.apply(this, arguments);
  };
}();
var listWithdrawP = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
    var auth, _yield$connection$que141, _yield$connection$que142, user, userInfo, _yield$connection$que143, _yield$connection$que144, list_mem, list_withdraw_news, i, phone, _yield$connection$que145, _yield$connection$que146, withdraw_today, _i50;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          auth = req.cookies.auth;
          _context20.next = 3;
          return _connectDB["default"].query('SELECT * FROM users WHERE token = ? ', [auth]);
        case 3:
          _yield$connection$que141 = _context20.sent;
          _yield$connection$que142 = _slicedToArray(_yield$connection$que141, 1);
          user = _yield$connection$que142[0];
          if (!(user.length == 0)) {
            _context20.next = 8;
            break;
          }
          return _context20.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 8:
          userInfo = user[0];
          _context20.next = 11;
          return _connectDB["default"].query('SELECT * FROM users WHERE ctv = ? AND status = 1 AND veri = 1 ', [userInfo.phone]);
        case 11:
          _yield$connection$que143 = _context20.sent;
          _yield$connection$que144 = _slicedToArray(_yield$connection$que143, 1);
          list_mem = _yield$connection$que144[0];
          list_withdraw_news = [];
          i = 0;
        case 16:
          if (!(i < list_mem.length)) {
            _context20.next = 27;
            break;
          }
          phone = list_mem[i].phone;
          _context20.next = 20;
          return _connectDB["default"].query('SELECT * FROM withdraw WHERE phone = ? ORDER BY id DESC LIMIT 100', [phone]);
        case 20:
          _yield$connection$que145 = _context20.sent;
          _yield$connection$que146 = _slicedToArray(_yield$connection$que145, 1);
          withdraw_today = _yield$connection$que146[0];
          for (_i50 = 0; _i50 < withdraw_today.length; _i50++) {
            list_withdraw_news.push(withdraw_today[_i50]);
          }
        case 24:
          i++;
          _context20.next = 16;
          break;
        case 27:
          return _context20.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: true,
            list_withdraw_news: list_withdraw_news,
            timeStamp: timeNow
          }));
        case 28:
        case "end":
          return _context20.stop();
      }
    }, _callee20);
  }));
  return function listWithdrawP(_x40, _x41) {
    return _ref20.apply(this, arguments);
  };
}();
var listRechargeMem = /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res) {
    var auth, phone, _req$body2, pageno, limit, _yield$connection$que147, _yield$connection$que148, user, _yield$connection$que149, _yield$connection$que150, auths, _user$2, token, password, otp, level, userInfo, _yield$connection$que151, _yield$connection$que152, recharge, _yield$connection$que153, _yield$connection$que154, total_users;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          auth = req.cookies.auth;
          phone = req.params.phone;
          _req$body2 = req.body, pageno = _req$body2.pageno, limit = _req$body2.limit;
          if (!(!pageno || !limit)) {
            _context21.next = 5;
            break;
          }
          return _context21.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 5:
          if (!(pageno < 0 || limit < 0)) {
            _context21.next = 7;
            break;
          }
          return _context21.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 7:
          if (phone) {
            _context21.next = 9;
            break;
          }
          return _context21.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 9:
          _context21.next = 11;
          return _connectDB["default"].query('SELECT * FROM users WHERE phone = ? ', [phone]);
        case 11:
          _yield$connection$que147 = _context21.sent;
          _yield$connection$que148 = _slicedToArray(_yield$connection$que147, 1);
          user = _yield$connection$que148[0];
          _context21.next = 16;
          return _connectDB["default"].query('SELECT * FROM users WHERE token = ? ', [auth]);
        case 16:
          _yield$connection$que149 = _context21.sent;
          _yield$connection$que150 = _slicedToArray(_yield$connection$que149, 1);
          auths = _yield$connection$que150[0];
          if (!(user.length == 0 || auths.length == 0)) {
            _context21.next = 21;
            break;
          }
          return _context21.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 21:
          _user$2 = user[0], token = _user$2.token, password = _user$2.password, otp = _user$2.otp, level = _user$2.level, userInfo = _objectWithoutProperties(_user$2, _excluded2);
          if (!(auths[0].phone != userInfo.ctv)) {
            _context21.next = 24;
            break;
          }
          return _context21.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 24:
          _context21.next = 26;
          return _connectDB["default"].query("SELECT * FROM recharge WHERE phone = ? ORDER BY id DESC LIMIT ".concat(pageno, ", ").concat(limit, " "), [phone]);
        case 26:
          _yield$connection$que151 = _context21.sent;
          _yield$connection$que152 = _slicedToArray(_yield$connection$que151, 1);
          recharge = _yield$connection$que152[0];
          _context21.next = 31;
          return _connectDB["default"].query("SELECT * FROM recharge WHERE phone = ?", [phone]);
        case 31:
          _yield$connection$que153 = _context21.sent;
          _yield$connection$que154 = _slicedToArray(_yield$connection$que153, 1);
          total_users = _yield$connection$que154[0];
          return _context21.abrupt("return", res.status(200).json({
            message: 'Success',
            status: true,
            datas: recharge,
            page_total: Math.ceil(total_users.length / limit)
          }));
        case 35:
        case "end":
          return _context21.stop();
      }
    }, _callee21);
  }));
  return function listRechargeMem(_x42, _x43) {
    return _ref21.apply(this, arguments);
  };
}();
var listWithdrawMem = /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res) {
    var auth, phone, _req$body3, pageno, limit, _yield$connection$que155, _yield$connection$que156, user, _yield$connection$que157, _yield$connection$que158, auths, _user$3, token, password, otp, level, userInfo, _yield$connection$que159, _yield$connection$que160, withdraw, _yield$connection$que161, _yield$connection$que162, total_users;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          auth = req.cookies.auth;
          phone = req.params.phone;
          _req$body3 = req.body, pageno = _req$body3.pageno, limit = _req$body3.limit;
          if (!(!pageno || !limit)) {
            _context22.next = 5;
            break;
          }
          return _context22.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 5:
          if (!(pageno < 0 || limit < 0)) {
            _context22.next = 7;
            break;
          }
          return _context22.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 7:
          if (phone) {
            _context22.next = 9;
            break;
          }
          return _context22.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 9:
          _context22.next = 11;
          return _connectDB["default"].query('SELECT * FROM users WHERE phone = ? ', [phone]);
        case 11:
          _yield$connection$que155 = _context22.sent;
          _yield$connection$que156 = _slicedToArray(_yield$connection$que155, 1);
          user = _yield$connection$que156[0];
          _context22.next = 16;
          return _connectDB["default"].query('SELECT * FROM users WHERE token = ? ', [auth]);
        case 16:
          _yield$connection$que157 = _context22.sent;
          _yield$connection$que158 = _slicedToArray(_yield$connection$que157, 1);
          auths = _yield$connection$que158[0];
          if (!(user.length == 0 || auths.length == 0)) {
            _context22.next = 21;
            break;
          }
          return _context22.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 21:
          _user$3 = user[0], token = _user$3.token, password = _user$3.password, otp = _user$3.otp, level = _user$3.level, userInfo = _objectWithoutProperties(_user$3, _excluded3);
          if (!(auths[0].phone != userInfo.ctv)) {
            _context22.next = 24;
            break;
          }
          return _context22.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 24:
          _context22.next = 26;
          return _connectDB["default"].query("SELECT * FROM withdraw WHERE phone = ? ORDER BY id DESC LIMIT ".concat(pageno, ", ").concat(limit, " "), [phone]);
        case 26:
          _yield$connection$que159 = _context22.sent;
          _yield$connection$que160 = _slicedToArray(_yield$connection$que159, 1);
          withdraw = _yield$connection$que160[0];
          _context22.next = 31;
          return _connectDB["default"].query("SELECT * FROM withdraw WHERE phone = ?", [phone]);
        case 31:
          _yield$connection$que161 = _context22.sent;
          _yield$connection$que162 = _slicedToArray(_yield$connection$que161, 1);
          total_users = _yield$connection$que162[0];
          return _context22.abrupt("return", res.status(200).json({
            message: 'Success',
            status: true,
            datas: withdraw,
            page_total: Math.ceil(total_users.length / limit)
          }));
        case 35:
        case "end":
          return _context22.stop();
      }
    }, _callee22);
  }));
  return function listWithdrawMem(_x44, _x45) {
    return _ref22.apply(this, arguments);
  };
}();
var listRedenvelope = /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(req, res) {
    var auth, phone, _req$body4, pageno, limit, _yield$connection$que163, _yield$connection$que164, user, _yield$connection$que165, _yield$connection$que166, auths, _user$4, token, password, otp, level, userInfo, _yield$connection$que167, _yield$connection$que168, redenvelopes_used, _yield$connection$que169, _yield$connection$que170, total_users;
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          auth = req.cookies.auth;
          phone = req.params.phone;
          _req$body4 = req.body, pageno = _req$body4.pageno, limit = _req$body4.limit;
          if (!(!pageno || !limit)) {
            _context23.next = 5;
            break;
          }
          return _context23.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 5:
          if (!(pageno < 0 || limit < 0)) {
            _context23.next = 7;
            break;
          }
          return _context23.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 7:
          if (phone) {
            _context23.next = 9;
            break;
          }
          return _context23.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 9:
          _context23.next = 11;
          return _connectDB["default"].query('SELECT * FROM users WHERE phone = ? ', [phone]);
        case 11:
          _yield$connection$que163 = _context23.sent;
          _yield$connection$que164 = _slicedToArray(_yield$connection$que163, 1);
          user = _yield$connection$que164[0];
          _context23.next = 16;
          return _connectDB["default"].query('SELECT * FROM users WHERE token = ? ', [auth]);
        case 16:
          _yield$connection$que165 = _context23.sent;
          _yield$connection$que166 = _slicedToArray(_yield$connection$que165, 1);
          auths = _yield$connection$que166[0];
          if (!(user.length == 0 || auths.length == 0)) {
            _context23.next = 21;
            break;
          }
          return _context23.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 21:
          _user$4 = user[0], token = _user$4.token, password = _user$4.password, otp = _user$4.otp, level = _user$4.level, userInfo = _objectWithoutProperties(_user$4, _excluded4);
          if (!(auths[0].phone != userInfo.ctv)) {
            _context23.next = 24;
            break;
          }
          return _context23.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 24:
          _context23.next = 26;
          return _connectDB["default"].query("SELECT * FROM redenvelopes_used WHERE phone_used = ? ORDER BY id DESC LIMIT ".concat(pageno, ", ").concat(limit, " "), [phone]);
        case 26:
          _yield$connection$que167 = _context23.sent;
          _yield$connection$que168 = _slicedToArray(_yield$connection$que167, 1);
          redenvelopes_used = _yield$connection$que168[0];
          _context23.next = 31;
          return _connectDB["default"].query("SELECT * FROM redenvelopes_used WHERE phone_used = ?", [phone]);
        case 31:
          _yield$connection$que169 = _context23.sent;
          _yield$connection$que170 = _slicedToArray(_yield$connection$que169, 1);
          total_users = _yield$connection$que170[0];
          return _context23.abrupt("return", res.status(200).json({
            message: 'Success',
            status: true,
            datas: redenvelopes_used,
            page_total: Math.ceil(total_users.length / limit)
          }));
        case 35:
        case "end":
          return _context23.stop();
      }
    }, _callee23);
  }));
  return function listRedenvelope(_x46, _x47) {
    return _ref23.apply(this, arguments);
  };
}();
var listBet = /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(req, res) {
    var auth, phone, _req$body5, pageno, limit, _yield$connection$que171, _yield$connection$que172, user, _yield$connection$que173, _yield$connection$que174, auths, _user$5, token, password, otp, level, userInfo, _yield$connection$que175, _yield$connection$que176, listBet, _yield$connection$que177, _yield$connection$que178, total_users;
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          auth = req.cookies.auth;
          phone = req.params.phone;
          _req$body5 = req.body, pageno = _req$body5.pageno, limit = _req$body5.limit;
          if (!(!pageno || !limit)) {
            _context24.next = 5;
            break;
          }
          return _context24.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 5:
          if (!(pageno < 0 || limit < 0)) {
            _context24.next = 7;
            break;
          }
          return _context24.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 7:
          if (phone) {
            _context24.next = 9;
            break;
          }
          return _context24.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 9:
          _context24.next = 11;
          return _connectDB["default"].query('SELECT * FROM users WHERE phone = ? ', [phone]);
        case 11:
          _yield$connection$que171 = _context24.sent;
          _yield$connection$que172 = _slicedToArray(_yield$connection$que171, 1);
          user = _yield$connection$que172[0];
          _context24.next = 16;
          return _connectDB["default"].query('SELECT * FROM users WHERE token = ? ', [auth]);
        case 16:
          _yield$connection$que173 = _context24.sent;
          _yield$connection$que174 = _slicedToArray(_yield$connection$que173, 1);
          auths = _yield$connection$que174[0];
          if (!(user.length == 0 || auths.length == 0)) {
            _context24.next = 21;
            break;
          }
          return _context24.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 21:
          _user$5 = user[0], token = _user$5.token, password = _user$5.password, otp = _user$5.otp, level = _user$5.level, userInfo = _objectWithoutProperties(_user$5, _excluded5);
          if (!(auths[0].phone != userInfo.ctv)) {
            _context24.next = 24;
            break;
          }
          return _context24.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 24:
          _context24.next = 26;
          return _connectDB["default"].query("SELECT * FROM minutes_1 WHERE phone = ? AND status != 0 ORDER BY id DESC LIMIT ".concat(pageno, ", ").concat(limit, " "), [phone]);
        case 26:
          _yield$connection$que175 = _context24.sent;
          _yield$connection$que176 = _slicedToArray(_yield$connection$que175, 1);
          listBet = _yield$connection$que176[0];
          _context24.next = 31;
          return _connectDB["default"].query("SELECT * FROM minutes_1 WHERE phone = ? AND status != 0", [phone]);
        case 31:
          _yield$connection$que177 = _context24.sent;
          _yield$connection$que178 = _slicedToArray(_yield$connection$que177, 1);
          total_users = _yield$connection$que178[0];
          return _context24.abrupt("return", res.status(200).json({
            message: 'Success',
            status: true,
            datas: listBet,
            page_total: Math.ceil(total_users.length / limit)
          }));
        case 35:
        case "end":
          return _context24.stop();
      }
    }, _callee24);
  }));
  return function listBet(_x48, _x49) {
    return _ref24.apply(this, arguments);
  };
}();
var buffMoney = /*#__PURE__*/function () {
  var _ref25 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(req, res) {
    var auth, phone, select, money, _yield$connection$que179, _yield$connection$que180, users, _yield$connection$que181, _yield$connection$que182, auths, userInfo, authInfo, _yield$connection$que183, _yield$connection$que184, point_list, check, d, time, sql, _yield$connection$que185, _yield$connection$que186, moneyN, _d, _time13, _sql;
    return _regeneratorRuntime().wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          auth = req.cookies.auth;
          phone = req.body.username;
          select = req.body.select;
          money = req.body.money;
          if (!(!phone || !select || !money)) {
            _context25.next = 6;
            break;
          }
          return _context25.abrupt("return", res.status(200).json({
            message: 'Fail',
            status: false
          }));
        case 6:
          _context25.next = 8;
          return _connectDB["default"].query('SELECT * FROM users WHERE phone = ? ', [phone]);
        case 8:
          _yield$connection$que179 = _context25.sent;
          _yield$connection$que180 = _slicedToArray(_yield$connection$que179, 1);
          users = _yield$connection$que180[0];
          _context25.next = 13;
          return _connectDB["default"].query('SELECT * FROM users WHERE token = ? ', [auth]);
        case 13:
          _yield$connection$que181 = _context25.sent;
          _yield$connection$que182 = _slicedToArray(_yield$connection$que181, 1);
          auths = _yield$connection$que182[0];
          if (!(users.length == 0)) {
            _context25.next = 18;
            break;
          }
          return _context25.abrupt("return", res.status(200).json({
            message: 'Account does not exist',
            status: false
          }));
        case 18:
          userInfo = users[0];
          authInfo = auths[0];
          _context25.next = 22;
          return _connectDB["default"].query('SELECT `money_us` FROM point_list WHERE phone = ? ', [authInfo.phone]);
        case 22:
          _yield$connection$que183 = _context25.sent;
          _yield$connection$que184 = _slicedToArray(_yield$connection$que183, 1);
          point_list = _yield$connection$que184[0];
          check = point_list[0].money_us;
          if (!(select == '1')) {
            _context25.next = 48;
            break;
          }
          if (!(check - money >= 0)) {
            _context25.next = 45;
            break;
          }
          d = new Date();
          time = d.getTime();
          _context25.next = 32;
          return _connectDB["default"].query('UPDATE users SET money = money + ? WHERE phone = ? ', [money, userInfo.phone]);
        case 32:
          _context25.next = 34;
          return _connectDB["default"].query('UPDATE point_list SET money_us = money_us - ? WHERE phone = ? ', [money, authInfo.phone]);
        case 34:
          sql = 'INSERT INTO financial_details SET phone = ?, phone_used = ?, money = ?, type = ?, time = ?';
          _context25.next = 37;
          return _connectDB["default"].query(sql, [authInfo.phone, userInfo.phone, money, '1', time]);
        case 37:
          _context25.next = 39;
          return _connectDB["default"].query('SELECT `money_us` FROM point_list WHERE phone = ? ', [authInfo.phone]);
        case 39:
          _yield$connection$que185 = _context25.sent;
          _yield$connection$que186 = _slicedToArray(_yield$connection$que185, 1);
          moneyN = _yield$connection$que186[0];
          return _context25.abrupt("return", res.status(200).json({
            message: 'Success',
            status: true,
            money: moneyN[0].money_us
          }));
        case 45:
          return _context25.abrupt("return", res.status(200).json({
            message: 'Insufficient balance',
            status: false
          }));
        case 46:
          _context25.next = 58;
          break;
        case 48:
          _d = new Date();
          _time13 = _d.getTime();
          _context25.next = 52;
          return _connectDB["default"].query('UPDATE users SET money = money - ? WHERE phone = ? ', [money, userInfo.phone]);
        case 52:
          _context25.next = 54;
          return _connectDB["default"].query('UPDATE point_list SET money = money + ? WHERE phone = ? ', [money, authInfo.phone]);
        case 54:
          _sql = 'INSERT INTO financial_details SET phone = ?, phone_used = ?, money = ?, type = ?, time = ?';
          _context25.next = 57;
          return _connectDB["default"].query(_sql, [authInfo.phone, userInfo.phone, money, '2', _time13]);
        case 57:
          return _context25.abrupt("return", res.status(200).json({
            message: 'Success',
            status: true
          }));
        case 58:
        case "end":
          return _context25.stop();
      }
    }, _callee25);
  }));
  return function buffMoney(_x50, _x51) {
    return _ref25.apply(this, arguments);
  };
}();
module.exports = {
  buffMoney: buffMoney,
  dailyPage: dailyPage,
  middlewareDailyController: middlewareDailyController,
  userInfo: userInfo,
  statistical: statistical,
  listMeber: listMeber,
  profileMember: profileMember,
  infoCtv: infoCtv,
  infoCtv2: infoCtv2,
  settingPage: settingPage,
  giftPage: giftPage,
  support: support,
  settings: settings,
  createBonus: createBonus,
  listRedenvelops: listRedenvelops,
  listMember: listMember,
  listRecharge: listRecharge,
  listWithdraw: listWithdraw,
  listRechargeP: listRechargeP,
  listWithdrawP: listWithdrawP,
  pageInfo: pageInfo,
  listRechargeMem: listRechargeMem,
  listWithdrawMem: listWithdrawMem,
  listRedenvelope: listRedenvelope,
  listBet: listBet
};