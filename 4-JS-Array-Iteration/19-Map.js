// Use the map method to transform elements in an array.
/*
* array = [item1, item2]
* newArray = [item1_a. item2_a]
*
* */
const strings = ['1','2','3','4','5'];

//use call back fun to return data from a string => string to number
// To get a number from a string, use parseInt
//parseInt takes a second argument called a ratex. => want to number to be base 10 => to get predictable behaviour
//in Base 10, the way we normally think of numbers.If you use parseInt has a second argument, usually 10 , to get predictable behaviour.

//call map on strings array
const numbers = strings.map(string => parseInt(string,10));
console.log(numbers);