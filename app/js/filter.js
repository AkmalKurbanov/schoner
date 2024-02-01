$(document).on('click', '.filter-item-heading-js', function () {
  $(this).parent().toggleClass('open');
  $(this).parent().find('.filter__item-content').slideToggle();
  $('.filter__item-heading').not($(this).parent()).removeClass('open');
  $('.filter__item-content').not($(this).parent().find('.filter__item-content')).slideUp();
});