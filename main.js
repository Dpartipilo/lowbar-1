const path = require('path');

const _ = {};
const binarySearch = require(path.resolve(__dirname, 'lib', 'binarySearch'));

//  IDENTITY
_.identity = value => value;

//  FIRST
_.first = (array, n) => {
    // return undefined for non-valid or empty array input
    if (!(typeof array === 'string') && !(Array.isArray(array))) return undefined;
    if (n < 0) return [];
    // return the first element of the array if n is undefined
    if (n === undefined) return array[0];
    // find the first n elements of the array
    let result = array.slice(0, n);
    // split the result if it is a string
    if (typeof result === 'string') return result.split('');
    return result;
};

//  LAST
_.last = (array, n) => {
    // return undefined for non-valid input
    if (!(typeof array === 'string') && !(Array.isArray(array))) return undefined;
    // return the last element of the array if n is undefined
    if (n === undefined) return array[array.length - 1];
    // find the last n elements of the array
    let result = array.slice(array.length - n);
    // split the result if it is a string
    if (typeof result === 'string') result = result.split('');
    return result;
};

//  EACH
_.each = (list, iteratee) => {
    // loop over each element of the array and call the iteratee with each element
    if (Array.isArray(list)) {
        for (let i = 0; i < list.length; i++) {
            iteratee(list[i], i, list);
        }
    } else {
        // loop over each key-value pair in the list and call the iteratee with each pair
        for (let prop in list) {
            iteratee(list[prop], prop, list);
        }
    }
};

//  INDEX OF
_.indexOf = (array, value, startingIndex = 0) => {
    // return -1 if no array
    if (!array) return -1;
    // use a binary search if the startingIndex is true
    if (startingIndex === true) return binarySearch(array, value);
    // define the starting index if it is a negative number
    if (startingIndex < 0) startingIndex = array.length + startingIndex;
    // loop over the array and return the index of the first element that equals the value
    for (let i = startingIndex; i < array.length; i++) {
        if (array[i] === value) return i;
    }
    // return -1 if no elements match the value
    return -1;
}

//  MAP
_.map = (list, iteratee) => {
    // loop over each value in an array list
    if (Array.isArray(list)) {
        const result = [];
        for (let i = 0; i < list.length; i++) {
            // push the result of calling the iteratee to a new array
            result.push(iteratee(list[i], i, list));
        }
        return result;
    } else {
        // loop over each key-value pair in an object
        let result = {};
        for (let key in list) {
            // define a new key value pair as the result of the iteratee and the value/key
            result[key] = iteratee(list[key], key, list);
        }
        return result;
    }
};

// CONTAINS
_.contains = (list, value, startingIndex = 0) => {
    // look at each value in an object
    if (typeof list === 'object' && !(Array.isArray(list))) {
        for (let key in list) {
            // if the value matches the defined value return true
            if (list[key] === value) return true;
        }
        return false;
    }
    // call the index of function
    const result = _.indexOf(list, value, startingIndex);
    // return true if the list contains the value
    if (result >= 0) return true;
    return false;
};

//  PLUCK
_.pluck = (list, propertyName) => {
    // return an empty array if no arguments defined
    if (!list) return [];
    // return an undefined array if no property name is defined
    if (!propertyName) return [undefined];
    const result = [];
    // loop over each element in the list
    for (var i = 0; i < list.length; i++) {
        // push the property name of each value to the result array
        result.push(list[i][propertyName]);
    }
    return result;
};

//  REDUCE
_.reduce = (list, iteratee, memo) => {
    if (Array.isArray(list)) {
        // if no memo is defined, the first value of the list becomes the memo 
        // and the iteratee is not called on it
        if (memo !== 0 && memo !== '' && !memo) memo = list.shift();
        // loop over each element in the array and call the iteratee on it, returning 
        // the result as the new memo
        for (let i = 0; i < list.length; i++) {
            memo = iteratee(memo, list[i], i, list);
        }
    } else {
        for (let key in list) {
            // if no memo is defined, the first value of the list becomes the memo 
            // and the iteratee is not called on it
            if (memo !== 0 && memo !== '' && !memo) memo = list[key];
            // loop over each value in the object and call the iteratee on it, returning
            // the result as the new memo
            else memo = iteratee(memo, list[key], key, list);
        }
    }
    return memo;
};

//  EVERY
_.every = (list, predicate) => {
    // loop over each element in the array, returning false if the predicate is not met
    if (Array.isArray(list)) {
        for (let i = 0; i < list.length; i++) {
            if (!(predicate(list[i]))) return false;
        }
    } else if (typeof list === 'object') {
        // loop over each object value, returning false if the predicate is not met
        for (let key in list) {
            if (!(predicate(list[key]))) return false;
        }
    }
    // return true if the predicate is not met for all items in the list
    return true;
};

