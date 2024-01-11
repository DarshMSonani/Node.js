// For Table
const studentModel = require("../model/student");

const creatStu = async (req, res) => {
    // console.log(req.body);
    try {
        const { name, age, fees } = req.body
        const insert = new studentModel({
            name: name,
            age: age,
            fees: fees
        });

        // Saving The Data
        const data = await insert.save();
        console.log(data);
        res.redirect("/student")
    } catch (err) {
        console.log("The Err Of Insert Is " + err);
    }
}


const getAll = async (req, res) => {
    try {
        let result = await studentModel.find();
        res.render("index", { data: result });
    } catch (err) {
        console.log("The Err Of Get Data Is " + err);
    }
}

const editStu = async (req, res) => {
    // console.log(req.params.id);
    try {
        const result = await studentModel.findById(req.params.id);
        res.render("edit", { data: result });
    } catch (err) {
        console.log("The Err Of Edit Student Is " + err);
    }
}

const updateStuById = async (req, res) => {
    try {
        const result = await studentModel.findByIdAndUpdate(req.params.id, req.body);
        res.redirect("/student");
    } catch (err) {
        console.log("The Err Of Update Student Is " + err);
    }
}

const deleteStuById = async (req, res) => {
    try {
        const result = await studentModel.findByIdAndDelete(req.params.id);
        res.redirect("/student");
    } catch (err) {
        console.log("The Err Of Delete Student Is " + err);
    }
}


module.exports = {
    getAll,
    creatStu,
    editStu,
    updateStuById,
    deleteStuById
}