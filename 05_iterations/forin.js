// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++FOR IN LOOP++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {      //for (const key in object)
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}
/*
output will be:
0
1
2
3
4

*/

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);         // Map is also not iteratable like this
// }
