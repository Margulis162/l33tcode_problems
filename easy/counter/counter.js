function outerFunction(a){
    return function innerFunction(b){
        const sum = a+b;
        return sum;
    }
}

const addTo6 = outerFunction(6);
console.log(addTo6(1));
