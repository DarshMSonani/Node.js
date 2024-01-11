// Get Session Information
const get_session_info = (req, res) => {
    console.log(req.session);
    console.log(req.session.id);
    console.log(req.session.cookie.maxAge);
    console.log(req.session.cookie.originalMaxAge);
    console.log(req.sessionID);
    res.send("Seesion Info..");
};

// Delete The Session
const delete_session = (req, res) => {
    req.session.destroy(() => {
        console.log("Session destroyed..");
    });
    res.send("Session Deleted");
};

// Regenrate The Session
const regn_session = (req, res) => {
    req.session.regenerate(() => {
        console.log(`Seesion Regenrated is ${req.session.id}`);
    });
    res.send("Session Regenerate")
}

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
        res.send("Session Data Device Not Found")
    }
}

module.exports = {
    get_session_info,
    delete_session,
    regn_session,
    session_example,
    get_session_data
}