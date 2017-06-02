const {expect} = require('chai');
const _ = require ('../main.js');
const sinon = require ('sinon');

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

    //  FIRST
    describe('_.first', function () {
        it('is a function', function () {
            expect(_.first).to.be.a('function');
        });

        it('takes two arguments', function () {
            expect(_.first).to.have.lengthOf(2);
        });

        it('should return undefined for an empty array/string or if a non-array/string first argument is given', function () {
            const result1 = _.first();
            expect(result1).to.be.undefined;
            
            const result2 = _.first([]);
            expect(result2).to.be.undefined;

            const result3 = _.first('');
            expect(result3).to.be.undefined;

            const result4 = _.first({a: 1, b: 2});
            expect(result4).to.be.undefined;

            const result5 = _.first(true);
            expect(result5).to.be.undefined;

            const result6 = _.first(12345);
            expect(result6).to.be.undefined;
        });

        it('should return the first element of an array if no second argument is provided', function () {
            const result1 = _.first([1,2,3,4,5]);
            expect(result1).to.equal(1);

            const result2 = _.first(['hello', 'world']);
            expect(result2).to.equal('hello');
        });

        it('should return the first letter of a string if no second argument is provided', function () {
            const result = _.first('hello');
            expect(result).to.equal('h');
        });

        it('should return the elements up to the nth element of a given array, in an array format', function () {
            const result1 = _.first([1,2,3,4,5], 1);
            expect(result1).to.be.an('array');
            expect(result1).to.eql([1]);

            const result2 = _.first([1,2,3,4,5], 2);
            expect(result2).to.eql([1, 2]);

            const result3 = _.first(['to', 'be', 'or', 'not', 'to', 'be'], 4);
            expect(result3).to.eql(['to', 'be', 'or', 'not']);
        });

        it('should return the letters up to the nth letter of a given string, returning an array', function () {
            const result1 = _.first('hello', 1);
            expect(result1).to.be.an('array');
            expect(result1).to.eql(['h']);

            const result2 = _.first('hello', 2);
            expect(result2).to.eql(['h', 'e']);
        });

         it('should return an empty array if the number is negative or zero', function () {
            const result1 = _.first([1,2,3,4,5], -1);
            expect(result1).to.be.an('array');
            expect(result1).to.eql([]);

            const result2 = _.first([1,2,3,4,5], -3);
            expect(result2).to.be.an('array');
            expect(result2).to.eql([]);

            const result3 = _.first([1,2,3,4,5], 0);
            expect(result3).to.be.an('array');
            expect(result3).to.eql([]);
        });

        it('should assume Math.floor(n) if a decimal input is given for n', function () {
            const result1 = _.first([1,2,3,4,5], 0.8);
            expect(result1).to.eql([]);

            const result2 = _.first([1,2,3,4,5], 2.3);
            expect(result2).to.eql([1,2]);
        });

        it('returns the whole array if n is bigger than the array or string length', function () {
            const result1 = _.first([1,2,3,4,5], 100);
            expect(result1).to.eql([1,2,3,4,5]);

            const result2 = _.first('hello', 1000);
            expect(result2).to.eql(['h', 'e', 'l', 'l', 'o']);
        });


        it('should return an empty array if a string is entered and the number is negative or zero', function () {
            const result1 = _.first('hippopotamus', -1);
            expect(result1).to.be.an('array');
            expect(result1).to.eql([]);

            const result2 = _.first('hippopotamus', -3);
            expect(result2).to.be.an('array');
            expect(result2).to.eql([]);

            const result3 = _.first('hippopotamus', 0);
            expect(result3).to.be.an('array');
            expect(result3).to.eql([]);
        });

        it('should return an empty array if the input is an empty array/string and a number', function () {
            const result1 = _.first([], 1);
            expect(result1).to.eql([]);

            const result2 = _.first('', 1);
            expect(result2).to.eql([]);
        });
    });

    //  LAST
    describe('_.last', function () {
        it('is a function', function () {
            expect(_.last).to.be.a('function');
        });

        it('takes two arguments', function () {
            expect(_.last).to.have.lengthOf(2);
        });

        it('should return undefined for an empty array/string or if a non-array/string last argument is given', function () {
            const result1 = _.last();
            expect(result1).to.be.undefined;
            
            const result2 = _.last([]);
            expect(result2).to.be.undefined;

            const result3 = _.last('');
            expect(result3).to.be.undefined;

            const result4 = _.last({a: 1, b: 2});
            expect(result4).to.be.undefined;

            const result5 = _.last(true);
            expect(result5).to.be.undefined;

            const result6 = _.last(12345);
            expect(result6).to.be.undefined;
        });

        it('should return the last element of an array if no second argument is provided', function () {
            const result1 = _.last([1,2,3,4,5]);
            expect(result1).to.equal(5);

            const result2 = _.last(['hello', 'world']);
            expect(result2).to.equal('world');
        });

        it('should return the last letter of a string if no second argument is provided', function () {
            const result = _.last('hello');
            expect(result).to.equal('o');
        });

        it('should return the elements up to the nth element of a given array, in an array format', function () {
            const result1 = _.last([1,2,3,4,5], 1);
            expect(result1).to.be.an('array');
            expect(result1).to.eql([5]);

            const result2 = _.last([1,2,3,4,5], 2);
            expect(result2).to.eql([4, 5]);

            const result3 = _.last(['to', 'be', 'or', 'not', 'to', 'be'], 4);
            expect(result3).to.eql(['or', 'not', 'to', 'be']);
        });

        it('should return the letters up to the nth letter of a given string, returning an array', function () {
            const result1 = _.last('hello', 1);
            expect(result1).to.be.an('array');
            expect(result1).to.eql(['o']);

            const result2 = _.last('hello', 3);
            expect(result2).to.eql(['l', 'l', 'o']);
        });

         it('should return an empty array if the number is negative or zero', function () {
            const result1 = _.last([1,2,3,4,5], -1);
            expect(result1).to.be.an('array');
            expect(result1).to.eql([]);

            const result2 = _.last([1,2,3,4,5], -3);
            expect(result2).to.be.an('array');
            expect(result2).to.eql([]);

            const result3 = _.last([1,2,3,4,5], 0);
            expect(result3).to.be.an('array');
            expect(result3).to.eql([]);
        });

        it('should assume Math.ceil(n) if a decimal input is given for n', function () {
            const result1 = _.last([1,2,3,4,5], 0.8);
            expect(result1).to.eql([5]);

            const result2 = _.last([1,2,3,4,5], 2.3);
            expect(result2).to.eql([3,4,5]);

            const result3 = _.last('hello', 3.3);
            expect(result3).to.eql(['e','l','l', 'o']);

            
        });

        it('returns the whole array if n is bigger than the array or string length', function () {
            const result1 = _.last([1,2,3,4,5], 100);
            expect(result1).to.eql([1,2,3,4,5]);

            const result2 = _.last('hello', 1000);
            expect(result2).to.eql(['h', 'e', 'l', 'l', 'o']);
        });


        it('should return an empty array if a string is entered and the number is negative or zero', function () {
            const result1 = _.last('hippopotamus', -1);
            expect(result1).to.be.an('array');
            expect(result1).to.eql([]);

            const result2 = _.last('hippopotamus', -3);
            expect(result2).to.be.an('array');
            expect(result2).to.eql([]);

            const result3 = _.last('hippopotamus', 0);
            expect(result3).to.be.an('array');
            expect(result3).to.eql([]);
        });

        it('should return an empty array if the input is an empty array/string and a number', function () {
            const result1 = _.last([], 1);
            expect(result1).to.eql([]);

            const result2 = _.last('', 1);
            expect(result2).to.eql([]);
        });
    });

//  EACH
    describe('_.each', function () {
        it('is a function', function () {
            expect(_.each).to.be.a('function');
        });
        
        it('takes two arguments', function () {
            expect(_.each).to.have.lengthOf(2);
        });

        it('calls the function as many times as items in the array (SINON)', function () {
            const spy = sinon.spy();
            _.each ([1,2,3], spy);
            expect(spy.callCount).to.equal(3);
        });

        it('calls the function as many times as items in the array (COUNT)', function () {
            let count = 0;
            function incrementCount() {
                count++;
            }
            _.each ([1,2,3], incrementCount);
            expect(count).to.equal(3);
        });

    //  NEEDS FINISHING
    });

});



