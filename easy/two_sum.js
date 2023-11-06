// objective
    // Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

    // You may assume that each input would have exactly one solution, and you may not use the same element twice.

    // You can return the answer in any order.

 
//my original ugly solution

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let answer = [];
    const numIndeces = [];
    for(let i = 0; i < nums.length; i++){
        numIndeces.push(i);
    }

       for(let i = 0; i < nums.length; i++){
        numIndeces.forEach( (index,) => {
            if ( i !== index && (nums[i] + nums[index]) === target){
              answer.push(i, index); 
              return;
            }
        });
        if(answer.length > 0){
            break;
        }
    }

    return answer;
};


// easy but cleaner and more efficient solution


var twoSum = function(nums, target) {
    for(let i = 0; i<nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            if((target-nums[i]) == nums[j]){
                return [i,j];
            }
        }
    }
};


