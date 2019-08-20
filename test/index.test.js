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

