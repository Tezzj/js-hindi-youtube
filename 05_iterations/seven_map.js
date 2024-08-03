const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})    // It is similar to filter function. It is a callback function
// It can't return values with condition like num > 4, Like that in filter function. Instead, it will return boolean values of all the array items

const newNums = myNumers
                .map((num) => num * 10 )  // This is called function chaining. Pehle function ka result pass hoga dusre function m
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);
