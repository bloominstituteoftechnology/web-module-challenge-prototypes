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
this.stomach=[];
this.age= age;
this.name = name;
}

Person.prototype.eat = function (someFood){
  if(this.stomach.length <=9){
    this.stomach.push(someFood)
  }
}
Person.prototype.poop = function(){
  this.stomach.length = 0
};
Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`;
}
const neo = new Person({
  name:'Neo'
})
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
Car.prototype.fill = function(gallons){

  this.tank = this.tank + gallons;
}

Car.prototype.drive = function (distance, milesPerGallon){
  this.odometer = this.odometer + distance;
  this.tank = this.tank - this.milesPerGallon;
}

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(childattributes, favoriteToy) {
  Person.call(this, childattributes, favoriteToy);
  this.isBaby= childattributes.isBaby;
  this.favoriteToy = favoriteToy.isBaby;

  // const Baby = Person ({
  //   name = 'John',
  //   age = 1,
  // this.name = name,
  // this.age = age,
  // this.favoriteToy = favoriteToy;
  // })
}
Baby.prototype = Object.create(Person.prototype)
/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. windwos/global binding object binding: "this" refers to whatever scope it is placed in
  2. implicit binding: when preceeding dot calls a function, it points to the object before the dot. 
  3. New binding: when we use a constructor function, this refers to the specific instance of the ojbject that is created and returned by the constructor function.
  4. Explicit binding: if we used JS's call or apply method, this is explicitly defined.
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
