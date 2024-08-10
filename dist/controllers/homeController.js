"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _connectDB = _interopRequireDefault(require("../config/connectDB"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _md = _interopRequireDefault(require("md5"));
var _express = _interopRequireDefault(require("express"));
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
require('dotenv').config();
var homePage = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _yield$connection$que, _yield$connection$que2, settings, app;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _connectDB["default"].query('SELECT `app` FROM admin');
        case 2:
          _yield$connection$que = _context.sent;
          _yield$connection$que2 = _slicedToArray(_yield$connection$que, 1);
          settings = _yield$connection$que2[0];
          app = settings[0].app;
          return _context.abrupt("return", res.render("home/index.ejs", {
            app: app
          }));
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function homePage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var checkInPage = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", res.render("checkIn/checkIn.ejs"));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function checkInPage(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var checkDes = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", res.render("checkIn/checkDes.ejs"));
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function checkDes(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var checkRecord = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", res.render("checkIn/checkRecord.ejs"));
        case 1:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function checkRecord(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var addBank = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          return _context5.abrupt("return", res.render("wallet/addbank.ejs"));
        case 1:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function addBank(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

// promotion
var promotionPage = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          return _context6.abrupt("return", res.render("promotion/promotion.ejs"));
        case 1:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function promotionPage(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var promotionmyTeamPage = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          return _context7.abrupt("return", res.render("promotion/myTeam.ejs"));
        case 1:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function promotionmyTeamPage(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var promotionDesPage = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          return _context8.abrupt("return", res.render("promotion/promotionDes.ejs"));
        case 1:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function promotionDesPage(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var tutorialPage = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          return _context9.abrupt("return", res.render("promotion/tutorial.ejs"));
        case 1:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function tutorialPage(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
var bonusRecordPage = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          return _context10.abrupt("return", res.render("promotion/bonusrecord.ejs"));
        case 1:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function bonusRecordPage(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

// wallet
var walletPage = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          return _context11.abrupt("return", res.render("wallet/index.ejs"));
        case 1:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function walletPage(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
var rechargePage = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          return _context12.abrupt("return", res.render("wallet/recharge.ejs", {
            MinimumMoney: process.env.MINIMUM_MONEY
          }));
        case 1:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return function rechargePage(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
var rechargeGateway = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          return _context13.abrupt("return", res.render("wallet/pay.ejs"));
        case 1:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return function rechargeGateway(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();
var rechargeGateway1 = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          return _context14.abrupt("return", res.render("wallet/pay1.ejs"));
        case 1:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return function rechargeGateway1(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();
var rechargerecordPage = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          return _context15.abrupt("return", res.render("wallet/rechargerecord.ejs"));
        case 1:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return function rechargerecordPage(_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();
var withdrawalPage = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          return _context16.abrupt("return", res.render("wallet/withdrawal.ejs"));
        case 1:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return function withdrawalPage(_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}();
var withdrawalrecordPage = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          return _context17.abrupt("return", res.render("wallet/withdrawalrecord.ejs"));
        case 1:
        case "end":
          return _context17.stop();
      }
    }, _callee17);
  }));
  return function withdrawalrecordPage(_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}();
var transfer = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          return _context18.abrupt("return", res.render("wallet/transfer.ejs"));
        case 1:
        case "end":
          return _context18.stop();
      }
    }, _callee18);
  }));
  return function transfer(_x35, _x36) {
    return _ref18.apply(this, arguments);
  };
}();

