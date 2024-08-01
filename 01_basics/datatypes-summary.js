// Data can be broadly categorised into primitive and non primitive types based on how the data is stored and accesed from the memory

//  Primitive : they are call by value type
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')  // its return type is also symbol

console.log(id === anotherId);  // output will be false

// const bigNumber = 3456543576654356754n    last me n lagane se bigint ban jata h



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];  // this is an array

let myObj = {              // This is an object (curly braces k andar wale ko object kehte h)
    name: "hitesh",          // object k andar koi se bhi datatypes ho skte h like number, string, array, function, or even some other object
    age: 22,
}

const myFunction = function(){    // function cam also be treated as a variable in js
    console.log("Hello world");
}

console.log(typeof anotherId);     // typeof is used to determine the datatype of the value

// https://262.ecma-international.org/5.1/#sec-11.4.3

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes (inka return type waise object hi hota hai)
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/


/*
There are basically two types of memories: stack and heap.
All primitive datatypes are stored in stack memory and non primitive are stored in heap memory.
*/

let myName = "tejanshu"
let ytName = myName       // ytName m myName ki copy di jaati h. So any change in ytName will not affect myName.

ytName = "tezz"

console.log(myName) // output is tejanshu
console.log(ytName) // output is tezz

let userOne = {
    email: "abc@abc.com"
    upi: "user@ybl"
}

let userTwo = userOne     // userTwo m userOne ka reference(address) copy hua h so userTwo m change krenge to wo userOne m bhi ho jayega
userTwo.email = "def@abc.com"


console.log(userOne.email)   // values of object can be accessed using dot function    // output is def@abc.com
console.log(userTwo.email)  // output is def@abc.com















