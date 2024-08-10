"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var socket = io();
var pageno = 0;
var limit = 10;
var page = 1;
socket.on("data-server-5d", function (msg) {
  console.log(msg.chane);
  if (msg) {
    var checkData = $('html').attr('data-dpr');
    if (checkData == msg.game) {
      pageno = 0;
      limit = 10;
      page = 1;
      var notResult = msg.data[0];
      var Result = msg.data[1];
      var check = $('#number_result').attr('data-select');
      if (check == 'all') {
        reload_money();
        callListOrder();
        animationNewPar(Result.result);
      } else {
        reload_money();
        showMeJoin();
        animationNewPar(Result.result);
      }
      handleMyEmerdList();
      $('#period').text(notResult.period);
      $("#previous").addClass("block-click");
      $("#previous").removeClass("action");
      $("#previous .van-icon-arrow").css("color", "#7f7f7f");
      $("#next").removeClass("block-click");
      $("#next").addClass("action");
      $("#next .van-icon-arrow").css("color", "#fff");
    }
  }
});
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
function animationNewPar(data) {
  var arr = String(data).split('');
  $('.transform0, .transform1, .transform2, .transform3, .transform4, .transform5').addClass('slot-scroll');
  setTimeout(function () {
    for (var i = 0; i < 5; i++) {
      var random = Math.floor(Math.random() * 10);
      $(".transform".concat(i, " .slot-num:eq(0)")).text(random);
      random = Math.floor(Math.random() * 10);
      $(".transform".concat(i, " .slot-num:eq(1)")).text(random);
      $(".transform".concat(i, " .slot-num:eq(2)")).text(arr[i]);
    }
    $('.transform0').removeClass('slot-scroll');
    setTimeout(function () {
      $('.transform1, .transform2, .transform3, .transform4, .transform5').removeClass('slot-scroll');
      showResultNow(data);
    }, 100);
  }, 2500);
}
function alertMess(text, sic) {
  $('body').append("\n        <div data-v-1dcba851=\"\" class=\"msg\">\n            <div data-v-1dcba851=\"\" class=\"msg-content v-enter-active v-enter-to\" style=\"\"> ".concat(text, " </div>\n        </div>\n        "));
  setTimeout(function () {
    $('.msg .msg-content').removeClass('v-enter-active v-enter-to');
    $('.msg .msg-content').addClass('v-leave-active v-leave-to');
    setTimeout(function () {
      $('.msg').remove();
    }, 100);
  }, 1000);
}
function ShowListOrder(list_orders) {
  if (list_orders.length == 0) {
    return $("#list_order").html("\n            <div data-v-a9660e98=\"\" class=\"van-empty\">\n                <div class=\"van-empty__image\">\n                    <img src=\"/images/empty-image-default.png\" />\n                </div>\n                <p class=\"van-empty__description\">No Data</p>\n            </div>\n            ");
  }
  var htmls = "";
  var result = list_orders.map(function (list_orders) {
    var arr = list_orders.result.split('');
    var resultData = "";
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
      total += Number(arr[i]);
      resultData += "\n          <div data-v-42f27458=\"\" class=\"li circle-black c-row c-row-middle-center c-tc\">\n              <div data-v-42f27458=\"\">".concat(arr[i], "</div>\n          </div>\n        ");
    }
    return htmls += "\n        <div data-v-42f27458=\"\" class=\"c-tc item van-row\">\n          <div data-v-42f27458=\"\" class=\"van-col van-col--8\">\n            <div data-v-42f27458=\"\" class=\"c-tc goItem\">".concat(list_orders.period, "</div>\n          </div>\n          <div data-v-42f27458=\"\" class=\"van-col van-col--12\">\n            <div data-v-42f27458=\"\" class=\"c-row\">\n              <div data-v-42f27458=\"\" class=\"c-row qiu c-row-middle-center\">\n                ").concat(resultData, "\n              </div>\n            </div>\n          </div>\n          <div data-v-42f27458=\"\" class=\"van-col van-col--4\">\n            <div data-v-42f27458=\"\" class=\"c-row c-row-middle-center\"><span data-v-42f27458=\"\"\n                class=\"li action c-row c-row-middle-center c-tc\">").concat(total, "</span></div>\n          </div>\n        </div>\n      ");
  });
  $("#list_order").html(htmls);
}
function showResultNow(data) {
  var arr = String(data).split('');
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += Number(arr[i]);
    $(".round-num:eq(".concat(i, ") .fade-item")).text(arr[i]);
    var random = Math.floor(Math.random() * 10);
    $(".transform".concat(i, " .slot-num:eq(0)")).text(random);
    random = Math.floor(Math.random() * 10);
    $(".transform".concat(i, " .slot-num:eq(1)")).text(random);
    $(".transform".concat(i, " .slot-num:eq(2)")).text(arr[i]);
  }
  $(".round-num #total_r").text(total);
}
function callListOrder() {
  $.ajax({
    type: "POST",
    url: "/api/webapi/5d/GetNoaverageEmerdList",
    data: {
      gameJoin: $('html').attr('data-dpr'),
      pageno: "0",
      pageto: "10"
    },
    dataType: "json",
    success: function success(response) {
      var list_orders = response.data.gameslist;
      $("#period").text(response.period);
      $("#number_result").text("1/" + response.page);
      ShowListOrder(list_orders);
      if (list_orders.length != 0) {
        showResultNow(list_orders[0].result);
      }
      $('.Loading').fadeOut(0);
    }
  });
}
callListOrder();
$('#GetNoaverageEmerdList').click(function (e) {
  e.preventDefault();
  pageno = 0;
  limit = 10;
  page = 1;
  $('.Loading').fadeIn(0);
  $('#GetMyEmerdList').removeClass('block-click');
  $('#GetMyEmerdList').find('.txt').removeClass('action');
  $(this).addClass('block-click');
  $(this).find('.txt').addClass('action');
  $("#all").fadeIn(0);
  $('#number_result').attr('data-select', 'all');
  $("#me").fadeOut(0);
  callListOrder();
  $("#previous").addClass("block-click");
  $("#previous").removeClass("action");
  $("#previous .van-icon-arrow").css("color", "#7f7f7f");
  $("#next").removeClass("block-click");
  $("#next").addClass("action");
  $("#next .van-icon-arrow").css("color", "#fff");
});
$('.van-notice-bar__wrap .van-notice-bar__content').css({
  'transition-duration': '48.34s',
  'transform': 'translateX(-3417px)'
});
setInterval(function () {
  $('.van-notice-bar__wrap .van-notice-bar__content').css({
    'transition-duration': '0s',
    'transform': 'translateX(0)'
  });
  setTimeout(function () {
    $('.van-notice-bar__wrap .van-notice-bar__content').css({
      'transition-duration': '48.34s',
      'transform': 'translateX(-3417px)'
    });
  }, 100);
}, 48000);
function downAndHidden() {
  $('.van-overlay').fadeOut();
  $('#box-join').css('transform', 'translateY(1000px)');
  $('body').removeClass('van-overflow-hidden');
  $('.0-9 .bet-num-line .bet-box-num').removeClass('active');
  $('.small-big .bet-type-btn').attr('class', 'bet-type-btn flex-row-between');
  $('#result').attr('list-join', '');
  $('#result').attr('value', '1000');
  $('#plus-minus .minus').removeClass('action');
  $('#value-join').val(1);
  $('.amount-box .li').removeClass('action');
  $('.amount-box .li:eq(0)').addClass('action');
  $('.multiple-box .li').removeClass('action');
  $('.multiple-box .li:eq(0)').addClass('action');
  $('.supportss').fadeOut();
}
function reload_money() {
  fetch("/api/webapi/GetUserInfo").then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data.status === false) {
      unsetCookie();
      return false;
    }
    $(".num span").text("\u20B9 ".concat(data.data.money_user, ".00 "));
    $('.Loading').fadeOut(0);
  });
}
reload_money();
$('#reload_money').click( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          e.preventDefault();
          $('.Loading').fadeIn(0);
          $(this).addClass('block-click action');
          _context.next = 5;
          return reload_money();
        case 5:
          setTimeout(function () {
            $('#reload_money').removeClass('block-click action');
          }, 2500);
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee, this);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
var checkWidth = $('#app').width();
$('html').css('font-size', "".concat(checkWidth / 10, "px"));
$(window).resize(function () {
  var checkWidth = $('#app').width();
  $('html').css('font-size', "".concat(checkWidth / 10, "px"));
});
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
      console.log("mark - box demo   show");
      $('.minH .mark-box').show();
      $('.minH .mark-box .item:eq(1)').text(seconds2);
      downAndHidden();
    }
    if (minute >= 0 && seconds1 >= 1 && seconds2 <= 9) {
      console.log("hide data ...");
      $('.minH .mark-box').hide();
    }
  }, 0);
  setInterval(function () {
    var now = new Date().getTime();
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
function result() {
  var join = $('#result').attr('list-join').split('');
  var value = $('#result').attr('value');
  var amount = $('#value-join').val();
  var result = join.length * Number(value) * Number(amount);
  if (result <= 0) {
    result = 1000;
  }
  $("#total").html(result + '.00');
}
$('.van-overlay, .canned-alert').click(function (e) {
  e.preventDefault();
  downAndHidden();
});
$('.0-9 .bet-num-line').click(function (e) {
  e.preventDefault();
  var info = $(this).attr('txt');
  var list = $('#result').attr('list-join');
  var checkClass = $(this).find('.bet-box-num').hasClass('active');
  var checkList = Number(list);
  if (isNaN(checkList)) {
    $('#result').attr('list-join', '');
    list = $('#result').attr('list-join');
  }
  if (checkClass) {
    var newList = list.replace(info, '');
    $('#result').attr('list-join', newList);
    result();
    return $(".0-9 .bet-num-line[txt=".concat(info, "] .bet-box-num")).removeClass('active');
  }
  $(".0-9 .bet-num-line[txt=".concat(info, "] .bet-box-num")).addClass('active');
  $('.small-big .bet-type-btn').attr('class', 'bet-type-btn flex-row-between');
  $('#result').attr('list-join', list += info);
  result();
});
$('.select-number-0-9').click(function (e) {
  e.preventDefault();
  $('.van-overlay').fadeIn();
  $('#box-join').css('transform', 'translateY(0px)');
  $('body').addClass('van-overflow-hidden');
});
$('.small-big .bet-type-btn').click(function (e) {
  e.preventDefault();
  var info = $(this).attr('data-join');
  $('.van-overlay').fadeIn();
  $('#box-join').css('transform', 'translateY(0px)');
  $('body').addClass('van-overflow-hidden');
  $(".small-big .bet-type-btn").attr('class', 'bet-type-btn flex-row-between');
  $(".small-big .bet-type-btn[data-join=".concat(info, "]")).addClass(info);
  $('.0-9 .bet-num-line .bet-box-num').removeClass('active');
  var join = $(this).attr('join');
  $('#result').attr('list-join', join);
  result();
});
$('.a-b-c-d-e .d5-bet-type').click(function (e) {
  e.preventDefault();
  var info = $(this).attr('data-join');
  $(".a-b-c-d-e .d5-bet-type").removeClass('active');
  $(".a-b-c-d-e .d5-bet-type[data-join=".concat(info, "]")).addClass('active');
  $('#result').attr('join', info);
  if (info == 'total') {
    $('.0-9').hide();
    var check = Number($('#result').attr('list-join'));
    if (!isNaN(check)) {
      $('#result').attr('list-join', '');
      $('.0-9 .bet-num-line .bet-box-num').removeClass('active');
    }
  } else {
    $('.0-9').show();
  }
});
$('.amount-box .li').click(function (e) {
  e.preventDefault();
  var value = $(this).attr('value');
  $('#result').attr('value', value);
  $('.amount-box .li').removeClass('action');
  $(this).addClass('action');
  result();
});
$('.multiple-box .li').click(function (e) {
  e.preventDefault();
  var value = $(this).attr('amount');
  $('#value-join').val(value);
  $('.multiple-box .li').removeClass('action');
  $(this).addClass('action');
  $('#plus-minus .minus').addClass('action');
  result();
});
$('#plus-minus .minus').click(function (e) {
  e.preventDefault();
  var value = Number($('#value-join').val());
  if (value <= 1) {
    $('.multiple-box .li:eq(0)').addClass('action');
    $('#plus-minus .minus').removeClass('action');
    result();
    return false;
  }
  ;
  $('#value-join').val(value -= 1);
  value = Number($('#value-join').val());
  if (value <= 1) {
    $('.multiple-box .li:eq(0)').addClass('action');
    $('#plus-minus .minus').removeClass('action');
    result();
    return false;
  }
  ;
  value = Number($('#value-join').val());
  if (value <= 1) {
    $('#plus-minus .minus').removeClass('action');
    return false;
  }
  ;
  $(".multiple-box .li").removeClass('action');
  $(".multiple-box .li[amount=".concat(value, "]")).addClass('action');
  result();
});
$('#plus-minus .plus').click(function (e) {
  e.preventDefault();
  var value = Number($('#value-join').val());
  $('#value-join').val(value += 1);
  $(".multiple-box .li").removeClass('action');
  $(".multiple-box .li[amount=".concat(value, "]")).addClass('action');
  $('#plus-minus .minus').addClass('action');
  result();
});
$('#value-join').on("input", function () {
  var value = Number($(this).val());
  if (value > 1) {
    $('#plus-minus .minus').addClass('action');
  } else {
    $('#plus-minus .minus').removeClass('action');
  }
  $(".multiple-box .li").removeClass('action');
  $(".multiple-box .li[amount=".concat(value, "]")).addClass('action');
  result();
});
$('.foot .right').click(function (e) {
  e.preventDefault();
  var join = $('#result').attr('join'); // loại ? vd: abcde total
  var list_join = $('#result').attr('list-join'); // bet to
  var value = $('#result').attr('value'); // money
  var x = $('#value-join').val().trim(); // x
  var game = $('html').attr('data-dpr');
  $('.Loading').fadeIn(0);
  $('.foot .right').addClass('block-click');
  $.ajax({
    type: "POST",
    url: "/api/webapi/action/5d/join",
    data: {
      join: join,
      list_join: list_join,
      money: value,
      x: x,
      game: game
    },
    dataType: "json",
    success: function success(response) {
      $('.Loading').fadeOut(0);
      var chane = response.change;
      socket.emit('data-server-5', {
        chane: chane,
        join: join,
        list_join: list_join,
        money: value,
        x: x,
        game: game
      });
      alertMess(response.message);
      setTimeout(function () {
        downAndHidden();
        $('.foot .right').removeClass('block-click');
      }, 500);
      if (response.status == true) {
        $('#money_show').text("₹ " + response.money + '.00');
        showMeJoin();
      }
    }
  });
});
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
function isNumber(params) {
  var pattern = /^[0-9]*\d$/;
  return pattern.test(params);
}
function GetMyEmerdList(datas) {
  if (datas.length == 0) {
    return $("#showJoinMe").html("\n        <div data-v-a9660e98=\"\" class=\"van-empty\">\n            <div class=\"van-empty__image\">\n                <img src=\"/images/empty-image-default.png\" />\n            </div>\n            <p class=\"van-empty__description\">No Data</p>\n        </div>\n        ");
  }
  var htmls = "";
  var result = datas.map(function (data) {
    var arr = data.result.split('');
    var resultData = "";
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
      total += Number(arr[i]);
      resultData += "\n          <div data-v-42f27458=\"\" class=\"li circle-black\">".concat(arr[i], "</div>\n        ");
    }
    var join = '';
    var arr2 = data.bet.split('');
    for (var _i = 0; _i < arr2.length; _i++) {
      var check = isNumber(data.bet);
      if (check) {
        join += "\n          <div data-v-42f27458=\"\">\n              <span data-v-42f27458=\"\" style=\"color: rgb(0, 0, 0);\">\n                <span data-v-42f27458=\"\" class=\"li circle-black\" style=\"color: rgb(0, 0, 0);\">".concat(arr2[_i], "</span>  \n              </span>\n          </div>");
      } else {
        join += "\n          <div data-v-42f27458=\"\">\n            <span data-v-42f27458=\"\" style=\"color: rgb(0, 0, 0);\">".concat(arr2[_i] == 'c' ? "Even" : arr2[_i] == 'l' ? 'Odd' : arr2[_i] == 'b' ? 'Big' : 'Small', "</span>\n          </div>\n          ");
      }
    }
    return htmls += "\n      <div data-v-42f27458=\"\" issuenumber=\"".concat(data.id_product, "\" addtime=\"").concat(timerJoin(data.time), "\" rowid=\"1\" class=\"hb\">\n          <div data-v-42f27458=\"\" class=\"item c-row\">\n              <div data-v-42f27458=\"\" class=\"c-row c-row-between info\">\n                  <div data-v-42f27458=\"\">\n                      <div data-v-42f27458=\"\" class=\"issueName\">\n                        ").concat(data.stage, " \n                        <span data-v-42f27458=\"\" class=\"state ").concat(data.status == 1 ? 'green' : 'red', "\"\" \n                        style=\"display: ").concat(data.status == 0 ? 'none' : '', ";\">").concat(data.status == 1 ? 'Success' : 'Fail', "</span>\n                          <!---->\n                      </div>\n                      <div data-v-42f27458=\"\" class=\"tiem\">").concat(timerJoin(data.time), "</div>\n                  </div>\n                  <div data-v-42f27458=\"\" class=\"money\" style=\"display: ").concat(data.status == 0 ? 'none' : '', "\">\n                      <span data-v-42f27458=\"\" class=\"").concat(data.status == 1 ? 'success' : 'fail', "\"> ").concat(data.status == 1 ? '+' : '-', " ").concat(data.status == 1 ? data.get : data.price, ".00 </span>\n                      <!---->\n                  </div>\n              </div>\n          </div>\n          <div data-v-42f27458=\"\" class=\"details display-none\">\n              <div data-v-42f27458=\"\" class=\"tit\">Details</div>\n              <div data-v-42f27458=\"\" class=\"detailLi c-row c-row-between c-row-middle\">\n                  <div data-v-42f27458=\"\">Order Number</div>\n                  <div data-v-42f27458=\"\" class=\"tag-read c-row c-row-between c-row-middle\">\n                      ").concat(data.id_product, "\n                      <img data-v-42f27458=\"\" data-clipboard-text=\"").concat(data.id_product, "\" width=\"18px\" height=\"15px\" src=\"/images/copy.png\" class=\"m-l-5 copy-to-img\" />\n                  </div>\n              </div>\n              <div data-v-42f27458=\"\" class=\"detailLi c-row c-row-between c-row-middle\">\n                  <div data-v-42f27458=\"\">Periods</div>\n                  <div data-v-42f27458=\"\">").concat(data.stage, "</div>\n              </div>\n              <div data-v-42f27458=\"\" class=\"detailLi c-row c-row-between c-row-middle\">\n                  <div data-v-42f27458=\"\">Spent Amount</div>\n                  <div data-v-42f27458=\"\">").concat(data.money, ".00</div>\n              </div>\n              <div data-v-42f27458=\"\" class=\"detailLi c-row c-row-between c-row-middle\">\n                  <div data-v-42f27458=\"\">Quantity Purchased</div>\n                  <div data-v-42f27458=\"\">").concat(data.amount, "</div>\n              </div>\n              <div data-v-42f27458=\"\" class=\"detailLi c-row c-row-between c-row-middle\">\n                  <div data-v-42f27458=\"\">After Tax Amount</div>\n                  <div data-v-42f27458=\"\" class=\"red\">").concat(data.price, ".00</div>\n              </div>\n              <div data-v-42f27458=\"\" class=\"detailLi c-row c-row-between c-row-middle\">\n                  <div data-v-42f27458=\"\">Tax</div>\n                  <div data-v-42f27458=\"\">").concat(data.fee, ".00</div>\n              </div>\n              <div data-v-42f27458=\"\" class=\"detailLi c-row c-row-between c-row-middle\">\n                  <div data-v-42f27458=\"\">Opening Price</div>\n                  <div data-v-42f27458=\"\" style=\"display: ").concat(data.status == 0 ? 'none' : '', ";\">").concat(data.result, "</div>\n              </div>\n              <div data-v-42f27458=\"\" class=\"detailLi c-row c-row-between c-row-middle\">\n                  <div data-v-42f27458=\"\">Results</div>\n                  <div data-v-42f27458=\"\" class=\"c-row\" style=\"display: ").concat(data.status == 0 ? 'none' : '', ";\">\n                    ").concat(resultData, "\n                  </div>\n              </div>\n              <div data-v-42f27458=\"\" class=\"detailLi c-row c-row-between c-row-middle\">\n                  <div data-v-42f27458=\"\">Choose</div>\n                  <div data-v-42f27458=\"\" class=\"c-row c-row-middle\">\n                      <div data-v-42f27458=\"\" class=\"c-row m-r-5\">\n                          <div data-v-42f27458=\"\">").concat(data.join_bet == 'total' ? "SUM" : data.join_bet.toUpperCase(), "</div>\n                      </div>\n                      ").concat(join, "\n                  </div>\n              </div>\n              <div data-v-42f27458=\"\" class=\"detailLi c-row c-row-between c-row-middle\">\n                  <div data-v-42f27458=\"\">Status</div>\n                  <div data-v-42f27458=\"\" class=\"").concat(data.status == 1 ? 'green' : 'red', "\" style=\"display: ").concat(data.status == 0 ? 'none' : '', ";\">").concat(data.status == 1 ? 'Success' : 'Fail', "</div>\n                  <!---->\n              </div>\n              <div data-v-42f27458=\"\" class=\"detailLi c-row c-row-between c-row-middle\">\n                  <div data-v-42f27458=\"\">Win Or Loss</div>\n                  <div data-v-42f27458=\"\" class=\"").concat(data.status == 1 ? 'green' : 'red', "\" style=\"display: ").concat(data.status == 0 ? 'none' : '', ";\">").concat(data.status == 1 ? '+' : '-', " ").concat(data.status == 1 ? data.get : data.price, ".00</div>\n                  <!---->\n              </div>\n              <div data-v-42f27458=\"\" class=\"detailLi c-row c-row-between c-row-middle\">\n                  <div data-v-42f27458=\"\">Purchase Time</div>\n                  <div data-v-42f27458=\"\">").concat(timerJoin(data.time), "</div>\n              </div>\n          </div>\n      </div>\n      ");
  });
  $("#showJoinMe").html(htmls);
}
function callAjaxMeJoin() {
  $.ajax({
    type: "POST",
    url: "/api/webapi/5d/GetMyEmerdList",
    data: {
      gameJoin: $('html').attr('data-dpr'),
      pageno: "0",
      pageto: "10"
    },
    dataType: "json",
    success: function success(response) {
      var data = response.data.gameslist;
      $("#number_result").text("1/" + response.page);
      GetMyEmerdList(data);
      $('.Loading').fadeOut(0);
    }
  });
}
function handleMyEmerdList() {
  $.ajax({
    type: "POST",
    url: "/api/webapi/5d/GetMyEmerdList",
    data: {
      gameJoin: $('html').attr('data-dpr'),
      pageno: "0",
      pageto: "10"
    },
    dataType: "json",
    success: function success(response) {
      var data = response.data.gameslist;
      $("#number_result").text("1/" + response.page);
      GetMyEmerdList(data);
      $('.Loading').fadeOut(0);
      var firstGame = data[0];
      var displayResultHandler = function displayResultHandler(_ref2) {
        var status = _ref2.status,
          amount = _ref2.amount;
        var modal = document.getElementById("result_modal");
        var modalAmount = document.getElementById("modal_amount");
        modal.classList.add("open");
        if ((status === null || status === void 0 ? void 0 : status.toLowerCase()) === "win") {
          modal.classList.add("win");
          modalAmount.innerText = "+".concat(amount);
        } else {
          modal.classList.add("loss");
          modalAmount.innerText = "-".concat(amount);
        }
      };

      // Nested AJAX call
      $.ajax({
        type: "POST",
        url: "/api/webapi/5d/GetNoaverageEmerdList",
        data: {
          gameJoin: $('html').attr('data-dpr'),
          pageno: "0",
          pageto: "10"
        },
        dataType: "json",
        success: function success(response) {
          var list_orders = response.data.gameslist;
          console.log(firstGame);
          console.log(firstGame.stage);
          console.log(list_orders[1].period);

          // Assuming firstGame is defined somewhere in your code
          if (firstGame && firstGame.stage === list_orders[1].period) {
            if (firstGame.get == 0) {
              displayResultHandler({
                status: "loss",
                amount: firstGame.money
              });
            } else {
              displayResultHandler({
                status: "win",
                amount: firstGame.get
              });
            }
          }
        }
      });
    }
  });
}
function showMeJoin() {
  return _showMeJoin.apply(this, arguments);
}
function _showMeJoin() {
  _showMeJoin = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return callAjaxMeJoin();
        case 2:
          setTimeout(function () {
            $('#showJoinMe .hb').click(function (e) {
              e.preventDefault();
              $(this).find('.details').toggleClass("display-none");
            });
            $('.copy-to-img').click(function (e) {
              e.preventDefault();
              var copyText = $(this).attr('data-clipboard-text');
              navigator.clipboard.writeText(copyText);
              alertMess('Copy successful');
            });
          }, 500);
        case 3:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _showMeJoin.apply(this, arguments);
}
var pageno = 0;
var limit = 10;
var page = 1;
$('#GetMyEmerdList').click(function (e) {
  e.preventDefault();
  pageno = 0;
  limit = 10;
  page = 1;
  $('.Loading').fadeIn(0);
  $('#GetNoaverageEmerdList').removeClass('block-click');
  $('#GetNoaverageEmerdList').find('.txt').removeClass('action');
  $(this).addClass('block-click');
  $(this).find('.txt').addClass('action');
  $("#all").fadeOut(0);
  $("#me").fadeIn(0);
  $('#number_result').attr('data-select', 'me');
  showMeJoin();
  $("#previous").addClass("block-click");
  $("#previous").removeClass("action");
  $("#previous .van-icon-arrow").css("color", "#7f7f7f");
  $("#next").removeClass("block-click");
  $("#next").addClass("action");
  $("#next .van-icon-arrow").css("color", "#fff");
});
var pageno = 0;
var limit = 10;
var page = 1;
$("#next").click(function (e) {
  e.preventDefault();
  var check = $('#number_result').attr('data-select');
  $('.Loading').fadeIn(0);
  $("#previous").removeClass("block-click");
  $("#previous").addClass("action");
  $("#previous .van-icon-arrow-left").css("color", "#fff");
  pageno += 10;
  var pageto = limit;
  var url = '';
  if (check == 'all') {
    url = "/api/webapi/5d/GetNoaverageEmerdList";
  } else {
    url = "/api/webapi/5d/GetMyEmerdList";
  }
  $.ajax({
    type: "POST",
    url: url,
    data: {
      gameJoin: $('html').attr('data-dpr'),
      pageno: pageno,
      pageto: pageto
    },
    dataType: "json",
    success: function () {
      var _success = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(response) {
        var list_orders;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              $('.Loading').fadeOut(0);
              if (!(response.status === false)) {
                _context2.next = 8;
                break;
              }
              pageno -= 10;
              $("#next").addClass("block-click");
              $("#next").removeClass("action");
              $("#next .van-icon-arrow").css("color", "#7f7f7f");
              alertMess(response.msg);
              return _context2.abrupt("return", false);
            case 8:
              list_orders = response.data.gameslist;
              $("#period").text(response.period);
              $("#number_result").text(++page + "/" + response.page);
              if (!(check == 'all')) {
                _context2.next = 15;
                break;
              }
              ShowListOrder(list_orders);
              _context2.next = 18;
              break;
            case 15:
              _context2.next = 17;
              return GetMyEmerdList(list_orders);
            case 17:
              setTimeout(function () {
                $('#showJoinMe .hb').click(function (e) {
                  e.preventDefault();
                  $(this).find('.details').toggleClass("display-none");
                });
                $('.copy-to-img').click(function (e) {
                  e.preventDefault();
                  var copyText = $(this).attr('data-clipboard-text');
                  navigator.clipboard.writeText(copyText);
                  alertMess('Copy successful');
                });
              }, 500);
            case 18:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function success(_x2) {
        return _success.apply(this, arguments);
      }
      return success;
    }()
  });
});
$("#previous").click(function (e) {
  e.preventDefault();
  var check = $('#number_result').attr('data-select');
  $('.Loading').fadeIn(0);
  $("#next").removeClass("block-click");
  $("#next").addClass("action");
  $("#next .van-icon-arrow").css("color", "#fff");
  pageno -= 10;
  var pageto = limit;
  var url = '';
  if (check == 'all') {
    url = "/api/webapi/5d/GetNoaverageEmerdList";
  } else {
    url = "/api/webapi/5d/GetMyEmerdList";
  }
  $.ajax({
    type: "POST",
    url: url,
    data: {
      gameJoin: $('html').attr('data-dpr'),
      pageno: pageno,
      pageto: pageto
    },
    dataType: "json",
    success: function () {
      var _success2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(response) {
        var list_orders;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              $('.Loading').fadeOut(0);
              if (page - 1 < 2) {
                $("#previous").addClass("block-click");
                $("#previous").removeClass("action");
                $("#previous .van-icon-arrow-left").css("color", "#7f7f7f");
              }
              if (!(response.status === false)) {
                _context3.next = 9;
                break;
              }
              pageno = 0;
              $("#previous .arr:eq(0)").addClass("block-click");
              $("#previous .arr:eq(0)").removeClass("action");
              $("#previous .van-icon-arrow-left").css("color", "#7f7f7f");
              alertMess(response.msg);
              return _context3.abrupt("return", false);
            case 9:
              list_orders = response.data.gameslist;
              $("#period").text(response.period);
              $("#number_result").text(--page + "/" + response.page);
              if (!(check == 'all')) {
                _context3.next = 16;
                break;
              }
              ShowListOrder(list_orders);
              _context3.next = 19;
              break;
            case 16:
              _context3.next = 18;
              return GetMyEmerdList(list_orders);
            case 18:
              setTimeout(function () {
                $('#showJoinMe .hb').click(function (e) {
                  e.preventDefault();
                  $(this).find('.details').toggleClass("display-none");
                });
                $('.copy-to-img').click(function (e) {
                  e.preventDefault();
                  var copyText = $(this).attr('data-clipboard-text');
                  navigator.clipboard.writeText(copyText);
                  alertMess('Copy Successfull');
                });
              }, 500);
            case 19:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function success(_x3) {
        return _success2.apply(this, arguments);
      }
      return success;
    }()
  });
});
$('.circular, #quytacs').click(function (e) {
  e.preventDefault();
  $('.supportss').fadeIn();
  $('.van-overlay').fadeIn();
  $('body').addClass('van-overflow-hidden');
});
$('.submit-support').click(function (e) {
  e.preventDefault();
  downAndHidden();
});
$('#game-join .item').click( /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(e) {
    var game, actionOld;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          e.preventDefault();
          game = $(this).attr('game');
          $('html').attr('data-dpr', game);
          $('.Loading').fadeIn(0);
          _context4.next = 6;
          return callListOrder();
        case 6:
          _context4.next = 8;
          return showMeJoin();
        case 8:
          console.log("loding dta....");
          // $('.Loading').fadeOut(0);
          $('.minH .mark-box').hide();
          actionOld = $('#game-join').find('.action');
          actionOld.find('.img .van-image:eq(0)').fadeOut(0);
          actionOld.find('.img .van-image:eq(1)').fadeIn(0);
          actionOld.removeClass('action block-click');
          $(this).addClass('action block-click');
          $(this).find('.img .van-image:eq(0)').fadeIn(0);
          $(this).find('.img .van-image:eq(1)').fadeOut(0);
        case 17:
        case "end":
          return _context4.stop();
      }
    }, _callee4, this);
  }));
  return function (_x4) {
    return _ref3.apply(this, arguments);
  };
}());