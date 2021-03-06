var menu = document.querySelector(".main-nav__list");
var button = document.querySelector(".main-nav__toggle");

var popup = document.querySelector(".catalog-popup");
var orderbutton = document.querySelector(".product-week__button");
var cartbutton = document.querySelectorAll(".catalog__item-cart");

button.classList.remove("main-nav__toggle-off");
menu.classList.add("main-nav__closed");

button.onclick = function () {
  menu.classList.toggle("main-nav__closed");
  button.classList.toggle("main-nav__toggle-close");
  button.classList.toggle("main-nav__toggle-open");
};

for(var i = 0; i < cartbutton.length; i++){
  cartbutton[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("catalog-popup__closed");
  });}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    (popup.classList.add("catalog-popup__closed"));
  }
});

orderbutton.onclick =  function () {
  popup.classList.remove("catalog-popup__closed");
};
