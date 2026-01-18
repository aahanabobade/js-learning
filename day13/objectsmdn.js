//Nearly all objects in JavaScript are instances of Object; a typical object inherits properties (including methods) from Object.prototype

var User ={
    name:"",
    getUserName: function(){
        console.log(`User name is : ${this.name}`)
    }
}

var aahana = Object.create(User)
console.log(aahana)

aahana.name ="aahana"

aahana.getUserName()

var chinu = Object.create(User,{
    name:{value:"chinu"},
    courseCount:{value:3}
})

chinu.getUserName();