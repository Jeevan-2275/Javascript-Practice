//Q //1 score
// let score=prompt("enter your no.:");
// let grade;
// if(score>=90 && score<=100){
//  console.log ("A");
// }else if(score>=80&&score<=89){
//     console.log("B");
// }else if (score>=70&&score<=80){``
//     console.log("C");
// }else if(score>=60&&score<=70){
//     console.log("D");
// }else {
//    console.log("F")
// }


// function checkScore(score){
//     if(score>=90 && score<=100){
//     console.log("A");
// }else if (score>=80&&score<90){
//     console.log("B");
// }else if(score>= 70&&score<80){
//     console.log("C");
// }else if(score >=60 && score<70){
//     console.log("D");
// }else{
//     console.log("Fail");
// }
// }
// checkScore(25);

//Q //2 

// function checkNumber(num){
//     if(num > 0){
//         console.log("positive");
//     }else if(num < 0){
//         console.log("negative");
//     } else{
//         console.log("zero");
//     }
// }
// checkNumber(20); 

// let  num=prompt("Enter your num:");
// if(num >0){
//     console.log("Positive");
// }else if(num <0){
//     console.log("negative");
// }else{
//     console.log("zero");
// }




//Q    3
// function checkTriangle(a,b,c){
//     if(a==b&&b==c){
//         console.log("equilatral");
//     } else if(a==b||b==c||a==c){
//         console.log("isosceles");
//     }else{
//         console.log("scalene");
//     }
    
// }
// checkTriangle(100,200,100);

// let a=prompt("Enter your side:");
// let b=prompt("Enter your side:");
// let c=prompt("Enter your side:");
// if(a==b & b==c){
//      console.log("triangle is Equilateral");
// } else if (a==b||b==c||c==a){
//     console.log("Triangle is isosceles");
// }else{
//     console.log("scalene");
// }



//Q   4
// function checkstr(str){
//     if(str=='a'||str=='e'||str=='i'||str=='o'||str=='u'||str=='A'||str=='E'||str=='I'||str=='O'||str=='U'){
//     console.log("vowel");
//     }else{
//         console.log("consonant");
//     }
// }
// checkstr('b');

// let str=prompt("Enter a string:");
// if(str=='a'||str=='e'||str=='i'||str=='o'||str=='u'||str=='A'||str=='E'||str=='I'||str=='O'||str=='U'){
//         console.log("vowel");
//         }else{
//             console.log("consonant");
//         }





//Q 5
// function checkvote(age){
//     if(age>18){
//         console.log("eligible to vote");
//     }else{
//         console.log("eligible not to vote");
 //     }
// }
// checkvote(17);

// Without function 
//  let age=prompt("Enter your age:");
//  if(age>=18){
//     console.log("eligible to vote");
//  } else{
//     console.log("eligible not to vote");
//  }




//Q 6

// function checklogin(username,password){
//     const Username=("admin");
//     const Password=("1234");
//     if(username==Username&&password==Password){
//         console.log("login successful");
//     }else{
//         console.log("login failed");

//     }
// }
// function main(){
//     let username=prompt("enter username:");
//     let password=prompt("enter password:");
//     checklogin(username,password)
// }
//  main();

// function checkLogin() {
//     const Username = "admin";
//     const Password = "1234";
//     let username = prompt("Enter username:");
//     let password = prompt("Enter password:");

//     if (username == Username && password == Password) {
//         console.log("Login successful");
//     } else {
//         console.log("Login failed");
//     }
// }

// checkLogin();

// Without function 
// // const Username = "admin";
//     const Password = "1234";
//     let username = prompt("Enter username:");
//     let password = prompt("Enter password:");

//     if (username == Username && password == Password) {
//         console.log("Login successful");
//     } else {
//         console.log("Login failed");
//     }


//Q   7   
// function checkLight(){
//     let color=prompt("enter your color");
// if(color=="red"){
//     console.log("stop");
// } else if (color=="yellow"){
//     console.log("slow down");
// }else if (color=="green"){
//     console.log("go");

// }else{
//     console.log("invalid");
// }
// }
// checkLight();

// Without Function 
// let color =prompt("enter your color:");
// if(color=="red"){
//    console.log("stop");
// }else if (color =="yellow"){
//    console.log("slow");
// }else if(color=="green"){
//    console.log("Go");
// }else{
//    console.log("Invalid Color");
// }

