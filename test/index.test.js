////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////


/* eslint-env mocha */
if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detection Stuff //
  // Node/Non-browser test env
  var chai = require('chai')
  var {
    Airplane,
    Car,
    Person
    // TODO: Add all functions to export/test here
  } = require('../index.js')
}
var expect = chai.expect

// Example:
describe('Airplane', () => {
  it('instance has name', () => { 
    const a = new Airplane('Gulfstream 550')
    expect(a.name).to.eq(`Gulfstream 550`) 
  })
  it('behaves correctly', () => {
    const myPlane = new Airplane('Jumbo');
    expect(myPlane.name).to.equal('Jumbo')
    expect(myPlane.isFlying).to.equal(false)
    myPlane.takeOff();
    expect(myPlane.isFlying).to.equal(true)
    myPlane.land();
    expect(myPlane.isFlying).to.equal(false)
  })
})

// - Build a Person Constructor that takes `name` and `age`.
// - Give persons the ability to `eat()` edibles.
// - When eating an `edible`, it should be pushed into a `stomach` property which is an array.
// - Give persons the ability to `poop()`.
// - When pooping, the `stomach` should empty.
// - Give persons a method `toString()`, returning a string `name` and `age`. Example: "Mary, 50"
describe('Person', () => {
  it('behaves correctly', () => {
    const neo = new Person('Neo', 20);

    expect(neo.name).to.equal('Neo')
    neo.eat('🥑')
    expect(neo.stomach).to.include('🥑')
    neo.eat('🍕')
    expect(neo.stomach).to.deep.equal(['🥑', '🍕'])
    neo.poop()
    expect(neo.stomach).to.have.lengthOf(0)
  })
})

// - Build a Car constructor that takes `make`, `model` and `milesPerGallon`.
// - Give cars the ability to get fueled with `fill(gallons)` method. Add `gallons` to `fuel`.
// - Give cars ability to `drive(distance)`, the driven `distance` should be added to an `odometer` property, and subtracted from the property `fuel`.
// - A car which runs out of `fuel` can't `drive()` anymore - instead it should return a string "I ran out of fuel at {odometer} miles!"
describe('Car', () => {
  it('behaves correctly', () => {
    const c = new Car('Bat', 'Mobile', 10);
    c.fill(50)
    expect(c.fuel).to.equal(50)
    c.drive(5)
    expect(c.fuel).to.equal(25)
    expect(c.odometer).to.equal(5)
    c.drive(5)
    expect(c.fuel).to.equal(0)
    expect(c.odometer).to.equal(10)
    expect(c.drive(999)).to.equal(`I ran out of fuel at 50 miles!`)
    c.fill(25)
    expect(c.fuel).to.equal(25)
  })
})

