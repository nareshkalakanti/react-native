const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];     // Result: ['Selma', 'Sam', 'Sharon'];

let sNames = [];

names.forEach(name =>{
  // check first letter of each name
  if (name.charAt(0) === 'S'){
    sNames.push(name);
  }

});

console.log(sNames);