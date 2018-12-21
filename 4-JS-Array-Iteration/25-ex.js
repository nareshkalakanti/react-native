const users = [
  { name : 'Samir', age:27 },
  { name : 'Angela', age:33},
  { name : 'Beatrice', age:42 }
];


/*
{
  Samir : 27,
  Angela:33,
  Beatrice:42
}
*/
const newUsersArray = users.filter(user => user.name !== 'Sameer');

//map to tell how old each user is 'sameer is 27 years old.'
// construct and return a string

const newUsers = users.map(user => `${user.name} is ${user.age} years old.`);



const Users = users.reduce((usersObject, user) => {
  usersObject[user.name] = user.age;
  return usersObject // return a value callback
},{});
console.log(Users);