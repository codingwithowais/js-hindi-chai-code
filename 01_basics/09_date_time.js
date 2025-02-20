// Date Object

const currDate = new Date(); // gives the current time
//these are some ways to represent date and time
console.log(currDate);
console.log(currDate.toString());
console.log(currDate.toDateString());
console.log(currDate.toLocaleString());

// we can set our custom date and time also
const myDate = new Date(1999 , 11 , 13);
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleDateString());


console.log(Date.now()); // gives the time in ms



// we can set the time and date of our choice also using set methods
myDate.setMonth(10);
myDate.setHours(15);
myDate.setMinutes(30);
myDate.setSeconds(45);
console.log(myDate.toDateString());








