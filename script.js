var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

// body.style.background =
//   "linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0))";
// css.textContent = body.style.background + ";";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
  button.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

function randomize() {
  var c1 = getRandomColor();
  var c2 = getRandomColor();
  body.style.background = "linear-gradient(to right, " + c1 + ", " + c2 + ")";
  button.style.background = "linear-gradient(to right, " + c1 + ", " + c2 + ")";
  color1.value = c1;
  color2.value = c2;
  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomize);
