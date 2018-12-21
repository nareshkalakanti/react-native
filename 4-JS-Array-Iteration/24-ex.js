const arr = [1,2,3]
//map & filter return array

//method chaining
const smallerArray = arr
  .filter(number => number !==2 )
  .map(number => number + 1);

console.log(smallerArray);