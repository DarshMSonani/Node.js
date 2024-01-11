const { add, sub, n} = require("./Import-Export/Export");

setTimeout( () => {
  console.log(add(5,5));
}, 6000);

setTimeout(() => {
    console.log(sub(10,5));
}, 3000);

console.log(n);