//Q  8
// let arr=[1,2,3,4,5];
// let sum=0;
// let i;
// let len=arr.length;
// for(i=0;i<len;i++){
//     sum=sum+arr[i];
// }
// let avg=sum/len;
// console.log(avg);
// Without Function 
// function calculateAvgerage( arr){
// let sum=0;
// let i;
// let len=arr.length;
// for(i=0;i<len;i++){
//    sum=sum+arr[i];
// }
// let avg=sum/len;
// return avg;
// }
// let result=calculateAvgerage([1,2,3,4,5]);
// console.log(result);

//Q 9
// let arr=[4,2,8,5,1];
// let i;
// let j;
// let k;
// let len=arr.length;
// for(i=0;i<len;i++){
//     for(j=i+1;j<len;j++){
//         if(arr[i]>arr[j]   ){
//             let sum=arr[i]+arr[j];
//             arr[i]=arr[j];
//             arr[j]=sum-arr[i];
//         }
//     }
// }
// for(k=0;k<len;k++){
//     console.log(arr[k]);
// }

// Without Function 
// function sortarray(arr){
// let i;
// let j;
// let k;
// let len =arr.length;
// for(i=0;i<len;i++){
//    for(j=i+1;j<len;j++){
//       if(arr[i]>arr[j]){
//          let sum=arr[i]+arr[j];
//          arr[i]=arr[j];
//          arr[j]=sum-arr[i];
//       }
//    }
// }
// for(k=0;k<len; k++){
//    console.log(arr[k]);
// }
// }
// let result=sortarray([4,2,8,5,1]);
// console.log(result);
            
//Q 10
// let arr=[1,2,3,4,5];
// let len = arr.length;
// let i;
// let even=0;
// let odd=0;
// for(i=0;i<len;i++){
//     if(arr[i]%2==0){
//         even=even+1;
//     }else{
//         odd=odd+1;
//     }    
// }
// console.log("even",even);
//    console.log("odd",odd);

// function countEvenOdd(arr) {
// let len=arr.length;
// let i;
// let even=0;
// let odd =0;
// for(i=0;i<len;i++){
//    if(arr[i]%2==0){
//       even=even+1;
//    }else{
//       odd=odd+1;
//    }
// }
// return {even,odd};
// }
// let result=countEvenOdd([1,2,3,4,5]);
// console.log("even",result.even);
// console.log("odd",result.odd);



//Q 11
//

//let arr = [1, 2, 2, 3, 4, 4, 5,2,4,9,2] 
// let sort=arr.sort()
// let arr1=[]
// let len=arr.length
// for(i=0;i<len;i++){
//     if(sort[i]==sort[i+1]){
//         continue;
//     }
//   arr1.push(arr[i])
// }console.log(arr1)

//Q  12
// let arr=[1,2,3,4,5];
// let len=arr.length;
// let newArr=new Array[len+1];
// for(let i=0;i<len;i++){
//     newArr[i]=arr[i];
// }
// newArr[len]=6;

// console.log("updated array:");
// for(let i=0;i<newArr.len;i++){
//     console.log(newArr[i]);
// }

//Q   13
// function
// let arr=[1,2,3,4,5];
// let len=arr.length;
// let number=3;
//     if(arr.includes(number)){
//         console.log("true");
//     }else{
//         console.log("false");
//     }

// without function

// let arr=[1,2,3,4,5];
// let len=arr.length;
//  let number=3;
//  let count=0;
//  for(let i=0;i<len;i++){
//      if(arr[i]==number){
//          count=true;
//      }
//  }
//     if(count){
//         console.log("true");
//     }else{
//         console.log("false");
//     }


//Q. 14
// let arr = [1, 2, 3, 4];
// let newarr=[];
// let nums=0;
// let length =arr.length;
//   newarr[0]=nums;
    
// for(let i=0;i<length;i++){
// newarr[i+1]=arr[i];
// } 
    
//  for(let j=0;j<(length+1);j++){
//      console.log(newarr[j])
//  } 

//Q  15
// let arr=[1,2,3,4,5];
// for(let i=0;i<arr.length-1;i++){
//     console.log(arr[i])
// }
//



// second logic
// let arr=[1,2,3,4,5];
// let newarr=[];
// for(let j=0;j<arr.length;j++){
//     newarr[j]=arr[j];
// }
// for(let i=0;i<arr.length-1;i++){
//     console.log(newarr[i])
// }

//Q   16
// let arr=[3,5,9,1,7];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>=0){
//         console.log("true");
//         break;
//     }else{
//         console.log("false");
//     }
// }

