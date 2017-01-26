var target;            
var guess;      
var finished = false;   
var guesses = 0;

function do_game() {
    var my_number = Math.random() * 100;
    var my_number = Math.floor(my_number);
    target = my_number;

    while (!finished) {
        guess = prompt("Guess a number between 1 to 100 ? ");
        guess = parseInt(guess);
        guesses += 1;   
        finished = check_guess();
    }
}

function check_guess() {
    if (isNaN(guess)) {
        alert("You have not entered a number.\n\n" +
              "Please enter a number in the range 1 to 100.");
        return false;
    }
    if ((guess < 1) || (guess > 100)) {
        alert("Please enter an integer number in the range 1 to 100.");
        return false;
    }
    if (guess > target) {
        alert("Your number is too large!");
        return false;
    }
    if (guess < target) {
        alert("Your number is too small!");
        return false;
    }
    alert("You got it! The number was " + target + 
          ".\n\nIt took you " + guesses + 
          " guesses to get the number!");
    return true;   
}