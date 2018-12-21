//To reuse code

const doSomething = () => {
    console.log('I do something !')
}

doSomething()


//passing arguments

const sayHello = (name) => {
    console.log('Hello '  +  name + ' !')
}

sayHello('naresh')

const addNumber = (a,b) =>{
    console.log('the sum is ', + a+b )

};

addNumber(10,20)


//returning values => take stuff out from function

const add = (a,b) =>{
    return a + b;
};

console.log('the result is ' , add(1,2));



const addNumbers = (a,b,c) => {
    return a+b+c;
};

console.log('the answer is ' , + addNumbers(15,-20,30.5));
























