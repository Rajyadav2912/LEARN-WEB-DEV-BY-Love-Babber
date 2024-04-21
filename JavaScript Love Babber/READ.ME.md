## Fundamental of JavaScript

## Array and Object

## async js Coding

## forEach, amp , filter, find , indexOf

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

## ForEach function

arr.forEach((val) => console.log("Value Hello:", val));

## Map Function

arr.map((val) => console.log("value", "15 : ", val));

## Filter Function

arr.filter((val) => {
if (val > 3 && val < 8) {
return console.log("greater than 3: ", val);
} else {
return console.log("Not greater than 3:", val);
}
});

## // Find Function

arr.find((val) => {
if (val > 5 || val > 6) {
return console.log("value", val, ":", val);
}
});

# console.log(arr.indexOf(1));

## Object

let person = {
name: "Raj Yadav",
age: 21,
phone: 8349020828,
};

## How to access 1. Dot notation , 2. Brackets notation

## 1. Dot notation

console.log("Name : ", person.name);
console.log("Age : ", person.age);
console.log("Phone No : ", person.phone);

## 2. Brackets notation

console.log("Name : ", person["name"]);
console.log("Age : ", person["age"]);
console.log("Phone No : ", person["phone"]);

## Arrays:- 1. Adding , 2. Modifying , 3. Deleting

let person = {
name: "Raj Yadav",
age: 21,
phone: 8349020828,
};

## 1. Adding

person.isSleeping = false;

console.log(person);

# { name: 'Raj Yadav', age: 21, phone: 8349020828, isSleeping: false }

## 2. Modifying

person.age = 22;

console.log(person);

## { name: 'Raj Yadav', age: 22, phone: 8349020828, isSleeping: false }

## 3. Deleting

delete person.phone;

console.log(person);

# { name: 'Raj Yadav', age: 22, isSleeping: false }

## Function in Object

let person = {
name: "Raj Yadav",
age: 21,
phone: 8349020828,
message: function () {
console.log(`Hello ${person.name}`);
},
};

person.message();

# Hello Raj Yadav

console.log(person);

## Arrays : Arrays is collection of items of same data type or different data type in contiguous memory location

# Array is special type of object that store collection of data

# Example :

let fruits = ["apple", "orange", "banana"];

# Accessing

console.log(fruits[1]); // orange

# Adding or Inserting items 1. push , 2. unshift

## 1. push : add item on the end of array

fruits.push("mango");
console.log(fruits); // ["apple", "orange", "banana", "mango"]

## 2. unshift : add item on the start of array

fruits.unshift("grapes");
console.log(fruits); // ["grapes", "apple", "orange", "banana", "mango"]

## Delete or Deleting items 1. pop , 2. shift

# 1. pop : remove last item from array

fruits.pop();
console.log(fruits); // ["grapes", "apple", "orange", "banana"]

## 2. shift : remove first item from array

fruits.shift();
console.log(fruits); // ["apple", "orange", "banana"]

## Note : We have more methods for add or modify items in array

## 1. slice(), 2. splice(), 3. include(), 4. indexOf(), 5. spread()

## 6. concat(), 7. join(), 8. split(), 9. sort() , reverse(), 10. filter()

## 11. map(), 12. reduce(), 13. find(), 14. forEach() Loop, 15. for-in Loop , 16. for-in Loop

# Example :

let fruits = ["apple", "orange", "banana"];

## 1. slice(): this method is return selected items in array and return value in new array

## slice(start Indx , end Indx)

console.log(fruits.slice(0, 1)); // [ 'apple' ]
console.log(fruits); // [ 'apple', 'orange', 'banana' ]

## 2. splice(): this method is add or remove items from array at specific index

## splice(start Indx , deleteCount , items1....)

fruits.splice(1, 0, "mango");
console.log(fruits);

## 3. include():

## 4. indexOf() : this method is return a index value of items in array

console.log("Index Orange: ", fruits.indexOf("orange"));

# Index Orange: 1

## 5. spread(): this method is used to add two array or another item add in array

let arr1 = ["apple", "orange", "banana"];
let arr2 = ["bluebarry", "graps", "mango"];

let newArr = [...arr1, "papaya", ...arr2];
console.log(newArr);

# [ 'apple', 'orange', 'banana', 'papaya', 'bluebarry', 'graps', 'mango' ]

## .6 concat() : this method is used to add two array

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6, 7];

let newArr = arr1.concat(arr2);

console.log(newArr);

# [ 1, 2, 3, 4, 5, 6, 7 ]

## 7. join() : this method is used to join anoher element with each item in array

let arr1 = ["1", "2", "3"];

let newArr = arr1.join(" and ");

console.log(newArr);

# 1 and 2 and 3

## 8. split() : this method is used to split each item in array

let arr1 = "Hey there my name Raj Yadav";

let newArr = arr1.split(" ");

console.log(newArr);

# [ 'Hey', 'there','my', 'name', 'Raj', 'Yadav' ]

let joinArr = newArr.join("_");

console.log(joinArr);

# Hey_there_my_name_Raj_Yadav

## 9. sort() , reverse() : this method is used to sort random no. in array in form of alphabetical order or numerical order

let arr1 = [1, 4, 2, 5, 6, 3, 7, 9, 8];

arr1.sort();
console.log(arr1);

# [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr1.reverse();
console.log(arr1);

# [9, 8, 7, 6, 5, 4, 3, 2, 1];

let arr2 = ["A", "C", "E", "H", "F", "D", "B", "G"];

arr2.sort();
console.log(arr2);

# ["A", "B", "C", "D", "E", "F", "G", "H"];

// arr2.reverse();
// console.log(arr2);

# ["H", "G", "F", "E", "D", "C", "B", "A"];

## 10. filter() : this method is used to filter items in array when statify the condition is true

let age = [14, 16, 13, 15, 18, 29];
let Adult = age.filter((val) => {
return val >= 18;
})
console.log(Adult);

# [ 18, 29 ]

## 11. map() : this method is used to map or iterate each and every items in array

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let Square = arr1.map((val) => {
return val * val;
});

console.log(Square);

# [1, 4, 9, 16, 25, 36, 49, 64, 81];

## 12. reduce() : this method is used to reduce or add each and every items in array to single value

## reduce((accmulator, currentValue), InitialValue)

let arr1 = [1, 2, 3, 4, 5];

let newValue = arr1.reduce((acc, curr) => {
return acc + curr;
}, 0);

console.log(newValue);

# 15
