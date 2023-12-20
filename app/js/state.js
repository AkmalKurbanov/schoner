$('.td-undrln, .h-td-undrln').each(function () {
  let currentColor = $(this).css('color');
  $(this).append('<span class="underline"></span>')
  $(this).find('.underline').css('background', currentColor);
});


