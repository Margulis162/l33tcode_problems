
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
      console.log(str[j], reversed[j])
      if(str[j] === reversed[j]){
        
        j++;
        console.log(typeof(str.length))
      }else if(str[j] === reversed[j] && j === str.length -1){
        console.log('this')
        return true;
      }else{return false;}
      
      
         
    
       
    }
};
isPalindrome(x);
