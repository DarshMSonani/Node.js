const axios = require("axios");
const { response } = require("express");

const axiosClient = axios.create();

// Get Request

function getRequest(URL, params) {
    axios.default.params = params
    return axiosClient
        .get(`${URL}`)
        .then((response) => {
            return { response, data: response.data.data, }
        }).catch((err) => {
            return { response: err.response?.data }
        });
}

// Post Request

function postRequest(URL, payload) {
    return axiosClient
        .post(`${URL}`, payload)
        .then((response) => {
            // console.log(response);
            // console.log('response :>> ', response);
            return { response, data: response.data.data }
        })
        .catch((err) => {
            // console.log('err :>> ', err.response?.data);
            return { response: err.response?.data }
        })
}

module.exports = {
    getRequest,
    postRequest
}