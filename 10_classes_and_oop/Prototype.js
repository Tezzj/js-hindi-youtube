// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){                   // We can also insert user defined methods or properties in the global object prototype.
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++IMPORTANT+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Prototype is not a property of array instances; it's a property of constructor functions (like Array, Object, or createUser).

The prototype property exists on functions because JavaScript uses it to implement inheritance. When you create an object using a constructor
function with new, JavaScript sets up the new object's internal __proto__ link to the constructor function's prototype.

This allows all instances created by the function to share methods and properties defined on the prototype.
*/

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport        // We can access the properties of another object by using __proto__ . It is called prototypal inheritance

Teacher.__proto__ = User            

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)    // TeachingSupport object inherits the properties of Teacher object

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
