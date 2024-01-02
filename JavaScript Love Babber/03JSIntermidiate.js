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

// // Template Literal :- use only Backtick (` `);
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

// let course = courses.find(function (course) {
//   // (course): Predicate function
//   return course.naam == "Love";
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
// console.log(sliced); // [ 3, 4 ]

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

// Iterating  on Array using For-of , For-Each

// let arr = [10, 20, 30, 40, 50];
// // for-of : loop

// for (let value of arr) {
//   // ley likho ya value dono same hihota hn
//   console.log(value); // 10, 20, 30, 40, 50
// }

// Call Back function
// ForEach : loop
// arr.forEach(function (number) {
//   console.log(number); // 10, 20, 30, 40, 50;
// });

// Arrow Function
// arr.forEach((number) => console.log(number)); // 10, 20, 30, 40, 50;

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

// call back function
// let filtered = number.filter(function (value) {
//   return value >= 0;
// });

// Arrow function
// let filtered = number.filter((value) => value >= 0);

// console.log(filtered); // [1, 2]

// Mapping = .map()

// let number = [7, 8, 9, 10];
// console.log(number); // [7, 8, 9, 10]

// call back function

// let items = number.map(function (value) {
//   return "student_no : " + value;
// });
// console.log(items); // ['student_no7', 'student_no8', 'student_no9', 'student_no10']

// Arrow function
// let items = number.map((value) => "student_no : " + value);
// console.log(items); // ['student_no7', 'student_no8', 'student_no9', 'student_no10']

// Mapping with Objects
// let number = [1, 2, -1, -6];

// let filtered = number.filter((value) => value >= 0);

// let items = filtered.map(function (num) {
//   return { value: num };
// });

// console.log(items);

// chaining

// let items = number
//   .filter((value) => value >= 0)
//   .map((number) => {
//     value: number;
//   });

// console.log(items);
