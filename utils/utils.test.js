const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      var result = utils.add(33, 11);

      expect(result).toBe(44).toBeA('number');
    });
  });

  describe('#asyncAdd', () => {
    it('should async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (result) => {
        expect(result)
        .toBe(7)
        .toBeA('number');
        done();
      });
    });
  });

  describe('#square', () => {
    it('should square a number', () => {
      var result = utils.square(3);

      expect(result).toBe(9).toBeA('number');
    });
  });

  describe('#asyncSquare', () => {
    it('should async square a number', (done) => {
      utils.asyncSquare(3, (result) => {
        expect(result)
        .toBe(9)
        .toBeA('number');
        done();
      });
    });
  });

});

it('should set firstName and lastName', () => {
  var result = utils.setName({
    age: 20,
    likes: ['books']
  }, 'Advait Junnarkar');

  expect(result)
  .toBeA('object')
  .toInclude({
    firstName: 'Advait',
    lastName: 'Junnarkar'
  });
});

// it('should expect some values', () => {
//   // expect(12).toNotBe(11);
//   // expect({name: 'Advait'}).toEqual({name: 'Advait'});
//   // expect([2,3,4]).toExclude(1);
//   expect({
//     name: 'Advait',
//     age: 25,
//     location: 'Here'
//   }).toInclude({
//     age: 25
//   }).toExclude({
//     age: 23
//   });
// });
