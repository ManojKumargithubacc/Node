const EventEmitter=require ("node:events")
const emitter=new EventEmitter()
emitter.on("Buy fruits",(type)=>{
    console.log(`I am buying an ${type}`)
})
emitter.emit("Buy fruits","Apple")