const filter = function(arr, tsk) {
    if (!Array.isArray(arr)) {
        throw new Error('first parameter type is not an Array');
    }

    if (!(typeof tsk === 'function')) {
        throw new Error('second parameter type is not a Function');
    }

    
    const selected = [];

    for (let i = 0; i < arr.length; i ++) {
        const returned = tsk(arr[i], i , arr);
        if(returned == true){
            selected.push(arr[i]);
        }
    }  
    return selected;
};
  
const arr = [1,2,3,6,8,7];

const result = filter(arr, function(item, i, arr) {
    return item > 3 
});

console.log(result);