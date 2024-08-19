function multipleBy5(num){  

    return num*5
}

multipleBy5.power = 2     // we can make a function behave like an object also as function is also an object in a way(prototypal inheritance)

console.log(multipleBy5(5));
console.log(multipleBy5.power);

console.log(multipleBy5.prototype);   
// It gives an empty paranthesis {}. It stores the context of a property(prototype has internal methods and propeties for a function also).
// If 'this' is used in a funtion, it's context will be there in the prototype.

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){    // Ye usi function k prototype m add krega us property ko. It can't be used by any other function
    
    this.score++        // 'this' means jis. It gives the current context of the function that calls it.
}
createUser.prototype.printMe = function(){       // we can add some properties defined by us in the prototype of the given thing.
    console.log(`price is ${this.score}`);
}

// Here createUser will be a CONSTRUCTOR function, as it is used to construct instances of this function like chai and tea

const chai = new createUser("chai", 25)   
const tea = new createUser("tea", 250)

chai.printMe()     // If we use this without using new keyword, then it will give error that printMe is undefined. So we have to crate a new instance to transfer
                   // the properties to the variable(chai in this case)


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to
properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit
return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value
(object, array, function, etc.), the newly created object is returned.

*/
