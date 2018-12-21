const sayHello = (function() {
    const message = 'Hello !';

    function sayHello() {
        console.log(message)
    } return sayHello
})() //immediately invoke it

console.log('type of message :' , typeof message)
console.log(sayHello.toString())
sayHello();

/*
* 1. Create an anonymous function to immediatley invoke it
* */

//
const counter = (function () {
    let count = 0; //not accessible in global scope

    return { //return an object
        inc: function () {
            count = count + 1
        }, //inc count
        get: function () {
            console.log(count)
        }, // returns the count
    }
})();

counter.get()
counter.inc()
counter.get()