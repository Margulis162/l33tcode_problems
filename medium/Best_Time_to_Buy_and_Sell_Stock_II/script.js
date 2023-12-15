var maxProfit = function(prices) {
    let maxProfit = 0;
      for(let i = 0; i<prices.length; i++){
          if(prices[i+1] > prices[i]){
              maxProfit += prices[i+1] - prices[i]}
            
      
      }
      return maxProfit;
  };