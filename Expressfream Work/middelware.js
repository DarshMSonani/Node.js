// Middleware

module.exports = reqFilter = (req, res, next) => {
    console.log("reqFilter");
    if (!req.query.age) {
        res.send("Please Provide Age");
    }
    else if (req.query.age < 18) {
        res.send("You Cannot Acces This Page");
    }
    else {
        next();
    }
}

// app.use(reqFilter);