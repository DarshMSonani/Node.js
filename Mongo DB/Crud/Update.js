const dbConnect = require("./connection/connection");

const updateData = async () => {

    let data = await dbConnect();

    let result = await data.updateOne(
        { name: "10 Pro" }, {
        $set: { name: "10 pro" }
    }
    )

    console.log(result);
};

updateData();