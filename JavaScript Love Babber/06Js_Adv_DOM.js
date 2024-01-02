/* Performance : How to measure of Run Code
-> measure speed of code
-> how to write efficient & performing code
-> Event Loop : Imp

Time Count :- It is a standard way to measure how long your code time taken to run
-> .performance.now() :- using this Time stamp method 

ex:- 
time 1

========code=========

time 2

*/

// adding 100 para
// const t1 = performance.now();

// for (let i = 1; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "this is para" + i;
//   document.body.appendChild(newElement);
// }

// const t2 = performance.now();

// console.log("this time took : " + t2 - t1 + "ms");

// // Optmizing a bit
// const t1 = performance.now();
// let mydiv = document.createElement("div");

// for (let i = 1; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "this is para" + i;
//   mydiv.appendChild(newElement);
// }
// document.body.appendChild(mydiv);

// const t2 = performance.now();

// console.log("this time took : " + t2 - t1 + "ms");

//  1 Reflow or 1 Repaint is good practice

//  100 Reflow or 100 Repaint is worst practice

/* Reflow or Repaint :- It is process of calculating the dimension and position of page
element this computationally insentive task. Highly use in Time consuming task

Reflow :- Calculate the dimension, Position 
Repaint :- this is show on display by pxiel px

*/

/*  Best Practice using Fragment :- .createDocumentfragment()
Using this method 1 Reflow or 1 Repaint
*/

// let Fragment = document.createDocumentFragment();

// for (let i = 1; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "this is para" + i;
//   Fragment.appendChild(newElement);
// }

// document.body.appendChild(Fragment);
// // Using this method 1 Reflow or 1 Repaint

// Call Stack

// Single-Threading :- Js is a single thread language. Processing of one command At a time
// Top to bottom that is known as a synchronus language

/* ex: 
function addPara(){
}

function newParaMessage(){
}

*/

// Observation
/*
1. Run to complition nature of code / run code complete krna 
2. Js does not execute multiple lines/function at the same time

*/

// ex:
// function a() {
//   console.log("Hii");
// }

// function b() {
//   console.log("Hey");
// }

// a();
// b(); // In call stack one by one function is execute

/* Event Loop : whenever on click then function is executed

call stack -> Browser window -> Event Queue

console.log("Hii");
element.addEventListener("onclick", function () {
  console.log("1234");
});

console.log("Hello world");

# A Bit More :- 
1. Async code is depand on Js Event Loop
2. Handling by Browser

Async Code -> to  Stack Entry -> Handover to -> Browser window -> Event Queue -> handover to execute

*/

/* discovered by Philip robert

// Set time out function :- setTimeout(Function, time); It is a Async Code
// whenever you're trying to defer something until the stack it clear

// console.log("Hii");
// setTimeout(function () {
//   console.log("hey");
// }, 5000); // after 5 milisec then execute

// console.log("xyz");
*/

/* Feature of Async Code :- 
-> Clean & Concise
-> Better error handling
-> Easier Bubbling

Async Code use in setTimeOut() method
*/

// Syncronus code hn

// setTimeout(function () {
//   console.log("Third");
// }, 3000); // after 3 mili sec baad execute hoga

// function sync() {
//   console.log("first");
// }

// sync();
// console.log("second");

// API :- Application Programing Interfaces
/* when writing code for the web, there are a large number of web APIs avaiable. 
Below is a list of all the APIs and interfaces (obj. type) that you may be able to use 
while developing your web app or site.

Web APIs are typically used in Java script, althrough this does'nt always have to be the case.

Feature of Async Code :- 
-> Clean & Concise
-> Better error handling
-> Easier Dugging

* Get Call
* Push Call
* Post Call
* Delete Call

Ex: [APIs]

1. way to communicate with  Backend
2. vater in a Restaurant
3. To connect to one app to another app
4. from frontend to Backend
5. Connection b/w Frontend to Backend
6. Bridge b/w Frontend to Backend
7. Uses in Banking
8. Send a request to server.

# What is Interface?
-> Interface is way to communicate with the help of third person or thing.

[User] -> [Bank Manager] -> [Bank Locker]
[Human] -> [Broker] -> [[Owner]]

Software Component A -> APIs -> Software Component B

*/

