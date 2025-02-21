// some more array methods

let dcHeros = ["superman" , "batman" , "hack"];
let marvelHeros = ["ironman" , "spiderman" , "thor"];

// dcHeros.push(marvelHeros); // pushes the marvel-arr into dc-arr as an array element
// console.log(dcHeros);

// let mergeHeros = dcHeros.concat(marvelHeros); // concatenates the marvel-arr into dc-arr
// console.log(mergeHeros);

let mergeHeros = [...dcHeros , ...marvelHeros]; // does the same thing as concat but using spread operator(...)
console.log(mergeHeros);


let newArr = [0 , 1 , [2 , 3] , [4,[5,6]]];
console.log(newArr.flat(Infinity));  // converts the nested arrays into a flat array


console.log(Array.isArray("Owais")); // returns the boolean wether its an array or not
let arr1 = Array.from("Owais"); // returns the new array with what is written inside from method
console.log(arr1);
let arr2 = Array.from({name:"Owais"}); // returns an empty array as we have to mention how to make array i.e, from keys or values
console.log(arr2);

let score1 = 20;
let score2 = 40;
let score3 = 50;

let arr3 = Array.of(score1 , score2 , score3); // returns the new array made from given variables
console.log(arr3);











