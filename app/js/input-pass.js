// $('.input-pass-js').on('click', function () {
//   $(this).parent().find('input').attr('type', function (index, attr) {
//     return attr == 'password' ? null : 'password';
//   });
// });




$('.input-pass-js').on('click', function (e) {
  $(this).toggleClass('show')
  var $pwd = $(this).parent().find('input');
  if ($pwd.attr('type') === 'password') {
    $pwd.attr('type', 'text');
  } else {
    $pwd.attr('type', 'password');
  }
  e.preventDefault();
});