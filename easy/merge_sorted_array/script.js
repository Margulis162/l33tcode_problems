
// sample var 1
let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];
let m = 3;
let n =3;


// my initial solution
let sorted = function( nums1, m, nums2, n){
    console.log(m, n, nums1[m-1]);
     if(m==0 && n>0){
         nums1.length =0;
        while(nums2.length > 0){
            const shifted = nums2.shift();
            nums1.push(shifted);
        }
        
        
    }else if(m>0 && n == 0){
        return nums1;
    }else if( nums1[m-1] <= nums2[0]){
        nums1.splice(0, m-1);
        while(nums2.length > 0){
            const shifted = nums2.shift();
            nums1.push(shifted);
        }
        return nums1;
    }else{
         nums1.splice(0, m-1);
        while(){}
    }
};