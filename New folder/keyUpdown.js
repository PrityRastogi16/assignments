let box = document.getElementById("box");
let display = document.getElementById("display");


document.addEventListener("keydown", function (e) {
  display.style.color = "green";
  display.innerText = e.key + " is keyDown";
});


document.addEventListener("keyup", function (e) {
  display.style.color = "blue";
  display.innerText = e.key + " is keyUp";
});