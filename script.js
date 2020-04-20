function factorial(n) {
    if (n == 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  let foo = factorial(5);
  console.log(foo);
  // function to calcualte the gcd of two integers
  
  function GCD(p, q) {
    if (q == 0) {
      return p;
    } else {
      return GCD(q, p % q);
    }
  }
  
  let yo = console.log(GCD(18, 24));
  
  // fibonacci sequence
  function fibonacciSeq(n) {
    let num1 = 0;
    let num2 = 1;
    let count = 0;
    while (count < n) {
      console.log(num1);
      let nth = num1 + num2;
  
      num1 = num2;
      num2 = nth;
      count += 1;
    }
  }
  
  
  let sample = console.log(fibonacciSeq(10))
  // check wheter a number is even
  
  function evenCheck(n){
      if(n % 2 == 0){
          console.log(` ${n} is even`)
      } else {
          console.log(`${n} is not even`)
      }
  }
  





function addition (){
    let x = Number(prompt('enter the first number'))
    let y = Number(prompt('enter the second number'))
    alert(` their sum is: ${x + y}`)
}
function subtraction (){
    let x = Number(prompt('enter the first number'))
    let y = Number(prompt('enter the second number'))
    alert(` their difference is: ${x - y}`)
}
function multiplication (){
    let x = Number(prompt('enter the first number'))
    let y = Number(prompt('enter the second number'))
    alert(` their product is: ${x * y}`)
}
function division (){
    let x = Number(prompt('enter the first number'))
    let y = Number(prompt('enter the second number'))
    alert(` the quotient  is: ${x / y}`)
}
