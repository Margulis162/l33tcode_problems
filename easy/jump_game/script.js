var canJump = function(nums) {
    let zeroIndeces =[];
    //that gives me the indeces of all 0s
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 0){
            zeroIndeces.push(i);
        }
    }
    if(zeroIndeces.length > 0){
       for(let j =0; j < zeroIndeces.length; j++){
           ///here I need snippet which detects if I can jump over the 0 at this particular index;
           let stepBack = zeroIndeces[0] - 1; // I'm trying to avoid loop inside a loop, for that I might need to move that variable outside the loop
           console.log( stepBack, nums[stepBack], nums[stepBack] + stepBack );
           if(nums[stepBack] + stepBack > zeroIndeces[j]){
               return true;
           }else if(stepBack > 0){
               stepBack--;
           }else{return false}
       }
    }else{
        return true;
    }
  
    
};

// second shot, not a very successful eather gotta figure that out on weekend 

var canJump = function(nums) {
    let zeroIndeces =[];
//that gives me the indeces of all 0s
for(let i = 0; i < nums.length; i++){
    if(nums[i] == 0){
        zeroIndeces.push(i);
    }
}
if(zeroIndeces.length > 0){
    let sliceStart = 0;
for(let i = 0; i< zeroIndeces.length; i++){
    const shallowNums = nums.slice();
    console.log(shallowNums);
    const arr = shallowNums.splice(sliceStart, zeroIndeces[i]-(sliceStart));
    sliceStart = zeroIndeces[i];
    console.log(arr);
} }
};

// the solution with greedy algorithm
var canJump = function(nums) {
    let finish = nums.length -1;
    for(let i = nums.length -1; i >= 0; i--){
        if(finish <= i+nums[i]){
            finish = i;
        }
    }
    return finish === 0;
};