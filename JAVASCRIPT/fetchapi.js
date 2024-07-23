const URL="https://cat-fact.herokuapp.com/facts";
const factpara=document.querySelector("#fact");
const btn=document.querySelector("#btn");

//async await

const getFacts=async ()=>{
    console.log("fetching data......");
    let response=await fetch(URL); 
    console.log(response);
    console.log(response.status);
    let data=await response.json();
    console.log(data);
    factpara.innerText= data[1].text;
}
//promise chaining

function getFactss(){
    fetch(URL).then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        factpara.innerText=data[2].text;
    })
}

btn.addEventListener("click",getFactss);