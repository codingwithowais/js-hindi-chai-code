// Immediately Invoked Function Expression (IIFE)
// these are executed immediately at the time of declaration
// IIFES's are used to prevent functions from global variables
(function chai(){
    // named IIFE
    console.log("DB connected");
})();
// semicolon is used when we write two IIFE continously to separate them else shows error
((name)=>{
    // unnamed IIFE
    console.log('DB not connected', name);
})("Owais");