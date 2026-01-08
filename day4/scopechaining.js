var name = "Aahana";

console.log("Line no 3 is ",name);

function sayName(){
    var name = "Chinu";
    console.log("Line no 7 is",name)

    sayname2();
    function sayname2(){
        var name = "Meo";
        console.log("line no 11", name)
    }
}

sayName();