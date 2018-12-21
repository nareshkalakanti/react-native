/*
* Maps
* Array of items what you want to do is transform each item in a certain way and give a new array
* */

const numbers = [10,20,30];


const doubleNumber = [
    numbers[0] *2,
    numbers[1] *2,
    numbers[2] *2,

]

//using map => put a function inside a map
// map is like a function for an array and takes in another one


const doubleNumbers = numbers.map((a=>{
    return a*2
}))



const halfNumbers = numbers.map((n=>{
    return n/2
}))


console.log(numbers)
console.log(doubleNumbers)
console.log(halfNumbers)



