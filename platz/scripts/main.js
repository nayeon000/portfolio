// 프로젝트 가로스크롤 부분
const container = document.querySelector('#project');
const stickyBox = document.querySelector('.sticky_box');
const horizontal = document.querySelector('.project_wrapper');

const calcHeight = (item) => {
  const clientWidth = document.documentElement.clientWidth;
  const clientHeight = document.documentElement.clientHeight;

  return item.scrollWidth - clientWidth + clientHeight;
}

let conHt = container.style.height = `${calcHeight(horizontal)}px`;
console.log(conHt);

addEventListener('scroll', () => {
  console.log('ho', horizontal.offsetTop);
  console.log('st', stickyBox.offsetTop);
  horizontal.style.transform = `translateX(-${stickyBox.offsetTop}px)`;
})



//  타이핑
const content = "남다른 계획이 모이는 곳";
const text = document.querySelector(".text");
let i = 0;

function typing() {
  let txt = content[i++];
  text.innerHTML += txt;
  if (i > content.length) {
    text.textContent = "";
    i = 0;
  }
}

setInterval(typing, 300);

