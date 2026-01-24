const aahana = {
    firstName : "aahana",
    lastname: "bobade",
    role:"admin",
    courseCount:3,
    getinfo: function(){
        console.log(`
            first name is ${this.firstName}
            last name is ${this.lastname}
            his role is ${this.role}
            and she is studying ${this.courseCount}
            `)
    }
}

const dj = {
    firstName:"chinu",
    lastname:"bobade",
    role: "subadmin",
    courseCount: 5,
    // getinfo: function(){
    //     console.log(`
    //         first name is ${this.firstName}
    //         last name is ${this.lastname}
    //         his role is ${this.role}
    //         and he is studying ${this.courseCount}
    //         `)
    // }
}

// dj.getinfo()

aahana.getinfo.bind(dj)(); //gives reference

getinfo //reference to method
getinfo()//calling that method

aahana.getinfo.call(dj); //directly calls