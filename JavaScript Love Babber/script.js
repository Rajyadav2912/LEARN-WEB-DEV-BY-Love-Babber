
// let a = 10;
// let b = 2;
// console.log(a + b); // 7
// console.log(a - b); // 3
// console.log(a * b); // 10
// console.log(a / b); // 2.5
// console.log(a % b); // 1

// Conditions if , else if , else , Switch case

// if (a > b) {
//   console.log("Greater");
// } else {
//   console.log("Smaller");
// }

// if (a < b) {
//   console.log("Greater");
// } else {
//   console.log("Smaller");
// }
// if (a >= b) {
//   console.log("Greater");
// } else {
//   console.log("Smaller");
// }
// if (a <= b) {
//   console.log("Greater");
// } else {
//   console.log("Smaller");
// }

// switch (a) {
//   case 1:
//     console.log("One");
//     break;
//   case 2:
//     console.log("Two");
//     break;
//   case 3:
//     console.log("Three");
//     break;
//   case 4:
//     console.log("Four");
//     break;
//   case 5:
//     console.log("Five");
//     break;
//   default:
//     console.log("Infinite No.");
// }

// let A = 5;
// let B = 5;
// let C = 5;
// let D = 5;
// console.log(++A); // Per-Increament ++5 = 6
// console.log(B++); // Post-Increament 5++ = 5
// console.log(--C); // Per-Decreament  --5 = 4
// console.log(D--); // Post-Decreament 5-- = 5

// Object Create

// let rectangle = {
//   length: 1,
//   breadth: 2,

//   draw: function () {
//     console.log("drawing rectangle");
//   },
// };

// // factory function

// function createRectangle(len, bre) {
//   return (rectangle = {
//     length: len,
//     breadth: bre,
//     draw() {
//       console.log("Drawing rectangle");
//     },
//   });
// }

// let rectangleObj1 = createRectangle(5, 4);
// let rectangleObj2 = createRectangle(6, 5);
// let rectangleObj3 = createRectangle(3, 2);

// factory func  = CamelCase  = createRectangle
// Constructor function = PascalNotation = RectangleCreate
//  -> Properties/ Methods -> Initialize / Define

// function Rectangle(len, bre) {
//   this.length = len;
//   this.breadth = bre;
//   this.draw = function () {
//     console.log("Drawing Rectangle");
//   };
// }

// Rectangle.

// obj. creation using constructor function

// let rectangleObject = new Rectangle(4, 5);
// rectangleObject.color = "yellow";
// console.log(rectangleObject);

// delete rectangleObject.color;
// console.log(rectangleObject);

// let Rectangle1 = new Function(
//   "length",
//   "breadth",
//   `this.length = length;
//   this.breadth = breadth;
//   this.draw = function () {
//     console.log("Drawing Rectangle");`
// );

// object creation using Rectangle1

// let rect = new Rectangle1(2, 3);
// console.log(rect);

// Primitive Type (VS) Reference Type

// Primitive Type -> are copied by their Values

// let a = 10;
// let b = a; // b = 10

// a++; // 10++ = 11
// console.log(a); // 11
// console.log(b); // 10

// Example : 1
// let a = 10; // this are passed by copied value becz this are primitive type
// function Inc(a) {
//   // (10)
//   a++; // 10++ = 11
// }
// Inc(a); // 11
// console.log(a); // 10

// Reference Type -> are copied by their Reference / address

// let a = { Value: 10 }; // a = 10
// let b = a; // b = 10  both a & b they are point same address
// a.Value++; // 10++ = 11
// console.log(a.Value); // 11
// console.log(b.Value); // 11

// Example : 2

// let a = { value: 10 }; // value : 10 is object
// function Inc(a) {
//   // (10)
//   a.value++; // 10++ : 11
// }
// Inc(a); // 11
// console.log(a.value); // 11

// let rectangle = {
//   length: 2,
//   breadth: 4,
// };

// For-in-Loop
// for (let key in rectangle) {
//   // Keys are reflected through key variable
//   // Value are reflected through rectangle
//   console.log(key, rectangle[key]);
// }

// for-of-loop
// for (let key of Object.entries(rectangle)) {
//   // .keys se hum key print kr skte hn
//   // .entries se hum value print kr skte hn
//   console.log(key);
// }

// Object Cloning : Iteration, Assign , Spread

// Iteration
// let src = {
//   a: 10,
//   b: 20,
//   c: 30,
// };

