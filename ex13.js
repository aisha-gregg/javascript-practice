const start = Number(prompt("Enter starting number"));
const finish = Number(prompt("Enter last number"));
const range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let numbers = "";
for (let i = start + 1; i <= finish; i++) {
    numbers = numbers + i + ",";
}

alert(numbers);