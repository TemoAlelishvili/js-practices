function f(n) {
    if (typeof n !== 'number')
        throw new Error('Error: parameter type is not a Number');
    else
        return n * n * n;
}

console.log(f(2));

console.log(f(3));