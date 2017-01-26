var people = [[ "Bob", 40, "lawyer" ] , [ "Alice" , 35, "salesMAnager"] , [ "Trudy", 27, "lawyer" ]] ;

console.log("\n Find youngest person ");
console.log(people.reduce( function(youngest, cur) {
  if (cur[1] < youngest[1]) return cur;
  else return youngest; 
})); 

// use arrow function 
console.log(people.reduce( (youngest, cur) => {
  if (cur[1] < youngest[1]) return cur;
  else return youngest; }
));