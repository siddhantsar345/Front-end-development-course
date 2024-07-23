let btn1= document.querySelector("#btn1");

// btn1.onclick= () =>{
//     console.log("btn1 was clicked");
//     let a=25;
//     a++;
//     console.log(a);
// }

// let sid=document.querySelector(".sid");

// sid.onclick=() =>{
//     console.log("The button was clicked");
//     let b=5;
//     b++;
//     console.log(b);
// }

// let div=document.querySelector("div");
// div.onmouseover=() =>{
//     console.log("You are inside div");
// };

// let btn2= document.querySelector("#btn2");

// btn2.onclick=(evnt) =>{
//     console.log(evnt);
//     console.log(evnt.type);
//     console.log(evnt.target);
//     console.log(evnt.clientX,evnt.clientY);
// }

// btn1.addEventListener("click",(evnt)=>{
//     console.log("button1 was clicked!-handler 1");
// });

// btn1.addEventListener("click",()=>{
//     console.log("button1 was clicked!-Handler 2");
// });
// // btn1.addEventListener("click",()=>{
// //     console.log("button1 was clicked!-Handler 3");
// // });
// btn1.addEventListener("click",()=>{
//     console.log("button1 was clicked!-Handler 4");
// });


// const handler3=() =>{
//     console.log("button1 was clicked!-Handler 3");
// };
// // btn1.addEventListener("click", handler3);


// //Practise question

let mode=document.querySelector("#btn3");
let body=document.querySelector("body");
let currmode= "light";
mode.addEventListener("click",() =>{
    if(currmode==="light"){
        currmode= "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currmode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currmode);
})