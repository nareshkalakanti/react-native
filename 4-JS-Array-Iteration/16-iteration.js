//forEach() `index` and `array` parameters.

const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

let sNames = [];

//print all the names in the array and number them
//passing in an template literal
names.forEach((name,index)=>console.log(`${index+1})${name}`));