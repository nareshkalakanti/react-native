function map(arr,fn) {
    //two arguments arr and the second is func that we want to invoke every value on array

    const newArr = [ ]
    for (let i=0; i < arr.length; i++){
        let val = arr[i]
        newArr.push(fn(val))
    }
    return newArr
}

function addOne(num) {
    return num + 1
}

const x = [0,1,2,3,4]

console.log(map(x,addOne))
