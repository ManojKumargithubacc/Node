function callback(uname){
console.log(`Hi I am ${uname}`)
}
function higherorder(callback){
const uname="Manoj"
callback(uname)
}
higherorder(callback)