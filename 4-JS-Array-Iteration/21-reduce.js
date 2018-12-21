//Use the reduce method to return a single value from an array of values.
/*
*           Reduce
*   names = [ Bob , Judy, Michael]
*       longNames === 1
*   numbers = [1,2,3]
*    sum === 6
*  callback (acc , cur)
*    acc : accumulator : current running total : its like basket when u go for shopping  item  + (basket + previous item)
* */


var total = [0, 1, 2, 3].reduce(
  (acc, cur) => acc + cur,
  0 //inital value explicit
);

console.log(total)