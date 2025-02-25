// scopes

if(true){
    let a  = 5;
    const b  = 9;
    var c = 300;
}
// console.log(a); // wont run as a,b and c are not in global scope
// console.log(b);
// console.log(c); // only this would run as 'c' is a var and var is a global variable

function one(){
    const username = "Owais"
        function two(){
            const website = "youtube";
            console.log(username);
        }
        // console.log(website); // this would give error as website is not in this scope
        two();
}
// one();


if(true){
    const username = "owais";
    if(username==="owais"){
        const website = "facebook";
        console.log(username);
    }
    // console.log(website); // reference error as website is not in this scope
}
// console.log(username); // reference error as username is not in this scope

// ++++++++++++++++++++++++++interesting+++++++++++++++++++++++++++++++
console.log(addOne(5)); // runs successfully as function's definition is not stored in any varibale.
function addOne(num1){
    return num1+1;
}

// console.log(addTwo(6)); // this gives reference error as addTwo is a variable in which function definition is assigned and addTwo has not been declared till now above in the code
const addTwo = function(num2){
    return num2+2;
}
console.log(addTwo(6)); // here it runs fine without any error






