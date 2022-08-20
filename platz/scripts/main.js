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

// 스크롤시 페이드인 
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


// place 슬라이드부분
$('.slide_item').eq(0).addClass('active');

let current = 0;
let total = $('.slide_item').length;


let auto = () => {
  let next = current;
  current = current + 1;
  slide(next, current);
}
$('#next').on('click', auto);

$('#prev').on('click', () => {
  let prev = current;
  current = current - 1;
  slide(prev, current)
})

function slide(item, idx) {
  let num = current;

  if (idx > total - 1) {
    num = 0;
    current = 0;
  } else if (idx < 0) {
    num = total - 1;
    current = total - 1;
  }

  $('.slide_item').removeClass('active');
  $('.slide_item').eq(num).addClass('active')
}

// nav hover 부분
let elements = document.querySelectorAll("header nav ul li a");

elements.forEach(element => {
  let innerText = element.innerText;
  element.innerText = "";

  let textContainer = document.createElement("div");
  textContainer.classList.add("block");

  for (let letter of innerText) {
    let span = document.createElement("span");
    span.innerText = letter.trim() === "" ? "\xa0" : letter;
    span.classList.add("letter");
    textContainer.appendChild(span);
  }

  element.appendChild(textContainer);
  element.appendChild(textContainer.cloneNode(true));
});



