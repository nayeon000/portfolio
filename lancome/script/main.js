// 비디오
$("#video").YTPlayer();

// 배너 슬라이드
const swiper1 = new Swiper('#my_style', {
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    type: 'fraction',
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,//3->1
  autoplay: {
    delay: 4000,
  },
});

// 스크롤시 이벤트
const saTriggerMargin = 250;
const saElementList = document.querySelectorAll('.sa');

const saFunc = function () {
  for (const element of saElementList) {
    if (!element.classList.contains('show')) {
      if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
        element.classList.add('show');
      }
    }
  }
}

window.addEventListener('load', saFunc);
window.addEventListener('scroll', saFunc);


// nav 변경
const nav = document.querySelector('nav');
const main = document.querySelector('main');
const img = document.querySelector('nav img');
const menu = document.querySelector('#menu_bar img')

addEventListener('scroll', () => {
  console.log('scrollTop:', document.documentElement.scrollTop);
  console.log('pageYOffset:', pageYOffset);
  console.log('scrollY:', scrollY);


  if (scrollY > main.offsetTop) {
    nav.classList.add('style');
    img.src = 'images/logo.png';
    menu.src = 'images/menuwhite.png';
  } else if (scrollY <= main.offsetTop) {
    nav.classList.remove('style');
    img.src = 'images/logo1.png';
    menu.src = 'images/menu_FILL0_wght400_GRAD0_opsz48.svg';
  }
})

// menu
const toggleBtn = document.querySelector('#menu_bar');
const navbar = document.querySelector('nav #gnb');

toggleBtn.addEventListener('click', (e) => {
  e.preventDefault();
  navbar.classList.toggle('on')
})

