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
- Build a Person Constructor that initializes `name` and `age` from arguments.
- All instances of Person should initialize with an empty `stomach` [].
- Give instances of Person the ability to `.eat(someFood)`:
      When eating an edible, it should be pushed into the `stomach`.
- Prevent the `eat` method from pushing more than 10 items to the `stomach`.
- Give instances of Person the ability to `.poop()`:
      When pooping, the `stomach` should empty.
- Give instances of Person a method `.toString()`:
      `.toString()` returns a string with `name` and `age`. Example: "Mary, 50"
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
// - Build a Car constructor that takes `make`, `model` and `milesPerGallon`.
// - Give cars the ability to get fueled with `fill(gallons)` method. Add `gallons` to `fuel`.
// - Give cars ability to `drive(distance)`, the driven `distance` should be added to an `odometer` property, and subtracted from the property `fuel`.
// - A car which runs out of `fuel` can't `drive()` anymore - instead it should return a string "I crashed at {odometer} miles!"
*/

function Car() {

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