/* Promise's :- Koi bhi thing ko parallaly execute krna Js mee 

[Promise's] :- Promises obj. represents the eventual completion (or failure) of an 
asynchronous opreation and its resulting value. 

# Promise one of these states:- 
* [Pending] :- Initial state, neither fullfilled nor rejected.
* [Fullfilled] :- Meaning that operation is successful.
* [Rejected] :- Meaning that the operation Failed.


Syntax :-  new Promise(function(resolve, reject)){ };
                                (Fullfilled , pending)

*/
// how create promise

// let meraPromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("I am inside Promise");
//   }, 5000);
//   resolve(2233);
//   //   reject(new Error("Bhaisahabe error aye hn"));/
// });

// console.log("Pehela Promise");

// Promise :- when promise run [fullfilled hogya toh { then() } ] [Reject hua toh { catch() } ]
//  * Fullfilled - value successfully execute hui hn [then()]
//  * Rejected kuch error aye hn [catch()]

// let meraPromise1 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("I am inside Promise");
//   }, 5000);
//   resolve(2233);
//   //   reject(new Error("Bhaisahabe error aye hn"));/
// });

// meraPromise1.then((value) => {
//   console.log(value);
// });

// meraPromise1.catch((error) => {
//   console.log("Received an Error");
// });

// meraPromise1.then(
//   (value) => {
//     console.log(value);
//   },
//   (error) => {
//     console.log("Received an Error");
//   }
// );

// console.log("Pehela Promise");

/* multiple Promise */

// let waadaa1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("setimeout1 started");
//   }, 2000);
//   resolve(true);
// });

// let output = waadaa1.then(() => {
//   let waadaa2 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("setimeout2 started");
//     }, 3000);
//     resolve("waada 2 resolved");
//   });
//   return waadaa2;
// });

// output.then((value) => console.log(value));

/* When you have a 50 promises to execute one by one 
-> using this keyword -> Asyncawait <- special syntaz used to work with promises

Asyncawait -> ruko wait kro ye func. execute ho jaye 

ex. : rellay race, 

// // Syntax
// async function abcd() {
//   console.log("Raj Yadav");
//   return 7;
// }
// console.log(abcd());

*/

// wheather app

// async function utility() {
//   let delhiMausam = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Delhi me bhoot garmi hai");
//     }, 2000);
//   });

//   let HydrMausam = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hydrabaad me bhoot cold hai");
//     }, 5000);
//   });

//   let DM = await delhiMausam;
//   let HYD = await HydrMausam;

//   return [DM, HYD];
// }

// utility();

/* Fetch APIs :- It is return a promises

-> JSON :- 
1. JSON is stand for Java script onject Notation.
2. JSON is a lightweight format for storing and transporting data.
3. JSON is often used when data is sent from server to a web page
4. JSON is "self-describing" and easy to understand

syntax:

{"Employee" ;[
    {
        "firstName" : "Raj" , 
        "LastName" : "Yadav"
    }
              ]
}

 */

// GET function :- and convert to Json() formate
// async function utility() {
//   let content = fetch("https: // jsonplaceholder.typicode.com/posts"); // return a Promise
//   let output = await content.json();
//   console.log(output);
// }

// utility();

// Post -> Call using Fetch APIs

// let option = {
//   method: "Post",
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
//   headers: {
//     "content-type": "application/json;charset=UTF-8",
//   },
// };

// async function utility() {
//   let content = await fetch(
//     "https: // jsonplaceholder.typicode.com/posts",
//     option
//   ); // return a Promise

//   let output = content.json();
//   console.log(output);
// }
