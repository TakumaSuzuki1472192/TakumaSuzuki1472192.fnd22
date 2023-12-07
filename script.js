'use strict'

// スライドショーの作成
const slide = document.getElementById("slide");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const lists = document.querySelectorAll(".list");
const totalSlides = lists.length;
let count = 0;
//スライド関数
function nextClick() {
  slide.classList.remove(`slide${count % totalSlides + 1}`);
  count++;
  slide.classList.add(`slide${count % totalSlides + 1}`);
}
function prevClick() {
  slide.classList.remove(`slide${count % totalSlides + 1}`);
  count--;
  if (count < 0) count = totalSlides - 1;
  slide.classList.add(`slide${count % totalSlides + 1}`);
}
// ↓クリックイベントのリスナーを登録
next.addEventListener('click', () => {
  nextClick();
  updateListBackground();
});
prev.addEventListener('click', () => {
  prevClick();
  updateListBackground();
});
//インジケータ
const indicator = document.getElementById("indicator");

function updateListBackground() {
  for (let i = 0; i < lists.length; i++) {
    lists[i].style.backgroundColor = i === count % totalSlides ? "gray" : "lightgray";
  }
}

indicator.addEventListener("click", (event) => {
  if (event.target.classList.contains("list")) {
    const index = Array.from(lists).indexOf(event.target);
    slide.classList.remove(`slide${count % totalSlides + 1}`);
    count = index;
    slide.classList.add(`slide${count % totalSlides + 1}`);
    updateListBackground();
  }
});

