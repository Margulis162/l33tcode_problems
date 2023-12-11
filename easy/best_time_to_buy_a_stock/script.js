const input = [1,2,3,4,5,6];
// my initial solution which does not work on all the cases 
// var maxProfit = function(prices) { 

//     function findExtrema(inputArray){
//         const arr = [...inputArray].sort((a,b) => a - b);
//         const min = arr[0];
//         const max = arr[arr.length-1];
       
//         return [min, max]; 
//         }
//     if(JSON.stringify(prices) == JSON.stringify([...prices].sort((a,b)=>b-a))){
//       return 0;
//     }else{
//           console.log([...prices].sort((a,b)=>b-a));
//         const buy = findExtrema(prices)[0];
//     const length = prices.length;
//     const pricesCut = [...prices].splice(buy, length);
//     const sell = findExtrema(pricesCut)[1];
//     return sell - buy;
//     }
    
// };

//ajusted code which doesnt pass submissions but runs perfectly on test cvar maxProfit = function(prices) {
//   let arr = [];
//   for(let i =0; i<prices.length; i++){
//     for(let j = prices.length+1; j>i; j--){
//       if(prices[j] - prices[i] > 0){
//         arr.push(prices[j] - prices[i]);
//       }
//     }
    
//   } 
//   if(arr.length !==0){
//      arr.sort((a,b) => b-a)
//      return arr[0]
//   }else{return 0}
// };

// another half succesful attempt 
// var maxProfit = function(prices) {
//   const minVal = Math.min(...prices);
// const maxVal = Math.max(...prices);
// const minIndex = prices.indexOf(minVal);
// const maxIndex = prices.indexOf(maxVal);
// if(maxIndex > minIndex){
//     return maxVal - minVal;
// }else{
    
// }
// };

// I think this works but it excceeds the limit 

// var maxProfit = function(prices) {
//      let maxProfit = 0;
//     for(let i  = 0; i < prices.length; i++){
//         for(let j = prices.length; j > i; j --){
//             if(prices[j]-prices[i]>maxProfit){
//                 maxProfit = prices[j] - prices[i]; 
//             }
//         }
//     }
//     return maxProfit;
// };

//gotta see if loop within the loop works on that imput in general

const maxProfit = function(prices) {
  bestSell = 0;
  for(let i = 0; i< prices.length; i++){
      for( let j = i+1; j <prices.length; j++){
          if(prices[j] > prices[i]){
              let profit = prices[j] - prices[i];
              bestSell = Math.max(bestSell, profit);
          }
      }
  }
  return bestSell;
};

console.log(maxProfit(input));

// final solution with better time complexity

var maxProfit = function(prices) {
  let bestBuyDay = prices[0];
  let maxProfit = 0;
  for(let i =1; i < prices.length; i++){
      bestBuyDay = Math.min(bestBuyDay, prices[i-1])
      let profit = prices[i] - bestBuyDay;
      maxProfit = Math.max(maxProfit, profit);
      
  }
  return maxProfit;
};