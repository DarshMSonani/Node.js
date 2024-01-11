let db = require("../Connection");

const User = db.User;

const addUser = async (req, res) => {

    // Insert
    // let data = await User.create({name:"Shyam", email:"Shyam@god.com"});


    let response = {
        data: "ok"
    };

    res.status(200).json(response);
}

const crudOperation = async (req, res) => {

    // Insert Data

    // let data = await User.create({name:"Ram", email:"Ram@gmail.com", gender:"male"});
    // console.log(data.id); // For Insert id


    // Update || First Variabel is What Update And Second parametre For Where update
    //    let data = await User.update({name:"Mohan", email: "Mohan@gmail.com"}, {
    //     where : {
    //         id:2
    //     }
    //    });

    // Delete || It take one parameter Where id
    // let data = await User.destroy({
    //     where: {
    //         id:2
    //     }
    // });

    // Truncate The All Page || It take One Parametre truncate
    // let data = await User.destroy( {
    //     truncate: true
    // })

    //  Insert In Bulk
    // let data = await User.bulkCreate([
    //     {name:"Shive",email:"first@gmail.com",gender:"male"},
    //     {name:"Ram",email:"first@gmail.com",gender:"male"},
    //     {name:"Hanuman",email:"first@gmail.com",gender:"male"},
    //     {name:"Mohan",email:"first@gmail.com",gender:"male"},
    //     {name:"Shyam",email:"first@gmail.com",gender:"male"},
    //     {name:"Krishna",email:"first@gmail.com",gender:"male"},
    //     {name:"Ganesyh",email:"first@gmail.com",gender:"male"},
    //     {name:"Krishna",email:"first@gmail.com",gender:"male"}
    // ]);

    // Find
    let data = await User.findAll({});

    let response = {
        data: "ok",
        data1: data
    };

    res.status(200).json(response);
}


module.exports = {
    addUser,
    crudOperation
}