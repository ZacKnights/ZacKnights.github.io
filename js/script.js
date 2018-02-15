window.onload = function() {
  currentYear();
};

function currentYear(){
  const date = new Date();
  const autoDate = document.querySelector('#autoDate');
  autoDate.textContent = date.getFullYear();
};

window.onscroll = function() {
  headerScroll();
}

var header = document.getElementById("header");

var stick = header.offsetTop;

function headerScroll(){
  if (window.pageYOffset >= stick) {
    header.classList.add("stick");
  } else {
    header.classList.remove("stick");
  }
}
