// Today topic is hoc , closure, lexical scope , Insertion sort.

 
// function outer() {
//     var b = 10;
//     function inner() {
//         var a = 20;
//         return a + b;
//     }
//     return inner;
// }

// var getsum = outer(); 
// var num = getsum();   
// console.log(num);     


// function add(a,b){
//     return a+b;
    
// }
// function calc( a,b,add){
//     console.log(add(a,b));
// }
// console.log(5,10,add);


// function multiply(num){
//     return function(number){
//         return num*number;
//     };
// }
// let num = multiply(2);


const num = [1, 2, 3, 4, 5];

const result = num.map(x => x * 2);
console.log("double:", result);

const arg = num.filter(y => y % 2);
console.log("Odd num:", arg);

const res = num.map(x => x * 3).filter(y => y % 2);
console.log("Tripled and odd:", res);
