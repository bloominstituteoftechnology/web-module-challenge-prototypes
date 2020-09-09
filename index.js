/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.isEating = false;
  this.stomach = [];
}

Person.prototype.eat = function (food) {
  this.isEating = true;
  if (this.stomach.length < 10) {
    this.stomach.push(food);
  } else {
    this.isEating = false;
  }
};

Person.prototype.poop = function () {
  this.stomach = [];
};

Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
};

const self = new Person("Andre", 27);

self.eat("Pizza");
console.log(self.stomach);
self.poop();
console.log(self.stomach);
self.eat("rice");
console.log(self.stomach);
self.eat("chicken");
console.log(self.stomach);
console.log(self.stomach);
console.log(self.toString());
console.log(self.name);

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function (gallons) {
  this.tank = gallons + this.tank;
  return this.tank;
};

Car.prototype.drive = function (distance) {
  let maxDistance = this.tank * this.milesPerGallon;
  if (distance < maxDistance) {
    this.odometer = this.odometer + distance;

    const driveMiles = distance / this.milesPerGallon;
    this.tank = this.tank - driveMiles;
  } else {
    this.odometer = this.odometer + maxDistance;
    this.tank = 0;
    return `I ran out of fuel at ${this.odometer} miles!`;
  }
};

const typeR = new Car("Honda Type R", 18);

console.log(typeR);
typeR.fill(10);
console.log(typeR.tank);
typeR.drive(100);
console.log(typeR.odometer, typeR.tank);
typeR.drive(100);
console.log(typeR.odometer, typeR.tank);
console.log(typeR.drive(100));
/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function () {
  // @ts-ignore
  return `${this.name} is Playing with ${this.favoriteToy}`;
};

const mina = new Baby("Mina", 1, "Racecar");

console.log(mina);
console.log(mina.play());

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. window binding/global object binding
  2. implicit binding, use cases, refers to left side of .
  3. explicit binding, call and apply funcs.
  4. new binding, refers to parameter
*/

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== "undefined") {
  module.exports = module.exports || {};
  if (Airplane) {
    module.exports.Airplane = Airplane;
  }
  if (Person) {
    module.exports.Person = Person;
  }
  if (Car) {
    module.exports.Car = Car;
  }
  if (Baby) {
    module.exports.Baby = Baby;
  }
}
