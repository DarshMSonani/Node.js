// setImmediate( () => {
//     console.log("Hello")
// })

const myFunc = (a) => {
    console.log(`Hello ${a}`);
}

const id = setImmediate(myFunc,"Ram");

clearImmediate(id);