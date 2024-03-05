const Vehicle = require('./vehicle')

class Car extends Vehicle {
  constructor(id, wheels, color, passengers) {
   super (id, wheels, "beep"); 
    this.color = color;
    this.passengers = passengers;
  
  }
}

const newCar = new Car(1, 4, "orange", 4);
