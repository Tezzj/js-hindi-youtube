const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {       // this function gives the total sum of all the values in an array
//     console.log(`acc: ${acc} and currval: ${currval}`);       // The value of accumulator is the returned sum of current + accumulator
//     return acc + currval
// }, 0) // 0 is igven as an initial value that accumulator takes.

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


// this is a shopping cart which is an array of objects. We have applied reduce method here, to get the total sum of the price
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

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