//Q 17


// let arr = [1, -2, 3, -4, 5, -6] ;
// let len=arr.length;
// let positive=0;
// let negative=0;
// for(let i=0;i<len;i++){
//     if(arr[i]>=0){
//         positive++
//     }else{
//         negative++
//     }
// }
// console.log(positive);
// console.log(negative)



//Q 18

// let arr = [10, 20, 30, 40, 50]
// let len=arr.length
// let i;
// for(i=0;i<len;i=i+2){
//     console.log(arr[i])
// }



//Q   19
// let arr = [1, 2, 3, 4, 5]
// let len=arr.length;
// let i;
// for(i=0;i<len;i++){
//     if(arr[i]<arr[i+1]){
//         console.log("true")
//         break;
//     }else{
//         console.log("false")
//     }
// }


//Q  20
// let arr = [80, 30, 70, 50, 20];
// let len=arr.length;
// let i,j;
// let temp;
// for(j=0;j<len-1;j++){
// for(i=0;i<len-1-j;i++){
//     if(arr[i]>arr[i+1]){
//     temp=arr[i];
//      arr[i]=arr[i+1];
//      arr[i+1]=temp;
//     }
// }
// }let min=arr[0];
// let max=arr[len-1];
// let difference=max-min;
// console.log(difference)

// my methode simple code
// let arr = [80, 30, 70, 50, 20];
//  let len=arr.length;
//  let maxelement=arr[0];
//  let minelement=arr[0]
//  let i;
// for(i=0;i<len;i++){
//     if(arr[i]>maxelement){
//         maxelement=arr[i]
//     }if(arr[i]<minelement){
//         minelement=arr[i]
//     }
// }
// let difference=maxelement-minelement;
// console.log(difference);



//Q 21
// let str="hello";
// let str1=str.toUpperCase()
// console.log(str1)

//Q22
// let str="Hello, World!"
// let lenn=str.length;
// console.log(lenn);
//without function
// let str="Hello, World!";
// let lenn=0;
// for(let i=0;str[i]!==undefined;i++){
//     lenn++;
    
// }console.log(lenn);






//Q 23
// let arr=["hello" ];
// let arr1=[" world"]
// let result=arr+arr1;
// console.log(result)


//with Function
// function concanstring(arr,arr1){
//     return arr+arr1;
// }
// let arr=["hello" ];
// let arr1=[" world"];
//  let result=concanstring(arr,arr1);

// console.log(result);


//Q  24
// let str="    hello       ";
// let str1=str.trim();
// console.log(str1);


//Q 25


// let input="Hello world, welcome to JavaScript!";
// let result=input.split(" ");
// console.log(result);



//Q  26
// let str=["codinggita"];
// let i;
// let a;
// let len =str.length;
// for(i=0;i<len;i++){
//     if(str[i]!=a){
//         console.log("true");
//     }else{
//         console.log("false")
//     }
// }

// Q 27
// let arr= "document.pdf";
// let str=arr.split(".");
// let result=str[str.length-1];
// console.log(result);


//Q 28
// function largestNumber(number1,number2){
//   return Math.max(number1,number2);
// }
// let number1 = 10;
// let number2 = 20;
// let largest=largestNumber(number1,number2);
// console.log(largest)

//29

// let nums = [2,7,11,15];
// let len =nums.length;
// let i,j;
// let target = 9;
// for(i=0;i<len;i++){
//     for(j=i+1;j<len;j++){
//         if(nums[i]+nums[j]==target){
//             console.log(i);
//             console.log(j);
//         }
//     }
// }

//Q 30
// let n=132456;
// let evensum=0;
// let oddsum=0;
// let digits=n.toString();
// for(let i=0;i<digits.length;i++){
//     let digit=parseInt(digits[i]);

// if(digit%2===0){
//     evensum=evensum+digit;
// }else{
//         oddsum=oddsum+digit;

// }
    
// }
// console.log("evensum",evensum);
// console.log("oddsum",oddsum);


//Using function
// function sumEvenOddDigits(n){
//   let evensum=0;
//   let oddsum=0;
//   let digits=n.toString();
//   for(let i=0;i<digits.length;i++){
//       digit=parseInt(digits[i]);
//   if(digit%2===0){
//       evensum+=digit;
//   }else{
//       oddsum+=digit;
//   }
//   }
//   console.log(evensum);
//      console.log(oddsum);
// }
// let n=132456;
// sumEvenOddDigits(n);

