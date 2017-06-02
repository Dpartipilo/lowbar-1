const {expect} = require('chai');
const _ = require ('../main.js');
// const sinon = require ('sinon');

describe('_', function () {
  'use strict';

  it('is an object', function () {
    expect(_).to.be.an('object');
  });

  //  IDENTITY
    describe('_.identity', function () {
        it('is a function', function () {
            expect(_.identity).to.be.a('function');
        });

        it('takes one argument', function () {
            expect(_.identity).to.have.lengthOf(1);
        });

        it('returns the inputted value (number)', function () {
            const number = 4;
            expect(_.identity(number)).to.be.a('number');
            expect(_.identity(number)).to.equal(4);
            expect(_.identity(number)).to.equal(number);
        });

        it('returns the inputted value (string)', function () {
            const str = 'hello world';
            expect(_.identity(str)).to.be.a('string');
            expect(_.identity(str)).to.equal('hello world');
            expect(_.identity(str)).to.equal(str);
        });

        it('returns the inputted value (boolean)', function () {
            const boo = true;
            expect(_.identity(boo)).to.be.a('boolean');
            expect(_.identity(boo)).to.equal(true);
            expect(_.identity(boo)).to.equal(boo);
        });

         it('returns the inputted value (array)', function () {
            const arr = [1,2,3,4,5,6];
            expect(_.identity(arr)).to.be.an('array');
            expect(_.identity(arr)).to.eql([1,2,3,4,5,6]);
            expect(_.identity(arr)).to.equal(arr);
        });

        it('returns the inputted value (object)', function () {
            const obj = {a: 1, b: 2, c:3};
            expect(_.identity(obj)).to.be.an('object');
            expect(_.identity(obj)).to.eql({a: 1, b: 2, c:3});
            expect(_.identity(obj)).to.equal(obj);
        });

        it('returns undefined if no arguments are given', function () {
            expect(_.identity()).to.be.undefined;
        });
    });

});



