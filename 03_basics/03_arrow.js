const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);       // this keyword refers to the current context(object) which is accesssing the function. 
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);          // In node, this will give an empty object, as there is no context for global.



/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++IMPORTANT++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
If we do console.log(this) in browser, then it will give window as the global object.
Jab js ka engine browser k andar run hota h, then the global object is window, but in any runtime env., there will be no global object by default unless specified.
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++==++*/



// function chai(){
//     let username = "hitesh"
//     console.log(this)              // it will give a global object with many keys and values
//     console.log(this.username);    // this cannot be used in functions. It will give undefined
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {          // bas 'function' name ko hata dia or arrow laga diya
    let username = "hitesh"
   // console.log(this.username);    // It will give undefined
    console.log(this);         // It will output empty paranthesis
}


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++IMPORTANT++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
In regular functions, this refers to the global object when called in the global context.
In arrow functions, this is inherited from the enclosing scope and can appear as {} or an empty object in the global context due to differences in how the
environment represents this.

The differences in the outputs (global object vs. {}) are primarily due to the distinct ways this is handled and displayed in various environments and how
different types of functions (regular vs. arrow) treat this.
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++==++*/

// chai()

// const addTwo = (num1, num2) => {            // this is basic syntax of arrow function. 
//     return num1 + num2                      // curly braces m return likhna padta h
// }

// const addTwo = (num1, num2) =>  num1 + num2   // this is called implicit return. The function will return without writing return(in case the code is of 1 line)

// const addTwo = (num1, num2) => ( num1 + num2 )            //paranthesis m return nhi likhna padta. Used extensively in react 

const addTwo = (num1, num2) => ({username: "hitesh"})       // it will return an object


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
