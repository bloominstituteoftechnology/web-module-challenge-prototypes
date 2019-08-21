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
    Person,
    Baby,
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

describe('Person', () => {
  let neo
  const foods = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  beforeEach(() => {
    neo = new Person('Neo', 20)
  })
  it('initializes with the given name', () => {
    expect(neo.name).to.equal('Neo')
  })
  it('initializes with the given age', () => {
    expect(neo.age).to.equal(20)
  })
  it('initializes with an empty stomach', () => {
    expect(neo.stomach).to.be.an('array')
    expect(neo.stomach.length).to.equal(0)
  })
  it('can eat up to 10 foods', () => {
    foods.forEach(item => neo.eat(item))
    foods.forEach(item => expect(neo.stomach).to.include(item))
  })
  it('can eat no more than 10 foods', () => {
    foods.forEach(item => neo.eat(item))
    neo.eat(11)
    expect(neo.stomach).to.not.include(11)
  })
  it('can poop to empty stomach', () => {
    foods.forEach(item => neo.eat(item))
    neo.poop()
    expect(neo.stomach.length).to.equal(0)
  })
  it('can state name and age', () => {
    const str = neo.toString();
    expect(str).to.include('Neo')
    expect(str).to.include('20')
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

