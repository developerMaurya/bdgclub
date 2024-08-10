"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _connectDB = _interopRequireDefault(require("../config/connectDB"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _md = _interopRequireDefault(require("md5"));
var _excluded = ["token", "password", "otp", "level"],
  _excluded2 = ["token", "password", "otp", "level"],
  _excluded3 = ["token", "password", "otp", "level"],
  _excluded4 = ["token", "password", "otp", "level"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
var adminPage = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", res.render("manage/index.ejs"));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function adminPage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var trxAdminPage = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", res.render("views/manage/trx.ejs"));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function trxAdminPage(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var adminPage3 = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", res.render("manage/a-index-bet/index3.ejs"));
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function adminPage3(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var adminPage5 = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", res.render("manage/a-index-bet/index5.ejs"));
        case 1:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function adminPage5(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var adminPage10 = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          return _context5.abrupt("return", res.render("manage/a-index-bet/index10.ejs"));
        case 1:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function adminPage10(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var adminPage5d = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          return _context6.abrupt("return", res.render("manage/5d.ejs"));
        case 1:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function adminPage5d(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var adminPageK3 = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          return _context7.abrupt("return", res.render("manage/k3.ejs"));
        case 1:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function adminPageK3(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var ctvProfilePage = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var phone;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          phone = req.params.phone;
          return _context8.abrupt("return", res.render("manage/profileCTV.ejs", {
            phone: phone
          }));
        case 2:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function ctvProfilePage(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var giftPage = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          return _context9.abrupt("return", res.render("manage/giftPage.ejs"));
        case 1:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function giftPage(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
var membersPage = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          return _context10.abrupt("return", res.render("manage/members.ejs"));
        case 1:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function membersPage(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
var ctvPage = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          return _context11.abrupt("return", res.render("manage/ctv.ejs"));
        case 1:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function ctvPage(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
var infoMember = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var phone;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          phone = req.params.id;
          return _context12.abrupt("return", res.render("manage/profileMember.ejs", {
            phone: phone
          }));
        case 2:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return function infoMember(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
var statistical = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          return _context13.abrupt("return", res.render("manage/statistical.ejs"));
        case 1:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return function statistical(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();
var rechargePage = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          return _context14.abrupt("return", res.render("manage/recharge.ejs"));
        case 1:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return function rechargePage(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();
var rechargeRecord = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          return _context15.abrupt("return", res.render("manage/rechargeRecord.ejs"));
        case 1:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return function rechargeRecord(_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();
var withdraw = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          return _context16.abrupt("return", res.render("manage/withdraw.ejs"));
        case 1:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return function withdraw(_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}();
var levelSetting = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          return _context17.abrupt("return", res.render("manage/levelSetting.ejs"));
        case 1:
        case "end":
          return _context17.stop();
      }
    }, _callee17);
  }));
  return function levelSetting(_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}();
var CreatedSalaryRecord = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          return _context18.abrupt("return", res.render("manage/CreatedSalaryRecord.ejs"));
        case 1:
        case "end":
          return _context18.stop();
      }
    }, _callee18);
  }));
  return function CreatedSalaryRecord(_x35, _x36) {
    return _ref18.apply(this, arguments);
  };
}();
var withdrawRecord = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          return _context19.abrupt("return", res.render("manage/withdrawRecord.ejs"));
        case 1:
        case "end":
          return _context19.stop();
      }
    }, _callee19);
  }));
  return function withdrawRecord(_x37, _x38) {
    return _ref19.apply(this, arguments);
  };
}();
var settings = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          return _context20.abrupt("return", res.render("manage/settings.ejs"));
        case 1:
        case "end":
          return _context20.stop();
      }
    }, _callee20);
  }));
  return function settings(_x39, _x40) {
    return _ref20.apply(this, arguments);
  };
}();

