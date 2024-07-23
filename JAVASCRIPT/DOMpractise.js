let h2=document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText= h2.innerText+ " from Apna college"; //Concatenate

let divs=document.querySelectorAll(".box");
let idx=1;
for(div of divs){
    divs.innerText=`New unique value ${idx}`;
    idx++;
}
divs[0].innerText="New unique value 1";
divs[1].innerText="New unique value 2";
divs[2].innerText="New unique value 3";