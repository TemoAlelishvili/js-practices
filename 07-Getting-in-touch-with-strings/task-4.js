const extractCurrencyValue = (source) => {

    if (typeof source !== 'string') {
        throw new Error('First parameter must be string.');
    }

    let result = (source.slice(1));

    return parseInt(result);


};

console.log(extractCurrencyValue('$120')); // 120