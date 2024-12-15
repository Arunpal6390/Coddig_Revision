// let fullName = "Arun Pal ES6 ecma script";
// console.log(fullName);
/*
JavaScript is an programming language which is use to give the instruction.,
In javaScript Before declare the variable we need to write a keyword, which is listed below...
1.let
(i) In that condition ,Can't re-declare of the variable,
(ii) we can update value of the variable.
block scope{}


2.const
Neither re-declare nor update,
but value of the object can be update
block scope {}
const PI = 3.14

3.var
Can be re - declare and update.
Global scope 


data type
There are two types of data type 

1.primitive data type
Number,String,Boolean,Null,Undefine,BigInt(),symbol.

2.Non primitive data types

bobject : - which values stores key paires : - > 
syntax of declare object is 
const boject_name = {
  Key :values,
  .
  .
  .
}
*/
const student = {
  fullname: "Rahul",
  age: 20,
  cgpa: 9.0,
  isPass: true,
};

console.log(student["age"]);

const product = {
  title: "Pilot  pen",
  rating: 4,
  offer: 5,
  price: 190,
};
console.log(product);

const profile = {
  name: "abc",
  following: 220,
  followers: 88,
  isfollow: true,
  details: " I am an engineer",
  NumberofPost: 899,
};
console.log(profile);
console.log(typeof profile["name"]); //find type of name of the profile object.
