// Write a program that will output numbers from 10 to 20.
// Do it using `for`, `while` and `do while` loops.
// for(var i = 10; i <= 20; i++){
//     console.log(i);
// }

// var j = 10;
// while(j <= 20){
//     console.log(j);
//     j++;
// }

// var k = 10;
// do{
//     console.log(k);
//     k++;
// } while(k <= 20);


// //Modify your code, so that your program will output only even numbers.
// for(var i = 10; i <= 20; i+=2){
//     console.log(i);
// }

//Modify your code again, so that it becomes a function with two arguments, determining range of numbers to output (from a to b).
function numbers(a, b){

   console.log("function called")
    if(a < b){
        for(var i = a; i <= b; i+=2){
            console.log(i);
        }
    }else{
        for(var i = a; i <= b; i+=2){
            console.log(i);
        }
    }
}

 //function call
numbers(300,110);