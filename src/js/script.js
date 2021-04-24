$(document).ready(function () {
  $(".slider__wrapper").slick({
    dots: false,
    // arrows: false,
    speed: 1000,
    // infinity: false;
    // slidesToShow: 2,
    // slidesToScroll: 2,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // fade: true,
    // cssEase: "linear",
    prevArrow:
      '<button type="button" class="slick-prev"><img src="../icons/arrows/arrow-left.png" /></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="../icons/arrows/arrow-right.png" /></button>',
    responsive: [
      {
        breakpoint: 920,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });
});
