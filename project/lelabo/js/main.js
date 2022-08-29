
// swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1.5,
  spaceBetween: 10,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },

});

// nav 변경
const nav = document.querySelector('nav');
const main = document.querySelector('main');

addEventListener('scroll', () => {
  if (scrollY > main.offsetTop) {
    nav.classList.add('style');
  } else if (scrollY <= main.offsetTop) {
    nav.classList.remove('style');
  }
})

// menu
$('.menu_bar').on('click', () => {
  $('.menu_bar').toggleClass('active');
  $('.slide_menu').toggleClass('active');
});

// 배너 슬라이드
const swiper1 = new Swiper('#my_style', {
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  autoplay: {
    delay: 5000,
  },
});