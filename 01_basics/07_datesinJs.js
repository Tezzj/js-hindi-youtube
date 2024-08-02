// Dates

let myDate = new Date()                       // Date is also an object with many methods
// console.log(myDate.toString());            // toString is an in built function which can be used for any object
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")               // when we input in the form of dd-mm-yy, then the month count starts from 1
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString()); 

let myTimeStamp = Date.now()                        // gives the time passed from jan 1, 1970 till now in miliseconds

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);         // Month starts from 0
console.log(newDate.getDay());               // Day starts from 1 starting from monday

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {                     // In this method, we can define an object also
    weekday: "long",
    
})

