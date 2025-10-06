// let str = "hello";
// console.log(str.charAt(1));

// let str = "hello";
// console.log(str.substring(1,4));

// let str = "hello";
// console.log(str.substr(1,3));

// console.log(str);


// let str = "Hello world";
// console.log(str.replace('Hello', 'Hi'));
// str = str.replace('Hello', 'Hi');
// console.log(str);

// let str1 = "hello ";
// console.log(str1.substring(1,3));
// str1 = str1.substring(1,3);
// console.log(str1);

// let str2 = "hell    o ";
// console.log(str2.trim());

// let arr = [1,2,3,4,5];
// console.log(arr.join(" "));

// let str3 = "hello";
// str3 = str3.split('');

// console.log(str3.sort());


// let str = 'Hello';
// str = str.split('');
// console.log(str.sort((a,b) => b.localeCompare(a)));


// let a = 5;
// let b = 10;
// console.log("The Values of a is \n and value of b is ", a, b);
// console.log(`The Values of a is ${a} and value of b is ${b}`);


// let str = "Hello World!";
// console.log(str.search(`World`));

// let str = 'Hello World! Hello';
// console.log(str.match(/He/g));


// function rightAngleTriangle(rows) {
//     for (let i = 1; i <= rows; i++) {
//         let pattern = "";
//         for (let j = 1; j <= i; j++) {
//             pattern += "* ";
//         }
//         console.log(pattern);
//     }
// }

// rightAngleTriangle(5);




// let rows = 5;
//     for (let i = rows; i >= 1; i--) {
//         let pattern = "";
//         for (let j = 1; j <= i; j++) {
//             pattern += "* ";
//         }
//         console.log(pattern);
  
// }


// function buildPyramid(height) {
//   let result = [];
//   for (let i = 1; i <= height; i++) {
//     const line = ' '.repeat(height - i) + '*'.repeat(2 * i - 1);
//     result.push(line);
//   }
//   return result.join(' \n');
// }

// console.log(buildPyramid(4));

let height = 4;
let stars = 1;
for (let i = 1; i <= height; i++) {
    let pattern = "";
    for (let j = 0; j < height - i; j++) {
    pattern += " ";
    }
    for (let k = 1; k <= stars; k++) {
     pattern += "*";
    }
    console.log(pattern);
    if (i == 1) stars += 1; 
    else stars += 2;         
}


let  rows = 4;
let num = 1;
for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += num + " ";
        num++;
    }   
    console.log(pattern);
}

let size = 5;
for (let i = 1; i <= size; i++) {
    let pattern = "";
    for (let j = 1; j <= size ; j++) {
        if(i===1 || i === size || j === 1 || j === size ) {
            pattern += "* ";
        } else {
            pattern += "  ";
        }
    }
    console.log(pattern);
}
;

