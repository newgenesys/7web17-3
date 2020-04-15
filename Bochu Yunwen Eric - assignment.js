//duplicate functions

// @channel
// Exercises:
// Start time: 10am
// Stop time: 12pm
// Today

// Using functions and all lessons covered so far, do the following

// 1.) Write a JavaScript program to calculate the factorial of a number. In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120

// 2.) Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

// 3.) Write a JavaScript program to get the first n Fibonacci numbers. Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.

// 4.) Write a JavaScript program to check whether a number is even or not.

//Exercise 1

function factorialize(num) {
    if (num < 0) 
          return "This number is not a positive whole number";
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
  console.log(factorialize(Number(prompt("what is the number: "))));

// Exercise 2

function gnumber(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return "This is not a number";
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}
x = Number(prompt("what is the first number:"));
y = Number(prompt("what is the second number:"))
console.log(gnumber(x, y));


//Exercise 3

var a = 1, b = 0, result = b;
for (var i = 1, n = prompt("What is your range?"); i < n; i++) {
    result = a + b;
    a = b;
    b = result;
    console.log(result);
} 

// Exercise 4
function Even_checker(raw_data){

    if (raw_data % 2 == 0){
        console.log("This number is even");
    }
    else if (raw_data % 2 !=0 && raw_data == 0){
        console.log("This number is not even");
    }
    else{
        console.log("Please verify your input and try again!!");
    }
}
raw_data = Number(prompt("Hello. what number do you what to check? "));
Even_checker(raw_data);
