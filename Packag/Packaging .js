const pdf = require("pdf-node");

const fs = require("fs");

const html = fs.readFileSync("Packaging.html", "utf-8");

const option = {
    format: "A3",
    orientation: "portrait",
    border: "10mm",
    header: {
        hight: "45mm",
        contents: '<div style= "text-align: center;">Author: Ram </div>',
    },
    footer: {
        hight: "28mm",
        contents: {
            first: "Cover page",
            2: "Second page",
            default: '<span style="color: #444;>{{page}}</span></span>{{pages}}</span>"',
            last: "Last Page"
        }
    }
};

const users = [
    {
        name: "Ram",
        age: "21",
    },
    {
        name: "Mohan",
        age:"26",
    },
    {
        name: "Ganesh",
        age : "29",
    },
];

const document = {
    html: html,
    data: {
        users: users,
    },
    path: "./output.pdf",
    type: "pdf",
};

pdf(document, options)
.create(document, option)
.then((res) => {
    console.log(res);;
})
.catch((error) => {
    console.log(error);
})
