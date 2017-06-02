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
    if(Array.isArray(list)) {
        for (let i = 0; i < list.length; i++) {
            iteratee (list[i], i, list);
        }
    } else {
        for (let prop in list) {
            iteratee(list[prop], prop, list);
        }
    }
};



if (typeof module !== 'undefined') {
  module.exports = _;
}
