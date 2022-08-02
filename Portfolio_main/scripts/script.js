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

  circleX += (mouseX - circleX) * 0.1;
  circleY += (mouseY - circleY) * 0.1;

  circle.style.transform = `translate(${circleX}px,${circleY}px)`;
}

ani();// 함수호출