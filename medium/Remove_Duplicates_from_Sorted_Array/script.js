// my initial solution which turned out to be pretty readable and efficient


var removeDuplicates = function(nums) {
    nums.splice(0, nums.length, ...new Set(nums));
};


//second solution

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