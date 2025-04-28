function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Started downloading from ", url);
        setTimeout(function processDownloading() {
            console.log("Downloaded completed");
            let data = "dummy data";
            resolve(data);
        }, 5000)
    });
}

function writeFile(data) {
    return new Promise(function (resolve, reject) {
        console.log("Started writing ", data ," in a file");
        setTimeout(function writingData() {
            console.log("Writing successfull");
            let fileName = "abc.txt";
            resolve(fileName);
        }, 3000)
    });
}

function uploadData(fileName, url) {
    return new Promise(function (resolve, reject) {
        console.log("Uploading the data of file ", fileName, "on url ", url);
        setTimeout(function uploadingFile() {
            console.log("Uploaded successfully on ", url);
            let newUrl = "www.abc.com"
            resolve(newUrl);
        }, 7000)

    });
}

let downloadPromise = fetchData("www.google.com");
downloadPromise.then(function (value) {
    console.log("Dwnloaded promise data is fullfilled");
    console.log(value);
    let writePromises = writeFile(value);
    writePromises.then(function (value) {
        console.log("Writing file promise is fullfilled");
        console.log(value);
        let uploadPromise = uploadData(value, "www.abc.com");
        uploadPromise.then(function (value) {
            console.log("Uploading file promise is fullfilled on the given url");
            console.log(value);
        })
    })
})

