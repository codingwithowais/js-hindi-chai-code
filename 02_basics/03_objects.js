// 2 types of objects

// singleton and object literals


let student = {
    name:"Owais",
    age: 18,
    marks: 64,
    email:"owais@google.com"
} // this is not a singleton object

// different methods to access key-values

// console.log(student.name);
// console.log(student.age);
// console.log(student["age"]);

// we can use symbols as our key
let keySymbol = Symbol("empKey");
let employee = {
    name:"Owais",
    [keySymbol]: 51451,
    email:"owais@microsoft.com",
    salary: 6000000,
    address: "Lucknow",
    isLoggedIn: false,
    myFn: function(){
        console.log(`Employee name is ${this.name}`);
        
    }
}
// console.log(employee);
// console.log(employee[keySymbol]);

// Object.freeze(employee); // this method is used to restrict any changes in the values of the object
// employee.email = "owais@fb.com"
// console.log(employee.myFn());

// some more Object methods
// console.log(Object.keys(employee));
// console.log(Object.values(employee));
// console.log(Object.entries(employee));
// console.log(employee.hasOwnProperty("isLoggedIn"));

// how to concat two or more objects,
let newObj = Object.assign({} , student, employee); // first obj is target, other ones are source
// console.log(newObj);
// // we can concat by using spread operator too
// let spreadObj = {...student , ...employee};
// console.log(spreadObj);

// How to declare a singleton obj

const myObj = new Object();
myObj.title = "Iqoo";
myObj.model = "z7pro";
myObj.display = "Amoled";
myObj.ram = 8;
myObj.disk = 256;

console.log(myObj);

// destructuring of objects in js

const {name, email , salary} = employee;
console.log(salary);



















