const http=require ("node:http")
const fs=require("node:fs")
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"})
    const html=fs.readFileSync("./htmlserver.html","utf-8")
    res.end(html)
})
server.listen(3000,()=>{
    console.log("Running server in port 3000")
})