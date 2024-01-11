// AJAX = Asycronence Java Script And Xml

let p = fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");

p.then((response) => {
    return response.json();
}).then((value) => {
    console.log(value);
});



// Value is Contain Two Code Status And Ok
// We Can Use Only One Method For Read The Data Like Json, Text, blob. arrayBuffer

// Two Type Of Header

// 1: Response Header = Response Header Was Responsed By The Fetch
// 2: request Header = Request Header Was request By User For Print Selected data || Give Some Additional request Like Token etc