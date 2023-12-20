$('.user-control__dropdown_profile input').on('focus focusout', function () {
  $('.user-control__dropdown_profile').addClass('open')
});


jQuery(function ($) {
  $(document).on('mouseup', function (e) {
    var div = $('.user-control__dropdown_profile');
    if (!div.is(e.target)
      && div.has(e.target).length === 0) {
      if ($('.user-control__dropdown_profile input').val() != '') {
        $('.user-control__dropdown_profile').addClass('open')
      }
      else {
        $('.user-control__dropdown_profile').removeClass('open')
      }
    }
  });
});

$('.scroll-block-js').each(function () {
  $(this).on('scroll', function () {
    clearTimeout($.data(this, 'scrollTimer'));
    $(this).parent().addClass('scrolling');
    $.data(this, 'scrollTimer', setTimeout(function () {
      $('.scroll-block-wrap').removeClass('scrolling');
    }, 250));
  });
});