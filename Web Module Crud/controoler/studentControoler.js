const studentModel = require("../model/student")

const creatStu = async (req, res) => {
    console.log(req.body);

    try {
        const { name, age, fees } = req.body
        const insert = new studentModel({
            name: name,
            age: age,
            fees: fees
        });

        // Saving Data Into DataBase
        const data = await insert.save();
        // console.log(data);
        res.redirect("/student")
    } catch (err) {
        console.log("The Err Of Insert Data Is " + err);
    }
}


const getAll = async (req, res) => {
    try {
        let data = await studentModel.find();

        res.render("index", { data }) // All Data Of Index Is Writen Heare || All Process Is Writen Heare
    } catch (err) {
        console.log("The Err Of Read Is " + err);
    }
};

const editStu = async (req, res) => {
    // console.log(req.params.id);
    try {
        const result = await studentModel.findById(req.params.id);
        res.render("edit", { data: result });
    } catch (err) {
        console.log("The Err Of Edit Page Is " + err);
    }
}

const updateStuById = async (req, res) => {
    try {
        // console.log(req.params.id);
        // console.log(req.body);
        const result = await studentModel.findByIdAndUpdate(req.params.id, req.body)
    } catch (err) {
        console.log("The Update Err Is " + err);
    }
    res.redirect("/student");
}

const deleteStuById = async (req, res) => {
    try {
        const result = await studentModel.findByIdAndDelete(req.params.id);
        res.redirect("/student");

    } catch (err) {
        console.log("The Delete Err Is " + err);
    }
}

module.exports = {
    getAll,
    creatStu,
    editStu,
    updateStuById,
    deleteStuById
}