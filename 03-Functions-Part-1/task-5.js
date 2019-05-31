let arr1 = [1, 2, -4, 3, -9, -1, 7];
let arr2 = [];

const isPositive = function (number) {
    
        if (typeof number !== 'number')
            throw new Error('Error: parameter type is not a Number');
        else if (number < 0)
            return false
        else if (number> 0)
            return true
}
for (let i = 0; i < arr1.length; i++) {
    if (isPositive(arr1[i]) ){
        arr2.push(arr1[i]);
    }
}

console.log(isPositive(5));
console.log(arr2);
console.log(arr1[3]);

