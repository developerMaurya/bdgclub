"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function totalMoney() {
  var amount = $('.xvalue').val();
  var money = $('.amount-box').find('.action').attr("value");
  var listJoin = $('.list-join-ao li');
  $('.info-bet').attr("xvalue", amount);
  $('.info-bet').attr("money", money);
  var result = Number(amount) * Number(money) * Number(listJoin.length);
  $('.result').text(result + '');
}
function totalMoney2() {
  var amount = $('.xvalue').val();
  var money = $('.amount-box').find('.action').attr("value");
  var listJoin = $('.purple[data="chon-2-so-phu-hop"] .item.action');
  var listJoin2 = $('.num-box.red[data="chon-1-cap-duy-nhat"] .item.action');
  var listJoin3 = $('.num-box.green[data="chon-1-cap-duy-nhat"] .item.action');
  $('.info-bet').attr("xvalue", amount);
  $('.info-bet').attr("money", money);
  var result = Number(amount) * Number(money) * Number(listJoin2.length * listJoin3.length + listJoin.length);
  $('.result').text(result + '');
}
function totalMoney3() {
  var amount = $('.xvalue').val();
  var money = $('.amount-box').find('.action').attr("value");
  var listJoin = $('.bet-con[game="3"] .item.action');
  var listJoin1 = $('.chon-3-so-giong-nhau .li.action');
  $('.info-bet').attr("xvalue", amount);
  $('.info-bet').attr("money", money);
  var result = Number(amount) * Number(money) * Number(listJoin.length + listJoin1.length);
  $('.result').text(result + '');
}
function totalMoney4() {
  var amount = Number($('.xvalue').val());
  var money = Number($('.amount-box').find('.action').attr("value"));
  var listJoin1 = $('.bet-con[game="4"] .num-box:eq(0) .item.action');
  var listJoinHang1 = listJoin1.length;
  var x1 = 0;
  if (listJoinHang1 >= 3) {
    if (listJoinHang1 == 3) x1 = 1;
    if (listJoinHang1 == 4) x1 = listJoinHang1;
    if (listJoinHang1 == 5) x1 = 10;
    if (listJoinHang1 == 6) x1 = 20;
  }
  var listJoin2 = $('.bet-con[game="4"] .num-box:eq(2) .item.action');
  var listJoinHang2 = listJoin2.length;
  var x2 = 0;
  if (listJoinHang2 >= 2) {
    if (listJoinHang2 <= 3) x2 = 1;
    if (listJoinHang2 == 4) x2 = 6;
    if (listJoinHang2 == 5) x2 = 10;
    if (listJoinHang2 == 6) x2 = 15;
  }
  var listJoin3 = $('.chon-3-so-lien-tiep .li').hasClass('action');
  var x3 = 0;
  if (listJoin3) {
    x3 = 1;
  }
  $('.info-bet').attr("xvalue", amount);
  $('.info-bet').attr("money", money);
  var result = amount * (x1 * money + x2 * money + x3 * money);
  $('.result').text(result + '');
}
var socket = io();
function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}
function RenderResult(_x) {
  return _RenderResult.apply(this, arguments);
}
function _RenderResult() {
  _RenderResult = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(results) {
    var i, random1, random2, random3, result;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          i = 0;
        case 1:
          if (!(i < 30)) {
            _context3.next = 13;
            break;
          }
          random1 = Math.floor(Math.random() * 6) + 1;
          $('.slot-transform:eq(0) .slot-num').attr('class', "slot-num bg".concat(random1));
          random2 = Math.floor(Math.random() * 6) + 1;
          $('.slot-transform:eq(1) .slot-num').attr('class', "slot-num bg".concat(random2));
          random3 = Math.floor(Math.random() * 6) + 1;
          $('.slot-transform:eq(2) .slot-num').attr('class', "slot-num bg".concat(random3));
          _context3.next = 10;
          return sleep(50);
        case 10:
          i++;
          _context3.next = 1;
          break;
        case 13:
          result = String(results).split('');
          $('.slot-transform:eq(0) .slot-num').attr('class', "slot-num bg".concat(result[0]));
          $('.slot-transform:eq(1) .slot-num').attr('class', "slot-num bg".concat(result[1]));
          $('.slot-transform:eq(2) .slot-num').attr('class', "slot-num bg".concat(result[2]));
          return _context3.abrupt("return", false);
        case 18:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _RenderResult.apply(this, arguments);
}
var checkWidth = $("#app").width();
$("html").css("font-size", "".concat(checkWidth / 10, "px"));
$(window).resize(function () {
  var checkWidth = $("#app").width();
  $("html").css("font-size", "".concat(checkWidth / 10, "px"));
});
$(".circular .li").click(function (e) {
  e.preventDefault();
  $(".van-overlay, .pop-quytac").fadeIn(300);
  $("body").addClass("van-overflow-hidden");
});
$(".pop-quytac button, .pop-quytac-buy button").click(function (e) {
  e.preventDefault();
  $(".van-overlay, .pop-quytac, .pop-quytac-buy").fadeOut(300);
  $("body").removeClass("van-overflow-hidden");
});
function reload_money() {
  fetch("/api/webapi/GetUserInfo").then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data.status === false) {
      unsetCookie();
      return false;
    }
    $(".num .moneyU").text("\u20B9 ".concat(data.data.money_user, " "));
    $(".Loading").fadeOut(0);
  });
}
reload_money();
$(".reload_money").click(function (e) {
  var _this = this;
  e.preventDefault();
  $(".Loading").fadeIn(0);
  $(this).addClass("block-click");
  setTimeout(function () {
    $(_this).removeClass("block-click");
  }, 2500);
  reload_money();
});
$('.van-notice-bar__content').css("transition-duration", "42s");
setTimeout(function () {
  $('.van-notice-bar__content').css("transform", "translateX(-1872.29px)");
}, 100);
setInterval(function () {
  $('.van-notice-bar__content').css("transition-duration", "0s");
  $('.van-notice-bar__content').css("transform", "translateX(0px)");
  setTimeout(function () {
    $('.van-notice-bar__content').css("transition-duration", "42s");
    $('.van-notice-bar__content').css("transform", "translateX(-1872.29px)");
  }, 100);
}, 42000);
$('.multiple-box .li').click(function (e) {
  e.preventDefault();
  var value = $(this).attr("value");
  $('.xvalue').val(value);
  $('.multiple-box .li').removeClass('action');
  $(this).addClass('action');
  var game = $('.bet-tab .item.action').attr('game');
  if (game == 1) totalMoney();
  if (game == 2) totalMoney2();
  if (game == 3) totalMoney3();
  if (game == 4) totalMoney4();
  var value2 = $('.xvalue').val();
  if (value2 > 1) {
    $('.minus-plus .minus').addClass('action');
  } else {
    $('.minus-plus .minus').removeClass('action');
  }
});
$('.amount-box .li').click(function (e) {
  e.preventDefault();
  $('.amount-box .li').removeClass('action');
  $(this).addClass('action');
  var game = $('.bet-tab .item.action').attr('game');
  if (game == 1) totalMoney();
  if (game == 2) totalMoney2();
  if (game == 3) totalMoney3();
  if (game == 4) totalMoney4();
  var value2 = $('.xvalue').val();
  if (value2 > 1) {
    $('.minus-plus .minus').addClass('action');
  } else {
    $('.minus-plus .minus').removeClass('action');
  }
});
$('.minus-plus .minus').click(function (e) {
  e.preventDefault();
  var value = Number($('.xvalue').val());
  value -= 1;
  if (value <= 1) {
    value = 1;
    $(this).removeClass('action');
  }
  $(".multiple-box .li").removeClass('action');
  $(".multiple-box .li[value=".concat(value, "]")).addClass('action');
  $('.xvalue').val(value);
  var game = $('.bet-tab .item.action').attr('game');
  if (game == 1) totalMoney();
  if (game == 2) totalMoney2();
  if (game == 3) totalMoney3();
  if (game == 4) totalMoney4();
});
$('.xvalue').on('input', function () {
  var value = $('.xvalue').val();
  if (value == "") {
    $('.minus-plus .minus').removeClass('action');
  } else if (value <= 0) {
    value = 1;
    $('.minus-plus .minus').removeClass('action');
  } else if (value > 100) {
    value = 100;
  }
  if (value > 1) {
    $('.minus-plus .minus').addClass('action');
  } else {
    $('.minus-plus .minus').removeClass('action');
  }
  $(".multiple-box .li").removeClass('action');
  $(".multiple-box .li[value=".concat(value, "]")).addClass('action');
  $('.xvalue').val(value);
  var game = $('.bet-tab .item.action').attr('game');
  if (game == 1) totalMoney();
  if (game == 2) totalMoney2();
  if (game == 3) totalMoney3();
  if (game == 4) totalMoney4();
});
$('.minus-plus .plus').click(function (e) {
  e.preventDefault();
  var value = Number($('.xvalue').val());
  value += 1;
  if (value > 100) {
    value = 100;
  }
  $(".multiple-box .li").removeClass('action');
  $(".multiple-box .li[value=".concat(value, "]")).addClass('action');
  $('.xvalue').val(value);
  $('.minus-plus .minus').addClass('action');
  var game = $('.bet-tab .item.action').attr('game');
  if (game == 1) totalMoney();
  if (game == 2) totalMoney2();
  if (game == 3) totalMoney3();
  if (game == 4) totalMoney4();
});
$('.txt-qu-ytac').click(function (e) {
  e.preventDefault();
  $('.pop-quytac-buy').fadeIn(200);
  $('.van-overlay').fadeIn(200);
});
$(".canned").click(function (e) {
  e.preventDefault();
  dropDown();
});
function dropDown() {
  $('.Bet-box li').remove();
  $(".list-join-total .item").find('.li .icon').remove();
  $(".list-join-total .item").find('.li').removeClass('action');
  $(".pop-total").css("transform", "translateY(400px)");
  $('.c-row[game="2_2"], .list-join-ao span[game="2_1"]').addClass('d-none');
  $('.c-row[game="2_2"]').html('');
  $('.Bet-box span').addClass('d-none');
  $('.bet-con[game="2"] .item, .chon-3-so-giong-nhau .li').removeClass('action');
  $('.bet-con[game="3"] .item').removeClass('action');
  $('.bet-con[game="4"] .item').removeClass('action');
  $('.actionBtn').addClass('d-none');
  $('.chon-3-so-lien-tiep .li').removeClass('action');
  $('.confirm').removeClass('block-click');
  $('.result').text('1');
  $('.betting-mark .amount-box .li').removeClass('action');
  $('.betting-mark .amount-box .li:eq(0)').addClass('action');
  $('.betting-mark .multiple-box .li').removeClass('action');
  $('.betting-mark .multiple-box .li:eq(0)').addClass('action');
  $('.xvalue').val(1);
  $('.num-box').find('.icon').remove();
}
var audio1 = new Audio("/audio/di1.da40b233.mp3");
var audio2 = new Audio("/audio/di2.317de251.mp3");
var clicked = false;
function openAudio() {
  audio1.muted = true;
  audio1.play();
  audio2.muted = true;
  audio2.play();
}
$("body").click(function (e) {
  e.preventDefault();
  if (clicked) return;
  openAudio();
  clicked = true;
});
function playAudio1() {
  audio1.muted = false;
  audio1.play();
}
function playAudio2() {
  audio2.muted = false;
  audio2.play();
}
function cownDownTimer() {
  var countDownDate = new Date("2030-07-16T23:59:59.9999999+01:00").getTime();
  setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    var checkData = Number($('html').attr('data-dpr'));
    var minute = Math.ceil(minutes % checkData);
    var seconds1 = Math.floor(distance % (1000 * 60) / 10000);
    var seconds2 = Math.floor(distance % (1000 * 60) / 1000 % 10);
    $(".flex-row-end .li-item:eq(1)").text(minute);
    $(".flex-row-end .li-item:eq(2)").text(seconds1);
    $(".flex-row-end .li-item:eq(3)").text(seconds2);
    if (minute == 0 && seconds1 == 0 && seconds2 <= 5) {
      $('.mark-box').show();
      $('.mark-box .item:eq(1)').text(seconds2);
      $('.mark-box').show();
      dropDown();
    }
    if (minute >= 0 && seconds1 >= 1 && seconds2 <= 9) {
      $('.mark-box').hide();
    }
  }, 0);
  setInterval(function () {
    var now = new Date().getTime(); //.toLocaleString("en-US", {timeZone: "Asia/Ho_Chi_Minh"});
    var distance = countDownDate - now;
    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    var checkData = Number($('html').attr('data-dpr'));
    var minute = Math.ceil(minutes % checkData);
    var seconds1 = Math.floor(distance % (1000 * 60) / 10000);
    var seconds2 = Math.floor(distance % (1000 * 60) / 1000 % 10);
    var check_volume = localStorage.getItem('volume');
    if (minute == 0 && seconds1 == 0 && seconds2 <= 5) {
      if (clicked) {
        if (check_volume == 'on') {
          playAudio1();
        }
      }
    }
    if (minute == checkData - 1 && seconds1 == 5 && seconds2 >= 9) {
      if (clicked) {
        if (check_volume == 'on') {
          playAudio2();
        }
      }
    }
  }, 1000);
}
cownDownTimer();
var issetVolume = localStorage.getItem('volume');
if (issetVolume == null) {
  localStorage.setItem('volume', 'on');
}
if (issetVolume == 'on') {
  $('.item-volume').attr('src', '/images/volume-up-line.webp');
} else if (issetVolume == 'off') {
  $('.item-volume').attr('src', '/images/volume-off-outline.webp');
} else {
  localStorage.setItem('volume', 'on');
}
$('.item-volume').click(function (e) {
  e.preventDefault();
  var check_volume = localStorage.getItem('volume');
  if (check_volume == 'on') {
    $(this).attr('src', '/images/volume-off-outline.webp');
    localStorage.setItem('volume', 'off');
  } else {
    $(this).attr('src', '/images/volume-up-line.webp');
    localStorage.setItem('volume', 'on');
  }
});
$('.game-minutes .img, .game-minutes .txt').click(function (e) {
  e.preventDefault();
  var parent = $(this).parent();
  $('.game-minutes .item').removeClass('action');
  parent.addClass('action');
  $('.game-minutes .item .img .van-image-1').fadeOut(0);
  $('.game-minutes .item .img .van-image-2').fadeIn(0);
  $('.game-minutes .item .img, .game-minutes .item .txt').removeClass('block-click');
  parent.find('.img .van-image:eq(0)').fadeIn(0);
  parent.find('.img .van-image:eq(1)').fadeOut(0);
  parent.find('.img').addClass('block-click');
  parent.find('.txt').addClass('block-click');
  var data = $(this).attr('data');
  $('html').attr('data-dpr', data);
  callAjaxMeJoin();
  callListOrder();
});
$('.bet-tab .item').click(function (e) {
  e.preventDefault();
  $('.bet-tab .item').removeClass('action');
  $(this).addClass('action');
  var game = $(this).attr('game');
  $('.bet-mark .bet-con').addClass('d-none');
  $('.bet-mark').find("[game='".concat(game, "']")).removeClass('d-none');
  $('.list-join-ao span').addClass('d-none');
  $('.bet-tab .item').removeClass('block-click');
  $(this).addClass('block-click');
  dropDown();
});

