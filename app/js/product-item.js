$('.product-item-js').each(function (index) {
  let $this = $(this)
  let $mainImg = $this.find('.product-item__img');
  let $hiddenImg = $this.find('.product-item__hidden-img');
  let $hiddenListImg = $this.find('.product-item__hidden-img-list');
  let $thumbs = $this.find('.thumbs-js');
  let $link = $this.find('.product-item__link');

  $this.on('mouseenter', function () {
    if ($thumbs.length > 0 ) {
      $thumbs.show();
      $this.find('.product-item__desc').hide();
    }
    if ($hiddenImg.length > 0) {
      $mainImg.hide();
      $hiddenImg.show();
    }
  });
  
  
  $this.on('mouseleave', function () {
    if ($thumbs.length > 0) {
      $thumbs.hide()
      $this.find('.product-item__desc').show();
    }
    if ($hiddenImg.length > 0) {
      $mainImg.show();
      $hiddenImg.hide();
    }
  });


  $thumbs.find('li').on('mouseenter', function () {
    let dataId1 = $(this).attr('data-id')
    $link.css('pointer-events', 'none');
    $hiddenListImg.find('li').each(function (index) {
      let dataId2 = $(this).attr('data-id')
      if (dataId2 == dataId1) {
        $(this).show();
        $hiddenImg.hide();
        $hiddenListImg.show();
      }
    });
  });
  $thumbs.find('li').on('mouseleave', function () {
    let dataId1 = $(this).attr('data-id')
    $link.css('pointer-events', 'inherit');
    $hiddenListImg.find('li').each(function (index) {
      let dataId2 = $(this).attr('data-id')
      if (dataId2 == dataId1) {
        $(this).hide();
        $hiddenImg.show();
        $hiddenListImg.hide();
      }

    });
  });

});