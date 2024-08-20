const descripter = Object.getOwnPropertyDescriptor(Math, "PI") 
/* 

The Object.getOwnPropertyDescriptor() method in JavaScript is used to retrieve the descriptor object for a property on a given object.
The descriptor object provides details about that property, such as whether it is writable, enumerable, and configurable.

This method returns a property descriptor for the given property of the specified object.

It takes two arguments:
The object you want to inspect (Math in this case).
The name of the property you want to get the descriptor for ("PI" in this case).

*/

// console.log(descripter);
/*
OUTPUT:
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}

*/

// console.log(Math.PI);
// Math.PI = 5               // We cannot change the value of PI as it's property is hard-coded to prevent it from getting changed
// console.log(Math.PI);          


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {     // We can change the properties of user-created objects.
    //writable: false,
    //enumerable: false    // This will not allow name to be iterated in the loop.
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {    // Iterated through the object
    //Object.entries(chai) would return: [["username", "chai"], ["score", 25]]
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}
