
var recursive = function(n) {
  if(n <= 2) {
    return 1;
  } else {
    return recursive(n - 1) + recursive(n - 2);
  }
};

var fibnum = recursive(20);
console.log('Fib number is ' + fibnum);