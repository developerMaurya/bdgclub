"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _connectDB = _interopRequireDefault(require("../config/connectDB"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _md = _interopRequireDefault(require("md5"));
var _express = _interopRequireDefault(require("express"));
var _excluded = ["id", "phone", "code", "invite", "level", "game"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() { } function GeneratorFunction() { } function GeneratorFunctionPrototype() { } var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a; ;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
require('dotenv').config();
var winGoPage = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", res.render("bet/wingo/win.ejs"));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function winGoPage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var winGoPage3 = /*#__PURE__*/function () {
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
  return function winGoPage3(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
// testing
var trxPage1 = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", res.render("bet/wingo/trx.ejs"));
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function trxPage1(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var trxPage3 = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", res.render("bet/wingo/trx3.ejs"));
        case 1:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function trxPage3(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var trxPage5 = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          return _context5.abrupt("return", res.render("bet/wingo/trx5.ejs"));
        case 1:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function trxPage5(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var trxPage10 = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          return _context6.abrupt("return", res.render("bet/wingo/trx10.ejs"));
        case 1:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function trxPage10(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var winGoPage5 = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          return _context7.abrupt("return", res.render("bet/wingo/win5.ejs"));
        case 1:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function winGoPage5(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var winGoPage10 = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          return _context8.abrupt("return", res.render("bet/wingo/win10.ejs"));
        case 1:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function winGoPage10(_x15, _x16) {
    return _ref8.apply(this, arguments);
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
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(auth, money) {
    var _yield$connection$que, _yield$connection$que2, level, _yield$connection$que3, _yield$connection$que4, user, userInfo, _yield$connection$que5, _yield$connection$que6, f1, infoF1, levelIndex, rosesF, timeNow, sql2, sql3, _yield$connection$que7, _yield$connection$que8, fNext;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return _connectDB["default"].query('SELECT * FROM level ');
        case 2:
          _yield$connection$que = _context9.sent;
          _yield$connection$que2 = _slicedToArray(_yield$connection$que, 1);
          level = _yield$connection$que2[0];
          _context9.next = 7;
          return _connectDB["default"].query('SELECT `phone`, `code`, `invite`, `user_level`, `total_money` FROM users WHERE token = ? AND veri = 1 LIMIT 1 ', [auth]);
        case 7:
          _yield$connection$que3 = _context9.sent;
          _yield$connection$que4 = _slicedToArray(_yield$connection$que3, 1);
          user = _yield$connection$que4[0];
          userInfo = user[0];
          _context9.next = 13;
          return _connectDB["default"].query('SELECT `phone`, `code`, `invite`, `rank`, `user_level`, `total_money` FROM users WHERE code = ? AND veri = 1 LIMIT 1 ', [userInfo.invite]);
        case 13:
          _yield$connection$que5 = _context9.sent;
          _yield$connection$que6 = _slicedToArray(_yield$connection$que5, 1);
          f1 = _yield$connection$que6[0];
          if (!(userInfo.total_money >= 100)) {
            _context9.next = 47;
            break;
          }
          if (!(f1.length > 0)) {
            _context9.next = 47;
            break;
          }
          infoF1 = f1[0];
          levelIndex = 1;
        case 20:
          if (!(levelIndex <= 6)) {
            _context9.next = 47;
            break;
          }
          rosesF = 0;
          if (!(infoF1.user_level >= levelIndex && infoF1.total_money >= 100)) {
            _context9.next = 34;
            break;
          }
          rosesF = money / 100 * level[levelIndex - 1].f1;
          if (!(rosesF > 0)) {
            _context9.next = 34;
            break;
          }
          _context9.next = 27;
          return _connectDB["default"].query('UPDATE users SET money = money + ?, roses_f = roses_f + ?, roses_today = roses_today + ? WHERE phone = ? ', [rosesF, rosesF, rosesF, infoF1.phone]);
        case 27:
          timeNow = Date.now();
          sql2 = "INSERT INTO roses SET \n                            phone = ?,\n                            code = ?,\n                            invite = ?,\n                            f1 = ?,\n                            time = ?";
          _context9.next = 31;
          return _connectDB["default"].execute(sql2, [infoF1.phone, infoF1.code, infoF1.invite, rosesF, timeNow]);
        case 31:
          sql3 = "\n                            INSERT INTO turn_over (phone, code, invite, daily_turn_over, total_turn_over)\n                            VALUES (?, ?, ?, ?, ?)\n                            ON DUPLICATE KEY UPDATE\n                            daily_turn_over = daily_turn_over + VALUES(daily_turn_over),\n                            total_turn_over = total_turn_over + VALUES(total_turn_over)\n                            ";
          _context9.next = 34;
          return _connectDB["default"].execute(sql3, [infoF1.phone, infoF1.code, infoF1.invite, money, money]);
        case 34:
          _context9.next = 36;
          return _connectDB["default"].query('SELECT `phone`, `code`, `invite`, `rank`, `user_level`, `total_money` FROM users WHERE code = ? AND veri = 1 LIMIT 1 ', [infoF1.invite]);
        case 36:
          _yield$connection$que7 = _context9.sent;
          _yield$connection$que8 = _slicedToArray(_yield$connection$que7, 1);
          fNext = _yield$connection$que8[0];
          if (!(fNext.length > 0)) {
            _context9.next = 43;
            break;
          }
          infoF1 = fNext[0];
          _context9.next = 44;
          break;
        case 43:
          return _context9.abrupt("break", 47);
        case 44:
          levelIndex++;
          _context9.next = 20;
          break;
        case 47:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function rosesPlus(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

// const rosesPlus = async (auth, money) => {
//     const [level] = await connection.query('SELECT * FROM level ');
//     let level0 = level[0];

//     const [user] = await connection.query('SELECT `phone`, `code`, `invite` FROM users WHERE token = ? AND veri = 1  LIMIT 1 ', [auth]);
//     let userInfo = user[0];
//     const [f1] = await connection.query('SELECT `phone`, `code`, `invite`, `rank` FROM users WHERE code = ? AND veri = 1  LIMIT 1 ', [userInfo.invite]);
//     if (money >= 10000) {
//         if (f1.length > 0) {
//             let infoF1 = f1[0];
//             let rosesF1 = (money / 100) * level0.f1;
//             await connection.query('UPDATE users SET money = money + ?, roses_f1 = roses_f1 + ?, roses_f = roses_f + ?, roses_today = roses_today + ? WHERE phone = ? ', [rosesF1, rosesF1, rosesF1, rosesF1, infoF1.phone]);
//             const [f2] = await connection.query('SELECT `phone`, `code`, `invite`, `rank` FROM users WHERE code = ? AND veri = 1  LIMIT 1 ', [infoF1.invite]);
//             if (f2.length > 0) {
//                 let infoF2 = f2[0];
//                 let rosesF2 = (money / 100) * level0.f2;
//                 await connection.query('UPDATE users SET money = money + ?, roses_f = roses_f + ?, roses_today = roses_today + ? WHERE phone = ? ', [rosesF2, rosesF2, rosesF2, infoF2.phone]);
//                 const [f3] = await connection.query('SELECT `phone`, `code`, `invite`, `rank` FROM users WHERE code = ? AND veri = 1  LIMIT 1 ', [infoF2.invite]);
//                 if (f3.length > 0) {
//                     let infoF3 = f3[0];
//                     let rosesF3 = (money / 100) * level0.f3;
//                     await connection.query('UPDATE users SET money = money + ?, roses_f = roses_f + ?, roses_today = roses_today + ? WHERE phone = ? ', [rosesF3, rosesF3, rosesF3, infoF3.phone]);
//                     const [f4] = await connection.query('SELECT `phone`, `code`, `invite`, `rank` FROM users WHERE code = ? AND veri = 1  LIMIT 1 ', [infoF3.invite]);
//                     if (f4.length > 0) {
//                         let infoF4 = f4[0];
//                         let rosesF4 = (money / 100) * level0.f4;
//                         await connection.query('UPDATE users SET money = money + ?, roses_f = roses_f + ?, roses_today = roses_today + ? WHERE phone = ? ', [rosesF4, rosesF4, rosesF4, infoF4.phone]);
//                     }
//                 }
//             }

//         }
//     }
// }

// const rosesPlus = async (auth, money) => {
//     const [level] = await connection.query('SELECT * FROM level ');

//     const [user] = await connection.query('SELECT `phone`, `code`, `invite`, `user_level` FROM users WHERE token = ? AND veri = 1 LIMIT 1 ', [auth]);
//     let userInfo = user[0];
//     const [f1] = await connection.query('SELECT `phone`, `code`, `invite`, `rank`, `user_level` FROM users WHERE code = ? AND veri = 1 LIMIT 1 ', [userInfo.invite]);

//     if (money < 300) {
//         return; // No need to proceed if money is less than 300
//     }

//     if (f1.length === 0) {
//         return; // No referrer found
//     }

//     let infoF1 = f1[0];

//     const f2 = await connection.query('SELECT `phone`, `code`, `invite`, `rank`, `user_level` FROM users WHERE code = ? AND veri = 1 LIMIT 1 ', [infoF1.invite]);
//     if (f2.length > 0) {
//         let infoF2 = f2[0];
//         if (infoF2.user_level >= 2) {
//             let rosesF2 = (money / 100) * level[1].f1;
//             await connection.query('UPDATE users SET money = money + ?, roses_f = roses_f + ?, roses_today = roses_today + ? WHERE phone = ? ', [rosesF2, rosesF2, rosesF2, infoF2.phone]);
//         }

//         const f3 = await connection.query('SELECT `phone`, `code`, `invite`, `rank`, `user_level` FROM users WHERE code = ? AND veri = 1 LIMIT 1 ', [infoF2.invite]);
//         if (f3.length > 0) {
//             let infoF3 = f3[0];
//             if (infoF3.user_level >= 3) {
//                 let rosesF3 = (money / 100) * level[2].f1;
//                 await connection.query('UPDATE users SET money = money + ?, roses_f = roses_f + ?, roses_today = roses_today + ? WHERE phone = ? ', [rosesF3, rosesF3, rosesF3, infoF3.phone]);
//             }

//             const f4 = await connection.query('SELECT `phone`, `code`, `invite`, `rank`, `user_level` FROM users WHERE code = ? AND veri = 1 LIMIT 1 ', [infoF3.invite]);
//             if (f4.length > 0) {
//                 let infoF4 = f4[0];
//                 if (infoF4.user_level >= 4) {
//                     let rosesF4 = (money / 100) * level[3].f1;
//                     await connection.query('UPDATE users SET money = money + ?, roses_f = roses_f + ?, roses_today = roses_today + ? WHERE phone = ? ', [rosesF4, rosesF4, rosesF4, infoF4.phone]);
//                 }
//             }
//         }
//     }
// }

// const rosesPlus = async (auth, money) => {
//     const [level] = await connection.query('SELECT * FROM level ');
//     const [user] = await connection.query('SELECT `phone`, `code`, `invite` FROM users WHERE token = ? AND veri = 1  LIMIT 1 ', [auth]);
//     let userInfo = user[0];
//     const [f1] = await connection.query('SELECT `phone`, `code`, `invite`, `rank` FROM users WHERE code = ? AND veri = 1  LIMIT 1 ', [userInfo.invite]);
//     let infoF1 = f1[0];

//     const [check_invite] = await connection.query('SELECT * FROM users WHERE invite = ?', [userInfo.invite]);
//     if (money >= 300) {
//         let levels = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44];
//         let levelIndex = levels.findIndex(levelThreshold => check_invite.length < levelThreshold);

//         if (levelIndex !== -1) {
//             let rosesF1 = (money / 100) * level[levelIndex].f1;
//             await connection.query('UPDATE users SET money = money + ?, roses_f1 = roses_f1 + ?, roses_f = roses_f + ?, roses_today = roses_today + ? WHERE phone = ? ', [rosesF1, rosesF1, rosesF1, rosesF1, infoF1.phone]);
//         }
//     }
// }

var betWinGo = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var _req$body, typeid, join, x, money, auth, gameJoin, _yield$connection$que9, _yield$connection$que10, winGoNow, _yield$connection$que11, _yield$connection$que12, user, userInfo, period, fee, total, timeNow, check, date, years, months, days, id_product, formatTime, color, checkJoin, result, timerJoin, checkTime, sql, _yield$connection$que13, _yield$connection$que14, users;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
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
          _req$body = req.body, typeid = _req$body.typeid, join = _req$body.join, x = _req$body.x, money = _req$body.money;
          auth = req.cookies.auth;
          if (!(typeid != 1 && typeid != 3 && typeid != 5 && typeid != 10)) {
            _context10.next = 5;
            break;
          }
          return _context10.abrupt("return", res.status(200).json({
            message: 'Error!',
            status: true
          }));
        case 5:
          gameJoin = '';
          if (typeid == 1) gameJoin = 'wingo';
          if (typeid == 3) gameJoin = 'wingo3';
          if (typeid == 5) gameJoin = 'wingo5';
          if (typeid == 10) gameJoin = 'wingo10';
          _context10.next = 12;
          return _connectDB["default"].query("SELECT period FROM wingo WHERE status = 0 AND game = '".concat(gameJoin, "' ORDER BY id DESC LIMIT 1 "));
        case 12:
          _yield$connection$que9 = _context10.sent;
          _yield$connection$que10 = _slicedToArray(_yield$connection$que9, 1);
          winGoNow = _yield$connection$que10[0];
          _context10.next = 17;
          return _connectDB["default"].query('SELECT `phone`, `code`, `invite`, `level`, `money` FROM users WHERE token = ? AND veri = 1  LIMIT 1 ', [auth]);
        case 17:
          _yield$connection$que11 = _context10.sent;
          _yield$connection$que12 = _slicedToArray(_yield$connection$que11, 1);
          user = _yield$connection$que12[0];
          if (!(!winGoNow[0] || !user[0] || !isNumber(x) || !isNumber(money))) {
            _context10.next = 22;
            break;
          }
          return _context10.abrupt("return", res.status(200).json({
            message: 'Error!',
            status: true
          }));
        case 22:
          userInfo = user[0];
          period = winGoNow[0].period;
          fee = x * money * 0.02;
          total = x * money - fee;
          timeNow = Date.now();
          check = userInfo.money - total;
          date = new Date();
          years = formateT(date.getFullYear());
          months = formateT(date.getMonth() + 1);
          days = formateT(date.getDate());
          id_product = years + months + days + Math.floor(Math.random() * 1000000000000000);
          formatTime = timerJoin();
          color = '';
          if (join == 'l') {
            color = 'big';
          } else if (join == 'n') {
            color = 'small';
          } else if (join == 't') {
            color = 'violet';
          } else if (join == 'd') {
            color = 'red';
          } else if (join == 'x') {
            color = 'green';
          } else if (join == '0') {
            color = 'red-violet';
          } else if (join == '5') {
            color = 'green-violet';
          } else if (join % 2 == 0) {
            color = 'red';
          } else if (join % 2 != 0) {
            color = 'green';
          }
          checkJoin = '';
          if (!isNumber(join) && join == 'l' || join == 'n') {
            checkJoin = "\n        <div data-v-a9660e98=\"\" class=\"van-image\" style=\"width: 30px; height: 30px;\">\n            <img src=\"/images/".concat(join == 'n' ? 'small' : 'big', ".png\" class=\"van-image__img\">\n        </div>\n        ");
          } else {
            checkJoin = "\n        <span data-v-a9660e98=\"\">".concat(isNumber(join) ? join : '', "</span>\n        ");
          }
          result = "\n    <div data-v-a9660e98=\"\" issuenumber=\"".concat(period, "\" addtime=\"").concat(formatTime, "\" rowid=\"1\" class=\"hb\">\n        <div data-v-a9660e98=\"\" class=\"item c-row\">\n            <div data-v-a9660e98=\"\" class=\"result\">\n                <div data-v-a9660e98=\"\" class=\"select select-").concat(color, "\">\n                    ").concat(checkJoin, "\n                </div>\n            </div>\n            <div data-v-a9660e98=\"\" class=\"c-row c-row-between info\">\n                <div data-v-a9660e98=\"\">\n                    <div data-v-a9660e98=\"\" class=\"issueName\">\n                        ").concat(period, "\n                    </div>\n                    <div data-v-a9660e98=\"\" class=\"tiem\">").concat(formatTime, "</div>\n                </div>\n            </div>\n        </div>\n        <!---->\n    </div>\n    ");
          checkTime = timerJoin(date.getTime());
          if (!(check >= 0)) {
            _context10.next = 56;
            break;
          }
          sql = "INSERT INTO minutes_1 SET \n        id_product = ?,\n        phone = ?,\n        code = ?,\n        invite = ?,\n        stage = ?,\n        level = ?,\n        money = ?,\n        amount = ?,\n        fee = ?,\n        get = ?,\n        game = ?,\n        bet = ?,\n        status = ?,\n        today = ?,\n        time = ?";
          _context10.next = 44;
          return _connectDB["default"].execute(sql, [id_product, userInfo.phone, userInfo.code, userInfo.invite, period, userInfo.level, total, x, fee, 0, gameJoin, join, 0, checkTime, timeNow]);
        case 44:
          _context10.next = 46;
          return _connectDB["default"].execute('UPDATE `users` SET `money` = `money` - ? WHERE `token` = ? ', [money * x, auth]);
        case 46:
          _context10.next = 48;
          return _connectDB["default"].query('SELECT `money`, `level` FROM users WHERE token = ? AND veri = 1  LIMIT 1 ', [auth]);
        case 48:
          _yield$connection$que13 = _context10.sent;
          _yield$connection$que14 = _slicedToArray(_yield$connection$que13, 1);
          users = _yield$connection$que14[0];
          _context10.next = 53;
          return rosesPlus(auth, money * x);
        case 53:
          return _context10.abrupt("return", res.status(200).json({
            message: 'Successful bet',
            status: true,
            data: result,
            change: users[0].level,
            money: users[0].money
          }));
        case 56:
          return _context10.abrupt("return", res.status(200).json({
            message: 'The amount is not enough',
            status: false
          }));
        case 57:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function betWinGo(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
var listOrderOld = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var _req$body2, typeid, pageno, pageto, auth, _yield$connection$que15, _yield$connection$que16, user, game, _yield$connection$que17, _yield$connection$que18, wingo, _yield$connection$que19, _yield$connection$que20, wingoAll, _yield$connection$que21, _yield$connection$que22, period, page;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _req$body2 = req.body, typeid = _req$body2.typeid, pageno = _req$body2.pageno, pageto = _req$body2.pageto;
          if (!(typeid != 1 && typeid != 3 && typeid != 5 && typeid != 10)) {
            _context11.next = 3;
            break;
          }
          return _context11.abrupt("return", res.status(200).json({
            message: 'Error!',
            status: true
          }));
        case 3:
          if (!(pageno < 0 || pageto < 0)) {
            _context11.next = 5;
            break;
          }
          return _context11.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 5:
          auth = req.cookies.auth;
          _context11.next = 8;
          return _connectDB["default"].query('SELECT `phone`, `code`, `invite`, `level`, `money` FROM users WHERE token = ? AND veri = 1  LIMIT 1 ', [auth]);
        case 8:
          _yield$connection$que15 = _context11.sent;
          _yield$connection$que16 = _slicedToArray(_yield$connection$que15, 1);
          user = _yield$connection$que16[0];
          game = '';
          if (typeid == 1) game = 'wingo';
          if (typeid == 3) game = 'wingo3';
          if (typeid == 5) game = 'wingo5';
          if (typeid == 10) game = 'wingo10';
          _context11.next = 18;
          return _connectDB["default"].query("SELECT * FROM wingo WHERE status != 0 AND game = '".concat(game, "' ORDER BY id DESC LIMIT ").concat(pageno, ", ").concat(pageto, " "));
        case 18:
          _yield$connection$que17 = _context11.sent;
          _yield$connection$que18 = _slicedToArray(_yield$connection$que17, 1);
          wingo = _yield$connection$que18[0];
          _context11.next = 23;
          return _connectDB["default"].query("SELECT * FROM wingo WHERE status != 0 AND game = '".concat(game, "' "));
        case 23:
          _yield$connection$que19 = _context11.sent;
          _yield$connection$que20 = _slicedToArray(_yield$connection$que19, 1);
          wingoAll = _yield$connection$que20[0];
          _context11.next = 28;
          return _connectDB["default"].query("SELECT period FROM wingo WHERE status = 0 AND game = '".concat(game, "' ORDER BY id DESC LIMIT 1 "));
        case 28:
          _yield$connection$que21 = _context11.sent;
          _yield$connection$que22 = _slicedToArray(_yield$connection$que21, 1);
          period = _yield$connection$que22[0];
          if (wingo[0]) {
            _context11.next = 33;
            break;
          }
          return _context11.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 33:
          if (!(!pageno || !pageto || !user[0] || !wingo[0] || !period[0])) {
            _context11.next = 35;
            break;
          }
          return _context11.abrupt("return", res.status(200).json({
            message: 'Error!',
            status: true
          }));
        case 35:
          page = Math.ceil(wingoAll.length / 10);
          return _context11.abrupt("return", res.status(200).json({
            code: 0,
            msg: "Receive success",
            data: {
              gameslist: wingo
            },
            period: period[0].period,
            page: page,
            status: true
          }));
        case 37:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function listOrderOld(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
var GetMyEmerdList = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var _req$body3, typeid, pageno, pageto, auth, game, _yield$connection$que23, _yield$connection$que24, user, _yield$connection$que25, _yield$connection$que26, minutes_1, _yield$connection$que27, _yield$connection$que28, minutes_1All, page, datas;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _req$body3 = req.body, typeid = _req$body3.typeid, pageno = _req$body3.pageno, pageto = _req$body3.pageto; // if (!pageno || !pageto) {
          //     pageno = 0;
          //     pageto = 10;
          // }
          if (!(typeid != 1 && typeid != 3 && typeid != 5 && typeid != 10)) {
            _context12.next = 3;
            break;
          }
          return _context12.abrupt("return", res.status(200).json({
            message: 'Error!',
            status: true
          }));
        case 3:
          if (!(pageno < 0 || pageto < 0)) {
            _context12.next = 5;
            break;
          }
          return _context12.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 5:
          auth = req.cookies.auth;
          game = '';
          if (typeid == 1) game = 'wingo';
          if (typeid == 3) game = 'wingo3';
          if (typeid == 5) game = 'wingo5';
          if (typeid == 10) game = 'wingo10';
          _context12.next = 13;
          return _connectDB["default"].query('SELECT `phone`, `code`, `invite`, `level`, `money` FROM users WHERE token = ? AND veri = 1 LIMIT 1 ', [auth]);
        case 13:
          _yield$connection$que23 = _context12.sent;
          _yield$connection$que24 = _slicedToArray(_yield$connection$que23, 1);
          user = _yield$connection$que24[0];
          _context12.next = 18;
          return _connectDB["default"].query("SELECT * FROM minutes_1 WHERE phone = ? AND game = '".concat(game, "' ORDER BY id DESC LIMIT ").concat(Number(pageno) + ',' + Number(pageto)), [user[0].phone]);
        case 18:
          _yield$connection$que25 = _context12.sent;
          _yield$connection$que26 = _slicedToArray(_yield$connection$que25, 1);
          minutes_1 = _yield$connection$que26[0];
          _context12.next = 23;
          return _connectDB["default"].query("SELECT * FROM minutes_1 WHERE phone = ? AND game = '".concat(game, "' ORDER BY id DESC "), [user[0].phone]);
        case 23:
          _yield$connection$que27 = _context12.sent;
          _yield$connection$que28 = _slicedToArray(_yield$connection$que27, 1);
          minutes_1All = _yield$connection$que28[0];
          if (minutes_1[0]) {
            _context12.next = 28;
            break;
          }
          return _context12.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 28:
          if (!(!pageno || !pageto || !user[0] || !minutes_1[0])) {
            _context12.next = 30;
            break;
          }
          return _context12.abrupt("return", res.status(200).json({
            message: 'Error!',
            status: true
          }));
        case 30:
          page = Math.ceil(minutes_1All.length / 10);
          datas = minutes_1.map(function (data) {
            var id = data.id,
              phone = data.phone,
              code = data.code,
              invite = data.invite,
              level = data.level,
              game = data.game,
              others = _objectWithoutProperties(data, _excluded);
            return others;
          });
          return _context12.abrupt("return", res.status(200).json({
            code: 0,
            msg: "Receive success",
            data: {
              gameslist: datas
            },
            page: page,
            status: true
          }));
        case 33:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return function GetMyEmerdList(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
var addWinGo = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(game) {
    var join, _yield$connection$que29, _yield$connection$que30, winGoNow, _yield$connection$que31, _yield$connection$que32, setting, period, amount, _yield$connection$que33, _yield$connection$que34, minPlayers, betColumns, totalMoneyPromises, categories, smallestCategory, colorBets, betsForCategory, availableBets, lowestBet, _betColumns, _categories, _colorBets, _smallestCategory, _betsForCategory, _availableBets, _lowestBet, timeNow, nextResult, newArr, result, arr, check, i, sql;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          join = '';
          if (game == 1) join = 'wingo';
          if (game == 3) join = 'wingo3';
          if (game == 5) join = 'wingo5';
          if (game == 10) join = 'wingo10';
          _context15.next = 8;
          return _connectDB["default"].query("SELECT period FROM wingo WHERE status = 0 AND game = \"".concat(join, "\" ORDER BY id DESC LIMIT 1 "));
        case 8:
          _yield$connection$que29 = _context15.sent;
          _yield$connection$que30 = _slicedToArray(_yield$connection$que29, 1);
          winGoNow = _yield$connection$que30[0];
          _context15.next = 13;
          return _connectDB["default"].query('SELECT * FROM `admin` ');
        case 13:
          _yield$connection$que31 = _context15.sent;
          _yield$connection$que32 = _slicedToArray(_yield$connection$que31, 1);
          setting = _yield$connection$que32[0];
          period = winGoNow[0].period; // cầu hiện tại
          amount = Math.floor(Math.random() * 10);
          _context15.next = 20;
          return _connectDB["default"].query("SELECT * FROM minutes_1 WHERE status = 0 AND game = \"".concat(join, "\""));
        case 20:
          _yield$connection$que33 = _context15.sent;
          _yield$connection$que34 = _slicedToArray(_yield$connection$que33, 1);
          minPlayers = _yield$connection$que34[0];
          if (!(minPlayers.length >= 2)) {
            _context15.next = 37;
            break;
          }
          betColumns = [
            // red_small 
            {
              name: 'red_0',
              bets: ['0', 't', 'd', 'n']
            }, {
              name: 'red_2',
              bets: ['2', 'd', 'n']
            }, {
              name: 'red_4',
              bets: ['4', 'd', 'n']
            },
            // green small 
            {
              name: 'green_1',
              bets: ['1', 'x', 'n']
            }, {
              name: 'green_3',
              bets: ['3', 'x', 'n']
            },
            // green big 
            {
              name: 'green_5',
              bets: ['5', 'x', 't', 'l']
            }, {
              name: 'green_7',
              bets: ['7', 'x', 'l']
            }, {
              name: 'green_9',
              bets: ['9', 'x', 'l']
            },
            // red big 
            {
              name: 'red_6',
              bets: ['6', 'd', 'l']
            }, {
              name: 'red_8',
              bets: ['8', 'd', 'l']
            }];
          totalMoneyPromises = betColumns.map( /*#__PURE__*/function () {
            var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(column) {
              var _yield$connection$que35, _yield$connection$que36, result;
              return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                while (1) switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return _connectDB["default"].query("\n                SELECT SUM(money) AS total_money\n                FROM minutes_1\n                WHERE game = \"".concat(join, "\" AND status = 0 AND bet IN (").concat(column.bets.map(function (bet) {
                      return "\"".concat(bet, "\"");
                    }).join(','), ")\n            "));
                  case 2:
                    _yield$connection$que35 = _context13.sent;
                    _yield$connection$que36 = _slicedToArray(_yield$connection$que35, 1);
                    result = _yield$connection$que36[0];
                    return _context13.abrupt("return", {
                      name: column.name,
                      total_money: result[0].total_money ? parseInt(result[0].total_money) : 0
                    });
                  case 6:
                  case "end":
                    return _context13.stop();
                }
              }, _callee13);
            }));
            return function (_x26) {
              return _ref14.apply(this, arguments);
            };
          }());
          _context15.next = 28;
          return Promise.all(totalMoneyPromises);
        case 28:
          categories = _context15.sent;
          smallestCategory = categories.reduce(function (smallest, category) {
            return smallest === null || category.total_money < smallest.total_money ? category : smallest;
          }, null);
          colorBets = {
            red_6: [6],
            red_8: [8],
            red_2: [2],
            //0 removed 
            red_4: [4],
            green_3: [3],
            green_7: [7],
            //5 removed
            green_9: [9],
            //
            green_1: [1],
            green_5: [5],
            red_0: [0]
          };
          betsForCategory = colorBets[smallestCategory.name] || [];
          availableBets = betsForCategory.filter(function (bet) {
            return !categories.find(function (category) {
              return category.name === smallestCategory.name && category.total_money < smallestCategory.total_money;
            });
          });
          if (availableBets.length > 0) {
            lowestBet = availableBets[0];
          } else {
            lowestBet = betsForCategory.reduce(function (lowest, bet) {
              return bet < lowest ? bet : lowest;
            });
          }
          amount = lowestBet;
          _context15.next = 48;
          break;
        case 37:
          if (!(minPlayers.length === 1 && parseFloat(minPlayers[0].money) >= 20)) {
            _context15.next = 48;
            break;
          }
          _betColumns = [{
            name: 'red_small',
            bets: ['0', '2', '4', 'd', 'n']
          }, {
            name: 'red_big',
            bets: ['6', '8', 'd', 'l']
          }, {
            name: 'green_big',
            bets: ['5', '7', '9', 'x', 'l']
          }, {
            name: 'green_small',
            bets: ['1', '3', 'x', 'n']
          }, {
            name: 'violet_small',
            bets: ['0', 't', 'n']
          }, {
            name: 'violet_big',
            bets: ['5', 't', 'l']
          }];
          _context15.next = 41;
          return Promise.all(_betColumns.map( /*#__PURE__*/function () {
            var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(column) {
              var _result$;
              var _yield$connection$que37, _yield$connection$que38, result;
              return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                while (1) switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return _connectDB["default"].query("\n                    SELECT SUM(money) AS total_money\n                    FROM minutes_1\n                    WHERE game = \"".concat(join, "\" AND status = 0 AND bet IN (").concat(column.bets.map(function (bet) {
                      return "\"".concat(bet, "\"");
                    }).join(','), ")\n                "));
                  case 2:
                    _yield$connection$que37 = _context14.sent;
                    _yield$connection$que38 = _slicedToArray(_yield$connection$que37, 1);
                    result = _yield$connection$que38[0];
                    return _context14.abrupt("return", {
                      name: column.name,
                      total_money: parseInt((_result$ = result[0]) === null || _result$ === void 0 ? void 0 : _result$.total_money) || 0
                    });
                  case 6:
                  case "end":
                    return _context14.stop();
                }
              }, _callee14);
            }));
            return function (_x27) {
              return _ref15.apply(this, arguments);
            };
          }()));
        case 41:
          _categories = _context15.sent;
          _colorBets = {
            red_big: [6, 8],
            red_small: [2, 4],
            //0 removed 
            green_big: [7, 9],
            //5 removed
            green_small: [1, 3],
            violet_big: [5],
            violet_small: [0]
          };
          _smallestCategory = _categories.reduce(function (smallest, category) {
            return !smallest || category.total_money < smallest.total_money ? category : smallest;
          });
          _betsForCategory = _colorBets[_smallestCategory.name] || [];
          _availableBets = _betsForCategory.filter(function (bet) {
            return !_categories.find(function (category) {
              return category.name === _smallestCategory.name && category.total_money < _smallestCategory.total_money;
            });
          });
          _lowestBet = _availableBets.length > 0 ? _availableBets[0] : Math.min.apply(Math, _toConsumableArray(_betsForCategory));
          amount = _lowestBet;
        case 48:
          // xanh đỏ tím
          timeNow = Date.now();
          nextResult = '';
          if (game == 1) nextResult = setting[0].wingo1;
          if (game == 3) nextResult = setting[0].wingo3;
          if (game == 5) nextResult = setting[0].wingo5;
          if (game == 10) nextResult = setting[0].wingo10;
          newArr = '';
          if (!(nextResult == '-1')) {
            _context15.next = 61;
            break;
          }
          _context15.next = 58;
          return _connectDB["default"].execute("UPDATE wingo SET amount = ?,status = ? WHERE period = ? AND game = \"".concat(join, "\""), [amount, 1, period]);
        case 58:
          newArr = '-1';
          _context15.next = 68;
          break;
        case 61:
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
          _context15.next = 68;
          return _connectDB["default"].execute("UPDATE wingo SET amount = ?,status = ? WHERE period = ? AND game = \"".concat(join, "\""), [result, 1, period]);
        case 68:
          sql = "INSERT INTO wingo SET \n        period = ?,\n        amount = ?,\n        game = ?,\n        status = ?,\n        time = ?";
          _context15.next = 71;
          return _connectDB["default"].execute(sql, [Number(period) + 1, 0, join, 0, timeNow]);
        case 71:
          if (game == 1) join = 'wingo1';
          if (game == 3) join = 'wingo3';
          if (game == 5) join = 'wingo5';
          if (game == 10) join = 'wingo10';
          _context15.next = 77;
          return _connectDB["default"].execute("UPDATE admin SET ".concat(join, " = ?"), [newArr]);
        case 77:
          _context15.next = 82;
          break;
        case 79:
          _context15.prev = 79;
          _context15.t0 = _context15["catch"](0);
          if (_context15.t0) {
            console.log(_context15.t0);
          }
        case 82:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[0, 79]]);
  }));
  return function addWinGo(_x25) {
    return _ref13.apply(this, arguments);
  };
}();
var handlingWinGo1P = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(typeid) {
    var game, _yield$connection$que39, _yield$connection$que40, winGoNow, result, _yield$connection$exe, _yield$connection$exe2, order, i, orders, _result, bet, total, id, phone, nhan_duoc, _yield$connection$exe3, _yield$connection$exe4, users, totals, sql;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          game = '';
          if (typeid == 1) game = 'wingo';
          if (typeid == 3) game = 'wingo3';
          if (typeid == 5) game = 'wingo5';
          if (typeid == 10) game = 'wingo10';
          _context16.next = 7;
          return _connectDB["default"].query("SELECT * FROM wingo WHERE status != 0 AND game = '".concat(game, "' ORDER BY id DESC LIMIT 1 "));
        case 7:
          _yield$connection$que39 = _context16.sent;
          _yield$connection$que40 = _slicedToArray(_yield$connection$que39, 1);
          winGoNow = _yield$connection$que40[0];
          _context16.next = 12;
          return _connectDB["default"].execute("UPDATE minutes_1 SET result = ? WHERE status = 0 AND game = '".concat(game, "'"), [winGoNow[0].amount]);
        case 12:
          result = Number(winGoNow[0].amount);
          _context16.t0 = result;
          _context16.next = _context16.t0 === 0 ? 16 : _context16.t0 === 1 ? 19 : _context16.t0 === 2 ? 22 : _context16.t0 === 3 ? 25 : _context16.t0 === 4 ? 28 : _context16.t0 === 5 ? 31 : _context16.t0 === 6 ? 34 : _context16.t0 === 7 ? 37 : _context16.t0 === 8 ? 40 : _context16.t0 === 9 ? 43 : 46;
          break;
        case 16:
          _context16.next = 18;
          return _connectDB["default"].execute("UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = \"".concat(game, "\" AND bet != \"l\" AND bet != \"n\" AND bet != \"d\" AND bet != \"0\" AND bet != \"t\" "), []);
        case 18:
          return _context16.abrupt("break", 47);
        case 19:
          _context16.next = 21;
          return _connectDB["default"].execute("UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = \"".concat(game, "\" AND bet != \"l\" AND bet != \"n\" AND bet != \"x\" AND bet != \"1\" "), []);
        case 21:
          return _context16.abrupt("break", 47);
        case 22:
          _context16.next = 24;
          return _connectDB["default"].execute("UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = \"".concat(game, "\" AND bet != \"l\" AND bet != \"n\" AND bet != \"d\" AND bet != \"2\" "), []);
        case 24:
          return _context16.abrupt("break", 47);
        case 25:
          _context16.next = 27;
          return _connectDB["default"].execute("UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = \"".concat(game, "\" AND bet != \"l\" AND bet != \"n\" AND bet != \"x\" AND bet != \"3\" "), []);
        case 27:
          return _context16.abrupt("break", 47);
        case 28:
          _context16.next = 30;
          return _connectDB["default"].execute("UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = \"".concat(game, "\" AND bet != \"l\" AND bet != \"n\" AND bet != \"d\" AND bet != \"4\" "), []);
        case 30:
          return _context16.abrupt("break", 47);
        case 31:
          _context16.next = 33;
          return _connectDB["default"].execute("UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = \"".concat(game, "\" AND bet != \"l\" AND bet != \"n\" AND bet != \"x\" AND bet != \"5\" AND bet != \"t\" "), []);
        case 33:
          return _context16.abrupt("break", 47);
        case 34:
          _context16.next = 36;
          return _connectDB["default"].execute("UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = \"".concat(game, "\" AND bet != \"l\" AND bet != \"n\" AND bet != \"d\" AND bet != \"6\" "), []);
        case 36:
          return _context16.abrupt("break", 47);
        case 37:
          _context16.next = 39;
          return _connectDB["default"].execute("UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = \"".concat(game, "\" AND bet != \"l\" AND bet != \"n\" AND bet != \"x\" AND bet != \"7\" "), []);
        case 39:
          return _context16.abrupt("break", 47);
        case 40:
          _context16.next = 42;
          return _connectDB["default"].execute("UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = \"".concat(game, "\" AND bet != \"l\" AND bet != \"n\" AND bet != \"d\" AND bet != \"8\" "), []);
        case 42:
          return _context16.abrupt("break", 47);
        case 43:
          _context16.next = 45;
          return _connectDB["default"].execute("UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = \"".concat(game, "\" AND bet != \"l\" AND bet != \"n\" AND bet != \"x\" AND bet != \"9\" "), []);
        case 45:
          return _context16.abrupt("break", 47);
        case 46:
          return _context16.abrupt("break", 47);
        case 47:
          if (!(result < 5)) {
            _context16.next = 52;
            break;
          }
          _context16.next = 50;
          return _connectDB["default"].execute("UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = \"".concat(game, "\" AND bet = \"l\" "), []);
        case 50:
          _context16.next = 54;
          break;
        case 52:
          _context16.next = 54;
          return _connectDB["default"].execute("UPDATE minutes_1 SET status = 2 WHERE status = 0 AND game = \"".concat(game, "\" AND bet = \"n\" "), []);
        case 54:
          _context16.next = 56;
          return _connectDB["default"].execute("SELECT * FROM minutes_1 WHERE status = 0 AND game = '".concat(game, "' "));
        case 56:
          _yield$connection$exe = _context16.sent;
          _yield$connection$exe2 = _slicedToArray(_yield$connection$exe, 1);
          order = _yield$connection$exe2[0];
          i = 0;
        case 60:
          if (!(i < order.length)) {
            _context16.next = 83;
            break;
          }
          orders = order[i];
          _result = orders.result;
          bet = orders.bet;
          total = orders.money;
          id = orders.id;
          phone = orders.phone;
          nhan_duoc = 0; // x - green
          // t - Violet
          // d - red 
          // Sirf 1-4 aur 6-9 tk hi *9 aana chahiye
          // Aur 0 aur 5 pe *4.5
          // Aur red aur green pe *2
          // 1,2,3,4,6,7,8,9
          if (bet == 'l' || bet == 'n') {
            nhan_duoc = total * 2;
          } else {
            if (_result == 0 || _result == 5) {
              if (bet == 'd' || bet == 'x') {
                nhan_duoc = total * 1.5;
              } else if (bet == 't') {
                nhan_duoc = total * 4.5;
              } else if (bet == "0" || bet == "5") {
                nhan_duoc = total * 4.5;
              }
            } else {
              if (_result == 1 && bet == "1") {
                nhan_duoc = total * 9;
              } else {
                if (_result == 1 && bet == 'x') {
                  nhan_duoc = total * 2;
                }
              }
              if (_result == 2 && bet == "2") {
                nhan_duoc = total * 9;
              } else {
                if (_result == 2 && bet == 'd') {
                  nhan_duoc = total * 2;
                }
              }
              if (_result == 3 && bet == "3") {
                nhan_duoc = total * 9;
              } else {
                if (_result == 3 && bet == 'x') {
                  nhan_duoc = total * 2;
                }
              }
              if (_result == 4 && bet == "4") {
                nhan_duoc = total * 9;
              } else {
                if (_result == 4 && bet == 'd') {
                  nhan_duoc = total * 2;
                }
              }
              if (_result == 6 && bet == "6") {
                nhan_duoc = total * 9;
              } else {
                if (_result == 6 && bet == 'd') {
                  nhan_duoc = total * 2;
                }
              }
              if (_result == 7 && bet == "7") {
                nhan_duoc = total * 9;
              } else {
                if (_result == 7 && bet == 'x') {
                  nhan_duoc = total * 2;
                }
              }
              if (_result == 8 && bet == "8") {
                nhan_duoc = total * 9;
              } else {
                if (_result == 8 && bet == 'd') {
                  nhan_duoc = total * 2;
                }
              }
              if (_result == 9 && bet == "9") {
                nhan_duoc = total * 9;
              } else {
                if (_result == 9 && bet == 'x') {
                  nhan_duoc = total * 2;
                }
              }
            }
          }
          _context16.next = 71;
          return _connectDB["default"].execute('SELECT `money` FROM `users` WHERE `phone` = ?', [phone]);
        case 71:
          _yield$connection$exe3 = _context16.sent;
          _yield$connection$exe4 = _slicedToArray(_yield$connection$exe3, 1);
          users = _yield$connection$exe4[0];
          totals = parseFloat(users[0].money) + parseFloat(nhan_duoc);
          _context16.next = 77;
          return _connectDB["default"].execute('UPDATE `minutes_1` SET `get` = ?, `status` = 1 WHERE `id` = ? ', [parseFloat(nhan_duoc), id]);
        case 77:
          sql = 'UPDATE `users` SET `money` = ? WHERE `phone` = ? ';
          _context16.next = 80;
          return _connectDB["default"].execute(sql, [totals, phone]);
        case 80:
          i++;
          _context16.next = 60;
          break;
        case 83:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return function handlingWinGo1P(_x28) {
    return _ref16.apply(this, arguments);
  };
}();

// const winGoController = {
//   trxPage1: async (req, res) => {
//     try {
//       // Fetch data from trx table
//       const [trxgetData] = await pool.execute('SELECT * FROM trx WHERE type = 1 ORDER BY id DESC LIMIT 5');

//       // Render the trx.ejs view with the fetched data
//       res.render('bet/trx', { trxdata: trxgetData });
//     } catch (error) {
//       console.error('Error fetching trx data:', error);
//       res.status(500).send('Error fetching trx data');
//     }
//   },
// };
module.exports = {
  winGoPage: winGoPage,
  betWinGo: betWinGo,
  listOrderOld: listOrderOld,
  GetMyEmerdList: GetMyEmerdList,
  handlingWinGo1P: handlingWinGo1P,
  addWinGo: addWinGo,
  winGoPage3: winGoPage3,
  winGoPage5: winGoPage5,
  winGoPage10: winGoPage10,
  trxPage1: trxPage1,
  trxPage3: trxPage3,
  trxPage5: trxPage5,
  trxPage10: trxPage10,

};