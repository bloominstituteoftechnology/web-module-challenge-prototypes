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
  this.stomach = []
  this.name = name,
  this.age = age
}
Person.prototype.eat = function(someFood){
  if(this.stomach.length < 10){ // means if there are 10 items or less in the stomach reutrn the next line 
    return this.stomach.push(someFood)// .push allows to have the food items added to the array 
  }
}
Person.prototype.poop = function() { //don't forget to capitalize constructor
  return this.stomach = [] // poop is a empty array for when the stomach is empty
}

Person.prototype.toString = function() {
  return `${this.name}, ${this.age}` // this will return a name and a age 
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

function Car(model, milesPerGallon) { // model and milesPerGallon are arguments
 this.model = model
 this.milesPerGallon = milesPerGallon
 this.tank = 0
 this.odometer = 0
}
Car.prototype.fill = function(gallons) { // 
  return this.tank += gallons ;
}
Car.prototype.drive = function(distance){}
Car.prototype.drive = function(distance){
  if (distance/this.milesPerGallon >= this.tank ){
    console.log(distance/this.milesPerGallon)
    this.odometer +=  this.tank*this.milesPerGallon ;
    this.tank = 0 ;
    return `I ran out of fuel at ${this.odometer} miles!`
  }
  this.odometer += distance ;
  this.tank -= distance/this.milesPerGallon ;
}
/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) { //arguments 
 this.name = name
 this.age = age
 this.favoriteToy = favoriteToy
}
Baby.prototype = Object.create(Person.prototype); // telling the child about the parent

Baby.prototype.play = function(){ // new method which when called will return a string 
  return `playing with ${this.favoriteToy}`
}

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Explicit binding - using call, apply, bind to identify meaning of this.
  2. Global binding - when this is console logged the value will be the window console object.
  3. New binding - a constructor function is used 'this' is the object created and return by the constructor function.
  4. Implicit bining - a function is called the object left of the dot gets the the value of 'this'
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
