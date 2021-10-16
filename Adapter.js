/* 
    1 - Create the adapter, it receives the object to be adapted
    2 - In the adapter implementation insert into the object every behavior you need it to be adapted
*/

class Hole{
    radius
    constructor(radius){
        this.radius = radius
    }

    getRadius(){
        return this.radius
    }

    fits(round){
        return this.radius >= round.getRadius()
    }
}

class Round{
    #radius
    constructor(radius){
        this.#radius = radius
    }

    getRadius(){
        return this.#radius
    }
}

class Square{
    #width
    constructor(width){
        this.#width = width
    }

    getWidth(){
        return this.#width
    }
}

class AdapterSquare{
    #square
    constructor(square){
        if(square instanceof Square){
            this.#square = square
        }else{
            throw Error('Parameter not supported')
        }
    }

    getRadius(){
        return this.#square.getWidth() * Math.sqrt(2) / 2

    }
}

const hole = new Hole(15)
const round = new Round(10)
const round2 = new Round(16)
const square = new Square(21)
const square2 = new Square(22)

console.log('round', hole.fits(round))
console.log('round2', hole.fits(round2))
// console.log('square', hole.fits(square)) // Without the adapter these lines throw error
// console.log('square2', hole.fits(square2)) // round.getRadius is not a function
console.log('adapter', hole.fits(new AdapterSquare(square)))
console.log('adapter2', hole.fits(new AdapterSquare(square2)))