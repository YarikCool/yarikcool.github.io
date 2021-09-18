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

  $("[data-modal=consultation]").on("click", function () {
    $(".overlay, #consultation").fadeIn("fast");
  });
  $(".modal__close").on("click", function () {
    $(".overlay, .modal").fadeOut("fast");
  });
  $(".btn_buy").each(function (i) {
    // i - index, chtoby my ponimali na kot. klikaem
    $(this).on("click", function () {
      $("#order .modal__descr").text($(".catalogue__item-title").eq(i).text());
      $(".overlay, #order").fadeIn("fast");
    });
  });

  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        tel: "required",
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        email: {
          required: "napishi debil etakoy email svoy, pozhaluysta",
          email: "sobachku zabyl pridurok",
        },
        tel: "Kontakt ostav skleroznik",
        name: {
          required: "Imya i itchestvo SUDA",
          minlength: jQuery.validator.format("minlength is {0} !"),
        },
      },
    });
  }

  validateForms("#consultation-form");
  validateForms("#consultation .feed-form");
  validateForms("#order .feed-form");

  $("input[name=tel]").mask("+38(099)999-99-99");
});

// document.getElemntById("zdes id");

// let close_btn = document.querySelectorAll(".modal__close");

// let promoReg_btn = document.querySelector(".promo__btn");
// let modalReg = document.querySelector(".modal__registration");
// let modalReg_btn = document.querySelector(".modal__reg-btn");

// let catalogueBuy_btn = document.querySelector(".catalogue__btn");
// let modalBuy = document.querySelector(".modal__buy");
// let modalBuy_btn = document.querySelector(".modal__buy-btn");

// let modal = document.querySelector(".modal");
// let overlay = document.querySelector(".overlay");

// let modalThanks = document.querySelector(".modal__thanks");

// // function rere(btn) {
// //   btn.addEventListener("click", function () {
// //     alert(1234);
// //   });
// // }

// function modalOpen(className, modalType, modalTypeActive) {
//   className.addEventListener("click", function () {
//     $(modalType).addClass(modalTypeActive);
//     $(overlay).addClass("overlay-active");
//   });
// }

// function modalClose(modalTypeActive) {
//   close_btn.addEventListener("click", function () {
//     $(modal).removeClass(modalTypeActive);
//     $(overlay).removeClass("overlay-active");
//   });
// }

// function modalThanks_trigger(modalType, modalTypeActive) {
//   modalType.addEventListener("click", function () {
//     $(modal).removeClass(modalTypeActive);
//     $(modalThanks).addClass("modal__thanks-active");
//   });
// }

// modalOpen(promoReg_btn, modalReg, "modal__registration-active");
// modalClose("modal__registration-active");
// modalThanks_trigger(modalReg_btn, "modal__registration-active");
// modalClose("modal__thanks-active");

// modalOpen(catalogueBuy_btn, modalBuy, "modal__buy-active");
// modalClose("modal__buy-active");
// modalThanks_trigger(modalBuy_btn, "modal__buy-active");
// modalClose("modal__thanks-active");

// close_btn.addEventListener("click", function () {
//   // $(title).toggleClass("modal__active");
//   // ILI title.classList.toggle("class");
//   $(overlay).addClass("overlay-active");
//   $(modal).addClass("modal-active");
// });
