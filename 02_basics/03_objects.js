// singleton                                    // it is a unique object made by using constructor
// Object.create

// object literals                              //way to declare an object

const mySym = Symbol("key1")                   // how to declare a symbol


const JsUser = {
    name: "Hitesh",                           // the key is treated as a string behind the scenes
    "full name": "Hitesh Choudhary",          // this cannot be accessed using dot
    [mySym]: "mykey1",                        // bracket is required to use symbol datatype. Without it, it's type will be shown as a string 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])   // this is also a method to access the properties of an object. In this we have to explicitly specify the key as a string but using dot operator, it is not required
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])       // how to access a symbol

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)                  // by using freeze, the values of the object cannot be changed. 
JsUser.email = "hitesh@microsoft.com"     // If we try to change the values, it won't show an error, but it will not propagate the changes
// console.log(JsUser); 
/* output is:
{
   name: 'Hitesh', 
   'full name': 'Hitesh Choudhary', 
   age: 18, 
   location: 'Jaipur', 
   email: 'hitesh@chatgpt.com', 
   isLoggedIn: false
   lastLoginDays: (2) ['Monday', 'Saturday']
   [Symbol(key1)]: "mykey1"
}
*/

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());       //This will execute the method defined above
console.log(JsUser.greeting);         // This will not execute the function but return its reference
console.log(JsUser.greetingTwo());
