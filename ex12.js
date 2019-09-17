const letter = prompt("Enter a letter").toLowerCase();
const vowelsArray = ["a", "e", "i", "o", "u"];
if (vowelsArray.includes(letter)) {
    alert(`${letter} is a vowel`);
} else {
    alert(`${letter} is a consonant`);
}