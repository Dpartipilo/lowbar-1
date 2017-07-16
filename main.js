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

//  SOME
_.some = (list, predicate) => {
    if (Array.isArray(list)) {
        for (let i = 0; i < list.length; i++) {
            if (predicate(list[i])) return true;
        }
    } else if (typeof list === 'object') {
        for (let key in list) {
            if (predicate(list[key])) return true;
        }
    }
    return false;
};

//  EXTEND
_.extend = function (destination) {
    for (let i = 1; i < arguments.length; i++) {
        const obj = arguments[i];
        for (let key in obj) {
            destination[key] = obj[key];
        }
    }
    return destination;
};

//  DEFAULTS
_.defaults = function (obj) {
    if (typeof obj === 'object') {
        for (let i = 1; i < arguments.length; i++) {
            const checkObj = arguments[i];
            for (let key in checkObj) {
                if (!(key in obj)) {
                    obj[key] = checkObj[key]
                }
            }
        }
    }
    return obj;
};

//  ONCE
_.once = function (fn) {
    let alreadyCalled = false;
    return function () {
        if (!alreadyCalled) {
            alreadyCalled = true;
            return fn.apply(null, arguments);
        }
    };
};

//  MEMOIZE
_.memoize = function (fn) {
    let cache = {};
    return function () {
        if (arguments.length === 1) {
            if (arguments[0] in cache) return cache[arguments[0]];
            let result = fn(arguments[0]);
            cache[arguments[0]] = result;
            return result;
        } else {
            let args = JSON.stringify(arguments);
            if (args in cache) return cache[args];
            let result = fn.apply(null, arguments);
            cache[args] = result;
            return result;
        }
    };
};

//  SHUFFLE
_.shuffle = function (arr) {
    if (typeof arr === 'string') arr = arr.split('');
    if (typeof arr === 'object' && !(Array.isArray(arr))) {
        const newArr = [];
        for (let key in arr) {
            newArr.push(arr[key]);
        }
        arr = newArr;
    }
    if (!arr || arr.length === 0 || !(Array.isArray(arr))) return [];
    const result = [];
    do {
        let randomIndex = (Math.floor(Math.random() * arr.length));
        let x = arr[randomIndex];
        arr = arr.slice(0, randomIndex).concat(arr.slice(randomIndex + 1));
        result.push(x);
    }
    while (arr.length > 0);
    return result;
};

//  INVOKE

//  SORT BY
_.sortBy = function (list, iteratee) {
    let listArr;
    Array.isArray(list) ? listArr = [...list] : listArr = _.defaults({}, list)
    let iterated = false;
    if (typeof listArr === 'string') listArr = listArr.split('');
    if (typeof listArr === 'object' && !(Array.isArray(listArr))) {
        const newList = [];
        for (let key in listArr) {
            newList.push(listArr[key]);
        }
        listArr = newList;
    }
    if (typeof iteratee === 'function') {
        const newList = [];
        for (let i = 0; i < listArr.length; i++) {
            newList.push({originalValue: listArr[i], newValue: iteratee(listArr[i])});
        }
        listArr = newList;
        iterated = true;
    }
    if (_.every(listArr, function (el) {return typeof el === 'string'})) {
        return listArr.sort();
    }

    let result = listArr.sort((a, b) => {
        if (iteratee) {
            if (iterated) return a.newValue > b.newValue;
            return a[iteratee] > b[iteratee];
        }
        return a > b;
    });
    if (iterated) {
        const updatedResult = [];
        for (let i = 0; i < result.length; i++) {
            updatedResult.push(result[i].originalValue);
        }
        return updatedResult;
    }
    return result;
};
    //  ZIP
    _.zip = function () {
        const result = [];
        let longest = 0;
        for (let i = 0; i < arguments.length; i++) {
            if (arguments[i].length > longest) longest = arguments[i].length;
        }
        for (let j = 0; j < longest; j++) {
            const tempArr = [];
            for (let k = 0; k < arguments.length; k++) {
                tempArr.push(arguments[k][j]);
            }
            result.push(tempArr);
        }
        return result;
    };
    //  SORTEDINDEX

    //  FLATTEN

    //  INTERSECTION

    //  THROTTLE

    //  DELAY

    if (typeof module !== 'undefined') {
        module.exports = _;
    }
