var myMap = new Map();

myMap.set(1, "uno")
myMap.set(2, "dos")
myMap.set(3, "tres")


console.log(myMap)


//access val

for(let key of myMap.keys()){
    console.log(key)
    
}

for(let value of myMap.values()){
    console.log(value)
    
}

for(let [key,value] of myMap){
    console.log(`key is ${key} and value is ${value}`);
    
}

myMap.forEach((value) => console.log(`${value}`))  //gives value always

myMap.delete(2)
console.log(myMap)
