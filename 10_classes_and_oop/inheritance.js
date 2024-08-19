class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{                          // similar to .toPrototype() method.   // It means Teacher inherits user class
    constructor(username, email, password){
        super(username)   
// super keyword passes the parameter to the parent class of the inherited class and does all the work of getting the current context, just like call would.
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")     // Teacher constructor cannot be invoked without new keyword.

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);     // used to check the instance of a class or object. Here, Teacher is an instance of the User
