// Note: Always script tag in the bottom of html code
// {
//   /* <script src="index.js"></script>; */
// }

// Windows : It is a global object thats create or represent a browser window
// and also control Browser window. Window object is top level entity

/* Type of window :-

// 1. DOM - Document Object Model
// 2. BOM - Browser Object Model
// 3. JS Core

*/

// 1. DOM - Document Object Model That's convert HTML code into
//          Js Object using document object model

// 2. BOM - Browser Object Model ye page ke content ko chod kr baki sari
//          things se communicate krta hn

// DOM :- Document Object Model It is a Herrarchi of HTML tags
//        its change HTML Tags using JS

//  Character -> Tags -> Token -> Nodes -> DOM
//                     Tokenizer Handle krta hn

// Fetch Element :-
// 1. document.getElementById()
// 2. document.getElementsByclassName()
// 3. document.getElementsByTagName()

// Keep in Mind
// 1. Both method use in document object model
// 2. Both return Multiple items
// 3. This list of return is not an array. It is a array like object of HTML Collection

// Access Elements : HTML Element ko access krna using ($0)

// How to fetch any Tags , Id , Class Name :-
// querrySelector('#header'); -> ID Name
// querrySelector('.header'); -> Class Name
// querrySelector('header'); -> Tag Name

// How to fetch Multiple object to return in console using
//  querrySelectorAll(); -> saree tags id, wgera select kr lega

// Web page : Updated Existing Content
// 1 .innerHTML;
// 2 .outerHTML;
// 3 .textContent;
// 4 .innerText;

// 1 .innerHTML :- The Element property innerHTML gets or sets the
//               HTML or XML markup contained within the element.
//  Is property ko use krke hum kisi bhi inside HTML tags ko dekh skte hn

// 2 .outerHTML;

// 3 .textContent :- there is a two type 1. get textContent , 2. set textContent

// innerHTML vs textContent
// innerHTML :- isme HTML Tags render hote hn
// textContent :- isme ye tags ko text me convert kr deta hn

// 4 .innerText :- innerText vs textContent

//  innerText :- isme jis tag ki display: hidden toh usko chod kr baki sb print kr dega
//  textContent :- isme display: hidden hone pr bhi pura content text me convert krke print kr dega

/*  Adding a New Element or Content

//  Using :- .createElement()

// let content = document.querySelector(".paraclass");
// content;

// <p class="paraclass">this is para graph</p>;

// let newPara = document.createElement("p");

// newPara;
// <p></p>;

// content.appendChild(newPara);

// content;
// <p class="paraclass">
//   this is para graph
//   <p></p>
// </p>; 


*/

/* .createTextNode() :- .textContent

//  Lendy way :- 

let newPara = document.createElement("p")
let textPara = document.createTextNode();
 newPara.appendchild(textPara);
 content.appendchild(newPara);

//  Esay Way :- 

let myPara = document.createElement("p");
myPara.textContent = 'I am good';
content.appendChild(myPara);


*/

/* createTextNode :- In Any Location using .insertAdjacentHTML()

.insertAdjacentHTML() :- It has to be called & argument , 

Location / Postion :- * Beforebegin tags * Afterbegin  tags * BeforeEnd tags * AfterEnd tags.

HTML Text/Content to be inserted 



*/

/*  Remove Element :- using .removeChild()

.removeChild() -> opposite of appendChild()
-> Parent element is must know
-> the Child element to remove is must know

parent.removeChild(childElement);

Ex -> child.Parent.remove(child);


*/

/* CSS :- change Css Property using Js


Types of CSS Property : 
1) External CSS *
2) Internal CSS * * 
3) Inline CSS * * * 

CSS change using Js
1. .style
2. .CSSText
3. .setAttribute
4. .className
5. .classList

1. .style : isko use krke single changes kr skte hn 
ex. :  .style.color = 'red';
 .style.bagroundcolor = 'white';

2. .CSSText : isko use krke multiple changes kr skte hn 
ex: .style.CSSText = 'color:green ; baground-color : yellow;' ;

3. .setAttribute : addstyling 
ex: .setAttribute('style', 'color: white;');

ex. .setAttribute('Id', "heading_Name"); // add-> Id or class

4. .className : this keyword return element which is use in class 
                 and return in form of array

<p class='first second third'>this is a para</p>

['first second third']

5. .classList : return an Array of class 

add()
remove()
toggle() -> present hn toh (delete) nhi toh (add()) 
contains() return krta hn 
-> exits -> true 
-> No-exits -> false

*/

