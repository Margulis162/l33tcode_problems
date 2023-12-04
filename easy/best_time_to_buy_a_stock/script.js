
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