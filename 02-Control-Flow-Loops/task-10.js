let arr = [1,2,3,4,5,6,7,8,9,10];
let member;
let temp;

for(let i=0;i<10;i++)
{
    let max=arr[i];

    for(let j=i;j<10;j++)
    {
        if(max<=arr[j])
        {
            max=arr[j];
            member=j;
        }
    }

    temp=arr[i];
    arr[i]=max;
    arr[member]=temp;
}

for(let i of arr)
{
    console.log(i);
}