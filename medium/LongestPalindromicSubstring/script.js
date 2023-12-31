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