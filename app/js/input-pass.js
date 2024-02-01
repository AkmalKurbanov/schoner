// $('.input-pass-js').on('click', function () {
//   $(this).parent().find('input').attr('type', function (index, attr) {
//     return attr == 'password' ? null : 'password';
//   });
// });




$(document).on('click', '.input-pass-js', function (e) {
  $(this).toggleClass('show')
  var $pwd = $(this).parent().find('input');
  if ($pwd.attr('type') === 'password') {
    $pwd.attr('type', 'text');
  } else {
    $pwd.attr('type', 'password');
  }
  e.preventDefault();
});