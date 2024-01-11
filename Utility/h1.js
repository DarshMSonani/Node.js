// let message = "Ram"
// function hello() {
//     message = "Ram1"
//     {
//         message = "Ram1"
//         console.log("Hello", message);
//     }
//     function hello2() {
//         console.log("Hello2 ", message);
//     }
//     return hello2();
// }

// hello();

// function returnF() {

//     const x = () => {
//         let a = 1
//         console.log('a1 :>> ', a);
//         const y = () => {
//             // a = 2
//             console.log('a2 :>> ', a);
//             const z = () => {
//                 // a = 3
//                 console.log('a3 :>> ', a);
//             }

//             z();
//         }
//         a = 999
//         y();
//     }

//     return x;
// }

// const x = returnF();
// x();

function human(name) {
    // const name = n;

    function sayHi() {
        console.log(`Hello I Am ${name}`);
    }

    function sayHowYouFeel() {
        sayHi();
        console.log(`${name} Is feeling good`);
    }

    sayHowYouFeel();
}

const a = human("Ram");
const b = human("Raja");