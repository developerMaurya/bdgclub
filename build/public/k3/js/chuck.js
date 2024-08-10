"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
socket.on("data-server-k3", function (msg) {
  if (msg) {
    var checkData = $("html").attr("data-dpr");
    if (checkData == msg.game) {
      pageno = 0;
      limit = 10;
      page = 1;
      var notResult = msg.data[0];
      var Result = msg.data[1];
      var check = $("#number_result").attr("data-select");
      if (check == "all") {
        handleMyEmerdList(Result.period);
        reload_money();
        callListOrder();
        RenderResult(Result.result);
      } else {
        handleMyEmerdList(Result.period);
        reload_money();
        RenderResult(Result.result);
      }
      $("#period").text(notResult.period);
      $("#previous").addClass("block-click");
      $("#previous").removeClass("action");
      $("#previous .van-icon-arrow").css("color", "#7f7f7f");
      $("#next").removeClass("block-click");
      $("#next").addClass("action");
      $("#next .van-icon-arrow").css("color", "#fff");
    }
  }
});
function handleMyEmerdList(resultPeriod) {
  $.ajax({
    type: "POST",
    url: "/api/webapi/k3/GetMyEmerdList",
    data: {
      gameJoin: $("html").attr("data-dpr"),
      pageno: "0",
      pageto: "10"
    },
    dataType: "json",
    success: function success(response) {
      var data = response.data.gameslist;
      $("#number_result").text("1/" + response.page);
      GetMyEmerdList(data);
      $(".Loading").fadeOut(0);
      var firstGame = data[0];
      var displayResultHandler = function displayResultHandler(_ref) {
        var status = _ref.status,
          amount = _ref.amount;
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
      if (firstGame && String(firstGame.stage) === String(resultPeriod)) {
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
function ShowListOrder(list_orders) {
  if (list_orders.length == 0) {
    return $("#list_order").html("\n            <div data-v-a9660e98=\"\" class=\"van-empty\">\n                <div class=\"van-empty__image\">\n                    <img src=\"/images/empty-image-default.png\" />\n                </div>\n                <p class=\"van-empty__description\">No data</p>\n            </div>\n            ");
  }
  var htmls = "";
  var result = list_orders.map(function (list_orders) {
    var total = String(list_orders.result).split("");
    var total2 = 0;
    for (var i = 0; i < total.length; i++) {
      total2 += Number(total[i]);
    }
    var html2 = "";
    for (var _i = 0; _i < total.length; _i++) {
      html2 += "\n                <div data-v-03b808c2=\"\" class=\"li img".concat(total[_i], "\"></div>\n            ");
    }
    return htmls += "\n            <div data-v-03b808c2=\"\" class=\"c-tc item van-row\">\n                <div data-v-03b808c2=\"\" class=\"van-col van-col--6\">\n                    <div data-v-03b808c2=\"\" class=\"c-tc goItem lh\">".concat(list_orders.period, "</div>\n                </div>\n                <div data-v-03b808c2=\"\" class=\"van-col van-col--4\">\n                    <div data-v-03b808c2=\"\" class=\"c-tc goItem lh\"> ").concat(total2, " </div>\n                </div>\n                <div data-v-03b808c2=\"\" class=\"van-col van-col--5\">\n                    <div data-v-03b808c2=\"\" class=\"c-tc goItem lh\">\n                        <div data-v-03b808c2=\"\">").concat(total2 >= 3 && total2 <= 10 ? "Small" : "Big", "</div>\n                    </div>\n                </div>\n                <div data-v-03b808c2=\"\" class=\"van-col van-col--4\">\n                    <div data-v-03b808c2=\"\" class=\"c-tc goItem lh\">\n                        <div data-v-03b808c2=\"\">").concat(total2 % 2 == 0 ? "Even" : "Odd", "</div>\n                    </div>\n                </div>\n                <div data-v-03b808c2=\"\" class=\"van-col van-col--5\">\n                    <div data-v-03b808c2=\"\" class=\"goItem c-row c-tc c-row-between c-row-middle\">\n                        ").concat(html2, "\n                    </div>\n                </div>\n            </div>\n        ");
  });
  $("#list_order").html(htmls);
}
function formateT(params) {
  var result = params < 10 ? "0" + params : params;
  return result;
}
function timerJoin() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var date = "";
  if (params) {
    date = new Date(Number(params));
  } else {
    date = new Date();
  }
  var years = formateT(date.getFullYear());
  var months = formateT(date.getMonth() + 1);
  var days = formateT(date.getDate());
  var hours = formateT(date.getHours());
  var minutes = formateT(date.getMinutes());
  var seconds = formateT(date.getSeconds());
  return years + "-" + months + "-" + days + " " + hours + ":" + minutes + ":" + seconds;
}
function GetMyEmerdList(list_orders) {
  if (list_orders.length == 0) {
    return $("#list_order").html("\n            <div data-v-a9660e98=\"\" class=\"van-empty\">\n                <div class=\"van-empty__image\">\n                    <img src=\"/images/empty-image-default.png\" />\n                </div>\n                <p class=\"van-empty__description\">No Data</p>\n            </div>\n            ");
  }
  var htmls = "";
  var result = list_orders.map(function (list_order) {
    return htmls += "\n            <div data-v-03b808c2=\"\">\n                <div data-v-03b808c2=\"\" class=\"item c-row\">\n                    <div data-v-03b808c2=\"\" class=\"c-row c-row-between c-row-middle info\">\n                        <div data-v-03b808c2=\"\">\n                            <div data-v-03b808c2=\"\" class=\"issueName\">\n                                ".concat(list_order.stage, "\n                                <!---->\n                                <span data-v-03b808c2=\"\" class=\"state ").concat(list_order.status == 1 ? "green" : "red", " ").concat(list_order.status == 0 ? "d-none" : "", "\">").concat(list_order.status == 1 ? "Success" : "Failure", "</span>\n                            </div>\n                            <div data-v-03b808c2=\"\" class=\"tiem\">").concat(timerJoin(list_order.time), "</div>\n                        </div>\n                        <div data-v-03b808c2=\"\" class=\"money ").concat(list_order.status == 0 ? "d-none" : "", "\">\n                            <!---->\n                            <span data-v-03b808c2=\"\" class=\"").concat(list_order.status == 1 ? "success" : "fail", "\"> ").concat(list_order.status == 1 ? "+" : "-").concat(list_order.status == 1 ? list_order.get : list_order.price, ".00 </span>\n                        </div>\n                    </div>\n                </div>\n                <!---->\n            </div>    \n        ");
  });
  $("#list_order").html(htmls);
}
function callListOrder() {
  $.ajax({
    type: "POST",
    url: "/api/webapi/k3/GetNoaverageEmerdList",
    data: {
      gameJoin: $("html").attr("data-dpr"),
      pageno: "0",
      pageto: "10"
    },
    dataType: "json",
    success: function success(response) {
      var list_orders = response.data.gameslist;
      $("#period").text(response.period);
      $("#number_result").text("1/" + response.page);
      ShowListOrder(list_orders);
      $(".Loading").fadeOut(0);
      var result = String(list_orders[0].result).split("");
      $(".slot-transform:eq(0) .slot-num").attr("class", "slot-num bg".concat(result[0]));
      $(".slot-transform:eq(1) .slot-num").attr("class", "slot-num bg".concat(result[1]));
      $(".slot-transform:eq(2) .slot-num").attr("class", "slot-num bg".concat(result[2]));
    }
  });
}
callListOrder();
function callAjaxMeJoin() {
  $.ajax({
    type: "POST",
    url: "/api/webapi/k3/GetMyEmerdList",
    data: {
      gameJoin: $("html").attr("data-dpr"),
      pageno: "0",
      pageto: "10"
    },
    dataType: "json",
    success: function success(response) {
      var data = response.data.gameslist;
      $("#number_result").text("1/" + response.page);
      GetMyEmerdList(data);
      $(".Loading").fadeOut(0);
    }
  });
}
$("#history").click(function (e) {
  e.preventDefault();
  callListOrder();
  $(".header-history").removeClass("d-none");
  $(this).addClass("block-click action");
  $("#myBet").removeClass("block-click action");
  $("#number_result").attr("data-select", "all");
  pageno = 0;
  limit = 10;
  page = 1;
  $("#next").removeClass("block-click");
  $("#next").addClass("action");
  $("#next .van-icon-arrow").css("color", "#fff");
  $("#previous").addClass("block-click");
  $("#previous").removeClass("action");
  $("#previous .van-icon-arrow-left").css("color", "#7f7f7f");
});
$("#myBet").click(function (e) {
  e.preventDefault();
  callAjaxMeJoin();
  $(".header-history").addClass("d-none");
  $(this).addClass("block-click action");
  $("#history").removeClass("block-click action");
  $("#number_result").attr("data-select", "mybet");
  pageno = 0;
  limit = 10;
  page = 1;
  $("#next").removeClass("block-click");
  $("#next").addClass("action");
  $("#next .van-icon-arrow").css("color", "#fff");
  $("#previous").addClass("block-click");
  $("#previous").removeClass("action");
  $("#previous .van-icon-arrow-left").css("color", "#7f7f7f");
});
var pageno = 0;
var limit = 10;
var page = 1;
$("#next").click(function (e) {
  e.preventDefault();
  var check = $("#number_result").attr("data-select");
  $(".Loading").fadeIn(0);
  $("#previous").removeClass("block-click");
  $("#previous").addClass("action");
  $("#previous .van-icon-arrow-left").css("color", "#fff");
  pageno += 10;
  var pageto = limit;
  var url = "";
  if (check == "all") {
    url = "/api/webapi/k3/GetNoaverageEmerdList";
  } else {
    url = "/api/webapi/k3/GetMyEmerdList";
  }
  $.ajax({
    type: "POST",
    url: url,
    data: {
      gameJoin: $("html").attr("data-dpr"),
      pageno: pageno,
      pageto: pageto
    },
    dataType: "json",
    success: function () {
      var _success = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(response) {
        var list_orders;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              $(".Loading").fadeOut(0);
              if (!(response.status === false)) {
                _context.next = 8;
                break;
              }
              pageno -= 10;
              $("#next").addClass("block-click");
              $("#next").removeClass("action");
              $("#next .van-icon-arrow").css("color", "#7f7f7f");
              alertMess(response.msg);
              return _context.abrupt("return", false);
            case 8:
              list_orders = response.data.gameslist;
              $("#period").text(response.period);
              $("#number_result").text(++page + "/" + response.page);
              if (check == "all") {
                ShowListOrder(list_orders);
              } else {
                GetMyEmerdList(list_orders);
              }
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function success(_x) {
        return _success.apply(this, arguments);
      }
      return success;
    }()
  });
});
$("#previous").click(function (e) {
  e.preventDefault();
  var check = $("#number_result").attr("data-select");
  $(".Loading").fadeIn(0);
  $("#next").removeClass("block-click");
  $("#next").addClass("action");
  $("#next .van-icon-arrow").css("color", "#fff");
  pageno -= 10;
  var pageto = limit;
  var url = "";
  if (check == "all") {
    url = "/api/webapi/k3/GetNoaverageEmerdList";
  } else {
    url = "/api/webapi/k3/GetMyEmerdList";
  }
  $.ajax({
    type: "POST",
    url: url,
    data: {
      gameJoin: $("html").attr("data-dpr"),
      pageno: pageno,
      pageto: pageto
    },
    dataType: "json",
    success: function () {
      var _success2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(response) {
        var list_orders;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              $(".Loading").fadeOut(0);
              if (page - 1 < 2) {
                $("#previous").addClass("block-click");
                $("#previous").removeClass("action");
                $("#previous .van-icon-arrow-left").css("color", "#7f7f7f");
              }
              if (!(response.status === false)) {
                _context2.next = 9;
                break;
              }
              pageno = 0;
              $("#previous .arr:eq(0)").addClass("block-click");
              $("#previous .arr:eq(0)").removeClass("action");
              $("#previous .van-icon-arrow-left").css("color", "#7f7f7f");
              alertMess(response.msg);
              return _context2.abrupt("return", false);
            case 9:
              list_orders = response.data.gameslist;
              $("#period").text(response.period);
              $("#number_result").text(--page + "/" + response.page);
              if (check == "all") {
                ShowListOrder(list_orders);
              } else {
                GetMyEmerdList(list_orders);
              }
            case 13:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function success(_x2) {
        return _success2.apply(this, arguments);
      }
      return success;
    }()
  });
});