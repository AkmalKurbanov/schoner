$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    $('#scroll-top').addClass('show');
  } else {
    $('#scroll-top').removeClass('show');
  }
});


$('#scroll-top').click(function () {
  $('html, body').animate({ scrollTop: 0 }, 500);
});