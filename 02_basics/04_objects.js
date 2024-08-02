// const tinderUser = new Object()  // this is a singleton object
const tinderUser = {}               // this is not a singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// syntax: Object.assign(target, source)
// const obj3 = Object.assign({}, obj1, obj2, obj4)      //It returns a modified target object. An empty object is also given in the parameter as a target object.

const obj3 = {...obj1, ...obj2}            // using spread operator to combine the objects.
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));      // This will give an array of the keys of the object. IT'S IMPORTANT
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));   // This gives an array, with it's key and value pair in a sub array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //To check if an object has a property


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course  
// this extracts the value from the object. By this, we can access tha value without using dot operation and by directly writing the key name. 
// We can also call the key value by other name, by writing it after the colon. 

// console.log(courseInstructor); 
console.log(instructor);
 
// {                              // thiis is a json. It is also an object. It is usually a response of an API
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[                                  // we can also get an array of objects as an API response.
    {},
    {},
    {}
]

