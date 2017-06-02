const _ = {};

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
            iteratee (list[i], i, list);
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

// // CONTAINS
// _.contains = 


if (typeof module !== 'undefined') {
  module.exports = _;
}
