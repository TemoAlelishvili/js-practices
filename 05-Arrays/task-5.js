const reduce = function(arr, cb, acc) {
    if (!Array.isArray(arr)) {
        throw new Error('first parameter type is not an Array');
    }

    if (!(typeof cb === 'function')) {
        throw new Error('second parameter type is not a Function');
    }

    if (!(typeof acc === 'number' || typeof acc === 'string')) {
        throw new Error('third parameter type should be a Number or a String');
    }

    
    const length = arr.length;
    let accumulator = acc;

    for (i=0; i < length; i++) {
        accumulator = cb(accumulator, arr[i], i, arr);
    }

    return accumulator;
};
  
const arr = [1,2,3,4];

const sum = reduce(arr, function(acc, item, i, arr) {
    return acc + item;
}, 0);


console.log(sum);