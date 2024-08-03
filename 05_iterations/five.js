const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){         // the function here is a callback function which is taking the array values as the parameter
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)                     // Idhar printMe function ka reference de rhe h usko execute nhi kara rhe

// coding.forEach( (item, index, arr)=> {      // we can print arr, index also along with the items in the array
//     console.log(item, index, arr);
// } )


// database se value array ki form m aati hai. Array m aai hui value object type ki hoti h generally
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {                // Here item is an object
    
    console.log(item.languageName);
} )
