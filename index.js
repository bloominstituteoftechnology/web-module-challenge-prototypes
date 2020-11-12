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

function Person(name,age){
  this.name = name;
  this.age = age;
  this.stomach = [];
}
Person.prototype.eat = function(edible){
  if(this.stomach.length < 10){
    this.stomach.push(edible);
  }
}
Person.prototype.poop = function(){
  this.stomach = [];
}
Person.prototype.toString = function(){
  return`${this.name},${this.age}`;
}
// const personOne = new Person("Jake from StateFarm", 20);
// const personTwo = new Person("A Aron", 29);
// const personThree = new Person("Blake",24);

// console.log(personOne.toString());
// console.log(personTwo.toString());
// console.log(personThree.toString());

// personOne.eat("Tacos");
// personTwo.eat("Pizza");
// personThree.eat("Sushi");

// personOne.poop();
// console.log(personOne.stomach);


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
  this.tank =+ gallons;
}



// do not know why this part does not work compared to line95
// Car.prototype.fill = function(gallons){
//   if(this.tank.length < []){
//     this.tank.push(gallons);
//   }
// }

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

// Baby constructor - check
// arg of name,age,favoriteToy - check
// person.prototype - check
// baby ability to .play - check
// return string - check

function Baby(name, age, favoriteToy){
  Person.call(this, name, age)
  this.favoriteToy = favoriteToy;
}
Baby.prototype = Object.create(Person.prototype);

const daBabyRapper = new Person({ 
  name:"50 Cent",
  age:"2 and a half",
  favoriteToy:"money",
});// what do i need to do to get daBabyRapper to work?? not nessassary to invoke

Baby.prototype.play = function(){
 return `Playing with ${this.favoriteToy}`
}

//Baby.prototype = function(){
//  console.log(`Playing with ${this.favoriteToy}.`); // the ${} may not be this.favoriteToy
//};

// tabbing this out b/c i think its now the best use case for this task:

// this has to be for the baby constructor:
// Baby.prototype.play = function(){
//   console.log(`Playing with ${this.favoriteToy}.`);
// }

// this code did not have the person.prototype method to inherit// person first //
// function Baby(name, age, favoriteToy) {
//   this.name = name,
//   this.age = age,
//   this.favoriteToy = favoriteToy;
// }
// Baby.prototype.play = function(){
//   console.log(`${this.name} is ${this.age} years old and loves playing with ${this.favoriteToy}.`)
// }
// const daBabyRapper = new Baby({
//   name:"50 Cent",
//   age:"2 and a half",
//   favoriteToy:"money",
// });
// daBabyRapper.play();

/// this .bind could only pass in two arg as placeholder values
// const daBabyRapper = new Person("50 Cent", "unknown", "money");
// daBabyRapper.play();

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:

  1. Window/Global Object Binding: 'this' defaults to the window/global scope when all other binding rules are not used,   

  2. Implicit Binding: when invoking the function, looking to the left of the period 'this' is what it is referring to 

  3. New Binding: 'this' points to it when constructing a function using the 'new' keyword for an object

  4. Explicit Binding: we tell JS exactly what to do with 'this' should refer to
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
