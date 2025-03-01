// for each loop

const coding = ["js", "ruby" , "python", "cpp"];
coding.forEach(function(val){
    // console.log(val);   
})
coding.forEach((val)=>{
    // console.log(val);   
})
function printName(val){
    // console.log(val);
}
coding.forEach(printName);

coding.forEach((item, index, arr)=>{
    // console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=>{
    // console.log(item.languageFileName);
})

// forEach method of an array iterates to all the items in the array one by one
// but call-back inside this method does not return anything


