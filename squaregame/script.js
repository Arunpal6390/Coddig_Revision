let s_one = document.getElementById("s1");

//first block
s_one.addEventListener("mouseenter", function () {
  s_one.style.backgroundColor = "white";
  let num = Math.floor(Math.random() * 500);
  s_one.innerHTML = `<h1>${num}</h1>`;
});

s_one.addEventListener("mouseleave", function () {
  s_one.innerHTML = "<h1>1</h1>";
});
//second block
let s_two = document.getElementById("s2");
let clr = "green";
s_two.addEventListener("mouseenter", function () {
  if (clr == "green") {
    s_two.style.backgroundColor = "green";
    clr = "red";
  } else if (clr == "red") {
    s_two.style.backgroundColor = "red";
    clr = "pink";
  } else {
    s_two.style.backgroundColor = "pink";
    clr = "green";
  }
});
s_two.addEventListener("mouseleave", function () {
  s_two.style.backgroundColor = "white";
});
//third block
let s_three = document.getElementById("s3");
s_three.addEventListener("mouseenter", function () {
  let a = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256); //max value 255
  let c = Math.floor(Math.random() * 256);
  s_three.style.backgroundColor = `rgb(${a},${b},${c})`;
});

s_three.addEventListener("mouseleave", function () {
  s_three.style.backgroundColor = "white";
});

//four
let s_four = document.getElementById("s4");

s_four.addEventListener("click", function () {
  let a = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256); //max value 255
  let c = Math.floor(Math.random() * 256);
  s_three.style.backgroundColor = `rgb(${a},${b},${c})`;
  s_two.style.backgroundColor = `rgb(${c},${b},${a})`;
  s_one.style.backgroundColor = `rgb(${b},${a},${c})`;
  s_four.style.backgroundColor = "white";
});

s_four.addEventListener("mouseleave", function () {
  s_one.style.backgroundColor = "white";
  s_four.style.backgroundColor = "white";
  s_two.style.backgroundColor = "white";
  s_three.style.backgroundColor = "white";
});
