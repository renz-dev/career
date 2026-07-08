const burger = document.getElementById("burger");
const menu = document.getElementById("mobileMenu");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const reviewsSlider = document.querySelector(".reviews__slider");
new Swiper(reviewsSlider, {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".reviews-next",
    prevEl: ".reviews-prev",
  },
  breakpoints: {
    683: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    911: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

const slides = document.querySelectorAll('.reviews__item');


