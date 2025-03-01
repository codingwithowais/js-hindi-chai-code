// reduce method of arrays

const myNums = [1,2,3];
// const newNum = myNums.reduce(function(acc,num){
//     return acc+num;
// }, 0);
// console.log(newNum);
const newNum = myNums.reduce((acc, num)=>acc+num , 0);
// console.log(newNum);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item)=>acc+item.price , 0);
console.log(priceToPay);

// acc stands for "accumulator" i.e stores the previous returned value from the call back

// reduce method is basically used to perform some operations on the values of array with the previously calculated results such as summation of all array elements



