var isEven = function () {
    for (item of arguments) {
        if (typeof item !== 'number')
            throw new Error('Error: parameter type is not a Number');
        else if (item % 2 == 0){
            console.log('true');
        }    else{
            console.log('false');
        }
            
    }
}

isEven(3);
isEven(4);
isEven('Content');