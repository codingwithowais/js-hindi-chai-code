// Strings in JS
const name = "Owais";

// Always use back ticks (template literals) to concat strings and variables
console.log(`My name is ${name}`);


// Another way to initialise string using constructor
const subject = new String("chai-aur-code");

console.log(subject.__proto__);
console.log(subject[2]);

// Some useful prototypes string methods
console.log(subject.length);
// substring,slice,trim,split,toUpperCase,toLowerCase,includes,charAt,indOf,replace, etc.
console.log(subject.substring(2 , 4)); // returns the substring from start ind to end-1 ind
console.log(subject.slice(-4 , -2)); // return the substring from start ind to end-1 ind and can take -ve indexes as well from the back


console.log(subject.trim()); // trim method used to remove the white spaces from the string

console.log(subject.split('-')); // split method is used to divde a string into many substrings on the basis of some character and store all the substrings in an array

console.log(subject.toUpperCase()); // convert string to uppercase
console.log(subject.toLowerCase()); // convert string to lowercase

console.log(subject.includes("chai")); // return true/false deciding wether "chai" is present or not
console.log(subject.charAt(2)); // returns the char at index 2
console.log(subject.indexOf('i')); // returns the index of first occurence of 'i' , 
console.log(subject.indexOf('z')); // returns -1 if not present


console.log(subject.replace('chai' , 'coffee'));// replace the substring with other string

// there are other important prototype methods as well but these were quite handy and useful in building a web app















