1  //hello World
// console.log("hello world");
2 // sum to num
// let a=5;
// let b=5;
// sum=a+b;
// console.log(a+b);
3 // largest of two num:

// var arr=[2,8,5];
// var largest=arr[0];
// for(i=0;i<=arr.length;i++){
// if(arr[i]>largest){
//     largest=arr[i]
// }
// }
// console.log(largest);



// function Max(num1,num2,num3){
//     console.log(Math.max(num1,num2,num3));
// }
// Max(2,5,9);


4  // even or odd 
//without function
// for(i=2;i<=20;i++){
// if(i%2==0)
//    let i=22;
// console.log(i);
// }
 //with function
// function iseven(num){
//     if(num%2==0){
//         console.log("even");
//     }else{
//         console.log("odd")
//     }
// } iseven(5);

5// factorial
//with function
//    function factorial(num){
//    let c= prompt("enter your num.");
//     let factorial=1;
//     for(i=2;i<=c;i++){
//        factorial=factorial*i;
 //   }
// }console.log(factorial);//     //let b= prompt("enter your no.")



//without function
// let b=prompt("enter your number:");
// let factorial=1;
// for(i=2;i<=b;i++){
//    factorial=factorial*i;
// }console.log(factorial);



6// reverse string
//with function
// function rever(string){
// var a= string.split('').reverse().join('');
// console.log(a);
// }
// rever("565845455");
//without function
// let number="abcdefghijklmnopqrstu";
// let result=number.toString().split('').reverse().join('');
// console.log(result);

7  //Palindrome
//with function
//  function palindrome(string){
// let a= string.split('').reverse().join('');
//    if(string==a){
//       console.log("true");
//    }else{
//       console.log("false")
//    }
// }palindrome("JEEVAN");

8  //sum of digits
//with function
// function sumofDigit(num){
//      let numstr=num.toString();
//    let sum=0;
//    for(let digit of numstr){
//       sum+=parseInt(digit);
//    }
//    return sum;
// }
// console.log(sumofDigit(738));


//without function
// let number=558468;
// let sum=0;
// while(number!=0){
//    sum=sum+number%10;
//    number=(number-number%10)/10;

// }
// console.log(sum);

9 //prime no.
//let num=9;
// let count=0;
// for(i=2;i<num;i++){
//    if(num%i==0){
//       count=1;
//       break;
//    }}if(count==0){
//       console.log("Prime");
//    }else{
//       console.log("not prime");
//       }
 10  // fibbonacci seqence
  //  let a=0;
  //  let b=1;
  //  let c=0;
  //  let level=10;
  //  for(i=0;i<level;i++){
  //             c=a+b;
  //  console.log(c);
  //  a=b;
  //  b=c;
  //  }


  11// swaping of two number without using 3rd variable
  
   
  // let a=5;
  // let b=10;
  // let temp=0;
  // temp=a;
  // a=b;
  // b=temp;
  // console.log(a,b);
  12   //swaping of two Number
  // let a=5;
  // let b=8;
  // let c= 0;
  // c=a;
  // a=b;
  // b=c;
  // console.log(a,b);

  13// leap year
  // let year=2005;
  // if((year%4==0&&year%400==0)){
  //   console.log("leap")
  // }else{
  //   console.log("not leap")
  // }




  14 //simple calculator
  // let a=4;
  // let b=5;
  // let sign=prompt("enter your sign");
  // if(sign=="+"){
  //   console.log(a+b);
  // }else if(sign=="-"){
  //   console.log(a-b);
  // }else if(sign=="*"){
  //   console.log(a*b);
  //   }else if(sign=="/"){
  //     console.log(a/b);
  //   }

  15// sum of array element

  // let arr=[2,8,5,4,1,9];
  // let sum=0;
  // for(i=0;i<arr.length;i++){
  //   sum=sum+arr[i];
  
  // }
  // console.log(sum);
  16  //largest element in array
  // let array=[5,8,9,5,6,4];
  // let a= array.sort();
  // console.log(a[a.length-1]);

  17  //string length


  // let str="sgfvnh54b";
  // let a=str.split('');
  // console.log(a.length);

  18// string reverse
  // let str="abcd";
  // let a=str.split('').reverse().join('');
  // console.log(a);

  19//GCD
  // let a=36;
  // let b=24;
  // let gcd=0;
  // for(i=0;i<a&&i<b;i++){
  //   if(a%i==00&&b%i==0){
  //     gcd=i;
  //   }
  // }console.log(gcd);
  
  //let a=36;
  // let b=24;
  // let gcd=0;
  // for(i=0;i<a&&i<b;i++){
  //   if(a%i==0&&b%i==0){
  //     gcd=i;
  //   }
  // }console.log(gcd);

  // 20//lcm
  // let a=36;
  // let b=24;
  // let num1=a;
  // let num2=b;
  // while(a!=b){
  //  if(a>b){
  //   a=a-b;
  //  }else{
  //   b=b-a;
  //  }
  // }console.log((num1*num2)/a);


  21 //ASCII value of "A"
