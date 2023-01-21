'use strict'

console.log("Моя оценка 75/75\nТребования к вёрстке:\n\n1.Вёрстка соответствует макету. Ширина экрана 768px +24\n2.Вёрстка соответствует макету. Ширина экрана 380px +24\n3.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\nНа ширине экрана 380рх и меньше реализовано адаптивное меню +22")


const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

const menu = document.querySelector("#menu").cloneNode(1);

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();

  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}


const links = Array.from(menu.children);


links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});


function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}