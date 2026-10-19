document.addEventListener('DOMContentLoaded', function() {
  // Add more videos to #results-carousel in index.html. Infinite looping needs more
  // items than slidesToShow, so it is only enabled once there are enough videos.
  var slidesToShow = 2;
  var numItems = document.querySelectorAll('#results-carousel .item').length;
  var canLoop = numItems > slidesToShow;
  bulmaCarousel.attach('.carousel', {
    slidesToScroll: 1,
    slidesToShow: slidesToShow,
    loop: canLoop,
    infinite: canLoop,
    autoplay: false,
    breakpoints: [{ changePoint: 768, slidesToShow: 1, slidesToScroll: 1 }],
  });
});
