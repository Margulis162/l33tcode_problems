// This code doesn't do much except it helped me to visualize the problem.
// So the idea was kind of like that  I can have two types of symetry. One is when symetry axis falls on a number (131), the other
// when it falls in between two numbers (1441). If I can kind of sort of map all the potential symetry axis it migth help to find the longest 
// paliandrome without looping too much. Still do not have the final answer but I think the unique values might give me some good points to start with 
var longestPalindrome = function(s) {
    /* first I want to find which values are unique  in the string to figure out how does the symetry goes 
    and record those data into an array*/
 
    const symetry =[]
    const arr = Array.from(s)
    const arrFromSet = Array.from(new Set(arr))
    
    arr.forEach((char, index) =>{
        symetry.push(arrFromSet .indexOf(char))
    }
    )
    
    
    // that worked now I need to figure out how to use symetry to get the indeces of the longest paliandrome
    console.log(arrFromSet , symetry)
};

// I think that it might work better if i start in the center of the String. Compare nearby characters to the one I'm on to see if they 
// are equal to the one I'm on or to each other. If not than there is no symetry axis there and I need to move eather left or rigth. 
// Otherwise I compare the next two characters to see if they are symetrical as well and record the longest slice at every step.




// I thought this code might be just the solution but it fails on the very long case. The idea was since we are looking for the longest str
// to start with the longest substrings and kind  of go down. I guess on certain datasets it might Work just fine 
var longestPalindrome = function(s) {
    
    let copy = s
    let subLenght = copy.length
    let subtractor
        
 

        
    while(subLenght>0){
         if(copy == copy.split('').reverse().join('')){
        return copy}else{
            subtractor = 0
            subLenght --
           
            while(subLenght + subtractor <= s.length){
                copy = s.substr(subtractor, subLenght)
                
                if(copy == copy.split('').reverse().join('')){
        return copy}
                subtractor++
            }
            
        }
        
    }
   
    
};