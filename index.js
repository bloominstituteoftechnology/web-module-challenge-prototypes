/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane (name) {
  this.name = name
  this.isFlying = false
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true
}
Airplane.prototype.land = function () {
  this.isFlying = false
}

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

function Person (name, age) {
  this.name = name
  this.age = age
  this.stomach = []
}
Person.prototype.eat = function (food) {
  if (this.stomach.length < 10) {
    this.stomach.push(food)
  }
}
Person.prototype.poop = function () {
  this.stomach = []
}
Person.prototype.toString = function () {
  return `${this.name},  ${this.age}`
}

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

function Car (model, milesPerGallon) {
  this.model = model
  this.milesPerGallon = milesPerGallon
  this.tank = 0
  this.odometer = 0
}
Car.prototype.fill = function (gallons) {
  this.tank += gallons
}
Car.prototype.drive = function (distance) {
  this.odometer += distance
  //82 increasing our odo by our distance travelled

  if (this.milesPerGallon * this.tank < distance) { 
    //84 is checking if mpg * tank < distance driven -> if it is less, then that means we do not have enough gas to drive the distance required, which will ultimately make us run out of gas

    this.odometer = this.milesPerGallon * this.tank
    //87 is assigning the odometer to our mpg * tank (max distance able to travel to zero)

    this.tank = 0
    //91 setting tank to zero if our distance is greater than our tank allows

    return `Ran out of gas at ${this.odometer} miles`
    //93 returning our string with our max odometer allowance for that tank

  } else {
    this.tank -= distance / this.milesPerGallon
    //98 if our gas in our tank is greater than our distance needed then we do have enough gas so we will subtract our tank from our distance divided by our mpg

    return `We are ${this.tank} miles until empty.`
  }

}

// const myCar = new Car('Thunderbird', 10)

// myCar.fill(100)
// console.log(' ')
// console.log(myCar.drive(80))
// console.log(' ')
// console.log('TANK', myCar.tank)
// console.log('ODO', myCar.odometer)

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
Baby.prototype = Object.create(Person.prototype)

function Baby (name, age, favoriteToy) {
  Person.call(this, name, age);

  this.favoriteToy = favoriteToy
}

Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`
}

const littleBaby = new Baby('Sam', 1, 'Horse');


console.log(littleBaby.favoriteToy)
console.log(littleBaby.play())


/* 
  TASK 4

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
  if (Airplane) {
    module.exports.Airplane = Airplane
  }
  if (Person) {
    module.exports.Person = Person
  }
  if (Car) {
    module.exports.Car = Car
  }
  if (Baby) {
    module.exports.Baby = Baby
  }
}
