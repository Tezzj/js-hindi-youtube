const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this          // It will return the current object. It is implicitly defined and we don't need to write this
}

/*
const userOne = User("hitesh", 12, true)
console.log(userOne)
OUTPUT:
    username = 'hitesh'
    loginCount = 12
    isLoggedIn = true
    
const userTwo = User("ChaiAurCode", 11, false)  // If we do not use new, then it will overwrite the userOne object
console.log(userOne)
OUTPUT:
    username = 'ChaiAurCode'
    loginCount = 11
    isLoggedIn = false

*/

/*
When new keyword is used:
Step 1: A new and empty object(instance) is created
Step 2: A constructor function is called because of the new keyword. And the arguments are given to it
Step 3: Arguments are injected into this keyword(gives current context of the new object)
Step 4: They are in the function

*/

const userOne = new User("hitesh", 12, true)        // new is a constructor function which will give a new instance(new copy) 
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);     //constructor property(about an object or function) gives the reference about itself
//console.log(userTwo);
