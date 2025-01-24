// arr = [1, 2, 34, 4];
// console.log(arr);
//arr.push(8);add element at the end of the array
// arr.pop(); delete element from end of array
//arr.unshift(3); add element at the first element of the array
//arr.shift(); delete element from first element of the array
// console.log(arr);
//
// arr = [7, 89, 6, 5, 8, 5, 4];
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//   arr[i] -= 1;
// }
// console.log(arr);

// let s = "abcd";
// console.log(s.toUpperCase());
// for (let i = 0; i < s.length; i++) {
//   console.log(s[i].toUpperCase());
//   console.log(s[i].toLowerCase());
// }

// let a = "abcdefgh";
// console.log(a.slice(5));

// for (let i = 0; i <= 10; i++) {
//   setTimeout(function () {
//     //callback function
//     console.log(11 - i);
//   }, i * 1000);
// }

function addition() {
  let a = 99;
  let b = 77;
  console.log(`Addition:- ${a + b}`);
}
function multiplication() {
  let num1 = 77;
  let num2 = 4;
  console.log(`Multiplication:-  ${num1 * num2}`);
}

addition();
multiplication();

setTimeout(addition, 6 * 1000);
setTimeout(multiplication, 3 * 1000);