/* Browser Event

1. What is Event 
2. Responds to event
3. Data Store in event 
4. Stop an event
5. Life cyle of event


1. What is Event  : Events are thing that happens in the system you are 
programing, which the system tells you about So your code can react to them

Events Life is Invisible -> Using this method
1. moniterEvents() -> Show in Events which is throw is our website
2. unmoniterEvents() -> turn off Events

# Event Listner :- It is a interface's -> or BluePrint , layout design

Event Target <- Node <- Element

Event Target :- Interface implement by obj. that can receive events & may have listener for them

Node :- Node's inherite From Event Target

Element :- <p>====</p>

There are three methods :-  Interface is a top-level entity
1. addEventListner()
2. removeEventListner()
3. dispatchEventListner()

Event Target :- add -> document -> para -> video -> article

[psuedo -code]

<event target> .addEventListener(<event-to-listener-for>, <function-to-run>); when events Happends

Event target -> components -> document -> para -> video -> article -> div

Event type -> click -> doubleclick -> scroll etc

function -> define what to do when event is happend

// Event Listener: Ex. how to apply event  

// document.addEventListener("onclick", function () {
//   console.log("I haave click on event");
// });

*/

/* Remove Event Listener :- there are two type

1. lose equality -> == when value is check that true (inter-caste-marriage)
2. strict equality -> === when value or type is check then after is true (caste-marriage)

when successfully run in removeEventListener
-> same type
-> same target 
-> same function

these condition is allow then after work


*/

/* Phases of an Event:- By default addEventListener Bubbling phase hota hn
1. capturing phase
2. At target phase 
3. bubbling phase

ex. 
<html> <- capturing phase
    <body> <- capturing phase
          <div class="wrapper"> <- capturing phase
              <p>this is a para</p> <- At target phase 
          </div> <- bubbling phase
    </body> <- bubbling phase
</html> <- bubbling phase

Example:-  Syntax

<Event.target>.addEventListener(type, Listener , true);

type :- click , double click , scroll etc.

Listener :- what should happen after event target trigger

true:- capturing phase trigger 

*/

/* The Event Object :- when an event occurs, .addEventListener
function event object return lot of information about event

*/
// Example:-
// const content = document.addEventListener("#wrapper");
// content.addEventListener("click", function (event) {
//   console.log(event);
// });

/* The Default Action :-  
Anchor tag -> Link open
PreventDefault -> click hoga but kuch action perform nhi hoga

let links = document.querrySelectorAll('a');
let thirdlink = link[2];
thirdlink.addEventListener('click',function(event){
  event.preventDefault();
  console.log('maza aya ki nhi');
});

*/

// let mydiv = document.createElement("div");
// for (let i = 1; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "This is para" + i;
//   newElement.addEventListener("click", function (event) {
//     console.log("I have clicked on para");
//   });

//   mydiv.appendChild(newElement);
// }
// document.body.appendChild(mydiv);

// Optimize
// let mydiv = document.createElement("div");

// function parastatus(event) {
//   console.log("I have clicked on para");
// }

// for (let i = 1; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "This is para" + i;
//   newElement.addEventListener("click", parastatus);

//   mydiv.appendChild(newElement);
// }
// document.body.appendChild(mydiv);

// whole div pe listener laga hn
// let mydiv = document.createElement("div");

// function parastatus(event) {
//   console.log("I have clicked on para");
// }
// mydiv.addEventListener("click", parastatus);

// for (let i = 1; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "This is para" + i;
//   mydiv.appendChild(newElement);
// }
// document.body.appendChild(mydiv);

// Any particular Para ko target Krna
// let mydiv = document.createElement("div");

// function parastatus(event) {
//   console.log(event.target.textContent);
// }
// mydiv.addEventListener("click", parastatus);

// for (let i = 1; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "This is para" + i;
//   mydiv.appendChild(newElement);
// }
// document.body.appendChild(mydiv);

// when particular event pe click krne se uski content print krna

// let element = document.querySelector("#wrapper");
// element.addEventListener("click", function (event) {
//   // console.log("span pr click hua hn" + event.target.textContent);
//   if (event.target.nodeName === "SPAN") {
//     console.log("span pr click hua hn" + event.target.textContent);
//   }
// });

// nodeName = check their uppercase
// p : PARA
// span : SPAN
// div : DIV
