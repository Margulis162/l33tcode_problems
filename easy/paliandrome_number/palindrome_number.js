
let x =121;


var isPalindrome = function(x) {
  console.log(x); 
  let str = x.toString();
   let reversed = '';
   let j = 0;
  for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
  }
  
  while( j <= str.length -1){
    if(str[j] === reversed[j] && j === str.length -1){
      return true
    
      
    }else if(str[j] === reversed[j] ){
        j++;
    }else{return false;}
   
    
       
  
     
  }
};

isPalindrome(x);