// var ch="A";
// var asciivalue=ch.charCodeAt(0);
// console.log("The ascii valueof"+ch+"is"+asciivalue); 
// var ch="A";
// var asciivalue=ch.charCodeAt(0);
// console.log("The ascii value of"+ch+"is"+asciivalue);


22// celcius to fahrenhite 
// let celcius=0;
// let fahrenhite=((celcius*9/5)+32);
// console.log(fahrenhite);
// let celcius=0;
// let fahrenhiete=((9/5*celcius)+32);
// console.log(fahrenhiete);
23//fahrenhite to celcius
// let fahrenhite=52;
// let celcius=((fahrenhite-32)*5/9);
// console.log(celcius);
// let  fahrenhiete=0;
// let celcius=((fahrenhiete-32)*5/9) ;
// console.log(celcius);


24//sum of 1stN natural number
// let n=5;
// console.log(((n)*(n+1))/2);
// let n=5;
// console.log((n)*(n+1)/2);

25//check vowel or consonent
// let str =prompt("enter your character");
// if(str=='a'||str=='e'||str=='i'||str=='o'||str=='u'||str=='A'||str=='E'||str=='I'||str=='O'||str=='U'){
//   console.log("character is vowel");
// }else{
//   console.log("consonent");
// }

26//check alphabet, digit, or special charcter
// let ch= prompt("enter your character");
// if((ch>='a'&&ch<='z')||(ch>='A'&&ch<='Z')){
//   console.log({ch} alphabet);
// }else if(ch>'0'&&ch<'9'){
//   console.log({ch}  digit);
// }else{
//   console.log({ch}  special );
// }
// let ch="5";
// let digit;
// if((ch>='a'&&ch<='z')||(ch>='A'&&ch<='Z')){
//   console.log(ch,alphbet);
// }else if(ch>'0'&&ch<'9'){
//   console.log(ch,digit);
// }else{
//   console.log(ch,acter);
// }

27//count the number of digits in an integer
// let str="899852985";
// let count=0;
// let a=str.split('').length;
// for(i=0;i<a;i++){
//   count=count+1;
// }console.log(count);



28// Reverse a string
// let  str="abcd"
// let a=str.split('').reverse().join('');
// console.log(a);

29// check the alphabetical order of Two strings
// let str1="cat";
// let str2="banana";
// if(str1<str2){
//   console.log("The string are in a alphabetical order");
//   }else{
//     console.log("The string are in a  not alphabetical order");
 
//   }

30///calculate the power of a number
// let base=prompt("Enter the base :")
// let exp=prompt("Enter the Exponent :")
// let a=Math.pow(base,exp)
// console.log("The ",+base+" to the power ",+exp+" is ",+a);
// let base=prompt("enter your base: ");
// let exp=prompt("enter your exp: ");
// let a=Math.pow(base.exp);
// console.log("The",+base+" to the power"+exp+"is",+a) ;

31//prime number between two number
// for(let num=2;num<=100;num++){
//   let isPrime=true;
//   for(let i=2;i*i<=num;i++){
//     if (num%i===0){
//       isPrime=false;
//       break;
//     }
//   }if(isPrime){
//     console.log(num);
//   }
// }
// for(let num=2;num<=100;num++){
//   let isPrime=true;
//   for(let i=2;i*i<=num;i++){
//     if(num%i===0){
//       isPrime=false;
//       break;
//     }
//   }if(isPrime){
//     console.log(num);
//   }
// }

32// Armstorang number
// let a=152;
// let cube=0;
// let num=0;
// let sum=0;
// let ori=a;
// while(a>0){
//   num=a%10
//   cube=(num*num*num);
//   sum= sum+cube;
//   a=parseInt(a/10);
//   }
//   if(sum==ori){
//     console.log("armstorng")
//   }else {
//     console.log(" not armstorng")
//   }
// let a=prompt("enter a no.");
// let cube=0;
// let num=0;
// let sum=0;
// let ori=a;
// while(a>0){
//   num=a%10;
//   cube=(num*num*num);
//   sum=sum+cube;
//   a=parseInt(a/10);
// }if(sum==ori){
//   console.log("armstorng");
// }else{
//   console.log("not armstrong")
// }

33//average number in an array
// let arr=[1,2,3,4,5];
// let sum=0;
// for(i=0;i<arr.length;i++){
//   sum=sum+arr[i];
// }average=sum/(arr.length);
// console.log(sum);
// console.log(average);
// let arr=[1,2,3,6,5,4,7];
// let sum=0;
// for(i=0;i<arr.length;i++){
//   sum=sum+arr[i];
// }average= sum/(arr.length);
// console.log(sum);
// console.log(average);

34//second largest no. in array
// let array=[1,2,3,4,5];
// let a=array.sort();
// console.log(a[a.length-2]);

35// perfect square
// let number=81;
// let a=4**(1/2);
// if(a*a==number){
//   console.log("perfect square");
// }else{
//   console.log("not perfect square");
// }
// let number=9;
// let a=4**(1/2);
// if(a*a==number){
//   console.log ("perfect square");
// }else{
//   console.log (" not perfect square");

// }




