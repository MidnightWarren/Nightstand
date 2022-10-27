// Zoom slider functionality
const slider = document.getElementById("slider");
const root = document.documentElement;

slider.addEventListener("input", (e) => {
  root.style.setProperty("--radius", e.target.value + "%");
});

// Layout Toggle Functionality
var checkbox = document.querySelector("input[name=tlayout]");
const pg = document.querySelector(':root');
const box = document.getElementById("layouticon");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    pg.style.setProperty('--book', "flex");
    pg.style.setProperty('--size', "50%");
    box.innerHTML = box.innerHTML.replace('📚','📖');
  } else {
    pg.style.setProperty('--book', "block");
    pg.style.setProperty('--size', "100%");
    box.innerHTML = box.innerHTML.replace('📖','📚');
  }
});

//Background Color Selector
let swatcher;
const defaultColor = "#000000";
window.addEventListener("load", startup, false);

function startup() {
  swatcher = document.querySelector("#swatcher");
  swatcher.value = defaultColor;
  swatcher.addEventListener("input", updateFirst, false);
  swatcher.addEventListener("change", updateAll, false);
  swatcher.select();
}

function updateFirst(event) {
    document.body.style.background = event.target.value;
}

function updateAll(event) {
    document.body.style.background = event.target.value;
}
