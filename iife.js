(function(msg){
    const scope="Scoping"
    console.log(msg,scope)
})('I am using');
(function(msg){
    const scope="Module Scoping"
    console.log(msg,scope)
})("I am in");