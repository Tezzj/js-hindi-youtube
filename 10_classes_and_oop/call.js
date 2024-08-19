function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)  
    // call holds the reference of the called function. It accepts the execution context and the variable to be passed in the called function, abs parameters
    // call passes the current execution context to other function
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
