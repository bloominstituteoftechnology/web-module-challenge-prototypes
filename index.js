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
  
  Person.prototype.eat = function(edible){
    if(this.stomach.length <= 10){
      this.stomach.push(edible);
    }
  }

  Person.prototype.poop = function(){
    this.stomach = [];
  }

  Person.prototype.toString = function(){
    return `${this.name}, ${this.age}`;
  }
 
  /*
  const john = new Person ('John', 35);
  const emily = new Person ('Emily', 25);

  console.log(john.eat('pizza'));
  console.log(john.eat('pasta'));
  console.log(john.eat('gelato'));
  console.log(john.stomach);
  
  john.poop();
  console.log(john.stomach);
  */


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
  Car.prototype.drive = function(dist){
    const drivableMiles = this.tank * this.milesPerGallon;
    if (dist <= drivableMiles){
      this.odometer = this.odometer + dist;
      this.tank = this.tank - (dist/this.milesPerGallon)
    }else{
      this.odometer = this.odometer + drivableMiles;
      this.tank = 0;
      return `I ran out of fuel at ${this.odometer} miles!`
    }
  
  /*
  const ford = new Car ('Ford', 25);
  console.log(ford.fill.'20');
  */

  
  
  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
 function Person(name, age, favoriteToy) {
   Baby.call(this, age, favoriteToy);
   this.favoriteToy = favoriteToy;
  }
  Baby.prototype = Object.create(Person.prototype)
  Baby.prototype.play = function (){
    return `Playing with ${this.favoriteToy}`;
  }
 
  
  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. window/global object binding = when in global scope, the value of "this" will be the window/console object 
      (example: console.log(this))
    2. implicit binding = used whenever a preceding dot calls a function 
      (example: "this.name")
    3. new binding = the specific instance of the object that is created and returned by the constructor function 
      (example: function Person(greeter){this.greeter = greeter})
    4. explicit binding = whenever we use JS call or apply method, "this" is explicitly defined; we can override Person in previous example and call them with new functions (".call",".apply")
      (example: jerry.speak.call(newman))  
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