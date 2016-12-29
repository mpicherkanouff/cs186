// Read Synchrously (blocking, runs in order)
// node read-sysn.js
// Accessing data from json file 

var fs = require("fs");

console.log(" About to read the file \n");
var json_file = fs.readFileSync("data.json");

var obj = JSON.parse(json_file);

console.log("Faculty:", obj.faculty);
console.log("Faculty:", obj.faculty[1]);
console.log("First Student", obj.students[0])
console.log("Name of First Student", obj.students[0].FirstName)

for(var k in obj) {
 console.log("\nkey:"+ k + ", value:" + obj[k]);
}
//console.log("\n The entire file looks like this: \n ")
//console.log("File : \n" + json_file);

