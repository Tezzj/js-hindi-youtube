// two strings can be concatenated using + operator. 
// console.log("Home"+"work") // output => Homework     // But this way is old now

const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); output is => hitesh50 Value

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  
/*this use of back ticks(``) is called string interpolation. It uses placeholder(${}) in which we can give the
variable name(or method or perform any operation on variable) and it will display its value in o/p*/

const gameName = new String('Tejanshu')  // we made a string object

/*console.log(gameName)   
It's output will be:
String {'Tejanshu'}               // This is an object with the key: value pairs listed below
0: "T"
1: "e"
2: "j"
3: "a"
4: "n"
5: "s"
6: "h"
7: "u"
length: 8

[[Prototype]]: String                  // prototype has many methods which can be applied on the string
[[PrimitiveValue]]: "Tejanshu"

*/

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++IMPORTANT POINT+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
In JavaScript, strings are immutable, meaning that once a string is created, it cannot be changed. This is true whether you use a primitive string or
a String object.
The immutability of strings in JavaScript means that operations on strings always produce new strings rather than modifying existing ones.
*/


// console.log(gameName[0]); o/p=> T
// console.log(gameName.__proto__);  // this is the syntax to access the prototype


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) //It doesn’t change or overwrite the original string inside gameName, it returns a new string.
console.log(newString);  

const anotherString = gameName.slice(-8, 4) // ye string k end se slice krega due to - sign. It only happens in slice
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());   // it removes the spaces. It works on whitespace characters and line terminators

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) // it replaces the first argument with the second one in a given string

console.log(url.includes('sundar')) // it checks whether the given word is present or not

console.log(gameName.split('-'));  // it will split the string according to the given separator and will return an array of the separated parts of it.
