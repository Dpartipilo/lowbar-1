const path = require('path');

const _ = {};
const binarySearch = require(path.resolve(__dirname, 'lib', 'binarySearch'));

//  IDENTITY
_.identity = value => value;

//  FIRST
_.first = (array, n) => {
    if (!(typeof array === 'string') && !(Array.isArray(array))) return undefined;
    if (n < 0) return [];
    if (n === undefined) return array[0];
    let result = array.slice(0, n);
    if (typeof result === 'string') return result.split('');
    return result;
};

//  LAST
_.last = (array, n) => {
    if (!(typeof array === 'string') && !(Array.isArray(array))) return undefined;
    if (n === undefined) return array[array.length - 1];
    let result = array.slice(array.length - n);
    if (typeof result === 'string') result = result.split('');
    return result;
};

//  EACH
_.each = (list, iteratee) => {
    if (Array.isArray(list)) {
        for (let i = 0; i < list.length; i++) {
            iteratee(list[i], i, list);
        }
    } else {
        for (let prop in list) {
            iteratee(list[prop], prop, list);
        }
    }
};

//  INDEX OF
_.indexOf = (array, value, startingIndex = 0) => {
    if (!array) return -1;
    if (startingIndex === true) return binarySearch(array, value);
    if (startingIndex < 0) startingIndex = array.length + startingIndex;

    for (let i = startingIndex; i < array.length; i++) {
        if (array[i] === value) return i;
    }
    return -1;
}

//  MAP
_.map = (list, iteratee) => {
    if (Array.isArray(list)) {
        const result = [];
        for (let i = 0; i < list.length; i++) {
            result.push(iteratee(list[i], i, list));
        }
        return result;
    } else {
        let result = {};
        for (let key in list) {
            result[key] = iteratee(list[key], key, list);
        }
        return result;
    }
};

// CONTAINS
_.contains = (array, value, startingIndex = 0) => {
    if (typeof array === 'object' && !(Array.isArray(array))) {
        for (let key in array) {
            if (array[key] === value) return true;
        }
        return false;
    }
    const result = _.indexOf(array, value, startingIndex);
    if (result >= 0) return true;
    return false;
};

//  PLUCK
_.pluck = (list, propertyName) => {
    if (!list) return [];
    if (!propertyName) return [undefined];
    const result = [];

    for (var i = 0; i < list.length; i++) {
        result.push(list[i][propertyName]);
    }
    return result;
};

//  REDUCE
// reduce_.reduce(list, iteratee, [memo], [context]) Aliases: inject, foldl 
// Also known as inject and foldl, reduce boils down a list of values into a single value. Memo is the initial 
// state of the reduction, and each successive step of it should be returned by iteratee. The iteratee is passed 
// four arguments: the memo, then the value and index (or key) of the iteration, and finally a reference to the
//  entire list.

// If no memo is passed to the initial invocation of reduce, the iteratee is not invoked on the first element 
// of the list. The first element is instead passed as the memo in the invocation of the iteratee on the next 
// element in the list.

// var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
// => 6

_.reduce = (list, iteratee, memo) => {
    // if memo is an array
    if (Array.isArray(list)) {
        // if there is no memo, memo = array[0] and iteration starts at 1;
        if (memo !== 0 && !memo) memo = list.shift();
        for (let i = 0; i < list.length; i++) {
            memo = iteratee(memo, list[i], i, list);
        }
        return memo;
    }
};



if (typeof module !== 'undefined') {
    module.exports = _;
}
