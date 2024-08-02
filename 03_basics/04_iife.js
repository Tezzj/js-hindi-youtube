// Immediately Invoked Function Expressions (IIFE)
// Sometimes, we can have problem from pollution of global scope, that is, tehy can interfere with the function. So, to prevent it, and invoke functions immediately, we use iffe

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();                              //semi colon is necessary to stop the function as the function, once invoked, doesn't stop as it doesn't know the context to stop

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

