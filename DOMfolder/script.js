let x = document.querySelector(".block0");
let y = document.querySelector(".block1");
// let colorlist = ["red", "green", "blue", "black", "red", "pink", "yellow"];

// setTimeout(function () {
//   x.style.backgroundColor = "blue";
// }, 1000);

// setTimeout(function () {
//   y.style.backgroundColor = "yellow";
// }, 3000);

//eventListner
document.querySelector("h1").innerHTML = "Good Evening";

x.addEventListener("click", function () {
  y.style.backgroundColor = "red";
});

y.addEventListener("mousemove", function () {
  //click
  //mousemove
  //mouseenter
  //mouseleave
  y.style.backgroundColor = "yellow";
});

y.addEventListener("mouseleave", function () {
  y.style.backgroundColor = "green";
});
