var child_process = require('child_process');

console.log('About to call fibonacci');

var newProcess = child_process.spawn('node', ['fibnonblocking.js'], {
    stdio: 'inherit' //to share console log of the parent process 
});

// From this point on we have two processes compiting for the processor 
// This message will not be blocked by fibnum 
console.log('Message to user');

