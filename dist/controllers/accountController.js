"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _connectDB = _interopRequireDefault(require("../config/connectDB"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _md = _interopRequireDefault(require("md5"));
var _request = _interopRequireDefault(require("request"));
var _express = _interopRequireDefault(require("express"));
var _excluded = ["password", "money", "ip", "veri", "ip_address", "status", "time"];
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
var randomString = function randomString(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
var randomNumber = function randomNumber(min, max) {
  return String(Math.floor(Math.random() * (max - min + 1)) + min);
};
var isNumber = function isNumber(params) {
  var pattern = /^[0-9]*\d$/;
  return pattern.test(params);
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
var loginPage = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", res.render("account/login.ejs"));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function loginPage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var registerPage = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", res.render("account/register.ejs"));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function registerPage(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var forgotPage = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", res.render("account/forgot.ejs"));
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function forgotPage(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var login = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$body, username, pwd, _yield$connection$que, _yield$connection$que2, rows, _rows$, password, money, ip, veri, ip_address, status, time, others, accessToken;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _req$body = req.body, username = _req$body.username, pwd = _req$body.pwd;
          if (!(!username || !pwd || !username)) {
            _context4.next = 3;
            break;
          }
          return _context4.abrupt("return", res.status(200).json({
            message: 'ERROR!!!'
          }));
        case 3:
          _context4.prev = 3;
          _context4.next = 6;
          return _connectDB["default"].query('SELECT * FROM users WHERE phone = ? AND password = ? ', [username, (0, _md["default"])(pwd)]);
        case 6:
          _yield$connection$que = _context4.sent;
          _yield$connection$que2 = _slicedToArray(_yield$connection$que, 1);
          rows = _yield$connection$que2[0];
          if (!(rows.length == 1)) {
            _context4.next = 21;
            break;
          }
          if (!(rows[0].status == 1)) {
            _context4.next = 18;
            break;
          }
          _rows$ = rows[0], password = _rows$.password, money = _rows$.money, ip = _rows$.ip, veri = _rows$.veri, ip_address = _rows$.ip_address, status = _rows$.status, time = _rows$.time, others = _objectWithoutProperties(_rows$, _excluded);
          accessToken = _jsonwebtoken["default"].sign({
            user: _objectSpread({}, others),
            timeNow: timeNow
          }, process.env.JWT_ACCESS_TOKEN, {
            expiresIn: "1d"
          });
          _context4.next = 15;
          return _connectDB["default"].execute('UPDATE `users` SET `token` = ? WHERE `phone` = ? ', [(0, _md["default"])(accessToken), username]);
        case 15:
          return _context4.abrupt("return", res.status(200).json({
            message: 'Login Sucess',
            status: true,
            token: accessToken,
            value: (0, _md["default"])(accessToken)
          }));
        case 18:
          return _context4.abrupt("return", res.status(200).json({
            message: 'Account has been locked',
            status: false
          }));
        case 19:
          _context4.next = 22;
          break;
        case 21:
          return _context4.abrupt("return", res.status(200).json({
            message: 'Incorrect Username or Password',
            status: false
          }));
        case 22:
          _context4.next = 27;
          break;
        case 24:
          _context4.prev = 24;
          _context4.t0 = _context4["catch"](3);
          if (_context4.t0) console.log(_context4.t0);
        case 27:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[3, 24]]);
  }));
  return function login(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var register = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var now, _req$body2, username, pwd, invitecode, id_user, otp2, name_user, code, ip, time, _yield$connection$que3, _yield$connection$que4, check_u, _yield$connection$que5, _yield$connection$que6, check_i, _yield$connection$que7, _yield$connection$que8, check_ip, ctv, sql, _yield$connection$que9, _yield$connection$que10, check_code, levels, i;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          now = new Date().getTime();
          _req$body2 = req.body, username = _req$body2.username, pwd = _req$body2.pwd, invitecode = _req$body2.invitecode;
          id_user = randomNumber(10000, 99999);
          otp2 = randomNumber(100000, 999999);
          name_user = "Member" + randomNumber(10000, 99999);
          code = randomString(5) + randomNumber(10000, 99999);
          ip = ipAddress(req);
          time = timeCreate();
          if (!(!username || !pwd || !invitecode)) {
            _context5.next = 10;
            break;
          }
          return _context5.abrupt("return", res.status(200).json({
            message: 'ERROR!!!',
            status: false
          }));
        case 10:
          if (!(username.length < 9 || username.length > 10 || !isNumber(username))) {
            _context5.next = 12;
            break;
          }
          return _context5.abrupt("return", res.status(200).json({
            message: 'phone error',
            status: false
          }));
        case 12:
          _context5.prev = 12;
          _context5.next = 15;
          return _connectDB["default"].query('SELECT * FROM users WHERE phone = ?', [username]);
        case 15:
          _yield$connection$que3 = _context5.sent;
          _yield$connection$que4 = _slicedToArray(_yield$connection$que3, 1);
          check_u = _yield$connection$que4[0];
          _context5.next = 20;
          return _connectDB["default"].query('SELECT * FROM users WHERE code = ? ', [invitecode]);
        case 20:
          _yield$connection$que5 = _context5.sent;
          _yield$connection$que6 = _slicedToArray(_yield$connection$que5, 1);
          check_i = _yield$connection$que6[0];
          _context5.next = 25;
          return _connectDB["default"].query('SELECT * FROM users WHERE ip_address = ? ', [ip]);
        case 25:
          _yield$connection$que7 = _context5.sent;
          _yield$connection$que8 = _slicedToArray(_yield$connection$que7, 1);
          check_ip = _yield$connection$que8[0];
          if (!(check_u.length == 1 && check_u[0].veri == 1)) {
            _context5.next = 32;
            break;
          }
          return _context5.abrupt("return", res.status(200).json({
            message: 'Registered phone number',
            status: false
          }));
        case 32:
          if (!(check_i.length == 1)) {
            _context5.next = 65;
            break;
          }
          if (!(check_ip.length <= 3)) {
            _context5.next = 62;
            break;
          }
          ctv = '';
          if (check_i[0].level == 2) {
            ctv = check_i[0].phone;
          } else {
            ctv = check_i[0].ctv;
          }
          sql = "INSERT INTO users SET id_user = ?,phone = ?,name_user = ?,password = ?, plain_password = ?, money = ?,code = ?,invite = ?,ctv = ?,veri = ?,otp = ?,ip_address = ?,status = ?,time = ?";
          _context5.next = 39;
          return _connectDB["default"].execute(sql, [id_user, username, name_user, (0, _md["default"])(pwd), pwd, 0, code, invitecode, ctv, 1, otp2, ip, 1, time]);
        case 39:
          _context5.next = 41;
          return _connectDB["default"].execute('INSERT INTO point_list SET phone = ?', [username]);
        case 41:
          _context5.next = 43;
          return _connectDB["default"].query('SELECT * FROM users WHERE invite = ? ', [invitecode]);
        case 43:
          _yield$connection$que9 = _context5.sent;
          _yield$connection$que10 = _slicedToArray(_yield$connection$que9, 1);
          check_code = _yield$connection$que10[0];
          if (!(check_i.name_user !== 'Admin')) {
            _context5.next = 59;
            break;
          }
          levels = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44];
          i = 0;
        case 49:
          if (!(i < levels.length)) {
            _context5.next = 59;
            break;
          }
          if (!(check_code.length >= levels[i])) {
            _context5.next = 55;
            break;
          }
          _context5.next = 53;
          return _connectDB["default"].execute('UPDATE users SET user_level = ? WHERE code = ?', [i + 1, invitecode]);
        case 53:
          _context5.next = 56;
          break;
        case 55:
          return _context5.abrupt("break", 59);
        case 56:
          i++;
          _context5.next = 49;
          break;
        case 59:
          return _context5.abrupt("return", res.status(200).json({
            message: "Registered successfully",
            status: true
          }));
        case 62:
          return _context5.abrupt("return", res.status(200).json({
            message: 'Registered IP address',
            status: false
          }));
        case 63:
          _context5.next = 66;
          break;
        case 65:
          return _context5.abrupt("return", res.status(200).json({
            message: 'Referrer code does not exist',
            status: false
          }));
        case 66:
          _context5.next = 71;
          break;
        case 68:
          _context5.prev = 68;
          _context5.t0 = _context5["catch"](12);
          if (_context5.t0) console.log(_context5.t0);
        case 71:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[12, 68]]);
  }));
  return function register(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var verifyCode = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var phone, now, timeEnd, otp, _yield$connection$que11, _yield$connection$que12, rows, user;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          phone = req.body.phone;
          now = new Date().getTime();
          timeEnd = +new Date() + 1000 * (60 * 2 + 0) + 500;
          otp = randomNumber(100000, 999999);
          if (!(phone.length < 9 || phone.length > 10 || !isNumber(phone))) {
            _context8.next = 6;
            break;
          }
          return _context8.abrupt("return", res.status(200).json({
            message: 'phone error',
            status: false
          }));
        case 6:
          _context8.next = 8;
          return _connectDB["default"].query('SELECT * FROM users WHERE `phone` = ?', [phone]);
        case 8:
          _yield$connection$que11 = _context8.sent;
          _yield$connection$que12 = _slicedToArray(_yield$connection$que11, 1);
          rows = _yield$connection$que12[0];
          if (!(rows.length == 0)) {
            _context8.next = 16;
            break;
          }
          _context8.next = 14;
          return (0, _request["default"])("http://47.243.168.18:9090/sms/batch/v2?appkey=NFJKdK&appsecret=brwkTw&phone=84".concat(phone, "&msg=Your verification code is ").concat(otp, "&extend=").concat(now), /*#__PURE__*/function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(error, response, body) {
              var data;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    data = JSON.parse(body);
                    if (!(data.code == '00000')) {
                      _context6.next = 5;
                      break;
                    }
                    _context6.next = 4;
                    return _connectDB["default"].execute("INSERT INTO users SET phone = ?, otp = ?, veri = 0, time_otp = ? ", [phone, otp, timeEnd]);
                  case 4:
                    return _context6.abrupt("return", res.status(200).json({
                      message: 'Submitted successfully',
                      status: true,
                      timeStamp: timeNow,
                      timeEnd: timeEnd
                    }));
                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6);
            }));
            return function (_x13, _x14, _x15) {
              return _ref7.apply(this, arguments);
            };
          }());
        case 14:
          _context8.next = 22;
          break;
        case 16:
          user = rows[0];
          if (!(user.time_otp - now <= 0)) {
            _context8.next = 21;
            break;
          }
          (0, _request["default"])("http://47.243.168.18:9090/sms/batch/v2?appkey=NFJKdK&appsecret=brwkTw&phone=84".concat(phone, "&msg=Your verification code is ").concat(otp, "&extend=").concat(now), /*#__PURE__*/function () {
            var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(error, response, body) {
              var data;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    data = JSON.parse(body);
                    if (!(data.code == '00000')) {
                      _context7.next = 5;
                      break;
                    }
                    _context7.next = 4;
                    return _connectDB["default"].execute("UPDATE users SET otp = ?, time_otp = ? WHERE phone = ? ", [otp, timeEnd, phone]);
                  case 4:
                    return _context7.abrupt("return", res.status(200).json({
                      message: 'Submitted successfully',
                      status: true,
                      timeStamp: timeNow,
                      timeEnd: timeEnd
                    }));
                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7);
            }));
            return function (_x16, _x17, _x18) {
              return _ref8.apply(this, arguments);
            };
          }());
          _context8.next = 22;
          break;
        case 21:
          return _context8.abrupt("return", res.status(200).json({
            message: 'Send SMS regularly',
            status: false,
            timeStamp: timeNow
          }));
        case 22:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function verifyCode(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var verifyCodePass = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var phone, now, timeEnd, otp, _yield$connection$que13, _yield$connection$que14, rows, user;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          phone = req.body.phone;
          now = new Date().getTime();
          timeEnd = +new Date() + 1000 * (60 * 2 + 0) + 500;
          otp = randomNumber(100000, 999999);
          if (!(phone.length < 9 || phone.length > 10 || !isNumber(phone))) {
            _context10.next = 6;
            break;
          }
          return _context10.abrupt("return", res.status(200).json({
            message: 'phone error',
            status: false
          }));
        case 6:
          _context10.next = 8;
          return _connectDB["default"].query('SELECT * FROM users WHERE `phone` = ? AND veri = 1', [phone]);
        case 8:
          _yield$connection$que13 = _context10.sent;
          _yield$connection$que14 = _slicedToArray(_yield$connection$que13, 1);
          rows = _yield$connection$que14[0];
          if (!(rows.length == 0)) {
            _context10.next = 15;
            break;
          }
          return _context10.abrupt("return", res.status(200).json({
            message: 'Account does not exist',
            status: false,
            timeStamp: timeNow
          }));
        case 15:
          user = rows[0];
          if (!(user.time_otp - now <= 0)) {
            _context10.next = 20;
            break;
          }
          (0, _request["default"])("http://47.243.168.18:9090/sms/batch/v2?appkey=NFJKdK&appsecret=brwkTw&phone=84".concat(phone, "&msg=Your verification code is ").concat(otp, "&extend=").concat(now), /*#__PURE__*/function () {
            var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(error, response, body) {
              var data;
              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    data = JSON.parse(body);
                    if (!(data.code == '00000')) {
                      _context9.next = 5;
                      break;
                    }
                    _context9.next = 4;
                    return _connectDB["default"].execute("UPDATE users SET otp = ?, time_otp = ? WHERE phone = ? ", [otp, timeEnd, phone]);
                  case 4:
                    return _context9.abrupt("return", res.status(200).json({
                      message: 'Submitted successfully',
                      status: true,
                      timeStamp: timeNow,
                      timeEnd: timeEnd
                    }));
                  case 5:
                  case "end":
                    return _context9.stop();
                }
              }, _callee9);
            }));
            return function (_x21, _x22, _x23) {
              return _ref10.apply(this, arguments);
            };
          }());
          _context10.next = 21;
          break;
        case 20:
          return _context10.abrupt("return", res.status(200).json({
            message: 'Send SMS regularly',
            status: false,
            timeStamp: timeNow
          }));
        case 21:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function verifyCodePass(_x19, _x20) {
    return _ref9.apply(this, arguments);
  };
}();
var forGotPassword = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var username, otp, pwd, now, timeEnd, otp2, _yield$connection$que15, _yield$connection$que16, rows, user;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          username = req.body.username;
          otp = req.body.otp;
          pwd = req.body.pwd;
          now = new Date().getTime();
          timeEnd = +new Date() + 1000 * (60 * 2 + 0) + 500;
          otp2 = randomNumber(100000, 999999);
          if (!(username.length < 9 || username.length > 10 || !isNumber(username))) {
            _context11.next = 8;
            break;
          }
          return _context11.abrupt("return", res.status(200).json({
            message: 'phone error',
            status: false
          }));
        case 8:
          _context11.next = 10;
          return _connectDB["default"].query('SELECT * FROM users WHERE `phone` = ? AND veri = 1', [username]);
        case 10:
          _yield$connection$que15 = _context11.sent;
          _yield$connection$que16 = _slicedToArray(_yield$connection$que15, 1);
          rows = _yield$connection$que16[0];
          if (!(rows.length == 0)) {
            _context11.next = 17;
            break;
          }
          return _context11.abrupt("return", res.status(200).json({
            message: 'Account does not exist',
            status: false,
            timeStamp: timeNow
          }));
        case 17:
          user = rows[0];
          if (!(user.time_otp - now > 0)) {
            _context11.next = 28;
            break;
          }
          if (!(user.otp == otp)) {
            _context11.next = 25;
            break;
          }
          _context11.next = 22;
          return _connectDB["default"].execute("UPDATE users SET password = ?, otp = ?, time_otp = ? WHERE phone = ? ", [(0, _md["default"])(pwd), otp2, timeEnd, username]);
        case 22:
          return _context11.abrupt("return", res.status(200).json({
            message: 'Change password successfully',
            status: true,
            timeStamp: timeNow,
            timeEnd: timeEnd
          }));
        case 25:
          return _context11.abrupt("return", res.status(200).json({
            message: 'OTP code is incorrect',
            status: false,
            timeStamp: timeNow
          }));
        case 26:
          _context11.next = 29;
          break;
        case 28:
          return _context11.abrupt("return", res.status(200).json({
            message: 'OTP code has expired',
            status: false,
            timeStamp: timeNow
          }));
        case 29:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function forGotPassword(_x24, _x25) {
    return _ref11.apply(this, arguments);
  };
}();
module.exports = {
  login: login,
  register: register,
  loginPage: loginPage,
  registerPage: registerPage,
  forgotPage: forgotPage,
  verifyCode: verifyCode,
  verifyCodePass: verifyCodePass,
  forGotPassword: forGotPassword
};