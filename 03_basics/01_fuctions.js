function sum(num1 ,num2){
    return num1 + num2;
}
console.log(sum(3,5));


function loginUserMessages(username){
    if (!username) {
        console.log("pleace, enter the usename");
        return
    }
    return `${username}, you are logged in`
}
// loginUserMessages("jhon")  //only execute not print value
 console.log(loginUserMessages("ravi"));