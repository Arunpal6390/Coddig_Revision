// console.log("Good Nigth!");
// console.log("X+Y =", 88 + 66);
// let x = 99;

// console.log(x--);
// console.log(x);
//Assingment operator.
// let a = 5;
// let b = 9;
// a **= 4;
// console.log(a);
// let a = 8;
// let b = "8";
// console.log(a === b);
//logical operator
//conditional
// let age = 5;
// if (age > 18) {
//   console.log("vote");
// }
// if (age < 18) {
//   console.log("no");
// }

//Question based on conditional statement...
//check number is even or odd
// let num1 = 9;
// if (num1 % 2 == 0) {
//   console.log("Given number is even!", +num1);
// } else {
//   console.log("Given number is Odd", +num1);
// }

//when we need to check multiple condition that time used ..
/*
if(expression)
{
  code.
}
if else(expression)
{
  code
}
else{
  code
}
*/

/*
trnary operator
where three operant is there..
*/
// let age = 17;
// let result  age= >= 18 ? "Voter" : "Children";
// console.log(result);

// let score = 78;
// if (score >= 90 && score <= 100) {
//   alert("your Grade is A");
// } else if (score >= 80 && score <= 89) {
//   console.log("B");
// } else if (score >= 70 && score <= 79) {
//   console.log("C");
// } else if (score >= 60 && score <= 69) {
//   console.log("D");
// } else if (score <= 60) {
//   console.log("F");
// } else {
//   console.log("Enter valied score between 1 to hundred");
// }
//Question 1 Get user  to input number using prompt check number is multiple of 5 or not.

// let name = prompt("Enter name:");
// console.log(name);
// let number = prompt("Enter any number");
// if (number % 5 === 0) {
//   console.log(number, "is multiple of five");
// } else {
//   console.log(number, "is not multiple of five");
// }
//---------------------------------------------
//Question 2.
/*
Write a code which can give grades to student according to their score.
80-100,A
70 - 89,B
60 - 69 ,C
50 - 59,D
0 - 49,F
*/
//Postfix and prefix in javaScript
/*
postfix -> num++;
-> change value from the next line.
............................
Eample-> 
let num = 4;
num++;
console.log(num);
output: 5
............................
let num = 8;
console.log(num++); 
output: 8
=================================
num--;
let num = 5;
num--;
console.log(num);
output: 4
-------------------------------
let num = 8;
console.log(num--);
output: 8
===============================

===============================      
prefix -> ++num;
->change value on the itself line.
Eample->
let number = 88;
++number;
console.log(number);
output: 89
-------------------
let number = 77;
console.log(++number);
output: 78

--------------------
let number = 55;
--number;
console.log(number);
output: 54
------------------------
let number = 55;
console.log(--number);
output: 54
*/
// let num = 22;

// console.log(--num);

/*
ther are different types of loop
for loop,while loop,do while loop
syntax:
for(initial condition;end value;increament or decreament)
{
  code//
}
,
while(condition)
{
  code
}
,
do
{
  code
}
while(condition)
*/
// for (let count = 1; count <= 500; count++) {
//   console.log("Apna college!");
// }
//calculate sum of 1 to 10
// sum = 0;

// for (let i = 1; i <= 5; i++) {
//   sum += i;
// }
// return console.log(sum);
// console.log("Sum is:", sum);
// let num = 88;
// while (num >= 50) {
//   console.log(num);
//   num++;
// }

// console.log("hiii");
// let count = 0;

// let str = "Arunpal";
// for (let i of str) {
//   //used for only for array and string
//   console.log("Char", i);
//   count++;
// }
// console.log("String Size is:", count);
//for in loop which used for oject key

// let student = {
//   name: "Rahul kumar",
//   age: 25,
//   cgpa: 9.8,
//   isPass: true,
// };
// console.log(student);
// for (let key in student) {
//   console.log("key:", key, "Value:", student[key]);
// }
// question 1.print 1 to 100 number;
let number;
let count = 0;
for (let number = 1; number <= 100; number++) {
  if (number % 2 !== 0) {
    //odd number also can print even number
    console.log("Ans:", number);
    count++;
  }
}
console.log(count); //
//String,
// let str = "abcdf";
// console.log(str.length);
// console.log(str[2]);
// Template litrals special types  of string
//)(``)back tric which is used to create string
// let student = {
//   name: "Mohan",
//   age: 25,
//   cgpa: 9.4,
// };
//String interpolation
// let output = `Name is ${student.name}\nAge is ${student.age}\n\tCGPA is ${student.cgpa}`;
// console.log(output);

//trim method used to remove white space from start to end.
//replace method
// let name = "IRUN PAL";
// let res = name.replace("I", "A");
// console.log(res);
