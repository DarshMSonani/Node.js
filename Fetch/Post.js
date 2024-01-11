const createTodo = async () => {
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            title: "Ram",
            body: "This is a test todo item for ram",
            userId: 3
        })
    };
    let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
    let response = await p.json(likes);
    return response;
};

const getTodo = async () => {
    let response = await fetch("https://unikwork.com/instagram/api/get_data.php");
    let r = await response.json();
    for (let i = 0; i < r.length; i++) {
        console.log("The User Id is: " + r[i]['id']);
        console.log("The Image Form User Is: " + r[i]["images"]);
        console.log("The Video From User Is: " + r[i]["videos"]);
        console.log("The Likes On The User Post Is: " + r[i]["likes"]);
        console.log(" ");

    }
    return r;
}
getTodo()
const maniFunc = async () => {
    // let todo = await createTodo();
    // console.log(todo);
    // console.log(await getTodo());
}

maniFunc();

// const createTodo = async () => {
//     let options = {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify({
//             title: "Ganesh",
//             body: "This is a test todo item for Ganesh",
//             userId: 4
//         })
//     };

//     let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
//     let response = await p.json();
//     return response;
// };

// const getTodo = async (id) => {
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
//     let r = await response.json();
//     return r;
// }

// const maniFunc = async () => {
//     let todo = await createTodo();
//     console.log(todo);
//     console.log(await getTodo(5));
// }

// maniFunc();