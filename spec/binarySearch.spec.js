const { expect } = require('chai');
const path = require('path');

const binarySearch = require(path.resolve(__dirname, '..', 'lib', 'binarySearch'));

describe('binarySearch', () => {
  it('is a function', () => {
    expect(binarySearch).to.be.a('function');
  });

  it('returns a number', () => {
    expect(binarySearch([1, 2, 3], 1)).to.be.a('number');
  });

  it('returns the index of the search term in a sorted array', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 5)).to.equal(4);
    expect(binarySearch([1, 2, 3, 4, 5, 6], 6)).to.equal(5);
    expect(binarySearch([10, 11, 12, 13, 14], 13)).to.equal(3);
    expect(binarySearch([10, 11, 12, 13, 14], 10)).to.equal(0);
  });

  it('returns -1 if the array does not contain the number', () => {
    expect(binarySearch([1, 2, 3], 4)).to.equal(-1);
  });


  it('works for longer arrays', () => {
    expect(binarySearch([2, 4, 5, 7, 9, 11, 13, 15, 17, 19, 20, 27, 29, 30, 31, 32, 34, 38, 40, 46], 20)).to.equal(10);
  });

  it('works if the array contains repeated values', () => {
    expect(binarySearch([1, 1, 1, 1, 1, 1, 1, 1], 1)).to.equal(0);
  });

});