// Tổng số
$(".list-join-total .item").click(function (e) {
  e.preventDefault();
  $('.list-join-ao span[game="1"]').removeClass('d-none');
  $(".pop-total").css("transform", "translateY(0px)");
  var check = $(this).find('.li').hasClass('action');
  if (check == true) {
    $(this).find('.li').removeClass('action');
    $(this).find('.li .icon').remove();
    var _html = $(this).find('.li').attr('data-join');
    $('.list-join-ao').find("[value='".concat(_html, "']"))[0].remove();
    var count = $('.list-join-ao').find('li');
    if (count.length == 0) {
      dropDown();
    }
    totalMoney();
    return false;
  }
  var html = $(this).find('.li').attr('data-join');
  if (html == "Big") {
    $('.list-join-ao').append("\n        <li data-v-03b808c2=\"\" value=\"".concat(html, "\" style=\"background-color: #ffa82e\">\n            <span data-v-03b808c2=\"\">").concat(html, "</span>\n        </li>\n    "));
  }
  if (html == "Small") {
    $('.list-join-ao').append("\n        <li data-v-03b808c2=\"\" value=\"".concat(html, "\" style=\"background-color: #6da7f4\">\n            <span data-v-03b808c2=\"\">").concat(html, "</span>\n        </li>\n    "));
  }
  if (html == "Odd") {
    $('.list-join-ao').append("\n        <li data-v-03b808c2=\"\" value=\"".concat(html, "\" style=\"background-color: #fa574a\">\n            <span data-v-03b808c2=\"\">").concat(html, "</span>\n        </li>\n    "));
  }
  if (html == "Even") {
    $('.list-join-ao').append("\n        <li data-v-03b808c2=\"\" value=\"".concat(html, "\" style=\"background-color: #40ad72\">\n            <span data-v-03b808c2=\"\">").concat(html, "</span>\n        </li>\n    "));
  }
  if (html == 3) {
    $('.list-join-ao').append("\n        <li data-v-03b808c2=\"\" value=\"".concat(html, "\" style=\"background-color: #fa574a\">\n            <span data-v-03b808c2=\"\">").concat(html, "</span>\n        </li>\n    "));
  }
  if (html == 4) {
    $('.list-join-ao').append("\n        <li data-v-03b808c2=\"\" value=\"".concat(html, "\" style=\"background-color: #40ad72\">\n            <span data-v-03b808c2=\"\">").concat(html, "</span>\n        </li>\n    "));
  }
  if (html == 5) {
    $('.list-join-ao').append("\n        <li data-v-03b808c2=\"\" value=\"".concat(html, "\" style=\"background-color: #fa574a\">\n            <span data-v-03b808c2=\"\">").concat(html, "</span>\n        </li>\n    "));
  }
  if (html == 6) {
    $('.list-join-ao').append("\n        <li data-v-03b808c2=\"\" value=\"".concat(html, "\" style=\"background-color: #40ad72\">\n            <span data-v-03b808c2=\"\">").concat(html, "</span>\n        </li>\n    "));
  }
  if (html == 7) {
    $('.list-join-ao').append("\n        <li data-v-03b808c2=\"\" value=\"".concat(html, "\" style=\"background-color: #fa574a\">\n            <span data-v-03b808c2=\"\">").concat(html, "</span>\n        </li>\n    "));
  }
  if (html == 8) {
    $('.list-join-ao').append("\n        <li data-v-03b808c2=\"\" value=\"".concat(html, "\" style=\"background-color: #40ad72\">\n            <span data-v-03b808c2=\"\">").concat(html, "</span>\n        </li>\n    "));
  }
  if (html == 9) {
    $('.list-join-ao').append("\n        <li data-v-03b808c2=\"\" value=\"".concat(html, "\" style=\"background-color: #fa574a\">\n            <span data-v-03b808c2=\"\">").concat(html, "</span>\n        </li>\n    "));
  }
  if (html == 10) {
    $('.list-join-ao').append("\n        <li data-v-03b808c2=\"\" value=\"".concat(html, "\" style=\"background-color: #40ad72\">\n            <span data-v-03b808c2=\"\">").concat(html, "</span>\n        </li>\n    "));
  }
  if (html == 11) {
    $('.list-join-ao').append("\n        <li data-v-03b808c2=\"\" value=\"".concat(html, "\" style=\"background-color: #fa574a\">\n            <span data-v-03b808c2=\"\">").concat(html, "</span>\n        </li>\n    "));
  }
  if (html == 12) {
    $('.list-join-ao').append("\n        <li data-v-03b808c2=\"\" value=\"".concat(html, "\" style=\"background-color: #40ad72\">\n            <span data-v-03b808c2=\"\">").concat(html, "</span>\n        </li>\n    "));
  }
  if (html == 13) {
    $('.list-join-ao').append("\n        <li data-v-03b808c2=\"\" value=\"".concat(html, "\" style=\"background-color: #fa574a\">\n            <span data-v-03b808c2=\"\">").concat(html, "</span>\n        </li>\n    "));
  }
  if (html == 14) {
    $('.list-join-ao').append("\n        <li data-v-03b808c2=\"\" value=\"".concat(html, "\" style=\"background-color: #40ad72\">\n            <span data-v-03b808c2=\"\">").concat(html, "</span>\n        </li>\n    "));
  }
  if (html == 15) {
    $('.list-join-ao').append("\n        <li data-v-03b808c2=\"\" value=\"".concat(html, "\" style=\"background-color: #fa574a\">\n            <span data-v-03b808c2=\"\">").concat(html, "</span>\n        </li>\n    "));
  }
  if (html == 16) {
    $('.list-join-ao').append("\n        <li data-v-03b808c2=\"\" value=\"".concat(html, "\" style=\"background-color: #40ad72\">\n            <span data-v-03b808c2=\"\">").concat(html, "</span>\n        </li>\n    "));
  }
  if (html == 17) {
    $('.list-join-ao').append("\n        <li data-v-03b808c2=\"\" value=\"".concat(html, "\" style=\"background-color: #fa574a\">\n            <span data-v-03b808c2=\"\">").concat(html, "</span>\n        </li>\n    "));
  }
  if (html == 18) {
    $('.list-join-ao').append("\n        <li data-v-03b808c2=\"\" value=\"".concat(html, "\" style=\"background-color: #40ad72\">\n            <span data-v-03b808c2=\"\">").concat(html, "</span>\n        </li>\n    "));
  }
  $(".list-join-ao").removeClass('d-none');
  $(this).find('.li').addClass('action');
  $(this).find('.li').append("\n        <div data-v-03b808c2=\"\" class=\"icon c-row c-row-middle-center\">\n            <i data-v-03b808c2=\"\" class=\"van-icon van-icon-success\" style=\"color: rgb(251, 78, 78); font-size: 15px;\"><!----></i>\n        </div>\n    ");
  totalMoney();
});

