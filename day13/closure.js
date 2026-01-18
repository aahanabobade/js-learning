function init(){
    var firstName = "aahana"

    function sayFirstname(){
        console.log(firstName)
    }
    return sayFirstname
}

var value = init()
value()



