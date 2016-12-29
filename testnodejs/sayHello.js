
console.log("Hello world");

// private function
var sayHi = function(name) {
  console.log("Hello " + name);
};

// call the private function 
sayHi("Almudena");

// Make this function not private 
// Assign methods to module.exports 
module.exports = {
  Hi : sayHi,
};

// we can create method to export (not private)
module.exports.sayBye = function (name, lastname) {
  
  //return the private var fullname
  return (name + ' ' + lastname);
};