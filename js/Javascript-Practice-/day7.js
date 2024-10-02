function change_style() {
  let selected = document.querySelector(".contact");
  selected.style.color = "yellow";
  selected.style.backgroundcolor = "black";
  selected.style.border = "2px solid yellow";
}

function previous_style() {
  let selected = document.querySelector(".contact");
  selected.style.color = "black";
  selected.style.backgroundcolor = "yellow";
  selected.style.border = "1px solid yellow";
}

function opennav() {
  let select = document.querySelector(".openlist");
  select.style.left = "0px";
  select.style.transition = "left 1s";
}

function closenav() {
  let select = document.querySelector(".openlist");
  select.style.left = "-400px";
}
