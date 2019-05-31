function getDivisors(number) {
    let divisors = [];
    if (typeof number !== "number") {
        throw new Error('parameter type is not a Number');
    }
    else if (number <= 0) {
        throw new Error('parameter can\'t be a 0')
    }
    else {
        for (let i = 1; i <=number; i++) {
            if (number % i == 0) {
                divisors.push (i)
            }
        }
    }
    return divisors;
}
console.log(getDivisors(15));



