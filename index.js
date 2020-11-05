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

function Person(attr) {
                           // declaration of constructor taking attr as para
  this.name = attr.name;   // assign this.person => attr.person
  this.age = attr.age;     // assign this.age => attr.person
  this.stomach = [];       // create empty stomach container
}

// Working test code for constructor
// const tony = new Person({ name: "Tony", age: 46 });
// console.log(tony)
// output {name: 'Tony', age: 46}, stomach: []};

// EAT PROTOTYPE
Person.prototype.eat = function (
  array //prototype function declaration to //intake food
) {
  this.stomach = [array]; //puts food in the belly
};
//EAT TEST CODE
// tony.eat([
//   "rice",
//   "beans",
//   "avocado",
//   "cotija",
//   "tortilla",
//   "pico de gallo",
//   "crema",
//   "margarita"
// ]);
// console.log(tony.stomach[0]);
// output tony with above contents in stomach

//POOP PROTOTYPE
Person.prototype.poop = function ()             // prototype declaration of poop
{
  this.stomach[0] = [];                         // slicing data starting 0 by stomach.length
};
// WORKING POOP TEST CODE
// tony.poop();
// console.log(tony.stomach[0]);
// output of stomach = []

//.toString PROTOTYPE
Person.prototype.stringify = function ()      // prototype declaration stringify
{
  return `${this.name}, ${this.age}`;         // return name, age
};
// WORKING .toSting TEST CODE
// let test = tony.stringify();
// console.log(test);
// output of Tony, 46

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

function Car(car, mpg) {
                                     // Car constructor declaration passing car and miles per gallon as parameters
  this.model = car;                  // key this model giving car as value
  this.milesPerGallon = mpg;         // key this.mpg passing milesPerGallon as value
  this.tank = 0;                     // initialization of empty tank
  this.odometer = 0;                 // intitialization of - odometer
}

//CREATION OF newCar TEST CODE
// const ferrari = new Car(    "Ferrari",  30    );
// console.log(ferrari);
// console.log(`This ${ferrari.model} has ${ferrari.tank} gallons of gas in it`)
// OUTPUT Car {model: :"Ferrari", mpg: 30, tank: 0, odometer; 0}

// CAR FUELING PROTOTYPE
Car.prototype.fuel = function (
  gallons                                               // declaration of .fuel prototype taking gallons as a parameter
) {
  this.tank = gallons;                                  // sets this.tank = gallons
};

// WORKING TEST CODE FUELING THE TANK
// ferrari.fuel(12)
// console.log(ferrari)
// output object with tank = to argument of 12 passed in fuel function call

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
f; // BABY MAKER SUBCLASSING Person
function Baby(name, age, favoriteToy) {
                                                      //declaring function giving adding  name, age, and favorite toy as parameters
  Person.call(this, name, age);                       // Binder using this name and age with person
  this.favoriteToy = favoriteToy;                     // sets this.favorite toy to favoriteToy parameter

  Baby.prototype = Object.create(Person.prototype);   // creates baby using person method
  Baby.prototype.play = function () {
                                                      // declaring play function returning expected output statement
    return `Playing with ${this.favoriteToy}`;
  };
}

//WORKING BABY TEST CODE
const jordan = new Baby({
  name: "Jordan",
  age: "2 months",
  favoriteToy: "Rattle Booties"
});
console.log(jordan);
console.log(jordan.play());

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Global/ Window Binding - in global space you are accessing the immediate container which could be the window or the console.
  2. Implicit Binding - implicit binding is used in methods within objects and refer to the object container
  3. Explicit Binding - using .call and apply you can override the constructor objects by using the object's oriented (OOP) approach
  4. "new" keyword binding - keyword binding using 'new' creates new instances of the constructor function under teh given variable name. each time a new instance is created new functionName binds the newly created instance to the constructor.
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
