// for-in loops
// used to iterate over objects, arrays

const myObj = {
    js: "javascript",
    cpp: "C++",
    py:"python",
    rb: "ruby"
}

for (const key in myObj) {
//   console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ["js","cpp","python","ruby"];
for (const key in programming) {
//   console.log(key); // prints the indexes of the array 
//   console.log(programming[key]); // prints the element of the array
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// for (const key in map) {
//   console.log(key);
// } // we can iterate over map's keys using for-in loop