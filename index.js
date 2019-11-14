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
  this.stomach = []
}
Person.prototype.eat = function(someFood) {
  if(this.stomach.length < 10){
    this.stomach.push(someFood);
 } 
}
Person.prototype.poop = function() {
  this.stomach.length = 0;
}
Person.prototype.toString = function() {
  return `${this.name} + ${this.age}`;
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

function Car(model, milesPerGallon) {
  this.model = model,
  this.milesPerGallon = milesPerGallon,
  this.tank = 0,
  this.odometer = 0
  // this.fill = function(gallons){
  //   return this.tank + gallons;
  // }
}
Car.prototype.fill = function(gallons){
  console.log(this.tank += gallons);
  return this.tank + gallons; 
}

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(childAttributes) {
  Person.call(this, childAttributes); // binding this to Person
  this.isChild = childAttributes.isChild; // this will be a special attribute to Baby
}
Baby.prototype = Object.create(Person.prototype);
Baby.prototype.checkIfChild = function() {
  if(this.isChild) {
    console.log(`My name is ${this.name} and I am a child object`);
  }
};
function Baby(name, age, favoriteToy) {
  let Baby = Object.create(Person);
  this.name = name;
  this.age = age;
  this.favoriteToy = favoriteToy;
}
Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}`;
}

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. If the new keyword is used when we are calling the function, this inside the function is a new object.
  2. If apply, call, or bind are used when we call a function, this inside the function is the object that we passed in as the argument.
  3. If a function is called as a method this is the object that the function is a property of. 
  4. If a function is invoked as a free function, invoked without any of the above conditions, this is the global object.
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
