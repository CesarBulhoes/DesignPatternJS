/* 
    1 - Create an interface of the builders
    2 - Implements builders from the interface whenever you need... It will return an object
    3 - Create the classes of the objects retured by the builders
    4 - Create the class Director that sets the values for the objects returned by the builders
*/

const InterfaceError = require('./error/InterfaceError')

class AbstractBuilder {
    #type
    #seats
    #engine
    #transmission
    #tripComputer
    #gpsNavigator

    get type(){ return this.#type }
    get seats(){ return this.#seats }
    get engine(){ return this.#engine }
    get transmission(){ return this.#transmission }
    get tripComputer(){ return this.#tripComputer }
    get gpsNavigator(){ return this.#gpsNavigator }

    set type(type){ this.#type = type }
    set seats(seats){ this.#seats = seats }
    set engine(engine){ this.#engine = engine }
    set transmission(transmission){ this.#transmission = transmission }
    set tripComputer(tripComputer){ this.#tripComputer = tripComputer }
    set gpsNavigator(gpsNavigator){ this.#gpsNavigator = gpsNavigator }

    setCarType(type){ throw new InterfaceError("setCarType") }
    setSeats(seats){ throw new InterfaceError("setSeats") }
    setEngine(engine){ throw new InterfaceError("setEngine") }
    setTransmission(transmission){ throw new InterfaceError("setTransmission") }
    setTripComputer(tripComputer){ throw new InterfaceError("setTripComputer") }
    setGPSNavigator(gpsNavigator){ throw new InterfaceError("setGPSNavigator") }
}

class CarBuilder extends AbstractBuilder {
    
    setCarType(type) {
        super.type = type
    }

    setSeats(seats) {
        super.seats = seats
    }

    setEngine(engine) {
        super.engine = engine
    }
    
    setTransmission(transmission) {
        super.transmission = transmission
    }

    setTripComputer(tripComputer) {
        super.tripComputer = tripComputer
    }
    
    setGPSNavigator(gpsNavigator) {
        super.gpsNavigator = gpsNavigator
    }

    getResult() {
        return new Car(
            super.type, 
            super.seats, 
            super.engine, 
            super.transmission, 
            super.tripComputer, 
            super.gpsNavigator)
    }
}

class Car {
    #type
    #seats
    #engine
    #transmission
    #tripComputer
    #gpsNavigator
    #fuel

    constructor(type, seats, engine, transmission, tripComputer, gpsNavigator) {
        this.#type = type
        this.#seats = seats
        this.#engine = engine
        this.#transmission = transmission
        this.#tripComputer = tripComputer
        this.#gpsNavigator = gpsNavigator
        this.#fuel = 0
    }

    getCarType() {
        return this.#type
    }

    getFuel() {
        return this.#fuel
    }

    setFuel(fuel) {

        fuel = parseFloat(fuel)
        
        if(!isNaN(fuel)){
            this.#fuel = fuel.toFixed(3)
        }else {
            throw Error('"fuel" must be a Number')
        }
    }

    getSeats() {
        return this.#seats
    }

    getEngine() {
        return this.#engine
    }

    getTransmission() {
        return this.#transmission
    }

    getTripComputer() {
        return this.#tripComputer
    }

    getGpsNavigator() {
        return this.#gpsNavigator
    }
}

class ManualBuilder extends AbstractBuilder {
    
    setCarType(type) {
        super.type = type
    }

    setSeats(seats) {
        super.seats = seats
    }

    setEngine(engine) {
        super.engine = engine
    }
    
    setTransmission(transmission) {
        super.transmission = transmission
    }

    setTripComputer(tripComputer) {
        super.tripComputer = tripComputer
    }
    
    setGPSNavigator(gpsNavigator) {
        super.gpsNavigator = gpsNavigator
    }

    getResult() {
        return new Manual(
            super.type, 
            super.seats, 
            super.engine, 
            super.transmission, 
            super.tripComputer, 
            super.gpsNavigator)
    }
}


class Manual {
    #type
    #seats
    #engine
    #transmission
    #tripComputer
    #gpsNavigator

    constructor(type, seats, engine, transmission, tripComputer, gpsNavigator) {
        this.#type = type
        this.#seats = seats
        this.#engine = engine
        this.#transmission = transmission
        this.#tripComputer = tripComputer
        this.#gpsNavigator = gpsNavigator
    }

    print() {
        let info = "";
        info += "Type of car: " + this.#type + "\n";
        info += "Count of seats: " + this.#seats + "\n";
        info += "Engine: " + this.#engine + "\n";
        info += "Transmission: " + this.#transmission + "\n";
        if (this.#tripComputer) {
            info += "Trip Computer: Functional" + "\n";
        } else {
            info += "Trip Computer: N/A" + "\n";
        }
        if (this.#gpsNavigator) {
            info += "GPS Navigator: Functional" + "\n";
        } else {
            info += "GPS Navigator: N/A" + "\n";
        }
        return info;
    }
}

class Director {

    constructSportsCar(builder) {
        builder.setCarType('Sports')
        builder.setSeats(2)
        builder.setEngine('3.0')
        builder.setTransmission('SEMI_AUTOMATIC')
        builder.setTripComputer(true)
        builder.setGPSNavigator(true)
    }

    constructCityCar(builder) {
        builder.setCarType('City')
        builder.setSeats(2)
        builder.setEngine('1.2')
        builder.setTransmission('AUTOMATIC')
        builder.setTripComputer(true)
        builder.setGPSNavigator(true)
    }

    constructSUV(builder) {
        builder.setCarType('SUV')
        builder.setSeats(4)
        builder.setEngine('2.5')
        builder.setTransmission('MANUAL')
        builder.setTripComputer(false)
        builder.setGPSNavigator(true)
    }

}

const director = new Director()
const carBuilder = new CarBuilder()
const manualBuilder = new ManualBuilder()

director.constructSportsCar(carBuilder)
const carSports = carBuilder.getResult()
console.log('\n', carSports.getCarType(), carSports.getSeats(), carSports.getEngine(), carSports.getTripComputer(), '\n')

director.constructSportsCar(manualBuilder)
const manualSports = manualBuilder.getResult()
console.log(manualSports.print())

// director.constructCityCar(carBuilder)
// const carCity = carBuilder.getResult()
// console.log(carCity.getCarType(), carCity.getSeats(), carCity.getEngine(), carCity.getTripComputer())

// director.constructCityCar(manualBuilder)
// const manualCity = manualBuilder.getResult()
// console.log(manualCity.print())

// director.constructSUV(carBuilder)
// const carSUV = carBuilder.getResult()
// console.log(carSUV.getCarType(), carSUV.getSeats(), carSUV.getEngine(), carSUV.getTripComputer())

// director.constructSUV(manualBuilder)
// const manualSUV = manualBuilder.getResult()
// console.log(manualSUV.print())
