//Prototypes

const student={                      //this is a object
    fullName:"Siddhant Sar",
    marks:98.8,  // These are the two properties
    printMarks: function(){
        console.log("marks: ",this.marks); //here this.marks is similar to that of student.marks, but as it is inside the object so we have called it as this.marks
    } //this is a function
}
console.log(student.printMarks());

const employee={
    calTax(){
        console.log("The tax rate is 10%");
    },
}; ///Employee is a prototype
const karanArjun1={
    salary:50000,
    calTax(){
        console.log("The tax rate is 20%"); // So if the object and the prototype method is same then the object method will be given more priority.
    },
}; // Karan arjun is an object
karanArjun1__proto__ = employee;

//Class

class Toyotacar{
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setbrand(brand){
        this.brandName=brand;
    }//the above three are the functions
}

let fortuner=new Toyotacar(); 
fortuner.setbrand("fortuner");
let lexus=new Toyotacar(); //these are the two objects which is inheriting the functions from toyotacar class
lexus.setbrand("lexus");

//constructor

class Toyotacar1{
    constructor(model,mileage){
        console.log("Creating a new object")
        this.model=model;
        this.mileage=mileage;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
}

let fortuner1=new Toyotacar1("fortuner1",10);
console.log(fortuner1); 
let lexus1=new Toyotacar1("lexus1",12);
console.log(lexus1); 

//Inheritance

class Parent{
    hello(){
        console.log("Hello!")
    }
}
class child extends Parent{}
let obj= new child();
console.log(obj);


class person{
    eat(){
        console.log("Eat");
    }
    sleep(){
        console.log("sleep");
    }
}

class Engineer extends person{
    work(){
        console.log("Solve the problems and build something great");
    }
}
let siddhantobj=new Engineer();
console.log(siddhantobj);

//super keyword

class person1{
    constructor(species,name){
        this.species=species;
        this.name=name;
    }
    eat(){
        console.log("Eat");
    }
}

class Engineer1 extends person1{
    constructor(species,name){
        super(species,name);
    }
    work(){
        super.eat();
        console.log("Solve the problems and build something great");
    }
}
let engobj=new Engineer1();