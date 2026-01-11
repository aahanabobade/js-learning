console.log(this)

var user = {
    firstName: "aahana",
    courseCount :4,
    getcourseCount : function(){
        console.log("line 7", this)
        function sayhello(){
            console.log("hello")
            console.log("line 10", this)
        }
        sayhello()
    }
}

user.getcourseCount();

