class InterfaceError extends Error{
    constructor(name){
        super(name)
        this.message = `Function "${name}" must be implemented by child class`
    }
}

module.exports = InterfaceError