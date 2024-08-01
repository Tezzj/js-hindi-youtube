// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); true
// console.log("02" > 1); true


// Avoid below types of conversions. Clean code nhi h ye
console.log(null > 0);    
console.log(null == 0); // equality check and other comparisons work differently. Other comparisons convert null to 0.
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===  double equal(==) checks onlythe values but this checks the datatype also, along with the values.

console.log("2" === 2);
