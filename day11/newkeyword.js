var User = function(firstName,courseCount){
    this.firstName= firstName;
    this.courseCount=courseCount;
    this.getCoursecount = function(){
        console.log(`Course count is:{this.courseCount}`)
    }
}

var aahana = new User("aahana",2)
console.log(aahana)