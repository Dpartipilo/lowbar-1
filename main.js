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
_.reduce = (list, iteratee, memo) => {
    if (Array.isArray(list)) {
        if (memo !== 0 && memo !== '' && !memo) memo = list.shift();
        for (let i = 0; i < list.length; i++) {
            memo = iteratee(memo, list[i], i, list);
        }
    } else {
        for (let key in list) {
            if (memo !== 0 && memo !== '' && !memo) memo = list[key];
            else memo = iteratee(memo, list[key], key, list);
        }
    }
    return memo;
};

//  EVERY
_.every = (list, predicate) => {
    if (Array.isArray(list)) {
        for (let i = 0; i < list.length; i++) {
            if (!(predicate(list[i]))) return false;
        }
    } else if (typeof list === 'object') {
        for (let key in list) {
            if (!(predicate(list[key]))) return false;
        }
    }
    return true;
};



if (typeof module !== 'undefined') {
    module.exports = _;
}
