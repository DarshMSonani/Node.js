// const myFunc =  () => {
//     console.log("Hello Ram");
// }
// const timerId = setTimeout(myFunc, 0);

// clearTimeout(timerId);


// const a =  () => {
//     console.log("Hello Ram");
// }

// const b =  setInterval(a, 0);

// setTimeout( () => {
//     clearInterval(b)
// },5000);

// setTimeout( () => {
//     console.log("Ram1234");
// },2000);

// for (let i = 0; i < 100; i++) {
//     console.log("Hello ");
// }

let counnter = 0;

const myFunc = () => {
    console.log("Hello Ram!");
    counnter += 1;

    if(counnter === 5) {
        console.log("Done");
        clearInterval(timeId);
    };
};

const timeId = setInterval(myFunc,1000);