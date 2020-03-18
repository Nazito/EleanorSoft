$(window).load(function() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    $("body").addClass("ios");
  } else {
    $("body").addClass("web");
  }
  $("body").removeClass("loaded");
});

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 4,
    slideBy: 1,
    loop: true,
    nav: false,
    dots: true,
    pagination: true,
    autoplay: true,
    autoplayTimeout: 2500,

    responsive: {
      0: {
        items: 2
      },

      520: {
        items: 3
      },

      767: {
        items: 4
      }
    }
  });
});
