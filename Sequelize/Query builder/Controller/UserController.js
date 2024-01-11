const db = require("../Connection");

const User = db.User;

const addUser = async (req, res) => {

    let data = await User.create({name:"Ram", email:"Ram@ram.com"});

    let response = {
        data: "ok"
    }

    res.status(200).json(response)
};


const crudOperation = async (req, res) => {

    // Update
    // let data = await User.update({name:"Rammm"}, {
    //     where:{
    //         id:2
    //     }
    // })

    // Delete
    // let data = await User.destroy({
    //     where:{
    //         id:2
    //     }
    // });

    // Bulk
    // let data = await User.bulkCreate([
    //     {name:"Hello",email:"Hello@gmail.com"},
    //     {name:"Hello1",email:"Hello@gmail.com"},
    //     {name:"Hello2",email:"Hello@gmail.com"},
    //     {name:"Hello3",email:"Hello@gmail.com"},
    //     {name:"Hello4",email:"Hello@gmail.com"},
    //     {name:"Hello5",email:"Hello@gmail.com"},
    //     {name:"Hello6",email:"Hello@gmail.com"}
    // ])

    // findAll

    let data = await User.findAll({});

    let response = {
        data: "ok",
        data1 : data
    }

    res.status(200).json(response)
}

module.exports = {
    addUser,
    crudOperation
}