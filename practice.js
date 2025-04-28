function fetchCustom(url, fn) {
    console.log("Start downloading");
    setTimeout(function process() {
        console.log("Download completed");
        let response = "dummy response";
        fn(response);
    }, 3000)
    console.log("Function Ended");
}




fetchCustom("www.google.com", function download(response) {
    console.log("Downloaede response is ", response);
})

// function sum()
// {
//     return {
//         add : function(){
//         return "url";
//     }
// }
// }

// const store = sum();
// console.log(store.add)