
// first working but ineficient solution
var addTwoNumbers = function(l1, l2) {
    let previous = new ListNode();
    let carry = 0;
    const l3 = previous;
    while(l1 || l2 || carry){
        let num1 =0;
        let num2;
        if(l1){
            num1 = l1.val;
            l1 = l1.next;
        }
        if(l2){
            num2 = l2.val;
            l2 = l2.next;
        }
        let sum = num1 + num2 +carry;
        carry = Math.floor(sum/10);
        let digit = sum%10;
        // l3.current= = new ListNode(digit);
        // l3.current = l3.next;
        const current = new ListNode(digit);
        previous.next = current;
        previous = current;
        console.log(l3)
    }
   
  
    return l3.next;
    
    // l3.next = new ListNode(sum); this
    
};