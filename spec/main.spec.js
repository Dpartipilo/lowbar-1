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
            expect(_.indexOf('hello', 'h', true)).to.equal(0);
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

    //  REDUCE
    describe('_.reduce', function () {
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

        it('10. returns a string if the memo is a string', function () {
            const putListInString = (memo, item) => {
                memo += `${item} `;
                return memo;
            };
            let result = _.reduce(['eggs', 'apples', 'bananas', 'bread'], putListInString, '');
            expect(result).to.equal('eggs apples bananas bread ');
        });

        it('11. returns a number if the memo is a number', function () {
            const accumulate = (memo, item) => {
                memo += item;
                return memo;
            };
            let result = _.reduce([1, 2, 3, 4, 5], accumulate, 0);
            expect(result).to.equal(15);

            result = _.reduce([1, 2, 3, 4, 5], accumulate, 2);
            expect(result).to.equal(17);
        });

        it('12. returns an object if the memo is an object', function () {
            const accumulateDoubles = (memo, item, index) => {
                memo[index] = item * 2;
                return memo;
            };
            let result = _.reduce([1, 2, 3], accumulateDoubles, {});
            expect(result).to.eql({ 0: 2, 1: 4, 2: 6 });
        });

        it('13. if the list argument is an array and the memo is not defined, it uses the first element as the memo (SINON)', function () {
            const spy = sinon.spy();
            _.reduce([1, 2, 3, 4, 5, 6], spy);
            expect(spy.callCount).to.equal(5);
        });

        it('14. if the list argument is an array and the memo is not defined, it uses the first element as the memo (COUNT)', function () {
            let count = 0;
            const incrementCount = () => count++;
            _.reduce([1, 2, 3, 4, 5, 6], incrementCount);
            expect(count).to.equal(5);
        });

        it('15. will use the initial element of the array as the memo if the memo is not defined', function () {
            const accumulate = (memo, item) => memo += item;
            let result1 = _.reduce([1, 2, 3, 4], accumulate, 0);
            let result2 = _.reduce([1, 2, 3, 4], accumulate);
            expect(result1).to.eql(result2);
            expect(result2).to.eql(10);
        });

        it('16. if the list argument is an object, it calls the function as many times as items in the array (COUNT)', function () {
            let count = 0;
            const incrementCount = () => count++;
            _.reduce({ a: 1, b: 2, c: 3, d: 4 }, incrementCount, 0);
            expect(count).to.equal(4);
        });

        it('17. will return an array if the memo is an array (object list)', function () {
            const double = (memo, item) => memo.concat(item * 2);
            let result = _.reduce({ a: 1, b: 2, c: 3, d: 4 }, double, []);
            expect(result).to.be.an('array');
            expect(result).to.eql([2, 4, 6, 8]);
        });

        it('18. passes the memo as the first argument to the iterator and the iterator returns the altered memo (object list)', function () {
            const double = (memo) => memo.concat('hello');
            let result = _.reduce({ a: 1, b: 2, c: 3, d: 4 }, double, []);
            expect(result).to.be.an('array');
            expect(result).to.eql(['hello', 'hello', 'hello', 'hello']);
        });

        it('19. passes each value from the object list as the second argument to the function, resulting in an array if the memo is an array (object list)', function () {
            const double = (memo, value) => memo.concat(value * 2);
            const result = _.reduce({ a: 1, b: 2, c: 3, d: 4 }, double, []);
            expect(result).to.have.lengthOf(4);
            expect(result).to.eql([2, 4, 6, 8]);
        });

        it('20. passes the key of each key value pair as the third argument to the iterator (object list)', function () {
            const makeKeyArray = (memo, value, key) => memo.concat(key);
            let result = _.reduce({ a: 1, b: 2, c: 3, d: 4 }, makeKeyArray, []);
            expect(result).to.have.lengthOf(4);
            expect(result).to.eql(['a', 'b', 'c', 'd']);
        });

        it('21. passes a list of the original object to the function each time the function iterates (object list)', function () {
            const putListInArr = (memo, value, key, list) => {
                memo.push(list);
                return memo;
            };
            let result = _.reduce({ a: 1, b: 2, c: 3, d: 4 }, putListInArr, []);
            expect(result).to.eql([{ a: 1, b: 2, c: 3, d: 4 }, { a: 1, b: 2, c: 3, d: 4 }, { a: 1, b: 2, c: 3, d: 4 }, { a: 1, b: 2, c: 3, d: 4 }]);
        });

        it('22. returns a string if the memo is a string (object list)', function () {
            const putListInString = (memo, value) => {
                memo += `${value} `;
                return memo;
            };
            let result = _.reduce({ a: 'eggs', b: 'apples', c: 'bananas', d: 'bread' }, putListInString, '');
            expect(result).to.equal('eggs apples bananas bread ');
        });

        it('23. returns a number if the memo is a number (object list)', function () {
            const accumulate = (memo, value) => {
                memo += value;
                return memo;
            };
            let result = _.reduce({ a: 1, b: 2, c: 3, d: 4 }, accumulate, 0);
            expect(result).to.equal(10);

            result = _.reduce({ a: 1, b: 2, c: 3, d: 4 }, accumulate, 2);
            expect(result).to.equal(12);
        });

        it('24. returns an object if the memo is an object', function () {
            const accumulateDoubles = (memo, value, key) => {
                memo[key] = value * 2;
                return memo;
            };
            let result = _.reduce({ a: 1, b: 2, c: 3, d: 4 }, accumulateDoubles, {});
            expect(result).to.eql({ a: 2, b: 4, c: 6, d: 8 });
        });

        it('25. if the list argument is an array and the memo is not defined, it uses the first key as the memo (COUNT)', function () {
            let count = 0;
            const incrementCount = () => count++;
            _.reduce({ a: 1, b: 2, c: 3, d: 4 }, incrementCount);
            expect(count).to.equal(3);
        });

        it('26. will use the initial key value pair of the object encountered as the memo if the memo is not defined', function () {
            const accumulate = (memo, item) => memo += item;
            let result1 = _.reduce({ a: 1, b: 2, c: 3, d: 4 }, accumulate, 0);
            let result2 = _.reduce({ a: 1, b: 2, c: 3, d: 4 }, accumulate);
            expect(result1).to.eql(result2);
            expect(result2).to.eql(10);
        });

    });

    //  EVERY
    describe('_.every', function () {
        it('1. is a function', function () {
            expect(_.every).to.be.a('function');
        });

        it('2. takes two arguments', function () {
            expect(_.every).to.have.lengthOf(2);
        });

        it('3. returns a boolean', function () {
            const isString = (letter) => typeof letter === 'string';
            expect(_.every(['a'], isString)).to.be.a('boolean');
        });

        it('4. should return true if all of the values in the array list pass the predicate truth test', function () {
            const isString = (letter) => typeof letter === 'string';
            expect(_.every(['a', 'b', 'c', 'd'], isString)).to.be.true;

            const isEven = (number) => number % 2 === 0;
            expect(_.every([2, 4, 6, 8], isEven)).to.be.true;
        });

        it('5. should return false if one value in the array list is false', function () {
            const isString = (letter) => typeof letter === 'string';
            expect(_.every(['a', 'b', 1, 'd'], isString)).to.be.false;

            const isEven = (number) => number % 2 === 0;
            expect(_.every([2, 4, 6, 9], isEven)).to.be.false;
        });

        it('6. should stop traversing the list if a false element is found (array)', function () {
            let count = 0;
            const isString = (letter) => {
                count++;
                return typeof letter === 'string';
            };
            _.every(['a', 'b', 'c', 'd'], isString);
            expect(count).to.equal(4);

            count = 0;
            _.every(['a', 1, 'c', 'd'], isString);
            expect(count).to.equal(2);
        });

        it('7. should return true if all of the values in a list pass the predicate truth test (object list)', function () {
            const isString = (letter) => typeof letter === 'string';
            expect(_.every({ a: 'a', b: 'b', c: 'c', d: 'd' }, isString)).to.be.true;

            const isEven = (number) => number % 2 === 0;
            expect(_.every({ a: 2, b: 4, c: 6, d: 8 }, isEven)).to.be.true;
        });

        it('8. should return false if one value in the list is false (object list)', function () {
            const isString = (letter) => typeof letter === 'string';
            expect(_.every({ a: 'a', b: 'b', c: 1, d: 'd' }, isString)).to.be.false;

            const isEven = (number) => number % 2 === 0;
            expect(_.every({ a: 2, b: 4, c: 6, d: 9 }, isEven)).to.be.false;
        });

        it('9. should stop traversing the list if a false element is found (object list)', function () {
            let count = 0;
            const isString = (letter) => {
                count++;
                return typeof letter === 'string';
            };
            _.every({ a: 'a', b: 'b', c: 'c', d: 'd' }, isString);
            expect(count).to.equal(4);

            count = 0;
            _.every({ a: 'a', b: 1, c: 'c', d: 'd' }, isString);
            expect(count).to.equal(2);
        });

    });

    //  SOME
    describe('_.some', function () {
        it('1. is a function', function () {
            expect(_.some).to.be.a('function');
        });

        it('2. takes two arguments', function () {
            expect(_.some).to.have.lengthOf(2);
        });

        it('3. returns a boolean', function () {
            const isString = (letter) => typeof letter === 'string';
            expect(_.some(['a'], isString)).to.be.a('boolean');
        });

        it('4. should return true if at least one of the values in the array list pass the predicate truth test', function () {
            const isString = (letter) => typeof letter === 'string';
            expect(_.some(['a', 'b', 'c', 'd'], isString)).to.be.true;
            expect(_.some(['a', 1, 4, 3], isString)).to.be.true;
            expect(_.some([1, false, 4, 'd'], isString)).to.be.true;

            const isEven = (number) => number % 2 === 0;
            expect(_.some([2, 4, 6, 8], isEven)).to.be.true;
            expect(_.some([2, 1, 5, 7], isEven)).to.be.true;
            expect(_.some([1, 1, 5, 4], isEven)).to.be.true;
        });

        it('5. should return false if no values in the array list pass the predicate', function () {
            const isString = (letter) => typeof letter === 'string';
            expect(_.some([false, 3, 1, ['a']], isString)).to.be.false;

            const isEven = (number) => number % 2 === 0;
            expect(_.some([1, 3, 5, 9], isEven)).to.be.false;
        });

        it('6. should stop traversing the list if a true element is found (array)', function () {
            let count = 0;
            const isString = (letter) => {
                count++;
                return typeof letter === 'string';
            };
            _.some(['a', 'b', 'c', 'd'], isString);
            expect(count).to.equal(1);

            count = 0;
            _.some([1, 3, 'c', 5], isString);
            expect(count).to.equal(3);
        });

        it('7. should return true if one of the values in an object list passes the predicate truth test (object list)', function () {
            const isString = (letter) => typeof letter === 'string';
            expect(_.some({ a: 'a', b: 'b', c: 'c', d: 'd' }, isString)).to.be.true;
            expect(_.some({ a: 1, b: '1', c: 'c', d: 'd' }, isString)).to.be.true;
            expect(_.some({ a: '1', b: 4, c: ['a'], d: false }, isString)).to.be.true;
            expect(_.some({ a: true, b: 4, c: ['a'], d: 'g' }, isString)).to.be.true;

            const isEven = (number) => number % 2 === 0;
            expect(_.some({ a: 2, b: 4, c: 6, d: 8 }, isEven)).to.be.true;
            expect(_.some({ a: 2, b: 1, c: 3, d: 5 }, isEven)).to.be.true;
            expect(_.some({ a: 1, b: 3, c: 5, d: 10 }, isEven)).to.be.true;
        });

        it('8. should return false if all the values in the object list do not pass the predicate truth test (object list)', function () {
            const isString = (letter) => typeof letter === 'string';
            expect(_.some({ a: 1, b: 2, c: 3, d: 4 }, isString)).to.be.false;

            const isEven = (number) => number % 2 === 0;
            expect(_.some({ a: 1, b: 3, c: 5, d: 9 }, isEven)).to.be.false;
        });

        it('9. should stop traversing the list if a false element is found (object list)', function () {
            let count = 0;
            const isString = (letter) => {
                count++;
                return typeof letter === 'string';
            };
            _.some({ a: 'a', b: 'b', c: 'c', d: 'd' }, isString);
            expect(count).to.equal(1);

            count = 0;
            _.some({ a: 1, b: 1, c: 'c', d: 'd' }, isString);
            expect(count).to.equal(3);
        });

    });

    // EXTEND
    describe('_.extend', function () {
        it('1. is a function', function () {
            expect(_.extend).to.be.a('function');
        });

        it('2. has one named parameter', function () {
            expect(_.extend).to.have.lengthOf(1);
        });

        it('3. returns the destination object', function () {
            let a = { a: 1, b: 2 };
            let result = _.extend(a);
            expect(result).to.be.an('object');
            expect(result).to.equal(a);
        });

        it('4. adds the values of an object with one key-value pair to the an empty destination object', function () {
            expect(_.extend({}, { a: 1 })).to.eql({ a: 1 });
        });

        it('5. adds the values of an object with more than one key-value pair to the an empty destination object', function () {
            let a = {};
            let b = { a: 1, b: 2, c: 3 };
            expect(_.extend(a, b)).to.eql({ a: 1, b: 2, c: 3 });
        });

        it('6. adds the values of an object with one key-value pair to a destination object with existing key-value pairs', function () {
            let a = { a: 1, b: 2 };
            let b = { c: 3 };
            expect(_.extend(a, b)).to.eql({ a: 1, b: 2, c: 3 });
        });

        it('7. adds the values of an object with more than one key-value pair to a destination object with more than one existing key-value pair', function () {
            let a = { a: 1, b: 2, c: 3 };
            let b = { d: 4, e: 2, f: 3 };
            expect(_.extend(a, b)).to.eql({ a: 1, b: 2, c: 3, d: 4, e: 2, f: 3 });
        });

        it('8. mutates the destination object', function () {
            let a = { a: 1, b: 2 };
            let b = { c: 3 };
            expect(_.extend(a, b)).to.eql(a);
        });

        it('9. adds multiple sources with one key-value pair to the destination object', function () {
            let a = { a: 1 };
            let b = { b: 2 };
            let c = { c: 3 };
            let d = { d: 4 };
            let e = { e: 5 };
            expect(_.extend(a, b, c, d, e)).to.eql({ a: 1, b: 2, c: 3, d: 4, e: 5 });
        });

        it('10. adds multiple sources with multiple key-value pairs to the destination object', function () {
            let a = { a: 1, b: 2 };
            let b = { c: 3 };
            let c = { d: 4, e: 5 };
            let d = { f: 6 };
            let e = { g: 7, h: 8 };
            expect(_.extend(a, b, c, d, e)).to.eql({ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 });
        });

        it('11. returns the original destination if it cannot be added to (e.g. if it is a string or a number)', function () {
            let a = 'a';
            let b = 'b';
            let c = 'c';
            expect(_.extend(a, b, c)).to.eql('a');

            let d = 1;
            let e = 2;
            let f = 3;
            expect(_.extend(d, e, f)).to.eql(1);
        });

        it('12. passes nested array by reference', function () {
            let arr = [1, 2, 3];
            let a = { a: 1, b: 2 };
            let b = { c: arr };
            let result = _.extend(a, b);
            expect(result.c).to.have.lengthOf(3);
            expect(result).to.eql({ a: 1, b: 2, c: [1, 2, 3] });

            arr.push(4);
            expect(result.c).to.have.lengthOf(4);
            expect(result).to.eql({ a: 1, b: 2, c: [1, 2, 3, 4] });
        });

        it('13. passes nested objects by reference', function () {
            let obj = { d: 4, e: 5 };
            let a = { a: 1, b: 2 };
            let b = { c: obj };
            let result = _.extend(a, b);
            expect(result).to.eql({ a: 1, b: 2, c: { d: 4, e: 5 } });

            obj.f = 6;
            expect(result).to.eql({ a: 1, b: 2, c: { d: 4, e: 5, f: 6 } });
        });

        it('14. the last source will override properties of the same name in previous arguments', function () {
            let a = { a: 1, b: 2, c: 3 };
            let b = { a: 7 };
            let c = { c: 8, d: 10 };
            expect(_.extend(a, b, c)).to.eql({ a: 7, b: 2, c: 8, d: 10 });
        });

        it('15. alters a destination array by overriding destination[index] with source[index]', function () {
            let a = [1, 2, 3, 4, 5];
            let b = ['a', 'b', 'c'];
            let c = ['x'];
            expect(_.extend(a, b, c)).to.eql(['x', 'b', 'c', 4, 5]);
        });

        it('16. returns the original destination array if the sources are not arrays or objects', function () {
            let a = [1, 2, 3, 4, 5];
            let b = 6;
            expect(_.extend(a, b)).to.eql([1, 2, 3, 4, 5]);
        });

        it('17. returns the original destination array if the sources are not arrays or objects', function () {
            let a = [1, 2, 3, 4, 5];
            let b = 6;
            expect(_.extend(a, b)).to.eql([1, 2, 3, 4, 5]);
        });

        it('18. adds the index and value of each array element to an object, if the destination is an object and one source is an array', function () {
            let a = { a: 1 };
            let b = ['a', 'b', 'c'];
            let c = { b: 7 };
            expect(_.extend(a, b, c)).to.eql({ '0': 'a', '1': 'b', '2': 'c', a: 1, b: 7 });
        });

        it('19. will override the array index property if there is more than one array source', function () {
            let a = { a: 1 };
            let b = ['a', 'b', 'c'];
            let c = ['z'];
            expect(_.extend(a, b, c)).to.eql({ '0': 'z', '1': 'b', '2': 'c', a: 1 });
        });
    });

    // DEFAULTS
    describe('_.defaults', function () {
        it('1. is a function', function () {
            expect(_.defaults).to.be.a('function');
        });

        it('2. has one named parameter', function () {
            expect(_.defaults).to.have.lengthOf(1);
        });

        it('3. returns the provided object argument', function () {
            let a = { a: 1, b: 2 };
            let result = _.defaults(a);
            expect(result).to.be.an('object');
            expect(result).to.equal(a);
        });

        it('4. Adds the values of one default argument with one key-value pair to an empty object argument', function () {
            let obj = {};
            let defaultObj = { animal: 'rabbit' };
            let result = _.defaults(obj, defaultObj);
            expect(result).to.eql({ animal: 'rabbit' });
        });

        it('5. Adds the values of one default argument with multiple key-value pairs to an empty object argument', function () {
            let obj = {};
            let defaultObj = { animal: 'rabbit', food: 'carrots' };
            let result = _.defaults(obj, defaultObj);
            expect(result).to.eql({ animal: 'rabbit', food: 'carrots' });
        });

        it('6. Adds the values of multiple default arguments with one key-value pair to an empty object argument', function () {
            let obj = {};
            let defaultObj1 = { animal: 'rabbit' };
            let defaultObj2 = { food: 'carrots' };
            let result = _.defaults(obj, defaultObj1, defaultObj2);
            expect(result).to.eql({ animal: 'rabbit', food: 'carrots' });
        });

        it('7. Adds the values of multiple default arguments with multiple key-value pairs to an empty object argument', function () {
            let obj = {};
            let defaultObj1 = { animal: 'rabbit', name: 'fluffy' };
            let defaultObj2 = { food: 'carrots', drinks: 'water' };
            let result = _.defaults(obj, defaultObj1, defaultObj2);
            expect(result).to.eql({ animal: 'rabbit', drinks: 'water', food: 'carrots', name: 'fluffy' });
        });

        it('8. Adds the values of one default argument with one key-value pair to an object argument with existing key value pairs which do not match the keys of the default', function () {
            let obj = { name: 'Fluffy', age: 1 };
            let defaultObj1 = { animal: 'rabbit' };
            let result = _.defaults(obj, defaultObj1);
            expect(result).to.eql({ age: 1, animal: 'rabbit', name: 'Fluffy' });
        });

        it('9. Adds the values of one default argument with multiple key-value pairs to an object argument with existing key value pairs which do not match the keys of the default', function () {
            let obj = { name: 'Fluffy', age: 1 };
            let defaultObj1 = { animal: 'rabbit', likes: 'carrots' };
            let result = _.defaults(obj, defaultObj1);
            expect(result).to.eql({ age: 1, animal: 'rabbit', likes: 'carrots', name: 'Fluffy' });
        });

        it('10. Adds the values of multiple default arguments with one key-value pair to an object argument with existing key value pairs which do not match the keys of the default', function () {
            let obj = { name: 'Fluffy', age: 1 };
            let defaultObj1 = { animal: 'rabbit' };
            let defaultObj2 = { likes: 'carrots' };
            let result = _.defaults(obj, defaultObj1, defaultObj2);
            expect(result).to.eql({ age: 1, animal: 'rabbit', likes: 'carrots', name: 'Fluffy' });
        });

        it('11. Adds the values of multiple default arguments with multiple key-value pair to an object argument with existing key value pairs which do not match the keys of the default', function () {
            let obj = { name: 'Fluffy', age: 1 };
            let defaultObj1 = { animal: 'rabbit', drinks: 'water' };
            let defaultObj2 = { likes: 'carrots', livesIn: 'hutch' };
            let result = _.defaults(obj, defaultObj1, defaultObj2);
            expect(result).to.eql({ age: 1, animal: 'rabbit', drinks: 'water', likes: 'carrots', livesIn: 'hutch', name: 'Fluffy' });
        });


        it('12. Adds the values of one default argument with one key-value pair to an object argument with existing key value pairs, not mutating any existing key-value pairs', function () {
            let obj = { name: 'Fluffy', animal: 'cat' };
            let defaultObj1 = { animal: 'rabbit' };
            let result = _.defaults(obj, defaultObj1);
            expect(result).to.eql({ animal: 'cat', name: 'Fluffy' });
        });

        it('13. Adds the values of one default argument with multiple key-value pairs to an object argument with existing key value pairs, not mutating any existing key-value pairs', function () {
            let obj = { name: 'Fluffy', animal: 'snake' };
            let defaultObj1 = { animal: 'rabbit', age: 1 };
            let result = _.defaults(obj, defaultObj1);
            expect(result).to.eql({ age: 1, animal: 'snake', name: 'Fluffy' });
        });

        it('14. Adds the values of multiple default arguments with one key-value pair to an object argument with existing key value pairs, not mutating any existing key-value pairs', function () {
            let obj = { name: 'Fluffy', animal: 'crocodile' };
            let defaultObj1 = { animal: 'rabbit' };
            let defaultObj2 = { age: 1 };
            let result = _.defaults(obj, defaultObj1, defaultObj2);
            expect(result).to.eql({ age: 1, animal: 'crocodile', name: 'Fluffy' });
        });

        it('15. Adds the values of multiple default arguments with multiple key-value pairs to an object argument with existing key value pairs, not mutating any existing key-value pairs', function () {
            let obj = { name: 'Fluffy', animal: 'komodo dragon' };
            let defaultObj1 = { animal: 'rabbit', drinks: 'water' };
            let defaultObj2 = { name: 'Cuddles', vicious: true };
            let result = _.defaults(obj, defaultObj1, defaultObj2);
            expect(result).to.eql({ animal: 'komodo dragon', drinks: 'water', name: 'Fluffy', vicious: true });
        });

        it('16. Mutates the provided object argument', function () {
            let obj = { name: 'Fluffy', animal: 'komodo dragon' };
            let defaultObj1 = { animal: 'rabbit', drinks: 'water' };
            let defaultObj2 = { name: 'Cuddles', vicious: true };
            let result = _.defaults(obj, defaultObj1, defaultObj2);
            expect(result).to.equal(obj);
        });

        it('17. returns the original "object" argument without changing it if it is not an object or array', function () {
            let obj1 = 'Fluffy';
            let defaultObj1 = { animal: 'rabbit', drinks: 'water' };
            let result1 = _.defaults(obj1, defaultObj1);
            expect(result1).to.equal('Fluffy');

            let obj2 = 123;
            let defaultObj2 = { animal: 'rabbit', drinks: 'water' };
            let result2 = _.defaults(obj2, defaultObj2);
            expect(result2).to.equal(123);
        });

        it('18. should not override conflicting default arguments', function () {
            let obj = { name: 'Fluffy' };
            let defaultObj1 = { animal: 'komodo dragon' };
            let defaultObj2 = { animal: 'crocodile', vicious: true };
            let result = _.defaults(obj, defaultObj1, defaultObj2);
            expect(result).to.eql({ animal: 'komodo dragon', name: 'Fluffy', vicious: true });
        });

        it('19. should return a completed array if the provided object is an empty array and another array argument is provided', function () {
            let obj = [];
            let defaultObj = [1, 2, 3];
            expect(_.defaults(obj, defaultObj)).to.eql([1, 2, 3]);
        });

        it('20. should return an unchanged array if the provided object is an empty array and any additional array arguments have lengths less than or equal to the provided array object length', function () {
            let obj = [1, 2, 3];
            let defaultObj1 = [4];
            let defaultObj2 = [4, 5];
            expect(_.defaults(obj, defaultObj1, defaultObj2)).to.eql([1, 2, 3]);
        });

        it('21. should add additional elements to a provided array object if any additional array arguments have lengths longer than the provided object array, but existing elements are unchanged', function () {
            let obj = [1, 2, 3];
            let defaultObj1 = ['a', 'b', 'c', 'd'];
            let defaultObj2 = ['v', 'w', 'x', 'y', 'z'];
            expect(_.defaults(obj, defaultObj1, defaultObj2)).to.eql([1, 2, 3, 'd', 'z']);
        });

        it('21. should add array elements to the provided object argument if one of the additional arguments is an array, using the index of the element as the key', function () {
            let obj = { a: 1, b: 2 };
            let defaultObj1 = [3, 4];
            let defaultObj2 = { c: 3 };
            expect(_.defaults(obj, defaultObj1, defaultObj2)).to.eql({ '0': 3, '1': 4, a: 1, b: 2, c: 3 });
        });

        it('22. should add any additional array elements to the provided object argument if one of the additional arguments is an array, using the index of the element as the key, but not override any existing keys if more than one additional array argument is provided', function () {
            let obj = { a: 1, b: 2 };
            let defaultObj1 = [3, 4];
            let defaultObj2 = ['x', 'y', 'z'];
            expect(_.defaults(obj, defaultObj1, defaultObj2)).to.eql({ '0': 3, '1': 4, '2': 'z', a: 1, b: 2 });
        });
    });

    //  ONCE
    describe('_.once', function () {
        it('is a function', function () {
            expect(_.once).to.be.a('function');
        });

        it('only calls the function once', function () {
            const spy = sinon.spy();
            let testFunctionCheck = _.once(spy);
            testFunctionCheck();
            testFunctionCheck();
            testFunctionCheck();

            expect(spy.callCount).to.equal(1);
        });
    });

    //  MEMOIZE
    describe('_.memoize', function () {
        it('1. is a function', function () {
            expect(_.memoize).to.be.a('function');
        });

        it('returns a function', function () {
            let testFunction = function (n) {
                return n;
            };

            expect(_.memoize(testFunction)).to.be.a('function');
        });

        it('only calls the function once for each single argument', function () {
            let count = 0;
            let testFunction = function (n) {
                count++;
                return n;
            };

            let testFunctionCheck = _.memoize(testFunction);
            testFunctionCheck(2);
            testFunctionCheck(2);
            testFunctionCheck(2);
            expect(count).to.equal(1);

            count = 0;
            testFunctionCheck(3);
            testFunctionCheck(3);
            testFunctionCheck(3);
            testFunctionCheck(4);
            testFunctionCheck(5);
            testFunctionCheck(4);
            testFunctionCheck(3);

            expect(count).to.equal(3);
        });

        it('TEST 1: only calls the function once for a function with an arguments length greater than 1', function () {
            let count = 0;
            let testFunction = function (a, b, c) {
                count++;
                let x = a + b + c;
                return x;
            };

            let testFunctionCheck = _.memoize(testFunction);
            testFunctionCheck(2, 3, 4);
            testFunctionCheck(2, 3, 4);
            testFunctionCheck(2, 3, 4);

            expect(count).to.equal(1);

        });

        it('TEST 2: only calls the function once for a function with an arguments length greater than 1', function () {
            let count = 0;
            let testFunction = function (a, b, c) {
                count++;
                let x = a + b + c;
                return x;
            };
            let testFunctionCheck = _.memoize(testFunction);

            testFunctionCheck(2, 3, 4);
            testFunctionCheck(1, 2, 3);
            testFunctionCheck(2, 3, 4);
            testFunctionCheck(2, 3, 4);
            testFunctionCheck(5, 6, 7);
            testFunctionCheck(2, 3, 4);

            expect(count).to.equal(3);

        });

        it('only calls the function once for each argument (Sinon test)', function () {
            const spy = sinon.spy();

            let testFunctionCheck = _.memoize(spy);
            testFunctionCheck();
            testFunctionCheck();
            testFunctionCheck();

            expect(spy.callCount).to.equal(1);
        });

        it('allows the cache of the function to be accessed', function () {
            let testFunction = function (a, b, c) {
                let x = a + b + c;
                return x;
            };
            let testFunctionCheck = _.memoize(testFunction);

            testFunctionCheck(2, 3, 4);
            testFunctionCheck(1, 2, 3);
            expect(testFunctionCheck.cache).to.be.an('object');
            expect(testFunctionCheck.cache).to.eql({ '1': 6, '2': 9 });

        });

        it('takes a hash function which defines the key', function () {
            const testFunction = function (a, b, c) {
                let x = a + b + c;
                return x;
            };

            const hashFunction = function () {
                let keyArgs = '';
                for (let i = 0; i < arguments.length; i++) {
                    keyArgs += arguments[i];
                }
                return keyArgs;
            };
            let testFunctionCheck = _.memoize(testFunction, hashFunction);

            testFunctionCheck(2, 3, 4);
            testFunctionCheck(1, 2, 3);
            expect(testFunctionCheck.cache).to.have.keys('234', '123');
        });

        it('uses the first argument as the key if no hash function is given', function () {
            let testFunction = function (a, b, c) {
                let x = a + b + c;
                return x;
            };
            let testFunctionCheck = _.memoize(testFunction);

            testFunctionCheck(2, 3, 4);
            testFunctionCheck(1, 2, 3);
            expect(testFunctionCheck.cache).to.be.an('object');
            expect(testFunctionCheck.cache).to.eql({ '1': 6, '2': 9 });
        });
    });

    //  SHUFFLE
    describe('_.shuffle', function () {
        it('is a function', function () {
            expect(_.shuffle).to.be.a('function');
        });

        it('returns an array', function () {
            let arr = [1, 2, 3, 4, 5];
            expect(_.shuffle(arr)).to.be.an('array');
        });

        it('returns an empty array if an arguments which is not an array, string or object is entered', function () {
            expect(_.shuffle(true)).to.be.an('array');
            expect(_.shuffle(true)).to.eql([]);

            expect(_.shuffle(123)).to.be.an('array');
            expect(_.shuffle(123)).to.eql([]);
        });

        it('returns the array if an array of length 0 or 1 is entered', function () {
            let empty = [];
            expect(_.shuffle(empty)).to.eql([]);
            expect(_.shuffle([1])).to.eql([1]);
        });

        it('should return an array of the same length', function () {
            let arr = [1, 2, 3, 4, 5];
            expect(_.shuffle(arr)).to.have.lengthOf(5);

            let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            expect(_.shuffle(arr1)).to.have.lengthOf(10);
        });

        it('returns an array that contains the same elements', function () {
            let arr = [1, 2, 3, 4, 5];
            expect(_.shuffle(arr)).to.include(1, 2, 3, 4, 5);
        });

        it('returns an array containing each letter of the string argument in a shuffled order', function () {
            let str = 'abcdefg';
            expect(_.shuffle(str)).to.be.an('array');
            expect(_.shuffle(str)).to.include('a', 'b', 'c', 'd', 'e', 'f', 'g');
        });

        it('returns an array containing the value of each key-value pair in a shuffled order if an object is given as an argument', function () {
            let obj = { a: 1, b: 2, c: 3, d: 4 };
            expect(_.shuffle(obj)).to.be.an('array');
            expect(_.shuffle(obj)).to.include(1, 2, 3, 4);
        });

        it('is a pure function', function () {
            let arr = [1, 2, 3];
            expect(_.shuffle(arr)).to.not.eql(arr);
            expect(arr).to.eql([1, 2, 3]);

            let str = 'abc';
            expect(_.shuffle(str)).to.not.eql(str);
            expect(str).to.equal('abc');

            let obj = { a: 1, b: 2 };
            expect(_.shuffle(obj)).to.not.eql(obj);
            expect(obj).to.eql({ a: 1, b: 2 });
        });

    });

    //  INVOKE
    describe('_.invoke', function () {
        it('1. is a function', function () {
            expect(_.invoke).to.be.a('function');
        });

        it('2. takes at least two arguments', function () {
            expect(_.invoke).to.have.length.greaterThan(2);
        });

        it('3. returns an array', function () {
            expect(_.invoke([[1, 2, 3]], 'sort')).to.be.an('array');
        });

        it('4. applies an array method on each array value in an array list', function () {
            expect(_.invoke([[3, 2, 4, 1], [7, 3, 9, 2]], 'sort')).to.eql([[1, 2, 3, 4], [2, 3, 7, 9]]);
            expect(_.invoke([[3, 2, 4, 1], [7, 3, 9, 2]], 'join')).to.eql(['3,2,4,1', '7,3,9,2']);
        });

        it('5. applies a string method on each string value in an array list', function () {
            expect(_.invoke(['hello', 'world'], 'toUpperCase')).to.eql(['HELLO', 'WORLD']);
        });

        it('6. takes arguments to the methods as the third argument', function () {
            expect(_.invoke([[1, 2, 3], [4, 5, 6]], 'join', '?')).to.eql(['1?2?3', '4?5?6']);
        });

        it('7. returns an array if the list argument is a string', function () {
            expect(_.invoke('abc', 'toUpperCase')).to.eql(['A', 'B', 'C']);
        });

        it('8. returns an array if the list argument is an object', function () {
            expect(_.invoke({ a: 'abc', b: 'def', c: 'ghi' }, 'toUpperCase')).to.eql(['ABC', 'DEF', 'GHI']);
        });

        it('9. returns undefined if no method is given', function () {
            expect(_.invoke([1, 2, 3])).to.be.undefined;
        });

        it('10. returns undefined if a non-prototypal method is given', function () {
            expect(_.invoke([1, 2, 3], 'toUpperCase')).to.eql([undefined, undefined, undefined]);
            expect(_.invoke('abc', 'sort')).to.eql([undefined, undefined, undefined]);
        });

        it('11. returns undefined if the method cannot be applied to the list value', function () {
            expect(_.invoke([[3, 2, 1], [9, 8, 7], 123], 'sort')).to.eql([[1, 2, 3], [7, 8, 9], undefined]);
        });

        it('12. returns an empty array if the list argument is undefined, null, a number or a boolean', function () {
            expect(_.invoke(null, 'sort')).to.eql([]);
            expect(_.invoke(undefined, 'toUpperCase')).to.eql([]);
            expect(_.invoke(1234, 'sort')).to.eql([]);
            expect(_.invoke(true, 'toUpperCase')).to.eql([]);
            expect(_.invoke(false, 'toUpperCase')).to.eql([]);
        });

    });

    //  SORTBY
    describe('_.sortBy', function () {
        it('1. is a function', function () {
            expect(_.sortBy).to.be.a('function');
        });

        it('2. takes two arguments', function () {
            expect(_.sortBy).to.have.lengthOf(2);
        });

        it('3. returns a new array', function () {
            const arr = [1, 2, 3, 4, 5];
            expect(_.sortBy(arr)).to.be.an('array');
            expect(_.sortBy(arr)).to.not.equal(arr);

            const sortArr = [5, 4, 3, 2, 1];
            expect(_.sortBy(sortArr)).to.be.an('array');
            expect(_.sortBy(sortArr)).to.not.equal(sortArr);
        })

        it('4. returns an array', function () {
            expect(_.sortBy([1, 2, 3, 4, 5])).to.be.an('array');
        });

        it('5. returns a sorted array of numbers in ascending order if only one argument is provided', function () {
            const arr = [7, 3, 5, 1, 0, 19];
            expect(_.sortBy(arr)).to.eql([0, 1, 3, 5, 7, 19]);
        });

        it('6. returns a sorted array of strings in alphabetical order if only one argument is provided', function () {
            const arr = ['zoo', 'ant', 'elephant'];
            expect(_.sortBy(arr)).to.eql(['ant', 'elephant', 'zoo']);
        });

        it('7. returns a sorted array of the values of the key value pairs in an object if only one argument is given', function () {
            const objNum = { a: 7, b: 1, c: 12, d: 5 };
            expect(_.sortBy(objNum)).to.eql([1, 5, 7, 12]);

            const objStr = { a: 'zoo', b: 'ant', c: 'elephant' };
            expect(_.sortBy(objStr)).to.eql(['ant', 'elephant', 'zoo']);
        });

        it('8. returns an array of booleans sorted by false and true', function () {
            const arrBool = [true, true, false, true, false, true];
            expect(_.sortBy(arrBool)).to.eql([false, false, true, true, true, true]);
        });

        it('9. returns an array of booleans sorted by false/null (stable search), true, undefined', function () {
            const words = [undefined, null, true, false, false, null, true];
            expect(_.sortBy(words)).to.eql([null, false, false, null, true, true, undefined]);
        });

        it('10. returns a stably sorted array of mixed number and string values, with the values unchanged', function () {
            const mixed = ['a', 14, 'zoo', 3];
            expect(_.sortBy(mixed)).to.eql(mixed);
            expect(_.sortBy(mixed)).to.not.equal(mixed);
        });

        it('11. returns an array stably sorted by the results of passing each value in an array through an iteratee (number)', function () {
            const arr = [1, 2, 3, 4, 5];
            const func = function (n) { return Math.sin(n); };
            const res = [5, 4, 3, 1, 2];
            expect(_.sortBy(arr, func)).to.eql(res);
        });

        it('12. returns an array stably sorted by the results of passing each value in an array through an iteratee (string)', function () {
            const arr = ['any', 'antique', 'a', 'and', 'ants', 'as'];
            const func = function (w) { return w.length; };
            const res = ['a', 'as', 'any', 'and', 'ants', 'antique'];
            expect(_.sortBy(arr, func)).to.eql(res);
        });

        it('13. returns an array stably sorted by the results of passing each value in an object through an iteratee (number)', function () {
            const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
            const func = function (n) { return Math.sin(n); };
            const res = [5, 4, 3, 1, 2];
            expect(_.sortBy(obj, func)).to.eql(res);
        });

        it('14. returns an array stably sorted by the results of passing each value in an array through an iteratee (string)', function () {
            const obj = { a: 'any', b: 'antique', c: 'a', d: 'and', e: 'ants', f: 'as' };
            const func = function (w) { return w.length; };
            const res = ['a', 'as', 'any', 'and', 'ants', 'antique'];
            expect(_.sortBy(obj, func)).to.eql(res);
        });

        it('15. returns an array of object sorted by a given key (numbers, no function)', function () {
            const objArr = [{ name: 'ben', age: 60 }, { name: 'jen', age: 50 }, { name: 'len', age: 40 }, { name: 'ken', age: 50 }];
            const res = [{ name: 'len', age: 40 }, { name: 'jen', age: 50 }, { name: 'ken', age: 50 }, { name: 'ben', age: 60 }];
            expect(_.sortBy(objArr, 'age')).to.eql(res);
        });

        it('16. returns an array of object sorted by a given key (string, no function)', function () {
            const objArr = [{ name: 'len', age: 40 }, { name: 'ben', age: 60 }, { name: 'ken', age: 50 }, { name: 'jen', age: 50 }];
            const res = [{ name: 'ben', age: 60 }, { name: 'jen', age: 50 }, { name: 'ken', age: 50 }, { name: 'len', age: 40 }];
            expect(_.sortBy(objArr, 'name')).to.eql(res);
        });

        it('17. will not take a function argument if sorting an array of objects by key, taking the key instead', function () {
            const objArr = [{ name: 'benjamin', age: 60 }, { name: 'jennifer', age: 50 }, { name: 'leonard', age: 40 }, { name: 'ken', age: 50 }];
            const func = function (n) { return n.name.length; };
            const res = [{ name: 'benjamin', age: 60 }, { name: 'jennifer', age: 50 }, { name: 'ken', age: 50 }, { name: 'leonard', age: 40 }]
            expect(_.sortBy(objArr, 'name', func)).to.eql(res);
        });

        it('18. will sort an object array by a function if a key is defined in the function', function () {
            const objArr = [{ name: 'benjamin', age: 60 }, { name: 'jennifer', age: 50 }, { name: 'leonard', age: 40 }, { name: 'ken', age: 50 }];
            const func = function (n) { return n.name.length; };
            const res = [{ name: 'ken', age: 50 }, { name: 'leonard', age: 40 }, { name: 'benjamin', age: 60 }, { name: 'jennifer', age: 50 }];
            expect(_.sortBy(objArr, func)).to.eql(res);
        });

        it('19. returns a stable sorted array, keeping the original objects in the same order if they both have the same iteratee result', function () {
            const arr = ['apple', 'pear', 'bear', 'fear', 'dear', 'paper'];
            const func = function (n) { return n.length; };
            const res = ['pear', 'bear', 'fear', 'dear', 'apple', 'paper'];
            expect(_.sortBy(arr, func)).to.eql(res);
        });

        it('20. returns an empty array if a non-valid argument is given', function () {
            expect(_.sortBy(true)).to.eql([]);
            expect(_.sortBy(123)).to.eql([]);
            expect(_.sortBy(undefined)).to.eql([]);
            expect(_.sortBy(null)).to.eql([]);
            expect(_.sortBy()).to.eql([]);
        });

        it('21. returns an array of alphabetically ordered letters if a string argument is given', function () {
            expect(_.sortBy('hello')).to.eql(['e', 'h', 'l', 'l', 'o']);
            expect(_.sortBy('hello world')).to.eql([' ', 'd', 'e', 'h', 'l', 'l', 'l', 'o', 'o', 'r', 'w']);
        });
    });

    //  ZIP
    describe('_.zip', function () {
        it('1. is a function', function () {
            expect(_.zip).to.be.a('function');
        });

        it('2. returns an empty array if an array or string is not inputted', function () {
            let result1 = _.zip({ a: 1, b: 2 }, { c: 3, d: 4 });
            let result2 = _.zip(1);
            let expected = [];
            expect(result1).to.eql(expected);
            expect(result2).to.eql(expected);
        });

        it('3. returns the expected result if all the arrays are the same length', function () {
            let result = _.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
            let expected = [['moe', 30, true], ['larry', 40, false], ['curly', 50, false]];
            expect(result).to.eql(expected);
        });

        it('4. returns the expected result if the arrays are different lengths', function () {
            let result = _.zip(['moe', 'larry'], [30, 40, 50], [true, false]);
            let expected = [['moe', 30, true], ['larry', 40, false], [undefined, 50, undefined]];
            expect(result).to.eql(expected);
        });

        it('5. returns the expected result if only one array is provided as an argument', function () {
            let result = _.zip([1, 2, 3]);
            let expected = [[1], [2], [3]];
            expect(result).to.eql(expected);
        });

        it('6. returns an array of string letters if a string is provided', function () {
            let result = _.zip('abc');
            let expected = [['a'], ['b'], ['c']];
            expect(result).to.eql(expected);
        });
    });

    //  SORTEDINDEX
    describe('_.sortedIndex', function () {
        it('1. is a function', function () {
            expect(_.sortedIndex).to.be.a('function');
        });

        it('2. takes at least two arguments', function () {
            expect(_.sortedIndex).to.have.length.greaterThan(2);
        });

        it('3. returns a number', function () {
            expect(_.sortedIndex([1, 2, 3], 4)).to.be.a('number');
        });

        it('4. returns the index that the value should be inserted at (numbers)', function () {
            expect(_.sortedIndex([10, 20, 30, 40, 50, 60], 45)).to.equal(4);
            expect(_.sortedIndex([10, 20, 30, 40, 50, 60], 5)).to.equal(0);
            expect(_.sortedIndex([10, 20, 30, 40, 50, 60], 120)).to.equal(6);
        });

        it('5. returns the first possible index to insert a number that is equal to an existing number', function () {
            expect(_.sortedIndex([10, 20, 30, 40, 50, 60], 20)).to.equal(1);
            expect(_.sortedIndex([10, 20, 30, 30, 30, 40, 50, 60], 30)).to.equal(2);
        });

        it('6. returns 0 if no value is given', function () {
            expect(_.sortedIndex([10, 20, 30, 40, 50, 60])).to.equal(0);
        });

        it('7. returns 0 if a value that cannot be sorted is provided', function () {
            expect(_.sortedIndex([10, 20, 30, 40, 50, 60], 'abc')).to.equal(0);
            expect(_.sortedIndex([10, 20, 30, 40, 50, 60], [24, 89])).to.equal(0);
            expect(_.sortedIndex([10, 20, 30, 40, 50, 60], { a: 14 })).to.equal(0);
            expect(_.sortedIndex([10, 20, 30, 40, 50, 60], null)).to.equal(0);
            expect(_.sortedIndex([10, 20, 30, 40, 50, 60], undefined)).to.equal(0);
            expect(_.sortedIndex([10, 20, 30, 40, 50, 60], true)).to.equal(0);
            expect(_.sortedIndex([10, 20, 30, 40, 50, 60], false)).to.equal(0);
            expect(_.sortedIndex(['ant', 'bear', 'dog', 'elephant', 'goat'], 12)).to.equal(0);
        });

        it('8. returns the index that a number should be inserted at if the number is provided as the only element in an array', function () {
            expect(_.sortedIndex([10, 20, 30, 40, 50, 60], [31])).to.equal(3);
        });

        it('9. returns the index that a number should be inserted at if the number is provided as a string', function () {
            expect(_.sortedIndex([10, 20, 30, 40, 50, 60], '31')).to.equal(3);
        });

        it('10. returns the index that a letter should be inserted at in an alphabetically ordered array list', function () {
            expect(_.sortedIndex(['a', 'b', 'd', 'e', 'g'], 'c')).to.equal(2);
            expect(_.sortedIndex(['a', 'b', 'd', 'e', 'g'], 'e')).to.equal(3);
        });

        it('11. returns the index that a word should be inserted at in an alphabetically ordered array list', function () {
            expect(_.sortedIndex(['ant', 'bear', 'dog', 'elephant', 'goat'], 'cat')).to.equal(2);
            expect(_.sortedIndex(['ant', 'bear', 'dog', 'elephant', 'goat'], 'anteater')).to.equal(1);
            expect(_.sortedIndex(['ant', 'bear', 'dog', 'dragonfly', 'elephant', 'goat'], 'dolphin')).to.equal(3);
        });

        it('12. returns the index that an object should be inserted at in an array of objects if the property the array has been sorted by is given as the iteratee', function () {
            const objArr = [{ name: 'Harry', age: 20 }, { name: 'Hermione', age: 30 }, { name: 'Ron', age: 40 }];
            expect(_.sortedIndex(objArr, { name: 'Luna', age: 25 }, 'name')).to.equal(2);
            expect(_.sortedIndex(objArr, { name: 'Luna', age: 25 }, 'age')).to.equal(1);
        });

        it('13. returns 0 if the property that the array of objects has been sorted by is not given', function () {
            const objArr = [{ name: 'Harry', age: 20 }, { name: 'Hermione', age: 30 }, { name: 'Ron', age: 40 }];
            expect(_.sortedIndex(objArr, { name: 'Luna', age: 25 })).to.equal(0);
        });

        it('14. returns the index that a letter or word would be inserted at in an alphabetical string', function () {
            expect(_.sortedIndex('abcefgjkl', 'd')).to.equal(3);
            expect(_.sortedIndex('abcdefgh', 'f')).to.equal(5);
            expect(_.sortedIndex('abcdefgh', 'dog')).to.equal(4);
        });

        it('15. returns the index to insert a value at in an array that has sorted by an iteratee if the iteratee is provided', function () {
            const fn1 = function (el) {
                let res = 0;
                for (let i = 0; i < el.length; i++) {
                    res += el[i];
                }
                return res;
            };
            expect(_.sortedIndex([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [4, 5, 7], fn1)).to.eql(2);

            const fn2 = function (el) {
                return el.name.length;
            };
            const objArr = [{ name: 'Ron', age: 11 }, { name: 'Harry', age: 11 }, { name: 'Hermione', age: 11 }];
            const result = _.sortedIndex(objArr, { name: 'Luna', age: 11 }, fn2);
            expect(result).to.eql(1);
        });

        it('16. returns the index to insert a value at in array that has been sorted by a prototypal property if that property is provided as a string', function () {
            expect(_.sortedIndex(['ant', 'arm', 'army', 'after', 'anyone'], 'anteater')).to.equal(1);
            expect(_.sortedIndex(['ant', 'arm', 'army', 'after', 'anyone'], 'anteater', 'length')).to.equal(5);
        });
    });
    //  FLATTEN
    describe('_.flatten', function () {
        it('1. is a function', function () {
            expect(_.flatten).to.be.a('function');
        });

        it('2. takes at least one argument', function () {
            expect(_.flatten).to.have.lengthOf.at.least(1);
        });

        it('3. returns a flattened array from one nested a single level', function () {
            expect(_.flatten([[1, 2], [3, 4, 5]])).to.eql([1, 2, 3, 4, 5]);
        });

        it('4. returns a flattened array from an array nested to any depth', function () {
            expect(_.flatten([[1, [2]], [3, [4], 5]])).to.eql([1, 2, 3, 4, 5]);
            expect(_.flatten([1, 2, [[[[[[[[[3]]]]]]]]]])).to.eql([1, 2, 3]);
            expect(_.flatten([4, [3, [7, [3, [[6]], [[8]], [[[10]]]]], 8], 1])).to.eql([4, 3, 7, 3, 6, 8, 10, 8, 1])
        });

        it('5. returns an array flattened a single level if shallow is true', function () {
            expect(_.flatten([1,2,[3, [4]]])).to.eql([1,2,3,4]);
            expect(_.flatten([1,2,[3, [4]]], true)).to.eql([1,2,3,[4]]);
        });

        it('6. returns an array flattened a single level if a non-falsy value is passed as the second argument', function () {
            expect(_.flatten([1,2,[3, [4]]], 'abc')).to.eql([1,2,3,[4]]);
            expect(_.flatten([1,2,[3, [4]]], 5)).to.eql([1,2,3,[4]]);
            expect(_.flatten([1,2,[3, [4]]], [1,2])).to.eql([1,2,3,[4]]);
            expect(_.flatten([1,2,[3, [4]]], {a: 1})).to.eql([1,2,3,[4]]);
            expect(_.flatten([1,2,[3, [4]]]), null).to.eql([1,2,3,4]);
            expect(_.flatten([1,2,[3, [4]]]), undefined).to.eql([1,2,3,4]);
            expect(_.flatten([1,2,[3, [4]]]), 0).to.eql([1,2,3,4]);
            expect(_.flatten([1,2,[3, [4]]]), false).to.eql([1,2,3,4]);
        });

        it('7. returns an empty array if a non-array and non-string argument is provided', function () {
            expect(_.flatten(123)).to.eql([]);
            expect(_.flatten({a: 1, b: 2})).to.eql([]);
            expect(_.flatten(true)).to.eql([]);
            expect(_.flatten(false)).to.eql([]);
            expect(_.flatten(null)).to.eql([]);
            expect(_.flatten(undefined)).to.eql([]);
        });

        it('8. returns the string split into an array by letter if a string argument is passed', function () {
            expect(_.flatten('hello')).to.eql(['h', 'e', 'l', 'l', 'o']);
        });
    });

    //  INTERSECTION

    //  DIFFERENCE

    //  THROTTLE

    //  DELAY

});








