const person = {
    name : 'jordan',
    greet: function () {
        console.log('hello, ' + this.name)
    },
}

person.greet()

const friend = {
    name : 'david',
}

friend.greet = person.greet

friend.greet()

const greet = person.greet.bind({name : 'this is a bound object'}) // binding the func to an object
person.greet.call({name : 'this is a bound object'}) // no need to invoke the function
person.greet.apply({name : 'this is a bound object'})

const newPerson = {
    name : 'newPerson',
    greet : () => { console.log(this.name)

    }
}
newPerson.greet()

greet()