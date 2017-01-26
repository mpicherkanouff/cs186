var people = [[ "Bob", 40, "lawyer" ] , [ "Alice" , 35, "salesMAnager"] , [ "Trudy", 27, "lawyer" ]] ;

console.log("\nFind lawyers with simple loop ");
for (var i=0; i < people.length ; i++) {
    if (people[i][2] == "lawyer") {
        console.log("Found a layer: " + people[i][0]);
    }
}

console.log("\nFind lawyers with higher order function filter()  ");
// filter creates a new array with elements of the original array
// only w filtered elements  
var all_lawyers = people.filter(function(person)  {
 return person[2] == "lawyer";
});
console.log(all_lawyers);

// or we could 
console.log("Another more concise way");
console.log(people.filter(function(person)  {
 return person[2] == "lawyer";
}));

// Another way to write it, assign fucntion to a var
console.log('\nAnother write to write your higher order fun, create 1st the func');
var is_a_lawyer = function(person)  {
 return person[2] == "lawyer";
}; 
var all_lawyers = people.filter(is_a_lawyer);
console.log(all_lawyers);


// print only names 
// transforms all_lawyers to la 
console.log("\nUsing map ");
var la = all_lawyers.map(function(a_lawyer) {
   return a_lawyer[0];
});
console.log(la);

console.log("\nUsing arrow function");
var n_la = all_lawyers.map((person) => person[0]);
console.log(n_la);