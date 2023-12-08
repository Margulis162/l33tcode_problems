// I'm learning siomethingh here
function outerFunction(a){
    return function innerFunction(b){
        const sum = a+b;
        return sum;
    }
}

const addTo6 = outerFunction(6);
console.log(addTo6(1));

// my initial solution 

var createCounter = function(n) {
    
    return function() {
        return n++;
    };
};

