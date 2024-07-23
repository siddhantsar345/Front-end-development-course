let data="secret information";
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("data =",data)  ;
    }
} //Parent class.

class Admin extends user{
    constructor(name,email){    
        super(name,email);
    }
    editdata(){
        data="some new value";
    }
} //child class is inherting the properties and methods of the parent class.

let student1=new user("Siddhant","siddhantsar345@gmail.com ");
let student2=new user("Medha","medha123@gmail.com");
let teacher1=new user("Manorama","Manorama123@gmail.com");

let admin1=new Admin("Siddhant","siddhant123@gmail.com");