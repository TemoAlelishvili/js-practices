function f() {
    let sum = 0;
    for (item of arguments) {
        if (typeof item !== 'number'){
             throw new Error('Error: all parameters type should be a Number');
        }  else{
            num = item;
            sum += num;
        }
    }
    return sum;
}

console.log(f(1, 2, 3));
console.log(f(5, 11, 8));