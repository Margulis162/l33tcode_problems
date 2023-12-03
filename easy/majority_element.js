// first attempt
var majorityElement = function(nums) {
    for(const num of nums){
        const arr = nums.filter((elm) => {
            return elm == num;
             
        });
       
        if(arr.length > nums.length/2){
            return num;
        }
    }
};