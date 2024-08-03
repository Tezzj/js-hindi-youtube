// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]


// syntax: for(const iterator of object){}  ye wala object alag h, js wala object nhi h
for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}
/* output:
Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
Each char is 
Each char is w
Each char is o
Each char is r
Each char is l
Each char is d
Each char is !
*/

// Maps

const map = new Map()       //Map is an object with many mmethods. It also holds the key value pairs and remembers the original insertion order of keys 
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")   // map will not store this as map stores unique values.


// console.log(map);

//for (const [key, value] of map) {
    // console.log(key)     It will give array of key and value pair, for each of them
//}    

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {    // This will not work as for of loop doesn't work on object, but works on map
//     console.log(key, ':-', value);
    
// }
