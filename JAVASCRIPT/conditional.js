let age=15;
if(age>18){
    console.log("You can vote!");
}
else{
    console.log("You are not eligible to cast a vote!");
}
let mode= "dark";
let color;
if(mode=="dark"){
    color="black";
}
if(mode=="light"){
    color="white";
}
console.log(color);


//odd and even

let num=10;
if(num%2==0){
    console.log("Even");
}
else{
    console.log("odd");
}

//else if

let age1=50;
if(age1<18){
    console.log("Not an adult");
}
else if(age1>=18 && age1<25){
    console.log("An adult");
}
else if(age1>=25 && age1<= 45){
    console.log("Man/Woman");
}
else{
    console.log("Senior Citizens");
}

//prompt and alert

alert("Hello!");
let number=prompt("Enter a number!"); 
console.log(number);
if(number%5==0){
    console.log("Multiple of 5")
}
else{
    console.log("Not a multiple of 5")
}

//Practise questions

let number1=prompt("Enter your scores:-");
let grade;
if(number1<=49 && number1>0){
    grade="F";
}
else if(number1>=50 && number1<59){
    grade="D";
}
else if(number1>=60 && number1<69){
    grade="C";
}
else if(number1>=70 && number1<89){
    grade="B";
}
else if(number1>=90 && number1<100){
    grade="A";
}
console.log("According to your scores, your grade was:",grade)