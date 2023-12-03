// my initial pretty efficient solution 
var rotate = function(nums, k) {
    if(nums.length > k){
       const subnums = nums.splice(-k, k);
    nums.splice(0, 0, ...subnums);
    }else{
      for(let i = 0; i<k; i++){
        const num = nums.pop();
        nums.unshift(num);
      }
    }
   
  };