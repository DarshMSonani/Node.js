const axios = require("axios");
const { json } = require("express");


// Using Promise

// axios.get("https://jsonplaceholder.typicode.com/posts")
//     .then((value) => {
//         console.log(value);
//     })

const get = async () => {
    const option = {
        name: "Ram",
        id: 1,
        title: "Ram",
        body: "Ram"
    }
    // Get Method
    const b = await axios.get("https://jsonplaceholder.typicode.com/posts")
    console.log(b.data);

    // Post Method
    const a = await axios.post("https://jsonplaceholder.typicode.com/posts", option)
    console.log(a.data);

}

get();
