//Reading file synchronously
const fs=require ("node:fs")
const fileContent=fs.readFileSync("./demo.txt","utf-8")
console.log(fileContent)
//Use readfile to read file asynchronously
fs.readFile("./demo.txt","utf-8",(error,data)=>
{
if(error)
{
    console.log(error)
}
else{
    console.log(data)
}
})
fs.writeFileSync("./demo1.txt","Hello World")

