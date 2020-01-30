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
  this.stomach = [];
}
Person.prototype.eat = function(food) {
  this.stomach.length < 10 ? this.stomach.push(food) : null;
};
Person.prototype.poop = function() {
  this.stomach = [];
};
Person.prototype.toString = function() {
  return `${this.name}, ${this.age}`;
};
const me = new Person({
  name: "John Doe",
  age: 27
});
for (var i = 0; i < 15; i++) {
  me.eat("food");
}
console.log(me.stomach);
me.poop();
console.log(me.stomach);
console.log(me.toString());
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
Car.prototype.fill = function(gallons) {
  this.tank += gallons;
};
Car.prototype.drive = function(distance) {
  if (distance / this.milesPerGallon >= this.tank) {
    this.odometer = this.odometer + this.tank * this.milesPerGallon;
    this.tank = 0;
    return `I ran out out fuel at ${this.odometer} miles!`;
  }
  this.tank -= distance / this.milesPerGallon;
  this.odometer += distance;
};
const myCar = new Car({
  model: "Honda Civic",
  milesPerGallon: 34
});
console.log(myCar.tank);
myCar.fill(15);
console.log(myCar.tank);
myCar.drive(60);
console.log(myCar.tank + ` ` + myCar.odometer);
myCar.drive(60);
console.log(myCar.tank + ` ` + myCar.odometer);
console.log(myCar.drive(460));
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
Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}`;
};
const newBaby = {
  name: "Baby Jo",
  age: 2,
  favoriteToy: "JavaScript"
};
const meBaby = new Baby(newBaby);
console.log(meBaby.toString());
meBaby.eat("apple sauce");
console.log(meBaby.stomach);
console.log(meBaby.play());
/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Window/global object binding - When "this" is referrenced by itself, it will refer to the window/console object. This remains
  true even when called within a function as the function is also part of the window/console object.
  2. Implicit binding - When this is called within an object, it will refer to that object and calling this with the dot notation
  and a following property will refer to the object's property.
  3. New binding - in a constructor function, "this" will refer to all of the objects that were constructed.
  4. Explicit binding - "this" is explicitly defined when using call or apply method. Meaning that whatever you pass into the methods,
  "this" will mean that arguement or if "this" was passed in, it will refer to the object or constructor that it was passed from.
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