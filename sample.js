function fetchURL(url, fn) {
    console.log("Downloading Started from", url);
    setTimeout(function download() {
        console.log("Downloaded Completed");
        let response = "Dummy Response";
        fn(response);
    }, 3000);
}

function writeFile(data, fn) {
    console.log("Started writing data", data);
    setTimeout(function () {
        console.log("Writing Completed");
        let fileName = "output.txt"
        fn(fileName);
    })

}

function uploadFile(fileName, newUrl, fn) {
    console.log("Uploading started");
    setTimeout(function () {
        console.log("File", fileName, " uploaded successfully on ", newUrl);
        let uploadResponse = "SUCCESS";
        fn(uploadResponse);
    })
}

fetchURL("www.asd.com", function downloadCallback(response) {
    console.log("Downloaded response", response);
    writeFile(response, function writeCallback(fileName) {
        console.log("new file written is", fileName);
        uploadFile(fileName,'www.fgh.com', function uploadCallback(uploadResponse) {
            console.log("Successfully uploaded ", uploadResponse);
        })
    })
})