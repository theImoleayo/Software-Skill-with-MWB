function Vehicle(name, color, wheels) {
  this.name = name;
  this.color = color;
  this.wheels = wheels;
}

Vehicle.prototype.getVehDetails = function () {
  console.log(`Name: ${this.name}\nColor: ${this.color}\nWheels: ${this.wheels}`);
};

function Car(name, color, brand, seats) {
  // Call the Vehicle constructor to inherit its properties
  Vehicle.call(this, name, color, 4);  // Pass 4 wheels for the car

  this.brand = brand;
  this.seats = seats;
}

// Inherit Vehicle's prototype methods
Car.prototype = Object.create(Vehicle.prototype);

// Reset Car's constructor reference
Car.prototype.constructor = Car;

Car.prototype.getDetails = function () {
  console.log(`The ${this.color} ${this.name} is of ${this.brand} company. It has seating for ${this.seats} people.`);
};

const car1 = new Car('A6', 'Black', 'Audi', 5);
car1.getDetails();
car1.getVehDetails();