/*
### EXAMPLE EXERCISE:
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
}
Airplane.prototype.land = function () {
  this.isFlying = false;
}

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
### EXERCISE 1
  - Build a Person Constructor that initializes `name` and `age` from arguments.
  - All instances of Person should initialize with an empty `stomach` -> [].
  - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
  - Prevent the `eat` method from pushing more than 10 items into the `stomach`.
  - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
  - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/
function Person(name, age) {
  this.name = name
  this.age = age
  this.stomach = []
}
Person.prototype.eat = function(item) {
  if (this.stomach.length < 10) {
    this.stomach.push(item)
  }
}
Person.prototype.poop = function() {
  this.stomach = []
}
Person.prototype.toString = function() {
  return `${this.name} ${this.age}`
}

/*
### EXERCISE 2
  - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
  - All instances built with Car:
        + should initialize with an empty `tank`. -> 0
        + should initialize with an `odometer` -> 0
  - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
  - Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
  - A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model
  this.milesPerGallon = milesPerGallon
  this.tank = 0
  this.odometer = 0
}
Car.prototype.fill = function (gallons) {
  this.tank += gallons;
}
Car.prototype.drive = function (distance) {
  const drivableDistance = this.tank * this.milesPerGallon
  if (distance <= drivableDistance) {
    const gallonsUsed = distance / this.milesPerGallon
    this.tank -= gallonsUsed
    this.odometer += distance
  } else {
    this.tank = 0
    this.odometer += drivableDistance
    return `I ran out of fuel at ${this.odometer} miles!`
  }
}

function Baby() {
  
}



/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
  // TODO/INSTRUCTOR: ADD ANY FUNCTIONS YOU CREATE TO EXPORTS HERE
  //                  USE THE LINES ABOVE AS A REFERENCE
}
