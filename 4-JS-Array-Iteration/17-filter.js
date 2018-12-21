//Filter returns a new array
//callback function ( () => { } )

const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];     // Result: ['Selma', 'Sam', 'Sharon'];

const sNames = names.filter(name =>(name.charAt(0) === 'S'));
console.log(sNames);


//or

const startsWithS = name =>(name.charAt(0) === 'S')

const s1Names = names.filter(startsWithS)

console.log(s1Names);