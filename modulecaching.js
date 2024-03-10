class caching{
    constructor(name){
        this.name=name
    }
    getName(){
        return this.name
    }
    setName(name){
this.name=name
    }
}
//To avoid module caching directly export the class not as an instance
module.exports=new caching("Manoj Kumar")