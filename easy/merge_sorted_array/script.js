
// sample var 1
let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];
let m = 3;
let n =3;


// my initial solution what works so far
let sorted = function( nums1, m, nums2, n){
    if(m == 0 || n == 0){
        nums1.splice(m,n, ...nums2);}//takes care of the cases where one of the arrays is empty
        if(m == 0 || n == 0){
            nums1.splice(m,n, ...nums2);}
         else{  
                let loopCounter =1;
                let position = m-1;
                while(nums2.length > 0){
                    const num = nums2.shift();
                    while(num < nums1[position]){
                          position--;
                        }
                    nums1.splice(position, 0, num);
                    nums1.pop();
                    loopCounter++;
                    position = m-1 + loopCounter;
                }
    
         }//else 
};
 
let arr =[];
         let i = 1;

        //  { 
        //      for(i; i<m; i++){
        //          if(nums2[0] >= nums1[m -i]){
        //              while(nums2[0] >= nums1[m -i]){
        //             const num = nums2.shift();
        //             arr.push(num);}
                    
        //             nums1.splice(m-i+1, 0, ...arr);
        //              arr.length = 0;
        //          }else{
        //              let j = i;
                    
        //              while(nums2[0] < nums1[m -i]){  
        //                  i++;
        //              }
        //              const num = nums2.shift();
        //             arr.push(num);
        //             nums1.splice(m-i+1, 0, ...arr);
        //             nums1.pop();
                    
        //             arr.length = 0;
                    
        //             console.log(nums1, arr);
                     
        //          }
                
                    
               
             
            

             
              
             
            
                
                
        //     } 
          
                 
                 

        //  }
     