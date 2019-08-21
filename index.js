/*
In order to do these exercises you'll need your newly acquired knowledge on
constructor functions, methods, prototypes and the `this` keyword.
*/

/*
### EXAMPLE EXERCISE:
- Build an Airplane constructor that takes a `name`.
- Give airplanes the ability to `.takeOff()` and `.land()`.
- If a plane takes off, its `isFlying` property is true.
- If a plane lands, its `isFlying` property is false.
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
- Build a Person Constructor that takes `name` and `age`.
- Give persons the ability to `eat()` edibles.
- When eating an `edible`, it should be pushed into a `stomach` property which is an array.
- Give persons the ability to `poop()`.
- When pooping, the `stomach` should empty.
- Give persons a method `toString()`, returning a string `name` and `age`. Example: "Mary, 50"
*/
function Person(name, age) {
  this.name = name
  this.age = age
  this.stomach = []
}

Person.prototype.greet = function() {
  return `${this.name} ${this.age}`
}

Person.prototype.eat = function() {
  return `${this.name} ${this.age}`
}

Person.prototype.poop = function() {
  this.stomach = []
  return `💩`
}

/*
### EXERCISE 2
// - Build a Car constructor that takes `make`, `model` and `milesPerGallon`.
// - Give cars the ability to get fueled with `fill(gallons)` method. Add `gallons` to `fuel`.
// - Give cars ability to `drive(distance)`, the driven `distance` should be added to an `odometer` property, and subtracted from the property `fuel`.
// - A car which runs out of `fuel` can't `drive()` anymore - instead it should return a string "I crashed at {odometer} miles!"
*/

function Car() {

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
  // TODO/INSTRUCTOR: ADD ANY FUNCTIONS YOU CREATE TO EXPORTS HERE
  //                  USE THE LINES ABOVE AS A REFERENCE
}
