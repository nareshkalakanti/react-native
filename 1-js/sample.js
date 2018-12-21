console.log('hello world')

x = null
console.log(x)

y= true
console.log(y)

var sampleObject = {
    x :"hi",
    y :  true,
    sampleInternalObject :{
        z : true
    }
}

console.log(sampleObject.x)

var cities = ['london','Dublin','Paris','Lisbon']

console.log(cities)
cities.pop()
console.log(cities)
cities.push('Rome')
console.log(cities)


function add(x=1,y=2) {
    console.log(x+y)

}
//console.log(add(2,3))

var sub = function (x=5,y=10) {
    console.log(y-x)
}

add()
sub(10,3)

for(i=0;i<10;i++){
    console.log(i)
}
for (city in cities){
    console.log(city)

}
