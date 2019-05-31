const forEach = function(arr, tsk) {
    if (!Array.isArray(arr)) {
        throw new Error('first parameter type is not an Array');
    }

    if (!(typeof tsk === 'function')) {
        throw new Error('second parameter type is not a Function');
    }

    for (let i = 0; i < arr.length; i++ ){
        tsk(arr[i], i, arr);
    };
}

let arr = [1,2,3,4,5,6];

forEach(arr, function(item, i, arr) {
    
    console.log(`Index: ${i}, Element: ${item}, Array: ${arr}`)
});
