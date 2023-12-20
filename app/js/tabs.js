$('.tab').each(function () {
  $(this).find('.tabs li').on('click', function (e) {
    e.preventDefault();
    $('.tabs li').not(this).removeClass('current')
    $(this).addClass('current');
    let tabId1 = $(this).attr('data-tab-id');
    $('.tab .tab__content .tab__item').removeClass('show');
    $(".tab .tab__content .tab__item").each(function (index) {
      let tabId2 = $(this).attr('data-tab-id');
      if (tabId1 == tabId2) {
        $(this).addClass('show');
      }
    });
  });
});

$(".tabs li.current, .tabs li:first").trigger("click");