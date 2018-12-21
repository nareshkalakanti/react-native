const fruits = ['apple', 'pear', 'cherry'];

let capitalizedFruits = fruits.map(fruit =>  fruit.toUpperCase() );
console.log(capitalizedFruits);



const prices = [5, 4.23, 6.4, 8.09, 3.20];

// Result: [ '€5.00', '€4.23', '€6.40', '€8.09', '€3.20' ]

// + operator will force number to become string and concatinate these strings together
// use template literal and interpolate it to string
const displayPrices = prices.map(price => '€' + price);
console.log(displayPrices);

//using template literal ${ marker js uses for 2 decimal places
const displayPrices1 = prices.map(price => `€${price.toFixed(2)}`);
console.log(displayPrices1);