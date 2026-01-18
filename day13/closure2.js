function doAdd(x){
    return function(y){
        return x+y
    }
}

var add5 = doAdd(4)
console.log( add5(5));

console.log( doAdd(6)(10));
