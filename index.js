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

function range(start, end) {
  var ans = [];
  for (let i = start; i <= end; i++) {
      ans.push(i);
  }
  return ans;
};
  
 function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = range(0, 10);

    this.eat = function(){
      return this.stomach + 1;
    }

    this.poop = function(){
      return this.stomach - 2;
    }

    this.toString = function(){
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }

    const fredward = new Person('Freddy', 30)
    console.log(fredward.poop);
  
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
      
      this.fill = function(fuel){
        return fuel + this.tank
      }

      this.drive = function(distance){
          return this.odometer + distance,
          (distance / this.milesPerGallon) - this.tank
      }

      this.toString = function(){
        if(this.tank = 0){
          return `I ran out of fuel at ${this.odometer} miles!`
        }
      }
    
  };
  

  const prius = new Car('Prius', 40)
  console.log(prius.fill(12));
  console.log(prius.drive(100));
  
  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */

 function Baby(babyAtrribs) {
   Person.call(this, babyAtrribs);
   this.favoriteToy = babyAtrribs.favoriteToy;
  }

  Baby.prototype = Object.create(Person.prototype);

  const joey = new Baby({
    name: 'Joey',
    age: 3,
    favoriteToy: 'Rattler',
    play =  function(){
        return `Playing with ${this.favoriteToy}`
    }
  })

  console.log(joey);
 
  
  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. implicit binding, essentially putting the arguments needed in the actual object itself. Typically will be used in object form.
    2. call - will immediately invoke the function / .call you pass in your arguments 1 by 1
    3. apply  - will immediately invoke the function /  .apply you pass in your arguments as an array
    4. bind - you pass in your arguments 1 by 1 /  it does not immediate invoke the function, instead, it returns a brand new function to be invoked later.
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
// function foo(){
//     return 'bar';
// }

// export default{
//     foo,
//     Person, 
//     Car,
//     Baby
// }