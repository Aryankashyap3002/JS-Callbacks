function demo1 () {
    return new Promise(function (resolve, reject) {
        console.log('HI');
        setTimeout(function process() {
            console.log("Wooo, task done");
            resolve("Students are the best");
        }, 10000);
        console.log("by");
    })
}

function demo2(x) {
    return new Promise(function (resolve, reject) {
        console.log("Start");
        setTimeout(function process() {
            console.log("Completed Timer");
            if(x%2 == 0) {
                resolve("Even")
            } else {
                reject("Odd");
            }
        }, 10000);
        console.log("End");
    })
}

// y = demo2(2)
