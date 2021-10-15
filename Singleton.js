class Singleton{
    #instance

    #createInstance(obj){
        this.#instance = new Object(obj)
    }

    getInstance(){ 
        let obj = (Math.random()*100).toFixed(2) // initialize obj the way you need it
        if(!this.#instance){
            this.#createInstance(obj)
        }
        return this.#instance
    }
}

const singleton = new Singleton()