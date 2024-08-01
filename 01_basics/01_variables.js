const accountId = 12456 // It is a variable whose value cannot be changed
let accountEmail = "hy@bc.com"
var accountPassword = "123456"
accountCity = "Jaipur" // can be declared without a variable type but not preferred

let accountState; // ye undefined dikhayega if we log this

/*
prefer not to use var
because of the issue in block scope and variable scope
*/

console.log(accountId)
console.table([accountEmail, accountPassword, accountCity]);
