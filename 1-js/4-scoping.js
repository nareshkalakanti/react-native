thisIsHoisted()
// thisIsNotHoisted() error

const thisIsAConst = 50;

//thisIsACons++  error

const constObj = { }

//ref to obj will not change
constObj.a = 'a';

let thisIsALet = 51;
thisIsALet = 50;
// let thisIsALet = 51;

// console.log(thisIsALet)



var thisIsVar = 50;
thisIsVar  = 51;
var thisIsVar = 'new value';

console.log(thisIsVar);

function thisIsHoisted() {
    console.log('This function is declared at the botton of the file')

}

//this cannot be changes since declared as const
const thisIsNotHoisted = function () {
    console.log('should this be hosited ?')
}

/*
* 1.var lifecycle is until the function ends
* 2.let  until the end of code block
* */

    
