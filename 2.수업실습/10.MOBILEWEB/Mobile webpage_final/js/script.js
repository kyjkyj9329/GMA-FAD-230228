$(function() {
  $('.gnb-include').load('/include/gnb.html');
  $('.main-header-include').load('/include/main-header.html');

  /* Category Accordion */
  $('.category-accordion .detail').eq(0).show();
  $('.category-accordion .title').click(function() {
    // $(this).next().show();
    $(this).next().stop().slideDown();
    $(this).siblings('.category-accordion .title').next().stop().slideUp()

    $(this).addClass('active')
    $(this).siblings('.category-accordion .title').removeClass('active')
  });

  /* Recent Search Result */
  $('.search-recent .btn-clear').click(function() {
    $(this).parent().hide();
  });
  $('.search-recent .btn-all-clear').click(function() {
    $('.search-recent .item').hide();
  });

  /* Cart Items */
  $('.cart-content .btn-all-clear').click(function() {
    $('.cart-item').hide();
  });
  $('.cart-content .btn-clear').click(function() {
    $(this).parent().parent().hide();
  });

  /* Front Slider */
  $('.front-slider').slick({
    slidesToShow: 1,
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToScroll: 1
  });

  /* Goods Suggestion Slider */
  $('.goods-suggestion-items').slick({
    slidesToShow: 3,
    dots: false,
    arrows: true,
    slideToScroll: 2
  });

  /* Wish */
  $('.wish').click(function(){
    $(this).toggleClass('active');
  });

  /* Front Footer */
// $('.btn-view-more').click(function() {
//   $('.company-info-more').show()
// });
$(document).ready(function() {
  btn = $('.btn-view-more');
  layer = $('.company-info-more');
  btn.click(function() {
    layer.toggle(
      function(){layer.addClass('show')},
      function(){layer.addClass('hide')}
      );
    });
  });

  /* Goods Detail Slider */
  $('.goods-detail-slider').slick({
    slidesToShow: 1,
    dots: true,
    arrows: false,
    slideToScroll: 1
  });

  /* Goods Accordion */
  $('.goods-accordion .detail').eq(0).show();
  $('.goods-accordion .title').click(function(){
    $(this).next().toggle();
    $(this).addClass('active');
    $(this).siblings('.goods-accordion .title').removeClass('active');
  });

  /* Goods Order Info */
  $('.btn-order-choice').click(function(){
    $('.goods-order-choice').hide();
    $('.goods-order-final').slideDown(250);
    $('.overlay-fold').show();
  });
  $('.btn-fold, .overlay-fold').click(function() {
    $('.goods-order-choice').show();
    $('.goods-order-final').slideUp(250);
    $('.overlay-fold').hide();
  });
});