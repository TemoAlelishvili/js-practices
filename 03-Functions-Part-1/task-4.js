function f (n) {
    if (typeof n !== 'number'){
        throw new Error('Error: parameter type is not a Number');
        }     
    else if (n < 1 || n > 7){
        throw new Error('Error: parameter should be in the range of 1 to 7');
    }
    else {
        if(n == 1){
            console.log('ორშაბათი');
        }  
        if(n == 2){
             console.log('სამშაბათი');
        }
        if(n == 3){
            console.log('ოთხშაბათი');
        }
        if(n == 4){
            console.log('ხუთსაბათი');
        }  
        if(n == 5){
            console.log('პარასკევი');
        }
        if(n == 6){
            console.log('შაბათი');
        } 
        if(n == 7){
            console.log('კვირა');
        }  
    }
}

f(1);
f(2);
f(4)
f(8);
f('1');