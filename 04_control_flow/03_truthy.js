const userEmail = [];
if(userEmail){
    console.log("Got useremail");
}
else{
    console.log("User do not have email");
}

// falsy values
// false,"",0,undefined,null,BigInt 0n, NaN

// truthy values
// "0" , 1 , true, []  , {}, " ", function(){}

const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}
else{
    console.log("Object is not empty");
}

// Nullish Colescing Operator

// let val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
// val1 = undefined ?? 12 ?? 18;



// console.log(val1);

// Ternary operator
const iceCream = 80;
iceCream < 100 ? console.log("We will buy ice-cream"): console.log("We can not afford to buy ice-cream");


