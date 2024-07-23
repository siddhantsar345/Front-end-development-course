//For loop

for(let i=1;i<=5;i++){
    console.log("Apna college")
}

let sum=0
let n=5;
for(let i=1;i<=n;i++){
    sum=sum+i;
}
console.log("The sum of first five numbers are:-",sum);
console.log("The loop has ended");


//While loop

let m=1;
while(m<=5){
    console.log("Apna college");
    m++;
}


//do-while loop

let q=1;
do{
    console.log("Apna");
    q++;
}while(q<=5);

//for-of loop

let str="Siddhant Sar";
let size=0;
for(let i of str){
    console.log("Name:- ", i);
    size++;
}
console.log("String size:- ",size);

//for-in loop
let student={
    Name:"Siddhant",
    Class:8,
    Rollnumber:155,
};

for(let key in student){
    console.log("key= ",key, "value= ", student[key]); 
}

//q2
let userNumber= prompt("Enter your number:- ");
let gameNumber= 25;
while(gameNumber!=userNumber){
    userNumber=prompt("The number you've entered is incorrect and kindly try again:- ");
}
console.log("The above number is correct!");