// 2 số trùng nhau
$('.bet-con[game="2"] .purple[data="chon-2-so-phu-hop"] .item').click(function (e) {
  // Hàng 1
  e.preventDefault();
  $(".pop-total").css("transform", "translateY(0px)");
  var check = $(this).hasClass('action');
  if (check) {
    var _data = $(this).attr('data');
    $(".list-join-ao li[data=".concat(_data, "]")).remove();
    $(this).removeClass('action');
    var _game = $(this).attr('game');
    var count = $(".list-join-ao li");
    var count2 = $(".c-row[game=2_2] li");
    if (count.length <= 0 && count2.length <= 0) {
      $(".list-join-ao span[game=".concat(_game, "]")).addClass('d-none');
      $(".pop-total").css("transform", "translateY(400px)");
      dropDown();
    } else if (count.length <= 0) {
      $(".list-join-ao span[game=".concat(_game, "]")).addClass('d-none');
    }
    totalMoney2();
    $(this).find('.icon').remove();
    return false;
  }
  var game = $(this).attr('game');
  var data = $(this).attr('data');
  $(".list-join-ao").removeClass('d-none');
  $(".list-join-ao").append("\n        <li data-v-03b808c2=\"\" class=\"actionViolet\" data=\"".concat(data, "\">").concat(data, "</li>\n    "));
  $(".list-join-ao span[game=".concat(game, "]")).removeClass('d-none');
  $(this).addClass('action');
  totalMoney2();
  $(this).append("\n        <div data-v-03b808c2=\"\" class=\"icon c-row c-row-middle-center\">\n            <i data-v-03b808c2=\"\" class=\"van-icon van-icon-success\" style=\"color: rgb(251, 78, 78); font-size: 15px;\"><!----></i>\n        </div>\n    ");
});
function handlingGame2() {
  var hang1 = $('.num-box[hang="1"] .action');
  var hang2 = $('.num-box[hang="2"] .action');
  var html = '';
  var numberHang1 = '';
  var number = '';
  if (hang1.length > 0 && hang2.length > 0) {
    for (var i = 0; i < hang1.length; i++) {
      numberHang1 = hang1[i].innerText;
      for (var _i = 0; _i < hang2.length; _i++) {
        number += String(hang2[_i].innerText) + ',';
      }
      number = number.slice(0, -1);
      html += "\n                <li data-v-03b808c2=\"\" class=\"actionRedGreen\" data=\"".concat(numberHang1, "\">").concat(numberHang1, "|").concat(number, "</li>\n            ");
      numberHang1 = '';
      number = '';
    }
    $(".c-row[game=2_2]").html(html);
    $(".c-row[game=2_2]").prepend("<span data-v-03b808c2=\"\">Choose a unique pair of numbers\uFF1A</span>");
  }
  if (hang1.length <= 0 || hang2.length <= 0) {
    $(".c-row[game=2_2]").html('');
    // $(`.c-row[game=2_2]`).prepend(`<span data-v-03b808c2="">Chọn một cặp số duy nhất：</span>`);
  }
}
$('.bet-con[game="2"] .num-box[data="chon-1-cap-duy-nhat"] .item').click( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
    var check, data, _game2, _count, _count2, number, hang, element, _check, _element, _check2, game, countHang1, countHang2, count, count2;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // Hàng 2
          e.preventDefault();
          check = $(this).hasClass('action');
          if (!check) {
            _context.next = 15;
            break;
          }
          data = $(this).attr('data');
          $(".c-row[game=2_2] li[data=".concat(data, "]")).remove();
          $(this).removeClass('action');
          _game2 = $(this).attr('game');
          _context.next = 9;
          return handlingGame2();
        case 9:
          _count = $(".list-join-ao li");
          _count2 = $(".c-row[game=2_2] li");
          if (_count.length <= 0 && _count2.length <= 0) {
            $(".c-row[game=2_2]").addClass('d-none');
            $(".pop-total").css("transform", "translateY(400px)");
            dropDown();
          } else if (_count2.length <= 0) {
            $(".c-row[game=2_2]").addClass('d-none');
          }
          totalMoney2();
          $(this).find('.icon').remove();
          return _context.abrupt("return", false);
        case 15:
          number = $(this).attr('number');
          hang = $(this).parent().attr('hang');
          if (hang == 1) {
            element = $('.num-box[hang="2"]').find("[number=".concat(number, "]"));
            _check = element.hasClass('action');
            if (_check) {
              $('.num-box[hang="2"]').find("[number=".concat(number, "]")).removeClass('action');
              $('.num-box[hang="2"]').find("[number=".concat(number, "]")).find('.icon').remove();
            }
          } else {
            _element = $('.num-box[hang="1"]').find("[number=".concat(number, "]"));
            _check2 = _element.hasClass('action');
            if (_check2) {
              $('.num-box[hang="1"]').find("[number=".concat(number, "]")).removeClass('action');
              $('.num-box[hang="1"]').find("[number=".concat(number, "]")).find('.icon').remove();
            }
          }
          game = $(this).attr('game');
          $(".c-row[game=".concat(game, "]")).removeClass('d-none');
          $(".list-join-ao").removeClass('d-none');
          $(this).addClass('action');
          countHang1 = $('.num-box[hang="1"] .action').length;
          countHang2 = $('.num-box[hang="2"] .action').length;
          if (countHang1 >= 1 && countHang2 >= 1) {
            $(".pop-total").css("transform", "translateY(0px)");
          }
          handlingGame2();
          count = $(".list-join-ao li");
          count2 = $(".c-row[game=2_2] li");
          if (count.length <= 0 && count2.length <= 0) {
            $(".c-row[game=2_2]").addClass('d-none');
            $(".pop-total").css("transform", "translateY(400px)");
          }
          totalMoney2();
          $(this).append("\n        <div data-v-03b808c2=\"\" class=\"icon c-row c-row-middle-center\">\n            <i data-v-03b808c2=\"\" class=\"van-icon van-icon-success\" style=\"color: rgb(251, 78, 78); font-size: 15px;\"><!----></i>\n        </div>\n    ");
        case 31:
        case "end":
          return _context.stop();
      }
    }, _callee, this);
  }));
  return function (_x2) {
    return _ref.apply(this, arguments);
  };
}());