// xác nhận admin
var middlewareAdminController = /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res, next) {
    var auth, _yield$connection$exe, _yield$connection$exe2, rows;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          // xác nhận token
          auth = req.cookies.auth;
          if (auth) {
            _context21.next = 3;
            break;
          }
          return _context21.abrupt("return", res.redirect("/login"));
        case 3:
          _context21.next = 5;
          return _connectDB["default"].execute('SELECT `token`,`level`, `status` FROM `users` WHERE `token` = ? AND veri = 1', [auth]);
        case 5:
          _yield$connection$exe = _context21.sent;
          _yield$connection$exe2 = _slicedToArray(_yield$connection$exe, 1);
          rows = _yield$connection$exe2[0];
          if (rows) {
            _context21.next = 10;
            break;
          }
          return _context21.abrupt("return", res.redirect("/login"));
        case 10:
          _context21.prev = 10;
          if (!(auth == rows[0].token && rows[0].status == 1)) {
            _context21.next = 19;
            break;
          }
          if (!(rows[0].level == 1)) {
            _context21.next = 16;
            break;
          }
          next();
          _context21.next = 17;
          break;
        case 16:
          return _context21.abrupt("return", res.redirect("/home"));
        case 17:
          _context21.next = 20;
          break;
        case 19:
          return _context21.abrupt("return", res.redirect("/login"));
        case 20:
          _context21.next = 25;
          break;
        case 22:
          _context21.prev = 22;
          _context21.t0 = _context21["catch"](10);
          return _context21.abrupt("return", res.redirect("/login"));
        case 25:
        case "end":
          return _context21.stop();
      }
    }, _callee21, null, [[10, 22]]);
  }));
  return function middlewareAdminController(_x41, _x42, _x43) {
    return _ref21.apply(this, arguments);
  };
}();
var totalJoin = /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res) {
    var auth, typeid, game, _yield$connection$que, _yield$connection$que2, rows, _yield$connection$que3, _yield$connection$que4, wingoall, _yield$connection$exe3, _yield$connection$exe4, winGo1, _yield$connection$exe5, _yield$connection$exe6, winGo10, _yield$connection$exe7, _yield$connection$exe8, setting;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          auth = req.cookies.auth;
          typeid = req.body.typeid;
          if (typeid) {
            _context22.next = 4;
            break;
          }
          return _context22.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 4:
          game = '';
          if (typeid == '1') game = 'wingo';
          if (typeid == '2') game = 'wingo3';
          if (typeid == '3') game = 'wingo5';
          if (typeid == '4') game = 'wingo10';
          _context22.next = 11;
          return _connectDB["default"].query('SELECT * FROM users WHERE `token` = ? ', [auth]);
        case 11:
          _yield$connection$que = _context22.sent;
          _yield$connection$que2 = _slicedToArray(_yield$connection$que, 1);
          rows = _yield$connection$que2[0];
          if (!(rows.length > 0)) {
            _context22.next = 38;
            break;
          }
          _context22.next = 17;
          return _connectDB["default"].query("SELECT * FROM minutes_1 WHERE game = \"".concat(game, "\" AND status = 0 AND level = 0 ORDER BY id ASC "), [auth]);
        case 17:
          _yield$connection$que3 = _context22.sent;
          _yield$connection$que4 = _slicedToArray(_yield$connection$que3, 1);
          wingoall = _yield$connection$que4[0];
          _context22.next = 22;
          return _connectDB["default"].execute("SELECT * FROM wingo WHERE status = 0 AND game = '".concat(game, "' ORDER BY id DESC LIMIT 1 "), []);
        case 22:
          _yield$connection$exe3 = _context22.sent;
          _yield$connection$exe4 = _slicedToArray(_yield$connection$exe3, 1);
          winGo1 = _yield$connection$exe4[0];
          _context22.next = 27;
          return _connectDB["default"].execute("SELECT * FROM wingo WHERE status != 0 AND game = '".concat(game, "' ORDER BY id DESC LIMIT 10 "), []);
        case 27:
          _yield$connection$exe5 = _context22.sent;
          _yield$connection$exe6 = _slicedToArray(_yield$connection$exe5, 1);
          winGo10 = _yield$connection$exe6[0];
          _context22.next = 32;
          return _connectDB["default"].execute("SELECT * FROM admin ", []);
        case 32:
          _yield$connection$exe7 = _context22.sent;
          _yield$connection$exe8 = _slicedToArray(_yield$connection$exe7, 1);
          setting = _yield$connection$exe8[0];
          return _context22.abrupt("return", res.status(200).json({
            message: 'Success',
            status: true,
            datas: wingoall,
            lotterys: winGo1,
            list_orders: winGo10,
            setting: setting,
            timeStamp: timeNow
          }));
        case 38:
          return _context22.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 39:
        case "end":
          return _context22.stop();
      }
    }, _callee22);
  }));
  return function totalJoin(_x44, _x45) {
    return _ref22.apply(this, arguments);
  };
}();
var listMember = /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(req, res) {
    var _req$body, pageno, limit, _yield$connection$que5, _yield$connection$que6, users, _yield$connection$que7, _yield$connection$que8, total_users;
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          _req$body = req.body, pageno = _req$body.pageno, limit = _req$body.limit;
          if (!(!pageno || !limit)) {
            _context23.next = 3;
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
        case 3:
          if (!(pageno < 0 || limit < 0)) {
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
          _context23.next = 7;
          return _connectDB["default"].query("SELECT * FROM users WHERE veri = 1 AND level != 2 ORDER BY id DESC LIMIT ".concat(pageno, ", ").concat(limit, " "));
        case 7:
          _yield$connection$que5 = _context23.sent;
          _yield$connection$que6 = _slicedToArray(_yield$connection$que5, 1);
          users = _yield$connection$que6[0];
          _context23.next = 12;
          return _connectDB["default"].query("SELECT * FROM users WHERE veri = 1 AND level != 2");
        case 12:
          _yield$connection$que7 = _context23.sent;
          _yield$connection$que8 = _slicedToArray(_yield$connection$que7, 1);
          total_users = _yield$connection$que8[0];
          return _context23.abrupt("return", res.status(200).json({
            message: 'Success',
            status: true,
            datas: users,
            page_total: Math.ceil(total_users.length / limit)
          }));
        case 16:
        case "end":
          return _context23.stop();
      }
    }, _callee23);
  }));
  return function listMember(_x46, _x47) {
    return _ref23.apply(this, arguments);
  };
}();
var listCTV = /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(req, res) {
    var _req$body2, pageno, pageto, _yield$connection$que9, _yield$connection$que10, wingo;
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          _req$body2 = req.body, pageno = _req$body2.pageno, pageto = _req$body2.pageto;
          if (!(!pageno || !pageto)) {
            _context24.next = 3;
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
        case 3:
          if (!(pageno < 0 || pageto < 0)) {
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
          _context24.next = 7;
          return _connectDB["default"].query("SELECT * FROM users WHERE veri = 1 AND level = 2 ORDER BY id DESC LIMIT ".concat(pageno, ", ").concat(pageto, " "));
        case 7:
          _yield$connection$que9 = _context24.sent;
          _yield$connection$que10 = _slicedToArray(_yield$connection$que9, 1);
          wingo = _yield$connection$que10[0];
          return _context24.abrupt("return", res.status(200).json({
            message: 'Success',
            status: true,
            datas: wingo
          }));
        case 11:
        case "end":
          return _context24.stop();
      }
    }, _callee24);
  }));
  return function listCTV(_x48, _x49) {
    return _ref24.apply(this, arguments);
  };
}();
function formateT2(params) {
  var result = params < 10 ? "0" + params : params;
  return result;
}
function timerJoin2() {
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
var statistical2 = /*#__PURE__*/function () {
  var _ref25 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(req, res) {
    var _yield$connection$que11, _yield$connection$que12, wingo, _yield$connection$que13, _yield$connection$que14, wingo2, _yield$connection$que15, _yield$connection$que16, users, _yield$connection$que17, _yield$connection$que18, users2, _yield$connection$que19, _yield$connection$que20, recharge, _yield$connection$que21, _yield$connection$que22, withdraw, _yield$connection$que23, _yield$connection$que24, recharge_today, _yield$connection$que25, _yield$connection$que26, withdraw_today, win, loss, usersOnline, usersOffline, recharges, withdraws;
    return _regeneratorRuntime().wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          _context25.next = 2;
          return _connectDB["default"].query("SELECT SUM(money) as total FROM minutes_1 WHERE status = 1 ");
        case 2:
          _yield$connection$que11 = _context25.sent;
          _yield$connection$que12 = _slicedToArray(_yield$connection$que11, 1);
          wingo = _yield$connection$que12[0];
          _context25.next = 7;
          return _connectDB["default"].query("SELECT SUM(money) as total FROM minutes_1 WHERE status = 2 ");
        case 7:
          _yield$connection$que13 = _context25.sent;
          _yield$connection$que14 = _slicedToArray(_yield$connection$que13, 1);
          wingo2 = _yield$connection$que14[0];
          _context25.next = 12;
          return _connectDB["default"].query("SELECT COUNT(id) as total FROM users WHERE status = 1 ");
        case 12:
          _yield$connection$que15 = _context25.sent;
          _yield$connection$que16 = _slicedToArray(_yield$connection$que15, 1);
          users = _yield$connection$que16[0];
          _context25.next = 17;
          return _connectDB["default"].query("SELECT COUNT(id) as total FROM users WHERE status = 0 ");
        case 17:
          _yield$connection$que17 = _context25.sent;
          _yield$connection$que18 = _slicedToArray(_yield$connection$que17, 1);
          users2 = _yield$connection$que18[0];
          _context25.next = 22;
          return _connectDB["default"].query("SELECT SUM(money) as total FROM recharge WHERE status = 1 ");
        case 22:
          _yield$connection$que19 = _context25.sent;
          _yield$connection$que20 = _slicedToArray(_yield$connection$que19, 1);
          recharge = _yield$connection$que20[0];
          _context25.next = 27;
          return _connectDB["default"].query("SELECT SUM(money) as total FROM withdraw WHERE status = 1 ");
        case 27:
          _yield$connection$que21 = _context25.sent;
          _yield$connection$que22 = _slicedToArray(_yield$connection$que21, 1);
          withdraw = _yield$connection$que22[0];
          _context25.next = 32;
          return _connectDB["default"].query("SELECT SUM(money) as total FROM recharge WHERE status = 1 AND today = ?", [timerJoin2()]);
        case 32:
          _yield$connection$que23 = _context25.sent;
          _yield$connection$que24 = _slicedToArray(_yield$connection$que23, 1);
          recharge_today = _yield$connection$que24[0];
          _context25.next = 37;
          return _connectDB["default"].query("SELECT SUM(money) as total FROM withdraw WHERE status = 1 AND today = ?", [timerJoin2()]);
        case 37:
          _yield$connection$que25 = _context25.sent;
          _yield$connection$que26 = _slicedToArray(_yield$connection$que25, 1);
          withdraw_today = _yield$connection$que26[0];
          win = wingo[0].total;
          loss = wingo2[0].total;
          usersOnline = users[0].total;
          usersOffline = users2[0].total;
          recharges = recharge[0].total;
          withdraws = withdraw[0].total;
          return _context25.abrupt("return", res.status(200).json({
            message: 'Success',
            status: true,
            win: win,
            loss: loss,
            usersOnline: usersOnline,
            usersOffline: usersOffline,
            recharges: recharges,
            withdraws: withdraws,
            rechargeToday: recharge_today[0].total,
            withdrawToday: withdraw_today[0].total
          }));
        case 47:
        case "end":
          return _context25.stop();
      }
    }, _callee25);
  }));
  return function statistical2(_x50, _x51) {
    return _ref25.apply(this, arguments);
  };
}();
var changeAdmin = /*#__PURE__*/function () {
  var _ref26 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(req, res) {
    var auth, value, type, typeid, game, bs;
    return _regeneratorRuntime().wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          auth = req.cookies.auth;
          value = req.body.value;
          type = req.body.type;
          typeid = req.body.typeid;
          if (!(!value || !type || !typeid)) {
            _context26.next = 6;
            break;
          }
          return _context26.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 6:
          ;
          game = '';
          bs = '';
          if (typeid == '1') {
            game = 'wingo1';
            bs = 'bs1';
          }
          if (typeid == '2') {
            game = 'wingo3';
            bs = 'bs3';
          }
          if (typeid == '3') {
            game = 'wingo5';
            bs = 'bs5';
          }
          if (typeid == '4') {
            game = 'wingo10';
            bs = 'bs10';
          }
          _context26.t0 = type;
          _context26.next = _context26.t0 === 'change-wingo1' ? 16 : _context26.t0 === 'change-win_rate' ? 20 : 24;
          break;
        case 16:
          _context26.next = 18;
          return _connectDB["default"].query("UPDATE admin SET ".concat(game, " = ? "), [value]);
        case 18:
          return _context26.abrupt("return", res.status(200).json({
            message: 'Editing results successfully',
            status: true,
            timeStamp: timeNow
          }));
        case 20:
          _context26.next = 22;
          return _connectDB["default"].query("UPDATE admin SET ".concat(bs, " = ? "), [value]);
        case 22:
          return _context26.abrupt("return", res.status(200).json({
            message: 'Editing win rate successfully',
            status: true,
            timeStamp: timeNow
          }));
        case 24:
          return _context26.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 26:
        case "end":
          return _context26.stop();
      }
    }, _callee26);
  }));
  return function changeAdmin(_x52, _x53) {
    return _ref26.apply(this, arguments);
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
  var _ref27 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(req, res) {
    var auth, phone, _yield$connection$que27, _yield$connection$que28, user, userInfo, _yield$connection$que29, _yield$connection$que30, f1s, f1_today, i, f1_time, check, f_all_today, _i, f1_code, _f1_time, check_f1, _yield$connection$que31, _yield$connection$que32, f2s, _i2, f2_code, f2_time, check_f2, _yield$connection$que33, _yield$connection$que34, f3s, _i3, f3_code, f3_time, check_f3, _yield$connection$que35, _yield$connection$que36, f4s, _i4, f4_code, f4_time, check_f4, f2, _i5, _f1_code, _yield$connection$que37, _yield$connection$que38, _f2s, f3, _i6, _f1_code2, _yield$connection$que39, _yield$connection$que40, _f2s2, _i7, _f2_code, _yield$connection$que41, _yield$connection$que42, _f3s, f4, _i8, _f1_code3, _yield$connection$que43, _yield$connection$que44, _f2s3, _i9, _f2_code2, _yield$connection$que45, _yield$connection$que46, _f3s2, _i10, _f3_code, _yield$connection$que47, _yield$connection$que48, _f4s, _yield$connection$que49, _yield$connection$que50, recharge, _yield$connection$que51, _yield$connection$que52, withdraw, _yield$connection$que53, _yield$connection$que54, bank_user, _yield$connection$que55, _yield$connection$que56, telegram_ctv, _yield$connection$que57, _yield$connection$que58, ng_moi;
    return _regeneratorRuntime().wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          auth = req.cookies.auth;
          phone = req.body.phone;
          if (phone) {
            _context27.next = 4;
            break;
          }
          return _context27.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 4:
          _context27.next = 6;
          return _connectDB["default"].query('SELECT * FROM users WHERE phone = ? ', [phone]);
        case 6:
          _yield$connection$que27 = _context27.sent;
          _yield$connection$que28 = _slicedToArray(_yield$connection$que27, 1);
          user = _yield$connection$que28[0];
          if (!(user.length == 0)) {
            _context27.next = 11;
            break;
          }
          return _context27.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 11:
          userInfo = user[0]; // direct subordinate all
          _context27.next = 14;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ', [userInfo.code]);
        case 14:
          _yield$connection$que29 = _context27.sent;
          _yield$connection$que30 = _slicedToArray(_yield$connection$que29, 1);
          f1s = _yield$connection$que30[0];
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
        case 21:
          if (!(_i < f1s.length)) {
            _context27.next = 63;
            break;
          }
          f1_code = f1s[_i].code; // Mã giới thiệu f1
          _f1_time = f1s[_i].time; // time f1
          check_f1 = timerJoin(_f1_time) == timerJoin() ? true : false;
          if (check_f1) f_all_today += 1;
          // tổng f1 mời đc hôm nay
          _context27.next = 28;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ', [f1_code]);
        case 28:
          _yield$connection$que31 = _context27.sent;
          _yield$connection$que32 = _slicedToArray(_yield$connection$que31, 1);
          f2s = _yield$connection$que32[0];
          _i2 = 0;
        case 32:
          if (!(_i2 < f2s.length)) {
            _context27.next = 60;
            break;
          }
          f2_code = f2s[_i2].code; // Mã giới thiệu f2
          f2_time = f2s[_i2].time; // time f2
          check_f2 = timerJoin(f2_time) == timerJoin() ? true : false;
          if (check_f2) f_all_today += 1;
          // tổng f2 mời đc hôm nay
          _context27.next = 39;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ', [f2_code]);
        case 39:
          _yield$connection$que33 = _context27.sent;
          _yield$connection$que34 = _slicedToArray(_yield$connection$que33, 1);
          f3s = _yield$connection$que34[0];
          _i3 = 0;
        case 43:
          if (!(_i3 < f3s.length)) {
            _context27.next = 57;
            break;
          }
          f3_code = f3s[_i3].code; // Mã giới thiệu f3
          f3_time = f3s[_i3].time; // time f3
          check_f3 = timerJoin(f3_time) == timerJoin() ? true : false;
          if (check_f3) f_all_today += 1;
          _context27.next = 50;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ', [f3_code]);
        case 50:
          _yield$connection$que35 = _context27.sent;
          _yield$connection$que36 = _slicedToArray(_yield$connection$que35, 1);
          f4s = _yield$connection$que36[0];
          // tổng f3 mời đc hôm nay
          for (_i4 = 0; _i4 < f4s.length; _i4++) {
            f4_code = f4s[_i4].code; // Mã giới thiệu f4
            f4_time = f4s[_i4].time; // time f4
            check_f4 = timerJoin(f4_time) == timerJoin() ? true : false;
            if (check_f4) f_all_today += 1;
            // tổng f3 mời đc hôm nay
          }
        case 54:
          _i3++;
          _context27.next = 43;
          break;
        case 57:
          _i2++;
          _context27.next = 32;
          break;
        case 60:
          _i++;
          _context27.next = 21;
          break;
        case 63:
          // Tổng số f2
          f2 = 0;
          _i5 = 0;
        case 65:
          if (!(_i5 < f1s.length)) {
            _context27.next = 76;
            break;
          }
          _f1_code = f1s[_i5].code; // Mã giới thiệu f1
          _context27.next = 69;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f1_code]);
        case 69:
          _yield$connection$que37 = _context27.sent;
          _yield$connection$que38 = _slicedToArray(_yield$connection$que37, 1);
          _f2s = _yield$connection$que38[0];
          f2 += _f2s.length;
        case 73:
          _i5++;
          _context27.next = 65;
          break;
        case 76:
          // Tổng số f3
          f3 = 0;
          _i6 = 0;
        case 78:
          if (!(_i6 < f1s.length)) {
            _context27.next = 100;
            break;
          }
          _f1_code2 = f1s[_i6].code; // Mã giới thiệu f1
          _context27.next = 82;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f1_code2]);
        case 82:
          _yield$connection$que39 = _context27.sent;
          _yield$connection$que40 = _slicedToArray(_yield$connection$que39, 1);
          _f2s2 = _yield$connection$que40[0];
          _i7 = 0;
        case 86:
          if (!(_i7 < _f2s2.length)) {
            _context27.next = 97;
            break;
          }
          _f2_code = _f2s2[_i7].code;
          _context27.next = 90;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f2_code]);
        case 90:
          _yield$connection$que41 = _context27.sent;
          _yield$connection$que42 = _slicedToArray(_yield$connection$que41, 1);
          _f3s = _yield$connection$que42[0];
          if (_f3s.length > 0) f3 += _f3s.length;
        case 94:
          _i7++;
          _context27.next = 86;
          break;
        case 97:
          _i6++;
          _context27.next = 78;
          break;
        case 100:
          // Tổng số f4
          f4 = 0;
          _i8 = 0;
        case 102:
          if (!(_i8 < f1s.length)) {
            _context27.next = 135;
            break;
          }
          _f1_code3 = f1s[_i8].code; // Mã giới thiệu f1
          _context27.next = 106;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f1_code3]);
        case 106:
          _yield$connection$que43 = _context27.sent;
          _yield$connection$que44 = _slicedToArray(_yield$connection$que43, 1);
          _f2s3 = _yield$connection$que44[0];
          _i9 = 0;
        case 110:
          if (!(_i9 < _f2s3.length)) {
            _context27.next = 132;
            break;
          }
          _f2_code2 = _f2s3[_i9].code;
          _context27.next = 114;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f2_code2]);
        case 114:
          _yield$connection$que45 = _context27.sent;
          _yield$connection$que46 = _slicedToArray(_yield$connection$que45, 1);
          _f3s2 = _yield$connection$que46[0];
          _i10 = 0;
        case 118:
          if (!(_i10 < _f3s2.length)) {
            _context27.next = 129;
            break;
          }
          _f3_code = _f3s2[_i10].code;
          _context27.next = 122;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f3_code]);
        case 122:
          _yield$connection$que47 = _context27.sent;
          _yield$connection$que48 = _slicedToArray(_yield$connection$que47, 1);
          _f4s = _yield$connection$que48[0];
          if (_f4s.length > 0) f4 += _f4s.length;
        case 126:
          _i10++;
          _context27.next = 118;
          break;
        case 129:
          _i9++;
          _context27.next = 110;
          break;
        case 132:
          _i8++;
          _context27.next = 102;
          break;
        case 135:
          _context27.next = 137;
          return _connectDB["default"].query('SELECT SUM(`money`) as total FROM recharge WHERE phone = ? AND status = 1 ', [phone]);
        case 137:
          _yield$connection$que49 = _context27.sent;
          _yield$connection$que50 = _slicedToArray(_yield$connection$que49, 1);
          recharge = _yield$connection$que50[0];
          _context27.next = 142;
          return _connectDB["default"].query('SELECT SUM(`money`) as total FROM withdraw WHERE phone = ? AND status = 1 ', [phone]);
        case 142:
          _yield$connection$que51 = _context27.sent;
          _yield$connection$que52 = _slicedToArray(_yield$connection$que51, 1);
          withdraw = _yield$connection$que52[0];
          _context27.next = 147;
          return _connectDB["default"].query('SELECT * FROM user_bank WHERE phone = ? ', [phone]);
        case 147:
          _yield$connection$que53 = _context27.sent;
          _yield$connection$que54 = _slicedToArray(_yield$connection$que53, 1);
          bank_user = _yield$connection$que54[0];
          _context27.next = 152;
          return _connectDB["default"].query('SELECT `telegram` FROM point_list WHERE phone = ? ', [userInfo.ctv]);
        case 152:
          _yield$connection$que55 = _context27.sent;
          _yield$connection$que56 = _slicedToArray(_yield$connection$que55, 1);
          telegram_ctv = _yield$connection$que56[0];
          _context27.next = 157;
          return _connectDB["default"].query('SELECT `phone` FROM users WHERE code = ? ', [userInfo.invite]);
        case 157:
          _yield$connection$que57 = _context27.sent;
          _yield$connection$que58 = _slicedToArray(_yield$connection$que57, 1);
          ng_moi = _yield$connection$que58[0];
          return _context27.abrupt("return", res.status(200).json({
            message: 'Success',
            status: true,
            datas: user,
            total_r: recharge,
            total_w: withdraw,
            f1: f1s.length,
            f2: f2,
            f3: f3,
            f4: f4,
            bank_user: bank_user,
            telegram: telegram_ctv[0],
            ng_moi: ng_moi[0],
            daily: userInfo.ctv
          }));
        case 161:
        case "end":
          return _context27.stop();
      }
    }, _callee27);
  }));
  return function userInfo(_x54, _x55) {
    return _ref27.apply(this, arguments);
  };
}();
var recharge = /*#__PURE__*/function () {
  var _ref28 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(req, res) {
    var auth, _yield$connection$que59, _yield$connection$que60, recharge, _yield$connection$que61, _yield$connection$que62, recharge2, _yield$connection$que63, _yield$connection$que64, withdraw, _yield$connection$que65, _yield$connection$que66, withdraw2;
    return _regeneratorRuntime().wrap(function _callee28$(_context28) {
      while (1) switch (_context28.prev = _context28.next) {
        case 0:
          auth = req.cookies.auth;
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
          return _connectDB["default"].query('SELECT * FROM recharge WHERE status = 0 ');
        case 5:
          _yield$connection$que59 = _context28.sent;
          _yield$connection$que60 = _slicedToArray(_yield$connection$que59, 1);
          recharge = _yield$connection$que60[0];
          _context28.next = 10;
          return _connectDB["default"].query('SELECT * FROM recharge WHERE status != 0 ');
        case 10:
          _yield$connection$que61 = _context28.sent;
          _yield$connection$que62 = _slicedToArray(_yield$connection$que61, 1);
          recharge2 = _yield$connection$que62[0];
          _context28.next = 15;
          return _connectDB["default"].query('SELECT * FROM withdraw WHERE status = 0 ');
        case 15:
          _yield$connection$que63 = _context28.sent;
          _yield$connection$que64 = _slicedToArray(_yield$connection$que63, 1);
          withdraw = _yield$connection$que64[0];
          _context28.next = 20;
          return _connectDB["default"].query('SELECT * FROM withdraw WHERE status != 0 ');
        case 20:
          _yield$connection$que65 = _context28.sent;
          _yield$connection$que66 = _slicedToArray(_yield$connection$que65, 1);
          withdraw2 = _yield$connection$que66[0];
          return _context28.abrupt("return", res.status(200).json({
            message: 'Success',
            status: true,
            datas: recharge,
            datas2: recharge2,
            datas3: withdraw,
            datas4: withdraw2
          }));
        case 24:
        case "end":
          return _context28.stop();
      }
    }, _callee28);
  }));
  return function recharge(_x56, _x57) {
    return _ref28.apply(this, arguments);
  };
}();
var settingGet = /*#__PURE__*/function () {
  var _ref29 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29(req, res) {
    var _bank_recharge_momo_d, _bank_recharge_momo_d2, _bank_recharge_momo_d3, _bank_recharge_momo_d4, auth, _yield$connection$que67, _yield$connection$que68, bank_recharge, _yield$connection$que69, _yield$connection$que70, bank_recharge_momo, _yield$connection$que71, _yield$connection$que72, _settings, bank_recharge_momo_data;
    return _regeneratorRuntime().wrap(function _callee29$(_context29) {
      while (1) switch (_context29.prev = _context29.next) {
        case 0:
          _context29.prev = 0;
          auth = req.cookies.auth;
          if (auth) {
            _context29.next = 4;
            break;
          }
          return _context29.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 4:
          _context29.next = 6;
          return _connectDB["default"].query("SELECT * FROM bank_recharge");
        case 6:
          _yield$connection$que67 = _context29.sent;
          _yield$connection$que68 = _slicedToArray(_yield$connection$que67, 1);
          bank_recharge = _yield$connection$que68[0];
          _context29.next = 11;
          return _connectDB["default"].query("SELECT * FROM bank_recharge WHERE type = 'momo'");
        case 11:
          _yield$connection$que69 = _context29.sent;
          _yield$connection$que70 = _slicedToArray(_yield$connection$que69, 1);
          bank_recharge_momo = _yield$connection$que70[0];
          _context29.next = 16;
          return _connectDB["default"].query('SELECT * FROM admin ');
        case 16:
          _yield$connection$que71 = _context29.sent;
          _yield$connection$que72 = _slicedToArray(_yield$connection$que71, 1);
          _settings = _yield$connection$que72[0];
          if (bank_recharge_momo.length) {
            bank_recharge_momo_data = bank_recharge_momo[0];
          }
          return _context29.abrupt("return", res.status(200).json({
            message: 'Success',
            status: true,
            settings: _settings,
            datas: bank_recharge,
            momo: {
              bank_name: ((_bank_recharge_momo_d = bank_recharge_momo_data) === null || _bank_recharge_momo_d === void 0 ? void 0 : _bank_recharge_momo_d.name_bank) || "",
              username: ((_bank_recharge_momo_d2 = bank_recharge_momo_data) === null || _bank_recharge_momo_d2 === void 0 ? void 0 : _bank_recharge_momo_d2.name_user) || "",
              upi_id: ((_bank_recharge_momo_d3 = bank_recharge_momo_data) === null || _bank_recharge_momo_d3 === void 0 ? void 0 : _bank_recharge_momo_d3.stk) || "",
              usdt_wallet_address: ((_bank_recharge_momo_d4 = bank_recharge_momo_data) === null || _bank_recharge_momo_d4 === void 0 ? void 0 : _bank_recharge_momo_d4.qr_code_image) || ""
            }
          }));
        case 23:
          _context29.prev = 23;
          _context29.t0 = _context29["catch"](0);
          console.log(_context29.t0);
          return _context29.abrupt("return", res.status(500).json({
            message: 'Failed',
            status: false
          }));
        case 27:
        case "end":
          return _context29.stop();
      }
    }, _callee29, null, [[0, 23]]);
  }));
  return function settingGet(_x58, _x59) {
    return _ref29.apply(this, arguments);
  };
}();
var rechargeDuyet = /*#__PURE__*/function () {
  var _ref30 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee30(req, res) {
    var auth, id, type, _yield$connection$que73, _yield$connection$que74, info;
    return _regeneratorRuntime().wrap(function _callee30$(_context30) {
      while (1) switch (_context30.prev = _context30.next) {
        case 0:
          auth = req.cookies.auth;
          id = req.body.id;
          type = req.body.type;
          if (!(!auth || !id || !type)) {
            _context30.next = 5;
            break;
          }
          return _context30.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 5:
          if (!(type == 'confirm')) {
            _context30.next = 16;
            break;
          }
          _context30.next = 8;
          return _connectDB["default"].query("UPDATE recharge SET status = 1 WHERE id = ?", [id]);
        case 8:
          _context30.next = 10;
          return _connectDB["default"].query("SELECT * FROM recharge WHERE id = ?", [id]);
        case 10:
          _yield$connection$que73 = _context30.sent;
          _yield$connection$que74 = _slicedToArray(_yield$connection$que73, 1);
          info = _yield$connection$que74[0];
          _context30.next = 15;
          return _connectDB["default"].query('UPDATE users SET money = money + ?, total_money = total_money + ? WHERE phone = ? ', [info[0].money, info[0].money, info[0].phone]);
        case 15:
          return _context30.abrupt("return", res.status(200).json({
            message: 'Successful application confirmation',
            status: true,
            datas: recharge
          }));
        case 16:
          if (!(type == 'delete')) {
            _context30.next = 20;
            break;
          }
          _context30.next = 19;
          return _connectDB["default"].query("UPDATE recharge SET status = 2 WHERE id = ?", [id]);
        case 19:
          return _context30.abrupt("return", res.status(200).json({
            message: 'Cancellation successful',
            status: true,
            datas: recharge
          }));
        case 20:
        case "end":
          return _context30.stop();
      }
    }, _callee30);
  }));
  return function rechargeDuyet(_x60, _x61) {
    return _ref30.apply(this, arguments);
  };
}();
var updateLevel = /*#__PURE__*/function () {
  var _ref31 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee31(req, res) {
    var id, f1, f2, f3, f4;
    return _regeneratorRuntime().wrap(function _callee31$(_context31) {
      while (1) switch (_context31.prev = _context31.next) {
        case 0:
          _context31.prev = 0;
          id = req.body.id;
          f1 = req.body.f1;
          f2 = req.body.f2;
          f3 = req.body.f3;
          f4 = req.body.f4;
          console.log("level : " + id, f1, f2, f3, f4);
          _context31.next = 9;
          return _connectDB["default"].query('UPDATE `level` SET `f1`= ? ,`f2`= ? ,`f3`= ? ,`f4`= ?  WHERE `id` = ?', [f1, f2, f3, f4, id]);
        case 9:
          // Send a success response to the client
          res.status(200).json({
            message: 'Update successful',
            status: true
          });
          _context31.next = 16;
          break;
        case 12:
          _context31.prev = 12;
          _context31.t0 = _context31["catch"](0);
          console.error('Error updating level:', _context31.t0);

          // Send an error response to the client
          res.status(500).json({
            message: 'Update failed',
            status: false,
            error: _context31.t0.message
          });
        case 16:
        case "end":
          return _context31.stop();
      }
    }, _callee31, null, [[0, 12]]);
  }));
  return function updateLevel(_x62, _x63) {
    return _ref31.apply(this, arguments);
  };
}();
var handlWithdraw = /*#__PURE__*/function () {
  var _ref32 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee32(req, res) {
    var auth, id, type, _yield$connection$que75, _yield$connection$que76, info, _yield$connection$que77, _yield$connection$que78, _info;
    return _regeneratorRuntime().wrap(function _callee32$(_context32) {
      while (1) switch (_context32.prev = _context32.next) {
        case 0:
          auth = req.cookies.auth;
          id = req.body.id;
          type = req.body.type;
          if (!(!auth || !id || !type)) {
            _context32.next = 5;
            break;
          }
          return _context32.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 5:
          if (!(type == 'confirm')) {
            _context32.next = 14;
            break;
          }
          _context32.next = 8;
          return _connectDB["default"].query("UPDATE withdraw SET status = 1 WHERE id = ?", [id]);
        case 8:
          _context32.next = 10;
          return _connectDB["default"].query("SELECT * FROM withdraw WHERE id = ?", [id]);
        case 10:
          _yield$connection$que75 = _context32.sent;
          _yield$connection$que76 = _slicedToArray(_yield$connection$que75, 1);
          info = _yield$connection$que76[0];
          return _context32.abrupt("return", res.status(200).json({
            message: 'Successful application confirmation',
            status: true,
            datas: recharge
          }));
        case 14:
          if (!(type == 'delete')) {
            _context32.next = 25;
            break;
          }
          _context32.next = 17;
          return _connectDB["default"].query("UPDATE withdraw SET status = 2 WHERE id = ?", [id]);
        case 17:
          _context32.next = 19;
          return _connectDB["default"].query("SELECT * FROM withdraw WHERE id = ?", [id]);
        case 19:
          _yield$connection$que77 = _context32.sent;
          _yield$connection$que78 = _slicedToArray(_yield$connection$que77, 1);
          _info = _yield$connection$que78[0];
          _context32.next = 24;
          return _connectDB["default"].query('UPDATE users SET money = money + ? WHERE phone = ? ', [_info[0].money, _info[0].phone]);
        case 24:
          return _context32.abrupt("return", res.status(200).json({
            message: 'Cancel successfully',
            status: true,
            datas: recharge
          }));
        case 25:
        case "end":
          return _context32.stop();
      }
    }, _callee32);
  }));
  return function handlWithdraw(_x64, _x65) {
    return _ref32.apply(this, arguments);
  };
}();
var settingBank = /*#__PURE__*/function () {
  var _ref33 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee33(req, res) {
    var auth, name_bank, name, info, qr, typer, _yield$connection$que79, _yield$connection$que80, bank_recharge, deleteRechargeQueries, bankName, username, upiId, usdtWalletAddress;
    return _regeneratorRuntime().wrap(function _callee33$(_context33) {
      while (1) switch (_context33.prev = _context33.next) {
        case 0:
          _context33.prev = 0;
          auth = req.cookies.auth;
          name_bank = req.body.name_bank;
          name = req.body.name;
          info = req.body.info;
          qr = req.body.qr;
          typer = req.body.typer;
          if (!(!auth || !typer)) {
            _context33.next = 9;
            break;
          }
          return _context33.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 9:
          if (!(typer == 'bank')) {
            _context33.next = 13;
            break;
          }
          _context33.next = 12;
          return _connectDB["default"].query("UPDATE bank_recharge SET name_bank = ?, name_user = ?, stk = ? WHERE type = 'bank'", [name_bank, name, info]);
        case 12:
          return _context33.abrupt("return", res.status(200).json({
            message: 'Successful change',
            status: true,
            datas: recharge
          }));
        case 13:
          if (!(typer == 'momo')) {
            _context33.next = 29;
            break;
          }
          _context33.next = 16;
          return _connectDB["default"].query("SELECT * FROM bank_recharge WHERE type = 'momo'");
        case 16:
          _yield$connection$que79 = _context33.sent;
          _yield$connection$que80 = _slicedToArray(_yield$connection$que79, 1);
          bank_recharge = _yield$connection$que80[0];
          deleteRechargeQueries = bank_recharge.map(function (recharge) {
            return deleteBankRechargeById(recharge.id);
          });
          _context33.next = 22;
          return Promise.all(deleteRechargeQueries);
        case 22:
          // await connection.query(`UPDATE bank_recharge SET name_bank = ?, name_user = ?, stk = ?, qr_code_image = ? WHERE type = 'upi'`, [name_bank, name, info, qr]);
          bankName = req.body.bank_name;
          username = req.body.username;
          upiId = req.body.upi_id;
          usdtWalletAddress = req.body.usdt_wallet_address;
          _context33.next = 28;
          return _connectDB["default"].query("INSERT INTO bank_recharge SET name_bank = ?, name_user = ?, stk = ?, qr_code_image = ?, type = 'momo'", [bankName, username, upiId, usdtWalletAddress]);
        case 28:
          return _context33.abrupt("return", res.status(200).json({
            message: 'Successfully changed',
            status: true,
            datas: recharge
          }));
        case 29:
          _context33.next = 35;
          break;
        case 31:
          _context33.prev = 31;
          _context33.t0 = _context33["catch"](0);
          console.log(_context33.t0);
          return _context33.abrupt("return", res.status(500).json({
            message: 'Something went wrong!',
            status: false
          }));
        case 35:
        case "end":
          return _context33.stop();
      }
    }, _callee33, null, [[0, 31]]);
  }));
  return function settingBank(_x66, _x67) {
    return _ref33.apply(this, arguments);
  };
}();
var deleteBankRechargeById = /*#__PURE__*/function () {
  var _ref34 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee34(id) {
    var _yield$connection$que81, _yield$connection$que82, recharge;
    return _regeneratorRuntime().wrap(function _callee34$(_context34) {
      while (1) switch (_context34.prev = _context34.next) {
        case 0:
          _context34.next = 2;
          return _connectDB["default"].query("DELETE FROM bank_recharge WHERE type = 'momo' AND id = ?", [id]);
        case 2:
          _yield$connection$que81 = _context34.sent;
          _yield$connection$que82 = _slicedToArray(_yield$connection$que81, 1);
          recharge = _yield$connection$que82[0];
          return _context34.abrupt("return", recharge);
        case 6:
        case "end":
          return _context34.stop();
      }
    }, _callee34);
  }));
  return function deleteBankRechargeById(_x68) {
    return _ref34.apply(this, arguments);
  };
}();
var settingCskh = /*#__PURE__*/function () {
  var _ref35 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee35(req, res) {
    var auth, telegram, cskh, myapp_web;
    return _regeneratorRuntime().wrap(function _callee35$(_context35) {
      while (1) switch (_context35.prev = _context35.next) {
        case 0:
          auth = req.cookies.auth;
          telegram = req.body.telegram;
          cskh = req.body.cskh;
          myapp_web = req.body.myapp_web;
          if (!(!auth || !cskh || !telegram)) {
            _context35.next = 6;
            break;
          }
          return _context35.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 6:
          _context35.next = 8;
          return _connectDB["default"].query("UPDATE admin SET telegram = ?, cskh = ?, app = ?", [telegram, cskh, myapp_web]);
        case 8:
          return _context35.abrupt("return", res.status(200).json({
            message: 'Successful change',
            status: true
          }));
        case 9:
        case "end":
          return _context35.stop();
      }
    }, _callee35);
  }));
  return function settingCskh(_x69, _x70) {
    return _ref35.apply(this, arguments);
  };
}();
var banned = /*#__PURE__*/function () {
  var _ref36 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee36(req, res) {
    var auth, id, type;
    return _regeneratorRuntime().wrap(function _callee36$(_context36) {
      while (1) switch (_context36.prev = _context36.next) {
        case 0:
          auth = req.cookies.auth;
          id = req.body.id;
          type = req.body.type;
          if (!(!auth || !id)) {
            _context36.next = 5;
            break;
          }
          return _context36.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 5:
          if (!(type == 'open')) {
            _context36.next = 8;
            break;
          }
          _context36.next = 8;
          return _connectDB["default"].query("UPDATE users SET status = 1 WHERE id = ?", [id]);
        case 8:
          if (!(type == 'close')) {
            _context36.next = 11;
            break;
          }
          _context36.next = 11;
          return _connectDB["default"].query("UPDATE users SET status = 2 WHERE id = ?", [id]);
        case 11:
          return _context36.abrupt("return", res.status(200).json({
            message: 'Successful change',
            status: true
          }));
        case 12:
        case "end":
          return _context36.stop();
      }
    }, _callee36);
  }));
  return function banned(_x71, _x72) {
    return _ref36.apply(this, arguments);
  };
}();
var createBonus = /*#__PURE__*/function () {
  var _ref37 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee37(req, res) {
    var randomString, timerJoin, d, time, auth, money, type, _yield$connection$que83, _yield$connection$que84, user, userInfo, select, _select, _select2, phone, _yield$connection$que85, _yield$connection$que86, _user, _select3, _phone, _yield$connection$que87, _yield$connection$que88, _user2, id_redenvelops, sql;
    return _regeneratorRuntime().wrap(function _callee37$(_context37) {
      while (1) switch (_context37.prev = _context37.next) {
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
          type = req.body.type;
          if (!(!money || !auth)) {
            _context37.next = 9;
            break;
          }
          return _context37.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 9:
          _context37.next = 11;
          return _connectDB["default"].query('SELECT * FROM users WHERE token = ? ', [auth]);
        case 11:
          _yield$connection$que83 = _context37.sent;
          _yield$connection$que84 = _slicedToArray(_yield$connection$que83, 1);
          user = _yield$connection$que84[0];
          if (!(user.length == 0)) {
            _context37.next = 16;
            break;
          }
          return _context37.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 16:
          userInfo = user[0];
          if (!(type == 'all')) {
            _context37.next = 27;
            break;
          }
          select = req.body.select;
          if (!(select == '1')) {
            _context37.next = 24;
            break;
          }
          _context37.next = 22;
          return _connectDB["default"].query("UPDATE point_list SET money = money + ? WHERE level = 2", [money]);
        case 22:
          _context37.next = 26;
          break;
        case 24:
          _context37.next = 26;
          return _connectDB["default"].query("UPDATE point_list SET money = money - ? WHERE level = 2", [money]);
        case 26:
          return _context37.abrupt("return", res.status(200).json({
            message: 'successful change',
            status: true
          }));
        case 27:
          if (!(type == 'two')) {
            _context37.next = 37;
            break;
          }
          _select = req.body.select;
          if (!(_select == '1')) {
            _context37.next = 34;
            break;
          }
          _context37.next = 32;
          return _connectDB["default"].query("UPDATE point_list SET money_us = money_us + ? WHERE level = 2", [money]);
        case 32:
          _context37.next = 36;
          break;
        case 34:
          _context37.next = 36;
          return _connectDB["default"].query("UPDATE point_list SET money_us = money_us - ? WHERE level = 2", [money]);
        case 36:
          return _context37.abrupt("return", res.status(200).json({
            message: 'successful change',
            status: true
          }));
        case 37:
          if (!(type == 'one')) {
            _context37.next = 55;
            break;
          }
          _select2 = req.body.select;
          phone = req.body.phone;
          _context37.next = 42;
          return _connectDB["default"].query('SELECT * FROM point_list WHERE phone = ? ', [phone]);
        case 42:
          _yield$connection$que85 = _context37.sent;
          _yield$connection$que86 = _slicedToArray(_yield$connection$que85, 1);
          _user = _yield$connection$que86[0];
          if (!(_user.length == 0)) {
            _context37.next = 47;
            break;
          }
          return _context37.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 47:
          if (!(_select2 == '1')) {
            _context37.next = 52;
            break;
          }
          _context37.next = 50;
          return _connectDB["default"].query("UPDATE point_list SET money = money + ? WHERE level = 2 and phone = ?", [money, phone]);
        case 50:
          _context37.next = 54;
          break;
        case 52:
          _context37.next = 54;
          return _connectDB["default"].query("UPDATE point_list SET money = money - ? WHERE level = 2 and phone = ?", [money, phone]);
        case 54:
          return _context37.abrupt("return", res.status(200).json({
            message: 'successful change',
            status: true
          }));
        case 55:
          if (!(type == 'three')) {
            _context37.next = 73;
            break;
          }
          _select3 = req.body.select;
          _phone = req.body.phone;
          _context37.next = 60;
          return _connectDB["default"].query('SELECT * FROM point_list WHERE phone = ? ', [_phone]);
        case 60:
          _yield$connection$que87 = _context37.sent;
          _yield$connection$que88 = _slicedToArray(_yield$connection$que87, 1);
          _user2 = _yield$connection$que88[0];
          if (!(_user2.length == 0)) {
            _context37.next = 65;
            break;
          }
          return _context37.abrupt("return", res.status(200).json({
            message: 'account does not exist',
            status: false,
            timeStamp: timeNow
          }));
        case 65:
          if (!(_select3 == '1')) {
            _context37.next = 70;
            break;
          }
          _context37.next = 68;
          return _connectDB["default"].query("UPDATE point_list SET money_us = money_us + ? WHERE level = 2 and phone = ?", [money, _phone]);
        case 68:
          _context37.next = 72;
          break;
        case 70:
          _context37.next = 72;
          return _connectDB["default"].query("UPDATE point_list SET money_us = money_us - ? WHERE level = 2 and phone = ?", [money, _phone]);
        case 72:
          return _context37.abrupt("return", res.status(200).json({
            message: 'successful change',
            status: true
          }));
        case 73:
          if (type) {
            _context37.next = 79;
            break;
          }
          id_redenvelops = String(timerJoin()) + randomString(16);
          sql = "INSERT INTO redenvelopes SET id_redenvelope = ?, phone = ?, money = ?, used = ?, amount = ?, status = ?, time = ?";
          _context37.next = 78;
          return _connectDB["default"].query(sql, [id_redenvelops, userInfo.phone, money, 1, 1, 0, time]);
        case 78:
          return _context37.abrupt("return", res.status(200).json({
            message: 'Successful change',
            status: true,
            id: id_redenvelops
          }));
        case 79:
        case "end":
          return _context37.stop();
      }
    }, _callee37);
  }));
  return function createBonus(_x73, _x74) {
    return _ref37.apply(this, arguments);
  };
}();
var listRedenvelops = /*#__PURE__*/function () {
  var _ref38 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee38(req, res) {
    var auth, _yield$connection$que89, _yield$connection$que90, redenvelopes;
    return _regeneratorRuntime().wrap(function _callee38$(_context38) {
      while (1) switch (_context38.prev = _context38.next) {
        case 0:
          auth = req.cookies.auth;
          _context38.next = 3;
          return _connectDB["default"].query('SELECT * FROM redenvelopes WHERE status = 0 ');
        case 3:
          _yield$connection$que89 = _context38.sent;
          _yield$connection$que90 = _slicedToArray(_yield$connection$que89, 1);
          redenvelopes = _yield$connection$que90[0];
          return _context38.abrupt("return", res.status(200).json({
            message: 'Successful change',
            status: true,
            redenvelopes: redenvelopes
          }));
        case 7:
        case "end":
          return _context38.stop();
      }
    }, _callee38);
  }));
  return function listRedenvelops(_x75, _x76) {
    return _ref38.apply(this, arguments);
  };
}();
var settingbuff = /*#__PURE__*/function () {
  var _ref39 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee39(req, res) {
    var auth, id_user, buff_acc, money_value, _yield$connection$que91, _yield$connection$que92, user_id;
    return _regeneratorRuntime().wrap(function _callee39$(_context39) {
      while (1) switch (_context39.prev = _context39.next) {
        case 0:
          auth = req.cookies.auth;
          id_user = req.body.id_user;
          buff_acc = req.body.buff_acc;
          money_value = req.body.money_value;
          if (!(!id_user || !buff_acc || !money_value)) {
            _context39.next = 6;
            break;
          }
          return _context39.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 6:
          _context39.next = 8;
          return _connectDB["default"].query("SELECT * FROM users WHERE id_user = ?", [id_user]);
        case 8:
          _yield$connection$que91 = _context39.sent;
          _yield$connection$que92 = _slicedToArray(_yield$connection$que91, 1);
          user_id = _yield$connection$que92[0];
          if (!(user_id.length > 0)) {
            _context39.next = 21;
            break;
          }
          if (!(buff_acc == '1')) {
            _context39.next = 15;
            break;
          }
          _context39.next = 15;
          return _connectDB["default"].query("UPDATE users SET money = money + ? WHERE id_user = ?", [money_value, id_user]);
        case 15:
          if (!(buff_acc == '2')) {
            _context39.next = 18;
            break;
          }
          _context39.next = 18;
          return _connectDB["default"].query("UPDATE users SET money = money - ? WHERE id_user = ?", [money_value, id_user]);
        case 18:
          return _context39.abrupt("return", res.status(200).json({
            message: 'Successful change',
            status: true
          }));
        case 21:
          return _context39.abrupt("return", res.status(200).json({
            message: 'Successful change',
            status: false
          }));
        case 22:
        case "end":
          return _context39.stop();
      }
    }, _callee39);
  }));
  return function settingbuff(_x77, _x78) {
    return _ref39.apply(this, arguments);
  };
}();
var randomNumber = function randomNumber(min, max) {
  return String(Math.floor(Math.random() * (max - min + 1)) + min);
};
var randomString = function randomString(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
var ipAddress = function ipAddress(req) {
  var ip = '';
  if (req.headers['x-forwarded-for']) {
    ip = req.headers['x-forwarded-for'].split(",")[0];
  } else if (req.connection && req.connection.remoteAddress) {
    ip = req.connection.remoteAddress;
  } else {
    ip = req.ip;
  }
  return ip;
};
var timeCreate = function timeCreate() {
  var d = new Date();
  var time = d.getTime();
  return time;
};
var register = /*#__PURE__*/function () {
  var _ref40 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee40(req, res) {
    var _req$body3, username, password, invitecode, id_user, name_user, code, ip, time, _yield$connection$que93, _yield$connection$que94, check_u, sql;
    return _regeneratorRuntime().wrap(function _callee40$(_context40) {
      while (1) switch (_context40.prev = _context40.next) {
        case 0:
          _req$body3 = req.body, username = _req$body3.username, password = _req$body3.password, invitecode = _req$body3.invitecode;
          id_user = randomNumber(10000, 99999);
          name_user = "Member" + randomNumber(10000, 99999);
          code = randomString(5) + randomNumber(10000, 99999);
          ip = ipAddress(req);
          time = timeCreate();
          invitecode = '2cOCs36373';
          if (!(!username || !password || !invitecode)) {
            _context40.next = 9;
            break;
          }
          return _context40.abrupt("return", res.status(200).json({
            message: 'ERROR!!!',
            status: false
          }));
        case 9:
          if (username) {
            _context40.next = 11;
            break;
          }
          return _context40.abrupt("return", res.status(200).json({
            message: 'phone error',
            status: false
          }));
        case 11:
          _context40.prev = 11;
          _context40.next = 14;
          return _connectDB["default"].query('SELECT * FROM users WHERE phone = ? ', [username]);
        case 14:
          _yield$connection$que93 = _context40.sent;
          _yield$connection$que94 = _slicedToArray(_yield$connection$que93, 1);
          check_u = _yield$connection$que94[0];
          if (!(check_u.length == 1)) {
            _context40.next = 21;
            break;
          }
          return _context40.abrupt("return", res.status(200).json({
            message: 'register account',
            //Số điện thoại đã được đăng ký
            status: false
          }));
        case 21:
          sql = "INSERT INTO users SET \n            id_user = ?,\n            phone = ?,\n            name_user = ?,\n            password = ?,\n            money = ?,\n            level = ?,\n            code = ?,\n            invite = ?,\n            veri = ?,\n            ip_address = ?,\n            status = ?,\n            time = ?";
          _context40.next = 24;
          return _connectDB["default"].execute(sql, [id_user, username, name_user, (0, _md["default"])(password), 0, 2, code, invitecode, 1, ip, 1, time]);
        case 24:
          _context40.next = 26;
          return _connectDB["default"].execute('INSERT INTO point_list SET phone = ?, level = 2', [username]);
        case 26:
          return _context40.abrupt("return", res.status(200).json({
            message: 'registration success',
            //Register Sucess
            status: true
          }));
        case 27:
          _context40.next = 32;
          break;
        case 29:
          _context40.prev = 29;
          _context40.t0 = _context40["catch"](11);
          if (_context40.t0) console.log(_context40.t0);
        case 32:
        case "end":
          return _context40.stop();
      }
    }, _callee40, null, [[11, 29]]);
  }));
  return function register(_x79, _x80) {
    return _ref40.apply(this, arguments);
  };
}();
var profileUser = /*#__PURE__*/function () {
  var _ref41 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee41(req, res) {
    var phone, _yield$connection$que95, _yield$connection$que96, user, _yield$connection$que97, _yield$connection$que98, recharge, _yield$connection$que99, _yield$connection$que100, withdraw;
    return _regeneratorRuntime().wrap(function _callee41$(_context41) {
      while (1) switch (_context41.prev = _context41.next) {
        case 0:
          phone = req.body.phone;
          if (phone) {
            _context41.next = 3;
            break;
          }
          return _context41.abrupt("return", res.status(200).json({
            message: 'Phone Error',
            status: false,
            timeStamp: timeNow
          }));
        case 3:
          _context41.next = 5;
          return _connectDB["default"].query("SELECT * FROM users WHERE phone = ?", [phone]);
        case 5:
          _yield$connection$que95 = _context41.sent;
          _yield$connection$que96 = _slicedToArray(_yield$connection$que95, 1);
          user = _yield$connection$que96[0];
          if (!(user.length == 0)) {
            _context41.next = 10;
            break;
          }
          return _context41.abrupt("return", res.status(200).json({
            message: 'Phone Error',
            status: false,
            timeStamp: timeNow
          }));
        case 10:
          _context41.next = 12;
          return _connectDB["default"].query("SELECT * FROM recharge WHERE phone = ? ORDER BY id DESC LIMIT 10", [phone]);
        case 12:
          _yield$connection$que97 = _context41.sent;
          _yield$connection$que98 = _slicedToArray(_yield$connection$que97, 1);
          recharge = _yield$connection$que98[0];
          _context41.next = 17;
          return _connectDB["default"].query("SELECT * FROM withdraw WHERE phone = ? ORDER BY id DESC LIMIT 10", [phone]);
        case 17:
          _yield$connection$que99 = _context41.sent;
          _yield$connection$que100 = _slicedToArray(_yield$connection$que99, 1);
          withdraw = _yield$connection$que100[0];
          return _context41.abrupt("return", res.status(200).json({
            message: 'Get success',
            status: true,
            recharge: recharge,
            withdraw: withdraw
          }));
        case 21:
        case "end":
          return _context41.stop();
      }
    }, _callee41);
  }));
  return function profileUser(_x81, _x82) {
    return _ref41.apply(this, arguments);
  };
}();
var infoCtv = /*#__PURE__*/function () {
  var _ref42 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee42(req, res) {
    var phone, _yield$connection$que101, _yield$connection$que102, user, userInfo, _yield$connection$que103, _yield$connection$que104, f1s, f1_today, i, f1_time, check, f_all_today, _i11, f1_code, _f1_time2, check_f1, _yield$connection$que105, _yield$connection$que106, f2s, _i12, f2_code, f2_time, check_f2, _yield$connection$que107, _yield$connection$que108, f3s, _i13, f3_code, f3_time, check_f3, _yield$connection$que109, _yield$connection$que110, f4s, _i14, f4_code, f4_time, check_f4, f2, _i15, _f1_code4, _yield$connection$que111, _yield$connection$que112, _f2s4, f3, _i16, _f1_code5, _yield$connection$que113, _yield$connection$que114, _f2s5, _i17, _f2_code3, _yield$connection$que115, _yield$connection$que116, _f3s3, f4, _i18, _f1_code6, _yield$connection$que117, _yield$connection$que118, _f2s6, _i19, _f2_code4, _yield$connection$que119, _yield$connection$que120, _f3s4, _i20, _f3_code2, _yield$connection$que121, _yield$connection$que122, _f4s2, _yield$connection$que123, _yield$connection$que124, list_mem, _yield$connection$que125, _yield$connection$que126, list_mem_baned, total_recharge, total_withdraw, _i21, _phone2, _yield$connection$que127, _yield$connection$que128, _recharge, _yield$connection$que129, _yield$connection$que130, _withdraw, total_recharge_today, total_withdraw_today, _i22, _phone3, _yield$connection$que131, _yield$connection$que132, recharge_today, _yield$connection$que133, _yield$connection$que134, withdraw_today, _i23, today, time, _i24, _today, _time, win, loss, _i25, _phone4, _yield$connection$que135, _yield$connection$que136, wins, _yield$connection$que137, _yield$connection$que138, losses, _i26, _today2, _time2, _i27, _today3, _time3, list_mems, _yield$connection$que139, _yield$connection$que140, list_mem_today, _i28, _today4, _time4, _yield$connection$que141, _yield$connection$que142, point_list, moneyCTV, list_recharge_news, list_withdraw_news, _i29, _phone5, _yield$connection$que143, _yield$connection$que144, _recharge_today, _yield$connection$que145, _yield$connection$que146, _withdraw_today, _i30, _today5, _time5, _i31, _today6, _time6, _yield$connection$que147, _yield$connection$que148, redenvelopes_used, redenvelopes_used_today, _i32, _today7, _time7, _yield$connection$que149, _yield$connection$que150, financial_details, financial_details_today, _i33, _today8, _time8;
    return _regeneratorRuntime().wrap(function _callee42$(_context42) {
      while (1) switch (_context42.prev = _context42.next) {
        case 0:
          phone = req.body.phone;
          _context42.next = 3;
          return _connectDB["default"].query('SELECT * FROM users WHERE phone = ? ', [phone]);
        case 3:
          _yield$connection$que101 = _context42.sent;
          _yield$connection$que102 = _slicedToArray(_yield$connection$que101, 1);
          user = _yield$connection$que102[0];
          if (!(user.length == 0)) {
            _context42.next = 8;
            break;
          }
          return _context42.abrupt("return", res.status(200).json({
            message: 'Phone Error',
            status: false
          }));
        case 8:
          userInfo = user[0]; // cấp dưới trực tiếp all
          _context42.next = 11;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ', [userInfo.code]);
        case 11:
          _yield$connection$que103 = _context42.sent;
          _yield$connection$que104 = _slicedToArray(_yield$connection$que103, 1);
          f1s = _yield$connection$que104[0];
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
        case 18:
          if (!(_i11 < f1s.length)) {
            _context42.next = 60;
            break;
          }
          f1_code = f1s[_i11].code; // Mã giới thiệu f1
          _f1_time2 = f1s[_i11].time; // time f1
          check_f1 = timerJoin(_f1_time2) == timerJoin() ? true : false;
          if (check_f1) f_all_today += 1;
          // tổng f1 mời đc hôm nay
          _context42.next = 25;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ', [f1_code]);
        case 25:
          _yield$connection$que105 = _context42.sent;
          _yield$connection$que106 = _slicedToArray(_yield$connection$que105, 1);
          f2s = _yield$connection$que106[0];
          _i12 = 0;
        case 29:
          if (!(_i12 < f2s.length)) {
            _context42.next = 57;
            break;
          }
          f2_code = f2s[_i12].code; // Mã giới thiệu f2
          f2_time = f2s[_i12].time; // time f2
          check_f2 = timerJoin(f2_time) == timerJoin() ? true : false;
          if (check_f2) f_all_today += 1;
          // tổng f2 mời đc hôm nay
          _context42.next = 36;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ', [f2_code]);
        case 36:
          _yield$connection$que107 = _context42.sent;
          _yield$connection$que108 = _slicedToArray(_yield$connection$que107, 1);
          f3s = _yield$connection$que108[0];
          _i13 = 0;
        case 40:
          if (!(_i13 < f3s.length)) {
            _context42.next = 54;
            break;
          }
          f3_code = f3s[_i13].code; // Mã giới thiệu f3
          f3_time = f3s[_i13].time; // time f3
          check_f3 = timerJoin(f3_time) == timerJoin() ? true : false;
          if (check_f3) f_all_today += 1;
          _context42.next = 47;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ', [f3_code]);
        case 47:
          _yield$connection$que109 = _context42.sent;
          _yield$connection$que110 = _slicedToArray(_yield$connection$que109, 1);
          f4s = _yield$connection$que110[0];
          // tổng f3 mời đc hôm nay
          for (_i14 = 0; _i14 < f4s.length; _i14++) {
            f4_code = f4s[_i14].code; // Mã giới thiệu f4
            f4_time = f4s[_i14].time; // time f4
            check_f4 = timerJoin(f4_time) == timerJoin() ? true : false;
            if (check_f4) f_all_today += 1;
            // tổng f3 mời đc hôm nay
          }
        case 51:
          _i13++;
          _context42.next = 40;
          break;
        case 54:
          _i12++;
          _context42.next = 29;
          break;
        case 57:
          _i11++;
          _context42.next = 18;
          break;
        case 60:
          // Tổng số f2
          f2 = 0;
          _i15 = 0;
        case 62:
          if (!(_i15 < f1s.length)) {
            _context42.next = 73;
            break;
          }
          _f1_code4 = f1s[_i15].code; // Mã giới thiệu f1
          _context42.next = 66;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f1_code4]);
        case 66:
          _yield$connection$que111 = _context42.sent;
          _yield$connection$que112 = _slicedToArray(_yield$connection$que111, 1);
          _f2s4 = _yield$connection$que112[0];
          f2 += _f2s4.length;
        case 70:
          _i15++;
          _context42.next = 62;
          break;
        case 73:
          // Tổng số f3
          f3 = 0;
          _i16 = 0;
        case 75:
          if (!(_i16 < f1s.length)) {
            _context42.next = 97;
            break;
          }
          _f1_code5 = f1s[_i16].code; // Mã giới thiệu f1
          _context42.next = 79;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f1_code5]);
        case 79:
          _yield$connection$que113 = _context42.sent;
          _yield$connection$que114 = _slicedToArray(_yield$connection$que113, 1);
          _f2s5 = _yield$connection$que114[0];
          _i17 = 0;
        case 83:
          if (!(_i17 < _f2s5.length)) {
            _context42.next = 94;
            break;
          }
          _f2_code3 = _f2s5[_i17].code;
          _context42.next = 87;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f2_code3]);
        case 87:
          _yield$connection$que115 = _context42.sent;
          _yield$connection$que116 = _slicedToArray(_yield$connection$que115, 1);
          _f3s3 = _yield$connection$que116[0];
          if (_f3s3.length > 0) f3 += _f3s3.length;
        case 91:
          _i17++;
          _context42.next = 83;
          break;
        case 94:
          _i16++;
          _context42.next = 75;
          break;
        case 97:
          // Tổng số f4
          f4 = 0;
          _i18 = 0;
        case 99:
          if (!(_i18 < f1s.length)) {
            _context42.next = 132;
            break;
          }
          _f1_code6 = f1s[_i18].code; // Mã giới thiệu f1
          _context42.next = 103;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f1_code6]);
        case 103:
          _yield$connection$que117 = _context42.sent;
          _yield$connection$que118 = _slicedToArray(_yield$connection$que117, 1);
          _f2s6 = _yield$connection$que118[0];
          _i19 = 0;
        case 107:
          if (!(_i19 < _f2s6.length)) {
            _context42.next = 129;
            break;
          }
          _f2_code4 = _f2s6[_i19].code;
          _context42.next = 111;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f2_code4]);
        case 111:
          _yield$connection$que119 = _context42.sent;
          _yield$connection$que120 = _slicedToArray(_yield$connection$que119, 1);
          _f3s4 = _yield$connection$que120[0];
          _i20 = 0;
        case 115:
          if (!(_i20 < _f3s4.length)) {
            _context42.next = 126;
            break;
          }
          _f3_code2 = _f3s4[_i20].code;
          _context42.next = 119;
          return _connectDB["default"].query('SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ', [_f3_code2]);
        case 119:
          _yield$connection$que121 = _context42.sent;
          _yield$connection$que122 = _slicedToArray(_yield$connection$que121, 1);
          _f4s2 = _yield$connection$que122[0];
          if (_f4s2.length > 0) f4 += _f4s2.length;
        case 123:
          _i20++;
          _context42.next = 115;
          break;
        case 126:
          _i19++;
          _context42.next = 107;
          break;
        case 129:
          _i18++;
          _context42.next = 99;
          break;
        case 132:
          _context42.next = 134;
          return _connectDB["default"].query('SELECT * FROM users WHERE ctv = ? AND status = 1 AND veri = 1 ', [phone]);
        case 134:
          _yield$connection$que123 = _context42.sent;
          _yield$connection$que124 = _slicedToArray(_yield$connection$que123, 1);
          list_mem = _yield$connection$que124[0];
          _context42.next = 139;
          return _connectDB["default"].query('SELECT * FROM users WHERE ctv = ? AND status = 2 AND veri = 1 ', [phone]);
        case 139:
          _yield$connection$que125 = _context42.sent;
          _yield$connection$que126 = _slicedToArray(_yield$connection$que125, 1);
          list_mem_baned = _yield$connection$que126[0];
          total_recharge = 0;
          total_withdraw = 0;
          _i21 = 0;
        case 145:
          if (!(_i21 < list_mem.length)) {
            _context42.next = 162;
            break;
          }
          _phone2 = list_mem[_i21].phone;
          _context42.next = 149;
          return _connectDB["default"].query('SELECT SUM(money) as money FROM recharge WHERE phone = ? AND status = 1 ', [_phone2]);
        case 149:
          _yield$connection$que127 = _context42.sent;
          _yield$connection$que128 = _slicedToArray(_yield$connection$que127, 1);
          _recharge = _yield$connection$que128[0];
          _context42.next = 154;
          return _connectDB["default"].query('SELECT SUM(money) as money FROM withdraw WHERE phone = ? AND status = 1 ', [_phone2]);
        case 154:
          _yield$connection$que129 = _context42.sent;
          _yield$connection$que130 = _slicedToArray(_yield$connection$que129, 1);
          _withdraw = _yield$connection$que130[0];
          if (_recharge[0].money) {
            total_recharge += Number(_recharge[0].money);
          }
          if (_withdraw[0].money) {
            total_withdraw += Number(_withdraw[0].money);
          }
        case 159:
          _i21++;
          _context42.next = 145;
          break;
        case 162:
          total_recharge_today = 0;
          total_withdraw_today = 0;
          _i22 = 0;
        case 165:
          if (!(_i22 < list_mem.length)) {
            _context42.next = 182;
            break;
          }
          _phone3 = list_mem[_i22].phone;
          _context42.next = 169;
          return _connectDB["default"].query('SELECT `money`, `time` FROM recharge WHERE phone = ? AND status = 1 ', [_phone3]);
        case 169:
          _yield$connection$que131 = _context42.sent;
          _yield$connection$que132 = _slicedToArray(_yield$connection$que131, 1);
          recharge_today = _yield$connection$que132[0];
          _context42.next = 174;
          return _connectDB["default"].query('SELECT `money`, `time` FROM withdraw WHERE phone = ? AND status = 1 ', [_phone3]);
        case 174:
          _yield$connection$que133 = _context42.sent;
          _yield$connection$que134 = _slicedToArray(_yield$connection$que133, 1);
          withdraw_today = _yield$connection$que134[0];
          for (_i23 = 0; _i23 < recharge_today.length; _i23++) {
            today = timerJoin();
            time = timerJoin(recharge_today[_i23].time);
            if (time == today) {
              total_recharge_today += recharge_today[_i23].money;
            }
          }
          for (_i24 = 0; _i24 < withdraw_today.length; _i24++) {
            _today = timerJoin();
            _time = timerJoin(withdraw_today[_i24].time);
            if (_time == _today) {
              total_withdraw_today += withdraw_today[_i24].money;
            }
          }
        case 179:
          _i22++;
          _context42.next = 165;
          break;
        case 182:
          win = 0;
          loss = 0;
          _i25 = 0;
        case 185:
          if (!(_i25 < list_mem.length)) {
            _context42.next = 202;
            break;
          }
          _phone4 = list_mem[_i25].phone;
          _context42.next = 189;
          return _connectDB["default"].query('SELECT `money`, `time` FROM minutes_1 WHERE phone = ? AND status = 1 ', [_phone4]);
        case 189:
          _yield$connection$que135 = _context42.sent;
          _yield$connection$que136 = _slicedToArray(_yield$connection$que135, 1);
          wins = _yield$connection$que136[0];
          _context42.next = 194;
          return _connectDB["default"].query('SELECT `money`, `time` FROM minutes_1 WHERE phone = ? AND status = 2 ', [_phone4]);
        case 194:
          _yield$connection$que137 = _context42.sent;
          _yield$connection$que138 = _slicedToArray(_yield$connection$que137, 1);
          losses = _yield$connection$que138[0];
          for (_i26 = 0; _i26 < wins.length; _i26++) {
            _today2 = timerJoin();
            _time2 = timerJoin(wins[_i26].time);
            if (_time2 == _today2) {
              win += wins[_i26].money;
            }
          }
          for (_i27 = 0; _i27 < losses.length; _i27++) {
            _today3 = timerJoin();
            _time3 = timerJoin(losses[_i27].time);
            if (_time3 == _today3) {
              loss += losses[_i27].money;
            }
          }
        case 199:
          _i25++;
          _context42.next = 185;
          break;
        case 202:
          list_mems = [];
          _context42.next = 205;
          return _connectDB["default"].query('SELECT * FROM users WHERE ctv = ? AND status = 1 AND veri = 1 ', [phone]);
        case 205:
          _yield$connection$que139 = _context42.sent;
          _yield$connection$que140 = _slicedToArray(_yield$connection$que139, 1);
          list_mem_today = _yield$connection$que140[0];
          for (_i28 = 0; _i28 < list_mem_today.length; _i28++) {
            _today4 = timerJoin();
            _time4 = timerJoin(list_mem_today[_i28].time);
            if (_time4 == _today4) {
              list_mems.push(list_mem_today[_i28]);
            }
          }
          _context42.next = 211;
          return _connectDB["default"].query('SELECT * FROM point_list WHERE phone = ? ', [phone]);
        case 211:
          _yield$connection$que141 = _context42.sent;
          _yield$connection$que142 = _slicedToArray(_yield$connection$que141, 1);
          point_list = _yield$connection$que142[0];
          moneyCTV = point_list[0].money;
          list_recharge_news = [];
          list_withdraw_news = [];
          _i29 = 0;
        case 218:
          if (!(_i29 < list_mem.length)) {
            _context42.next = 235;
            break;
          }
          _phone5 = list_mem[_i29].phone;
          _context42.next = 222;
          return _connectDB["default"].query('SELECT `id`, `status`, `type`,`phone`, `money`, `time` FROM recharge WHERE phone = ? AND status = 1 ', [_phone5]);
        case 222:
          _yield$connection$que143 = _context42.sent;
          _yield$connection$que144 = _slicedToArray(_yield$connection$que143, 1);
          _recharge_today = _yield$connection$que144[0];
          _context42.next = 227;
          return _connectDB["default"].query('SELECT `id`, `status`,`phone`, `money`, `time` FROM withdraw WHERE phone = ? AND status = 1 ', [_phone5]);
        case 227:
          _yield$connection$que145 = _context42.sent;
          _yield$connection$que146 = _slicedToArray(_yield$connection$que145, 1);
          _withdraw_today = _yield$connection$que146[0];
          for (_i30 = 0; _i30 < _recharge_today.length; _i30++) {
            _today5 = timerJoin();
            _time5 = timerJoin(_recharge_today[_i30].time);
            if (_time5 == _today5) {
              list_recharge_news.push(_recharge_today[_i30]);
            }
          }
          for (_i31 = 0; _i31 < _withdraw_today.length; _i31++) {
            _today6 = timerJoin();
            _time6 = timerJoin(_withdraw_today[_i31].time);
            if (_time6 == _today6) {
              list_withdraw_news.push(_withdraw_today[_i31]);
            }
          }
        case 232:
          _i29++;
          _context42.next = 218;
          break;
        case 235:
          _context42.next = 237;
          return _connectDB["default"].query('SELECT * FROM redenvelopes_used WHERE phone = ? ', [phone]);
        case 237:
          _yield$connection$que147 = _context42.sent;
          _yield$connection$que148 = _slicedToArray(_yield$connection$que147, 1);
          redenvelopes_used = _yield$connection$que148[0];
          redenvelopes_used_today = [];
          for (_i32 = 0; _i32 < redenvelopes_used.length; _i32++) {
            _today7 = timerJoin();
            _time7 = timerJoin(redenvelopes_used[_i32].time);
            if (_time7 == _today7) {
              redenvelopes_used_today.push(redenvelopes_used[_i32]);
            }
          }
          _context42.next = 244;
          return _connectDB["default"].query('SELECT * FROM financial_details WHERE phone = ? ', [phone]);
        case 244:
          _yield$connection$que149 = _context42.sent;
          _yield$connection$que150 = _slicedToArray(_yield$connection$que149, 1);
          financial_details = _yield$connection$que150[0];
          financial_details_today = [];
          for (_i33 = 0; _i33 < financial_details.length; _i33++) {
            _today8 = timerJoin();
            _time8 = timerJoin(financial_details[_i33].time);
            if (_time8 == _today8) {
              financial_details_today.push(financial_details[_i33]);
            }
          }
          return _context42.abrupt("return", res.status(200).json({
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
        case 250:
        case "end":
          return _context42.stop();
      }
    }, _callee42);
  }));
  return function infoCtv(_x83, _x84) {
    return _ref42.apply(this, arguments);
  };
}();
var infoCtv2 = /*#__PURE__*/function () {
  var _ref43 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee43(req, res) {
    var phone, timeDate, timerJoin, _yield$connection$que151, _yield$connection$que152, user, userInfo, _yield$connection$que153, _yield$connection$que154, list_mem, list_mems, _yield$connection$que155, _yield$connection$que156, list_mem_today, i, today, time, list_recharge_news, list_withdraw_news, _i34, _phone6, _yield$connection$que157, _yield$connection$que158, recharge_today, _yield$connection$que159, _yield$connection$que160, withdraw_today, _i35, _today9, _time9, _i36, _today10, _time10, _yield$connection$que161, _yield$connection$que162, redenvelopes_used, redenvelopes_used_today, _i37, _today11, _time11, _yield$connection$que163, _yield$connection$que164, financial_details, financial_details_today, _i38, _today12, _time12;
    return _regeneratorRuntime().wrap(function _callee43$(_context43) {
      while (1) switch (_context43.prev = _context43.next) {
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
          phone = req.body.phone;
          timeDate = req.body.timeDate;
          _context43.next = 5;
          return _connectDB["default"].query('SELECT * FROM users WHERE phone = ? ', [phone]);
        case 5:
          _yield$connection$que151 = _context43.sent;
          _yield$connection$que152 = _slicedToArray(_yield$connection$que151, 1);
          user = _yield$connection$que152[0];
          if (!(user.length == 0)) {
            _context43.next = 10;
            break;
          }
          return _context43.abrupt("return", res.status(200).json({
            message: 'Phone Error',
            status: false
          }));
        case 10:
          userInfo = user[0];
          _context43.next = 13;
          return _connectDB["default"].query('SELECT * FROM users WHERE ctv = ? AND status = 1 AND veri = 1 ', [phone]);
        case 13:
          _yield$connection$que153 = _context43.sent;
          _yield$connection$que154 = _slicedToArray(_yield$connection$que153, 1);
          list_mem = _yield$connection$que154[0];
          list_mems = [];
          _context43.next = 19;
          return _connectDB["default"].query('SELECT * FROM users WHERE ctv = ? AND status = 1 AND veri = 1 ', [phone]);
        case 19:
          _yield$connection$que155 = _context43.sent;
          _yield$connection$que156 = _slicedToArray(_yield$connection$que155, 1);
          list_mem_today = _yield$connection$que156[0];
          for (i = 0; i < list_mem_today.length; i++) {
            today = timeDate;
            time = timerJoin(list_mem_today[i].time);
            if (time == today) {
              list_mems.push(list_mem_today[i]);
            }
          }
          list_recharge_news = [];
          list_withdraw_news = [];
          _i34 = 0;
        case 26:
          if (!(_i34 < list_mem.length)) {
            _context43.next = 43;
            break;
          }
          _phone6 = list_mem[_i34].phone;
          _context43.next = 30;
          return _connectDB["default"].query('SELECT `id`, `status`, `type`,`phone`, `money`, `time` FROM recharge WHERE phone = ? AND status = 1 ', [_phone6]);
        case 30:
          _yield$connection$que157 = _context43.sent;
          _yield$connection$que158 = _slicedToArray(_yield$connection$que157, 1);
          recharge_today = _yield$connection$que158[0];
          _context43.next = 35;
          return _connectDB["default"].query('SELECT `id`, `status`,`phone`, `money`, `time` FROM withdraw WHERE phone = ? AND status = 1 ', [_phone6]);
        case 35:
          _yield$connection$que159 = _context43.sent;
          _yield$connection$que160 = _slicedToArray(_yield$connection$que159, 1);
          withdraw_today = _yield$connection$que160[0];
          for (_i35 = 0; _i35 < recharge_today.length; _i35++) {
            _today9 = timeDate;
            _time9 = timerJoin(recharge_today[_i35].time);
            if (_time9 == _today9) {
              list_recharge_news.push(recharge_today[_i35]);
            }
          }
          for (_i36 = 0; _i36 < withdraw_today.length; _i36++) {
            _today10 = timeDate;
            _time10 = timerJoin(withdraw_today[_i36].time);
            if (_time10 == _today10) {
              list_withdraw_news.push(withdraw_today[_i36]);
            }
          }
        case 40:
          _i34++;
          _context43.next = 26;
          break;
        case 43:
          _context43.next = 45;
          return _connectDB["default"].query('SELECT * FROM redenvelopes_used WHERE phone = ? ', [phone]);
        case 45:
          _yield$connection$que161 = _context43.sent;
          _yield$connection$que162 = _slicedToArray(_yield$connection$que161, 1);
          redenvelopes_used = _yield$connection$que162[0];
          redenvelopes_used_today = [];
          for (_i37 = 0; _i37 < redenvelopes_used.length; _i37++) {
            _today11 = timeDate;
            _time11 = timerJoin(redenvelopes_used[_i37].time);
            if (_time11 == _today11) {
              redenvelopes_used_today.push(redenvelopes_used[_i37]);
            }
          }
          _context43.next = 52;
          return _connectDB["default"].query('SELECT * FROM financial_details WHERE phone = ? ', [phone]);
        case 52:
          _yield$connection$que163 = _context43.sent;
          _yield$connection$que164 = _slicedToArray(_yield$connection$que163, 1);
          financial_details = _yield$connection$que164[0];
          financial_details_today = [];
          for (_i38 = 0; _i38 < financial_details.length; _i38++) {
            _today12 = timeDate;
            _time12 = timerJoin(financial_details[_i38].time);
            if (_time12 == _today12) {
              financial_details_today.push(financial_details[_i38]);
            }
          }
          return _context43.abrupt("return", res.status(200).json({
            message: 'Success',
            status: true,
            datas: user,
            list_mems: list_mems,
            list_recharge_news: list_recharge_news,
            list_withdraw_news: list_withdraw_news,
            redenvelopes_used: redenvelopes_used_today,
            financial_details_today: financial_details_today
          }));
        case 58:
        case "end":
          return _context43.stop();
      }
    }, _callee43);
  }));
  return function infoCtv2(_x85, _x86) {
    return _ref43.apply(this, arguments);
  };
}();
var listRechargeMem = /*#__PURE__*/function () {
  var _ref44 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee44(req, res) {
    var auth, phone, _req$body4, pageno, limit, _yield$connection$que165, _yield$connection$que166, user, _yield$connection$que167, _yield$connection$que168, auths, _user$, token, password, otp, level, userInfo, _yield$connection$que169, _yield$connection$que170, recharge, _yield$connection$que171, _yield$connection$que172, total_users;
    return _regeneratorRuntime().wrap(function _callee44$(_context44) {
      while (1) switch (_context44.prev = _context44.next) {
        case 0:
          auth = req.cookies.auth;
          phone = req.params.phone;
          _req$body4 = req.body, pageno = _req$body4.pageno, limit = _req$body4.limit;
          if (!(!pageno || !limit)) {
            _context44.next = 5;
            break;
          }
          return _context44.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 5:
          if (!(pageno < 0 || limit < 0)) {
            _context44.next = 7;
            break;
          }
          return _context44.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 7:
          if (phone) {
            _context44.next = 9;
            break;
          }
          return _context44.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 9:
          _context44.next = 11;
          return _connectDB["default"].query('SELECT * FROM users WHERE phone = ? ', [phone]);
        case 11:
          _yield$connection$que165 = _context44.sent;
          _yield$connection$que166 = _slicedToArray(_yield$connection$que165, 1);
          user = _yield$connection$que166[0];
          _context44.next = 16;
          return _connectDB["default"].query('SELECT * FROM users WHERE token = ? ', [auth]);
        case 16:
          _yield$connection$que167 = _context44.sent;
          _yield$connection$que168 = _slicedToArray(_yield$connection$que167, 1);
          auths = _yield$connection$que168[0];
          if (!(user.length == 0 || auths.length == 0)) {
            _context44.next = 21;
            break;
          }
          return _context44.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 21:
          _user$ = user[0], token = _user$.token, password = _user$.password, otp = _user$.otp, level = _user$.level, userInfo = _objectWithoutProperties(_user$, _excluded);
          _context44.next = 24;
          return _connectDB["default"].query("SELECT * FROM recharge WHERE phone = ? ORDER BY id DESC LIMIT ".concat(pageno, ", ").concat(limit, " "), [phone]);
        case 24:
          _yield$connection$que169 = _context44.sent;
          _yield$connection$que170 = _slicedToArray(_yield$connection$que169, 1);
          recharge = _yield$connection$que170[0];
          _context44.next = 29;
          return _connectDB["default"].query("SELECT * FROM recharge WHERE phone = ?", [phone]);
        case 29:
          _yield$connection$que171 = _context44.sent;
          _yield$connection$que172 = _slicedToArray(_yield$connection$que171, 1);
          total_users = _yield$connection$que172[0];
          return _context44.abrupt("return", res.status(200).json({
            message: 'Success',
            status: true,
            datas: recharge,
            page_total: Math.ceil(total_users.length / limit)
          }));
        case 33:
        case "end":
          return _context44.stop();
      }
    }, _callee44);
  }));
  return function listRechargeMem(_x87, _x88) {
    return _ref44.apply(this, arguments);
  };
}();
var listWithdrawMem = /*#__PURE__*/function () {
  var _ref45 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee45(req, res) {
    var auth, phone, _req$body5, pageno, limit, _yield$connection$que173, _yield$connection$que174, user, _yield$connection$que175, _yield$connection$que176, auths, _user$2, token, password, otp, level, userInfo, _yield$connection$que177, _yield$connection$que178, withdraw, _yield$connection$que179, _yield$connection$que180, total_users;
    return _regeneratorRuntime().wrap(function _callee45$(_context45) {
      while (1) switch (_context45.prev = _context45.next) {
        case 0:
          auth = req.cookies.auth;
          phone = req.params.phone;
          _req$body5 = req.body, pageno = _req$body5.pageno, limit = _req$body5.limit;
          if (!(!pageno || !limit)) {
            _context45.next = 5;
            break;
          }
          return _context45.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 5:
          if (!(pageno < 0 || limit < 0)) {
            _context45.next = 7;
            break;
          }
          return _context45.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 7:
          if (phone) {
            _context45.next = 9;
            break;
          }
          return _context45.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 9:
          _context45.next = 11;
          return _connectDB["default"].query('SELECT * FROM users WHERE phone = ? ', [phone]);
        case 11:
          _yield$connection$que173 = _context45.sent;
          _yield$connection$que174 = _slicedToArray(_yield$connection$que173, 1);
          user = _yield$connection$que174[0];
          _context45.next = 16;
          return _connectDB["default"].query('SELECT * FROM users WHERE token = ? ', [auth]);
        case 16:
          _yield$connection$que175 = _context45.sent;
          _yield$connection$que176 = _slicedToArray(_yield$connection$que175, 1);
          auths = _yield$connection$que176[0];
          if (!(user.length == 0 || auths.length == 0)) {
            _context45.next = 21;
            break;
          }
          return _context45.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 21:
          _user$2 = user[0], token = _user$2.token, password = _user$2.password, otp = _user$2.otp, level = _user$2.level, userInfo = _objectWithoutProperties(_user$2, _excluded2);
          _context45.next = 24;
          return _connectDB["default"].query("SELECT * FROM withdraw WHERE phone = ? ORDER BY id DESC LIMIT ".concat(pageno, ", ").concat(limit, " "), [phone]);
        case 24:
          _yield$connection$que177 = _context45.sent;
          _yield$connection$que178 = _slicedToArray(_yield$connection$que177, 1);
          withdraw = _yield$connection$que178[0];
          _context45.next = 29;
          return _connectDB["default"].query("SELECT * FROM withdraw WHERE phone = ?", [phone]);
        case 29:
          _yield$connection$que179 = _context45.sent;
          _yield$connection$que180 = _slicedToArray(_yield$connection$que179, 1);
          total_users = _yield$connection$que180[0];
          return _context45.abrupt("return", res.status(200).json({
            message: 'Success',
            status: true,
            datas: withdraw,
            page_total: Math.ceil(total_users.length / limit)
          }));
        case 33:
        case "end":
          return _context45.stop();
      }
    }, _callee45);
  }));
  return function listWithdrawMem(_x89, _x90) {
    return _ref45.apply(this, arguments);
  };
}();
var listRedenvelope = /*#__PURE__*/function () {
  var _ref46 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee46(req, res) {
    var auth, phone, _req$body6, pageno, limit, _yield$connection$que181, _yield$connection$que182, user, _yield$connection$que183, _yield$connection$que184, auths, _user$3, token, password, otp, level, userInfo, _yield$connection$que185, _yield$connection$que186, redenvelopes_used, _yield$connection$que187, _yield$connection$que188, total_users;
    return _regeneratorRuntime().wrap(function _callee46$(_context46) {
      while (1) switch (_context46.prev = _context46.next) {
        case 0:
          auth = req.cookies.auth;
          phone = req.params.phone;
          _req$body6 = req.body, pageno = _req$body6.pageno, limit = _req$body6.limit;
          if (!(!pageno || !limit)) {
            _context46.next = 5;
            break;
          }
          return _context46.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 5:
          if (!(pageno < 0 || limit < 0)) {
            _context46.next = 7;
            break;
          }
          return _context46.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 7:
          if (phone) {
            _context46.next = 9;
            break;
          }
          return _context46.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 9:
          _context46.next = 11;
          return _connectDB["default"].query('SELECT * FROM users WHERE phone = ? ', [phone]);
        case 11:
          _yield$connection$que181 = _context46.sent;
          _yield$connection$que182 = _slicedToArray(_yield$connection$que181, 1);
          user = _yield$connection$que182[0];
          _context46.next = 16;
          return _connectDB["default"].query('SELECT * FROM users WHERE token = ? ', [auth]);
        case 16:
          _yield$connection$que183 = _context46.sent;
          _yield$connection$que184 = _slicedToArray(_yield$connection$que183, 1);
          auths = _yield$connection$que184[0];
          if (!(user.length == 0 || auths.length == 0)) {
            _context46.next = 21;
            break;
          }
          return _context46.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 21:
          _user$3 = user[0], token = _user$3.token, password = _user$3.password, otp = _user$3.otp, level = _user$3.level, userInfo = _objectWithoutProperties(_user$3, _excluded3);
          _context46.next = 24;
          return _connectDB["default"].query("SELECT * FROM redenvelopes_used WHERE phone_used = ? ORDER BY id DESC LIMIT ".concat(pageno, ", ").concat(limit, " "), [phone]);
        case 24:
          _yield$connection$que185 = _context46.sent;
          _yield$connection$que186 = _slicedToArray(_yield$connection$que185, 1);
          redenvelopes_used = _yield$connection$que186[0];
          _context46.next = 29;
          return _connectDB["default"].query("SELECT * FROM redenvelopes_used WHERE phone_used = ?", [phone]);
        case 29:
          _yield$connection$que187 = _context46.sent;
          _yield$connection$que188 = _slicedToArray(_yield$connection$que187, 1);
          total_users = _yield$connection$que188[0];
          return _context46.abrupt("return", res.status(200).json({
            message: 'Success',
            status: true,
            datas: redenvelopes_used,
            page_total: Math.ceil(total_users.length / limit)
          }));
        case 33:
        case "end":
          return _context46.stop();
      }
    }, _callee46);
  }));
  return function listRedenvelope(_x91, _x92) {
    return _ref46.apply(this, arguments);
  };
}();
// Level Setting get

