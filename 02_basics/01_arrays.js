// array

const myArr = [0, 1, 2, 3, 4, 5]              // Array is also an object with many methods
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)           // adds an element to the last
// myArr.push(7)
// myArr.pop()            // removes an element from the last

// myArr.unshift(9)      // it adds an element at the starting of the array
// myArr.shift()         // removes the first element from the array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()        // converts the array into a string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)       // It gives the portion of index from [1, 3) (means includes 1 but not 3). It does not change the original array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)    // It gives the portion of index from [1,3] but also changes the original array, by removing the spliced portion from the array
console.log("C ", myArr);
console.log(myn2);
