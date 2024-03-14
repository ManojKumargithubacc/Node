const http=require ("node:http")
const server=http.createServer((req,res)=>{
    const info={
        firstname:"Manoj",
        lastname:"Kumar"

    }
    res.writeHead(200,{"Content-Type": "text/json"})
    res.end(JSON.stringify(info))

})
server.listen(3000,()=>{
    console.log("Server runnning port 3000")
})