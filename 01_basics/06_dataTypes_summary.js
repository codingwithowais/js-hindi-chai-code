// Primitive Data Types

// 7 => Number, String, Boolean, null, undefined, Symbol, BigInt

// Symbol data type
 let mySymbol = Symbol("abc");
//  console.log(typeof mySymbol);
 


// Non-Primitive Data Types or Reference Data Types
// 3 => Array, Object, function

let myArr = [5 , "owais" , true, null, undefined];

let myObj = {
    name: "Owais",
    email: "owais@google.com",
    salary: 400000
}

const myFunction = function(){
    console.log("Owais");
}
// myFunction();

// console.log(typeof myArr);
// console.log(typeof myObj);
// console.log(typeof myFunction);

// All non-primitive data types have object return type except function
// function has object function return type



// ++++++++++++++++++++++++++++++++

// Stack and Heap Memory Allocation
// Stack ==> this memory is assigned to a variable by a copy of its value
//Heap ==> this memory is assigned to a variable by reference

// All the primitive types variables consumes stack memory
// All the non-primitive types variables consume heap memory

// Stack Allocation - Primitive data types
let firstName = "Owais";
let otherName  = firstName; // copy of firstName is assigned to otherName
firstName = "Ahmad";
console.log(firstName);
console.log(otherName);

// Heap Allocation - Non primitive or reference data types
let userOne = {
    name:"Owais",
    upi: "1234@ybl"
}
let userTwo = userOne; // userTwo is refering to userOne, not the copy of userOne is assigned
userTwo.name = "Ahmad";
console.log(userOne.name);
console.log(userTwo.name);






