import { equals } from "./utils.js";

console.assert(equals(getEvenNumbers([10, 3, 6, 12, 20, 5, 9, 7, 11, 40]), [10, 6, 12, 20, 40]), "should return even numbers")
console.assert(equals(getEvenNumbers([3, 5, 9, 7, 11]), []), "should return an empty array")

function getEvenNumbers(numbers) {
    return numbers.filter(function (number) {
        return number % 2 === 0;
    });
}

const stringList = prompt("enter list of numbers");
const numberList = stringList.split(",").map(function (string) {
    return Number(string)
});

alert(getEvenNumbers(numberList));
