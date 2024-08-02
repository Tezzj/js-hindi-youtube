const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)     // it pushes the given argument into the array. It can take any type of argument
//ouptut is => ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)       // It combines two or more arrays and returns a NEW ARRAY without modifying the existing arrays

// console.log(allHeros);
//ouptut is => ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

const all_new_heros = [...marvel_heros, ...dc_heros]    // this is spread function(like glass girke spread ho jata h). It spreads all the elements in an array.It is similar to concat

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  //flat returns a new array with all sub-array elements concatenated into it recursively upto specified depth
// infinity means we will flat the array to infinite depth
console.log(real_another_array);
// output => [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))         // will convert the given input of ant type into an array
console.log(Array.from({name: "hitesh"})) // interesting // ye confuse ho jayega ki kiska array bnau keys ka ya values ka. So it will return an empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));   // it returns a new array from a set of elements
