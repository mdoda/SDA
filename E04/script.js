//my first algorithm
function algorithm(a, b){
    
    var x = 1;
    while(x < b){
        console.log("Vlera e A-s: ",a)
        a *= a;
        x++;
    }
    console.log("Rezultati final i A-s algoritmi par")
    return a;
}

console.log(algorithm(2, 2));
console.log(algorithm(5, 5));
console.log(algorithm(4, 0));
console.log(algorithm(2, 1));

//The algorithm intends to calculate the power of a number. But - as you can see, something is wrong in it.
//Try to find and correct the mistake.

function algorithm2(a, b){
    
    
    var x = 1;
    var result = 1; //we need an extra variable to be multiplied by a
    while(x <= b){
        console.log("Vlera e A-s Algoritmi 2: ", a)
        result *= a;
        console.log("Result: ", a)
        x++;
    }
    return result;
}

console.log(algorithm2(2, 2));
console.log(algorithm2(5, 5));
console.log(algorithm2(4, 0));
console.log(algorithm2(2, 1));