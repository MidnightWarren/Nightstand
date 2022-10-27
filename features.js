const slider = document.getElementById("slider");
const root = document.documentElement;

slider.addEventListener("input", (e) => {
  root.style.setProperty("--radius", e.target.value + "%");
});


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
