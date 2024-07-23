let a=1,b=2;
--b; //b=1
--a; //a=0
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
let c=6;    
c++; //c=7
let d=5;
d--; //d=4
console.log("c++ =", c);
console.log("d-- =", d);
console.log("--b =",b);
console.log("--a =", a);

//Assignment operator
let e=5,f=6,g=2,h=1,i=5;
e += 5; // e=e+5
f -= 4; // f=f-4
g *= 5; // g=g*5
h /= 2; // h=h/2 
i **= 1; //i= 1^5
console.log("e=",e);
console.log("f=",f);
console.log("g=",g);
console.log("h=",h);
console.log("i=",i);

//Comparison Operator
j=5;
k=6;
l=7;
m="6"; 
console.log("5==6,",j==k); //type conversion is done in ==
console.log("5==5,",j==l);
console.log("5!=6,",j!=k);
console.log("5===6,",j===m); //type conversion is not done in ===, so if at all the value coreespnding to the particular variable is in string format it will consider only the number and not the string
console.log("5!==6,",j!==m); 
console.log("5>=6",j>=k);
console.log("5<=6",j<=k);
console.log("5<6=",j<k);
console.log("5>6=",j>k);

//Logical operators
let n=6;
let o=5;

let cond1= n>o; //true
let cond2= n===6; //true
console.log("cond1 && cond2= ",cond1 && cond2); //logical AND

let p=2;
let q=4;
let cond3= p<q; //true
let cond4= p===q; //false
console.log("cond3 || cond4", cond3 || cond4); //logical OR

let r=1, s=2;
console.log("!(1>2)=",!(r>s)); // logical NOT // It will give true as false and false as true.

//Ternary operator

let age=50;
let result= age>=18? "Adult" : "Not an Adult";
console.log(result);

let price=40;    ;
let decision= price<=35? "Can buy lays": "Its too expensive!"
console.log(decision);