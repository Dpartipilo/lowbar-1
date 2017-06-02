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
            _.each ([1,2,3,4,5,6], spy);
            expect(spy.callCount).to.equal(6);
        });  

        it('calls the function as many times as items in the array (COUNT)', function () {
            let count = 0;
            const incrementCount = () => count++;
            _.each ([1,2,3,4,5,6], incrementCount);
            expect(count).to.equal(6);
        });

        it('passes each item of the array as the first argument to the function', function () {
            let resultArr = [];
            const putItemInArr = (item) => resultArr.push(item);
            _.each ([1,2,3,4,5,6], putItemInArr);
            expect(resultArr).to.have.lengthOf(6);
            expect(resultArr).to.eql([1,2,3,4,5,6]);
        });

        it('passes the index of each element of the array as the second argument to the function', function () {
            let indexArr = [];
            const putIndexInArr = (item, index) => indexArr.push(index);
            _.each ([1,2,3,4,5,6], putIndexInArr);
            expect(indexArr).to.have.lengthOf(6);
            expect(indexArr).to.eql([0,1,2,3,4,5]);
        });

        it('passes a list of the original array each time the function iterates', function () {
            let listArr = [];
            const putListInArr = (item, index, list) => listArr.push(list);
            _.each([1, 2, 3, 4], putListInArr);
            expect(listArr).to.eql([[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]);
        });

        it('calls the function as many times as key:value pairs in the object (SINON)', function () {
            const spy = sinon.spy();
            _.each ({a: 1, b: 2, c:3, d:4}, spy);
            expect(spy.callCount).to.equal(4);
        });  

        it('passes the value of each item in an object as the first argument to the function', function () {
            let itemsArr = [];
            const  putItemInArr = (item) => itemsArr.push(item);

            _.each({ one: 1, two: 2, three: 3, four: 4 }, putItemInArr);
            expect(itemsArr).to.eql([1, 2, 3, 4]);
        });

        it('passes the key of each item in an object as the second argument to the function', function () {
            let keysArr = [];
            const putItemInArr = (item, key) => keysArr.push(key);
        
            _.each({ one: 1, two: 2, three: 3 }, putItemInArr);
            expect(keysArr).to.eql(['one', 'two', 'three']);
            });

        it('passes a list of the original object each time the function iterates', function () {
            let listArr = [];
            const putListInArr = (item, key, list) => listArr.push(list);
            _.each({ one: 1, two: 2, three: 3 }, putListInArr);
            expect(listArr).to.eql([{ one: 1, two: 2, three: 3 }, { one: 1, two: 2, three: 3 }, { one: 1, two: 2, three: 3 }]);
        });
  
});

//  MAP

    describe('_.map', function () {
        it('is a function', function () {
            expect(_.map).to.be.a('function');
        });
        
        it('takes two arguments', function () {
            expect(_.map).to.have.lengthOf(2);
        });
    
        it('calls the function as many times as items in the array (SINON)', function () {
            const spy = sinon.spy();
            _.map ([1,2,3,4,5,6], spy);
            expect(spy.callCount).to.equal(6);
        });  

        it('calls the function as many times as items in the array (COUNT)', function () {
            let count = 0;
            const multiplyThree = n => {
                count ++;
                n * 3;
            };
            _.map ([1,2,3,4,5,6], multiplyThree);
            expect(count).to.equal(6);
        });

        it('returns a transformed array', function () {
            const multiplyThree = (n) => n * 3;

            const result = _.map ([1,2,3,4,5,6], multiplyThree);
            expect(result).to.be.an('array');
            expect(result).to.eql([3,6,9,12,15,18]);
        });

        it('the function can access each item of the array and transform it', function () {
            const accessItem = (el) => [el, el * 2];

            const result = _.map ([1,2,3], accessItem);
            expect(result).to.be.an('array');
            expect(result).to.eql([[1,2], [2,4], [3,6]]);
        });

        it('the function can access the index of each item of the array', function () {
            const accessIndex = (el, index) => [el, index];

            const result = _.map (['a', 'b', 'c'], accessIndex);
            expect(result).to.be.an('array');
            expect(result).to.eql([['a', 0], ['b',1], ['c',2]]);
        });

        it('the function can access the inputted array during each iteration', function () {
            const accessList = (el, index, list) => list;

            const result = _.map (['a', 'b', 'c'], accessList);
            expect(result).to.be.an('array');
            expect(result).to.eql([['a', 'b', 'c'],['a', 'b', 'c'],['a', 'b', 'c']]);
        });

        it('calls the function as many times as items in the object (SINON)', function () {
            const spy = sinon.spy();
            _.map ({a: 1, b: 2, c: 3, d: 4, e: 5}, spy);
            expect(spy.callCount).to.equal(5);
        });

        it('returns a transformed object', function () {
            const multiplyThree = (n) => n * 3;

            const result = _.map ({a: 1, b: 2, c: 3, d: 4, e: 5}, multiplyThree);
            expect(result).to.be.an('object');
            expect(result).to.eql({a: 3, b: 6, c: 9, d: 12, e: 15});
        });

        it('the function can access each value of the array and transform it', function () {
            const accessItem = (value) => [value, value * 2];

            const result = _.map ({a: 1, b: 2, c: 3, d: 4, e: 5}, accessItem);
            expect(result).to.be.an('object');
            expect(result).to.eql({a: [1, 2], b: [2, 4], c: [3,6], d: [4, 8], e: [5,10]});
        });

        it('the function can access the keys of each of the objects', function () {
            const accessIndex = (value, key) => [(value + 2), key];

            const result = _.map ({a: 1, b: 2, c: 3}, accessIndex);
            expect(result).to.be.an('object');
            expect(result).to.eql({a: [3, 'a'], b: [4, 'b'], c: [5, 'c']});
        });

        it('the function can access the inputted list during each iteration', function () {
            const accessList = (value, key, list) => list;

            const result = _.map ({a: 1, b: 2, c: 3}, accessList);
            expect(result).to.be.an('object');
            expect(result).to.eql({a: {a: 1, b: 2, c: 3}, b: {a: 1, b: 2, c: 3}, c: {a: 1, b: 2, c: 3}});
        });
    });

});