// 3 số trùng nhau
$('.bet-con[game="3"] .item').click(function (e) {
  e.preventDefault();
  var check = $(this).hasClass('action');
  if (check) {
    var _data2 = $(this).attr('data');
    $(".Bet-box li[data=".concat(_data2, "]")).remove();
    $(this).removeClass('action');
    var count = $(".list-join-ao li");
    var _check3 = $('.chon-3-so-giong-nhau .li').hasClass('action');
    if (count.length <= 0 && !_check3) {
      $(".list-join-ao[game=3]").addClass('d-none');
      $(".pop-total").css("transform", "translateY(400px)");
      dropDown();
    }
    if (count.length <= 0) {
      $(".list-join-ao span[game=\"3\"]").addClass('d-none');
    }
    totalMoney3();
    $(this).find('.icon').remove();
    return false;
  }
  var data = $(this).attr('data');
  var game = $(this).parent().parent().attr('game');
  $(".Bet-box ul span[game=".concat(game, "]")).removeClass('d-none');
  $(".list-join-ao").removeClass('d-none');
  $(this).addClass('action');
  $(".Bet-box .list-join-ao").append("\n        <li data-v-03b808c2=\"\" class=\"actionViolet\" data=\"".concat(data, "\">").concat(data, "</li>\n    "));
  $(".pop-total").css("transform", "translateY(0px)");
  totalMoney3();
  $(this).append("\n        <div data-v-03b808c2=\"\" class=\"icon c-row c-row-middle-center\">\n            <i data-v-03b808c2=\"\" class=\"van-icon van-icon-success\" style=\"color: rgb(251, 78, 78); font-size: 15px;\"><!----></i>\n        </div>\n    ");
});
$('.chon-3-so-giong-nhau .li').click(function (e) {
  e.preventDefault();
  var check = $(this).hasClass('action');
  if (check) {
    $(this).removeClass('action');
    $('.actionBtn').addClass('d-none');
    var count = $(".list-join-ao li");
    var _check4 = $('.chon-3-so-giong-nhau .li').hasClass('action');
    if (count.length <= 0 && !_check4) {
      $(".list-join-ao[game=3]").addClass('d-none');
      $(".pop-total").css("transform", "translateY(400px)");
      dropDown();
    }
    totalMoney3();
    $(this).find('.icon').remove();
    return false;
  }
  $('.actionBtn').text('Choose 3 identical numbers');
  $('.actionBtn').removeClass('d-none');
  $(this).addClass('action');
  $(".pop-total").css("transform", "translateY(0px)");
  totalMoney3();
  $(this).append("\n        <div data-v-03b808c2=\"\" class=\"icon c-row c-row-middle-center\">\n            <i data-v-03b808c2=\"\" class=\"van-icon van-icon-success\" style=\"color: rgb(251, 78, 78); font-size: 15px;\"><!----></i>\n        </div>\n    ");
});

