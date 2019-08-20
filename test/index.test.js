////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////


/* eslint-env mocha */
if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detection Stuff //
  // Node/Non-browser test env
  var lukeSkywalker = require('../data/person-1.json')
  // var leiaOrgana = require('../data/person-5.json')
  // var obiWanKenobi = require('../data/person-10.json')

  var chai = require('chai')
  var {
    getName,
    // TODO: Add all functions to export/test here
  } = require('../index.js')
}
var expect = chai.expect

// TODO: Add test `describe` blocks here

// Example:
describe('getName()', () => {
  it('expected name for `Luke`', () => { expect(getName(lukeSkywalker)).to.eq(`Luke Skywalker`) })
  // it('expected name for `Leia`', () => { expect(getName(leiaOrgana)).to.eq(`Leia Organa`) })
  // it('expected name for `Obi-Wan`', () => { expect(getName(obiWanKenobi)).to.eq(`Obi-Wan Kenobi`) })
})


