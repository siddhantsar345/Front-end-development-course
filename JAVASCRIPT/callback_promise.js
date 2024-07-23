//synchoronus programming

console.log("one");
console.log("two");
console.log("three");

//Asynchronous programming
 
console.log("one");
console.log("two");
setTimeout(() => {
    console.log("Hello");
}, 4000);// 4000 milliseconds
console.log("three");
console.log("four");

//callback- synchronous programming

function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumcallback){
    sumcallback(a,b);
}

calculator(5,5,sum);
calculator(1,2,(a,b)=>{
    console.log(a*b)
});

calculator(5,5,(a,b)=>{
    console.log(a/b);
});

calculator(2,1,(a,b)=>{
    console.log(a-b);
});

//nesting-callback hell

function getdata(dataid,getnextdata){
    setTimeout(() => {
        console.log("data",dataid);
        if(getnextdata){
            getnextdata();
        }
    }, 2000); //2000ms =2s
}
getdata(1,()=>{
    console.log("Generating data 2....")
    getdata(2,()=>{
        console.log("Generating data 3....")
        getdata(3,()=>{
            console.log("Generating data 4....")
            getdata(4);
        });
    });
});


//Promise

let promise=new Promise((resolve,reject)=>{
    console.log("This is a promise");
    reject("Some error is present in the code");
});

function getdata(dataid,getnextdata){   
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data",dataid);
            resolve("success");
            if(getnextdata){
                getnextdata();
            }
        }, 5000); 
    });   
}


const getpromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("This is a promise");
        resolve("success");
        reject("This is an error");
    });
};
let promises= getpromise();
promises.then((res)=>{
    console.log("Promise fulfilled!",res)
});
promises.catch((err)=>{
    console.log("Promise rejected!",err);
});


// Promise chaining

function asyncfun1(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Data1")
            resolve("success!")
        }, 3000);
    });
}

function asyncfun2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Data2")
            resolve("success!")
        }, 4000);
    });
}

console.log("fetching the data1......")
asyncfun1().then((res)=>{
    console.log("fetching the data2......")
asyncfun2().then((res)=>{});
});

function getdata(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data",dataid);
        }, 3000);
    });
}

getdata(1)
.then((res)=>{
    return getdata(2);
})
.then((res)=>{
    return getdata(3);
})
.then((res)=>{
    return(res);
});