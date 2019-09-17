const firstMark = Number(prompt("Enter first mark"));
const secondMark = Number(prompt("Enter second mark"));
const thirdMark = Number(prompt("Enter third mark"));
const average = (firstMark + secondMark + thirdMark) / 3;
let message = `The average of ${firstMark}, ${secondMark} and ${thirdMark} is ${average.toFixed(2)}. `

if (average >= 5) {
    message += 'Apto';
}
else {
    message += 'No Apto';
}

alert(message);