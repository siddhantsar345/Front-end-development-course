function myFunction() {
    console.log("Welcome to Apna College!")
    console.log("We are learning JS!")
}

myFunction();
 
function myMessage(msg){
    console.log(msg);
}
myMessage("Holla, this is siddhant");

function myNumbers(a,b) {
    console.log(a,b);
}
myNumbers(3,2);

function sum(x,y){
    s=x+y;
    return s;
}
let val=sum(3,4);
console.log(val);

//Arrow functions 

const arrowSum= (a,b) =>{
    return a+b;
};

let val1=arrowSum(3,4);
console.log(val1);

const arrowMul =(a,b) =>{
    console.log(a*b);
};

let val3=arrowMul(3,4);
console.log(val3);

const arrowDiv=(a,b) =>{
    return a/b;
}
let val2=arrowDiv(2,2);
console.log(val2);

const printHello=() =>{
    console.log("Hello World!")
}

printHello();