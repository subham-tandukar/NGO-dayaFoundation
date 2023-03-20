var loader = document.querySelector(".pre-loader");
var html = document.querySelector("html");

function myMove() {
  loader.style.display = "none";
  html.style.overflowY = "scroll";
}

window.addEventListener("load", function () {
  setTimeout(function () {
    myMove();
  }, 2000);
});

// var selector = ".nav-item";
// var url = window.location.href;
// var target = url.split("/");
// $(selector).each(function () {
//   if ($(this).attr("href") === target[4]) {
//     $(selector).removeClass("active-nav");
//     $(this).removeClass("active-nav").addClass("active-nav");
//   }
// });

var swiper = new Swiper(".mySwiper-work", {
  slidesPerView: 4,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".mySwiper-blog", {
  slidesPerView: 4,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".mySwiper-recent-post", {
  slidesPerView: 3,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".mySwiper-team", {
  slidesPerView: 4,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".mySwiper-gallery", {
  slidesPerView: 4,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
var swiper = new Swiper(".mySwiper-partner", {
  slidesPerView: 5,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});

$(function () {
  $("#switch-blue").click(function () {
    $(".video").toggleClass("d-none");
    $(".photo").toggleClass("d-none");
  });

  $(".obj").hover(function () {
    $(".obj.active-content").removeClass("active-content");
    $(this).toggleClass("active-content");
  });
  $(".category").hover(function () {
    $(".category.active-category").removeClass("active-category");
    $(this).toggleClass("active-category");
  });
});

$(window).scroll(function () {
  var h = $(document).height();
  var hh = $(document).scrollTop();
  if (hh > h / 1.5) {
    $("#top").css({
      bottom: "15%",
      opacity: "1",
      visibility: "visible",
      transform: "scale(1)",
    });
  } else {
    $("#top").css({
      bottom: "0",
      opacity: "0",
      visibility: "hidden",
      transform: "scale(0.1)",
    });
  }
});
