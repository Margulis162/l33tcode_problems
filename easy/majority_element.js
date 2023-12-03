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


//second solution memory consuming but accepted this time 

var majorityElement = function(nums) {
    const values = new Set(nums);
    for(const elem of values){
        let arr = nums.filter((elm)=>{
            return elm == elem;
        })
        if(nums.length/2 < arr.length){
            return elem;
        }
    }
 };