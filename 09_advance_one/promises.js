
// PROMISE CREATION
const promiseOne = new Promise(function(resolve, reject){  // Promise is an object
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()          // This is used to resolve the promise. Iski wajah se hi resolve then se connect hoga or then wala chalega
    }, 1000)
})

//PROMISE CONSUME
promiseOne.then(function(){           // then will do a thing if promise is resolved(it is connected to resolve). It takes a callback function in it's parameter
    console.log("Promise consumed");  //The function will return the values of the function which are created in the promise block
})



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})



const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})   // We can pass a parameter in resolve which will be passed to 'then' method
    }, 1000)
})

promiseThree.then(function(user){   // the cllback in then USUALLY takes an object as a parameter. The value from resolve will be returned here
    console.log(user);
})
//output: {username: "Chai", email: "chai@example.com"}


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')     // This will connect to the catch method(similar to then), if the promise is not resolved
        }
    }, 1000)
})


/*  
const username = promiseFour.then((user) => {    If we make an expression, then it will not work
    console.log(user);
    return user.username
})
*/

//+++++++++++++++++++++++++++++++++++++ USEFUL SYNTAX FOR DATABASE CONNECTION +++++++++++++++++++++++++++++++++++++++
 promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {    // previous wale then se jo value return hogi, wahi isme ayegi
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected")) 
// finally is like the default case, which will work in all cases, whether promise is resolved or rejected




// ASYNC AWAIT
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){ 
    /*The async keyword before a function declaration makes the function asynchronous. This means that the function will always return a promise, and
    within the function, you can use the await keyword to PAUSE THE EXECUTION until a promise is settled (either resolved or rejected).*/
    try {
        const response = await promiseFive   
        console.log(response);
    } catch (error) {            // The function cannot handle errors if we don't use try catch block
        console.log(error);
    }
    /*
    The await keyword is used to wait for the promiseFive promise to either resolve or reject. When await is used, it pauses the execution
    of the function until the promise settles:
    
     If the promise is resolved: The value returned by the promise is stored in the variable response.
     
     If the promise is rejected: The control is transferred to the catch block.
    
    */
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
/*
The fetch function inherently returns a Promise that resolves with a Response object representing the HTTP response. This means
you don’t need to create your own Promise to handle the result of the fetch call.
*/
.then((response) => {       //fetch will return a response object
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.
