let arr = [2, -5, 9, -15, 0, 1, -4, 5];
let sum=0;

for(let i of arr)
{
    if(i > 0)
    {   
        sum += i;
    }
}

console.log(sum);
