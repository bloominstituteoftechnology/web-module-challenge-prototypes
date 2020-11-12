/*
  EXAMPLE TASK: //test
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
//Constructor can be used as many times as you need it 
// const boeing747 = Airplane("Boeing 747") returns { name: "Boeing 747", isFlying: false }
// console.log(boeing747) -- logs the following -- { name: "Boeing 747", isFlying: false }

Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};

// boeing747.takeOff() --> { name: "Boeing747", isFlying: true}



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
    
    //person constructor = 
    
    function Person(object) {
      this.name = object.name
      this.age = object.age
    }





    - All instances of Person should initialize with an empty `stomach` array.

    //  //person constructor = 
    
    function Person(object) {
      this.name = object.name
      this.age = object.age
      this.stomach = [] //.this attaches "name" "age" and "stomach" to the context "Person"
    }

    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.

    Person.prototype.eat = function (someFood) {   //Person needs to be capitalized because it is a constructor function  //think of it as Person.eat(banana)
      if (this.stomach.length < 10) {    //properties do not need parenthses (like .length), methods do (like .push(someFood))
        this.stomach.push(someFood)
      }
    };
    - Give instances of Person the ability to `.poop()`:  //adding information to a function will require parameters (like in Person.prototype.eat = function(someFood)), whilst simply manipulating information or removing information will not require parameters (like in Person.prototype.poop))
        + When an instance poops, its `stomach` should empty.

    Person.prototype.poop = function () {
      this.stomach = []
    }

    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"


      Person.prototype.toString = function () {
        // there can only be one return in a function - anything below your return will not be executed
        return `${this.name}, ${this.age}`
      }
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [] //.this attaches "name" "age" and "stomach" to the context "Person"
}
  
Person.prototype.eat = function (someFood) {   //Person needs to be capitalized because it is a constructor function  //think of it as Person.eat(banana)
  if (this.stomach.length < 10) {    //properties do not need parenthses (like .length), methods do (like .push(someFood))
    this.stomach.push(someFood)
  }
};

Person.prototype.poop = function () {
  this.stomach = []
}

Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`// there can only be one return in a function - anything below your return will not be executed
  
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
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(gallons) {
  return this.tank = this.tank + gallons
}

Car.prototype.drive = function(distance) {
  let odo = this.odometer = this.odometer + distance
  let tan = this.tank = this.tank - milesPerGallon
  // // if (this.tank = 0) {
  //   return `I ran out of fuel at ${this.odometer} miles!`
  // // }
  

/*
  TASK 3
    - Write a Baby constructor subclassing Person. //baby.extends(Person)
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`;
} 

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. this will check if the function is called by new
  2. this will check is the function is called by call(), apply(), or bind
  3. this will check if the function is called as a method
  4. this will check if the function is called in global scope
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
