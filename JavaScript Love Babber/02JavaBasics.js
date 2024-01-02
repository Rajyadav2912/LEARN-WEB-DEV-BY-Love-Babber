// console.log("hello ji kese ho sare");

// Object creation

// let rectangle = {
//   length: 5,
//   breadth: 3,

//   draw() {
//     console.log("Drawing in paper");
//   },
// };

// rectangle.length;

// Factory Function
// Camel case pe work krta hn -> numberOfStudent

// function createRectangle() {
//   return (rectangle = {
//     length: 5,
//     breadth: 3,

//     draw() {
//       console.log("Drawing in paper");
//     },
//   });
// }

// let rectangleObj1 = createRectangle();

// // // factory function with input value
// function createRectangle(len, bre) {
//   return (rectangle = {
//     length: len,
//     breadth: bre,

//     draw() {
//       console.log("Drawing in paper");
//     },
//   });
// }

// Object creation using Constructor function
// let rectangleObj2 = createRectangle(3, 4);

// Camel case pe work krta hn -> numberOfStudent
// Pascal Notation => NumberOfStudent

// Constructor Function -> property or methods -> Initialize Define krte hn
// this mean work on current variable or value

// function Rectangle() {
//   this.length = 1;
//   this.breadth = 3;
//   this.draw = function () {
//     console.log("drawing is js");
//   };
// }

// let rectangleObj1 = new Rectangle();

// // Constructor function with input value
// function Rectangle(len, bre) {
//   this.length = len;
//   this.breadth = bre;
//   this.draw = function () {
//     console.log("drawing is js");
//   };
// }

// // Object creation using Constructor function
// let rectangleObj1 = new Rectangle(3, 4);

// Constructor Property
// rectangleObj1  Const. -> Rectangle Const. -> Function undefined

// let Rectangle1 = new Function(
//   "length",
//   "breadth",
//   `this.length = len;
//   this.breadth = bre;
//   this.draw = function () {
//   console.log("drawing is js");`
// );

// // Object creation using Constructor function
// let rect = new Rectangle1();
// console.log(rect);

// Dynamic Nature of Object

// Add ing property
// rectangleObj1.color = "yellow";
// console.log(rectangleObj1);

// // Delete ing property
// delete rectangleObj1.color;
// console.log(rectangleObj1);

// Types in Js
// 1. Primitive Data Type -> are copied by their Value
// 2. Reference Data Type -> are copied by their address / Reference

// 1. Primitive Data Type // Primitive me variable ki copy pass hoti hn

// let a = 10;
// let b = a;
// a++;
// console.log(a); // 11
// console.log(b); // 10

// 2. Reference Data Type  // Reference me humra variable ka address pass hota hai
// let a = { value: 10 };
// let b = a;
// a.value++;
// console.log(a.value); // 11
// console.log(b.value); // 11

// Iterating Through Objects
//  1. For - in -> apply in object ke upper chelga
//  2. For - of -> apply in iterable

// 1. For - in
// let rectangle = {
//   length: 2,
//   breadth: 4,
// };

// key are reflected through key variable
// value are reflected through rectangle

// for (let key in rectangle) {
//   console.log(key, rectangle[key]); // access using bracket notation
// }

// 2. For - of
// for (let key of Object.entries(rectangle)) {
//   console.log(key);
// }

// Using if-else concept

// if ("length" in rectangle) {
//   console.log("Present");
// } else {
//   console.log("Absent");
// }

// Object Cloning
// 1# Iteration
// 2# Assign
// 3# Spread

// 1# Iteration

// let src = {
//   a: 10,
//   b: 20,
//   c: 30,
// };

// let dest = {};

// for (let key in src) {
//   dest[key] = src[key];
// }
// console.log(dest); // { a: 10, b: 20, c: 30 }

// src.a++;
// console.log(dest); // { a: 10, b: 20, c: 30 }
// console.log(src); //  { a: 11, b: 20, c: 30 }

// 2# Assign

// let src = {
//   a: 10,
//   b: 20,
//   c: 30,
// };

// let dest = Object.assign({}, src); // { a: 10, b: 20, c: 30 }
// console.log(dest);

// src.a++;
// console.log(dest); // { a: 10, b: 20, c: 30 }
// console.log(src); //  { a: 11, b: 20, c: 30 }

// 3# Spread

// let src = {
//   a: 10,
//   b: 20,
// };

// let dest = { ...src };
// console.log(dest); // { a: 10, b: 20 }

// src.a++;
// console.log(dest);
// console.log(src);

