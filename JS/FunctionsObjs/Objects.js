// older way to write code, pre ~ 2015, still good

// constructor, called when you call new  
function employee (company, name,department,message) {
			this.company = company;
			this.name = name;			    
			this.department = department;
			this.message = message;
}

// functional programming style 
employee.prototype.sayHi = function() {
	console.log('\nGood morning ' + this.company + ', I am your employee');
	console.log('My name is ' + this.name + ', from ' + this.department);
	console.log('I like to say: ', this.message);
};

// create a new obj
var alice = new employee('google', 'Alice' , 'Info Sec', 'careful with Trudy');
console.log(alice);
alice.sayHi();