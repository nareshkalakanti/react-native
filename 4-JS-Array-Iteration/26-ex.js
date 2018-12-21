//Combining filter() and map()
//You can combine filter() and map() to clean an array of unwanted values before transforming the leftover item

const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];

// Result: [{name: 'Samir'}, {name: 'Shaniqua'}, {name:'Sean'}];

const usersNew = userNames
  .filter(name => name.charAt(0) === 'S')
  // JS return object from callback.since var and prop name is same thats why ()
  .map(name => ({name }));

//console.log(usersNew)

const users = [
  {name: 'Samir', age: 27},
  {name: 'Angela', age: 33},
  {name: 'Beatrice', age: 42},
  {name: 'Shaniqua', age: 30},
  {name: 'Marvin', age: 23},
  {name: 'Sean', age: 47}
];

// Result: ['Angela', 'Beatrice', 'Shaniqua', 'Sean'];

const unames = users
  .filter(user => user.age >=30)
  .map(user => user.name);

console.log(unames);
