let arr = [10,9,8,7,6,5,4,3,2,1];
let member;
let temp;

for(let i=0;i<10;i++)
{
    let min=arr[i];

    for(let j=i;j<10;j++)
    {
        if(min>=arr[j])
        {
            min=arr[j];
            member=j;
        }
    }

    temp=arr[i];
    arr[i]=min;
    arr[member]=temp;
}

for(let i of arr)
{
    console.log(i);
}