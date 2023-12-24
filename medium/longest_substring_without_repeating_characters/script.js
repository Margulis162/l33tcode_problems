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

// working solution
var lengthOfLongestSubstring = function(s) {
    let max =0;
    let start =0;
    let map ={};
    for(let end =0; end<s.length;end++){
        if(map[s[end]] !== undefined && map[s[end]]>=start){ //! there is difference between map[s[end]] !== undefined && map[s[end]].why?
            start = map[s[end]]+1
        }
        map[s[end]] = end;
        max =Math.max(max, end - start +1)
    }
    return max;
};