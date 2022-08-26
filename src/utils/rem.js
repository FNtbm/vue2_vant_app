document.addEventListener("DOMContentLoaded", function () {
  setRem();
});

window.onresize = function () {
  setRem();
};

function setRem() {
  let html = document.documentElement;
  let Width = document.body.clientWidth || document.documentElement.clientWidth;
  html.style.fontSize = (Width / 1920) * 80 + "px";
}
