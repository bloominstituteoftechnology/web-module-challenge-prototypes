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
  this.stomach = [];
};
Person.prototype.eat = function (someFood) {
  if (this.stomach.length < 10) {
    this.stomach.push(someFood);
  }; 
};
Person.prototype.poop = function() {
  this.stomach = [];
};
Person.prototype.toString = function() {
  return this.name + ', ' + this.age;
};
 
 

  
  
  
  
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

  
  
function Car(type, mPG) {
  this.model = type;
  this.milesPerGallon = mPG;
  this.tank = 0;
  this.odometer = 0;
};

let ThisCar = new Car('Ford', 24);

Car.prototype.fill = function (gallons) {
  let newTank = parseFloat(gallons) + parseFloat(this.tank);
  this.tank = newTank;
  return newTank;
};
Car.prototype.drive = function (distance) {
  let mileage = distance / this.milesPerGallon;
  let newOdometer = this.odometer + distance;
  let newTank = this.tank - mileage;
  this.odometer = newOdometer;
  this.tank = newTank.toFixed(2);
  return {Tank: this.tank, Odometer:this.odometer};
}



  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */

function Baby(name, age, toy) {
  Person.call(this, name, age);
  this.favoriteToy = toy;   
}
Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function() {
  return ("Playing with " + this.favoriteToy);
}

let newBaby = new Baby('Bill', 4, 'Doll');

 
  
  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. When 'this' is used in the global scope, the value of 'this' will be the window.
    2. When 'this' is used with a preceding dot, the object before the dot is 'this'.
    3. When 'this' is used within a constructor function, 'this' refers to the specific instance of the object that is created and returned by the function.
    4. When 'this' is used with the call or apply method, 'this' is explicitly defined.
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}