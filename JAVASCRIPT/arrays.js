let marks=[12,23,45,56,76];
console.log(marks);
console.log(marks.length);
marks[0]=56;
console.log(marks);

let heroes=["Thor", "Hulk"];
console.log(heroes[0]);
console.log(heroes[1]);
console.log(heroes.length);

heroes[0]="Siddhant";
console.log(heroes[0]);

let hero=["Sid","Medhu"];
for(let indx=0;indx<hero.length;indx++){
    console.log(hero[indx]);
}
for(let hero of heroes){    
    console.log(hero);
}

let cities=["Odisha","Bhubaneswar"];
for(let city of cities){
    console.log(city.toUpperCase());
}

//Question 1

let mark=[85,97,44,37,76,60];
let sum=0;
sum=mark[0]+mark[1]+mark[2]+mark[3]+mark[4]+mark[5];
for(let val of mark){
    sum += val; // sum=sum+val;
}

let avg= sum/mark.length;
console.log(`avg marks of the class= ${avg}`);

//Question 2

let price=[250,645,300,900,50];
let i=0;
for(let val of price){  
    console.log(`value at index ${i}= ${val}`);
    let offer= val/10;
    price[i]= price[i]- offer;
    console.log(`Value after offer =${price[i]}`)
    i++;  
}

let fooditems=["Potato", "Tomato", "Biscuit"];
fooditems.push("Chips","burger","Pasta");

console.log(fooditems);

let deletedItem=fooditems.pop();
console.log(fooditems);
console.log("Deleted Item:-",deletedItem)
console.log(fooditems.toString());

let marvel_heros=["Ironman","Batman","Spiderman"];
let dc_heros=["superman","Thor","Hulk"];

let heroosss=marvel_heros.concat(dc_heros);
console.log(heroosss);

marvel_heros.unshift("antman");
console.log(marvel_heros);

let val=marvel_heros.shift();
console.log("Deleted:-",val);


let profile=["ESIM","ESIM IOT","EUICC","UICC","SIM"];
let platform=profile.slice(0,3);
console.log("The tech that we use for platform is:-",platform);

//replace the array
let array1=[1,2,3,4,5,6,7,8];
let finalArray=array1.splice(2,2,101,102); //(add,remove,replace)
console.log("The final array is ",array1);

//adding the elements into the array
array1.splice(2,0,102);
console.log("The final array is ",array1);

//Removing the elements from the array
array1.splice(3,1);
console.log("The final array is ",array1);