"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var socket = io();
$(window).on('load', function () {
  setTimeout(function () {
    $('#preloader').fadeOut(0);
  }, 100);
});
$(document).ready(function () {
  $("a[href=\"".concat(window.location.pathname, "\"]")).addClass('active');
  $("a[href=\"".concat(window.location.pathname, "\"]")).css('pointerEvents', 'none');
});
$('.back-to-tops').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;
});
var isNumber = function isNumber(params) {
  var pattern = /^[0-9]*\d$/;
  return pattern.test(params);
};
function formatMoney(money) {
  return String(money).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}
function cownDownTimer() {
  var countDownDate = new Date("2030-07-16T23:59:59.9999999+01:00").getTime();
  setInterval(function () {
    var checkID = $('html').attr('data-change');
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    var minute = Math.ceil(minutes % Number(checkID));
    var seconds1 = Math.floor(distance % (1000 * 60) / 10000);
    var seconds2 = Math.floor(distance % (1000 * 60) / 1000 % 10);
    if (checkID != 1) {
      $(".time .time-sub:eq(1)").text(minute);
    }
    $(".time .time-sub:eq(2)").text(seconds1);
    $(".time .time-sub:eq(3)").text(seconds2);
  }, 0);
}
cownDownTimer();

// -------------------------------------------------------------------------------------

