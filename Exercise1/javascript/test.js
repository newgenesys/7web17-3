function factor(a) 
{ 

  if (a === 0)
 {
    return 1;
 }
  return a * factor(a-1);
         
}
console.log(factor(5));