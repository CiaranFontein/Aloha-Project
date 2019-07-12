function ready() {
  const elem = document.querySelector('.main-carousel');
  const flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    autoplay: true,
    wrapAround: true,
    freeScroll: false,
    imagesLoaded: true
  });
}
document.addEventListener("DOMContentLoaded", ready);