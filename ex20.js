

console.assert(sumNumbersV4(8) === 36, "should add all numbers up to given number and return the sum")
console.assert(sumNumbers(0) === 0, "should return 0")

function sumNumbers(finalNumber) {
    let sum = 0
    const numbers = [...Array(finalNumber).keys()].map(function (number) {
        return number + 1;
    })
    for (let i = 0; i < numbers.length; i++) {
        sum = numbers[i] + sum;
    }

    return sum;
}


function sumNumbersV2(finalNumber) {
    let sum = 0

    for (let i = 0; i < finalNumber; i++) {
        sum += i + 1;
    }

    return sum;
}

function sumNumbersV3(finalNumber) {
    const numbers = [...Array(finalNumber).keys()].map(function (number) {
        return number + 1;
    })

    return numbers.reduce(function (previous, current) {
        return previous + current
    }, 0)
}

function sumNumbersV4(finalNumber) {
    return range(finalNumber)
        .map(x => x + 1)
        .reduce((previous, current) => previous + current, 0)
}

function range(value) {
    return [...Array(value).keys()]
}