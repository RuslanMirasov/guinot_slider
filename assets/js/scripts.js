const discontSlider = new Swiper('.discont-slider', {
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  autoHeight: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.discont-swiper-pagination',
    clickable: true,
  },
});
