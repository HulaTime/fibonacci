const sut = require('../index'),
  chai = require('chai'),
  should  = chai.should();

describe('index', () => {
  it('should exist', () => {sut.should.exist})
});

describe('generateFib', () => {
  it('should be a function', () => {
    sut.generateFib.should.be.instanceof(Function);
  });

  it('returns an array', () => {
    sut.generateFib().should.be.instanceof(Array);
  });

  it('returns to 3rd number if passed 3 as arg', () => {
    sut.generateFib(3).should.eql([1, 1, 2]);
  });

  it('returns to 50th number if passed 50 as arg', () => {
    sut.generateFib(15).should.eql([1,1,2,3,5,8,13,21,34,55,89,144,233,377,610]);
  });

  it('returns 1 if passed 1 as arg', () => {
    sut.generateFib(1).should.eql([1]);
  });

  it('returns [1,1] if passed 2 as arg', () => {
    sut.generateFib(2).should.eql([1,1]);
  });

  it('throws an input exception when passed a String', () => {
    sut.generateFib('hello').should.
  });
});
 