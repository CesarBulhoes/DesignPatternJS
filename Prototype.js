/*
    1 - Basically is the inplementation of the clone function,
    allowing to make a copy of the object using its actual context
*/

class Prototype{

    constructor(prototype){
        if(typeof prototype == 'object')
            for(let key in prototype){
                this[key] = prototype[key]
            }
    }
    
    clone(){
        return new Prototype(this)
    }
}

let obj1 = new Prototype({name: 'cesar', email: 'email@email.com', setName: function(name){ this.name = name }, show: function(){ console.log(this)}})
let obj2 = obj1.clone()
obj1.show()
obj2.setName('Teste')
obj2.show()