// Arrow functions and this keyword

const user = {
    username:"Owais",
    price: 99,
    welcomeText: function(){
        console.log(`Welcome! ${this.username}, to our plateform`);
        console.log(this);
        
    }
}
// user.welcomeText();
// user.username =  "John";
// user.welcomeText();
// we come to know about that 'this' refers to the current context of an object

// console.log(this); // here this is refering to the current context of global object which is an empty object

// function chai(){
//     const username = "Owais";
//     // console.log(this); // here(normal functions) 'this' is not refering to the current context of global object
//     // console.log(this.username); // output-->undefined
// }

// arrow function
const chai = ()=>{
    const username = "owais"; 
    console.log(this); // here(arrow functions) 'this' refers to the curr context of global object
    console.log(this.username); // output --> undefined
}



// chai();

// const addTwo = (num1 , num2)=>{
//     return num1 + num2;
// } 

// const addTwo = (num1 , num2) => num1 + num2; // when we return in 1 line we can implicitly return without using '{}' but may use '()'[not necessarily]

// const addTwo = (num1 , num2) => (num1 + num2); // as we have not used '()' here, its our choice, but once we use '{}' , we have to explicitly write 'return'

// const addTwo = (num1 , num2) => ({username:"Owais"}); // objects are always returned using '()'.
console.log(addTwo(5 , 2));
