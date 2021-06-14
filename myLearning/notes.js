//Use a switch/case statement instead of a series of if/else
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

var a = false;
a ||= "roshan";

var b= true;
b &&= "roshan";

//nullish coalescing operator
var c= undefined //null/undefined 
c ??="roshan";


//Double free error?
//This is one of the memory safety bugs in Rust, which we will try to understand through a dialogue in this blog post.
// let s1 = String::from("Hello");
// let s2 = s1;

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

delete Object.prototype;  --- Error, in normal mode it wint make any effect

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