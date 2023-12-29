const accountID = 1243
let accountEmail="arpit@12.mail.com"
var accountPassword="1234"
accountCity="utterpradesh"
let accountState;

//accountId=2  ---> not allowed

accountEmail="at@mail"
accountPassword="4177"
accountCity="Mumbai"

/*prefer not to use var 
bacause of issue in block scope and functional scope
*/

console.log(accountID);
console.table([accountEmail,accountPassword,accountCity,accountState])