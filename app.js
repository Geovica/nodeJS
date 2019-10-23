// const printstuff = stuff => {
//     console.log(stuff)
// }



// const mainFunction = (anotherFunction, value) => {
//     anotherFunction(value)
// }

// mainFunction(printstuff, 'helloworld');


////version two

const mainFunction = (anotherFunction, value) => {
    anotherFunction(value)
}


mainFunction(stuff=>{console.log(stuff)}, "this assignes value to the function")