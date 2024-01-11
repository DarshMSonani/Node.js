/*
setTimeout(() => {
    console.log("Hacking Wifi... Please wait...");
}, 1000);

setTimeout(() => {
    console.log("Facthing Username And Passwored... Please Wait...");
}, 2000);

setTimeout(() => {
    console.log("Hacking Rahul's Facebook id... Please Wait...");
}, 3000);

setTimeout(() => {
    console.log("Username And Password Of Rahul (+91 xxxxx xxxxx) Was Fetched...");
}, 4000); */

// If Error Was Spotted But The Continue Execution

/*
try {
    setTimeout( () => {
            console.log(rahul);
    }, 100)
}
catch (error) {
    console.log(error); // You Can Write Anything Into Error 
} */


try {
   let a = prompt("Enter Your Age");
   if (a > 18) {
    throw new Error ("You Are Not Eligible To Enter This Site.");
   }
   else {
    console.log("Welcome The Site");
   }
} catch (error) {
    console.log(error);
}

