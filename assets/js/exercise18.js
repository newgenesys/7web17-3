 //exercise 1
 function factorial(x) {
     if (x < 0) return;
     if (x === 0) return 1;
     return x * factorial(x - 1);
 };

 // Exercise 2
 function gcd(number1, number2) {
    if ( ! number2) {
        return number1;
    }

    return gcd(number2, number1 % number2);
 }


 // Exercise 3
 function Fabonnaci(number) {
     var i;
     var fib = [];

     fib[0] = 0;
     fib[1] = 1;
     for (i = 2; i <= number; i++) {
         fib[i] = fib[i - 2] + fib[i - 1];
         console.log(fib[i]);
     }
 }

 //Exercise 4
 function evenOrOdd(number) {
     return (number % 2 === 0) ? "Even number" : " Odd number";
 }