function showListOrder(datas) {
  var html = '';
  datas.map(function (data) {
    var list_kq = '';
    var total = 0;
    String(data.result).split('').forEach(function (e) {
      total += Number(e);
      list_kq += "<span data-v-a9660e98=\"\" class=\"red box-xs\"> ".concat(e, " </span>");
    });
    html += "\n        <div data-v-a9660e98=\"\" class=\"c-tc item van-row\">\n            <div data-v-a9660e98=\"\" class=\"van-col van-col--8\">\n                <div data-v-a9660e98=\"\" class=\"c-tc goItem\">".concat(data.period, "</div>\n            </div>\n            <div data-v-a9660e98=\"\" class=\"van-col van-col--5\">\n                <div data-v-a9660e98=\"\" class=\"c-tc goItem\" style=\"display: flex;justify-content: center;\">\n                    <!---->\n                    ").concat(list_kq, "\n                    <span data-v-a9660e98=\"\" class=\"red box-xs\"> = </span>\n                    <span data-v-a9660e98=\"\" class=\"red box-xs\" style=\"font-size: 14px\"> ").concat(total, " </span>\n                </div>\n            </div>\n            <div data-v-a9660e98=\"\" class=\"van-col van-col--5\">\n                <div data-v-a9660e98=\"\" class=\"c-tc goItem\">\n                    <span data-v-a9660e98=\"\"> ").concat(total >= 3 && total <= 10 ? "Small" : "Big", " </span>\n                </div>\n            </div>\n            <div data-v-a9660e98=\"\" class=\"van-col van-col--5\">\n                <div data-v-a9660e98=\"\" class=\"c-tc goItem\">\n                    <span data-v-a9660e98=\"\"> ").concat(total % 2 == 0 ? "Even" : "Odd", " </span>\n                </div>\n            </div>\n        </div>\n        ");
  });
  $('#list-orders').html(html);
}
function messNewJoin2(datas) {
  var result = '';
  datas.map(function (data) {
    if (data.typeGame == 'total') {
      result += "\n                <div class=\"direct-chat-infos clearfix mt-2\">\n                    <span class=\"direct-chat-name float-left\"></span>\n                </div>\n                <img class=\"direct-chat-img\" src=\"/images/myimg.png\" alt=\"message user image\">\n                <div class=\"direct-chat-text\" style=\"background-color: #1eb93d\"> Join Total (".concat(data.bet, ") with the A mount of money ").concat(data.money, "</div>\n            ");
    }
    if (data.typeGame == 'three-same') {
      result += "\n                <div class=\"direct-chat-infos clearfix mt-2\">\n                    <span class=\"direct-chat-name float-left\"></span>\n                </div>\n                <img class=\"direct-chat-img\" src=\"/images/myimg.png\" alt=\"message user image\">\n                <div class=\"direct-chat-text\" style=\"background-color: #1eb93d\"> Join 3 same numbers(".concat(data.bet, ") with the A mount of money ").concat(data.money, "</div>\n            ");
    }
    if (data.typeGame == 'two-same') {
      result += "\n                <div class=\"direct-chat-infos clearfix mt-2\">\n                    <span class=\"direct-chat-name float-left\"></span>\n                </div>\n                <img class=\"direct-chat-img\" src=\"/images/myimg.png\" alt=\"message user image\">\n                <div class=\"direct-chat-text\" style=\"background-color: #1eb93d\"> Join 2 same numbers(".concat(data.bet, ") with the A mount of money ").concat(data.money, "</div>\n            ");
    }
    if (data.typeGame == 'unlike') {
      result += "\n                <div class=\"direct-chat-infos clearfix mt-2\">\n                    <span class=\"direct-chat-name float-left\"></span>\n                </div>\n                <img class=\"direct-chat-img\" src=\"/images/myimg.png\" alt=\"message user image\">\n                <div class=\"direct-chat-text\" style=\"background-color: #1eb93d\"> Join another number(".concat(data.bet, ") with the A mount of money ").concat(data.money, "</div>\n            ");
    }
  });
  $('.direct-chat-msg').html(result);
  $(".direct-chat-warning .direct-chat-messages").animate({
    scrollTop: $(".direct-chat-msg").prop("scrollHeight")
  }, 750);
}
function messNewJoin3(datas) {
  var total = 0;
  var twoSame = 0;
  var threeSame = 0;
  var unlike = 0;
  datas.map(function (data) {
    var typeGame = data.typeGame;
    if (typeGame == "total") {
      total += data.money;
      $("#total").attr('totalMoney', total);
      $("#total").text(total);
    }
    if (typeGame == "two-same") {
      twoSame += data.money;
      $("#2-so-trung").attr('totalMoney', twoSame);
      $("#2-so-trung").text(twoSame);
    }
    if (typeGame == "three-same") {
      threeSame += data.money;
      $("#3-so-trung").attr('totalMoney', threeSame);
      $("#3-so-trung").text(threeSame);
    }
    if (typeGame == "unlike") {
      unlike += data.money;
      $("#khac-so").attr('totalMoney', unlike);
      $("#khac-so").text(unlike);
    }
  });
}
function callListOrder() {
  var game = $('html').attr('data-change');
  $.ajax({
    type: "POST",
    url: "/api/webapi/admin/k3/listOrders",
    data: {
      gameJoin: game
    },
    dataType: "json",
    success: function success(response) {
      showListOrder(response.data.gameslist);
      messNewJoin2(response.bet);
      messNewJoin3(response.bet);
      var settings = response.settings[0];
      if (game == 1) $('#ketQua').text('next result: ' + "".concat(settings.k3d == '-1' ? 'Random' : settings.k3d));
      if (game == 3) $('#ketQua').text('next result: ' + "".concat(settings.k3d3 == '-1' ? 'Random' : settings.k3d3));
      if (game == 5) $('#ketQua').text('next result: ' + "".concat(settings.k3d5 == '-1' ? 'Random' : settings.k3d5));
      if (game == 10) $('#ketQua').text('next result: ' + "".concat(settings.k3d10 == '-1' ? 'Random' : settings.k3d10));
      $(".reservation-chunk-sub-num").text(response.period);
      $('#preloader').fadeOut(0);
    }
  });
}
callListOrder();
socket.on("data-server-k3", function (msg) {
  if (msg) {
    callListOrder();
    $('.direct-chat-msg').html('');
  }
});
function messNewJoin(data) {
  var game = $('html').attr('data-change');
  if (data.change == 1) return;
  if (data.game != game) return;
  var typeGame = '';
  if (data.gameJoin == 1) typeGame = 'total';
  if (data.gameJoin == 2) typeGame = 'two-same';
  if (data.gameJoin == 3) typeGame = 'three-same';
  if (data.gameJoin == 4) typeGame = 'unlike';
  var result = '';
  if (typeGame == 'total') {
    result += "\n            <div class=\"direct-chat-infos clearfix mt-2\">\n                <span class=\"direct-chat-name float-left\"></span>\n            </div>\n            <img class=\"direct-chat-img\" src=\"/images/myimg.png\" alt=\"message user image\">\n            <div class=\"direct-chat-text\" style=\"background-color: #1eb93d\"> Join Total(".concat(data.listJoin, ") with the A mount of money ").concat(Number(data.money) * Number(data.xvalue), "</div>\n        ");
  }
  if (typeGame == 'three-same') {
    result += "\n            <div class=\"direct-chat-infos clearfix mt-2\">\n                <span class=\"direct-chat-name float-left\"></span>\n            </div>\n            <img class=\"direct-chat-img\" src=\"/images/myimg.png\" alt=\"message user image\">\n            <div class=\"direct-chat-text\" style=\"background-color: #1eb93d\"> Join 3 same numbers(".concat(data.listJoin, ") with the A mount of money ").concat(Number(data.money) * Number(data.xvalue), "</div>\n        ");
  }
  if (typeGame == 'two-same') {
    result += "\n            <div class=\"direct-chat-infos clearfix mt-2\">\n                <span class=\"direct-chat-name float-left\"></span>\n            </div>\n            <img class=\"direct-chat-img\" src=\"/images/myimg.png\" alt=\"message user image\">\n            <div class=\"direct-chat-text\" style=\"background-color: #1eb93d\"> Join 3 same numbers(".concat(data.listJoin, ") with the A mount of money ").concat(Number(data.money) * Number(data.xvalue), "</div>\n        ");
  }
  if (typeGame == 'unlike') {
    result += "\n            <div class=\"direct-chat-infos clearfix mt-2\">\n                <span class=\"direct-chat-name float-left\"></span>\n            </div>\n            <img class=\"direct-chat-img\" src=\"/images/myimg.png\" alt=\"message user image\">\n            <div class=\"direct-chat-text\" style=\"background-color: #1eb93d\"> Join another number(".concat(data.listJoin, ") with the A mount of money ").concat(Number(data.money) * Number(data.xvalue), "</div>\n        ");
  }
  $('.direct-chat-msg').append(result);
  $(".direct-chat-warning .direct-chat-messages").animate({
    scrollTop: $(".direct-chat-msg").prop("scrollHeight")
  }, 750);
}
function messNewJoin5(data) {
  var game = $('html').attr('data-change');
  if (data.change == 1) return;
  if (data.game != game) return;
  var typeGame = "";
  if (data.gameJoin == 1) typeGame = "total";
  if (data.gameJoin == 2) typeGame = "two-same";
  if (data.gameJoin == 3) typeGame = "three-same";
  if (data.gameJoin == 4) typeGame = "unlike";
  if (typeGame == "total") {
    var money = Number($("#total").attr('totalMoney')) + Number(data.money) * Number(data.xvalue);
    $("#total").attr('totalMoney', money);
    $("#total").text(money);
  }
  if (typeGame == "two-same") {
    var _money = Number($("#2-so-trung").attr('totalMoney')) + Number(data.money) * Number(data.xvalue);
    $("#2-so-trung").attr('totalMoney', _money);
    $("#2-so-trung").text(_money);
  }
  if (typeGame == "three-same") {
    var _money2 = Number($("#3-so-trung").attr('totalMoney')) + Number(data.money) * Number(data.xvalue);
    $("#3-so-trung").attr('totalMoney', _money2);
    $("#3-so-trung").text(_money2);
  }
  if (typeGame == "unlike") {
    var _money3 = Number($("#khac-so").attr('totalMoney')) + Number(data.money) * Number(data.xvalue);
    $("#khac-so").attr('totalMoney', _money3);
    $("#khac-so").text(_money3);
  }
}
socket.on("data-server-3", function (msg) {
  messNewJoin(msg);
  messNewJoin5(msg);
});
$('#manage .col-12').click( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
    var game;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          e.preventDefault();
          $('#preloader').fadeIn(0);
          game = $(this).attr('data');
          $('html').attr('data-change', game);
          _context.next = 6;
          return callListOrder();
        case 6:
          $('#manage .col-12').removeClass('block-click');
          $(this).addClass('block-click');
          $('#manage .col-12').find('.info-box-content').removeClass('active-game');
          $(this).find('.info-box-content').addClass('active-game');
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, this);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());