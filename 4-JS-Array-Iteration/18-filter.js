const numbers = [1,2,3,4,5];
//filter no three
const no3 = numbers.filter(number => number !==3 );
console.log(no3);

const numbers1 = [1,2,3,4,5,6,7,8,9,10];
// Result: [2,4,6,8,10]
// remainder operator if 0 number will be true

const evens = numbers1.filter(number => number % 2 === 0);
console.log(evens);
