const arrayFill = function(val, count) {
    if (!(typeof val === 'number'
        || typeof val === 'string'
        || typeof val === 'object'
    )) {
        throw new Error('first parameter supports only these types: Number, String, Object, Array');
    }
    if (!(typeof count === 'number')) {
        throw new Error('second parameter type is not a Number');
    }

    const container = [];

    for(let i = 0; i < count; i++) {
        container.push(val);
    }
    return container;
};

const arr = arrayFill('x',7);

console.log(arr);