console.log("Hello World!");
window.console.log("Hello World 2!");    
console.dir(document.body);
console.log(document.body);

document.body.childNodes[3].innerText="Siddhant";


console.dir(document.body);

let button=document.getElementById("myID");
console.log(button);
console.dir(button);

let headings=document.getElementsByClassName("myclass");
console.dir(headings);
console.log(headings);

let paragraph=document.getElementsByTagName("p");
console.dir(paragraph);
console.log(paragraph);

let firstEl= document.querySelector("p");
console.dir(firstEl);

let allEl=document.querySelectorAll(".myclass"); //id=#, class=.
console.dir(allEl);