const reverse = function(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('first parameter type is not an Array');
    }

    if (!arr.length) {
        throw new Error('Array is empty');
    }

    const data = [];
    
    arr.forEach(function(item) {
        data.unshift(item);
    });

    return data;
};

const arr = [3,2,1];
const reversed = reverse(arr);
console.log(reversed);