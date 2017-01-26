"use strict";
// can leave function outside
// make reference  
let sayhi = function () {
  console.log('Good morning ' + this.company + ', I am your employee');	
};

function saybye() {
	console.log('Bye ' + this.company );
}

function showTitle() {
	console.log('My title is: ' + this.title );
}

let employee = {
	company: 'google',
	sayhifunc: sayhi,
	saybye, 	// in ES2015 notation no need for 
				// saybye: saybye
	showTitle			
};

employee.sayhifunc(); 
employee.saybye(); 
employee.showTitle();   // undefined, no title property  

// create a type of employee
let salesManager = { 
	title: 'Sales Manager'
};
let engineer = { 
	title: 'Engineer'
};

Object.setPrototypeOf(salesManager, employee);
Object.setPrototypeOf(engineer, employee);
salesManager.sayhifunc();
salesManager.showTitle();
engineer.sayhifunc();
engineer.showTitle();

// we can change properties and mehods 
salesManager.title = "Sales Engineer Manager";
salesManager.showTitle();

employee.saybye = function() {
	console.log('Bye Bye');
};

salesManager.saybye();