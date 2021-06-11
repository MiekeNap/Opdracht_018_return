//checking if number is big; function does something
const checkNumber = function(number) { 
   if (number > 100) { 
    return true;
    }
    return false;
};

console.log(checkNumber(90)); // false
console.log(checkNumber(110)); // true


//bouncer at a club; function does and produces
/* if the actual number => max number: its too busy now, come back later
    else if age < 18, this is a club for adults
    else: come in */

const brendaBouncerBot = function(maxNumber, actualNumber, age) {  
    if (actualNumber > maxNumber){
        return "it's too busy now, come back later"; 
    }   
    if (age < 18){
        return "this is a club for adults";
    }   
        return "come in";
};

console.log(brendaBouncerBot(35, 100, 25)); // its to busy now, come back later
console.log(brendaBouncerBot(100, 35, 25)); // come in
console.log(brendaBouncerBot(35, 100, 15)); // its to busy now, come back later
console.log(brendaBouncerBot(100, 35, 15)); // this is a club for adults

//calculate the average of 5 numbers, preferably as a round number, function produces
const calculateAverage = function(num1, num2, num3, num4, num5){
   return Math.round((num1+num2+num3+num4+num5)/5);
};

console.log(calculateAverage(3, 5, 6, 8, 10));  //6.4, without math.round
console.log(calculateAverage(5, 60, 135, 87, 99)); //77.2, without math.round
console.log(calculateAverage(3, 5, 6, 8, 10));  // 6, with math.round
console.log(calculateAverage(5, 60, 135, 87, 99)); // 77, with math.round
