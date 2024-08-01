const score = 400
// console.log(score);

const balance = new Number(100)  // this creates an object of number type.
// console.log(balance);

// Every object(created using new keyword) has a prototype which has many functions that can be used on the object.
// console.log(balance.toString().length);  // the number is converted to string and the string properties can be applied to it.
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); //it returns a STRING which gives a precise value upto the given number of digits, starting from the LEFT of the number, baaki values round off ho jayegi

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));  // ye comma laga dega numbers k beech m taki achche se samaajh sake

// Number datatype also has some properties attached to it which can also be accessed using dot operator

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);               // Math is also an object which has many properties.
// console.log(Math.abs(-4));       // changes sign from -ve to +ve
// console.log(Math.round(4.6));    // to round off
// console.log(Math.ceil(4.2));     // gives next integer
// console.log(Math.floor(4.9));    // gives previous integer
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());    // will give a random value between 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
