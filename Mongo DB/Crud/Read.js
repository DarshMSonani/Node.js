const dbConnect = require("./connection/connection");

// For Read Data From Collection

// dbConnect().then((res) => {
//     res.find({}).toArray().then((data) => {
//         console.log(data);
//     });
// });

const main = async () => {
    // console.log("Main Functoin Was Called");
    let data = await dbConnect();
    let result = await data.find({}).toArray()
};

main();

// Insert Data In mongodb