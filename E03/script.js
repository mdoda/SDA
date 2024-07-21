// Create an array, containing 10 numbers.
var a = [11, 22, 33, 44, 55, 66, 77, 88, 99, 111,30,40,50];
console.log(a);

//Remove the last element from the array and log it in console.
var last = a.pop();
console.log(last);
console.log(a);

// Add a new element to the end of the array.
var c = 222;
a.push(c);
console.log(a);

// Change the value of the array's second element to zero.
a[1] = 0;
console.log(a);

// Change the value of every third array's element to one.
for(var i = 0; i < a.length; i+=3){

    if (i == 0){
        continue;
    }
    
    a[i] = 1;

    
}
console.log(a);