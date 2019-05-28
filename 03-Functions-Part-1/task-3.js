function f (a, b, c) {
    for (item of arguments) {
        if (typeof item !== 'number')
            throw new Error('Error: all parameters type should be a Number');
        else 
            console.log((a-b) / c);
            break;
    }
}

f (9, 3, 2);
f (5, 9, 1)