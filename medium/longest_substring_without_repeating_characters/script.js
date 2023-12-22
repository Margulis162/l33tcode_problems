// initial attemp( not fully working)
var lengthOfLongestSubstring = function(s) {
    const arr = s.split('');
    const onceSeen =[];
    let currentScore = 0;
    let finalScore = 0;
    for(let i = 0; i < arr.length; i++){
        if(!onceSeen.includes(arr[i])){
            onceSeen.push(arr[i]);
            currentScore++;
           
        }
             
            if(currentScore > finalScore){
                i--;
                finalScore = currentScore;
                currentScore = 0;
                onceSeen.length = 0;
              
            }
        
             
    }
     
    return finalScore;
};