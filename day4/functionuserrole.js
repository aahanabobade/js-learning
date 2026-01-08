var getuserrole = function (name,role){
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            
            break;
        case "subadmin":
            return `${name} is subadmin`

        case "user":
            return `${name} is a user`
    
        default:
            return `${name} is a trail user`
            break;
    }
}

console.log(getuserrole("aahana","admin"))

