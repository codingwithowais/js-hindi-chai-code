// functions

const testFunction = function(){
    console.log("o");
    console.log("w");
    console.log("a");
    console.log("i");
    console.log("s");
}
// testFunction();

// fn to add two numbers

const addTwoNums = function(num1  , num2){
    // console.log(num1 + num2);
    return num1  + num2
}
// addTwoNums(5 , 6);
// addTwoNums(5 , "6");
const result = addTwoNums(1 , 5);
// console.log(result);
// console.log(addTwoNums(87 , 6));
// console.log(addTwoNums(6)); // this gives NaN as the output

// Another way to declare function

function loginUserMessage(username = "sam"){
    // if(!username){
    //     return "Please enter a username"
    // }
    return `${username} has just logged in!`
}

// console.log(loginUserMessage("Owais"));
// console.log(loginUserMessage()); // this will give undefined as a username
// console.log(loginUserMessage());  // "sam" is the default value of username if not passed as an arguement
// console.log(loginUserMessage("Owais"));

// Passing objects and arrays in functions

const user = {
    username:"Owais",
    price: 99
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user);
// handleObject({
//     username:"John",
//     price: 199
// });
// handleObject({
//     username:"Tom"
// }); // this will give price undefined

const newArray = [100 , 200 , 400 , 500];
function handleArray(anyArray){
    return anyArray[3];
}
// console.log(handleArray(newArray));
// console.log(handleArray([20 , 30, 50, 70]));

function calcCartPrice(num1, num2 , ...num3){ // "..." this is rest operator
    return num3;
}
// console.log(calcCartPrice(5));
// console.log(calcCartPrice(20 , 30 , 40 , 50));
















