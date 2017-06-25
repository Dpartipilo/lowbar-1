const { expect } = require('chai');
const path = require('path');
const _ = require(path.resolve(__dirname, '..', 'main'));
const sinon = require('sinon');

describe('_', function () {
    'use strict';

    it('is an object', function () {
        expect(_).to.be.an('object');
    });

    //  IDENTITY
    describe('_.identity', function () {
        it('1. is a function', function () {
            expect(_.identity).to.be.a('function');
        });

        it('2. takes one argument', function () {
            expect(_.identity).to.have.lengthOf(1);
        });

        it('3. returns the inputted value (number)', function () {
            const number = 4;
            expect(_.identity(number)).to.be.a('number');
            expect(_.identity(number)).to.equal(4);
            expect(_.identity(number)).to.equal(number);
        });

        it('4. returns the inputted value (string)', function () {
            const str = 'hello world';
            expect(_.identity(str)).to.be.a('string');
            expect(_.identity(str)).to.equal('hello world');
            expect(_.identity(str)).to.equal(str);
        });

        it('5. returns the inputted value (boolean)', function () {
            const boo = true;
            expect(_.identity(boo)).to.be.a('boolean');
            expect(_.identity(boo)).to.equal(true);
            expect(_.identity(boo)).to.equal(boo);
        });

        it('6. returns the inputted value (array)', function () {
            const arr = [1, 2, 3, 4, 5, 6];
            expect(_.identity(arr)).to.be.an('array');
            expect(_.identity(arr)).to.eql([1, 2, 3, 4, 5, 6]);
            expect(_.identity(arr)).to.equal(arr);
        });

        it('7. returns the inputted value (object)', function () {
            const obj = { a: 1, b: 2, c: 3 };
            expect(_.identity(obj)).to.be.an('object');
            expect(_.identity(obj)).to.eql({ a: 1, b: 2, c: 3 });
            expect(_.identity(obj)).to.equal(obj);
        });

        it('8. returns undefined if no arguments are given', function () {
            expect(_.identity()).to.be.undefined;
        });
    });

    //  FIRST
    describe('_.first', function () {
        it('1. is a function', function () {
            expect(_.first).to.be.a('function');
        });

        it('2. takes two arguments', function () {
            expect(_.first).to.have.lengthOf(2);
        });

        it('3. should return undefined for an empty array/string or if a non-array/string first argument is given', function () {
            const result1 = _.first();
            expect(result1).to.be.undefined;

            const result2 = _.first([]);
            expect(result2).to.be.undefined;

            const result3 = _.first('');
            expect(result3).to.be.undefined;

            const result4 = _.first({ a: 1, b: 2 });
            expect(result4).to.be.undefined;

            const result5 = _.first(true);
            expect(result5).to.be.undefined;

            const result6 = _.first(12345);
            expect(result6).to.be.undefined;
        });

        it('4. should return the first element of an array if no second argument is provided', function () {
            const result1 = _.first([1, 2, 3, 4, 5]);
            expect(result1).to.equal(1);

            const result2 = _.first(['hello', 'world']);
            expect(result2).to.equal('hello');
        });

        it('5. should return the first letter of a string if no second argument is provided', function () {
            const result = _.first('hello');
            expect(result).to.equal('h');
        });

        it('6. should return the elements up to the nth element of a given array, in an array format', function () {
            const result1 = _.first([1, 2, 3, 4, 5], 1);
            expect(result1).to.be.an('array');
            expect(result1).to.eql([1]);

            const result2 = _.first([1, 2, 3, 4, 5], 2);
            expect(result2).to.eql([1, 2]);

            const result3 = _.first(['to', 'be', 'or', 'not', 'to', 'be'], 4);
            expect(result3).to.eql(['to', 'be', 'or', 'not']);
        });

        it('7. should return the letters up to the nth letter of a given string, returning an array', function () {
            const result1 = _.first('hello', 1);
            expect(result1).to.be.an('array');
            expect(result1).to.eql(['h']);

            const result2 = _.first('hello', 2);
            expect(result2).to.eql(['h', 'e']);
        });

        it('8. should return an empty array if the number is negative or zero', function () {
            const result1 = _.first([1, 2, 3, 4, 5], -1);
            expect(result1).to.be.an('array');
            expect(result1).to.eql([]);

            const result2 = _.first([1, 2, 3, 4, 5], -3);
            expect(result2).to.be.an('array');
            expect(result2).to.eql([]);

            const result3 = _.first([1, 2, 3, 4, 5], 0);
            expect(result3).to.be.an('array');
            expect(result3).to.eql([]);
        });

        it('9. should assume Math.floor(n) if a decimal input is given for n', function () {
            const result1 = _.first([1, 2, 3, 4, 5], 0.8);
            expect(result1).to.eql([]);

            const result2 = _.first([1, 2, 3, 4, 5], 2.3);
            expect(result2).to.eql([1, 2]);
        });

        it('10. returns the whole array if n is bigger than the array or string length', function () {
            const result1 = _.first([1, 2, 3, 4, 5], 100);
            expect(result1).to.eql([1, 2, 3, 4, 5]);

            const result2 = _.first('hello', 1000);
            expect(result2).to.eql(['h', 'e', 'l', 'l', 'o']);
        });


        it('11. should return an empty array if a string is entered and the number is negative or zero', function () {
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

        it('12. should return an empty array if the input is an empty array/string and a number', function () {
            const result1 = _.first([], 1);
            expect(result1).to.eql([]);

            const result2 = _.first('', 1);
            expect(result2).to.eql([]);
        });
    });

    //  LAST
    describe('_.last', function () {
        it('1. is a function', function () {
            expect(_.last).to.be.a('function');
        });

        it('2. takes two arguments', function () {
            expect(_.last).to.have.lengthOf(2);
        });

        it('3. should return undefined for an empty array/string or if a non-array/string last argument is given', function () {
            const result1 = _.last();
            expect(result1).to.be.undefined;

            const result2 = _.last([]);
            expect(result2).to.be.undefined;

            const result3 = _.last('');
            expect(result3).to.be.undefined;

            const result4 = _.last({ a: 1, b: 2 });
            expect(result4).to.be.undefined;

            const result5 = _.last(true);
            expect(result5).to.be.undefined;

            const result6 = _.last(12345);
            expect(result6).to.be.undefined;
        });

        it('4. should return the last element of an array if no second argument is provided', function () {
            const result1 = _.last([1, 2, 3, 4, 5]);
            expect(result1).to.equal(5);

            const result2 = _.last(['hello', 'world']);
            expect(result2).to.equal('world');
        });

        it('5. should return the last letter of a string if no second argument is provided', function () {
            const result = _.last('hello');
            expect(result).to.equal('o');
        });

        it('6. should return the elements up to the nth element of a given array, in an array format', function () {
            const result1 = _.last([1, 2, 3, 4, 5], 1);
            expect(result1).to.be.an('array');
            expect(result1).to.eql([5]);

            const result2 = _.last([1, 2, 3, 4, 5], 2);
            expect(result2).to.eql([4, 5]);

            const result3 = _.last(['to', 'be', 'or', 'not', 'to', 'be'], 4);
            expect(result3).to.eql(['or', 'not', 'to', 'be']);
        });

        it('7. should return the letters up to the nth letter of a given string, returning an array', function () {
            const result1 = _.last('hello', 1);
            expect(result1).to.be.an('array');
            expect(result1).to.eql(['o']);

            const result2 = _.last('hello', 3);
            expect(result2).to.eql(['l', 'l', 'o']);
        });

        it('8. should return an empty array if the number is negative or zero', function () {
            const result1 = _.last([1, 2, 3, 4, 5], -1);
            expect(result1).to.be.an('array');
            expect(result1).to.eql([]);

            const result2 = _.last([1, 2, 3, 4, 5], -3);
            expect(result2).to.be.an('array');
            expect(result2).to.eql([]);

            const result3 = _.last([1, 2, 3, 4, 5], 0);
            expect(result3).to.be.an('array');
            expect(result3).to.eql([]);
        });

        it('9. should assume Math.ceil(n) if a decimal input is given for n', function () {
            const result1 = _.last([1, 2, 3, 4, 5], 0.8);
            expect(result1).to.eql([5]);

            const result2 = _.last([1, 2, 3, 4, 5], 2.3);
            expect(result2).to.eql([3, 4, 5]);

            const result3 = _.last('hello', 3.3);
            expect(result3).to.eql(['e', 'l', 'l', 'o']);


        });

        it('10. returns the whole array if n is bigger than the array or string length', function () {
            const result1 = _.last([1, 2, 3, 4, 5], 100);
            expect(result1).to.eql([1, 2, 3, 4, 5]);

            const result2 = _.last('hello', 1000);
            expect(result2).to.eql(['h', 'e', 'l', 'l', 'o']);
        });


        it('11. should return an empty array if a string is entered and the number is negative or zero', function () {
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

        it('12. should return an empty array if the input is an empty array/string and a number', function () {
            const result1 = _.last([], 1);
            expect(result1).to.eql([]);

            const result2 = _.last('', 1);
            expect(result2).to.eql([]);
        });
    });

    //  EACH
    describe('_.each', function () {
        it('1. is a function', function () {
            expect(_.each).to.be.a('function');
        });

        it('2. takes two arguments', function () {
            expect(_.each).to.have.lengthOf(2);
        });

        it('3. calls the function as many times as items in the array (SINON)', function () {
            const spy = sinon.spy();
            _.each([1, 2, 3, 4, 5, 6], spy);
            expect(spy.callCount).to.equal(6);
        });

        it('4. calls the function as many times as items in the array (COUNT)', function () {
            let count = 0;
            const incrementCount = () => count++;
            _.each([1, 2, 3, 4, 5, 6], incrementCount);
            expect(count).to.equal(6);
        });

        it('5. passes each item of the array as the first argument to the function', function () {
            let resultArr = [];
            const putItemInArr = (item) => resultArr.push(item);
            _.each([1, 2, 3, 4, 5, 6], putItemInArr);
            expect(resultArr).to.have.lengthOf(6);
            expect(resultArr).to.eql([1, 2, 3, 4, 5, 6]);
        });

        it('6. passes the index of each element of the array as the second argument to the function', function () {
            let indexArr = [];
            const putIndexInArr = (item, index) => indexArr.push(index);
            _.each([1, 2, 3, 4, 5, 6], putIndexInArr);
            expect(indexArr).to.have.lengthOf(6);
            expect(indexArr).to.eql([0, 1, 2, 3, 4, 5]);
        });

        it('7. passes a list of the original array each time the function iterates', function () {
            let listArr = [];
            const putListInArr = (item, index, list) => listArr.push(list);
            _.each([1, 2, 3, 4], putListInArr);
            expect(listArr).to.eql([[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]);
        });

        it('8. calls the function as many times as key:value pairs in the object (SINON)', function () {
            const spy = sinon.spy();
            _.each({ a: 1, b: 2, c: 3, d: 4 }, spy);
            expect(spy.callCount).to.equal(4);
        });

        it('9. passes the value of each item in an object as the first argument to the function', function () {
            let itemsArr = [];
            const putItemInArr = (item) => itemsArr.push(item);

            _.each({ one: 1, two: 2, three: 3, four: 4 }, putItemInArr);
            expect(itemsArr).to.eql([1, 2, 3, 4]);
        });

        it('10. passes the key of each item in an object as the second argument to the function', function () {
            let keysArr = [];
            const putItemInArr = (item, key) => keysArr.push(key);

            _.each({ one: 1, two: 2, three: 3 }, putItemInArr);
            expect(keysArr).to.eql(['one', 'two', 'three']);
        });

        it('11. passes a list of the original object each time the function iterates', function () {
            let listArr = [];
            const putListInArr = (item, key, list) => listArr.push(list);
            _.each({ one: 1, two: 2, three: 3 }, putListInArr);
            expect(listArr).to.eql([{ one: 1, two: 2, three: 3 }, { one: 1, two: 2, three: 3 }, { one: 1, two: 2, three: 3 }]);
        });

    });

    //  INDEX OF

    describe('_.indexOf', function () {
        it('1. is a function', function () {
            expect(_.indexOf).to.be.a('function');
        });

        it('2. takes three arguments', function () {
            expect(_.indexOf).to.have.length.at.least(2);
        });

        it('3. should return a number', function () {
            expect(_.indexOf([1, 2, 3], 2)).to.be.a('number');
            expect(_.indexOf()).to.be.a('number');
        });

        it('4. should return the first index of the value in the array', function () {
            expect(_.indexOf([1, 2, 3], 2)).to.equal(1);
            expect(_.indexOf([1, 2, 3, 4, 4, 3], 3)).to.equal(2);
        });

        it('5. should return the index of the value in the array (can search for numbers, strings and booleans', function () {
            expect(_.indexOf([1, 2, 3], 2)).to.equal(1);
            expect(_.indexOf(['a', 'b', 'c'], 'c')).to.equal(2);
            expect(_.indexOf([1, 2, false, true, false], true)).to.equal(3);
        });

        it('6. should return -1 if the array does not contain the search value', function () {
            expect(_.indexOf([1, 2, 3], 4)).to.equal(-1);
        });

        it('7. should return -1 if a search value is not given', function () {
            expect(_.indexOf([1, 2, 3])).to.equal(-1);
        });

        it('8. will not match nested arrays or objects within the array', function () {
            expect(_.indexOf([[1, 2, 3], 2, { a: 1 }, 4], [1, 2, 3])).to.equal(-1);
            expect(_.indexOf([[1, 2, 3], 2, { a: 1 }, 4], { a: 1 })).to.equal(-1);
        });

        it('9. should return -1 if an object, number or boolean is given as the first argument', function () {
            expect(_.indexOf({ a: 1, b: 2 }, 1)).to.equal(-1);
            expect(_.indexOf(12345, 3)).to.equal(-1);
            expect(_.indexOf(true, true)).to.equal(-1);
        });

        it('10. should return -1 if trying to match a whole string', function () {
            expect(_.indexOf('hello', 'hello')).to.equal(-1);
        });

        it('11. should return the first index of a letter in a string', function () {
            expect(_.indexOf('hello', 'h')).to.equal(0);
            expect(_.indexOf('hello', 'l')).to.equal(2);
        });

        it('12. should return -1 if no arguments are passed', function () {
            expect(_.indexOf()).to.equal(-1);
        });

        it('13. it will start searching from the given index if a number is passed as the third value', function () {
            expect(_.indexOf([1, 2, 3, 4, 5, 3, 4, 5], 3, 3)).to.equal(5);
            expect(_.indexOf([1, 2, 3, 4, 5, 3, 4, 5], 3, 2)).to.equal(2);
            expect(_.indexOf(['to', 'be', 'or', 'not', 'to', 'be'], 'to', 3)).to.equal(4);
            expect(_.indexOf(['to', 'be', 'or', 'not', 'to', 'be'], 'be', 1)).to.equal(1);
            expect(_.indexOf('zigzag', 'z', 2)).to.equal(3);
            expect(_.indexOf('zigzag', 'g', 2)).to.equal(2);
        });

        it('14. should return -1 if the search index is in the array, but prior to the /search from/ index', function () {
            expect(_.indexOf([1, 2, 3, 4, 5, 6], 1, 3)).to.equal(-1);
        });

        it('15. shouldreturn -1 if the search index is higher than the array or string length', function () {
            expect(_.indexOf([1, 2, 3, 4, 5, 6], 1, 7)).to.equal(-1);
            expect(_.indexOf('hello', 'h', 6)).to.equal(-1);
        });

        it('16. should start searching from an index counted from the end if a negative starting index is given', function () {
            expect(_.indexOf([1, 2, 3, 4, 5, 6], 5, -1)).to.equal(-1);
            expect(_.indexOf([1, 2, 3, 4, 5, 6], 5, -2)).to.equal(4);
            expect(_.indexOf([1, 2, 3, 4, 5, 6], 5, -3)).to.equal(4);
            expect(_.indexOf([1, 2, 3, 4, 5, 6], 1, -5)).to.equal(-1);
            expect(_.indexOf([1, 2, 3, 4, 5, 6], 1, -6)).to.equal(0);
            expect(_.indexOf([1, 2, 3, 4, 5, 6], 1, -100)).to.equal(0);
            expect(_.indexOf([1, 2, 3, 1, 2, 3], 3, -3)).to.equal(5);
            expect(_.indexOf([1, 2, 3, 1, 2, 3], 3, -4)).to.equal(2);
            expect(_.indexOf('zigzag', 'a', -1)).to.equal(-1);
            expect(_.indexOf('zigzag', 'a', -2)).to.equal(4);
            expect(_.indexOf('zigzag', 'z', -4)).to.equal(3);
            expect(_.indexOf('zigzag', 'z', -6)).to.equal(0);
        });

        it('17. does not accept decimals as a starting index', function () {
            expect(_.indexOf([1, 1, 1], 1, 1.1)).to.equal(-1);

        });

        it('18. should use binary search if the starting index is set to true for a sorted array', function () {
            expect(_.indexOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, true)).to.equal(2);
            expect(_.indexOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, true)).to.equal(_.indexOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
        });

        it('19. should use binary search if the starting index is set to true for a sorted array, returning -1 if the value is not in the array', function () {
            expect(_.indexOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11, true)).to.equal(-1);
            expect(_.indexOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 12, true)).to.equal(_.indexOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 12));
        });

        it('20. binary search should not return the correct answer if the array is not sorted', function () {
            expect(_.indexOf([10, 9, 7, 8, 3, 6, 5, 4, 3, 1, 2], 9, true)).to.not.equal(1);
            expect(_.indexOf([10, 9, 7, 8, 3, 6, 5, 4, 3, 1, 2], 9, true)).to.not.equal(_.indexOf([10, 9, 7, 8, 3, 6, 5, 4, 3, 1, 2], 9));
            expect(_.indexOf([10, 9, 7, 8, 3, 6, 5, 4, 3, 1, 2], 9, true)).to.equal(-1);
        });

        it('21. binary search works for an array with repeated values', function () {
            expect(_.indexOf([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, true)).to.equal(0);
            expect(_.indexOf([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, true)).to.equal(_.indexOf([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1));
            expect(_.indexOf([1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2], 2, true)).to.equal(3);
        });

        it('22. will return -1 if the search term is a number is given that matches a string number and vice versa', function () {
            expect(_.indexOf(['1'], 1)).to.equal(-1);
            expect(_.indexOf(['1', '1', 1], 1)).to.equal(2);
            expect(_.indexOf([1], '1')).to.equal(-1);
            expect(_.indexOf([1, 1, '1'], '1')).to.equal(2);
        });

        it('23. the binary search functionality will also work for alphabetically ordered string arrays', function () {
            expect(_.indexOf(['a', 'b', 'c', 'd', 'e'], 'b', true)).to.equal(1);
            expect(_.indexOf(['a', 'c', 'b', 'd', 'e'], 'c', true)).to.equal(-1);
            expect(_.indexOf(['a', 'c', 'b', 'd', 'e'], 'a', true)).to.equal(0);
            expect(_.indexOf(['a', 'h', 'l', 'y', 'z'], 'y', true)).to.equal(3);
            expect(_.indexOf(['apple', 'avocado', 'banana', 'grapes', 'sharon fruit', 'starfruit', 'strawberry'], 'apple', true)).to.equal(0);
            expect(_.indexOf(['apple', 'avocado', 'banana', 'grapes', 'sharon fruit', 'starfruit', 'strawberry'], 'avocado', true)).to.equal(1);
            expect(_.indexOf(['apple', 'avocado', 'banana', 'grapes', 'sharon fruit', 'starfruit', 'strawberry'], 'starfruit', true)).to.equal(5);
            expect(_.indexOf(['strawberry', 'avocado', 'apple ', 'banana', 'grapes', 'sharon fruit', 'starfruit'], 'apple', true)).to.equal(-1);
        });

        it('24. the binary search functionality will also work for alphabetically ordered strings', function () {
            expect(_.indexOf('abcdefghijk', 'a', true)).to.equal(0);
            expect(_.indexOf('aclq', 'q', true)).to.equal(3);
            expect(_.indexOf('hello', 'h', true)).to.equal(-1);
            expect(_.indexOf('hello', 'l', true)).to.equal(2);
            expect(_.indexOf('hello', 'o', true)).to.equal(4);
        });
    });
    //  MAP

    describe('_.map', function () {
        it('1. is a function', function () {
            expect(_.map).to.be.a('function');
        });

        it('2. takes two arguments', function () {
            expect(_.map).to.have.lengthOf(2);
        });

        it('3. calls the function as many times as items in the array (SINON)', function () {
            const spy = sinon.spy();
            _.map([1, 2, 3, 4, 5, 6], spy);
            expect(spy.callCount).to.equal(6);
        });

        it('4. calls the function as many times as items in the array (COUNT)', function () {
            let count = 0;
            const multiplyThree = n => {
                count++;
                n * 3;
            };
            _.map([1, 2, 3, 4, 5, 6], multiplyThree);
            expect(count).to.equal(6);
        });

        it('5. returns a transformed array', function () {
            const multiplyThree = (n) => n * 3;

            const result = _.map([1, 2, 3, 4, 5, 6], multiplyThree);
            expect(result).to.be.an('array');
            expect(result).to.eql([3, 6, 9, 12, 15, 18]);
        });

        it('6. the function can access each item of the array and transform it', function () {
            const accessItem = (el) => [el, el * 2];

            const result = _.map([1, 2, 3], accessItem);
            expect(result).to.be.an('array');
            expect(result).to.eql([[1, 2], [2, 4], [3, 6]]);
        });

        it('7. the function can access the index of each item of the array', function () {
            const accessIndex = (el, index) => [el, index];

            const result = _.map(['a', 'b', 'c'], accessIndex);
            expect(result).to.be.an('array');
            expect(result).to.eql([['a', 0], ['b', 1], ['c', 2]]);
        });

        it('8. the function can access the inputted array during each iteration', function () {
            const accessList = (el, index, list) => list;

            const result = _.map(['a', 'b', 'c'], accessList);
            expect(result).to.be.an('array');
            expect(result).to.eql([['a', 'b', 'c'], ['a', 'b', 'c'], ['a', 'b', 'c']]);
        });

        it('9. calls the function as many times as items in the object (SINON)', function () {
            const spy = sinon.spy();
            _.map({ a: 1, b: 2, c: 3, d: 4, e: 5 }, spy);
            expect(spy.callCount).to.equal(5);
        });

        it('10. returns a transformed object', function () {
            const multiplyThree = (n) => n * 3;

            const result = _.map({ a: 1, b: 2, c: 3, d: 4, e: 5 }, multiplyThree);
            expect(result).to.be.an('object');
            expect(result).to.eql({ a: 3, b: 6, c: 9, d: 12, e: 15 });
        });

        it('11. the function can access each value of the array and transform it', function () {
            const accessItem = (value) => [value, value * 2];

            const result = _.map({ a: 1, b: 2, c: 3, d: 4, e: 5 }, accessItem);
            expect(result).to.be.an('object');
            expect(result).to.eql({ a: [1, 2], b: [2, 4], c: [3, 6], d: [4, 8], e: [5, 10] });
        });

        it('12. the function can access the keys of each of the objects', function () {
            const accessIndex = (value, key) => [(value + 2), key];

            const result = _.map({ a: 1, b: 2, c: 3 }, accessIndex);
            expect(result).to.be.an('object');
            expect(result).to.eql({ a: [3, 'a'], b: [4, 'b'], c: [5, 'c'] });
        });

        it('13. the function can access the inputted list during each iteration', function () {
            const accessList = (value, key, list) => list;

            const result = _.map({ a: 1, b: 2, c: 3 }, accessList);
            expect(result).to.be.an('object');
            expect(result).to.eql({ a: { a: 1, b: 2, c: 3 }, b: { a: 1, b: 2, c: 3 }, c: { a: 1, b: 2, c: 3 } });
        });
    });

    //  CONTAINS

    describe('_.contains', function () {
        it('1. is a function', function () {
            expect(_.contains).to.be.a('function');
        });

        it('2. takes three arguments', function () {
            expect(_.contains).to.have.length.at.least(2);
        });

        it('3. should return a boolean', function () {
            expect(_.contains([1, 2, 3], 2)).to.be.a('boolean');
            expect(_.contains()).to.be.a('boolean');
        });

        it('4. should return true if the array contains the value', function () {
            expect(_.contains([1, 2, 3], 2)).to.equal(true);
            expect(_.contains([1, 2, 3, 4, 4, 3], 3)).to.equal(true);
            expect(_.contains(['a', 'b', 'c'], 'c')).to.equal(true);
            expect(_.contains([1, 2, false, true, false], true)).to.equal(true);
        });

        it('6. should return false if the array does not contain the search value', function () {
            expect(_.contains([1, 2, 3], 4)).to.equal(false);
        });

        it('7. should return false if a search value is not given', function () {
            expect(_.contains([1, 2, 3])).to.equal(false);
        });

        it('8. will not match nested arrays or objects within the array', function () {
            expect(_.contains([[1, 2, 3], 2, { a: 1 }, 4], [1, 2, 3])).to.equal(false);
            expect(_.contains([[1, 2, 3], 2, { a: 1 }, 4], { a: 1 })).to.equal(false);
        });

        it('9. should return -1 if an object, number or boolean is given as the first argument', function () {
            expect(_.contains(12345, 3)).to.equal(false);
            expect(_.contains(12345, 12345)).to.equal(false);
            expect(_.contains(true, true)).to.equal(false);
        });

        it('10. should return -1 if trying to match a whole string', function () {
            expect(_.contains('hello', 'hello')).to.equal(false);
        });

        it('11. should return the first index of a letter in a string', function () {
            expect(_.contains('hello', 'h')).to.equal(true);
            expect(_.contains('hello', 'l')).to.equal(true);
        });

        it('12. should return -1 if no arguments are passed', function () {
            expect(_.contains()).to.equal(false);
        });

        it('13. it will start searching from the given index if a number is passed as the third value', function () {
            expect(_.contains([1, 2, 3, 4, 5, 4, 5], 3, 3)).to.equal(false);
            expect(_.contains([1, 2, 3, 4, 5, 4, 5], 3, 2)).to.equal(true);
            expect(_.contains(['to', 'be', 'or', 'not', 'to', 'be'], 'to', 5)).to.equal(false);
            expect(_.contains(['to', 'be', 'or', 'not', 'to', 'be'], 'or', 2)).to.equal(true);
            expect(_.contains('zigzag', 'z', 4)).to.equal(false);
            expect(_.contains('zigzag', 'z', 3)).to.equal(true);
        });

        it('14. should return false if the search index is in the array, but prior to the /search from/ index', function () {
            expect(_.contains([1, 2, 3, 4, 5, 6], 1, 3)).to.equal(false);
        });

        it('15. should return false if the search index is higher than the array or string length', function () {
            expect(_.contains([1, 2, 3, 4, 5, 6], 1, 7)).to.equal(false);
            expect(_.contains('hello', 'h', 6)).to.equal(false);
        });

        it('16. should start searching from an index counted from the end if a negative starting index is given', function () {
            expect(_.contains([1, 2, 3, 4, 5, 6], 5, -1)).to.equal(false);
            expect(_.contains([1, 2, 3, 4, 5, 6], 5, -2)).to.equal(true);
            expect(_.contains([1, 2, 3, 4, 5, 6], 5, -3)).to.equal(true);
            expect(_.contains([1, 2, 3, 4, 5, 6], 1, -100)).to.equal(true);
            expect(_.contains([1, 2, 3, 1, 2, 3], 1, -2)).to.equal(false);
            expect(_.contains([1, 2, 3, 1, 2, 3], 1, -3)).to.equal(true);
            expect(_.contains('zigzag', 'a', -1)).to.equal(false);
            expect(_.contains('zigzag', 'a', -2)).to.equal(true);
            expect(_.contains('zigzag', 'i', -4)).to.equal(false);
            expect(_.contains('zigzag', 'i', -5)).to.equal(true);
        });

        it('17. does not accept decimals as a starting index', function () {
            expect(_.contains([1, 1, 1], 1, 1.1)).to.equal(false);
        });

        it('18. will return true if the value of a key value pair in an object is present', function () {
            expect(_.contains({ a: 1, b: 2 }, 1)).to.equal(true);
            expect(_.contains({ a: 1, b: 2 }, 2)).to.equal(true);
            expect(_.contains({ a: 1, b: 2 }, 3)).to.equal(false);
            expect(_.contains({ 1: 'a', 2: 'b' }, 1)).to.equal(false);
            expect(_.contains({ 1: 'a', 2: 'b' }, 'a')).to.equal(true);
            expect(_.contains({ 1: 'a', 2: 'b' }, 2)).to.equal(false);
            expect(_.contains({ 1: 'a', 2: 'b' }, 'b')).to.equal(true);
        });
    });

    //  PLUCK

    describe('_.pluck', function () {
        it('1. is a function', function () {
            expect(_.pluck).to.be.a('function');
        });

        it('2. takes two arguments', function () {
            expect(_.pluck).to.have.lengthOf(2);
        });

        it('3. should return an array', function () {
            const info = [
                { firstName: 'Harry', surname: 'Potter', house: 'Gryffindor' },
                { firstName: 'Hermione', surname: 'Granger', house: 'Gryffindor' },
                { firstName: 'Ron', surname: 'Weasley', house: 'Gryffindor' },
                { firstName: 'Draco', surname: 'Malfoy', house: 'Slytherin' },
                { firstName: 'Luna', surname: 'Lovegood', house: 'Ravenclaw' },
            ];

            expect(_.pluck()).to.be.an('array');
            expect(_.pluck(info, 'firstName')).to.be.an('array');
        });

        it('4. should return an array containing the property values of each object in an array', function () {
            const info = [
                { firstName: 'Harry', surname: 'Potter', house: 'Gryffindor' },
                { firstName: 'Hermione', surname: 'Granger', house: 'Gryffindor' },
                { firstName: 'Ron', surname: 'Weasley', house: 'Gryffindor' },
                { firstName: 'Draco', surname: 'Malfoy', house: 'Slytherin' },
                { firstName: 'Luna', surname: 'Lovegood', house: 'Ravenclaw' },
            ];

            const resultFirstName = ['Harry', 'Hermione', 'Ron', 'Draco', 'Luna'];
            const resultSurname = ['Potter', 'Granger', 'Weasley', 'Malfoy', 'Lovegood'];

            expect(_.pluck(info, 'firstName')).to.eql(resultFirstName);
            expect(_.pluck(info, 'surname')).to.eql(resultSurname);
        });

        it('5. should return an array containing undefined (the same number as the array length of the original array) if the objects do not contain the search term', function () {
            const info = [
                { firstName: 'Harry', surname: 'Potter', house: 'Gryffindor' },
                { firstName: 'Hermione', surname: 'Granger', house: 'Gryffindor' },
                { firstName: 'Ron', surname: 'Weasley', house: 'Gryffindor' },
                { firstName: 'Draco', surname: 'Malfoy', house: 'Slytherin' },
                { firstName: 'Luna', surname: 'Lovegood', house: 'Ravenclaw' },
            ];

            const expected = [undefined, undefined, undefined, undefined, undefined];
            expect(_.pluck(info, 'wand')).to.eql(expected);
        });

        it('6. should return undefined in the array if one of the objects does not contain the search term', function () {
            const info = [
                { firstName: 'Harry', surname: 'Potter', house: 'Gryffindor', wand: 'holly, phoenix feather' },
                { firstName: 'Hermione', surname: 'Granger', house: 'Gryffindor', wand: 'vine, dragon heartstring' },
                { firstName: 'Ron', surname: 'Weasley', house: 'Gryffindor' },
                { firstName: 'Draco', surname: 'Malfoy', house: 'Slytherin' },
                { firstName: 'Luna', surname: 'Lovegood', house: 'Ravenclaw' },
            ];

            const expected = ['holly, phoenix feather', 'vine, dragon heartstring', undefined, undefined, undefined];
            expect(_.pluck(info, 'wand')).to.eql(expected);
        });

        it('7. should return an empty array if no list is given', function () {
            expect(_.pluck()).to.eql([]);
        });

        it('8. should return an array containing [undefined] if no searchTerm is given', function () {
            const info = [
                { firstName: 'Harry', surname: 'Potter', house: 'Gryffindor' },
                { firstName: 'Hermione', surname: 'Granger', house: 'Gryffindor' },
                { firstName: 'Ron', surname: 'Weasley', house: 'Gryffindor' },
                { firstName: 'Draco', surname: 'Malfoy', house: 'Slytherin' },
                { firstName: 'Luna', surname: 'Lovegood', house: 'Ravenclaw' },
            ];

            expect(_.pluck(info)).to.eql([undefined]);
        });

        it('9. should return undefined if the array does not contain objects', function () {
            const list = ['hello', 'world', 123];
            const list2 = ['hello', 'world', 123, { 'hello': 'world' }];

            expect(_.pluck(list, 'hello')).to.eql([undefined, undefined, undefined]);
            expect(_.pluck(list2, 'hello')).to.eql([undefined, undefined, undefined, 'world']);
        });

        it('10. should return an empty array if the list is an object', function () {
            const list = { a: 1, b: 2, c: 3 };
            expect(_.pluck(list, 'a')).to.eql([]);
        });

        it('11. should return an empty array if the list is a number or boolean', function () {
            const listNumber = 123;
            const listBoolean = false;
            expect(_.pluck(listNumber, 2)).to.eql([]);
            expect(_.pluck(listBoolean, false)).to.eql([]);
        });

        it('12. should return an array containing undefined for each letter of the string if the list is a string', function () {
            const listStringTwo = 'hi';
            expect(_.pluck(listStringTwo, 'h')).to.have.lengthOf(2);
            expect(_.pluck(listStringTwo, 'h')).to.eql([undefined, undefined]);

            const listStringFive = 'hello';
            expect(_.pluck(listStringFive, 'h')).to.have.lengthOf(5);
            expect(_.pluck(listStringFive, 'h')).to.eql([undefined, undefined, undefined, undefined, undefined]);
        });
    });

    describe.only('_.reduce', function () {
        it('1. is a function', function () {
            expect(_.reduce).to.be.a('function');
        });

        it('2. takes three arguments', function () {
            expect(_.reduce).to.have.lengthOf(3);
        });

        it('3. if the list argument is an array, it calls the function as many times as items in the array (SINON)', function () {
            const spy = sinon.spy();
            _.reduce([1, 2, 3, 4, 5, 6], spy, []);
            expect(spy.callCount).to.equal(6);
        });

        it('4. if the list argument is an array, it calls the function as many times as items in the array (COUNT)', function () {
            let count = 0;
            const incrementCount = () => count++;
            _.reduce([1, 2, 3, 4, 5, 6], incrementCount, 0);
            expect(count).to.equal(6);
        });

        it('5. will return an array if the memo is an array', function () {
            const double = (memo, item) => memo.concat(item * 2);
            let result = _.reduce([1, 2, 3, 4], double, []);
            expect(result).to.be.an('array');
            expect(result).to.eql([2, 4, 6, 8]);
        });

        it('6. passes the memo as the first argument to the iterator and the iterator returns the altered memo', function () {
            const double = (memo) => memo.concat('hello');
            let result = _.reduce([1, 2, 3, 4], double, []);
            expect(result).to.be.an('array');
            expect(result).to.eql(['hello', 'hello', 'hello', 'hello']);
        });

        it('7. passes each item of the array as the second argument to the function, resulting in a new array if the memo is an array', function () {
            const double = (memo, item) => memo.concat(item * 2);
            const result = _.reduce([1, 2, 3, 4, 5, 6], double, []);
            expect(result).to.have.lengthOf(6);
            expect(result).to.eql([2, 4, 6, 8, 10, 12]);
        });

        it('8. passes the index of each element of the array as the third argument to the iterator', function () {
            const makeIndexArray = (memo, item, index) => memo.concat(index);
            let result = _.reduce([5, 5, 5, 5, 5, 5], makeIndexArray, []);
            expect(result).to.have.lengthOf(6);
            expect(result).to.eql([0, 1, 2, 3, 4, 5]);
        });

        it('9. passes a list of the original array to the function each time the function iterates', function () {
            const putListInArr = (memo, item, index, list) => {
                memo.push(list);
                return memo;
            };
            let result = _.reduce([1, 2, 3, 4], putListInArr, []);
            expect(result).to.eql([[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]);
        });

        // it('8. calls the function as many times as key:value pairs in the object (SINON)', function () {
        //     const spy = sinon.spy();
        //     _.each({ a: 1, b: 2, c: 3, d: 4 }, spy);
        //     expect(spy.callCount).to.equal(4);
        // });

        // it('9. passes the value of each item in an object as the first argument to the function', function () {
        //     let itemsArr = [];
        //     const putItemInArr = (item) => itemsArr.push(item);

        //     _.each({ one: 1, two: 2, three: 3, four: 4 }, putItemInArr);
        //     expect(itemsArr).to.eql([1, 2, 3, 4]);
        // });

        // it('10. passes the key of each item in an object as the second argument to the function', function () {
        //     let keysArr = [];
        //     const putItemInArr = (item, key) => keysArr.push(key);

        //     _.each({ one: 1, two: 2, three: 3 }, putItemInArr);
        //     expect(keysArr).to.eql(['one', 'two', 'three']);
        // });

        // it('11. passes a list of the original object each time the function iterates', function () {
        //     let listArr = [];
        //     const putListInArr = (item, key, list) => listArr.push(list);
        //     _.each({ one: 1, two: 2, three: 3 }, putListInArr);
        //     expect(listArr).to.eql([{ one: 1, two: 2, three: 3 }, { one: 1, two: 2, three: 3 }, { one: 1, two: 2, three: 3 }]);
        // });

    });
});




