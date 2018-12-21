const prices = [6.75, 3.10, 4.00, 8.12]; //total : 21.97
//keep track of total price
let total = 0;

//iterate to get each price

prices.forEach(price =>{
  //add each price and store it to total
  total +=price
});

console.log(total);

