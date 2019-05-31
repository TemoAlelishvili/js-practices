const every = function(arr, tsk) {
    if (!Array.isArray(arr)) {
        throw new Error('first parameter type is not an Array');
    }

    if (!(typeof tsk === 'function')) {
        throw new Error('second parameter type is not a Function');
    }

   
    let returned = false;

    for (let i = 0; i < arr.length; i++) {
        returned = tsk(arr[i], i , arr);

        if (returned == false) {
            break;
        }
    }

    return returned;
};
  
const arr = [-2,8,7,-3];

const result = every(arr, function(item, i, arr) {
    return item  > 0;
});

console.log(result);