//  SOME
_.some = (list, predicate) => {
    // loop over each element in an array list, returning true if one item in the
    // list meets the predicate
    if (Array.isArray(list)) {
        for (let i = 0; i < list.length; i++) {
            if (predicate(list[i])) return true;
        }
    } else if (typeof list === 'object') {
        // loop over each value in an object list, returning true if one item in the
        // list meets the predicate
        for (let key in list) {
            if (predicate(list[key])) return true;
        }
    }
    // return false if no values meet the predicate
    return false;
};

//  EXTEND
_.extend = function (destination) {
    // loop over the arguments
    for (let i = 1; i < arguments.length; i++) {
        const obj = arguments[i];
        // for each object key, assign the value to the destination object
        for (let key in obj) {
            destination[key] = obj[key];
        }
    }
    // return the destination object
    return destination;
};

//  DEFAULTS
_.defaults = function (obj) {
    if (typeof obj === 'object') {
        // loop over the arguments
        for (let i = 1; i < arguments.length; i++) {
            const checkObj = arguments[i];
            // if the key does not exist in the defined object, assign obj[key] to the value
            for (let key in checkObj) {
                if (!(key in obj)) {
                    obj[key] = checkObj[key];
                }
            }
        }
    }
    // return the object
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
    //  create a variable
    let cache = {};
    //  returns a new function
    return function () {
        if (arguments.length === 1) {
            //  if arg is in cache, return the value from the cache
            if (arguments[0] in cache) return cache[arguments[0]];
            //  if not, calculate the result by calling the function
            let result = fn(arguments[0]);
            //  store it in the cache
            cache[arguments[0]] = result;
            //  return the value
            return result;
        } else {
            let args = JSON.stringify(arguments);
            //  if arg is in cache, return the value from the cache
            if (args in cache) return cache[args];
            //  if not, calculate the result by calling the function
            let result = fn.apply(null, arguments);
            //  store it in the cache
            cache[args] = result;
            //  return the value
            return result;
        }
    };
};

//  SHUFFLE
_.shuffle = function (arr) {
    // prepare string arguments by creating an array
    if (typeof arr === 'string') arr = arr.split('');
    // prepare object arguments by creating an array
    if (typeof arr === 'object' && !(Array.isArray(arr))) {
        const newArr = [];
        for (let key in arr) {
            newArr.push(arr[key]);
        }
        arr = newArr;
    }
    // return an empty array if a non-valid argument is given
    if (!arr || arr.length === 0 || !(Array.isArray(arr))) return [];
    const result = [];
    do {
        //  generate a random number between 0 and the array length
        let randomIndex = (Math.floor(Math.random() * arr.length));
        //  remove the value at that index from the array
        let x = arr[randomIndex];
        arr = arr.slice(0, randomIndex).concat(arr.slice(randomIndex + 1));
        //  push it to the new array
        result.push(x);
    }
    //  stop when the array length reaches 0
    while (arr.length > 0);
    return result;
};

//  INVOKE

//  SORT BY
_.sortBy = function (list, iteratee) {
    // define variables
    let listArr, iterated = false;
    // create a new list/array from the parameters, so they do not mutate
    Array.isArray(list) ? listArr = [...list] : listArr = _.defaults({}, list);
    // prepare strings arguments by splitting them
    if (typeof listArr === 'string') listArr = listArr.split('');
    // prepare list arguments by creating an array from their values
    if (typeof listArr === 'object' && !(Array.isArray(listArr))) {
        const newList = [];
        for (let key in listArr) {
            newList.push(listArr[key]);
        }
        listArr = newList;
    }
    // if an iteratee is provided, call the iteratee on each item in the array, 
    // creating a new list of objects containing the original and new values
    if (typeof iteratee === 'function') {
        const newList = [];
        for (let i = 0; i < listArr.length; i++) {
            newList.push({ originalValue: listArr[i], newValue: iteratee(listArr[i]) });
        }
        listArr = newList, iterated = true;
    }
    //  sort the array
    let result = listArr.sort((a, b) => {
        if (iteratee) {
            // if an iteratee has been called, sort according to the new value
            if (iterated) return a.newValue > b.newValue;
            // if the iteratee is the key from the key-value pair, sort according to the value
            return a[iteratee] > b[iteratee];
        }
        // sort an array
        return a > b;
    });
    // if a function has been called, create an array containing the original arguments
    // in their current (sorted) order
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
    //  find the length of the longest argument
    let longest = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i].length > longest) longest = arguments[i].length;
    }
    //  create a temporary array containing the arguments at a given index of each array
    for (let j = 0; j < longest; j++) {
        const tempArr = [];
        for (let k = 0; k < arguments.length; k++) {
            tempArr.push(arguments[k][j]);
        }
        // push the temporary array to the result 
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
