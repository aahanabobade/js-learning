//for of loop: used for arrays
const name = ["youtube","fb","amazon","insta","netflix","insta"]

for(const n of name){
    console.log(n)
}

//for in loop: used for objects
const symbol ={
    yt : "youtube",
    ig : "instagram",
    fb: "facebook",
    nt: "netflix"
}

for(const j in symbol){
    console.log(`key is ${j} and value is ${symbol[j]}`)
}