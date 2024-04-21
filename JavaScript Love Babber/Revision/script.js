//  Fundamental of JavaScript
// Array and Object
// async js Coding
// forEach, amp , filter, find , indexOf

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// ForEach function
// arr.forEach((val) => console.log("Value Hello:", val));

// Map Function
// arr.map((val) => console.log("value", "15 : ", val));

// Filter Function
// arr.filter((val) => {
//   if (val > 3 && val < 8) {
//     return console.log("greater than 3: ", val);
//   } else {
//     return console.log("Not greater than 3:", val);
//   }
// });

// // Find Function
// arr.find((val) => {
//   if (val > 5 || val > 6) {
//     return console.log("value", val, ":", val);
//   }
// });

// console.log(arr.indexOf(1));

// Object
// let person = {
//   name: "Raj Yadav",
//   age: 21,
//   phone: 8349020828,
// };

// How to access 1. Dot notation , 2. Brackets notation
// 1. Dot notation
// console.log("Name : ", person.name);
// console.log("Age : ", person.age);
// console.log("Phone No : ", person.phone);

// 2. Brackets notation

// console.log("Name : ", person["name"]);
// console.log("Age : ", person["age"]);
// console.log("Phone No : ", person["phone"]);

// Arrays:- 1. Adding , 2. Modifying , 3. Deleting

let person = {
  name: "Raj Yadav",
  age: 21,
  phone: 8349020828,
};

// 1. Adding
person.isSleeping = false;

console.log(person);
// { name: 'Raj Yadav', age: 21, phone: 8349020828, isSleeping: false }

// 2. Modifying
person.age = 22;

console.log(person);
// { name: 'Raj Yadav', age: 22, phone: 8349020828, isSleeping: false }

// 3. Deleting
delete person.phone;

console.log(person);
// { name: 'Raj Yadav', age: 22, isSleeping: false }
