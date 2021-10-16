/*
    1 - Basically is verifying if the object already was initialized and
    not allowing it to be initialized again
*/

class Singleton{
    #instance

    getInstance(){ 
        let obj = (Math.random()*100).toFixed(2) // initialize obj the way you need it
        if(!this.#instance){
            this.#instance = new Object(obj)
        }
        return this.#instance
    }
}

const singleton = new Singleton()