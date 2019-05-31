function f (a, b, c) {
    for (item of arguments) {
        let result = 0;
        if (typeof item !== 'number'){
            throw new Error('Error: all parameters type should be a Number');
        }  else {
            result = ((a-b) / c);
            return result;
        }
    }
}
console.log(f (9, 3, 2));
console.log(f (5, 9, 1));

