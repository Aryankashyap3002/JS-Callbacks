function fetch() {
    return new Promise(function (resolve, reject) {
        console.log("Start Downloading");
        setTimeout(function process() {
            console.log("Downlading completed");
            let data = "dummy data";
            resolve(data);
        }, 10000);
        console.log("Timer to mimic download started");
    }) 
}

console.log("Started the program");
console.log("We are expecting to mimic a downloader");
x = fetch("www.google.com");
console.log("New promise object is created successfully, but downloading is still going on"); 