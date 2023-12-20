$(document).ready(function () {
  $(document).on('click', '.copy-js', function () {
    let copied = $(this).find('.copied-element-js').attr('data-copy');
    let tempTextarea = $('<textarea>');
    let message = $(this).find('.copy-message');
    $('.copy-js').not(this).find('.copy-message').hide()
    $('body').append(tempTextarea);
    tempTextarea.val(copied).select();
    document.execCommand('copy');
    tempTextarea.remove();
    message.fadeIn();
    setTimeout(function () { message.hide(); }, 2000);
  });
});