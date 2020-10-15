'use strict'

$(function() {
  //ハンバーガーメニュー
  $(".humburger").click(function() {
    $("nav").slideToggle();
  });

  //リンクスクロール設定
  $('a[href^="#"]:not([href="#"])').click(function(){
    //リンク取得
    var target = $($(this).attr("href")).offset().top;
    //高さ調整
    target += -50;
    //スクロール
    $("html, body").animate({scrollTop: target}, 500);

    return false;
  });

  // TOPへ戻る
  $("#pagetop-btn").hide();
  $(window).scroll(function(){
    if($(this).scrollTop() > 400){
      $("#pagetop-btn").fadeIn();
    } else {
      $("#pagetop-btn").fadeOut();
    }
  });

});
