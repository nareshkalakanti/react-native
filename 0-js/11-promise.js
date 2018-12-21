console.log("A")
loadA().then((v)=>{
  console.log(v);
  console.log("C")}).catch(err=>{
  console.log(err);
})


function load(){
  var promise1 = new Promise(function(resolve, reject) {
    //setTimeout(resolve, 100, 'B');
    resolve("B is OK")
    //reject("Error message");
  });
  return promise1;

}



async function loadA(){
  return await load();
}