//Q 31  
// let  str="hello";
// let times=3;
// let repeatedstr=str.repeat(times);
// console.log(repeatedstr);

//without function
// let str="hello";
// for(let i=0;i<3;i++){
// console.log(str)
// }



//Q  32
//let age=prompt("enter your age:");
// if(age<=13){
//    console.log("child"); 
// }else if(age>=13 &&age<=19){
//     console.log("Teenager");
// }else if(age>=20 &&age<=59){
//         console.log("Adult");

// }else if(age>=60){
//             console.log("Senior");

// }

//Q 33

// function isCenturyYear(year){
//   if( year % 100 === 0){
//       console.log("year is a century year");
//   }else {
//       console.log("it is not a century year");
//   }
// }
// let year=prompt("enter your number:");
// isCenturyYear(year)


// without function
// let year=prompt("enter your number:");
// let i;
// let len =year.length;
// for(i=0;i<len;i++){
//   if( year % 100 == 0){
//       console.log("year is a century year");
//       break;
//   }else {
//       console.log("it is not a century year");
//       break; 
//   }
// }

//Q  34
// let arr=[10, 20, 30, 40, 50];
// let len=arr.length;
//   console.log(arr[0])  
//   console.log(arr[len-1]) 

//With function
// function printFirstandLast(arr){
//   let len=arr.length;
//     console.log(arr[0])  
//     console.log(arr[len-1])
//     }
//     let arr=[10, 20, 30, 40, 50];
//    printFirstandLast(arr)

//Q  35
// let n=5;
// for(let i=n;i>=1;i--){
//     let row="";
//     for(let j=1;j<=i;j++){
//         row=row+"*";
//     }
//     console.log(row);
// }



//Q  36

// let  n=5;
// for(let i=1;i<=n;i++){
//      let row="";
//     for(let j=1;j<=n-i;j++){
// row =row+(" ");
//     }
// for(let k=1;k<=(2*i-1);k++){
//   row =row+ ("*");
// }
// console.log(row)
// }


//Q 37
// let arr=[5, 7, 7, 8, 8, 10];
// let arr1=[];
// let target=8;
// let len =arr.length;
// for(let i=0;i<len;i++){
//     if(arr[i]==target){
//         arr1.push(i);
//     }
// }console.log(arr1)


//Q 38
// let celcius=0;
// let fahrenhite=((celcius*9/5)+32);
// console.log(fahrenhite);




//Q  40
// let arr=[];
// let s=1;
// let e=5;
// for(let i=s;i<=e;i++){
//     arr.push(i)
// }console.log(arr)






// let num1=parseInt(prompt("enter your first number:"));
// let num2=parseInt(prompt("enter your second number:"));
// let operaters=(prompt("enter your(+,-,*,/)"));
// let result;

// switch(operaters){
//     case'+':
//         result=num1+num2;
//         break;
//         case'-':
//             result=num1-num2;
//             break;
//             case'*':
//                 result=num1*num2;
//                 break;
//                 case'/':
//                     if(num2==0){
//                         result="! Error";
                        
//                     }else{
//                         result=num1/num2;
//                     }
//                     break;
//                     default:
//                     result="invalid operator";
//                 }
//                 console.log("the result is:",result)







//                 let num=parseInt(prompt("enter your number between 1to7:"));

//                 let result;
//                 switch (num){
//                     case 1:
//                         result="Sunday"
//                         break;
//                         case 2:
//                         result="monday"
//                         break;
//                         case 3:
//                         result="tuesday"
//                         break;
//                         default:
//                         result("invalid numbers");
//                 }
//                 console.log("the day is: ",result);




// console.log("Choosee an option");
// console.log("1. Check even or odd");
// console.log("2.Exit");
// let choice=prompt("enter your no.");
// switch (choice){
//     case '1':
//         let num=parseInt(prompt("Enter your no:"));
//         if(num%2==0){
//             result="even";
//         }else{
//             result="odd";
//         }
//         break;
//         case'2':
//             result=("Exiting the program");
//             break;
//             default:
//             result:("Invalid number! please select one or two");
            
// }
// console.log(result);

// let num=parseInt(prompt("enter a no:"));
// let choice=prompt("enter a choice\n1.square\n2.cube\n3.square root\n4.exit\n");
// switch (choice){
//     case'1':
//         result=num*num;
//         break;
//         case'2':
//     result=num*num*num;
//     break;
//     case'3':
//     result=Math.sqrt(num);
//     break;
        
// }

// console.log(result)

































































































