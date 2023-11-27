// my initial solution which turned out to be pretty readable and efficient


var removeDuplicates = function(nums) {
    nums.splice(0, nums.length, ...new Set(nums));
};
