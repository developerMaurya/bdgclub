"use strict";

var getWBody = $('.navbar').width();
$(".list-banner .van-swipe-item").css("width", "".concat(getWBody, "px"));
var checkWidth = $('.navbar').width();
$('html').css('font-size', "".concat(checkWidth / 10, "px"));
$('.van-tabbar .van-tabbar-item').css({
  'transform': 'scale(0.9)'
});
$(window).resize(function () {
  var checkWidth = $('.navbar').width();
  $('html').css('font-size', "".concat(checkWidth / 10, "px"));
  $('.van-tabbar .van-tabbar-item').css({
    'transform': 'scale(0.9)'
  });
});
function formatMoney(money, type) {
  return String(money).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1".concat(type));
}