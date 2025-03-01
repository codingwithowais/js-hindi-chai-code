// for of loop
// used to iterate over array, map, strings
//[{},{},{}],["","",""]

const arr = [1,2,3,4,5];
for (const item of arr) {
    // console.log(item);   
}
// can be used to iterate over strings
const greetings  = "Hello World";
for (const greets of greetings) {
    // console.log(`Each char is ${greets}`); 
}

// Maps
const map = new Map();
map.set("IN" , "India");
map.set("USA" , "United States of America");
map.set("Fr" , "France");
map.set("UK" , "United Kingdom");
// console.log(map);

for (const [key, value] of map) {
    // console.log(items);
    // console.log(key , "-->" , value);
}

const myObj = {
    game1: "NFS",
    game2:"Spiderman"
}
// for (const items of myObj) {
//     console.log(items);  
// }

// objects are not iteratable through for-of loop
