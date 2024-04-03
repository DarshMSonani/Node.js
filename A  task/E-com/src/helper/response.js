import getMessage from '../lang/en/messages.js';

const RESPONSE = {};

RESPONSE.success = function (
    res,
    messageCode = null,
    data = null,
    statusCode = 200
) {
    let response = {};
    response.success = true;
    response.message = getMessage(messageCode);
    if (data != null) {
        response.data = data;
    }
    return res.status(statusCode).send(response);
};
RESPONSE.error = function (
    res,
    messageCode = null,
    error = null,
    statusCode = 400,
) {
    let response = {};
    response.success = false;
    response.message = getMessage(messageCode);
    statusCode = messageCode == 9999 ? 500 : statusCode;

    if (error != null) {
        console.log('error :>> ', error);
        response.message = error;
    }
    return res.status(statusCode).send(response);
};

// exporting RESPONSE
export default RESPONSE;

// const RESPONSE = {};

// RESPONSE.success = function (
//     res,
//     messageCode = null,
//     message = null,
//     data = null,
//     statusCode = 200
// ) {
//     var response = {}
//     response.success = true;
//     response.message = getMessage(messageCode);
//     if (message != null) {
//         console.log("messege :>>", message);
//         response.message = message;
//     }
//     if (data != null) {
//         response.data = data;
//     }

//     return res.status(statusCode).send(response);
// };

// RESPONSE.error = function (
//     res,
//     messageCode,
//     error = null,
//     statusCode = 400
// ) {
//     var response = {};
//     response.success = false;

//     response.message = getMessage(messageCode);
//     statusCode = messageCode == 9999 ? 500 : statusCode;
//     if (error != null) {
//         console.log("error :>>", error);
//         response.message = error;
//     }
//     return res.status(statusCode).send(response);
// }

// export default RESPONSE;