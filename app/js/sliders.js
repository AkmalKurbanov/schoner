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
