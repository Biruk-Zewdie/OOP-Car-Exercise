class Vehicle {
    constructor (make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk (){
        return "Beep."
    }
    toString (){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}
class Car extends Vehicle{
    constructor (make, model,year){
        super(make, model, year);
    }
    numWheels (){
        return 4;
    }
    
}
class Motorcycle extends Vehicle {
    constructor (make, model, year){
        super (make, model, year);
    }
    numWheels (){
        return 2;
    }
    revEngine (){
        return "VROOM!!!"
    }
}

class Garage {
    constructor (capacity){
        this.Vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle){
        if (! (newVehicle instanceof Vehicle)){
            return "Only vehicles are allowed in here!"
        }
        if (this.Vehicles.length >= this.capacity){
            return "Sorry, we are full"
        }
        this.Vehicles.push(newVehicle)
        return "vehicle added into a garage."

    }
}