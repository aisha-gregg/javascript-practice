import { equals } from "./utils.js";

console.assert(equals(getNaturalNumbers(8), [1, 2, 3, 4, 5, 6, 7, 8]), "Should return list of natural numbers between 1 and 8");

function getNaturalNumbers(lastNumber) {
    const naturalNumbers = []
    for (let i = 1; i <= lastNumber; i++) {
        naturalNumbers.push(i);
    }
    return naturalNumbers;
}

function getNaturalNumbers2(lastNumber) {
    return [...Array(lastNumber).keys()].map(number => number + 1);
}

const lastNumber = prompt("Enter natural number")
alert(getNaturalNumbers(lastNumber));