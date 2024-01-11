// Post Api We need To provide options in url

const createTodo = async (todo) => {

    let options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(todo),
    }
    const p = await fetch("https://jsonplaceholder.typicode.com/posts", options)
    const response = await p.json();
    return response
}

const getTodo = async (id) => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
    let r = await response.json();
    return r
}

const mainFunc = async () => {
    let todo = {
        title: "Ram",
        body: "Ramm",
        userId: 101
    }
    let todor = await createTodo(todo);
    console.log(todor);
    console.log(await getTodo(5));
};

mainFunc();