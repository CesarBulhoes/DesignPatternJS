/* 
    1 - Basically it is a function, inside of a class, or not, that receives an input
    and returns an specific object, depending on the input.
    2 - It can also insert new behaviors to the object returned.
*/

class Factory {

    #employee

    createEmployee(type) {
        
        if (type === "fulltime") {
            this.#employee = new FullTime()
        } else if (type === "parttime") {
            this.#employee = new PartTime()
        } else if (type === "temporary") {
            this.#employee = new Temporary()
        } else if (type === "contractor") {
            this.#employee = new Contractor()
        }

        this.#employee.say = function(){
            console.log(this.constructor.name + ": rate " + this.hourly + "/hour")
        }
        
        return this.#employee
    }
}

class FullTime{
    
    #hourly
    get hourly(){ return this.#hourly }

    constructor(){
        this.#hourly = "$12"
    }
}

class PartTime{
    
    #hourly
    get hourly(){ return this.#hourly }

    constructor(){
        this.#hourly = "$11"
    }
}

class Temporary{
    
    #hourly
    get hourly(){ return this.#hourly }

    constructor(){
        this.#hourly = "$10"
    }
}

class Contractor{
    
    #hourly
    get hourly(){ return this.#hourly }

    constructor(){
        this.#hourly = "$15"
    }
}

var employees = []
var factory = new Factory()

employees.push(factory.createEmployee("fulltime"))
employees.push(factory.createEmployee("parttime"))
employees.push(factory.createEmployee("temporary"))
employees.push(factory.createEmployee("contractor"))

for (let i = 0; i < employees.length; i++) {
   employees[i].say()
}
