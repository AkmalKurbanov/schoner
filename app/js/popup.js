$(document).on('click', '.popup-trigger-js', function (e) {
  e.preventDefault();
  $('body').addClass('no-scroll');
  $('.main').addClass('hide');
  let dataNameBtn = $(this).attr('data-name');

  $(".popup-js").each(function (index) {
    let dataNamePopup = $(this).attr('data-name');
    if (dataNamePopup === dataNameBtn) {
      $(this).addClass('open');
      $(this).removeClass('close');
    } else {
      $(this).removeClass('open');
      $(this).addClass('close');
    }
  });
});

jQuery(function ($) {
  $(document).mouseup(function (e) {
    var div = $('.popup-window-js');
    if (!div.is(e.target)
      && div.has(e.target).length === 0) {
      $('.popup-js').removeClass('open');
      $('.popup-js').addClass('close');
      $('body').removeClass('no-scroll');
      $('.main').removeClass('hide');
    }
  });
});

$(document).on('click', '.popup-close-js', function () {
  $('.popup-js').removeClass('open');
  $('.popup-js').addClass('close');
  $('body').removeClass('no-scroll');
  $('.main').removeClass('hide');
});