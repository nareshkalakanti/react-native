const url = ' '

fetch(url) // returns a promise
.then(function (res) { // takes a callback itself
  // do something
    return res.json()
   // handle error ?
})
.then(function (json) {
    return ({
        importantData : json.importantData,
    })
})
.then(function (data) {
    console.log(data)
})
.catch(function (error) {
    //handle error
})