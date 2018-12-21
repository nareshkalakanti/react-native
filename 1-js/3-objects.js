//create Object o is new object

const o = new Object()
o.firstName = "Naresh"
o.lastName = "kumar"
o.isTeaching = true
o.greet = function () {
    console.log('hi')
}


//Object literal

const o2 = { }
o.firstName = 'Naresh'
o['lastName'] = 'kumar'
const key = "isTeaching"
o[key] = true
o['greet'] = function () {
    console.log('hi')
}


const o3 = {
    1: 'test',
    firstName : "Naresh",
    lastName : "kumar",
    isTeaching : true,
    greet : function () {
        console.log('hi')
    },
    address : {
        street : "Main Street",
        number:123
    },
}

console.log(o3.address.number)

