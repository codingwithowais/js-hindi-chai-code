// arrays are non primitive data types whose return type is object

let myArr = [0  , 1 , 2 , 3 , 4 , 5];
let newArr = new Array(0 , 1 , 2 , 3 , 4);

// some useful array methods

// myArr.push(9);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);
// myArr.unshift(6);
// console.log(myArr);
// myArr.shift();
// console.log(myArr);



let newArr1 = myArr.join(); // this converts the array into a string
// console.log(newArr1);
// console.log(myArr.concat(newArr));
// console.log(myArr);


console.log("A " ,  newArr1);
let arr1 = myArr.slice(2 , 4); // gives the copy of a portion of array from ind [2,3] to arr1
console.log("B " , myArr.join()); // original array is not modified
console.log(arr1);

let arr2 = myArr.splice(2 , 3); // gives the portion of the array from ind [2 , 4], not the copy, i.e portion is cut from the original array and stored in arr2
console.log("C " , myArr.join());
console.log(arr2);







