document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".dropdown-submenu .nested-list").forEach((el) => {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation(); // Stop Bootstrap's default closing behavior

      document
        .querySelectorAll(".dropdown-submenu .dropdown-menu.show")
        .forEach((submenu) => {
          if (submenu !== this.nextElementSibling) {
            submenu.classList.remove("show");
          }
        });

      // Toggle the submenu
      let submenu = this.nextElementSibling;
      if (submenu && submenu.classList.contains("dropdown-menu")) {
        submenu.classList.toggle("show");

        // Position submenu to the right
        let rect = this.getBoundingClientRect();
        submenu.style.position = "absolute";
        submenu.style.left = rect.width + "px"; // Moves submenu to the right
        submenu.style.top = "50px"; // Adjust this value as needed
      }
    });
  });

  // Close submenus when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown-submenu")) {
      document
        .querySelectorAll(".dropdown-submenu .dropdown-menu.show")
        .forEach((submenu) => {
          submenu.classList.remove("show");
        });
    }
  });
});

// Subscription Owl Carousel
// $(document).ready(function(){
//   $('.owl-carousel').owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: true,
//     responsive: {
//       0: {
//         items: 1
//       },
//       600: {
//         items: 3
//       },
//       1000: {
//         items: 5
//       }
//     }
//   })
// })

// $(".owl-carousel").owlCarousel({
//   loop:true,
//   autoplay: true,
//   autoplayTimeout: 5000,
//   dots:true,
//   nav:true,
//   navText:[''],
//   responsive:{
//     0:{
//       items:1,
//       nav:true
//     },
//     768:{
//       items:2,
//       nav:true
//     },
//     1024:{
//       items:3,
//       nav:true
//     }
//   }
// })

// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: true,
//     dots: true,
//     autoplay: true,
//     autoplayTimeout: 3000,
//     responsive:{
//       0:{items:1},
//       600:{items:2},
//       1000:{items:3}
//     }
//   })
// });


// HERO SWIPER
let swiperHero = new Swiper(".swiperI", {
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3.1,
      spaceBetween: 30,
    },
  },
});

// Subscription Swiper
let swiperSub = new Swiper(".swiperII", {
  slidesPerView: 5,
  spaceBetween: 20,
  autoplay:{
    delay:2500,
    disableOnInteraction:false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let swiperSeg = new Swiper(".swiperIII", {
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay:{
    delay:2500,
    disableOnInteraction:false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});