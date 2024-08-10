"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() { } function GeneratorFunction() { } function GeneratorFunctionPrototype() { } var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a; ;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function showListOrder3(list_orders, x) {
  if (list_orders.length == 0) {
    return $(".game-list .con-box:eq(".concat(x, ") .hb")).html("\n                    <div data-v-a9660e98=\"\" class=\"van-empty\">\n                        <div class=\"van-empty__image\">\n                            <img src=\"/images/empty-image-default.png\" />\n                        </div>\n                        <p class=\"van-empty__description\">No data</p>\n                    </div>\n                    ");
  }
  var htmls = "";
  var result = list_orders.map(function (list_orders) {
    return htmls += "\n                    <div data-v-a9660e98=\"\" class=\"c-tc item van-row\">\n                        <div data-v-a9660e98=\"\" class=\"van-col van-col--8\">\n                            <div data-v-a9660e98=\"\" class=\"c-tc goItem\">".concat(list_orders.period, "</div>\n                        </div>\n                        <div data-v-a9660e98=\"\" class=\"van-col van-col--5\">\n                            <div data-v-a9660e98=\"\" class=\"c-tc goItem\">\n                                <!---->\n                                <span data-v-a9660e98=\"\" class=\"").concat(list_orders.amount % 2 == 0 ? "red" : "green", "\"> ").concat(list_orders.amount, " </span>\n                            </div>\n                        </div>\n                        <div data-v-a9660e98=\"\" class=\"van-col van-col--5\">\n                            <div data-v-a9660e98=\"\" class=\"c-tc goItem\">\n                                <span data-v-a9660e98=\"\"> ").concat(list_orders.amount < 5 ? "Small" : "Big", " </span>\n                                <!---->\n                            </div>\n                        </div>\n                        <div data-v-a9660e98=\"\" class=\"van-col van-col--6\">\n                            <div data-v-a9660e98=\"\" class=\"goItem c-row c-tc c-row-center\">\n                                <div data-v-a9660e98=\"\" class=\"c-tc c-row box c-row-center\">\n                                    <span data-v-a9660e98=\"\" class=\"li ").concat(list_orders.amount % 2 == 0 ? "red" : "green", "\"></span>\n                                    ").concat(list_orders.amount == 0 || list_orders.amount == 5 ? '<span data-v-a9660e98="" class="li violet"></span>' : "", "\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    ");
  });
  $(".game-list .con-box:eq(".concat(x, ") .hb")).prepend(htmls);
  $(".game-list .con-box:eq(".concat(x, ") .hb .c-tc")).last().remove();
}
var socket = io();
var pageno = 0;
var limit = 10;
var page = 1;
socket.on("data-server", function (msg) {
  if (msg.data[0].game != 'wingo') return;
  $(".Loading").fadeIn(0);
  setTimeout(function () {
    var data1 = msg.data[0]; // lấy ra cầu mới nhất
    var data2 = []; // lấy ra cầu cũ
    var data3 = data2.push(msg.data[1]);
    $(".time-box .info .number").text(data1.period);
    showListOrder3(data2, 0);
    pageno = 0;
    limit = 10;
    page = 1;
    $(".game-list .con-box:eq(0) .page-nav .arr:eq(0)").addClass("block-click");
    $(".game-list .con-box:eq(0) .page-nav .arr:eq(0)").removeClass("action");
    $(".game-list .con-box:eq(0) .page-nav .van-icon-arrow-left").css("color", "#7f7f7f");
    $(".game-list .con-box:eq(0) .page-nav .arr:eq(1)").removeClass("block-click");
    $(".game-list .con-box:eq(0) .page-nav .arr:eq(1)").addClass("action");
    $(".game-list .con-box:eq(0) .page-nav .van-icon-arrow-right").css("color", "#fff");
    $(".game-list .con-box:eq(1) .page-nav .arr:eq(0)").addClass("block-click");
    $(".game-list .con-box:eq(1) .page-nav .arr:eq(0)").removeClass("action");
    $(".game-list .con-box:eq(1) .page-nav .van-icon-arrow-left").css("color", "#7f7f7f");
    $(".game-list .con-box:eq(1) .page-nav .arr:eq(1)").removeClass("block-click");
    $(".game-list .con-box:eq(1) .page-nav .arr:eq(1)").addClass("action");
    $(".game-list .con-box:eq(1) .page-nav .van-icon-arrow-right").css("color", "#fff");
    var firstGame;
    $.ajax({
      type: "POST",
      url: "/api/webapi/GetMyEmerdList",
      data: {
        typeid: "1",
        pageno: "0",
        pageto: "10",
        language: "vi"
      },
      dataType: "json",
      success: function success(response) {
        var data = response.data.gameslist;
        $(".game-list .con-box:eq(1) .page-nav .number").text("1/" + (response.page ? response.page : '1'));

        // Set the value of firstGame to the first game in the gameslist
        firstGame = data[0];
        var lastGame = data[data.length - 1];
        console.log(firstGame);
        showListOrder2(data, 1);

        // Nested AJAX call
        $.ajax({
          type: "POST",
          url: "/api/webapi/GetNoaverageEmerdList",
          data: {
            typeid: "1",
            pageno: "0",
            pageto: "10",
            language: "vi"
          },
          dataType: "json",
          success: function success(response) {
            var list_orders = response.data.gameslist;
            $(".time-box .info .number").text(response.period);
            $(".game-list .con-box:eq(0) .page-nav .number").text("1/" + response.page);

            // Assuming firstGame is defined somewhere in your code
            if (firstGame && firstGame.stage === list_orders[0].period) {
              var modal = document.getElementById("myModal");
              modal.style.display = "block";
              var myModalheader = document.getElementById("myModal_header");
              var myModal_result = document.getElementById("myModal_result");
              var lottery_result = document.getElementById("lottery_result");
              var myModal_result_Period = document.getElementById("myModal_result_Period");
              if (firstGame.get == 0) {
                myModalheader.innerHTML = "Try Again";
                myModal_result.innerHTML = "LOSS :" + firstGame.money;
              } else {
                myModalheader.innerHTML = "Congratulations";
                myModal_result.innerHTML = "WIN :" + firstGame.get;
              }
              myModal_result_Period.innerHTML = "Period : 1min " + firstGame.stage;
              var color;
              var type;
              if (firstGame.result >= 0 && firstGame.result <= 4) {
                type = "Small";
              } else if (firstGame.result >= 5 && firstGame.result <= 9) {
                type = "Big";
              }
              if (firstGame.result == 0) {
                color = "Red + Violet";
              } else if (firstGame.result == 5) {
                color = "Green + Violet";
              } else if (firstGame.result % 2 == 0) {
                color = "Red";
              } else {
                color = "Green";
              }
              lottery_result.innerHTML = "Lottery Result:<span class='btn-boox'>" + color + "</span><span class='btn-boox'>" + firstGame.result + "</span><span class='btn-boox'>" + type + "</span>";
            }
            showListOrder(list_orders, 0);
            showListOrder_t(list_orders, 2);
          }
        });
      }
    });
    // Accessing the fifth element (index 4)
    var element_2 = document.getElementById("Winning_0");

    // Update its text content
    element_2.textContent = "4";
    fetch("/api/webapi/GetUserInfo").then(function (response) {
      return response.json();
    }).then(function (data) {
      if (data.status === false) {
        unsetCookie();
        return false;
      }
      $(".num span").text("\u20B9 ".concat(data.data.money_user, ". "));
    });
    $(".Loading").fadeOut(0);
  }, 1000);
});
// $('body').click(function (e) {
//     e.preventDefault();
//     socket.emit('data-server', {
//         name: 'Longdz',
//     });
// });

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
fetch("/api/webapi/GetUserInfo").then(function (response) {
  return response.json();
}).then(function (data) {
  $(".Loading").fadeOut(0);
  if (data.status === false) {
    unsetCookie();
    return false;
  }
  $(".num span").text("\u20B9 ".concat(data.data.money_user, ".00 "));
});
$(".reload_money").click(function (e) {
  var _this = this;
  e.preventDefault();
  $(this).addClass("action block-click");
  setTimeout(function () {
    $(_this).removeClass("action block-click");
  }, 3000);
  fetch("/api/webapi/GetUserInfo").then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data.status === false) {
      unsetCookie();
      return false;
    }
    $(".num span").text("\u20B9 ".concat(data.data.money_user, ".00 "));
  });
});
$(".van-overlay, .foot .left").click(function (e) {
  e.preventDefault();
  $(".van-overlay").fadeOut();
  $('.van-popup-vf').fadeOut(100);
  $(".popup-join").css("transform", "translateY(600px)");
  $(".betting-mark .amount-box .li, .multiple-box .li").css({
    "background-color": "rgb(240, 240, 240)",
    color: "rgb(0, 0, 0)"
  });
  $(".betting-mark .amount-box .li:eq(0), .multiple-box .li:eq(0)").css({
    "background-color": "rgb(240, 240, 240)",
    color: "rgb(255, 255, 255)"
  });
  $(".stepper-box .digit-box input").val(1);
  $(".amount-box").attr("data-money", "1");
  $(".foot .right span:eq(1)").text(1000 + "");
});
function xlad(x, color) {
  $(".multiple-box .li").css({
    "background-color": "rgb(240, 240, 240)",
    color: "rgb(0, 0, 0)"
  });
  $(".multiple-box .li:eq(".concat(x, ")")).css({
    "background-color": "".concat(color),
    color: "rgb(255, 255, 255)"
  });
}
function selectX(x, color) {
  switch (String(x)) {
    case "1":
      xlad(0, color);
      break;
    case "5":
      xlad(1, color);
      break;
    case "10":
      xlad(2, color);
      break;
    case "20":
      xlad(3, color);
      break;
    case "50":
      xlad(4, color);
      break;
    case "100":
      xlad(5, color);
      break;
    default:
      $(".multiple-box .li").css({
        "background-color": "rgb(240, 240, 240)",
        color: "rgb(0, 0, 0)"
      });
      break;
  }
}
$(".stepper-box .plus").click(function (e) {
  e.preventDefault();
  var color = $(".foot .right").attr("style").split(":");
  color = color[1].split(";")[0].trim();
  var value = $(".stepper-box .digit-box input").val().trim();
  value = Number(value) + 1;
  selectX(value, color);
  if (value > 1) {
    $(".stepper-box .minus").css({
      "background-color": "".concat(color),
      color: "#fff"
    });
  } else {
    $(".stepper-box .minus").css({
      "background-color": "rgb(240, 240, 240)",
      color: "rgb(200, 201, 204)"
    });
  }
  $(".stepper-box .digit-box input").val(value);
  totalMoney();
});
$(".stepper-box .digit-box input").on("input", function () {
  var value = $(this).val();
  var color = $(".foot .right").attr("style").split(":");
  color = color[1].split(";")[0].trim();
  // if (!value)  $(this).val(1);
  value = $(this).val();
  if (value <= 1) {
    $(".stepper-box .minus").css({
      "background-color": "rgb(240, 240, 240)",
      color: "rgb(200, 201, 204)"
    });
  } else if (value) {
    $(".stepper-box .minus").css({
      "background-color": "".concat(color),
      color: "rgb(200, 201, 204)"
    });
  }
  selectX(value, color);
  totalMoney();
});
$(".stepper-box .minus").click(function (e) {
  e.preventDefault();
  var color = $(".foot .right").attr("style").split(":");
  color = color[1].split(";")[0].trim();
  var value = $(".stepper-box .digit-box input").val().trim();
  value = Number(value) - 1;
  if (value <= 0) return;
  selectX(value, color);
  if (value == 1) {
    $(".stepper-box .minus").css({
      "background-color": "rgb(240, 240, 240)",
      color: "rgb(200, 201, 204)"
    });
  }
  $(".stepper-box .digit-box input").val(value);
  totalMoney();
});
function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}
function selectCss(color, bg, text) {
  $(".betting-mark").attr("class", "betting-mark");
  $(".color").css("color", bg);
  $(".color .p-l-10").text(text);
  $(".betting-mark").addClass(color);
  $(".amount-box .li:eq(0)").css("background-color", bg);
  $(".plus").css("background-color", bg);
  $(".multiple-box .li:eq(0)").css("background-color", bg);
  $(".foot .right").css("background-color", bg);
}
function totalMoney() {
  var value = $(".stepper-box .digit-box input").val().trim();
  var money = $(".amount-box").attr("data-money");
  var total = value * money;
  $(".foot .right span:eq(1)").text(total + "");
}
function alertBox(join, addText) {
  $(".foot .right").attr("data-join", join);
  switch (join) {
    case "x":
      selectCss("colorgreen", "rgb(92, 186, 71)", addText);
      break;
    case "t":
      selectCss("colorviolet", "rgb(152, 49, 233)", addText);
      break;
    case "d":
      selectCss("colorred", "rgb(251, 78, 78)", addText);
      break;
    case "l":
      selectCss("colorbig", "rgb(255, 168, 46)", addText);
      break;
    case "n":
      selectCss("colorsmall", "rgb(109, 167, 244)", addText);
      break;
    default:
      if (join % 2 == 0) {
        selectCss("color".concat(join), "rgb(251, 78, 78)", addText);
      } else {
        selectCss("color".concat(join), "rgb(92, 186, 71)", addText);
      }
      break;
  }
  $(".van-overlay").fadeIn();
  $(".popup-join").fadeIn();
  $(".stepper-box .minus").css({
    "background-color": "rgb(240, 240, 240)",
    color: "rgb(200, 201, 204)"
  });
  $(".popup-join").css("transform", "translateY(1px)");
  var active = $(".random-box .c-row .active").attr("data-x");
  var color = $(".foot .right").attr("style").split(":");
  color = color[1].split(";")[0].trim();
  $(".stepper-box input").val(active);
  totalMoney();
  selectX(active, color);
  if (active <= 1) {
    $(".stepper-box .minus").css({
      "background-color": "rgb(240, 240, 240)",
      color: "rgb(200, 201, 204)"
    });
  } else {
    $(".stepper-box .minus").css({
      "background-color": "".concat(color),
      color: "rgb(255, 255, 255)"
    });
  }
}
$(".popup-join .info .txt").click(function (e) {
  e.preventDefault();
  $(".popup-qt").fadeIn();
});
$(".betting-mark .amount-box .li").click(function (e) {
  e.preventDefault();
  var color = $(".foot .right").attr("style").split(":");
  color = color[1].split(";")[0].trim();
  $(".betting-mark .amount-box .li").css({
    "background-color": "rgb(240, 240, 240)",
    color: "rgb(0, 0, 0)"
  });
  $(this).css({
    "background-color": "".concat(color),
    color: "rgb(255, 255, 255)"
  });
  var thisValue = $(this).attr("data-x");
  $(".amount-box").attr("data-money", thisValue);
  totalMoney();
});
$(".multiple-box .li").click(function (e) {
  e.preventDefault();
  var color = $(".foot .right").attr("style").split(":");
  color = color[1].split(";")[0].trim();
  $(".multiple-box .li").css({
    "background-color": "rgb(240, 240, 240)",
    color: "rgb(0, 0, 0)"
  });
  $(this).css({
    "background-color": "".concat(color),
    color: "rgb(255, 255, 255)"
  });
  var x = $(this).attr("data-x");
  if (x > 1) {
    $(".stepper-box .minus").css({
      "background-color": "".concat(color),
      color: "#fff"
    });
  } else {
    $(".stepper-box .minus").css({
      "background-color": "rgb(240, 240, 240)",
      color: "rgb(200, 201, 204)"
    });
  }
  $(".stepper-box .digit-box input").val(x);
  totalMoney();
});
$(".popup-qt .van-button").click(function (e) {
  e.preventDefault();
  $(".popup-qt").fadeOut();
});
$(".con-box button").click(function (e) {
  e.preventDefault();
  var addTop = $(this).attr("data-join"); // xanh - do - tim (x - d - t)
  var addText = $(this).text(); // xanh - do - tim
  alertBox(addTop, addText);
});
$(".number-box button").click(function (e) {
  e.preventDefault();
  var addTop = $(this).text().trim(); // xanh - do - tim (x - d - t)
  var addText = $(this).text(); // xanh - do - tim
  alertBox(addTop, addText);
});
$(".btn-box button").click(function (e) {
  e.preventDefault();
  var addTop = $(this).attr("data-join"); // xanh - do - tim (x - d - t)
  var addText = $(this).text(); // xanh - do - tim
  alertBox(addTop, addText);
});
$(".random-box .c-row .item").click(function (e) {
  e.preventDefault();
  $(".random-box .c-row .item").css({
    "background-color": "rgb(240, 240, 240)",
    color: "rgb(0, 0, 0)"
  });
  $(this).css({
    "background-color": "rgb(92, 186, 71)",
    color: "rgb(255, 255, 255)"
  });
  $(".random-box .c-row .item").removeClass("active");
  $(this).addClass("active");
});
$(".random").click( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
    var random, i;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          e.preventDefault();
          random = 0;
          i = 0;
        case 3:
          if (!(i < 55)) {
            _context.next = 12;
            break;
          }
          random = Math.floor(Math.random() * 10);
          $(".number-box button").removeClass("action");
          $(".number-box button:eq(".concat(random, ")")).addClass("action");
          _context.next = 9;
          return sleep(50);
        case 9:
          i++;
          _context.next = 3;
          break;
        case 12:
          $(".van-overlay").fadeIn();
          $(".popup-join").fadeIn();
          $(".popup-join").css("transform", "translateY(1px)");
          alertBox(random, random);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
$(".game-list .tab .li:eq(0)").click(function (e) {
  e.preventDefault();
  $(".game-list .con-box").css("display", "none");
  $(".game-list .li .txt").removeClass("action");
  $(".game-list .li .txt:eq(0)").addClass("action");
  $(".game-list .li").removeClass("block-click");
  $(this).addClass("block-click");
  $(".game-list .con-box:eq(0)").css("display", "block");
  $.ajax({
    type: "POST",
    url: "/api/webapi/GetNoaverageEmerdList",
    data: {
      typeid: "1",
      pageno: "0",
      pageto: "10",
      language: "vi"
    },
    dataType: "json",
    success: function success(response) {
      var list_orders = response.data.gameslist;
      $(".time-box .info .number").text(response.period);
      $(".page-nav .number").text("1/" + response.page);
      $(".game-list .con-box:eq(0) .page-nav .number").text("1/" + response.page);
      showListOrder(list_orders, 0);
    }
  });
});
$(".game-list .tab .li:eq(1)").click(function (e) {
  e.preventDefault();
  $(".game-list .con-box").css("display", "none");
  $(".game-list .li .txt").removeClass("action");
  $(".game-list .li .txt:eq(1)").addClass("action");
  $(".game-list .li").removeClass("block-click");
  $(this).addClass("block-click");
  $(".game-list .con-box:eq(1)").css("display", "block");
  $.ajax({
    type: "POST",
    url: "/api/webapi/GetMyEmerdList",
    data: {
      typeid: "1",
      pageno: "0",
      pageto: "10",
      language: "vi"
    },
    dataType: "json",
    success: function success(response) {
      var data = response.data.gameslist;
      $(".game-list .con-box:eq(1) .page-nav .number").text("1/" + "".concat(response.page ? response.page : '1'));
      showListOrder2(data, 1);
    }
  });
  setTimeout(function () {
    var check = true;
    $("#history-order .item").click(function (e) {
      e.preventDefault();
      var parent = $(this).parent();
      // let show = parent.children();
      var myVar = parent.find(".details");
      if (check) {
        check = false;
        myVar.fadeIn(0);
      } else {
        check = true;
        myVar.fadeOut(0);
      }
    });
  }, 1000);
});
$(".game-list .tab .li:eq(2)").click(function (e) {
  e.preventDefault();
  $(".game-list .con-box").css("display", "none");
  $(".game-list .li .txt").removeClass("action");
  $(".game-list .li .txt:eq(2)").addClass("action");
  $(".game-list .li").removeClass("block-click");
  $(this).addClass("block-click");
  $(".game-list .con-box:eq(2)").css("display", "block");
  $.ajax({
    type: "POST",
    url: "/api/webapi/GetNoaverageEmerdList",
    data: {
      typeid: "1",
      pageno: "0",
      pageto: "10",
      language: "vi"
    },
    dataType: "json",
    success: function success(response) {
      var list_orders = response.data.gameslist;
      $(".time-box .info .number").text(response.period);
      $(".page-nav .number").text("1/" + response.page);
      $(".game-list .con-box:eq(2) .page-nav .number").text("1/" + response.page);
      showListOrder_t(list_orders, 2);
    }
  });
});
function alertMessJoin(msg) {
  $("body").append("\n                <div data-v-1dcba851=\"\" class=\"msg\">\n                    <div data-v-1dcba851=\"\" class=\"msg-content v-enter-active v-enter-to\" style=\"\"> ".concat(msg, " </div>\n                </div>\n                "));
  setTimeout(function () {
    $(".msg .msg-content").removeClass("v-enter-active v-enter-to");
    $(".msg .msg-content").addClass("v-leave-active v-leave-to");
    setTimeout(function () {
      $("body .msg").remove();
    }, 500);
  }, 1000);
}
$(".foot .right").click(function (e) {
  e.preventDefault();
  var join = $(this).attr("data-join");
  var x = $(".stepper-box input").val().trim();
  var money = $(".amount-box").attr("data-money");
  if (!join || !x || !money) {
    return;
  }
  $(this).addClass("block-click");
  $.ajax({
    type: "POST",
    url: "/api/webapi/action/join",
    data: {
      typeid: "1",
      join: join,
      x: x,
      money: money
    },
    dataType: "json",
    success: function success(response) {
      alertMessJoin(response.message);
      if (response.status === false) return;
      $("#history-order").prepend(response.data);
      $(".total-box .num span").text("₹ " + response.money + ".00");
      socket.emit('data-server_2', {
        money: x * money,
        join: join,
        time: Date.now(),
        change: response.change
      });
    }
  });
  setTimeout(function () {
    $(".van-overlay").fadeOut();
    $(".popup-join").css("transform", "translateY(600px)");
    $(".betting-mark .amount-box .li, .multiple-box .li").css({
      "background-color": "rgb(240, 240, 240)",
      color: "rgb(0, 0, 0)"
    });
    $(".betting-mark .amount-box .li:eq(0), .multiple-box .li:eq(0)").css({
      "background-color": "rgb(240, 240, 240)",
      color: "rgb(255, 255, 255)"
    });
    $(".stepper-box .digit-box input").val(1);
    $(".amount-box").attr("data-money", "1");
    $(".foot .right span:eq(1)").text(1000 + "");
    $(".foot .right").removeClass("block-click");
  }, 500);
});
function showListOrder(list_orders, x) {
  if (list_orders.length == 0) {
    return $(".game-list .con-box:eq(".concat(x, ") .hb")).html("\n                    <div data-v-a9660e98=\"\" class=\"van-empty\">\n                        <div class=\"van-empty__image\">\n                            <img src=\"/images/empty-image-default.png\" />\n                        </div>\n                        <p class=\"van-empty__description\">No data</p>\n                    </div>\n                    ");
  }
  var htmls = "";
  var result = list_orders.map(function (list_orders) {
    return htmls += "\n                    <div data-v-a9660e98=\"\" class=\"c-tc item van-row\">\n                        <div data-v-a9660e98=\"\" class=\"van-col van-col--8\">\n                            <div data-v-a9660e98=\"\" class=\"c-tc goItem\">".concat(list_orders.period, "</div>\n                        </div>\n                        <div data-v-a9660e98=\"\" class=\"van-col van-col--5\">\n                            <div data-v-a9660e98=\"\" class=\"c-tc goItem\">\n                                <!---->\n                                <span data-v-a9660e98=\"\" class=\"").concat(list_orders.amount % 2 == 0 ? "red" : "green", "\"> ").concat(list_orders.amount, " </span>\n                            </div>\n                        </div>\n                        <div data-v-a9660e98=\"\" class=\"van-col van-col--5\">\n                            <div data-v-a9660e98=\"\" class=\"c-tc goItem\">\n                                <span data-v-a9660e98=\"\"> ").concat(list_orders.amount < 5 ? "Small" : "Big", " </span>\n                                <!---->\n                            </div>\n                        </div>\n                        <div data-v-a9660e98=\"\" class=\"van-col van-col--6\">\n                            <div data-v-a9660e98=\"\" class=\"goItem c-row c-tc c-row-center\">\n                                <div data-v-a9660e98=\"\" class=\"c-tc c-row box c-row-center\">\n                                    <span data-v-a9660e98=\"\" class=\"li ").concat(list_orders.amount % 2 == 0 ? "red" : "green", "\"></span>\n                                    ").concat(list_orders.amount == 0 || list_orders.amount == 5 ? '<span data-v-a9660e98="" class="li violet"></span>' : "", "\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    ");
  });
  $(".game-list .con-box:eq(".concat(x, ") .hb")).html(htmls);
}
function showListOrder_t(list_orders, x) {
  if (list_orders.length == 0) {
    return $(".game-list .con-box:eq(".concat(x, ") .hb")).html("\n        <div data-v-a9660e98=\"\" class=\"van-empty\">\n          <div class=\"van-empty__image\">\n            <img src=\"/images/empty-image-default.png\" />\n          </div>\n          <p class=\"van-empty__description\">No data</p>\n        </div>\n      ");
  }
  var htmls = "";
  var amounts = list_orders.map(function (order) {
    return order.amount;
  });
  var labels = list_orders.map(function (order) {
    return order.period % 100;
  });
  htmls = "\n    <style>\n      canvas {\n        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n        transform: rotate(360deg);\n        transform-origin: center;\n        \n      }\n    </style>\n  \n   <canvas id=\"graphCanvas\" width=\"380\" height=\"400\"></canvas>\n   \n    <script>\n    labels1 = ".concat(JSON.stringify(labels), ";\n    amounts1 = [").concat(amounts.join(', '), "];\n    labels1.reverse();\n    amounts1.reverse();\n    \n    data = {\n      labels: labels1,\n      values: amounts1\n    };\n\n       canvas = document.getElementById('graphCanvas');\n   ctx = canvas.getContext('2d');\n\n  function createGradient(value, ctx, x, y, prevX, prevY) {\n    gradient = ctx.createLinearGradient(prevX, prevY, x, y);\n    if (value === 0) {\n      gradient.addColorStop(0, 'rgba(149,2,156,1)');\n      gradient.addColorStop(0.35, 'rgba(121,9,111,1)');\n      gradient.addColorStop(1, 'rgba(1,255,0,1)');\n    } else if (value === 5) {\n      gradient.addColorStop(0, 'rgba(149,2,156,1)');\n      gradient.addColorStop(0.35, 'rgba(121,9,111,1)');\n      gradient.addColorStop(1, 'rgba(255,0,14,1)');\n    }\n    return gradient;\n  }\n\n  function plotGraph(data) {\n     padding = 50;\n     spaceBetween = (canvas.width - padding * 2) / (data.values.length - 1);\n    \n    ctx.font = '14px Arial';\n    ctx.lineWidth = 2;\n\n    // Draw the Y axis labels\n    for (let i = 0; i <= 9; i++) {\n      ctx.fillText(9 - i, padding - 30, padding + i * (canvas.height - padding * 2) / 9);\n    }\n\n    data.values.forEach((value, index) => {\n       x = padding + index * spaceBetween;\n       y = padding + (9 - value) * (canvas.height - padding * 2) / 9;\n\n      if (index > 0) {\n         prevX = padding + (index - 1) * spaceBetween;\n         prevY = padding + (9 - data.values[index - 1]) * (canvas.height - padding * 2) / 9;\n        \n        ctx.beginPath();\n        ctx.moveTo(prevX, prevY);\n        ctx.lineTo(x, y);\n        \n        if (value === 0 || value === 5) {\n          ctx.strokeStyle = createGradient(value, ctx, x, y, prevX, prevY);\n        } else {\n          ctx.strokeStyle = getColorForValue(value);\n        }\n        ctx.stroke();\n      }\n\n      ctx.beginPath();\n      ctx.arc(x, y, 5, 0, Math.PI * 2);\n      ctx.fillStyle = getColorForValue(value);\n      ctx.fill();\n\n      ctx.fillText(data.labels[index], x - ctx.measureText(data.labels[index]).width / 2, canvas.height - padding + 20);\n    });\n  }\n\n  function getColorForValue(value) {\n    switch (value) {\n      case 1:\n      case 3:\n      case 7:\n      case 9: return 'green';\n      case 2:\n      case 4:\n      case 6:\n      case 8: return 'red';\n     \n      default: return '#000'; // default color\n    }\n  }\n\n  plotGraph(data);\n    </script>\n  ");
  var $targetDiv = $(".game-list .con-box:eq(".concat(x, ") .hb"));
  $targetDiv.empty();
  $targetDiv.html(htmls);
}
var isNumber = function isNumber(params) {
  var pattern = /^[0-9]*\d$/;
  return pattern.test(params);
};
function showListOrder2(list_orders, x) {
  if (list_orders.length == 0) {
    return $(".game-list .con-box:eq(".concat(x, ") #history-order")).html("\n                    <div data-v-a9660e98=\"\" class=\"van-empty\">\n                        <div class=\"van-empty__image\">\n                            <img src=\"/images/empty-image-default.png\" />\n                        </div>\n                        <p class=\"van-empty__description\">No Data</p>\n                    </div>\n                    ");
  }
  var htmls = "";
  var i = -1;
  var result = list_orders.map(function (list_orders) {
    i++;
    var join = list_orders.bet;
    var color = "";
    if (join == "l") {
      color = "big";
    } else if (join == "n") {
      color = "small";
    } else if (join == "t") {
      color = "violet";
    } else if (join == "d") {
      color = "red";
    } else if (join == "x") {
      color = "green";
    } else if (join == "0") {
      color = "red-violet";
    } else if (join == "5") {
      color = "green-violet";
    } else if (Number(join) % 2 == 0) {
      color = "red";
    } else if (Number(join) % 2 != 0) {
      color = "green";
    }
    if (!isNumber(join) && join == "l" || join == "n") {
      checkJoin = "\n                    <div data-v-a9660e98=\"\" class=\"van-image\" style=\"width: 30px; height: 30px;\">\n                        <img src=\"/images/".concat(join == "n" ? "small" : "big", ".png\" class=\"van-image__img\">\n                    </div>\n                    ");
    } else {
      checkJoin = "\n                    <span data-v-a9660e98=\"\">".concat(isNumber(join) ? join : "", "</span>\n                    ");
    }
    return htmls += "\n                    <div data-v-a9660e98=\"\" issuenumber=\"".concat(list_orders.stage, "\" addtime=\"").concat(timerJoin(list_orders.time), "\" colour=\"red\" number=\"6\" rowid=\"").concat(i, "\" class=\"hb\">\n                        <div data-v-a9660e98=\"\" class=\"item c-row\">\n                            <div data-v-a9660e98=\"\" class=\"result\">\n                                <div data-v-a9660e98=\"\" class=\"select select-").concat(color, "\">\n                                    ").concat(checkJoin, "    \n                                </div>\n                            </div>\n                            <div data-v-a9660e98=\"\" class=\"c-row c-row-between info\">\n                                <div data-v-a9660e98=\"\">\n                                    <div data-v-a9660e98=\"\" class=\"issueName\">\n                                        ").concat(list_orders.stage, " \n                                        ").concat(list_orders.status == 1 ? '<span data-v-a9660e98="" class="state green">Success</span>' : list_orders.status == 2 ? '<span data-v-a9660e98="" class="state red">Fail</span>' : "", "\n                                    </div>\n                                    <div data-v-a9660e98=\"\" class=\"tiem\">").concat(timerJoin(list_orders.time), "</div>\n                                </div>\n                                <div data-v-a9660e98=\"\" class=\"money\">\n                                        ").concat(list_orders.status == 1 && list_orders.bet == 0 ? '<span data-v-a9660e98="" class="success"> + ' + list_orders.money * 4.5 + " </span>" : list_orders.status == 1 && list_orders.bet == 5 ? '<span data-v-a9660e98="" class="success"> + ' + list_orders.money * 4.5 + " </span>" : list_orders.status == 1 && list_orders.result == 0 && list_orders.bet == 'd' ? '<span data-v-a9660e98="" class="success"> + ' + list_orders.money * 1.5 + " </span>" : list_orders.status == 1 && list_orders.bet == 'd' ? '<span data-v-a9660e98="" class="success"> + ' + list_orders.money * 2 + " </span>" : list_orders.status == 1 && list_orders.bet == 't' ? '<span data-v-a9660e98="" class="success"> + ' + list_orders.money * 4.5 + " </span>" : list_orders.status == 1 && list_orders.result == 5 && list_orders.bet == 'x' ? '<span data-v-a9660e98="" class="success"> + ' + list_orders.money * 1.5 + " </span>" : list_orders.status == 1 && list_orders.bet == 'x' ? '<span data-v-a9660e98="" class="success"> + ' + list_orders.money * 2 + " </span>" : list_orders.status == 1 && list_orders.bet == 'l' ? '<span data-v-a9660e98="" class="success"> + ' + list_orders.money * 2 + " </span>" : list_orders.status == 1 && list_orders.bet == 'n' ? '<span data-v-a9660e98="" class="success"> + ' + list_orders.money * 2 + " </span>" : list_orders.status == 1 ? '<span data-v-a9660e98="" class="success"> + ' + list_orders.money * 9 + " </span>" : list_orders.status == 2 ? '<span data-v-a9660e98="" class="fail"> - ' + list_orders.money + "</span>" : "", "\n                                </div>\n                            </div>\n                        </div>\n\n                        <div data-v-a9660e98=\"\" class=\"details\" style=\"display: none\">\n                            <div data-v-a9660e98=\"\" class=\"tit\">Details</div>\n                            <div data-v-a9660e98=\"\" class=\"li c-row c-row-between c-row-middle\">\n                                <div data-v-a9660e98=\"\">Order ID</div>\n                                <div data-v-a9660e98=\"\" data-clipboard-text=\"").concat(list_orders.id_product, "\" class=\"tag-read c-row c-row-between c-row-middle\">\n                                    ").concat(list_orders.id_product, "\n                                    <img data-v-a9660e98=\"\" width=\"18px\" height=\"15px\" src=\"/images/copy.png\" class=\"m-l-5\">\n                                </div>\n                                </div>\n                                <div data-v-a9660e98=\"\" class=\"li c-row c-row-between c-row-middle\">\n                                    <div data-v-a9660e98=\"\">Periods</div>\n                                        <div data-v-a9660e98=\"\">").concat(list_orders.stage, "</div>\n                                    </div>\n                                    <div data-v-a9660e98=\"\" class=\"li c-row c-row-between c-row-middle\">\n                                        <div data-v-a9660e98=\"\">Amount Spent</div>\n                                        <div data-v-a9660e98=\"\">").concat(list_orders.money + list_orders.fee, ".00</div>\n                                    </div>\n                                    <div data-v-a9660e98=\"\" class=\"li c-row c-row-between c-row-middle\">\n                                        <div data-v-a9660e98=\"\">Quantity</div>\n                                        <div data-v-a9660e98=\"\">").concat(list_orders.amount, "</div>\n                                    </div>\n                                    <div data-v-a9660e98=\"\" class=\"li c-row c-row-between c-row-middle\">\n                                        <div data-v-a9660e98=\"\">Net Amount</div>\n                                        <div data-v-a9660e98=\"\" class=\"red\">").concat(list_orders.money, ".00</div>\n                                    </div>\n                                    <div data-v-a9660e98=\"\" class=\"li c-row c-row-between c-row-middle\">\n                                        <div data-v-a9660e98=\"\">Tax</div>\n                                        <div data-v-a9660e98=\"\">").concat(list_orders.fee, ".00</div>\n                                    </div>\n                                    <div data-v-a9660e98=\"\" class=\"li c-row c-row-between c-row-middle\">\n                                        <div data-v-a9660e98=\"\">Opening Price</div>\n                                        <div data-v-a9660e98=\"\">").concat(list_orders.result, "</div>\n                                    </div>\n                                    <div data-v-a9660e98=\"\" class=\"li c-row c-row-between c-row-middle\">\n                                        <div data-v-a9660e98=\"\">Result</div>\n                                    <div data-v-a9660e98=\"\">\n                                        <div data-v-a9660e98=\"\" style=\"display: inline-block; margin-left: 8px;\">").concat(list_orders.result, "</div>\n                                        <div data-v-a9660e98=\"\" style=\"display: inline-block; margin-left: 8px;\">").concat(list_orders.result == 0 ? "Purple" : list_orders.result == 5 ? "Indigo" : list_orders.result % 2 == 0 ? "Red" : "Green", "</div>\n                                        <div data-v-a9660e98=\"\" style=\"display: inline-block; margin-left: 8px;\">").concat(list_orders.amount < 5 ? "Small" : "Big", "</div>\n                                    </div>\n                                </div>\n                                <div data-v-a9660e98=\"\" class=\"li c-row c-row-between c-row-middle \">\n                                    <div data-v-a9660e98=\"\">Select</div>\n                                    <div data-v-a9660e98=\"\">\n                                        <div data-v-a9660e98=\"\">").concat(color, "</div>\n                                    </div>\n                                </div>\n                                <div data-v-a9660e98=\"\" class=\"li c-row c-row-between c-row-middle\">\n                                    <div data-v-a9660e98=\"\">Status</div>\n                                    <div data-v-a9660e98=\"\" class=\"").concat(list_orders.status == 1 ? "green" : list_orders.status == 2 ? "red" : "", "\">").concat(list_orders.status == 1 ? "Success" : list_orders.status == 2 ? "Failure" : "", "</div>\n                                </div>\n                                <div data-v-a9660e98=\"\" class=\"li c-row c-row-between c-row-middle\">\n                                    <div data-v-a9660e98=\"\">Win Or Loss</div>\n                                    <div data-v-a9660e98=\"\" class=\"").concat(list_orders.status == 1 ? "green" : list_orders.status == 2 ? "red" : "", "\"> ").concat(list_orders.status == 1 ? "+" : list_orders.status == 2 ? "-" : "", " ").concat(list_orders.status == 0 ? "" : list_orders.status == 1 && list_orders.bet == 0 ? list_orders.money * 4.5 : list_orders.status == 1 && list_orders.bet == 5 ? list_orders.money * 1.5 : list_orders.status == 1 && list_orders.bet == 't' ? list_orders.money * 4.5 : list_orders.status == 1 && list_orders.result == 0 && list_orders.bet == 'd' ? list_orders.money * 1.5 : list_orders.status == 1 && list_orders.bet == 'd' ? list_orders.money * 2 : list_orders.status == 1 && list_orders.bet == 'x' ? list_orders.money * 1.5 : list_orders.status == 1 && list_orders.result == 5 && list_orders.bet == 'x' ? list_orders.money * 1.5 : list_orders.status == 1 && list_orders.bet == 'l' ? list_orders.money * 2 : list_orders.status == 1 && list_orders.bet == 'n' ? list_orders.money * 2 : list_orders.status == 1 ? list_orders.money * 9 : list_orders.money, "\n    </div>\n                                </div>\n                                <div data-v-a9660e98=\"\" class=\"li c-row c-row-between c-row-middle\">\n                                    <div data-v-a9660e98=\"\">Time</div>\n                                    <div data-v-a9660e98=\"\">").concat(timerJoin(list_orders.time), "</div>\n                                </div>\n                            </div>\n                    </div>\n                    ");
  });
  $(".game-list .con-box:eq(".concat(x, ") .list #history-order")).html(htmls);
}
$.ajax({
  type: "POST",
  url: "/api/webapi/GetNoaverageEmerdList",
  data: {
    typeid: "1",
    pageno: "0",
    pageto: "10",
    language: "vi"
  },
  dataType: "json",
  success: function success(response) {
    var list_orders = response.data.gameslist;
    $(".time-box .info .number").text(response.period);
    $(".game-list .con-box:eq(0) .page-nav .number").text("1/" + response.page);
    showListOrder(list_orders, 0);
  }
});
function formateT(params) {
  var result = params < 10 ? "0" + params : params;
  return result;
}
function timerJoin() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var addHours = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var date = "";
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
  return years + "-" + months + "-" + days + " " + hours + ":" + minutes + ":" + seconds + ":" + ampm;
}
$.ajax({
  type: "POST",
  url: "/api/webapi/GetMyEmerdList",
  data: {
    typeid: "1",
    pageno: "0",
    pageto: "10",
    language: "vi"
  },
  dataType: "json",
  success: function success(response) {
    var data = response.data.gameslist;
    $(".game-list .con-box:eq(1) .page-nav .number").text("1/" + "".concat(response.page ? response.page : '1'));
    showListOrder2(data, 1);
  }
});
var pageno = 0;
var limit = 10;
var page = 1;
$(".game-list .con-box:eq(0) .page-nav .arr:eq(1)").click(function (e) {
  e.preventDefault();
  pageno += 10;
  var pageto = limit;
  $.ajax({
    type: "POST",
    url: "/api/webapi/GetNoaverageEmerdList",
    data: {
      typeid: "1",
      pageno: pageno,
      pageto: pageto,
      language: "vi"
    },
    dataType: "json",
    success: function success(response) {
      if (response.status === false) {
        pageno -= 10;
        $(".game-list .con-box:eq(0) .page-nav .arr:eq(1)").addClass("block-click");
        $(".game-list .con-box:eq(0) .page-nav .arr:eq(1)").removeClass("action");
        $(".game-list .con-box:eq(0) .page-nav .van-icon-arrow-right").css("color", "#7f7f7f");
        alertMessJoin(response.msg);
        return false;
      }
      $(".game-list .con-box:eq(0) .page-nav .arr:eq(0)").removeClass("block-click");
      $(".game-list .con-box:eq(0) .page-nav .arr:eq(0)").addClass("action");
      $(".game-list .con-box:eq(0) .page-nav .van-icon-arrow-left").css("color", "#fff");
      page += 1;
      $(".game-list .con-box:eq(0) .page-nav .number").text(page + "/" + response.page);
      var list_orders = response.data.gameslist;
      $(".time-box .info .number").text(response.period);
      showListOrder(list_orders, 0);
    }
  });
});
$(".game-list .con-box:eq(0) .page-nav .arr:eq(0)").click(function (e) {
  e.preventDefault();
  $(".game-list .con-box:eq(0) .page-nav .arr:eq(1)").removeClass("block-click");
  $(".game-list .con-box:eq(0) .page-nav .arr:eq(1)").addClass("action");
  $(".game-list .con-box:eq(0) .page-nav .van-icon-arrow-right").css("color", "#fff");
  pageno -= 10;
  var pageto = limit;
  $.ajax({
    type: "POST",
    url: "/api/webapi/GetNoaverageEmerdList",
    data: {
      typeid: "1",
      pageno: pageno,
      pageto: pageto,
      language: "vi"
    },
    dataType: "json",
    success: function success(response) {
      if (page - 1 <= 1) {
        $(".game-list .con-box:eq(0) .page-nav .arr:eq(0)").addClass("block-click");
        $(".game-list .con-box:eq(0) .page-nav .arr:eq(0)").removeClass("action");
        $(".game-list .con-box:eq(0) .page-nav .van-icon-arrow-left").css("color", "#7f7f7f");
      }
      if (response.status === false) {
        pageno = 0;
        $(".game-list .con-box:eq(0) .page-nav .arr:eq(0)").addClass("block-click");
        $(".game-list .con-box:eq(0) .page-nav .arr:eq(0)").removeClass("action");
        $(".game-list .con-box:eq(0) .page-nav .van-icon-arrow-left").css("color", "#7f7f7f");
        alertMessJoin(response.msg);
        return false;
      }
      page -= 1;
      $(".game-list .con-box:eq(0) .page-nav .number").text(page + "/" + response.page);
      var list_orders = response.data.gameslist;
      $(".time-box .info .number").text(response.period);
      showListOrder(list_orders, 0);
    }
  });
});
var pageno = 0;
var limit = 10;
var page = 1;
$(".game-list .con-box:eq(1) .page-nav .arr:eq(1)").click(function (e) {
  e.preventDefault();
  pageno += 10;
  var pageto = limit;
  $.ajax({
    type: "POST",
    url: "/api/webapi/GetMyEmerdList",
    data: {
      typeid: "1",
      pageno: pageno,
      pageto: pageto,
      language: "vi"
    },
    dataType: "json",
    success: function success(response) {
      if (response.status === false) {
        pageno -= 10;
        $(".game-list .con-box:eq(1) .page-nav .arr:eq(1)").addClass("block-click");
        $(".game-list .con-box:eq(1) .page-nav .arr:eq(1)").removeClass("action");
        $(".game-list .con-box:eq(1) .page-nav .van-icon-arrow-right").css("color", "#7f7f7f");
        alertMessJoin(response.msg);
        return false;
      }
      $(".game-list .con-box:eq(1) .page-nav .arr:eq(0)").removeClass("block-click");
      $(".game-list .con-box:eq(1) .page-nav .arr:eq(0)").addClass("action");
      $(".game-list .con-box:eq(1) .page-nav .van-icon-arrow-left").css("color", "#fff");
      page += 1;
      console.log(page);
      $(".game-list .con-box:eq(1) .page-nav .number").text("1/" + "".concat(response.page ? response.page : '1'));
      var list_orders = response.data.gameslist;
      $(".time-box .info .number").text(response.period);
      showListOrder2(list_orders, 1);
    }
  });
  setTimeout(function () {
    var check = true;
    $("#history-order .item").click(function (e) {
      e.preventDefault();
      var parent = $(this).parent();
      // let show = parent.children();
      var myVar = parent.find(".details");
      if (check) {
        check = false;
        myVar.fadeIn(0);
      } else {
        check = true;
        myVar.fadeOut(0);
      }
    });
  }, 1000);
});
$(".game-list .con-box:eq(1) .page-nav .arr:eq(0)").click(function (e) {
  e.preventDefault();
  $(".game-list .con-box:eq(1) .page-nav .arr:eq(1)").removeClass("block-click");
  $(".game-list .con-box:eq(1) .page-nav .arr:eq(1)").addClass("action");
  $(".game-list .con-box:eq(1) .page-nav .van-icon-arrow-right").css("color", "#fff");
  pageno -= 10;
  var pageto = limit;
  $.ajax({
    type: "POST",
    url: "/api/webapi/GetMyEmerdList",
    data: {
      typeid: "1",
      pageno: pageno,
      pageto: pageto,
      language: "vi"
    },
    dataType: "json",
    success: function success(response) {
      if (page - 1 <= 1) {
        $(".game-list .con-box:eq(1) .page-nav .arr:eq(0)").addClass("block-click");
        $(".game-list .con-box:eq(1) .page-nav .arr:eq(0)").removeClass("action");
        $(".game-list .con-box:eq(1) .page-nav .van-icon-arrow-left").css("color", "#7f7f7f");
      }
      if (response.status === false) {
        pageno = 0;
        $(".game-list .con-box:eq(1) .page-nav .arr:eq(0)").addClass("block-click");
        $(".game-list .con-box:eq(1) .page-nav .arr:eq(0)").removeClass("action");
        $(".game-list .con-box:eq(1) .page-nav .van-icon-arrow-left").css("color", "#7f7f7f");
        alertMessJoin(response.msg);
        return false;
      }
      page -= 1;
      $(".game-list .con-box:eq(1) .page-nav .number").text("1/" + "".concat(response.page ? response.page : '1'));
      var list_orders = response.data.gameslist;
      $(".time-box .info .number").text(response.period);
      showListOrder2(list_orders, 1);
    }
  });
  setTimeout(function () {
    var check = true;
    $("#history-order .item").click(function (e) {
      e.preventDefault();
      var parent = $(this).parent();
      // let show = parent.children();
      var myVar = parent.find(".details");
      if (check) {
        check = false;
        myVar.fadeIn(0);
      } else {
        check = true;
        myVar.fadeOut(0);
      }
    });
  }, 1000);
});
window.onload = function () {
  function cownDownTimer() {
    var countDownDate = new Date("2030-07-16T23:59:59.9999999+01:00").getTime();
    setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      var minute = Math.ceil(minutes / 20 - 2);
      var seconds1 = Math.floor(distance % (1000 * 60) / 10000);
      var seconds2 = Math.floor(distance % (1000 * 60) / 1000 % 10);
      $(".number .item:eq(3)").text(seconds1);
      $(".number .item:eq(4)").text(seconds2);
      if (seconds1 == 0 && seconds2 == 0) {
        var event = new CustomEvent('alertTriggered');
        document.dispatchEvent(event);
      }
      // }, 0);
    }, 1000);
    setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var seconds1 = Math.floor(distance % (1000 * 60) / 10000);
      var seconds2 = Math.floor(distance % (1000 * 60) / 1000 % 10);
      if (seconds1 == 0 && seconds2 <= 5) {
        if (clicked) {
          playAudio1();
        }
      }
      if (seconds1 == 5 && seconds2 == 9) {
        if (clicked) {
          playAudio2();
        }
      }
    }, 1000);
    setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var seconds1 = Math.floor(distance % (1000 * 60) / 10000);
      var seconds2 = Math.floor(distance % (1000 * 60) / 1000 % 10);
      if (seconds1 == 0 && seconds2 <= 5) {
        $(".van-overlay").fadeOut();
        $(".popup-join").css("transform", "translateY(600px)");
        $(".betting-mark .amount-box .li, .multiple-box .li").css({
          "background-color": "rgb(240, 240, 240)",
          color: "rgb(0, 0, 0)"
        });
        $(".betting-mark .amount-box .li:eq(0), .multiple-box .li:eq(0)").css({
          "background-color": "rgb(240, 240, 240)",
          color: "rgb(255, 255, 255)"
        });
        $(".stepper-box .digit-box input").val(1);
        $(".amount-box").attr("data-money", "1");
        $(".foot .right span:eq(1)").text(1000 + "");
        $(".box .mark-box ").css("display", "flex");
        $(".box .mark-box .item:eq(0)").text(seconds1);
        $(".box .mark-box .item:eq(1)").text(seconds2);
      } else {
        $(".box .mark-box ").css("display", "none");
      }
    }, 0);
  }
  cownDownTimer();
  setTimeout(function () {
    var check = true;
    $("#history-order .item").click(function (e) {
      e.preventDefault();
      var parent = $(this).parent();
      // let show = parent.children();
      var myVar = parent.find(".details");
      if (check) {
        check = false;
        myVar.fadeIn(0);
      } else {
        check = true;
        myVar.fadeOut(0);
      }
    });
  }, 1000);
};
$('.van-notice-bar__wrap .van-notice-bar__content').css({
  'transition-duration': '48.9715s',
  'transform': 'translateX(-2448.57px)'
});
setInterval(function () {
  $('.van-notice-bar__wrap .van-notice-bar__content').css({
    'transition-duration': '0s',
    'transform': 'translateX(0)'
  });
  setTimeout(function () {
    $('.van-notice-bar__wrap .van-notice-bar__content').css({
      'transition-duration': '48.9715s',
      'transform': 'translateX(-2448.57px)'
    });
  }, 100);
}, 48000);
$('.van-button--default').click(function (e) {
  e.preventDefault();
  $('.van-popup-vf, .van-overlay').fadeOut(100);
});
$('.circular').click(function (e) {
  e.preventDefault();
  $('.van-popup-vf, .van-overlay').fadeIn(100);
});
var selectPageTime = Number($('html').attr("data-dpr"));
console.log(selectPageTime - 1);
$(".game-betting .box .item:eq(".concat(selectPageTime - 1, ")")).addClass('action');
$(".game-betting .box .item:eq(".concat(selectPageTime - 1, ") .img")).addClass('block-click');
$(".game-betting .box .item .img .van-image img").attr('src', '/images/icon_clock-gerrn.webp');
$(".game-betting .box .item:eq(".concat(selectPageTime - 1, ") .img .van-image img")).attr('src', '/images/icon_clock-red.webp');