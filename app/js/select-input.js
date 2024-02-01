$(document).ready(function () {
  $('input').on('focus', function () {
    $(this).parent('.input').find('label').addClass('active');
  });
  $('input').on('focusout', function () {

    if (!$(this).val()) {
      $(this).parent('.input').find('label').removeClass('active');
    }
  });

  $('input').each(function (index) {
    if ($(this).val()) {
      $(this).parent('.input').find('label').addClass('active');
    }
  });

  $('.select-js').each(function (index) {
    $(this).on('click', function () {
      $('.select').not($(this)).removeClass('open');
      $(this).toggleClass('open');
    });
    $(this).find('.select__option').on('click', function () {
      let dataOptionText = $(this).attr('data-text');
      let dataOptionId = $(this).attr('data-id');
      $(this).parents('.select-js').find('.select__selected span').text(dataOptionText);
      // $(this).parents('.select-js').find('.select-input').attr('value', dataOptionId);
      $(this).parents('.select-js').find('.select-input').val(dataOptionId);
      console.log($(this).parents('.select-js').find('.select-input').val())
    });
  });

  jQuery(function ($) {
    $(document).mouseup(function (e) {
      var div = $('.select');
      if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        div.removeClass('open');
      }
    });
  });




  $('.location-trigger-js').on('click', function () {
    $('.cart__delivery-location').slideToggle();
  });




});