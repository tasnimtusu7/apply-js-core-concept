function milesToKm(miles){
    const kilometer = miles * 1.06;
    return kilometer;
}
const distanation = 2;
const km = milesToKm (distanation);
console.log(km);