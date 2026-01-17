var User = function(firstName,courseCount){
    this.firstName= firstName;
    this.courseCount=courseCount;
    this.getCoursecount = function(){
        console.log(`Course count is:${this.courseCount}`)
    }
}

User.prototype.getFirstname = function(){
    console.log(`your name is : ${this.firstName}`)
}

var aahana = new User("aahana",2)
aahana.getCoursecount()
aahana.getFirstname()


var chinu = new User("chinu",8)
chinu.getCoursecount()