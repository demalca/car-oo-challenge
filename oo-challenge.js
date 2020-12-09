// Part 1
class Vehicle {
  constructor(a, b, c) {
    this.make = a;
    this.model = b;
    this.year = c;
  }

  honk() {
    return "Beep";
  }

  toString() {
    return `This vehicle is a ${this.make} ${this.model} from ${this.year}`;
  }
}

// Part 2
class Car extends Vehicle {
  constructor(a, b, c) {
    super(a, b, c);
    this.numWheels = 4;
  }
}

// Part 3
class Motorcycle extends Vehicle {
  constructor(a, b, c) {
    super(a, b, c);
    this.numWheels = 2;
  }
  revEngine() {
    return "VROOM!!!";
  }
}

// Part 4
class Garage {
  constructor(cap) {
    this.capacity = cap;
    this.vehicles = [];
  }
  add(newItem) {
    if (this.vehicles.length >= this.capacity) {
      return "Sorry, we're full.";
    } else if (!(newItem instanceof Vehicle)) {
      return "Only vehicles are allowed in here!";
    }
    this.vehicles.push(newItem);
    return "Vehicle added!";
  }
}
