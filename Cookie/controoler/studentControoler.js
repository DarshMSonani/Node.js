const setCookie = (req, res) => {
    res.cookie("username", "Ram");
    res.cookie("cart", 5);
    // res.cookie("username", "Ram"), { maxAge: 10000 };
    res.send("Cookies Set")
}

const getCookie = (req, res) => {
    console.log(req.cookies);
    console.log(req.cookies.username);
    res.send("Cookies Get")
}

const deleteCookie = (req, res) => {
    res.clearCookie("username", "cart")
    res.send("Cookies Delete")
}

module.exports = {
    setCookie,
    getCookie,
    deleteCookie
}