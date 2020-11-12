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
// - Write a Person Constructor that initializes `name` and `age` from arguments.
//     - All instances of Person should initialize with an empty `stomach` array.
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}
// Give instances of Person the ability to `.eat("someFood")`:
//         + When eating an edible, it should be pushed into the `stomach`.
//         + The `eat` method should have no effect if there are 10 items in the `stomach`.
Person.prototype.eat = function (edible) {
  if (this.stomach.length < 10) {
    this.stomach.push(edible);
  }
};
// - Give instances of Person the ability to `.poop()`:
//         + When an instance poops, its `stomach` should empty.
Person.prototype.poop = function () {
  this.stomach = [];
};
//  - Give instances of Person a method `.toString()`:
//         + It should return a string with `name` and `age`. Example: "Mary, 50"
Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
};
// these are the people
const personOne = new Person("Janie", 31);
const personTwo = new Person("Claudia", 34);
const personThree = new Person("Roz", 40);
// change them to string
console.log(personOne.toString());
console.log(personTwo.toString());
console.log(personThree.toString());
// invoke the functions
personOne.eat("Pizza");
personOne.eat("Fries");
personOne.eat("Chicken Nugs");
// checking stomach function is empty
console.log(personOne.stomach);
// invoking function
personOne.poop();

console.log(personOne.stomach);

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
// Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
function Car(model, milesPerGallon) {
  this.model = model;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function (fill) {
  this.tank += gallon;
};
const carOne = new Car("SRX", 0);
const carTwo = new Car("Mustang", 19);

console.log(carOne);
console.log(carTwo);

carOne.fill(0);
carTwo.fill(19);

console.log(carOne.fill(0));
console.log(carTwo.fill(19));

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, faveToy) {
  Person.call(this, name, age);
  favoriteToy: faveToy;
}
Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function () {
  return `Playing with ${this.favoriteToy}`
}
const babyOne = new Person({
  name: "Jack",
  age: 3
  favoriteToy: "ball"
});
console.log(babyOne);
console.log(babyOne.play());

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Implicit Binding applies to objects with methods and is used most of the time but can be noticed due to the object being left of the "."
  2. Call requests the function, 1 by 1, 
  3. bind creates a brand new function you can request later.
  4. new binding creates a new object while 'this' points to it  (not 1 by 1)
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
