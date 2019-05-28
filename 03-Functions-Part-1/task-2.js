function f() {
    let sum = 0;
    for (item of arguments) {
        if (typeof item !== 'number')
            throw new Error('Error: all parameters type should be a Number');
        else
            sum += item;
    }
    console.log(sum);
}

f(1, 2, 3);
f(5, 11, 8);