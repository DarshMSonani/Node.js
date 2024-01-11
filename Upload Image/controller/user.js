const con = require("../connection/db.connection");

const index = (req, res) => {
    res.render("home")
};

const creatUser = function (req, res) {
    const name = req.body.name;
    const mob_no = req.body.mob_no;
    const image = req.file.filename;
    const password = req.body.password

    // console.log(name);
    // console.log(mob_no);
    // console.log(image);
    // console.log(password);
    // let sql = "INSERT INTO `image`(name, mob_no, image, mno) VALUES ('" + name + "','" + mob_no + "','" + image + "','" + password + "')"
    let sql = "INSERT INTO `image`(name, mob_no, image, password) VALUES ('" + name + "','" + mob_no + "','" + image + "','" + password + "')"
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
}

const print = function (req, res) {
    let sql = "SELECT * FROM `image` WHERE id = 4";

    con.query(sql, function (err, result) {
        if (err) {
            throw err;
        } else {
            res.render("print", { data: result });
        }
    });

}

module.exports = {
    index,
    creatUser,
    print
}