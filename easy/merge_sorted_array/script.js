
// sample var 1
let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];
let m = 3;
let n =3;


// my initial solution what works so far
let sorted = function( nums1, m, nums2, n){
    if(m == 0 || n == 0){
        nums1.splice(m,n, ...nums2);//takes care of the cases where one of the arrays is empty
   
};
 
/