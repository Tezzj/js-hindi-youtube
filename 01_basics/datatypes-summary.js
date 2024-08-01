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
