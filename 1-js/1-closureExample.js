function MakeHellofunction() {
    const message = 'Hello !';

    function sayHello() {
        console.log(message)
    } return sayHello
}

const sayHello = MakeHellofunction();
console.log('type of message :' , typeof message)
console.log(sayHello.toString())
sayHello();