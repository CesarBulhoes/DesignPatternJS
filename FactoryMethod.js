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
    constructor(){
        this.hourly = "$12"
    }
}

class PartTime{
    constructor(){
        this.hourly = "$11"
    }
}

class Temporary{
    constructor(){
        this.hourly = "$10"
    }
}

class Contractor{
    constructor(){
        this.hourly = "$15"
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
