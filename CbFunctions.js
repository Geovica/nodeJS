
console.log("User 1 mades an Request")
setTimeout(()=>callBack(),5000)

console.log("User 2 mades an Request")
setTimeout(()=>callBack(),5000)

console.log("User 3 mades an Request")
setTimeout(()=>callBack(),5000)


const callBack = () => {
    console.log("query the databse and delivered in 5 seconds")
}


