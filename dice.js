/** @format */

let dice1 = Math.floor(Math.random() * 6 + 1);
let dice2 = Math.floor(Math.random() * 6 + 1);

let sum = dice1 + dice2;

console.log(dice1);
console.log(dice2);
console.log(`you rolled a ${dice1} and a ${dice2}, which sums to ${sum}`);
