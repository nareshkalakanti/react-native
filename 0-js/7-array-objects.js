/*
* variable is giving name to something
* object is a value that you can give to a variable
* object = key + values [ collection of related properties]
* Array : bunch of different things , they can be strings , numbers etc
* */

const people = [
    {name:'John',hobby:'Painting'},
    {name:'Jane',hobby:'Writing'},
    {name:'Jack',hobby:'Sleeping'},
    {name:'Julie',hobby:'Eating'},
];

console.log('the name of the first person is ', people[0].name);

//or

const person3 = people[2];
console.log('the name of the first person is ',person3.name);