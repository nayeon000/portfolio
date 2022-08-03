// circle
const circle = document.querySelector('.circle');


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


// 스크롤시 한페이지식




// 스크롤시 페이드인 work부분
const saTriggerMargin = 300;
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