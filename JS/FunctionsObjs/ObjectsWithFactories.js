//mix of functional and object oriented approaches 
"use strict";
//instantiate an employee
let employee = {
	company: 'google',
	sayhi: function() {
		console.log('Good morning ' + this.company + ', I am your employee');	
	}
};

// this means: the object that calls the function 
employee.sayhi(); 

// bind method 
function saybye() {
	console.log('Bye ' + this.company );
}

// wrong, will not run 
// saybye();  //this would refer to window object 

//must bind function to employee
let saybyeBound = saybye.bind(employee);
saybyeBound();  //this would refer to window object
		
