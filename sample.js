function fetchURL(url, fn) {
    console.log("Downloading Started from", url);
    setTimeout(async function download() {
        console.log("Downloaded Completed");
        let response = "Dummy Response";
        fn(response);
        console.log("Downloading Ended");
    }, 3000);
    
}
await fetchURL("www.asd.com", function downloadCallback(response) {
    console.log("Downloaded response", response);
})