
// my initial solution which does not work on all the cases 
var maxProfit = function(prices) { 

    function findExtrema(inputArray){
        const arr = [...inputArray].sort((a,b) => a - b);
        const min = arr[0];
        const max = arr[arr.length-1];
       
        return [min, max]; 
        }
    if(JSON.stringify(prices) == JSON.stringify([...prices].sort((a,b)=>b-a))){
      return 0;
    }else{
          console.log([...prices].sort((a,b)=>b-a));
        const buy = findExtrema(prices)[0];
    const length = prices.length;
    const pricesCut = [...prices].splice(buy, length);
    const sell = findExtrema(pricesCut)[1];
    return sell - buy;
    }
    
};

//ajusted code which doesnt pass submissions but runs perfectly on test cvar maxProfit = function(prices) {
  let arr = [];
  for(let i =0; i<prices.length; i++){
    for(let j = prices.length+1; j>i; j--){
      if(prices[j] - prices[i] > 0){
        arr.push(prices[j] - prices[i]);
      }
    }
    
  } 
  if(arr.length !==0){
     arr.sort((a,b) => b-a)
     return arr[0]
  }else{return 0}
};