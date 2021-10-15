class AbstractFactory { //Interface
    #maze

    get maze(){ return this.#maze }
    set maze(maze){ this.#maze = maze }

    createMaze() { throw Error('Function "createMaze" must be implemented by child class') }
    createRoom(roomNumber) { throw Error('Function "createRoom" must be implemented by child class') }
    createWall() { throw Error('Function "createWall" must be implemented by child class') }
    createDoor(room1, room2) { throw Error('Function "createDoor" must be implemented by child class') }
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
