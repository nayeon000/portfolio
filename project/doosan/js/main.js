var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//mousehover
$(document).ready(function () {
  $(".wrapper li a").hover(function () {
    var bg = $(this).attr('data-bg');
    $(".slide3").css('background-image', 'url(' + bg + ')');
  });
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 2af4714a89f4c2a26c8df291137e10ea86b96c7b
});

//// menu
$('.menu_bar').on('click', () => {
  $('.menu_bar').toggleClass('active');
  $('.slide_menu').toggleClass('active');
});
<<<<<<< HEAD
=======
=======
});
>>>>>>> 7d954ee832c451bc5db7f3358b6fe8f3bb601df8
>>>>>>> 2af4714a89f4c2a26c8df291137e10ea86b96c7b
