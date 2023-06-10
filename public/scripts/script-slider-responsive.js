var swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: true, 
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: ".swiper-pagination",
  }

});

swiper.init();
