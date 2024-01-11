// Call Back function Take Another Function As Argument 
// And Also The Call ack Function Return In Main Function And The Call Back Must Be Call With Main Function

// function loadscript(src, callback) {
//     var script = document.createElement('script');
//     script.src = src;
//     script.onload = function () {
//         console.log("Script was Loaded With " + src);
//         callback(null, src);
//     }
//     script.onerror = function () {
//         console.log(`Error Loading Script ${src}`);
//         callback(new Error("Src Is Not Found"));
//     }
//     document.body.appendChild(script);
// }

// function hello(error, src) {
//     if (error) {
//         console.log(error);
//         return;
//     }
//     alert("Hello World" + src);
// }

// function goodMorning(src) {
//     alert("goodMorning" + src);
// }

// loadscript("https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js", hello);

// When Error Was Come Then give error Argument in to call back Argument into main call back function
// And error Argument in to call back function 
// Onload error was null
// And onerror was error argument


// Call Back Hell

function loadscript(src, callback) {
    var script = document.createElement('script');
    script.src = src;

    script.onload = function () {
        console.log("Script was Loaded With " + src);
        callback(null, src)
    }

    script.onerror = function () {
        console.log("Erro Is" + src);
        callback(new Error("New Error Was Founded"));
    }
    document.body.appendChild(script);
};

function hello(error, src) {
    if (error) {
        console.log(error);
        return;
    }
    alert("Hello");
}

loadscript("https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js", hello);