// let dest = {};
// for (let key in src) {
//   dest[key] = src[key];
// }

// console.log(dest);

// Using Assign Obj. Cloning
// let dest = Object.assign({}, src);
// console.log(dest);

// Using Spread
// let Src = {
//   a: 5,
//   b: 6,
//   c: 7,
// };

// let dest = { ...Src };
// console.log(dest);

// Src.a++;
// console.log(dest);

// In-Built Object's && Arrays

// Math -: as Object Work krta hn
// Math.max
// Math.min
// Math.random()
// Math.abs
// Math.PI
// Math.round

// String :- is their are two type's
// 1st:- Primitive type
// let LastName = "Yadav";
// LastName;
// 2nd:- Object type
// let FirstName = new String("Raj");

// let message = "This is my first Message";
// let words = message.split(" ");
// console.log(words);

// Template Literal :- use only Backtick (` `);
// let Message = `Hey Name ${FirstName} ${LastName}
// Thanks for giving this oppurtunities

// Regards,
// Raj Yadav
// `;
// console.log(Message);

// How to create Date Object

// let date = new Date(); // 1st type
// console.log(date);

// let date2 = new Date("Dec 29 2002 02:00");// 2nd type
// console.log(date2);

// let date3 = new Date(2002, 11, 29, 2); // 3rd type
// console.log(date3);

// let number = [1, 4, 5, 7];
// console.log(number);

// Ending-> push: last me ele. ko add krna
//          pop: last se ele. ko remove krna
// Begining-> unshift: starting me ele. ko add krna
//             shift: starting se ele. ko remove krna

// Middle-> splice: middle me ele. ko add krna

// Searching element in arrays
// Primitive type pe search kiya hn
// let number = [1, 4, 5, 7];

// console.log(number);
// console.log(number.indexOf(5));
// // We want to check if a No. Exist in an array or Not
// if (number.indexOf(5) != -1) {
//   console.log("present");
// } else {
//   console.log("Absent");
// }
// console.log(number.includes(8)); // if(No. is Exist : true) or Not: false

// Reference type variable search in array
// let courses = [
//   { no: 1, naam: "Raj" },
//   { no: 2, naam: "Love" },
// ];

// console.log(courses);

// console.log(courses.includes({ no: 1, naam: "Raj" }));

// Using CallBack Function
// .find():- its a method to find an object in function

// let course = courses.find(function (course) { // (course): Predicate function
//   return course.naam == "Raj";
// });

// console.log(course);

// Arrow function
// let course = courses.find((course) => course.naam == "Raj");
// console.log(course);

// Emptying an Array

// let number = [1, 2, 3, 4, 5]; //Ex:1 ->
// number = [];
// console.log(number); // Empty

// let number = [1, 2, 3, 4, 5]; //Ex:2 ->
// let number2 = number; // this side copied is address not the value

// number = [];
// console.log(number); // Empty
// console.log(number2);

// let number = [1, 2, 3, 4, 5]; //Ex:3 -> best Example
// let number2 = number;

// number.length = 0;
// console.log(number); // Empty
// console.log(number2); // Empty

// let number = [1, 2, 3, 4, 5]; //Ex:4 -> best Example
// number.splice(0, number.length);
// console.log(number); // Empty

// Combining & Slicing array's

// Primitive type pe hua hn
// let first = [1, 2, 3];
// let second = [4, 5, 6];

// let combined = first.concat(second);
// console.log(combined); // [1,2,3,4,5,6]

// let sliced = combined.slice(2, 4);
// console.log(sliced);

// Spread Operator => [...]

// let first = [1, 2, 3];
// let second = [4, 5, 6];

// let combined = [...first, ...second];
// console.log(combined); // [1, 2, 3, 4, 5, 6]

// combined = [...first, "a", false, ...second, "b", true];
// console.log(combined); // [1, 2, 3, 'a', false, 4, 5, 6, 'b', true]

// // create copy
// let another = [...combined];
// console.log(another); // [1, 2, 3, 'a', false, 4, 5, 6, 'b', true]

// let arr = [10, 20, 30, 40, 50];
// // for-of : loop
// for (let value of arr) {
//   // ley likho ya value dono same hihota hn
//   console.log(value); // 10, 20, 30, 40, 50
// }

// ForEach : loop
// arr.forEach(function (number) {
//   console.log(number); // 10, 20, 30, 40, 50;
// });

