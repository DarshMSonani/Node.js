// setTimeout(() => {
//     console.log("Hello World")
// }, 1000);

// const myFunc = (pra) => {
//     console.log(`${pra} It Rocks`);
// };

// const id = setTimeout(myFunc, 2000, "Ram")

// clearTimeout(id);

const myFunc = (delay) => {
    console.log(`Hello After ${delay} seconds`)
}

setTimeout(myFunc,2000,"Five");
setTimeout(myFunc,5000,"ten");