var getLevelInfo = /*#__PURE__*/function () {
  var _ref47 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee47(req, res) {
    var _yield$connection$que189, _yield$connection$que190, rows;
    return _regeneratorRuntime().wrap(function _callee47$(_context47) {
      while (1) switch (_context47.prev = _context47.next) {
        case 0:
          _context47.next = 2;
          return _connectDB["default"].query('SELECT * FROM `level`');
        case 2:
          _yield$connection$que189 = _context47.sent;
          _yield$connection$que190 = _slicedToArray(_yield$connection$que189, 1);
          rows = _yield$connection$que190[0];
          if (rows) {
            _context47.next = 7;
            break;
          }
          return _context47.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false
          }));
        case 7:
          console.log("asdasdasd : " + rows);
          return _context47.abrupt("return", res.status(200).json({
            message: 'Success',
            status: true,
            data: {},
            rows: rows
          }));
        case 9:
        case "end":
          return _context47.stop();
      }
    }, _callee47);
  }));
  return function getLevelInfo(_x93, _x94) {
    return _ref47.apply(this, arguments);
  };
}();
var listBet = /*#__PURE__*/function () {
  var _ref48 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee48(req, res) {
    var auth, phone, _req$body7, pageno, limit, _yield$connection$que191, _yield$connection$que192, user, _yield$connection$que193, _yield$connection$que194, auths, _user$4, token, password, otp, level, userInfo, _yield$connection$que195, _yield$connection$que196, listBet, _yield$connection$que197, _yield$connection$que198, total_users;
    return _regeneratorRuntime().wrap(function _callee48$(_context48) {
      while (1) switch (_context48.prev = _context48.next) {
        case 0:
          auth = req.cookies.auth;
          phone = req.params.phone;
          _req$body7 = req.body, pageno = _req$body7.pageno, limit = _req$body7.limit;
          if (!(!pageno || !limit)) {
            _context48.next = 5;
            break;
          }
          return _context48.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 5:
          if (!(pageno < 0 || limit < 0)) {
            _context48.next = 7;
            break;
          }
          return _context48.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 7:
          if (phone) {
            _context48.next = 9;
            break;
          }
          return _context48.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 9:
          _context48.next = 11;
          return _connectDB["default"].query('SELECT * FROM users WHERE phone = ? ', [phone]);
        case 11:
          _yield$connection$que191 = _context48.sent;
          _yield$connection$que192 = _slicedToArray(_yield$connection$que191, 1);
          user = _yield$connection$que192[0];
          _context48.next = 16;
          return _connectDB["default"].query('SELECT * FROM users WHERE token = ? ', [auth]);
        case 16:
          _yield$connection$que193 = _context48.sent;
          _yield$connection$que194 = _slicedToArray(_yield$connection$que193, 1);
          auths = _yield$connection$que194[0];
          if (!(user.length == 0 || auths.length == 0)) {
            _context48.next = 21;
            break;
          }
          return _context48.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: timeNow
          }));
        case 21:
          _user$4 = user[0], token = _user$4.token, password = _user$4.password, otp = _user$4.otp, level = _user$4.level, userInfo = _objectWithoutProperties(_user$4, _excluded4);
          _context48.next = 24;
          return _connectDB["default"].query("SELECT * FROM minutes_1 WHERE phone = ? AND status != 0 ORDER BY id DESC LIMIT ".concat(pageno, ", ").concat(limit, " "), [phone]);
        case 24:
          _yield$connection$que195 = _context48.sent;
          _yield$connection$que196 = _slicedToArray(_yield$connection$que195, 1);
          listBet = _yield$connection$que196[0];
          _context48.next = 29;
          return _connectDB["default"].query("SELECT * FROM minutes_1 WHERE phone = ? AND status != 0", [phone]);
        case 29:
          _yield$connection$que197 = _context48.sent;
          _yield$connection$que198 = _slicedToArray(_yield$connection$que197, 1);
          total_users = _yield$connection$que198[0];
          return _context48.abrupt("return", res.status(200).json({
            message: 'Success',
            status: true,
            datas: listBet,
            page_total: Math.ceil(total_users.length / limit)
          }));
        case 33:
        case "end":
          return _context48.stop();
      }
    }, _callee48);
  }));
  return function listBet(_x95, _x96) {
    return _ref48.apply(this, arguments);
  };
}();
var listOrderOld = /*#__PURE__*/function () {
  var _ref49 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee49(req, res) {
    var gameJoin, checkGame, game, join, _yield$connection$que199, _yield$connection$que200, k5d, _yield$connection$que201, _yield$connection$que202, period, _yield$connection$que203, _yield$connection$que204, waiting, _yield$connection$que205, _yield$connection$que206, settings;
    return _regeneratorRuntime().wrap(function _callee49$(_context49) {
      while (1) switch (_context49.prev = _context49.next) {
        case 0:
          gameJoin = req.body.gameJoin;
          checkGame = ['1', '3', '5', '10'].includes(String(gameJoin));
          if (checkGame) {
            _context49.next = 4;
            break;
          }
          return _context49.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 4:
          game = Number(gameJoin);
          join = '';
          if (game == 1) join = 'k5d';
          if (game == 3) join = 'k5d3';
          if (game == 5) join = 'k5d5';
          if (game == 10) join = 'k5d10';
          _context49.next = 12;
          return _connectDB["default"].query("SELECT * FROM 5d WHERE status != 0 AND game = '".concat(game, "' ORDER BY id DESC LIMIT 10 "));
        case 12:
          _yield$connection$que199 = _context49.sent;
          _yield$connection$que200 = _slicedToArray(_yield$connection$que199, 1);
          k5d = _yield$connection$que200[0];
          _context49.next = 17;
          return _connectDB["default"].query("SELECT period FROM 5d WHERE status = 0 AND game = '".concat(game, "' ORDER BY id DESC LIMIT 1 "));
        case 17:
          _yield$connection$que201 = _context49.sent;
          _yield$connection$que202 = _slicedToArray(_yield$connection$que201, 1);
          period = _yield$connection$que202[0];
          _context49.next = 22;
          return _connectDB["default"].query("SELECT phone, money, price, amount, bet FROM result_5d WHERE status = 0 AND level = 0 AND game = '".concat(game, "' ORDER BY id ASC "));
        case 22:
          _yield$connection$que203 = _context49.sent;
          _yield$connection$que204 = _slicedToArray(_yield$connection$que203, 1);
          waiting = _yield$connection$que204[0];
          _context49.next = 27;
          return _connectDB["default"].query("SELECT ".concat(join, " FROM admin"));
        case 27:
          _yield$connection$que205 = _context49.sent;
          _yield$connection$que206 = _slicedToArray(_yield$connection$que205, 1);
          settings = _yield$connection$que206[0];
          if (!(k5d.length == 0)) {
            _context49.next = 32;
            break;
          }
          return _context49.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 32:
          if (!(!k5d[0] || !period[0])) {
            _context49.next = 34;
            break;
          }
          return _context49.abrupt("return", res.status(200).json({
            message: 'Error!',
            status: false
          }));
        case 34:
          return _context49.abrupt("return", res.status(200).json({
            code: 0,
            msg: "Get success",
            data: {
              gameslist: k5d
            },
            bet: waiting,
            settings: settings,
            join: join,
            period: period[0].period,
            status: true
          }));
        case 35:
        case "end":
          return _context49.stop();
      }
    }, _callee49);
  }));
  return function listOrderOld(_x97, _x98) {
    return _ref49.apply(this, arguments);
  };
}();
var listOrderOldK3 = /*#__PURE__*/function () {
  var _ref50 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee50(req, res) {
    var gameJoin, checkGame, game, join, _yield$connection$que207, _yield$connection$que208, k5d, _yield$connection$que209, _yield$connection$que210, period, _yield$connection$que211, _yield$connection$que212, waiting, _yield$connection$que213, _yield$connection$que214, settings;
    return _regeneratorRuntime().wrap(function _callee50$(_context50) {
      while (1) switch (_context50.prev = _context50.next) {
        case 0:
          gameJoin = req.body.gameJoin;
          checkGame = ['1', '3', '5', '10'].includes(String(gameJoin));
          if (checkGame) {
            _context50.next = 4;
            break;
          }
          return _context50.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 4:
          game = Number(gameJoin);
          join = '';
          if (game == 1) join = 'k3d';
          if (game == 3) join = 'k3d3';
          if (game == 5) join = 'k3d5';
          if (game == 10) join = 'k3d10';
          _context50.next = 12;
          return _connectDB["default"].query("SELECT * FROM k3 WHERE status != 0 AND game = '".concat(game, "' ORDER BY id DESC LIMIT 10 "));
        case 12:
          _yield$connection$que207 = _context50.sent;
          _yield$connection$que208 = _slicedToArray(_yield$connection$que207, 1);
          k5d = _yield$connection$que208[0];
          _context50.next = 17;
          return _connectDB["default"].query("SELECT period FROM k3 WHERE status = 0 AND game = '".concat(game, "' ORDER BY id DESC LIMIT 1 "));
        case 17:
          _yield$connection$que209 = _context50.sent;
          _yield$connection$que210 = _slicedToArray(_yield$connection$que209, 1);
          period = _yield$connection$que210[0];
          _context50.next = 22;
          return _connectDB["default"].query("SELECT phone, money, price, typeGame, amount, bet FROM result_k3 WHERE status = 0 AND level = 0 AND game = '".concat(game, "' ORDER BY id ASC "));
        case 22:
          _yield$connection$que211 = _context50.sent;
          _yield$connection$que212 = _slicedToArray(_yield$connection$que211, 1);
          waiting = _yield$connection$que212[0];
          _context50.next = 27;
          return _connectDB["default"].query("SELECT ".concat(join, " FROM admin"));
        case 27:
          _yield$connection$que213 = _context50.sent;
          _yield$connection$que214 = _slicedToArray(_yield$connection$que213, 1);
          settings = _yield$connection$que214[0];
          if (!(k5d.length == 0)) {
            _context50.next = 32;
            break;
          }
          return _context50.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            status: false
          }));
        case 32:
          if (!(!k5d[0] || !period[0])) {
            _context50.next = 34;
            break;
          }
          return _context50.abrupt("return", res.status(200).json({
            message: 'Error!',
            status: false
          }));
        case 34:
          return _context50.abrupt("return", res.status(200).json({
            code: 0,
            msg: "Get Success",
            data: {
              gameslist: k5d
            },
            bet: waiting,
            settings: settings,
            join: join,
            period: period[0].period,
            status: true
          }));
        case 35:
        case "end":
          return _context50.stop();
      }
    }, _callee50);
  }));
  return function listOrderOldK3(_x99, _x100) {
    return _ref50.apply(this, arguments);
  };
}();
var editResult = /*#__PURE__*/function () {
  var _ref51 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee51(req, res) {
    var _req$body8, game, list, join, sql;
    return _regeneratorRuntime().wrap(function _callee51$(_context51) {
      while (1) switch (_context51.prev = _context51.next) {
        case 0:
          _req$body8 = req.body, game = _req$body8.game, list = _req$body8.list;
          if (!(!list || !game)) {
            _context51.next = 3;
            break;
          }
          return _context51.abrupt("return", res.status(200).json({
            message: 'ERROR!!!',
            status: false
          }));
        case 3:
          join = '';
          if (game == 1) join = 'k5d';
          if (game == 3) join = 'k5d3';
          if (game == 5) join = 'k5d5';
          if (game == 10) join = 'k5d10';
          sql = "UPDATE admin SET ".concat(join, " = ?");
          _context51.next = 11;
          return _connectDB["default"].execute(sql, [list]);
        case 11:
          return _context51.abrupt("return", res.status(200).json({
            message: 'Editing is successful',
            //Register Sucess
            status: true
          }));
        case 12:
        case "end":
          return _context51.stop();
      }
    }, _callee51);
  }));
  return function editResult(_x101, _x102) {
    return _ref51.apply(this, arguments);
  };
}();
var editResult2 = /*#__PURE__*/function () {
  var _ref52 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee52(req, res) {
    var _req$body9, game, list, join, sql;
    return _regeneratorRuntime().wrap(function _callee52$(_context52) {
      while (1) switch (_context52.prev = _context52.next) {
        case 0:
          _req$body9 = req.body, game = _req$body9.game, list = _req$body9.list;
          if (!(!list || !game)) {
            _context52.next = 3;
            break;
          }
          return _context52.abrupt("return", res.status(200).json({
            message: 'ERROR!!!',
            status: false
          }));
        case 3:
          join = '';
          if (game == 1) join = 'k3d';
          if (game == 3) join = 'k3d3';
          if (game == 5) join = 'k3d5';
          if (game == 10) join = 'k3d10';
          sql = "UPDATE admin SET ".concat(join, " = ?");
          _context52.next = 11;
          return _connectDB["default"].execute(sql, [list]);
        case 11:
          return _context52.abrupt("return", res.status(200).json({
            message: 'Editing is successful',
            //Register Sucess
            status: true
          }));
        case 12:
        case "end":
          return _context52.stop();
      }
    }, _callee52);
  }));
  return function editResult2(_x103, _x104) {
    return _ref52.apply(this, arguments);
  };
}();
var CreatedSalary = /*#__PURE__*/function () {
  var _ref53 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee53(req, res) {
    var phone, amount, type, now, formattedTime, checkUserQuery, _yield$connection$exe9, _yield$connection$exe10, existingUser, updateUserQuery, insertSalaryQuery;
    return _regeneratorRuntime().wrap(function _callee53$(_context53) {
      while (1) switch (_context53.prev = _context53.next) {
        case 0:
          _context53.prev = 0;
          phone = req.body.phone;
          amount = req.body.amount;
          type = req.body.type;
          now = new Date();
          formattedTime = now.toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
          }); // Check if the phone number is a 10-digit number
          if (/^\d{10}$/.test(phone)) {
            _context53.next = 8;
            break;
          }
          return _context53.abrupt("return", res.status(400).json({
            message: 'ERROR!!! Invalid phone number. Please provide a 10-digit phone number.',
            status: false
          }));
        case 8:
          // Check if user with the given phone number exists
          checkUserQuery = 'SELECT * FROM `users` WHERE phone = ?';
          _context53.next = 11;
          return _connectDB["default"].execute(checkUserQuery, [phone]);
        case 11:
          _yield$connection$exe9 = _context53.sent;
          _yield$connection$exe10 = _slicedToArray(_yield$connection$exe9, 1);
          existingUser = _yield$connection$exe10[0];
          if (!(existingUser.length === 0)) {
            _context53.next = 16;
            break;
          }
          return _context53.abrupt("return", res.status(400).json({
            message: 'ERROR!!! User with the provided phone number does not exist.',
            status: false
          }));
        case 16:
          // If user exists, update the 'users' table
          updateUserQuery = 'UPDATE `users` SET `money` = `money` + ? WHERE phone = ?';
          _context53.next = 19;
          return _connectDB["default"].execute(updateUserQuery, [amount, phone]);
        case 19:
          // Insert record into 'salary' table
          insertSalaryQuery = 'INSERT INTO salary (phone, amount, type, time) VALUES (?, ?, ?, ?)';
          _context53.next = 22;
          return _connectDB["default"].execute(insertSalaryQuery, [phone, amount, type, formattedTime]);
        case 22:
          res.status(200).json({
            message: 'Salary record created successfully'
          });
          _context53.next = 29;
          break;
        case 25:
          _context53.prev = 25;
          _context53.t0 = _context53["catch"](0);
          console.error(_context53.t0);
          res.status(500).json({
            error: 'Internal server error'
          });
        case 29:
        case "end":
          return _context53.stop();
      }
    }, _callee53, null, [[0, 25]]);
  }));
  return function CreatedSalary(_x105, _x106) {
    return _ref53.apply(this, arguments);
  };
}();
var getSalary = /*#__PURE__*/function () {
  var _ref54 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee54(req, res) {
    var _yield$connection$que215, _yield$connection$que216, rows;
    return _regeneratorRuntime().wrap(function _callee54$(_context54) {
      while (1) switch (_context54.prev = _context54.next) {
        case 0:
          _context54.next = 2;
          return _connectDB["default"].query("SELECT * FROM salary ORDER BY time DESC");
        case 2:
          _yield$connection$que215 = _context54.sent;
          _yield$connection$que216 = _slicedToArray(_yield$connection$que215, 1);
          rows = _yield$connection$que216[0];
          if (rows) {
            _context54.next = 7;
            break;
          }
          return _context54.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false
          }));
        case 7:
          console.log("asdasdasd : " + rows);
          return _context54.abrupt("return", res.status(200).json({
            message: 'Success',
            status: true,
            data: {},
            rows: rows
          }));
        case 9:
        case "end":
          return _context54.stop();
      }
    }, _callee54);
  }));
  return function getSalary(_x107, _x108) {
    return _ref54.apply(this, arguments);
  };
}();
module.exports = {
  adminPage: adminPage,
  adminPage3: adminPage3,
  adminPage5: adminPage5,
  adminPage10: adminPage10,
  totalJoin: totalJoin,
  middlewareAdminController: middlewareAdminController,
  changeAdmin: changeAdmin,
  membersPage: membersPage,
  listMember: listMember,
  infoMember: infoMember,
  userInfo: userInfo,
  statistical: statistical,
  statistical2: statistical2,
  rechargePage: rechargePage,
  recharge: recharge,
  rechargeDuyet: rechargeDuyet,
  rechargeRecord: rechargeRecord,
  withdrawRecord: withdrawRecord,
  withdraw: withdraw,
  levelSetting: levelSetting,
  handlWithdraw: handlWithdraw,
  settings: settings,
  editResult2: editResult2,
  settingBank: settingBank,
  settingGet: settingGet,
  settingCskh: settingCskh,
  settingbuff: settingbuff,
  register: register,
  ctvPage: ctvPage,
  listCTV: listCTV,
  profileUser: profileUser,
  ctvProfilePage: ctvProfilePage,
  infoCtv: infoCtv,
  infoCtv2: infoCtv2,
  giftPage: giftPage,
  createBonus: createBonus,
  listRedenvelops: listRedenvelops,
  banned: banned,
  listRechargeMem: listRechargeMem,
  listWithdrawMem: listWithdrawMem,
  getLevelInfo: getLevelInfo,
  listRedenvelope: listRedenvelope,
  listBet: listBet,
  adminPage5d: adminPage5d,
  listOrderOld: listOrderOld,
  listOrderOldK3: listOrderOldK3,
  editResult: editResult,
  adminPageK3: adminPageK3,
  updateLevel: updateLevel,
  CreatedSalaryRecord: CreatedSalaryRecord,
  CreatedSalary: CreatedSalary,
  getSalary: getSalary,
  trxAdminPage: trxAdminPage
};