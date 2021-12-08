let grayCircle = document.getElementById("grayButton");
let whiteCircle = document.getElementById("whiteButton");
let blueCircle = document.getElementById("blueButton");
let yellowCircle = document.getElementById("yellowButton");

let body = document.querySelector("body");

let circles = document.querySelector("ul");
console.log(circles);

function changeBackgroundColor(event) {
  console.log(event.target);
}

circles.addEventListener("click", changeBackgroundColor);


yellowCircle.addEventListener("click", turnYellow);
blueCircle.addEventListener("click", turnBlue);
whiteCircle.addEventListener("click", turnWhite);
grayCircle.addEventListener("click", turnGray);


function turnGray() {
  console.log("gray button");
  body.style.color = "white";
  body.style.backgroundColor = "gray";

}

function turnWhite() {
  console.log("white button");
  body.style.color = "black";
  body.style.backgroundColor = "white";

}

function turnBlue() {
  console.log("blue button");
  body.style.backgroundColor = "blue";

}

function turnYellow() {
  console.log("yellow button");

  body.style.backgroundColor = "yellow";


}
