const dbConnect = require("./connection/connection");

const deleteData = async () => {
    let data = await dbConnect();

    let result = await data.deleteOne({ name: "XS MAX" });
    console.log(result);

    if (result.acknowledged) {
        console.log("Deleted Sucessfully");
    }
};

deleteData();