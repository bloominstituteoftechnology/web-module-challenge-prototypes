/*This example shows how to go about completing these tasks

  EXAMPLE TASK
    Use the Airplane constructor below to do the following:
      1. Initialize `name` from an argument
      2. Initialize `isFlying` with a value of false
      3. Give the airplanes constructed the ability to `.takeOff()` and `.land()`
          -If a plane takes off, its `isFlying` property is set to true.
          -If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function() {
  this.isFlying = true;
};
Airplane.prototype.land = function() {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1 - People got to eat and poop!

  Use the Person constructor below to do the following:
      1. Initialize `name` and `age` from arguments
      2. All instances of Person should initialize with an empty `stomach` array
      3. Give instances of Person the ability to `.eat("someFood")`
          - When a person eats, the food received should be pushed into their `stomach` array
          - The `eat` method should have no effect if there are 10 items in the `stomach`
      4. Give instances of Person the ability to `.poop()`
          - When an instance poops, its `stomach` should empty
      5. Give instances of Person a method `.toString()`
          - When toString is invoked, it should return a string with `name` and `age` of that instance
          -For example: when toString is invoked, it could return: "Mary, 50"
*/

function Person() {

}

/*
  TASK 2 - Cars got to drive!

  Use the Car constructor below to do the following:
      1. Initialize `model` and `milesPerGallon` from arguments
      2. All instances built with Car should
          - initialize with an `tank` set at 0
          - initialize with an `odometer` set at 0
      3. Give cars the ability to fuel up with `.fill(gallons)`
          - when `.fill()` is invoked, add the `gallons` received to the `tank`
     
  STRETCH GOALS: 
      1. Give cars the ability to `.drive(distance)` 
          - when invoked, the `odometer` should go up by the `distance` driven
          - when invoked, the `tank` should go down depending on the `milesPerGallon` value
      2. If a car's `tank` becomes empty while driving, the `drive` method should return the
         following string:
          
         "I ran out of fuel at x miles!" 
         (x being the `odometer` value when the fuel ran out)
*/

function Car() {

}

/*
  TASK 3 - Baby must play!

  Use the Baby constructor below to do the following:
      1. Make `Baby` a constructor subclassing `Person` from Task 1
      2. Besides `name` and `age`, `Baby` takes a third argument to initialize `favoriteToy`
      3. Besides the methods on Person.prototype, `Baby` should have the ability to `.play()`
          - when invoked, `play()` should return the following string:
          
          "Playing with x"
          (x being the favorite toy)
*/
function Baby() {

}

/* 
  TASK 4 - Let's talk about `this`

  In your own words explain the four principles for the "this" keyword below:
  1. 
  2. 
  3. 
  4. 
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
