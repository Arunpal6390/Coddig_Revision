// let marks = [88, 66, 5, 522, 44, 11, 6];
// console.log("sizec:", marks.length);
// let newm = marks.push(88);
// console.log(newm);
// console.log("sizec:", marks.length);
// console.log(marks);

//print actual item without 10% offer.
// let item = [250, 800, 600, 400, 7700];
// for (let i = 0; i < item.length; i++) {
//   let offer = item[i] / 10;
//   item[i] = item[i] - offer;
// }
// console.log(item);

//Array methods
//push- add(end)
//pop-delete(end)
//toString-array to string convert
//unshift() -add(start)
//shift()-delete(start)
//slice(start_index,end_index(non-involed)) do not change original array
//splice()
// let marks = [88, 55, 555, 99, 55, 77];
// marks.splice(1, 2, 78, 89);
//---------------------------------------------------------
//*********************************************************************** */
//map function-> we can create another array by using first array where some thing relation is there.that is called map function.
//
// let arr = [4, 4, -5, -8];
// console.log(arr);
// let brr = [];
// for (const ele of arr) {
//   brr.push(Math.abs(ele * ele));
// }
// console.log(brr);

//another way

// function twice(element) {
//   return 2 * element;
// }

// let arr = [7, -8, 9, -5, 44, -55];
// console.log(arr);

// let brr = arr.map((element) => {
//   return element * element;
// }); //callback function
// console.log(brr);
/*
function add2(ele) {
  return ele + 2;
}
let arr = [4, 5, -2, 63, 2, -77, -88];
console.log(arr);
//mathod-1
arr = arr.map(add2);
console.log(arr);
//mathod-2
arr = arr.map(function (ele) {
  return ele * ele;
});
console.log(arr);

//mathod-3
arr = arr.map((ele) => {
  return ele / 10;
});

console.log(arr);

//mathod-4
let brr = arr.map((ele) => ele * 2);
console.log(arr);
console.log(brr);
*/
//filter function
// filter out even number
// function evenNumber(ele) {
//   if (ele % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let arr = [77, 9, 5, 4, 1, 7];
// console.log(arr);

// arr = arr.filter(evenNumber);
// console.log(arr);

// arr = arr.filter(function (ele) {
//   if (ele % 2 !== 0) {
//     return true;
//   } else {
//     return false;
//   }
// });

// arr = arr.filter((ele) => {
//   if (ele % 2 !== 0) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(arr);
// reduce function
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// let x = arr.reduce(function (a, b) {
//   return a + b;
// });

// console.log(x);

//sort function
// let arr = [7, 8, 9, 5];
// arr = arr.sort();// it will never sort negative values or large value you need to pass callback in sort function.
// console.log(arr);

// let arr = [33, 44, 6, 7, 2, 9];
// arr = arr.sort(function (a, b) {
//   return a - b;//accending order,b-a decending order
// });
// console.log(arr);
let arr = [33, -44, 6, -7, -2, 9];
// arr = arr.sort();
console.log(arr);

arr = arr.sort((a, b) => a - b);
console.log(arr);
