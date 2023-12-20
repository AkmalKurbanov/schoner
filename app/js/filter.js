$('.sorting-js').on('click', function () {
  $('body').addClass('no-scroll');
  $('.main').addClass('hide');
  $('#sorting').addClass('open');
});

jQuery(function ($) {
  $(document).mouseup(function (e) {
    var div = $('.filter');
    if (!div.is(e.target)
      && div.has(e.target).length === 0) {
      $('body').removeClass('no-scroll');
      $('.main').removeClass('hide');
      $('#sorting').removeClass('open');
      $('#filter').removeClass('open');
    }
  });
});




$('.filter-item-heading-js').on('click', function () {
  $(this).parent().toggleClass('open');
  $(this).parent().find('.filter__item-content').slideToggle();
  $('.filter__item-heading').not($(this).parent()).removeClass('open');
  $('.filter__item-content').not($(this).parent().find('.filter__item-content')).slideUp();
});