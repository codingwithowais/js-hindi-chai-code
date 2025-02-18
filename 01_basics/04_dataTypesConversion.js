
// Number to String Conversion

let score = 35;
let stringScore = String(score)
console.log(stringScore);

// String to Number
// This string when converted to number will have data type Number but value NaN
score = "35aabc";
let numericScore = Number(score);
console.log(numericScore);

// Boolean to Number
let isValid = true;
let isValidNumeric = Number(isValid);
console.log(isValidNumeric);

// Number to boolean
isValidNumeric = 0;
let isValidBoolean = Boolean(isValidNumeric);
console.log(isValidBoolean);

// String to Boolean
let name = "Owais";
let boolName = Boolean(name);
console.log(boolName);


name = "";
boolName = Boolean(name);
console.log(boolName);



