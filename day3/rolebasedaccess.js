var user = "ok";

switch (user) {
    case "admin":
        console.log("full access");
        
        break;

    case "subadmin":
        console.log("50 access");

        
        break;

    case "testprep":
        console.log("30 access");
        
        break;
    case "user":
        console.log("10 access");
        
        break;

    default:
        console.log("trail user")
        break;
}