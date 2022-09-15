$(window).on("load", function () {
  $(".preloader-sa").fadeOut();
});

$(document).ready(function () {
  var $disabledResults = $(".select_country");
  $disabledResults.select2();

  // varibles
  const btn_bars = document.querySelector(".btn_bars");
  const btn_mob_search = document.querySelector(".btn_mob_search");
  const nav_ = document.querySelector(".nav_");
  const close_nav = document.querySelector(".close_nav");
  const toggle_bars = document.querySelector(".toggle_bars");
  const toggle_search = document.querySelector(".toggle_search");
  const moboverlay = document.querySelector(".moboverlay");
  const body_ = document.querySelector("body");

  // open navbar
  btn_bars.addEventListener("click", function () {
    nav_.classList.add("open-nav");
    toggle_bars.classList.remove("fa-bars");
    toggle_bars.classList.add("fa-times");
    moboverlay.style.display = "block";
    body_.classList.add("over_");
  });
  // close navbar
  close_nav.addEventListener("click", function () {
    nav_.classList.remove("open-nav");
    toggle_bars.classList.add("fa-bars");
    toggle_bars.classList.remove("fa-times");
    moboverlay.style.display = "none";
    body_.classList.remove("over_");
  });
  // close navbar
  moboverlay.addEventListener("click", function () {
    nav_.classList.remove("open-nav");
    toggle_bars.classList.add("fa-bars");
    toggle_bars.classList.remove("fa-times");
    moboverlay.style.display = "none";
    $(".popup_city_parant").slideUp("500");
    body_.classList.remove("over_");
  });
  // open & close search
  $(".toggle_search").click(function () {
    $(".site_search").slideToggle("500");
    $(".btn_mob_search .fa-search").toggleClass("fa-times");
  });
  // open sign in popup
  $(".sign_in_click").click(function () {
    $(".nav_").removeClass("open-nav");
    $(".popup_sign_in").slideDown("500");
    $("body").addClass("over_");
    $(".moboverlay").fadeIn("500");
    $(".toggle_bars").addClass("fa-bars");
    $(".toggle_bars").removeClass("fa-times");
  });
  // close sign in popup
  $(".btn_close_sign_in, .moboverlay").click(function () {
    $(".popup_sign_in").slideUp("500");
    $("body").removeClass("over_");
    $(".moboverlay").fadeOut("500");
    $(".toggle_bars").addClass("fa-bars");
    $(".toggle_bars").removeClass("fa-times");
  });
  // slide ul menu mobile
  if ($(document).width() < 768) {
    $(".hover_drop_down_").click(function (e) {
      e.preventDefault();
      $(this).children().next().slideToggle("500");
    });
    //
    $(".hover_drop_down_").children().children().children().unwrap();
    // list menu mobile category ads
    $(".list-mobile .anc_mobile").click(function (e) {
      e.preventDefault();
      $(this).next().slideToggle("500");
    });
  }

  if ($(document).width() < 768) {
    // add slider mobile
    $(".add_mob_slider").addClass("owl-carousel");
    $(".add_mob_item").addClass("item");
  } else {
    $(".add_mob_slider").removeClass("owl-carousel");
    $(".add_mob_item").removeClass("item");
  }
  // popup select city
  $(".btn_select_city").click(function () {
    $(".popup_city_parant").slideDown("500");
  });
  $(".btn_select_city").click(function () {
    $(".popup_city").slideDown("500");
    moboverlay.style.display = "block";
    body_.classList.add("over_");
  });

  $(".btn_close_city, .moboverlay").click(function () {
    $(".popup_city_parant").slideUp("500");
    moboverlay.style.display = "none";
    body_.classList.remove("over_");
  });
  // change grid section
  $(".grid_btn-").click(function () {
    $(".change_section").addClass("category-section-g");
    $(".change_section").removeClass("category-section-l");
    $(".item-service").addClass("item-service-grid");
    $(".item-service").removeClass("item-service-list");
    $(".slide-grid .owl-carousel").trigger("destroy.owl.carousel");
    $(".slide-grid .owl-carousel").owlCarousel({
      loop: true,
      stagePadding: 30,
      nav: false,
      // autoplay: true,
      margin: 30,
      rtl: $("html").attr("dir") == "rtl" ? true : false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
      },
    });
  });
  // change form grid to list
  $(".grid_btn-list").click(function () {
    $(".change_section").removeClass("category-section-g");
    $(".change_section").addClass("category-section-l");
    $(".grid_btn-").addClass("color_7");

    $(".item-service").removeClass("item-service-grid");
    $(".item-service").addClass("item-service-list");
    $(".slide-grid .owl-carousel").trigger("destroy.owl.carousel");
    $(".slide-grid .owl-carousel").owlCarousel({
      loop: true,
      stagePadding: 30,
      nav: false,
      // autoplay: true,
      margin: 30,
      rtl: $("html").attr("dir") == "rtl" ? true : false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  });

  // start popup order services
  if ($(".anc_service_order_").length) {
    $(".anc_service_order_").click(function () {
      $(".order_services").slideDown("500");
      $(".moboverlay").slideDown("500");
      $("body").addClass("over_");
    });
    $(".moboverlay , .close_order").click(function () {
      $(".order_services").slideUp("500");
      $(".moboverlay").slideUp("500");
      $("body").removeClass("over_");
    });
  }
  // slider-featured
  $(".featured_bottom .owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    // stagePadding: 30,
    nav: false,
    autoplay: true,
    rtl: $("html").attr("dir") == "rtl" ? true : false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
  // grid and list change

  $(".slide-grid .owl-carousel").owlCarousel({
    loop: true,
    // stagePadding: 30,
    margin: 30,
    nav: false,
    // autoplay: true,
    rtl: $("html").attr("dir") == "rtl" ? true : false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });

  $(".most_searched .owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    // autoplay: true,
    nav: false,
    rtl: $("html").attr("dir") == "rtl" ? true : false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });

  $(".category-fav .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    // autoplay: true,
    nav: false,
    rtl: $("html").attr("dir") == "rtl" ? true : false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
  $(".add_mob_slider.owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    // autoplay: true,
    nav: false,
    rtl: $("html").attr("dir") == "rtl" ? true : false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
    },
  });

  $(".content_order-parant .owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    // autoplay: true,
    nav: false,

    rtl: $("html").attr("dir") == "rtl" ? true : false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });
  $(".slider_singel .owl-carousel").owlCarousel({
    loop: true,
    // autoplay: true,
    nav: false,
    navText: [
      "<i class='fas fa-angle-right'></i>",
      "<i class='fas fa-angle-left'></i>",
    ],
    rtl: $("html").attr("dir") == "rtl" ? true : false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
    },
  });
  // end document- ready
  $(".slide_commercial .owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoplay: true,
    rtl: $("html").attr("dir") == "rtl" ? true : false,
    responsive: {
      0: {
        items: 1,
        margin: 20,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  // ~~~~~~~~~~~~back_top

  $(window).scroll(function () {
    if ($(window).scrollTop() > 150) {
      $(".back_top").fadeIn("500");
    } else {
      $(".back_top").fadeOut("500");
    }
  });
  $(".back_top").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "500");
  });
});
if ($(document).width() > 768) {
  //~~~~~~~~~ fixed header
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 150) {
      $("header").addClass("fixed_");
    } else {
      $("header").removeClass("fixed_");
    }
  });
  var fixedBar = document.querySelector("header"),
    prevScrollpos = $(window).scrollTop();

  (window.onscroll = function () {
    var o = $(window).scrollTop();
    prevScrollpos < o && prevScrollpos > 0
      ? fixedBar.classList.add("fixsedt")
      : fixedBar.classList.remove("fixsedt"),
      (prevScrollpos = o);
  }),
    document.documentElement.style.setProperty("--animate-duration", ".5s");
  // ~~~~~~~~~~~~~~~
} else {
  //~~~~~~~~~ fixed header
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 150) {
      $(".header_main").addClass("fixed_");
    } else {
      $(".header_main").removeClass("fixed_");
    }
  });
  var fixedBar = document.querySelector(".header_main"),
    prevScrollpos = $(window).scrollTop();

  (window.onscroll = function () {
    var o = $(window).scrollTop();
    prevScrollpos < o && prevScrollpos > 0
      ? fixedBar.classList.add("fixsedt")
      : fixedBar.classList.remove("fixsedt"),
      (prevScrollpos = o);
  }),
    document.documentElement.style.setProperty("--animate-duration", ".5s");
  // ~~~~~~~~~~~~~~~
}
