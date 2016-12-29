// requires a file and runs the code inside 
require('./sayHello');

console.log("We are back from saying Hello");

console.log("Let's call a function on another file")
var hi = require('./sayHello');
hi.Hi("dear user");


user = hi.sayBye("Brian", "Spencer");
console.log("Bye " + user) 

