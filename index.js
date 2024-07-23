// 1
const celsius = 38;
const farenheit = (celsius * 1.8) + 32;
console.log("Temperature in celsius is", celsius,". And in farenheit it is", farenheit);
// 2
const juneDays = 31;
const juneHours = juneDays * 24;
const juneMins = juneHours * 60;
console.log("In June, there are", juneDays, "days, wich have", juneHours, "hours, wich have", juneMins, "minutes.");
// 3
let playerEnergy = 15;
let playerHealth = 100;
console.log("Player Energy =", playerEnergy,"and Health =", playerHealth, "before enemy attack");
// enemy attack
playerEnergy -= 1;
playerHealth -= 20;
console.log("Player Energy =", playerEnergy,"and Health =", playerHealth, "after enemy attack");
// 4
let sum = 2000;
sum *= 0.9;
console.log("Total sum with 10% discount is", sum, "USD");
// 5
const floatNumber = 27.843265976;
console.log(Math.floor(floatNumber));
// 6
const floatString = "456.80965keogj387873";
console.log(parseFloat(floatString));
// 7
const intString = "67674.33/gdhh33y3fe";
console.log(parseInt(intString));
// 8
const sqrtNumber = 1895818681000000;
console.log(Math.sqrt(sqrtNumber));
// 9
const stringNumber = "224224000";
const normalNumber = 8;
console.log(parseInt(stringNumber));
console.log(toString(normalNumber));
