const reduceRight = function(arr, cb, acc) {
    if (!Array.isArray(arr)) {
        throw new Error('first parameter type is not an Array');
    }

    if (!(typeof cb === 'function')) {
        throw new Error('second parameter type is not a Function');
    }

    if (!(typeof acc === 'number' || typeof acc === 'string')) {
        throw new Error('third parameter type should be a Number or a String');
    }

    let counter = arr.length - 1;
    let accumulator = acc;

    for (counter; counter >= 0; counter--) {
        accumulator = cb(accumulator, arr[counter], counter, arr);
    }

    return accumulator;
};
  
const arr = [1,2,3];

const sum = reduceRight(arr, function(acc, item, i, arr) {
    return acc + item;
}, '');

console.log(sum);