$('.input-search-js').on('keyup', function () {
  if ($(this).val() != '') {
    $(this).parent().addClass('searching')
  } else {
    $(this).parent().removeClass('searching')
  }
});
$('.input-search-js').on('focus', function () {
  $('body').addClass('na-scroll');
  $('.main').addClass('hide');
});
$('.input-search-js').on('blur', function () {
  $('body').removeClass('na-scroll');
  $('.main').removeClass('hide')
});


$('.clear-search-js').on('click', function () {
  $(this).parent().find('.input-search-js').val('');
  $(this).parent().find('.input-search-js').focus();
  $(this).parent().removeClass('searching');
});