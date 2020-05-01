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
*/
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
  
}
/*
    - Give instances of Person the ability to `.eat("someFood")`:*/
Person.prototype.eat = function(someFood){
  let item = 10;
  if(this.stomach.length < item ){
    this.stomach.push(someFood);
  }
}

/*
+ When eating an edible, it should be pushed into the `stomach`.
+ The `eat` method should have no effect if there are 10 items in the `stomach`.
- Give instances of Person the ability to `.poop()`:
+ When an instance poops, its `stomach` should empty.*/

Person.prototype.poop=function(){
  //making sure stomach is empty
  return this.stomach = [];
}

/*
- Give instances of Person a method `.toString()`:
+ It should return a string with `name` and `age`. Example: "Mary, 50"
*/

Person.prototype.toString = function(){
  return `${this.name},${this.age}`;
}

//test
//const testPerson = new Person('Robel' , 36);

/*
  TASK 2
      
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
*/

function Car(model , milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

/*
- Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
*/

Car.prototype.fill = function(gallons){
  this.tank = this.tank + gallons;
  return this.tank;
}
/*
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
        - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/
Car.prototype.drive =function(distance){
  let maxDisWithTank = this.tank * this.milesPerGallon;
  let resetVal = 0;
  if(distance < maxDisWithTank){
    //Streach 1
    this.odometer = this.odometer + distance;
    //Streach 2
    const disDriven = distance/this.milesPerGallon;
    this.tank = this.tank - disDriven;
  } else {
    this.odometer = this.odometer + maxDisWithTank;
    this.tank = resetVal;
    return `I ran out of fuel at ${this.odometer} miles!`
  }
}



//test
let firstCar = new Car('golfGti', 15)
/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age ,favoriteToy) {
  Person.call(this, name, age)
  this.favoriteToy = favoriteToy;  
}

Baby.prototype = Object.create(Person.prototype); 

Baby.prototype.play = function() { 
  return `Playing with ${this.favoriteToy}`
}
//Baby.prototype = Object.create(Person.prototype); 
/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Global Object Binding : 'this' is used as the windows or the entire console object
  2. Implicit Binding : Whenever a precedding dot calls a function the object before the dot is 'this'
  3. New Binding : while creating a constructor function 'this' is used to specify the specific instance of an object created by a constructor function. 
  4. Explicit Binding : 
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
