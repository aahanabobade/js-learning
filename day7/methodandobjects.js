//define object

var user = {
    firstName : "aahana",
    lastName: "Bobade",
    role : "admin",
    logincount: 23,
    fbsignin : true,
    courselist: [],
    buycourse: function(coursename){        //defining method in object
        this.courselist.push(coursename);

    },
    getcoursecount:function(){
        return `${this.firstName} is enrolled in total of ${this.courselist.length} courses`
    }
};

var courselist = true;
console.log(user.getcoursecount())
user.buycourse("python")
console.log(user.getcoursecount())
