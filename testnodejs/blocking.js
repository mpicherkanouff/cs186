console.log('About to call fibonacci');

var fib = require('./fib');

var fibnum = fib.recursive(100);
console.log('Fib number is ' + fibnum);

// This message will be blocked by fibnum 
console.log('Message to user');


