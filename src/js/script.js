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

  $("ul.catalogue__tabs").on(
    "click",
    "li:not(.catalogue__tab_active)",
    function () {
      $(this)
        .addClass("catalogue__tab_active")
        .siblings()
        .removeClass("catalogue__tab_active")
        .closest("div.catalogue__wrapper")
        .find("div.catalogue__content")
        .removeClass("catalogue__content_active")
        .eq($(this).index())
        .addClass("catalogue__content_active");
    }
  );

  // $("catalogue__item-link").on("click", function () {});
  function toggleCard(className) {
    $(className).each(function (i) {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".catalogue__item-front")
          .eq(i)
          .toggleClass("catalogue__item-front_active");
        $(".catalogue__item-back")
          .eq(i)
          .toggleClass("catalogue__item-back_active");
      });
    });
  }

  toggleCard(".catalogue__item-link");
  toggleCard(".catalogue__item-link-back");
});
