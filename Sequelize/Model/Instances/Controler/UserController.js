let db = require("../Connection");

const User = db.User;


let addUser = async (req, res) => {

    // let data = await User.build({name:"Tesl",email:"Home@ff.com"});

    // await data.save();

    let data = await User.create({name:"ram",email:"Home2@gmail.com"});

    // Update
    // data.name = "Mohan";
    // data.save();

    // Delete
    // data.destroy();

    // Reaload For Insert The Old Value Not New
    data.name = "Mohan";
    data.reload();


    let response = {
        data: "ok"
    }

    res.status(200).json(response);
}

module.exports = {
    addUser
} 
