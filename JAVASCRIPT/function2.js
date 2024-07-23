function myFunction(){
    console.log("Hello world!")
}
myFunction();

function sum(a,b){
    s=a+b;
    console.log("Before return:- ");
    return s;
    console.log("After Return:- ")
}

let val=sum(5,5);
console.log(val);

function myfunction(msg){
    console.log(msg);
}
myfunction("Holla, this is siddhant");

//Arrow functions

const arrowMultiply=(a,b) =>{
    console.log(a*b);
}

let val1=arrowMultiply(4,5);
console.log(val1);

const arrowAddition=(y,z) =>{
    console.log(y+z);
}

let val2=arrowAddition(4+5);
console.log(val2);

const printHolla=() =>{
    console.log("Print Holla!");
}
//Counting vowels in a string
 
function countingVowels(str){
    let count=0;
    for(const char of str){
        if(char === "a" || char==="e" || char==="i" || char==="o" || char==="u"){
            count++;
        }
    }
    console.log("The number of vowels in the string:-",count);
}
let val9=countingVowels("Siddhant");
console.log(val9);

const countingVow=(str) =>{
    let count=0;
    for(const char of str){
        if(char === "a" || char==="e" || char==="i" || char==="o" || char==="u"){
            count++;
        }
    }
    console.log("The number of vowels in the string:-",count);
}

let val10=countingVow("Medha");
console.log(val10);

//for each loop in array and call back function

let arr=[1,2,3,4,5];
let arr1=["Delhi","Mumbai","Hyderabad"];

arr.forEach((val,idx,arr) =>{
    console.log(val,idx,arr)
});
arr1.forEach((val,idx,arr1) =>{
        console.log(val.toUpperCase,idx,arr1);
    });

//Practise question 1

let n=[1,2,3,4,5,6,7];  
n.forEach((num)=>{
    console.log(num*num);
});   //Easiest way

let num1=[4,9,8];
let calcSquare=((num2)=>{
    console.log(num2*num2);
});

num1.forEach(calcSquare);      // A bit long 

//Maps

let arr3=[25,54,85];
let newArray=arr3.map((val)=>{
   return val*2;
});
console.log(newArray);


//Filter

let arr4=[2,3,4,55,6,7,10,8];
let evenArr=arr4.filter((val)=>{
    return val%2===0;
})
console.log(evenArr);

let arr5=[6,7,8,9,1,2,3];
let oddArray=arr5.filter((val)=>{
    return val%2!==0
});
console.log(oddArray);

//Reduce

let arr6=[1,2,3,4];
const output=arr6.reduce((res,curr) =>{
    return res+curr;
})

console.log(output); //calculating the sum of the 4 numbers.


let arr7=[5,7,1];
const largest=arr7.reduce((prev,curr)=>{
    return prev>curr ? prev: curr;
})

console.log(largest); // Printing the largest value in the array.

//Practise question 2

let arr8=[90,85,80,74,69,98,97,92,91,83];
let newArrayy= arr8.filter((val)=>{
    return val>90;
})
console.log(newArrayy);

//Practise question 3

let N=prompt("Enter the number:-");
let arr9=[];
for(let i=1;i<=N;i++){
    arr9[i-1]=i;
}
let calSum= arr9.reduce((res,curr)=>{
    return res+curr;
});
console.log(calSum);

let calProd= arr9.reduce((res,curr)=>{
    return res*curr;
});

console.log(calProd);