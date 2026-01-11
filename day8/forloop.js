for(let i =0;i<=10;i++){
    console.log(i)
}

const myStates = ["Rajasthan","Sikkim","assam",1947,"punjab","haryana","gujrat","goa"];

for(let i = 0;i<myStates.length;i++){
    console.log(myStates[i])
}

for(let i = 0;i<myStates.length;i++){
    if(typeof myStates[i]!=="string")break;
    console.log(myStates[i])
}

for(let i = 0;i<myStates.length;i++){
    if(typeof myStates[i]!=="string")break;
    console.log(myStates[i])
}
