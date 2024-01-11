// console.log("Hello");
// console.log("My Name Is Ram");

// Creat A New Promise
// Promise Function Takes Two Arrguments Resolve, Reject It Is Complesurry

// let promise = new Promise( function(resolve, reject) {
//     console.log("Hello From Promise");
//     resolve(56);
// });

// console.log(promise);

// Fatch Google Home Page ==> consol.log(google.com hompage done)
// Fetch Data From The Data api

// ===========================
// ===========================
// ===========================
// ===========================
// ===========================
// ===========================

// Then() & Catch() Method


// let p = new Promise(function (resolve, reject) {
//     console.log("Promise Is Pending");
//     setTimeout(() => {
//         // console.log("Promise Fullfiled");
//         resolve(true);
//         // reject(new Error("I Am An Error"));
//     }, 5000);
// });

// let p1 = new Promise(function (resolve, reject) {
//     console.log("Promise Is Pending");
//     setTimeout(() => {
//         // console.log("Promise Rejected");
//         // resolve(true);
//         reject(new Error("I Am An Error"));
//     }, 5000);
// });

// Method


// To Get the Value

// p.then((value) => {
//     console.log(value);
// });

// p1.then( (value) => {
//     console.log(value);
// });

// To Catch The Error

// p1.catch((error) => {
//     console.log("Some Error In P1");
// })
 
// Both At A Time
// p1.then( (value) => {
//     console.log(value);
// }, (error) => {
//     console.log("Some Error In p1");
// });


// Promise Chaining

// let p = new Promise( function(resolve, reject){
//     setTimeout(() => {
//         console.log("Resolved After 3 Sec");
//         resolve(true);
//     }, 3000);
// });

// p.then( (value) => {
//     console.log(value);
//     let p1 = new Promise( function(resolve, reject) {
//         setTimeout(() => {
//             resolve("Promise P1");
//         }, 2000); 
//     });
//     return p1;
// }).then((value) => {
//     console.log("We Are Done" + " " + value);
//     return 2;
// }).then( (value) => {
//     console.log(`Value is ${value}`);
// });


// Quick Question Solution

// let loadScript = function(src) {

//     return new Promise( function(resolve, reject) {
//         let script = document.createElement("script");
//         script.src = src;
//         document.body.appendChild(script);
        
//         script.onload = () => {
//             resolve("Resloved");
//         };
//         script.onerror = () => {
//             reject ("Rejected");
//         };
// }
// )};

// let p1 = loadScript("https://code.jquery.com/jquery-3.4.1.slim.min.js");

// p1.then( (value) => {
//     console.log(`${value} Script Loaded`);
//     return loadScript("https://code.jquery.com/jquery-3.4.1.slim.min.js")
// }).then( (value) => {
//     console.log('Second Load');
// })
// p1.catch( (error) => {
//     console.log("We Are Sorry But We Are Having Problems Loading This Script");
// })

// Atteching Hendlers To The Promise

let p = new Promise( function(resolve, reject) {
    setTimeout(() => {
        // alert("resolve");
        resolve(true)
    }, 2000);
})

p.then( () => {
    console.log("I am Resolved");
})

p.then( () => {
    console.log("I am also resolved");
})