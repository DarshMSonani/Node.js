const RESPONSE = {};

RESPONSE.success = function (
    res,
    message = null,
    data = null,
    statusCode = 200
) {
    var response = {}
    response.success = true;
    if (message != null) {
        console.log("messege :>>", message);
        response.message = message;
    }
    if (data != null) {
        response.data = data;
    }

    return res.status(statusCode).send(response);
};

RESPONSE.error = function (
    res,
    error = null,
    statusCode = 400
) {
    var response = {};
    response.success = false;

    if (error != null) {
        console.log("error :>>", error);
        response.message = error;
    }
    return res.status(statusCode).send(response);
}

module.exports = RESPONSE;