// アコーディオン実装 jQuery
$(function () {
  // '.is-opend'がついている展開メニューを表示する
  $('.js-accordion-trigger.is-opend').next('.js-accordion-target').show();
  $('.js-accordion-trigger').on('click', function () {
    $(this).next('.js-accordion-target').slideToggle();
    $(this).toggleClass('is-opend');
  });
});
