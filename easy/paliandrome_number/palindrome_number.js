// my first inefficient solution

let x =11;


// var isPalindrome = function(x) {
//   console.log(x); 
//   let str = x.toString();
//    let reversed = '';
//    let j = 0;
//   for (let i = str.length - 1; i >= 0; i--) {
//       reversed += str[i];
//   }
  
//   while( j <= str.length -1){
//     if(str[j] === reversed[j] && j === str.length -1){
//       return true
    
      
//     }else if(str[j] === reversed[j] ){
//         j++;
//     }else{return false;}
   
    
       
  
     
//   }
// };

// isPalindrome(x);



// somebody else's pretty cool solution 

// var isPalindrome = function(x) {
//   let pali = x.toString()
//   .split('')
//   .reverse()
//   .join('')
//   let normal = x.toString()
//  return (pali === normal)
// };


// work in progress on no string solution 
var isPalindrome = function(x) {
  if( x < 0)
  {return false;}
  else if(x<10){
    return true;
  }else{
    const num = numOfDigits(x);
    const rev = reversator(x,num);
    
    return (x === rev);
  }
  };
  
  function numOfDigits(x){
    num = Math.floor(Math.log10(x) + 1);
    console.log(num);
    return num;
  }
  
  function reversator(x, num){
     let pow = 1;
     let rev = 0;
     while(num >= 1){
      rev += Math.floor((x%Math.pow(10, pow))/Math.pow(10, pow-1))*Math.pow(10, num-1);
      pow++;
      num--;
      console.log(rev);
     
    }
    
    return rev;
  }

  console.log(isPalindrome(x));