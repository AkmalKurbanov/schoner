import Swiper from "swiper/bundle";

var swiper = new Swiper(".hero-slider-js", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


$('.scrollbar-slider-js').each(function (index, value) {
  var swiper = new Swiper(value, {
    slidesPerView: 5.5,
    spaceBetween: 15,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    navigation: {
      nextEl: value.nextElementSibling.nextElementSibling,
      prevEl: value.nextElementSibling,
    },
  });
});

$('.cart-slider-js').each(function (index, value) {
  var swiper = new Swiper(value, {
    slidesPerView: 1.5,
    spaceBetween: 15,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    navigation: {
      nextEl: value.nextElementSibling.nextElementSibling,
      prevEl: value.nextElementSibling,
    },
  });
});




var galleryThumbs = new Swiper(".gallery-thumbs", {
  slidesPerView: 7,
  spaceBetween: 15,
  direction: 'vertical',
  navigation: {
    nextEl: '.thumb-next',
    prevEl: '.thumb-prev',
  },
});

var galleryMain = new Swiper(".gallery-main", {
  thumbs: {
    swiper: galleryThumbs
  },
  pagination: {
    el: ".gallery-thumbs .swiper-slide",
    clickable: true,
  },
});

galleryMain.on('slideChangeTransitionStart', function () {
  galleryThumbs.slideTo(galleryMain.activeIndex);
});

galleryThumbs.on('transitionStart', function () {
  galleryMain.slideTo(galleryThumbs.activeIndex);
});



// let thumbHeight = $('.gallery-thumbs .swiper-slide').outerHeight();

// $('.gallery-thumbs .swiper-pagination span').css('height', thumbHeight + 4.56);




$(document).on('mouseenter', '.kind-thumb-js .product-detail__kinds-item', function () {
  let dataKind1 = $(this).attr('data-id');
  $('.kind-js .product-detail__hidden-item').each(function (index) {
    let dataKind2 = $(this).attr('data-id');
    if (dataKind2 == dataKind1) {
      $('.product-detail__hidden-list').addClass('show');
      $(this).show();
      $('.gallery-main').hide();
    } else {
      $(this).hide();
    }
  });
});

$(document).on('mouseleave', '.kind-thumb-js', function () {
  $('.kind-js').removeClass('show');
  $('.gallery-main').show();
});