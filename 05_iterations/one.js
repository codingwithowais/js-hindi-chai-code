// for loops

// for(let index = 0; index <= 10; index++){
//     const element = index;
//     if(element === 5){
//         console.log("5 is the best number");
//         // continue;
//         break;
//     }
//     console.log(element);
// }

for(let i = 1; i<=10; i++){
    console.log("Table of " + i);
    for(let j = 1; j<=10; j++){
        console.log(i + "*" +  j + "=" + i*j);
    }
}