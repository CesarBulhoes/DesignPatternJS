/* 
    1 - Create an interface of the object
    2 - Implements classes for the interface whenever you need
    3 - Implements a controller that receives the objects and modifies them 
    4 - the controller can be extended whenever you need it to
*/

const InterfaceError = require('./error/InterfaceError')

class Device{
    isEnabled(){ throw new InterfaceError("isEnabled") }
    enable(){ throw new InterfaceError("enable") }
    disable(){ throw new InterfaceError("disable") }
    getVolume(){ throw new InterfaceError("getVolume") }
    setVolume(percent){ throw new InterfaceError("setVolume") }
    getChannel(){ throw new InterfaceError("getChannel") }
    setChannel(channel){ throw new InterfaceError("setChannel") }
}

// Todos os dispositivos seguem a mesma interface.
class Tv extends Device{
    #volume = 30
    #enabled = false

    enable(){ this.#enabled = true }
    disable(){ this.#enabled = false }
    isEnabled(){
        return this.#enabled
    }
    setVolume(percent){ 
        this.#volume = percent 
        console.log(this.#volume)
    }
    getVolume(){ return this.#volume }
}

class Radio extends Device {

}

class RemoteControl{
    #device
    get device(){ return this.#device }

    constructor(device){
        this.#device = device
    }
    togglePower() {
       if (this.#device.isEnabled())
           this.#device.disable()
       else
           this.#device.enable()
        console.log("enabled", this.#device.isEnabled())
    }

    volumeDown() {
       this.#device.setVolume(this.#device.getVolume() - 10)
    }

    volumeUp() {
       this.#device.setVolume(this.#device.getVolume() + 10)
    }
    channelDown() {
       this.#device.setChannel(this.#device.getChannel() - 1)
    }

    channelUp() {
       this.#device.setChannel(this.#device.getChannel() + 1)
    }
}

// Você pode estender classes a partir dessa hierarquia de
// abstração independentemente das classes de dispositivo.
class AdvancedRemoteControl extends RemoteControl {
    constructor(device){
        super(device)
    }
    mute(){
        super.device.setVolume(0)
    } 

}

const aRemote = new AdvancedRemoteControl(new Tv())
aRemote.togglePower()
aRemote.mute()
aRemote.volumeUp()
aRemote.volumeUp()
aRemote.togglePower()
