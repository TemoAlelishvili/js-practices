const person = {
    get salary() {
        const today = new Date();
        const amountofday = new Date(today.getFullYear(), today.getMonth()+1, 0).getDate();
        console.log(amountofday);
        return amountofday - today.getDate() > 20 ? 'good salary' : 'bad salary';
    }
}
console.log(person.salary);


