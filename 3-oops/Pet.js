class Pet {
constructor(animal,age,breed,sound){
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
}

get activity(){
    const today = new Date();
    const hour = today.getHours();

    if(hour > 8 && hour <=20){
        return 'playing';
    }else {
        return 'sleeping';
    }

}
get owner (){
    return this._owner;
}
//same name backing property use underscore
set owner(owner){
    this._owner = owner;
    console.log(`setter called : ${owner}`);

}
speak() {
console.log(this.sound);
}

}

class Owner {
    constructor (name,address){
        this.name = name;
        this.address = address;
    }

    set phone(phone){
        const phoneNormalized = phone.replace(/[^0-9]/g, '');
        this._phone = phoneNormalized;
    }
    get phone(){
        return this._phone;
    }
}

const ernie = new Pet('dog',1,'pug','woof woof');
const vera = new Pet('dog',8,'Border Collie', 'yipe yipe');
const scofield = new Pet('dog',16,'Doberman');
const edel = new Pet('dog',7,'German Shorthaired Pointer');

console.log(ernie);

//dot notation to call speak value

ernie.speak();
vera.speak();

console.log(ernie.activity);

//setter method output
//ernie.owner = 'Ashley';

ernie.owner = new Owner('Ashley', ' 123 Main Street ');
ernie.owner.phone = '(555) 555-555';

console.log(ernie.owner.name);
console.log(ernie.owner.phone);