
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()    //This executes the function
// sayMyName      // This gives the reference of the function. It wont output anything

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){   // number1 and number2 are the parameters which accept the arguments

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)       // 3, 5 are arguments which are passed to the parameters of the function

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){          // username is a default parameter, just like in c++
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){        
// ... is a rest operator(it is also spread operator, but use depends upon the situation). We can pass multiple arguments in num1 and it will give an array of them.
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000)) 
//output is [500, 2000] as first two arguments will go to val1 and val2

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({               // We can also directly pass an object into the function argument
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
