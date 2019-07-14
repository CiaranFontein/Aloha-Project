function ready() {
  const elem = document.querySelector('.main-carousel');
  const flkty = new Flickity(elem, {
    cellAlign: 'left',
    autoPlay: true,
    wrapAround: true,
    freeScroll: false,
    imagesLoaded: true
  });
}
document.addEventListener("DOMContentLoaded", ready);