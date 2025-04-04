const menu = document.querySelector(".menu");

function shift() {
  if (menu.classList.contains("opened")) {
    menu.classList.remove("opened");
  } else {
    menu.classList.add("opened");
  }
}

let menuList = document.querySelectorAll('.item');
const pageList = ["../index.html", "../Issues/issues.html", "../Solutions/solutions.html", "../About/about.html"];

menuList.forEach((el, i) => { 
  el.addEventListener('click', () => {
    animateColumn(el, i);
    setTimeout(() => {
      loadPage(i);
    }, 500);
  });
});

function loadPage(i) {
  window.open(pageList[i], "_self");
}

function animateColumn(el, index) {
  console.log(menuList);
  for (let i = 0; i < 4; i++) {
    if (i != index) {
      menuList[i].style.display = "none"; 
    }
  }
  el.style.width = "100vw";
  el.style.color = "transparent";
}

setTimeout(() => {
    document.getElementById('loadIn').style.display = "none";
}, 3500);


document.querySelector('.logo').addEventListener('click', () => {
  window.open("../index.html", "_self");
});