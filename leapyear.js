function inLeapyear (year){
    const remainder = year % 4;
    if (remainder === 0){
        console.log("this year leapyear");
    }
    else{
        console.log("this year is not leap year");
    }
}
inLeapyear(2019);