var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  initialSlide: 3, /**Inicializo en la diapositiva 4 */
  grabCursor: true, /**Genera al pasar sobre la diapositiva la manito del cursor */
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 20, /**Espacio entre diapositivas o cartas**/
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1.5,
    slideShadows: true,
  },
  autoplay: {
    delay: 3000 /*LOOP DE 1 segundo**/
  },
  loop: true
});
swiper.init(true);
