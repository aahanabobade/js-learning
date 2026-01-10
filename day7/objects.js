//define object

var user = {
    firstName : "aahana",
    lastName: "Bobade",
    role : "admin",
    logincount: 23,
    fbsignin : true,
};


console.log(user.firstName)

console.log(user["lastName"])

user.logincount=77          //modify value

console.log(user)

console.table(user)