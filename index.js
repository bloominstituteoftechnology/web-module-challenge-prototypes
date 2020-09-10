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
}

Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
};

Person.prototype.eat = function (someFood) {
  if (this.stomach.length < 10) {
    this.stomach.push(someFood);
  }
};

Person.prototype.poop = function () {
  this.stomach = [];
};

// const newPerson = new Person("Alex", 26);
// console.log(newPerson.speak());

// newPerson.eat("Chicken");

// console.log(newPerson.poop("True"));

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
  this.odometer = 0;
  this.tank = 0;
}

Car.prototype.fill = function (gallons) {
  this.tank += gallons;
};

Car.prototype.drive = function (distance) {
  if (this.milesPerGallon * this.tank >= distance) {
    this.odometer += distance;
    this.tank -= distance / this.milesPerGallon;
  } else {
    let canDrive = this.milesPerGallon * this.tank;
    this.tank = 0;
    this.odometer += canDrive;
    return `I ran out of fuel at ${this.odometer} miles!`;
  }
};

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

Baby.prototype.play = function () {
  return `Playing with ${this.favoriteToy}`;
};

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. The first principle of 'this' is the GLOBAL BINDING. When calling 'this' from a global binding scope, the value
  will be the window/ console Object. An example of calling 'this' from the global binding scope can be found below.
  
  function sayName(name) {
    console.log(this);
    return name
  }

  2. the second principle of 'this' is IMPLICIT BINDING. When calling 'this' from implicit binding, the value will be set to the object you are referencing. An example oc alling 'this' from implicit binding can be found below.

  const myObject = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}) //this.greeting references the key "greeting" on the object
    })
    console.log(this) // returns the object {greeting: 'Hello', sayHello: function}
  }

  3. the third principle of 'this' is the NEW BINDING. This binding method sets the value of 'this' when we call the function with the new keyword. Whatever we pass to the function becomes 'this'. An example of this can be found below.

  function person(greeter) {
    this.greeting = 'Hello';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter); -----> outputs {'Hello', "Alex"}
      console.log(this); -----> returns {greeting: 'Hello', greeter: "Alex", speak: function}
    }
  }

  const alex = new person("Alex");
  alex.speak();

  4. the last principle of 'this' is the EXPLICIT BINDING this one is similar to the new binding in the way it is implemented inside the function, however the explcit binding overrides what 'this' points to and allows you to give it a new value. It utilizes any one of three keywords to achieve this. They are .call(), .apply(), and .bind(). an example of explicit binding can be found below. We will use the same function as the new binding. 

  const motor = new person("Motor");
  alex.speak.call(motor); -----> outputs {'Hello', "Motor"} from the function above. Alex is being called with the value of motor. 
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
