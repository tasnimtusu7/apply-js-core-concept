function inEven (number){
    const remainder = number % 2;

if(remainder === 0){
   return true;
}
else{
    return false;
}
}
const myNumber = inEven(324);
console.log(myNumber);
