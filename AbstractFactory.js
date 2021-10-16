/* 
    1 - Create Interface
    2 - Implements the interface in a Main class using default values
    3 - Extends the Main class a number of times you need
    4 - Make sure that the Main class is able to return the object with the class you need
*/

const InterfaceError = require('./error/InterfaceError')

class AbstractFactory { //Interface
    #maze

    get maze(){ return this.#maze }
    set maze(maze){ this.#maze = maze }

    createMaze() { throw new InterfaceError("createMaze") }
    createRoom(roomNumber) { throw new InterfaceError("createRoom") }
    createWall() { throw new InterfaceError("createWall") }
    createDoor(room1, room2) { throw new InterfaceError("createDoor") }
}

class Factory extends AbstractFactory { //Implementing the interface depending on the requested type

    getMaze(type) {
        
        if (type == "danger") {
            super.maze = new FactoryDangerMaze();
        } else if (type == "charmed") {
            super.maze = new FactoryCharmedMaze();
        } else {
            super.maze = new Factory();
        }
        
        return super.maze;
    }

    createMaze() { return new Maze() }
    createRoom(roomNumber) { return new Room(roomNumber) }
    createWall() { return new Wall() }
    createDoor(room1, room2) { return new Door(room1, room2) }

}

class Maze { constructor() { } }
class Room { constructor(roomNumber) { console.log("A Room was created") } }
class Wall { constructor() { } }
class Door { constructor(room1, room2) { } }

class DestructiveWall { constructor() { } }
class RoomWithBomb { constructor(roomNumber) { console.log("A Room with bomb was created") } }
class CharmedRoom { constructor(roomNumber) { console.log("A charmed Room was created") } }
class DoorNeedingCharm { constructor(room1, room2) { } }

class FactoryDangerMaze extends Factory {
    constructor() {
        super()
    }

    createWall() {
        return new DestructiveWall();
    }

    createRoom(roomNumber) {
        return new RoomWithBomb(roomNumber);
    }
}

class FactoryCharmedMaze extends Factory {
    constructor() {
        super()
    }

    createDoor(room1, room2) {
        return new DoorNeedingCharm();
    }

    createRoom(roomNumber) {
        return new CharmedRoom(roomNumber);
    }
}

let factory = new Factory()

let maze = factory.getMaze('else')
maze.createRoom(1)

maze = factory.getMaze('danger')
maze.createRoom(1)

maze = factory.getMaze('charmed')
maze.createRoom(1)
