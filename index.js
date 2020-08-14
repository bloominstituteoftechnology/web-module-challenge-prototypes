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

// create constructor persona
function Person(attributes) {
  this.name = attributes.name;
  this.age = attributes.age;
  this.stomach = [];

}

// give Person ability to eat food and poop
// can not exceed ten items in stomach

Person.prototype.eat = function (someFood) {
  if (this.stomach.length < 10) {
    this.stomach.push(someFood)
  }
}

Person.prototype.poop = function () {
  this.stomach = [];
}

Person.prototype.toString = function () {
  return `${this.name},${this.age}`
}

const realPerson = new Person({
  name: 'Neo',
  age: 20,
})

console.log(realPerson.toString())



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

function Car(attributes) {
  this.model = attributes.model
  this.milesPerGallon = attributes.milesPerGallon
  this.tank = 0
  this.odometer = 0
}

Car.prototype.fill = function(gallons){
   gallons = this.tank
}

Car.prototype.drive = function(distance){
  this.odometer = distance

}

let bestCar = new Car ({
  model: 'Batmobile',

})
/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(attributes) {
  this.name = attributes.name
  this.age = attributes.age
  this.favToy = attributes.favToy
}

Baby.prototype.play = function(){
  return `${this.name} likes to play with ${this.favToy}`
}

let bigBaby = new Baby ({
  name: 'Gerald',
  age: 2,
  favToy: 'Teddy Bear'
})

console.log(bigBaby.play())
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
// if (typeof exports !== 'undefined') {
//   module.exports = module.exports || {}
//   if (Airplane) { module.exports.Airplane = Airplane }
//   if (Person) { module.exports.Person = Person }
//   if (Car) { module.exports.Car = Car }
//   if (Baby) { module.exports.Baby = Baby }
// }
