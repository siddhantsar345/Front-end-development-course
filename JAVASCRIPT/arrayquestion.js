let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
let revoke= companies.shift();
console.log("The first company that is removed from the array list is:-",revoke);
console.log(companies);

companies.push("Amazon");
console.log(companies);

let revoke1=companies.splice(1,1,"Ola");
console.log(companies);