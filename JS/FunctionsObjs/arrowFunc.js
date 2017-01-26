const timesfunc = function(my_function, my_value) {
    return my_function(my_value); 
};
const my_f = function(v) {
    return v * 2;
}; 
console.log("Normal function");
console.log(timesfunc(my_f, 8));
console.log();

// input paramenters => return value
console.log("arrow function");
const times = (f, v) => f(v);
const func = v => v * 2;
console.log(times(func, 8)); 