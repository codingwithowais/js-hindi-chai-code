// comparisons of variables

// 2 > 5
// "ab" < "cd"
// 4 >= 2

// When types are different it tries to concatenate with string and number
console.log(2 + "5");
console.log("5" + 3 + 2);
console.log(3 + 2 + "5");

// null has value 0 for comparison and NaN for equality check
console.log(null > 2);
console.log(null == 2);
console.log(null <= 2);

console.log(+true);
console.log(+false);


// all these three logs will return false as even after conversion value is undefined
console.log(undefined > 2);
console.log(undefined == 2);
console.log(undefined <= 2);


// === operator 
// this eqaulity check first checks the data type of 2 operands
// If the data types are not same it returns false
// if data types found same,then check for the values and returns true or false as per the equality of values

console.log(null === 2); // this will give false;
console.log(3 === 1); // this will give false, as values are different but types are same
console.log("owais" === "owais"); // this will give true as types and values are same












