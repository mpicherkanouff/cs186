"use strict";
var name = 'Alice';

// Functions are closures in JS
function hello() { 
 // I am a closure, I have access to var name     
 console.log("Hello " + name);
}
console.log("Calling hello()");
hello();

//
console.log("");
function myhello() { 
  var name = "Macarena";
  console.log("Hello " + name);
}
console.log("Calling myhello()");
myhello();
console.log("What is global name?"); // did not change the original name variable 
console.log(name);

//
console.log("");
function anotherhello() { 
  var another = "Trudy";
  console.log("Hello " + another);
}
console.log("Calling anotherhello()");
anotherhello();
console.log("Is another global?");  // No 
// console.log(another);   // Error

//
console.log("");
function lasthello() { 
  let name = "Macarena";  // name is now diff varible from global 
  console.log("Hello " + name);
}
console.log("Calling myhello()");
myhello();
console.log("What is global name?"); // did not change the original name variable 
console.log(name);

