
const x =1000021;


var isPalindrome = function(x) {
    const str = x.toString();
     let reversed = '';
     let j = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    
    console.log(reversed);
    while( j <= str.length -1){
        if( str[j] === reversed[j]){
            j++;
            if( j => str.length - 1){return true;}
            }else{return false;}
         
    
       
    }
};
isPalindrome();
