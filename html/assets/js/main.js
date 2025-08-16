(function ($) {
  "use strict";


  //offcanvas
  $(".akheader-bars").on('click',function(){
  $(".akoffcanvas-box").addClass("akoffcanvas-active");
  $(".offcanvas-overlay").addClass("offcanvas-overlay-active");
  
});

  $(".akoffcanvas-button-close,offcanvas-overlay").on('click',function(){
  $(".akoffcanvas-box").removeClass("akoffcanvas-active");
  
});

  // data bg img
  $("[data-bg-img]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-bg-img") + ")");
  });

  // data border color
  $("[data-border-color]").each(function () {
    $(this).css("border-color", $(this).attr("data-border-color"));
  });

  // data bg color
  $("[data-bg-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-bg-color"));
  });

  // data  color
  $("[data-color]").each(function () {
    $(this).css("color", $(this).attr("data-color"));
  });

  $(".popup-image").magnificPopup({
    type: "image",
    // other options
  });

  $(".popup-video").magnificPopup({
    type: "iframe",
    // other options
  });


  // hero slider

   var swiper = new Swiper(".myheroslider", {
      navigation: {
        nextEl: ".akheroslider-next",
        prevEl: ".akheroslider-prev",
      },
    });
  //causes slider
  var swiper = new Swiper(".akcauses-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
      nextEl: ".akcauses-next",
      prevEl: ".akcauses-prev",
    },
    breakpoints: {
    340: {
        slidesPerView: 1,
        
      },
      640: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });
  //gallery slider
  var swiper = new Swiper(".akgallery-slider", {
    slidesPerView: 5,
    spaceBetween: 12,
    freeMode: true,
    
    breakpoints: {
    340: {
        slidesPerView: 1,
        
      },
      640: {
        slidesPerView: 2,
        
      },
      768: {
        slidesPerView: 3,
        
      },
      1024: {
        slidesPerView: 5,
        
      },
    },
  });
  //brand slider
  var swiper = new Swiper(".akbrand-slider", {
    slidesPerView: 6,
    spaceBetween: 12,
    freeMode: true,
    
    breakpoints: {
    340: {
        slidesPerView: 1,
        
      },
      640: {
        slidesPerView: 2,
        
      },
      768: {
        slidesPerView: 3,
        
      },
      1024: {
        slidesPerView: 6,
        
      },
    },
  });
  //latest News slider
  var swiper = new Swiper(".aklatestNews-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
      nextEl: ".akcauses-next",
      prevEl: ".akcauses-prev",
    },
    breakpoints: {
    340: {
        slidesPerView: 1,
        
      },
      640: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });
  //help slider
  var swiper = new Swiper(".akhelp-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
      nextEl: ".akcauses-next",
      prevEl: ".akcauses-prev",
    },
    breakpoints: {
    340: {
        slidesPerView: 1,
        
      },
      640: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });

  //text slider
  var swiper = new Swiper(".textslider", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    speed: 4000, // smooth slow speed
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    allowTouchMove: false,
    grabCursor: false,
  });


var swiper = new Swiper(".textslider2", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  speed: 4000, // slower = smoother
  autoplay: {
    delay: 0, // no delay at all
    disableOnInteraction: false,
  },
  loopedSlides: 10, // increase if many slides
  allowTouchMove: false,
  grabCursor: false,
});


})(jQuery);
