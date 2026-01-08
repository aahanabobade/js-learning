var countries = ["India","Japan"]

var countries1 = new Array ("india","rajasthan","Assam")

console.log(countries1[0])

console.log(countries.length) //gives length

countries1[0] = "Punjab"
console.log(countries1)  //replace 1st element of countries 1

var user = ["aahana" ,"aahana@gmail.com", 1,22,true];
console.log(user)

user.pop();
user.pop();
console.log(user)

user.unshift("aahanabobade")
console.log(user)

user.shift();
console.log(user)

console.log(user.indexOf("aahana"))

console.log(Array.from("aahana"));