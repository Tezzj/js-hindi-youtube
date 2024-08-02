//var c = 300
//let a = 300 
if (true) {         // any variable inside the curly braces has a scope limited in that block only. You can't access that variable outside it's scope. It is called local variable.
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    //var c = 30   // The value of var c will remain 30 even outside of this scope, even if it has another value outside of the scope. That's why don't use var
}



 console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))    // This will get executed. As the function is declared separately

function addone(num){
    return num + 1
}



addTwo(5)                         // This will throw an error as addtwo is being accessed before its initialisation. Isko declare krne k saath saath variable m hold bhi kr diya
const addTwo = function(num){
    return num + 2
}
