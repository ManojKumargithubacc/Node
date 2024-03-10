// const adding=require('./add')
// console.log("Hello from Manoj")
// const sum=adding(1,7)
// const sum2=adding(2,8)
// 
// console.log(sum)
// console.log(sum2)
require("./scope")
require("./modulescope")
const addnum=require("./add")
console.log(addnum(4,9))
const math=require("./exportTwoFunctions")
console.log(math.add(3,4))
console.log(math.sub(9,4))
//Using destructure feature for require
const {add,sub}=math
console.log(add(3,4))
console.log(sub(9,4))



//Loaded and cached
const cach=require("./modulecaching")
console.log(cach.getName())
cach.setName("Magadheeran")
console.log(cach.getName())
//Since the modulr modulecaching is already loaded node uses it with the updated this.name
const cachnew=require("./modulecaching")
console.log(cachnew.getName())








