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

describe('Car', () => {
  let batmobile
  beforeEach(() => {
    batmobile = new Car('BatMobile', 20)
  })
  it('initializes with the given model', () => {
    expect(batmobile.model).to.equal('BatMobile')
  })
  it('initializes with the given milesPerGallon', () => {
    expect(batmobile.milesPerGallon).to.equal(20)
  })
  it('initializes with an empty tank', () => {
    expect(batmobile.tank).to.equal(0)
  })
  it('initializes with an odometer at 0 miles', () => {
    expect(batmobile.odometer).to.equal(0)
  })
  it('fuel method increases the tank by the given gallons', () => {
    batmobile.fill(10)
    expect(batmobile.tank).to.equal(10)
    batmobile.fill(10)
    expect(batmobile.tank).to.equal(20)
  })
  it('driving when enough fuel increases odometer correctly', () => {
    batmobile.fill(10)
    batmobile.drive(50)
    expect(batmobile.odometer).to.equal(50)
  })
  it('driving when enough fuel decreases tank correctly', () => {
    batmobile.fill(10)
    batmobile.drive(100)
    expect(batmobile.tank).to.equal(5)
  })
  it('driving when NOT enough fuel increases miles by drivable miles', () => {
    batmobile.fill(10)
    batmobile.drive(201)
    expect(batmobile.odometer).to.equal(200)
  })
  it('driving when NOT enough fuel empties the tank', () => {
    batmobile.fill(10)
    batmobile.drive(201)
    expect(batmobile.tank).to.equal(0)
  })
  it('driving when NOT enough fuel returns correct string', () => {
    batmobile.fill(10)
    expect(batmobile.drive(201)).to.include(200)
  })
})
