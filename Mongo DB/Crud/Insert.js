const dbConnect = require("./connection/connection");

const insert = async () => {

    const db = await dbConnect();

    const result = await db.insertOne(
        { name: "10 Pro", brand: "Realme", price: 200, category: "mobile" }
    );

    console.log(result);

    if (result.acknowledged) {
        console.log("Data Was Inserted Sucessfully");
    }
};

insert(); 