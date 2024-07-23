async function hello(){
    console.log("hello");
}

function api(){
    return new Promise((resolve,repeat)=>{
        setTimeout(() => {
            console.log("weather data");
            resolve("success");
        }, 2000);
    });
}

async function getweatherdata(){
    await api();
    await api();
}


function getData(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data",dataid);
            resolve("success");
        }, 2000);
    });
}

async function getAlldata(){
    console.log("fetching data1.......");
    await getData(1);
    console.log("fetching data2.......");
    await getData(2);
    console.log("fetching data3.......");
    await getData(3);
    console.log("fetching data4.......");
    await getData(4);
    console.log("fetching data5.......");
    await getData(5);
    console.log("fetching data6.......");
    await getData(6);
}

//IIFE- this can be called only once.

(async function (){
    console.log("fetching data1.......");
    await getData(1);
    console.log("fetching data2.......");
    await getData(2);
    console.log("fetching data3.......");
    await getData(3);
    console.log("fetching data4.......");
    await getData(4);
    console.log("fetching data5.......");
    await getData(5);
    console.log("fetching data6.......");
    await getData(6);
})();