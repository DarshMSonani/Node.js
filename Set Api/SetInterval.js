// setInterval( () => {
//     console.log("Hello Ram");
// }, 1000)

const myFunc = (a) => {
    console.log(`Hello ${a}!`)
};

const id = setInterval(myFunc, 2000, "Ram");
 clearTimeout(id);