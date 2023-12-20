$('.header__nav .header__nav-parent').on('mouseenter', function () {
  $('.header__nav .header__nav-parent').not(this).removeClass('current');
  $(this).addClass('current');

})

$('.header__nav .header__nav-parent, .tabs_item-1').on('mouseenter', function (e) {
  let current = $('.current .header__nav-parent-link');
  let width = current.width();
  let outerWidth = current.outerWidth();
  let totalWidth = ((outerWidth - width) / 2 - 10)
  let position = (current.position().left + totalWidth);

  $('.header__nav-active-line').css({
    'left': position,
    'width': width
  })

});
$('.user-control__item').on('mouseenter', function (e) {
  let current = $(this);
  let width = current.outerWidth();
  let position = (current.position().left);

  $('.header__nav-active-line').css({
    'left': position,
    'width': width
  })

});

$('.user-control__item').on('mouseleave', function () {
  $('.header__nav-active-line').css({
    'width': 0
  })
});

$('.header__nav').on('mouseleave', function () {
  $('.tabs_item-1').hide();
  $('.header__nav-active-line').css({
    'width': 0
  })
});

// $('.nav-drop__sidebar li').on('mouseenter', function (e) {
//   $(this).removeClass('active');
// });


$('.tab1-js').each(function () {
  $(this).find('.tabs-1 li').on('mouseenter', function () {


    $('.tab1-js .tabs-1 li').not(this).removeClass('current')
    $(this).addClass('current');
    let tabId1 = $(this).attr('data-tab-id');
    $('.tab1-js .tab_content-1 .tabs_item-1').hide();
    $(".tab1-js .tab_content-1 .tabs_item-1").each(function (index) {
      let tabId2 = $(this).attr('data-tab-id');
      if (tabId1 == tabId2) {
        $(this).show();
      }
    });
  });
});


$('.tab2-js').each(function () {

  $('.tabs-2 li').each(function () {

    $(this).on('mouseenter', function () {
      $(this).parent().find('li').removeClass('current');
      $(this).addClass('current');
      let tabId1 = $(this).attr('data-tab-id');
      $('.tab2-js .tab_content-2 .tabs_item-2').hide();
      $(".tab2-js .tab_content-2 .tabs_item-2").each(function (index) {
        let tabId2 = $(this).attr('data-tab-id');
        if (tabId1 == tabId2) {
          $(this).show();
        }
      });
    });

  });


});

// (function ($) {
//   $('.tab-1 ul.tabs-1').addClass('active').find('> li:eq(0)').addClass('current');

//   $('.tab-1 ul.tabs-1 li a').on('mouseenter', function (g) {
//     var tab = $(this).closest('.tab-1'),
//       index = $(this).closest('li').index();

//     tab.find('ul.tabs-1 > li').removeClass('current');
//     $(this).closest('li').addClass('current');

//     tab.find('.tab_content-1').find('div.tabs_item-1').not('div.tabs_item-1:eq(' + index + ')').hide();
//     tab.find('.tab_content-1').find('div.tabs_item-1:eq(' + index + ')').show();

//     g.preventDefault();
//   });



// })(jQuery);




// (function ($) {
//   $('.tab-2 ul.tabs-2').addClass('active').find('> li:eq(0)').addClass('current');

//   $('.tab-2 ul.tabs-2 li a').on('mouseenter', function (g) {
//     var tab = $(this).closest('.tab-2'),
//       index = $(this).closest('li').index();

//     tab.find('ul.tabs-2 > li').removeClass('current');
//     $(this).closest('li').addClass('current');

//     tab.find('.tab_content-2').find('div.tabs_item-2').not('div.tabs_item-2:eq(' + index + ')').hide();
//     tab.find('.tab_content-2').find('div.tabs_item-2:eq(' + index + ')').show();

//     g.preventDefault();
//   });



// })(jQuery);


