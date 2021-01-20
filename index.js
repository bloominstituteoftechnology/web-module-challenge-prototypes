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
  
 function Person(name, age) { //a constructor function with 3 properties-name, age and stomach(an empty array)
  this.name = name
  this.age = age
  this.stomach = [];
  }
Person.prototype.eat = function(snack){ /* an eat method to push item(snack) 
  into the stomach array; once the stomach has 10 items in it, nothing can be fed into the stomach*/
  if(this.stomach.length < 10){
    this.stomach.push(snack);
  }
  }
 Person.prototype.poop = function(){ // for instances for the person to poop......returns empty array.
  this.stomach = [];
  }
 Person.prototype.toString = function(){  // method to string
  return `${this.name}, ${this.age}`;
  }
 const personOne = new Person('Dan', 24);
 const personTwo = new Person('Nathan', 22);
 const personThree = new Person('Zoe', 21);

 console.log(personOne.toString());
 console.log(personTwo.toString());
 console.log(personThree.toString());

 
  
  
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
  
 function Car(model, milesPerGallon) {  //constructor that initializes model and milePerGallon from arguments - will initialize 
  // with tank and odometer both at '0'.
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
  }
  
Car.prototype.fill = function(gallons) {  //Gives cars the ability to get fueled with a `.fill(gallons)` method. 
  this.tank = this.tank + gallons;  //Adds the gallons to `tank`.
  };
  const myCar = new Car({
    model: "Jaguar",
    milesPerGallon: 18
  });
  console.log(myCar.tank);
  myCar.fill(20);
  console.log(myCar.tank);
 
  
  
  
  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
 function Baby(name, age, favoriteToy) { //created Baby constructor subclassing Person.
    Person.call(this, name, age);
    this.favoriteToy = favoriteToy; //added a third argument to initialize favoriteToy
  }
  Baby.prototype = Object.create(Person.prototype);
  Baby.prototype.play = function(){
    return `Playing with ${this.favoriteToy}`; 
  }
  
  const thisBaby = new Baby('Amy',2,'Pony');
  console.log(thisBaby.toString());
  thisBaby.eat("nuggets");
  console.log(thisBaby.stomach);
  console.log(thisBaby.play());
/* 
 
  
  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
1. In the global scope, "this" refers to the global object containing variables and functions that 
   can be accessed anywhere.
2. When followed by a dot, "this" refers to the object that is being accessed in the context of the function invocation.
3. When using a function method such as .call or .apply, "this" is explicitly passed as a parameter 
   i.e. "this" refers to the object that is passed when .call or .apply is invoked.
4. In constructor functions, When a constructor function is invoked, "this" refers to the instance of the new object that is returned 
   by the constructor function.
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