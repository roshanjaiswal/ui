//  Use a switch/case statement instead of a series of if/else
function getCategory(age) {  
    var category = "";  
    switch (true) {  
        case isNaN(age):  
            category = "not an age";  
            break;  
        case (age >= 50):  
            category = "Old";  
            break;  
        case (age <= 20):  
            category = "Baby";  
            break;  
        default:  
            category = "Young";  
            break;  
    };  
    return category;  
}  
getCategory(5);  // will return "Baby"


// Set timeouts to XMLHttpRequests.
// You could abort the connection if an XHR takes a long time (for example, 
//     due to a network issue), by using setTimeout() with the XHR call.
var xhr = new XMLHttpRequest (); 
xhr.onreadystatechange = function () {  
    if (this.readyState == 4) {  
        clearTimeout(timeout);  
        // do something with response data 
    }  
}  
var timeout = setTimeout( function () {  
    xhr.abort(); // call error callback  
}, 60*1000 /* timeout after a minute */ ); 
xhr.open('GET', url, true);  
xhr.send();


// Short circuit conditionals 
if (hungry) {
    goToFridge();
}
hungry && goToFridge()

//  ----------------------------------

var a = false;
a ||= "roshan";

var b= true;
b &&= "roshan";

//nullish coalescing operator
var c= undefined //null/undefined 
c ??="roshan";

//  --------------------------------------

// == andd === difference 
// == -> Does type Coercion


//  Double free error?
//  This is one of the memory safety bugs in Rust, which we will try to understand through a dialogue in this blog post.
//  let s1 = String::from("Hello");
//  let s2 = s1;

// Use logical OR for conditions.
function doSomething(arg1){ 
    arg1 = arg1 || 32; // if it's not already set, arg1 will have 32 as a default value
}

//Comma operator.
// The comma operator (,) evaluates each of its operands (from left to right) and returns the value of the last operand.
let x = 1;
x = (x++, x);
console.log(x); // expected output: 2
x = (2, 3);
console.log(x); // expected output: 3

/* -----------------------------------------------------------------------------------------------
"use strict" directive   - https://www.youtube.com/watch?v=uqUYNqZx0qY
- ES5 Feature

 *******  Converting mistakes into errors. **************
"use strict";    ---- first line of the .js file
function test(){
    "use strict"/
    y = 20;  --- error: creating a global variable accidentlly, so use "var", "let" or "const"
}

var x = 10;
delete x;  --- deleting a varible is not allowed

var obj = {};
Object.defineProperty(obj,"y",{value:10,writable: false});
obj.y = 30;  --- error: cannot assign value to non-writable , non existing, get only variables

var obj = {get x(){return 10}};
obj.x = 30;  -- Error

delete Object.prototype;  --- Error in strict mode, in normal mode it wont make any effect

function test(a, a, c) {  ---when "use strict" in top of the file or inside the function, fuction parameter should be unique
    "use strict";
    return a + b + c;
}
********************* - With an Eval changes *****************************
var x = 17;
with (obj) {
    x; -- Is this var x or obj.x?
}


eval("var x;")

************************  - Securing JavaScript ********************************
-------------------------------------------------------------------------------------------------*/

//   ~~~~  Truthy And Falsy  ~~~~

/* Falsy
    A falsy value is something which evaluates to FALSE, for instance when checking a variable. 
  There are only six falsey values in JavaScript: 
  undefined, null, NaN, 0, "" (empty string), and false of course
*/

if ([] == false) // <-- truthy, will run code in if-block
if ([]) // <-- truthy, will also run code in if-block
if ([] == true) // <-- falsy, will NOT run code in if-block
if (![]) {} // <-- falsy, will also NOT run code in if-block

const match = { teamA: 0, teamB: 1 }
if (match.teamA){
  // The following won't run due to the falsy evaluation
  console.log('Team A: ' + match.teamA);
}

if (typeof match.teamA === 'number'){
  console.log('Team A: ' + match.teamA);
}

// ----------------------------------------------------------------------------------------------------
// js labels -- The label statement allows us to name loops and blocks in JavaScript. 
//              We can then use these labels to refer back to the code later. For example, the below code with labels avoids printing the numbers when they are same,

var i, j;

loop1:
for (i = 0; i < 3; i++) {
   loop2:
   for (j = 0; j < 3; j++) {
      if (i === j) {
         continue loop1;
      }
      console.log('i = ' + i + ', j = ' + j);
   }
}

// Output is:
//   "i = 1, j = 0"
//   "i = 2, j = 0"
//   "i = 2, j = 1"

//----------------------------------------------------------------------------------------------------------------------
/*
What are regular expression patterns
-----------------------------------
    Regular Expressions provide a group of patterns in order to match characters. Basically they are categorized into 3 types,

    1. Brackets: These are used to find a range of characters. For example, below are some use cases,
        [abc]: Used to find any of the characters between the brackets(a,b,c)
        [0-9]: Used to find any of the digits between the brackets
        (a|b): Used to find any of the alternatives separated with |
    2. Metacharacters: These are characters with a special meaning For example, below are some use cases,
        \d: Used to find a digit
        \s: Used to find a whitespace character
        \b: Used to find a match at the beginning or ending of a word
    3. Quantifiers: These are useful to define quantities For example, below are some use cases,
        n+: Used to find matches for any string that contains at least one n
        n*: Used to find matches for any string that contains zero or more occurrences of n
        n?: Used to find matches for any string that contains zero or one occurrences of n
*/