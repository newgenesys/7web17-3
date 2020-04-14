let fibonSeries = function (a) 
{
  if (a===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonSeries(a - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibonSeries(9));