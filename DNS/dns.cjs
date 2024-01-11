// Domain Name System

const { error } = require("console");
const dns = require("dns");

// dns.lookup("geekyshows.com", (error, address, family) => {
//     if(error) throw error;
//     console.log(address);
//     console.log(family);
// });

dns.resolve("geekyshow.com", "MX", /*NS = Serner Name, MX = Mail Exchange */ (error, records) => {
    if(error) throw error;
    console.log(records);
});