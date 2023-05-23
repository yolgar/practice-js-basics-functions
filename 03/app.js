const getSum  = function(limit) {
    
    let result = 0;
    for(let i=1; i<=limit; i++) {
        result = result + i;
    }
    return result;
   }

  const summation = getSum(4);
  console.log(summation);