$('.category-item-js').each(function (index) {
  let $this = $(this);
  let $link = $this.find('.category__item-link');
  let $subCat = $this.find('.category__subcategory li');
  $subCat.on('mouseenter', function () {
    $link.css('pointer-events', 'none');
  });
  $subCat.on('mouseleave', function () {
    $link.css('pointer-events', 'inherit');
  });
});