
// sample var 1
let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];
let m = 3;
let n =3;


// my initial solution
let sorted = function( nums1, m, nums2, n){
    if(m==0 && n>0){
        nums1.length =0;
       while(nums2.length > 0){
           const shifted = nums2.shift();
           nums1.push(shifted);
       }
       console.log(
           "nums2 only"
       )
       
   }else if(m>0 && n == 0){
       console.log(
           "nums1 only"
       )
       return nums1;
   }else if( nums1[m-1] <= nums2[0]){
       nums1.splice(0, m-1);
       while(nums2.length > 0){
           const shifted = nums2.shift();
           nums1.push(shifted);
       }
       console.log(
           "presorted"
       )
       return nums1;
   }else{
        nums1.splice(m, nums1.length);
        nums1 = nums1.concat(nums2);
       
       for(let i = 0; i <= m; i++){
           if(nums1[i] > nums1[m]){
               console.log(nums1);
               x = nums1[i];
               y = nums1[m];
               nums1[i] = y;
               nums1[m] =x;
               console.log('hola')
            

           }else{return nums1};
       }

       }
   
};
 
// another way?
var merge = function(nums1, m, nums2, n) {
    while(nums2.length > 0){
      for(let i = 0; i<m+n-1; i++){
          if(nums1[i] <= nums2[0] && nums1[i+1] >= nums2[0]){
            //  console.log(nums1[i], nums2[i])
            nums1.splice(i,n,i+1);
             }else if(nums1[i] <= nums2[0] ){
                 
             }
      
             }
     nums2.shift();
  
    }
    
};f