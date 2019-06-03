function upperCaseFirst(n) {
    if ( typeof n !== 'string' ){
        throw new Error('Parameter Should be string');
    } else {
        let str = n;
    let letter = str.charAt(0);
    let uppercas = letter.toUpperCase();
    let slided =    str.slice(1);
    let forreturn = uppercas + slided;
    return forreturn;
    }  
}
console.log(upperCaseFirst('temo'));