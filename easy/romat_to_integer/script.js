var romanToInt = function(s) {
    let num = 0;
    let dicCombos ={"IV":4,"IX":9,"XL":40,"XC":90,"CD":400,"CM":900}
     let dic ={"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000}
    let numsCombos = Object.keys(dicCombos)

    for(n of numsCombos){
        if(s.search(n) !==-1){
            num+=dicCombos[n]
           s = s.replace(`${n}`,'') 
        }

   
    }
        
         for(let i = 0; i < s.length; i++){
        num+=dic[s[i]]
    }
   
    console.log(s)
    return num
};