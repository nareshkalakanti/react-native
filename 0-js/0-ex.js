//ex 1:

const birthYear = 1992;
const currentYear = 2018;
const age = currentYear - birthYear

console.log(age)

if (age < 0){
    console.log('you are from future')
} else {
    console.log('Howdy')
}


//ex 2:
const sumOfFour = (a,b,c,d) => {

    const sumOfNumbers = a+b+c+d;
    return sumOfNumbers
};

console.log(sumOfFour(10,20,30,40));


const subNumbers = (a,b) => {
    console.log(a-b);
};

subNumbers(10,3);