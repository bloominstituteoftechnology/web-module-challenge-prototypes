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
  this.stomach = [];
  this.stomachContents = function() {
    if (this.stomach.length === 0) {
      return `Items: ${this.stomach.length}`;
    } else {
      return `${this.stomach}.\n\nItems: ${this.stomach.length}`;
    }
  }
  this.eat = function(food) {
    if (this.stomach.length < 10) {
      this.stomach.push(food);
      return `${name} successfully ate the ${food}.`;
    } else {
      return `${name}'s stomach is too full to eat the ${food}!`;
    }
  }
  this.poop = function() {
    this.stomach = [];
    if (this.stomach.length === 0) {
      return `${name}'s stomach is now empty.`
    }
  }
  this.info = `Name: ${name}\nAge: ${age}`;
}

const user = new Person('Mike', 40);
// user.eat('Apple');
// user.eat('Orange');
// user.eat('Kiwi');
// user.eat('Apple');
// user.eat('Orange');
// user.eat('Kiwi');
// user.eat('Apple');
// user.eat('Orange');
// user.eat('Kiwi');
// user.eat('Apple');
// user.stomachContents();
// user.poop();
// user.info;

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

function Car(model, mpg) {
  this.tank = 0;
  this.odometer = 0;
  this.fill = function(gallons) {
    this.tank += gallons;
    return `Successfully added ${gallons} gallons.\nYour ${model} now has ${this.tank} gallons.`;
  }
  this.drive = function(distance) {
    this.odometer += distance;
    this.tank -= distance / mpg;
    if (this.tank === 0) {
      return `You ran out of fuel at ${this.odometer} miles!`;
    } else if (this.tank > 1) {
      return `Odometer: ${this.odometer} miles\nTank: ${this.tank} gallons`;
    } else {
      return `Odometer: ${this.odometer} miles\nTank: ${this.tank} gallon`;
    }
  }
}

const myCar = new Car('Civic', 30);

// myCar.fill(7);
// myCar.fill(3);
// myCar.fill(3);
// myCar.drive(60);
// myCar.drive(300);
// myCar.drive(30);

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Person2(attributes) {
  this.name = attributes.name;
  this.age = attributes.age;
  this.speak = `Hello! My name is ${this.name}!`;
}


function Baby(attributes) {
  Person2.call(this, attributes);
  this.name = `Name: ${attributes.name}`;
  this.age = `Age: ${attributes.age} month(s)`;
  this.play = function() {
    return `Currently playing with a ${attributes.favoriteToy}.`;
  }
}

Baby.prototype = Object.create(Person2.prototype);

const newBaby = new Baby({
  name: 'Little Johhny',
  age: 6,
  favoriteToy: 'stuffed tiger',
});

// newBaby.name;
// newBaby.age;
// newBaby.play();
// newBaby.speak;

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Is the function called by 'new'?
  2. Is the function called by 'call()', 'apply()', or 'bind()'?
  3. Is the function called as a method, i.e. 'object.function()'?
  4. Is the function called in the global scope?
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