// Khác số
$('.bet-con[game="4"] .num-box:eq(0) .item').click(function (e) {
  e.preventDefault();
  var check = $(this).hasClass('action');
  if (check) {
    var _data3 = $(this).attr('data');
    $(".Bet-box .list-join-ao li[data=".concat(_data3, "]")).remove();
    $(this).removeClass('action');
    var _count3 = $(".list-join-ao li").length;
    var count2 = $(".Bet-box ul[game=\"4\"] li").length;
    var _check5 = $('.chon-3-so-lien-tiep .li').hasClass('action');
    if (_count3 < 3 && count2 < 2 && !_check5) {
      $(".list-join-ao").addClass('d-none');
      $(".pop-total").css("transform", "translateY(400px)");
    }
    if (_count3 < 3) {
      $(".list-join-ao").addClass('d-none');
    }
    totalMoney4();
    $(this).find('.icon').remove();
    return false;
  }
  var data = $(this).attr('data');
  var game = $(this).parent().parent().attr('game');
  $(".list-join-ao").addClass('d-none');
  $(".Bet-box ul span[game=".concat(game, "]")).removeClass('d-none');
  $(this).addClass('action');
  $(".Bet-box ul.list-join-ao").append("\n        <li data-v-03b808c2=\"\" class=\"actionViolet\" data=\"".concat(data, "\">").concat(data, "</li>\n    "));
  var count = $(".Bet-box ul.list-join-ao li").length;
  if (count >= 3) {
    $(".list-join-ao").removeClass('d-none');
    $(".pop-total").css("transform", "translateY(0px)");
  }
  totalMoney4();
  $(this).append("\n        <div data-v-03b808c2=\"\" class=\"icon c-row c-row-middle-center\">\n            <i data-v-03b808c2=\"\" class=\"van-icon van-icon-success\" style=\"color: rgb(251, 78, 78); font-size: 15px;\"><!----></i>\n        </div>\n    ");
});
$('.chon-3-so-lien-tiep .li').click(function (e) {
  e.preventDefault();
  var check = $(this).hasClass('action');
  if (check) {
    $(this).removeClass('action');
    $('.actionBtn').addClass('d-none');
    var count = $(".list-join-ao li");
    var count2 = $(".Bet-box ul[game=\"4\"] li").length;
    var count3 = $(".list-join-ao li").length;
    var _check6 = $('.chon-3-so-giong-nhau .li').hasClass('action');
    if (count.length <= 0 && count2 < 2 && count3 < 3 && !_check6) {
      $(".list-join-ao[game=3]").addClass('d-none');
      $(".pop-total").css("transform", "translateY(400px)");
    }
    totalMoney4();
    $(this).find('.icon').remove();
    return false;
  }
  $('.actionBtn').text('Choose 3 consecutive numbers');
  $('.actionBtn').removeClass('d-none');
  $(this).addClass('action');
  $(".pop-total").css("transform", "translateY(0px)");
  totalMoney4();
  $(this).append("\n        <div data-v-03b808c2=\"\" class=\"icon c-row c-row-middle-center\">\n            <i data-v-03b808c2=\"\" class=\"van-icon van-icon-success\" style=\"color: rgb(251, 78, 78); font-size: 15px;\"><!----></i>\n        </div>\n    ");
});
$('.bet-con[game="4"] .num-box:eq(2) .item').click(function (e) {
  e.preventDefault();
  var check = $(this).hasClass('action');
  if (check) {
    var _data4 = $(this).attr('data');
    $(".Bet-box ul[game=\"4\"] li[data=".concat(_data4, "]")).remove();
    $(this).removeClass('action');
    var _count4 = $(".Bet-box ul[game=\"4\"] li").length;
    var count2 = $(".list-join-ao li").length;
    var _check7 = $('.chon-3-so-lien-tiep .li').hasClass('action');
    if (_count4 < 2 && count2 < 3 && !_check7) {
      $(".Bet-box ul[game=\"4\"]").addClass('d-none');
      $(".pop-total").css("transform", "translateY(400px)");
    }
    if (_count4 < 2) {
      $(".Bet-box ul[game=\"4\"]").addClass('d-none');
    }
    totalMoney4();
    $(this).find('.icon').remove();
    return false;
  }
  var data = $(this).attr('data');
  $(".Bet-box ul[game=\"4\"]").removeClass('d-none');
  $(".Bet-box ul[game=\"4\"] span").removeClass('d-none');
  $(this).addClass('action');
  $(".Bet-box ul[game=\"4\"]").append("\n        <li data-v-03b808c2=\"\" class=\"actionViolet\" data=\"".concat(data, "\">").concat(data, "</li>\n    "));
  var count = $(".Bet-box ul[game=\"4\"] li").length;
  if (count >= 2) {
    $(".pop-total").css("transform", "translateY(0px)");
  }
  totalMoney4();
  $(this).append("\n        <div data-v-03b808c2=\"\" class=\"icon c-row c-row-middle-center\">\n            <i data-v-03b808c2=\"\" class=\"van-icon van-icon-success\" style=\"color: rgb(251, 78, 78); font-size: 15px;\"><!----></i>\n        </div>\n    ");
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Đặt cược
function alertMess(mess) {
  $('body').append("\n      <div data-v-1dcba851=\"\" class=\"msg\">\n        <div data-v-1dcba851=\"\" class=\"msg-content v-enter-active v-enter-to\" style=\"\"> ".concat(mess, " </div>\n      </div>\n      "));
  setTimeout(function () {
    $('.msg .msg-content').removeClass('v-enter-active v-enter-to');
    $('.msg .msg-content').addClass('v-leave-active v-leave-to');
    setTimeout(function () {
      $('.msg').remove();
    }, 100);
  }, 1000);
}
function sendGame1() {
  var join = '';
  var countwe = $('.bet-con[game="1"] .list-join-total .item .action');
  for (var i = 0; i < countwe.length; i++) {
    join += countwe[i].attributes[2].value + ',';
  }
  var listJoin = join.slice(0, -1);
  var xvalue = $('.info-bet').attr("xvalue");
  var money = $('.info-bet').attr("money");
  $.ajax({
    type: "POST",
    url: "/api/webapi/action/k3/join",
    data: {
      listJoin: listJoin,
      game: $('html').attr('data-dpr'),
      gameJoin: 1,
      xvalue: xvalue,
      money: money
    },
    dataType: "json",
    success: function success(response) {
      alertMess(response.message);
      var change = String(response.change);
      if (response.status) {
        $('.moneyU').text(response.money + '');
        socket.emit('data-server-3', {
          change: change,
          gameJoin: 1,
          listJoin: listJoin,
          money: money,
          xvalue: xvalue,
          game: $('html').attr('data-dpr')
        });
      }
      dropDown();
    }
  });
}
function sendGame2() {
  var join2 = '';
  var count2 = $('.list-join-ao li');
  for (var i = 0; i < count2.length; i++) {
    join2 += count2[i].innerText + ',';
  }
  var listJoin1 = join2.slice(0, -1);
  var join = '';
  var countwe = $('.Bet-box ul[game="2_2"] .actionRedGreen');
  for (var _i2 = 0; _i2 < countwe.length; _i2++) {
    join += countwe[_i2].innerText + '&';
  }
  var listJoin2 = join.slice(0, -1);
  var listJoin = listJoin1 + '@' + listJoin2;
  var xvalue = $('.info-bet').attr("xvalue");
  var money = $('.info-bet').attr("money");
  $.ajax({
    type: "POST",
    url: "/api/webapi/action/k3/join",
    data: {
      listJoin: listJoin,
      game: $('html').attr('data-dpr'),
      gameJoin: 2,
      xvalue: xvalue,
      money: money
    },
    dataType: "json",
    success: function success(response) {
      alertMess(response.message);
      var change = String(response.change);
      if (response.status) {
        $('.moneyU').text(response.money + '');
        socket.emit('data-server-3', {
          change: change,
          gameJoin: 2,
          listJoin: listJoin,
          money: money,
          xvalue: xvalue,
          game: $('html').attr('data-dpr')
        });
      }
      dropDown();
    }
  });
}
function sendGame3() {
  var join = '';
  var countwe = $('.list-join-ao li');
  for (var i = 0; i < countwe.length; i++) {
    join += countwe[i].innerText + ',';
  }
  var listJoin = join.slice(0, -1);
  var check = $('.actionBtn').hasClass('d-none');
  var threeNum = '';
  if (!check) {
    threeNum = '3';
  }
  listJoin = listJoin + '@' + threeNum;
  var xvalue = $('.info-bet').attr("xvalue");
  var money = $('.info-bet').attr("money");
  $.ajax({
    type: "POST",
    url: "/api/webapi/action/k3/join",
    data: {
      listJoin: listJoin,
      game: $('html').attr('data-dpr'),
      gameJoin: 3,
      xvalue: xvalue,
      money: money
    },
    dataType: "json",
    success: function success(response) {
      alertMess(response.message);
      var change = String(response.change);
      if (response.status) {
        $('.moneyU').text(response.money + '');
        socket.emit('data-server-3', {
          change: change,
          gameJoin: 3,
          listJoin: listJoin,
          money: money,
          xvalue: xvalue,
          game: $('html').attr('data-dpr')
        });
      }
      dropDown();
    }
  });
}
function sendGame4() {
  var join = '';
  var countwe = $('.list-join-ao li');
  if (countwe.length >= 3) {
    for (var i = 0; i < countwe.length; i++) {
      join += countwe[i].innerText + ',';
    }
  }
  var join2 = 'y';
  var countwe2 = $('.actionBtn').hasClass('d-none');
  if (!countwe2) {
    join2 = 'u';
  }
  var join3 = '';
  var countwe3 = $('.Bet-box .c-row[game="4"] li');
  if (countwe3.length >= 2) {
    for (var _i3 = 0; _i3 < countwe3.length; _i3++) {
      join3 += countwe3[_i3].innerText + ',';
    }
  }
  var listJoin = join.slice(0, -1) + '@' + join2 + '@' + join3.slice(0, -1);
  var xvalue = $('.info-bet').attr("xvalue");
  var money = $('.info-bet').attr("money");
  $.ajax({
    type: "POST",
    url: "/api/webapi/action/k3/join",
    data: {
      listJoin: listJoin,
      game: $('html').attr('data-dpr'),
      gameJoin: 4,
      xvalue: xvalue,
      money: money
    },
    dataType: "json",
    success: function success(response) {
      alertMess(response.message);
      var change = String(response.change);
      if (response.status) {
        $('.moneyU').text(response.money + '');
        socket.emit('data-server-3', {
          change: change,
          gameJoin: 4,
          listJoin: listJoin,
          money: money,
          xvalue: xvalue,
          game: $('html').attr('data-dpr')
        });
      }
      dropDown();
    }
  });
}
$('.confirm').click( /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
    var game;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          e.preventDefault();
          $(this).addClass('block-click');
          game = $('.bet-tab .action').attr('game');
          if (!(game == 1)) {
            _context2.next = 8;
            break;
          }
          _context2.next = 6;
          return sendGame1();
        case 6:
          _context2.next = 21;
          break;
        case 8:
          if (!(game == 2)) {
            _context2.next = 13;
            break;
          }
          _context2.next = 11;
          return sendGame2();
        case 11:
          _context2.next = 21;
          break;
        case 13:
          if (!(game == 3)) {
            _context2.next = 18;
            break;
          }
          _context2.next = 16;
          return sendGame3();
        case 16:
          _context2.next = 21;
          break;
        case 18:
          if (!(game == 4)) {
            _context2.next = 21;
            break;
          }
          _context2.next = 21;
          return sendGame4();
        case 21:
          callAjaxMeJoin();
        case 22:
        case "end":
          return _context2.stop();
      }
    }, _callee2, this);
  }));
  return function (_x3) {
    return _ref2.apply(this, arguments);
  };
}());