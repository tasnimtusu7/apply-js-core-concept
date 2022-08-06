function getsum (numbers){
    let sum=0;
    for(let i=0; i< numbers.length; i++){
        const index=i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index,element,sum);
    }
    return sum;
}
const mynumber =[12, 23, 34, 32, 12,32,13];
getsum (mynumber);