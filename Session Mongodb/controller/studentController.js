// Creat A Variable In Session
const session_example = (req, res) => {
    req.session.device = "Mobile" // . For Defining (Creating) The Variable || Set The Variable In Session
    if (req.session.count) { // . For Set And Access
        req.session.count++;
    }
    else {
        req.session.count = 1;
    };
    res.send(`count : ${req.session.count}`);
};

const get_session_data = (req, res) => {
    if (req.session.device) {
        res.send(`Device: ${req.session.device} And Count Is ${req.session.count}`)
    }
    else {
        res.send("Session Data Device Not Found");
    }
}


module.exports = {
    session_example,
    get_session_data
};