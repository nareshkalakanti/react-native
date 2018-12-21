function doSomething(callback) { //argument is some fun and invoked with 1
    console.log(callback(1))
}

doSomething(console.log)