// member page
var mianPage = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    var auth, _yield$connection$que3, _yield$connection$que4, user, level;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          auth = req.cookies.auth;
          _context19.next = 3;
          return _connectDB["default"].query('SELECT `level` FROM users WHERE `token` = ? ', [auth]);
        case 3:
          _yield$connection$que3 = _context19.sent;
          _yield$connection$que4 = _slicedToArray(_yield$connection$que3, 1);
          user = _yield$connection$que4[0];
          level = user[0].level;
          return _context19.abrupt("return", res.render("member/index.ejs", {
            level: level
          }));
        case 8:
        case "end":
          return _context19.stop();
      }
    }, _callee19);
  }));
  return function mianPage(_x37, _x38) {
    return _ref19.apply(this, arguments);
  };
}();
var aboutPage = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          return _context20.abrupt("return", res.render("member/about/index.ejs"));
        case 1:
        case "end":
          return _context20.stop();
      }
    }, _callee20);
  }));
  return function aboutPage(_x39, _x40) {
    return _ref20.apply(this, arguments);
  };
}();
var recordsalary = /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res) {
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          return _context21.abrupt("return", res.render("member/about/recordsalary.ejs"));
        case 1:
        case "end":
          return _context21.stop();
      }
    }, _callee21);
  }));
  return function recordsalary(_x41, _x42) {
    return _ref21.apply(this, arguments);
  };
}();
var privacyPolicy = /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res) {
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          return _context22.abrupt("return", res.render("member/about/privacyPolicy.ejs"));
        case 1:
        case "end":
          return _context22.stop();
      }
    }, _callee22);
  }));
  return function privacyPolicy(_x43, _x44) {
    return _ref22.apply(this, arguments);
  };
}();
var newtutorial = /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(req, res) {
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          return _context23.abrupt("return", res.render("member/newtutorial.ejs"));
        case 1:
        case "end":
          return _context23.stop();
      }
    }, _callee23);
  }));
  return function newtutorial(_x45, _x46) {
    return _ref23.apply(this, arguments);
  };
}();
var forgot = /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(req, res) {
    var auth, _yield$connection$que5, _yield$connection$que6, user, time;
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          auth = req.cookies.auth;
          _context24.next = 3;
          return _connectDB["default"].query('SELECT `time_otp` FROM users WHERE token = ? ', [auth]);
        case 3:
          _yield$connection$que5 = _context24.sent;
          _yield$connection$que6 = _slicedToArray(_yield$connection$que5, 1);
          user = _yield$connection$que6[0];
          time = user[0].time_otp;
          return _context24.abrupt("return", res.render("member/forgot.ejs", {
            time: time
          }));
        case 8:
        case "end":
          return _context24.stop();
      }
    }, _callee24);
  }));
  return function forgot(_x47, _x48) {
    return _ref24.apply(this, arguments);
  };
}();
var redenvelopes = /*#__PURE__*/function () {
  var _ref25 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(req, res) {
    return _regeneratorRuntime().wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          return _context25.abrupt("return", res.render("member/redenvelopes.ejs"));
        case 1:
        case "end":
          return _context25.stop();
      }
    }, _callee25);
  }));
  return function redenvelopes(_x49, _x50) {
    return _ref25.apply(this, arguments);
  };
}();
var riskAgreement = /*#__PURE__*/function () {
  var _ref26 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(req, res) {
    return _regeneratorRuntime().wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          return _context26.abrupt("return", res.render("member/about/riskAgreement.ejs"));
        case 1:
        case "end":
          return _context26.stop();
      }
    }, _callee26);
  }));
  return function riskAgreement(_x51, _x52) {
    return _ref26.apply(this, arguments);
  };
}();
var keFuMenu = /*#__PURE__*/function () {
  var _ref27 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(req, res) {
    var auth, _yield$connection$que7, _yield$connection$que8, users, telegram, _yield$connection$que9, _yield$connection$que10, _settings, _yield$connection$que11, _yield$connection$que12, settings, _yield$connection$que13, _yield$connection$que14, check, _yield$connection$que15, _yield$connection$que16, _yield$connection$que17, _yield$connection$que18;
    return _regeneratorRuntime().wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          auth = req.cookies.auth;
          _context27.next = 3;
          return _connectDB["default"].query('SELECT `level`, `ctv` FROM users WHERE token = ?', [auth]);
        case 3:
          _yield$connection$que7 = _context27.sent;
          _yield$connection$que8 = _slicedToArray(_yield$connection$que7, 1);
          users = _yield$connection$que8[0];
          telegram = '';
          if (!(users.length == 0)) {
            _context27.next = 16;
            break;
          }
          _context27.next = 10;
          return _connectDB["default"].query('SELECT `telegram`, `cskh` FROM admin');
        case 10:
          _yield$connection$que9 = _context27.sent;
          _yield$connection$que10 = _slicedToArray(_yield$connection$que9, 1);
          _settings = _yield$connection$que10[0];
          telegram = _settings[0].telegram;
          _context27.next = 43;
          break;
        case 16:
          if (!(users[0].level != 0)) {
            _context27.next = 24;
            break;
          }
          _context27.next = 19;
          return _connectDB["default"].query('SELECT * FROM admin');
        case 19:
          _yield$connection$que11 = _context27.sent;
          _yield$connection$que12 = _slicedToArray(_yield$connection$que11, 1);
          settings = _yield$connection$que12[0];
          _context27.next = 42;
          break;
        case 24:
          _context27.next = 26;
          return _connectDB["default"].query('SELECT `telegram` FROM point_list WHERE phone = ?', [users[0].ctv]);
        case 26:
          _yield$connection$que13 = _context27.sent;
          _yield$connection$que14 = _slicedToArray(_yield$connection$que13, 1);
          check = _yield$connection$que14[0];
          if (!(check.length == 0)) {
            _context27.next = 37;
            break;
          }
          _context27.next = 32;
          return _connectDB["default"].query('SELECT * FROM admin');
        case 32:
          _yield$connection$que15 = _context27.sent;
          _yield$connection$que16 = _slicedToArray(_yield$connection$que15, 1);
          settings = _yield$connection$que16[0];
          _context27.next = 42;
          break;
        case 37:
          _context27.next = 39;
          return _connectDB["default"].query('SELECT `telegram` FROM point_list WHERE phone = ?', [users[0].ctv]);
        case 39:
          _yield$connection$que17 = _context27.sent;
          _yield$connection$que18 = _slicedToArray(_yield$connection$que17, 1);
          settings = _yield$connection$que18[0];
        case 42:
          telegram = settings[0].telegram;
        case 43:
          return _context27.abrupt("return", res.render("keFuMenu.ejs", {
            telegram: telegram
          }));
        case 44:
        case "end":
          return _context27.stop();
      }
    }, _callee27);
  }));
  return function keFuMenu(_x53, _x54) {
    return _ref27.apply(this, arguments);
  };
}();
var myProfilePage = /*#__PURE__*/function () {
  var _ref28 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(req, res) {
    return _regeneratorRuntime().wrap(function _callee28$(_context28) {
      while (1) switch (_context28.prev = _context28.next) {
        case 0:
          return _context28.abrupt("return", res.render("member/myProfile.ejs"));
        case 1:
        case "end":
          return _context28.stop();
      }
    }, _callee28);
  }));
  return function myProfilePage(_x55, _x56) {
    return _ref28.apply(this, arguments);
  };
}();
var getSalaryRecord = /*#__PURE__*/function () {
  var _ref29 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29(req, res) {
    var auth, _yield$connection$que19, _yield$connection$que20, rows, rowstr, _yield$connection$que21, _yield$connection$que22, getPhone;
    return _regeneratorRuntime().wrap(function _callee29$(_context29) {
      while (1) switch (_context29.prev = _context29.next) {
        case 0:
          auth = req.cookies.auth;
          _context29.next = 3;
          return _connectDB["default"].query("SELECT * FROM users WHERE token = ?", [auth]);
        case 3:
          _yield$connection$que19 = _context29.sent;
          _yield$connection$que20 = _slicedToArray(_yield$connection$que19, 1);
          rows = _yield$connection$que20[0];
          rowstr = rows[0];
          if (rows) {
            _context29.next = 9;
            break;
          }
          return _context29.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false
          }));
        case 9:
          _context29.next = 11;
          return _connectDB["default"].query("SELECT * FROM salary WHERE phone = ? ORDER BY time DESC", [rowstr.phone]);
        case 11:
          _yield$connection$que21 = _context29.sent;
          _yield$connection$que22 = _slicedToArray(_yield$connection$que21, 1);
          getPhone = _yield$connection$que22[0];
          console.log("asdasdasd : " + [rows.phone]);
          return _context29.abrupt("return", res.status(200).json({
            message: 'Success',
            status: true,
            data: {},
            rows: getPhone
          }));
        case 16:
        case "end":
          return _context29.stop();
      }
    }, _callee29);
  }));
  return function getSalaryRecord(_x57, _x58) {
    return _ref29.apply(this, arguments);
  };
}();
module.exports = {
  homePage: homePage,
  checkInPage: checkInPage,
  promotionPage: promotionPage,
  walletPage: walletPage,
  mianPage: mianPage,
  myProfilePage: myProfilePage,
  promotionmyTeamPage: promotionmyTeamPage,
  promotionDesPage: promotionDesPage,
  tutorialPage: tutorialPage,
  bonusRecordPage: bonusRecordPage,
  keFuMenu: keFuMenu,
  rechargePage: rechargePage,
  rechargeGateway: rechargeGateway,
  rechargeGateway1: rechargeGateway1,
  rechargerecordPage: rechargerecordPage,
  withdrawalPage: withdrawalPage,
  withdrawalrecordPage: withdrawalrecordPage,
  aboutPage: aboutPage,
  privacyPolicy: privacyPolicy,
  riskAgreement: riskAgreement,
  newtutorial: newtutorial,
  redenvelopes: redenvelopes,
  forgot: forgot,
  checkDes: checkDes,
  checkRecord: checkRecord,
  addBank: addBank,
  transfer: transfer,
  recordsalary: recordsalary,
  getSalaryRecord: getSalaryRecord
};