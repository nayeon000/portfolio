// circle
const circle = document.querySelector('.circle');
const navLinks = document.querySelectorAll('a');

let mouseX = 0;
let mouseY = 0;

let circleX = 0;
let circleY = 0;

document.body.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
})

function ani() {
  requestAnimationFrame(ani);

  circleX += (mouseX - circleX) * 0.2;
  circleY += (mouseY - circleY) * 0.2;

  circle.style.transform = `translate(${circleX}px,${circleY}px)`;
}

ani();

// 마우스 hover 됬을때 li a 
navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    circle.classList.add("link-grow");
    circle.style.zIndex = "-1";
  });
  link.addEventListener("mouseleave", () => {
    circle.classList.remove("link-grow");
    circle.style.zIndex = "10000";
  });
});


// 스크롤시 페이드인 work부분
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


// smile
var docStyle = document.documentElement.style;

document.addEventListener('mousemove', function (e) {
  docStyle.setProperty('--mouse-x', e.clientX);
  docStyle.setProperty('--mouse-y', e.clientY);
});

//video
$(window).fadeThis();

$(".video video").on("mouseover", function () {
  $(".video video").animate(23000, "linear");
});

$(".video video").on("mouseleave", function () {
  $(".video video")
    .stop()
    .animate({ marginTop: 0 }, 1000, "linear");
});