// Joined method
// let number = [10, 20, 30, 40, 50];
// const joined = number.join(",");
// console.log(joined);

// Split method is method of to convert in form of array
// let message = "This is my first message";
// let parts = message.split(" ");
// console.log(parts); //  ['This', 'is', 'my', 'first', 'message']

// let joined = parts.join("_");
// console.log(joined); // This_is_my_first_message

// Sorting Array's

// let number = [20, 30, 50, 40, 10];
// number.sort();
// console.log(number); // [10, 20, 30, 40, 50];
// console.log(number.reverse()); // [50, 40, 30, 20, 10];

// let number = [5, 10, 4, 40];
// number.sort();
// console.log(number);

// .filter =

// let number = [1, 2, -1, -4];

// // call back function
// let filtered = number.filter(function (value) {
//   return value >= 0;
// });

// // Arrow function
// // let filtered = number.filter((value) => value >= 0);

// console.log(filtered); // [1, 2]

// Mapping = .map()

// let number = [7, 8, 9, 10];
// console.log(number); // [7, 8, 9, 10]
// call back function
// let items = number.map(function (value) {
//   return "student_no" + value;
// });
// console.log(items); // ['student_no7', 'student_no8', 'student_no9', 'student_no10']

// Arrow function
// let items = number.map((value) => "student_no" + value);
// console.log(items); // ['student_no7', 'student_no8', 'student_no9', 'student_no10']

// Mapping with Objects
// let number = [1, 2, -1, -6];
// let filtered = number.filter((value) => value >= 0);
// let items = filtered.map(function (num) {
//   return { value: num };
// });

// console.log(items);

// chaining

// function : A Function is a block of code that fullfill a specific task
// syntax
// function printCounting() {
//   console.log("counting");
// }

// Hosting => Hosting is a process of moving function declaration to the top of file and this is an automatically by JS engine.

// function run() {
//   console.log("running");
// }

// run();

// function Assignment or Named function Assignment

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
//   // hum last me perameter nhi de skte
//   console.log(args);
// }
// sum(1, 2, 3, 4, 5); // [ 1, 2, 3, 4, 5 ]

// Default Parameter:-

// function interest(p, r = 2, y) {
//   return (p * r * y) / 100;
// }

// console.log(interest(1000, 10, undefined)); // 500 // NaN

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

// document.addEventListener("click", function () {
//   console.log("I have click on the document");
// });

// function Print() {
//   console.log("Hii");
// }

// document.addEventListener("click", Print);

// document.removeEventListener("click", Print);

// The Event object : - Pointer Event return krega
// const content = document.addEventListener("#wrapper");

// content.addEventListener("click", function (event) {
//   console.log(event);
// });

// The Default Action

// let Links = document.querySelectorAll("a");
// let thirdlinks = Links[2];

// thirdlinks.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log("maza a gya");
// });

// let myDiv = document.createElement("div");

// for (let i = 1; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "This is para" + i;
//   newElement.addEventListener("click", function (event) {
//     console.log("I have clicked on para");
//   });
//   myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

// let myDiv = document.createElement("div");
// function ParaStatus(event) {
//   console.log("Para" + event.target.textContent);
// }
// myDiv.addEventListener("click", ParaStatus);

// for (let i = 1; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "This is para" + i;
//   myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

// Async await

// async function utility() {
//   let delhiMausam = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Delhi me bhot garmi hai");
//     }, 2000);
//   });

//   let hydraMausam = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Hydrabaad me musam cool hai");
//     }, 6000);
//   });

//   let dM = await delhiMausam;
//   let hM = await hydraMausam;

//   return [dM, hM];
// }

// Fetch Api:

// let content = fetch("https://jsonplaceholder.typicode.com/posts/1");
//  return Promise

// Get function using Fetch API

// async function utility() {
//   let content = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   let output = await content.json();
//   console.log(output);
// }

// utility(); // json formate ka data print krega

// Post Call using fetch API

// async function helper() {
//   let option = {
//     method: "POST",
//     body: JSON.stringify({
//       // obj return krta hn
//       title: "RAJ",
//       body: "Fit insan hai ",
//       userId: 2002,
//       weight: 52,
//       style: "handsome hai",
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   };

//   let content = await fetch(
//     "https://jsonplaceholder.typicode.com/posts",
//     option
//   );
//   let response = await content.json(); // content convert to json formate
//   return response;
// }

// async function utility() {
//   let ans = helper();
//   console.log(ans);
// }
// utility();
