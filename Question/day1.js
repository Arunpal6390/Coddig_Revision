// var filter = function (arr, fn) {
//   let output = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i], i)) {
//       output.push(arr[i]);
//     }
//   }
//   return output;
// };

////

// /**
//  * @return {Function}
//  */
// var createHelloWorld = function () {
//   return (...args) => "Hello World";
// };

/**
* const f = createHelloWorld();
* f(); // "Hello World"
var createHelloWorld = function() {
  return (...args) => "Hello World"
};
*/

// var sortBy = function (arr, fn) {
//   return arr.sort((a, b) => fn(a) - fn(b));
// };
