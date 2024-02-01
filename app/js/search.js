$('.input-search-js').on('keyup', function () {
  if ($(this).val() != '') {
    $(this).parent().addClass('searching')
  } else {
    $(this).parent().removeClass('searching')
  }
});
$(document).on('click', '.input-search-js', function () {
  $('body').addClass('no-scroll');
  $('.main').addClass('hide');
});
$('.input-search-js').on('blur', function () {
  $('body').removeClass('no-scroll');
  $('.main').removeClass('hide')
});


$(document).on('click', '.clear-search-js', function () {
  $(this).parent().find('.input-search-js').val('');
  $(this).parent().find('.input-search-js').focus();
  $(this).parent().removeClass('searching');
});