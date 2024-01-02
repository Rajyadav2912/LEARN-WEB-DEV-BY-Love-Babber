// Hosting => Hosting is a process of moving function declaration to the top of file and this is an automatically by JS engine.

// function run() {
//   console.log("running");
// }

// run();

// function Assignment or Named function or Anonymouse Assignment

// let stand = function walk() {
//   console.log("walking");
// };

// stand();
// walk();

// Dynamic Language
// let x = 1;
// x = "a";
// console.log(x);

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum());

// Using Arguments
// function sum(a, b) {
//   console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3 }
//   return a + b;
// }

// function sum(a, b) {
//   let total = 0;
//   for (let value of arguments) total = total + value;
//   return total; // 6
// }

// let ans = sum(1, 2, 3);

// console.log(ans);

// Rest Opreator :- ( ... )

// function sum(num, value, ...args) {
//   // hum last me perameter nhi de skte and
//   // args uska ek array create kr dega
//   console.log(args);
//   console.log(num, value);
// }
// sum(1, 2, 3, 4, 5); // [ 1, 2, 3, 4, 5 ]

// Default Parameter:-

// function interest(p, r = 2, y) {
//   return (p * r * y) / 100;
// }

// Getter:- Access kr skte hn proper. ko
// Setter:- change or mutate kr skte hn pro. ko.

// let person = {
//   fName: "Love",
//   lName: "Babber",
//   get fullName() {
//     return `${person.fName} ${person.lName}`;
//   },
//   set fullName(value) {
//     let parts = value.split(" ");
//     this.fName = parts[0];
//     this.lName = parts[1];
//   },
// };

// person.fullName = "Raj Yadav";
// console.log(person.fullName); // Rahul Kumar

// Error Handling :- Try and Catch Method

// let person = {
//   fName: "Raj",
//   lName: "Yadav",
//   get fullName() {
//     return `${person.fName} ${person.lName}`;
//   },
//   set fullName(value) {
//     if (typeof value !== String) {
//       throw new Error("You have sent not a String");
//     }
//     let parts = value.split(" ");
//     this.fName = parts[0];
//     this.lName = parts[1];
//   },
// };

// try {
//   person.fullName = "Raj Yadav";
// } catch (e) {
//   alert(e);
// }

// console.log(person.fullName);

// Scopes:- Scopes of Variable

// {
//   let a = 5;
// }
// console.log(a);

// {
//   var a = 5;
// }
// console.log(a); // 5

// function a() {
//   const ab = 5;
// }
// const ab = 5;
//
// function b() {
//   const ab = 5;
// }

// console.log(ab);

// Reducing an array :-

// let arr = [1, 2, 3, 4, 5];

// let total = 0;

// for (let value of arr) {
//   total = total + value;
// }

// console.log(total);

// let totalSum = arr.reduce(
//   (accumulator, currentvalue) => accumulator + currentvalue
// );
// console.log(totalSum);
